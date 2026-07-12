import { esc } from '../app.js';

const DOT_COLORS = { red: 'var(--error)', yellow: 'var(--warn)', green: 'var(--success)' };

export function quizStats(app) {
  const s = app.state;
  const entries = Object.keys(s.quizScores || {}).map((id) => ({ id, sc: s.quizScores[id] })).filter((e) => e.sc && e.sc.total);
  if (!entries.length) return { hasData: false };
  const totalPct = entries.reduce((sum, e) => sum + (e.sc.correct / e.sc.total), 0) / entries.length;
  return {
    hasData: true,
    avgPct: Math.round(totalPct * 100),
    taken: entries.length,
    perfect: entries.filter((e) => e.sc.correct === e.sc.total).length,
    review: entries.filter((e) => e.sc.correct / e.sc.total < 0.6).length,
  };
}

function renderQuizPerf(app) {
  const s = app.state;
  const TOPICS = app.data.TOPICS;
  const entries = Object.keys(s.quizScores || {}).map((id) => ({ id, sc: s.quizScores[id] })).filter((e) => e.sc && e.sc.total);
  if (!entries.length) {
    return `<p style="font-size:14px;color:var(--ink2)">No quizzes taken yet — finish a topic in the Library and take its micro-quiz. Your scores and trend will show up here.</p>`;
  }
  const totalPct = entries.reduce((sum, e) => sum + (e.sc.correct / e.sc.total), 0) / entries.length;
  const perfect = entries.filter((e) => e.sc.correct === e.sc.total).length;
  const review = entries.filter((e) => e.sc.correct / e.sc.total < 0.6).length;
  const rows = entries.map((e) => {
    const pct = Math.round((e.sc.correct / e.sc.total) * 100);
    const color = pct >= 80 ? 'var(--success)' : (pct >= 50 ? 'var(--warn)' : 'var(--error)');
    return { title: TOPICS[e.id] ? TOPICS[e.id].title : e.id, pct, label: e.sc.correct + '/' + e.sc.total, color, id: e.id };
  }).sort((a, b) => a.pct - b.pct);
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:14px">
    <div><div style="font-family:var(--display);font-size:28px;font-weight:700">${Math.round(totalPct * 100)}%</div><div style="font-size:12px;color:var(--ink2)">Average score</div></div>
    <div><div style="font-family:var(--display);font-size:28px;font-weight:700">${entries.length}</div><div style="font-size:12px;color:var(--ink2)">Quizzes taken</div></div>
    <div><div style="font-family:var(--display);font-size:28px;font-weight:700">${perfect}</div><div style="font-size:12px;color:var(--ink2)">Perfect scores</div></div>
    <div><div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--warn)">${review}</div><div style="font-size:12px;color:var(--ink2)">To reinforce</div></div>
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px">
    ${rows.map((r) => `<button data-dos-row style="display:flex;align-items:center;gap:12px;text-align:left;padding:8px 10px;border-radius:10px;background:transparent;border:none;cursor:pointer;color:var(--ink)" data-act="${app.act(() => app.openTopic(r.id))}">
      <span style="flex:1;font-size:14px">${esc(r.title)}</span>
      <div style="width:90px;height:6px;border-radius:99px;background:var(--border);overflow:hidden"><div style="height:100%;width:${r.pct}%;background:${r.color}"></div></div>
      <span style="font-size:13px;color:var(--ink2);font-variant-numeric:tabular-nums;width:38px;text-align:right">${r.label}</span>
    </button>`).join('')}
  </div>`;
}

export function renderProgress(app) {
  const s = app.state;
  const domains = app.checklistData.CHECKLIST;
  let totalItems = 0, doneItems = 0;
  const domainsHtml = domains.map((dm) => {
    const done = dm.items.filter((_, i) => s.checklistChecked[dm.id + '-' + i]).length;
    totalItems += dm.items.length; doneItems += done;
    const pct = dm.items.length ? Math.round((done / dm.items.length) * 100) : 0;
    const isOpen = !!s.checklistOpen[dm.id];
    const dotColor = DOT_COLORS[dm.priority] || 'var(--ink2)';
    const itemsHtml = isOpen ? `<div style="padding:8px 20px 16px;display:flex;flex-direction:column;gap:2px">${dm.items.map((text, i) => {
      const key = dm.id + '-' + i;
      const checked = !!s.checklistChecked[key];
      return `<label style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;font-size:14px;line-height:1.5;cursor:pointer">
        <input type="checkbox" ${checked ? 'checked' : ''} data-act="${app.act(() => app.persist({ checklistChecked: Object.assign({}, s.checklistChecked, { [key]: !checked }) }))}" style="width:18px;height:18px;flex:none;margin-top:2px">
        <span>${esc(text)}</span>
      </label>`;
    }).join('')}</div>` : '';
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden">
      <button style="width:100%;display:flex;align-items:center;gap:12px;padding:16px 20px;background:transparent;border:none;cursor:pointer;text-align:left" data-act="${app.act(() => app.setState({ checklistOpen: Object.assign({}, s.checklistOpen, { [dm.id]: !isOpen }) }))}">
        <span style="flex:none;width:10px;height:10px;border-radius:50%;background:${dotColor}"></span>
        <span style="flex:1;font-size:15px;font-weight:600">${dm.n}. ${esc(dm.title)}</span>
        <span style="font-size:13px;color:var(--ink2);font-variant-numeric:tabular-nums">${done}/${dm.items.length}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--ink2)" stroke-width="1.5" style="flex:none;transform:${isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}"><polyline points="4,2 10,7 4,12"></polyline></svg>
      </button>
      <div style="height:4px;background:var(--border)"><div style="height:100%;width:${pct}%;background:${dotColor}"></div></div>
      ${itemsHtml}
    </div>`;
  }).join('');

  const C = 2 * Math.PI * 15;
  const dash = (totalItems ? (doneItems / totalItems) * C : 0).toFixed(1) + ' ' + C.toFixed(1);
  const ORDER = app.data.TOPIC_ORDER;
  const doneTopics = ORDER.filter((id) => s.completed[id]).length;

  return `<div class="dos-page-narrow">
    <div><h1 class="dos-h1">My Progress</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">Book 2’s full 15-domain checklist, priority-coded to your gaps.</p></div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
      <div class="dos-card" style="display:flex;align-items:center;gap:16px">
        <svg width="56" height="56" viewBox="0 0 40 40" style="flex:none;transform:rotate(-90deg)">
          <circle cx="20" cy="20" r="15" fill="none" stroke="var(--border)" stroke-width="4"></circle>
          <circle cx="20" cy="20" r="15" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${dash}"></circle>
        </svg>
        <div><div style="font-size:22px;font-weight:600;font-variant-numeric:tabular-nums">${doneItems} / ${totalItems}</div><div style="font-size:13px;color:var(--ink2)">Checklist items</div></div>
      </div>
      <div class="dos-card"><div style="font-size:22px;font-weight:600;font-variant-numeric:tabular-nums">${s.streak} 🔥</div><div style="font-size:13px;color:var(--ink2)">Day streak</div></div>
      <div class="dos-card"><div style="font-size:22px;font-weight:600;font-variant-numeric:tabular-nums">${doneTopics} / ${ORDER.length}</div><div style="font-size:13px;color:var(--ink2)">Topics complete</div></div>
    </div>

    <div class="dos-callout-accent">
      <div class="dos-callout-label" style="color:var(--accent)">The three-question test</div>
      <p style="font-size:14px;line-height:1.6">${esc(app.checklistData.THREE_QUESTION_TEST)} Checking a box should feel earned.</p>
    </div>

    <div class="dos-card-16">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><span style="font-size:18px">📊</span><span class="dos-eyebrow">Quiz performance</span></div>
      ${renderQuizPerf(app)}
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">${domainsHtml}</div>
  </div>`;
}
