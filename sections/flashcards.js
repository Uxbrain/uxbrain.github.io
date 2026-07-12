import { esc } from '../app.js';

export function renderFlashcards(app) {
  const s = app.state;
  const decksRaw = app.decksData || [];

  if (!s.deckId) {
    const decksHtml = decksRaw.map((dk) => {
      const dueCount = dk.cards.filter((c) => app.cardDueInfo(c.id).due).length;
      const scheduledCount = dk.cards.filter((c) => !!s.cardSchedule[c.id]).length;
      const pct = dk.cards.length ? Math.round((scheduledCount / dk.cards.length) * 100) : 0;
      const mono = dk.title.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
      return `<button data-dos-cardlink data-act="${app.act(() => app.setState({ deckId: dk.id, cardFlipped: false }))}" style="text-align:left;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:var(--pad-card);cursor:pointer;color:var(--ink);display:flex;flex-direction:column;gap:8px">
        <div style="width:36px;height:36px;border-radius:50%;border:1.5px solid var(--accent-line);background:var(--accent-soft);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:13px;font-weight:700;color:var(--accent)">${mono}</div>
        <div style="font-family:var(--serif);font-size:20px;font-weight:600;margin-top:2px">${esc(dk.title)}</div>
        <div style="font-size:13px;color:var(--ink2)">${esc(dk.sub)}</div>
        <div class="dos-progress" style="height:6px;margin-top:6px"><div style="width:${pct}%"></div></div>
        <div style="font-size:12px;color:var(--ink2);font-variant-numeric:tabular-nums">${dueCount} due · ${dk.cards.length} cards</div>
      </button>`;
    }).join('');
    return `<div class="dos-page">
      <div><h1 class="dos-h1">Flashcards</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">Seven decks from the book’s own one-liners. Again → next session · Hard → 1 day · Good → 3 days · Easy → 7 days.</p></div>
      <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ink2)">
        <input type="checkbox" ${s.starredDecksOnly ? 'checked' : ''} data-act="${app.act(() => app.persist({ starredDecksOnly: !s.starredDecksOnly }))}" style="width:18px;height:18px">
        Starred only
      </label>
      <div class="dos-grid-cards-sm">${decksHtml}</div>
    </div>`;
  }

  const curDeck = decksRaw.find((dk) => dk.id === s.deckId);
  if (!curDeck) return '';
  if (!s.studyAheadDecks) s.studyAheadDecks = {};
  const dueCards = s.studyAheadDecks[curDeck.id] ? curDeck.cards : curDeck.cards.filter((c) => app.cardDueInfo(c.id).due);
  const idx = dueCards.length ? (s.cardIndexByDeck[curDeck.id] || 0) % dueCards.length : 0;
  const card = dueCards[idx];

  const gradeAndAdvance = (grade) => {
    if (!card) return;
    app.gradeCard(card.id, grade);
    const cur = s.cardIndexByDeck[curDeck.id] || 0;
    app.setState({ cardIndexByDeck: Object.assign({}, s.cardIndexByDeck, { [curDeck.id]: cur + 1 }), cardFlipped: false });
  };

  let body;
  if (dueCards.length === 0) {
    body = `<div style="text-align:center;padding:48px 24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;width:100%">
      <div style="font-family:var(--serif);font-size:22px;font-weight:600">All caught up</div>
      <p style="color:var(--ink2);font-size:14px;margin-top:8px">All caught up — check back tomorrow, or study ahead now.</p>
      <button class="dos-btn-outline" style="margin-top:16px;color:var(--accent)" data-act="${app.act(() => app.setState({ cardIndexByDeck: Object.assign({}, s.cardIndexByDeck, { [curDeck.id]: 0 }), cardFlipped: false, studyAheadDecks: Object.assign({}, s.studyAheadDecks, { [curDeck.id]: true }) }))}">Study ahead anyway</button>
    </div>`;
  } else if (card) {
    const gradeBtns = [
      ['Again', 'again', 'var(--error)'], ['Hard', 'hard', 'var(--warn)'], ['Good', 'good', 'var(--accent)'], ['Easy', 'easy', 'var(--success)'],
    ].map(([label, key, color]) => `<button style="border-color:${color};color:${color}" data-act="${app.act(() => gradeAndAdvance(key))}">${label}</button>`).join('');
    body = `<button class="dos-flip-card" data-act="${app.act(() => app.setState({ cardFlipped: !s.cardFlipped }))}">
      <div>
        <div class="dos-eyebrow" style="margin-bottom:14px">${s.cardFlipped ? 'Answer' : 'Prompt'}</div>
        <div style="font-family:var(--serif);font-size:22px;font-weight:600;line-height:1.4">${esc(card.front)}</div>
        ${s.cardFlipped ? `<div style="width:32px;height:1px;background:var(--border);margin:16px auto"></div><div style="font-size:15px;line-height:1.6;color:var(--ink2)">${esc(card.back)}</div>` : ''}
      </div>
    </button>
    ${s.cardFlipped ? `<div class="dos-grade-grid">${gradeBtns}</div>` : `<p style="font-size:13px;color:var(--ink2)">Tap the card or press space to flip.</p>`}`;
  } else body = '';

  return `<div style="max-width:560px;margin:0 auto;display:flex;flex-direction:column;gap:20px;align-items:center">
    <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
      <button style="background:none;border:none;color:var(--accent);font-size:13px;font-weight:500;cursor:pointer" data-act="${app.act(() => app.setState({ deckId: null }))}">← Decks</button>
      <span style="font-size:13px;color:var(--ink2);font-variant-numeric:tabular-nums">${dueCards.length ? idx + 1 : 0} / ${dueCards.length}</span>
    </div>
    ${body}
  </div>`;
}
