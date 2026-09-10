import { esc, backBtn } from '../app.js';
import { DIAGRAMS } from '../diagrams.js';

function renderBlock(app, cur, b) {
  if (b.t === 'h') return `<h2 style="font-family:var(--serif);font-size:22px;font-weight:600;line-height:1.3">${esc(b.text)}</h2>`;
  if (b.t === 'p') return `<p class="dos-prose" style="font-size:calc(17px * var(--r-font,1));line-height:calc(1.65 * var(--r-lh,1));max-width:var(--r-measure,720px);color:var(--ink)">${esc(b.text)}</p>`;
  if (b.t === 'ul') {
    return `<ul style="list-style:none;display:flex;flex-direction:column;gap:10px">${b.items.map((it) => `<li class="dos-prose" style="display:flex;gap:12px;font-size:calc(16px * var(--r-font,1));line-height:calc(1.6 * var(--r-lh,1));max-width:var(--r-measure,720px)"><span style="flex:none;width:6px;height:6px;border-radius:50%;background:var(--accent);margin-top:9px"></span><span>${esc(it)}</span></li>`).join('')}</ul>`;
  }
  if (b.t === 'table') {
    return `<div class="dos-table-wrap"><table class="dos-table">
      <thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${b.rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  }
  if (b.t === 'cards') {
    return `<div style="display:flex;flex-direction:column;gap:12px">${b.cards.map((c) => `<div class="dos-card">
      <div style="font-size:16px;font-weight:600">${esc(c.name)}</div>
      <p style="font-size:14px;color:var(--ink);margin-top:4px;font-weight:500">${esc(c.one)}</p>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;margin-top:10px">${c.ex.map((e) => `<li style="display:flex;gap:10px;font-size:14px;line-height:1.55;color:var(--ink2)"><span style="flex:none;width:5px;height:5px;border-radius:50%;background:var(--ink2);margin-top:8px"></span><span>${esc(e)}</span></li>`).join('')}</ul>
    </div>`).join('')}</div>`;
  }
  if (b.t === 'diagram') {
    const fn = DIAGRAMS[b.id];
    if (!fn) return '';
    return `<figure class="dos-card" style="display:flex;flex-direction:column;gap:12px">
      ${fn()}
      <figcaption style="font-size:13px;color:var(--ink2);text-align:center">${esc(b.caption)}</figcaption>
    </figure>`;
  }
  return '';
}

function renderQuiz(app, cur) {
  const s = app.state;
  const qs = app.quizDb.buildQuiz(cur.id, app.data.TOPICS, app.data.TOPIC_ORDER);
  const answersKey = cur.id;
  const answers = s.quizAnswers[answersKey] || {};
  const submitted = !!s.quizSubmitted[answersKey];
  const allAnswered = qs.length > 0 && qs.every((_, qi) => answers[qi] !== undefined);

  const qHtml = qs.map((q, qi) => {
    const optsHtml = q.options.map((opt, oi) => {
      const chosen = answers[qi] === oi;
      const isCorrect = oi === q.correctIndex;
      let border = 'var(--border)', bg = 'transparent', color = 'var(--ink)';
      if (submitted) {
        if (isCorrect) { border = 'var(--success)'; bg = 'var(--warn-soft)'; color = 'var(--success)'; }
        else if (chosen) { border = 'var(--error)'; color = 'var(--error)'; }
      } else if (chosen) { border = 'var(--accent)'; bg = 'var(--accent-soft)'; color = 'var(--accent)'; }
      return `<button ${submitted ? 'disabled' : ''} data-act="${app.act(() => {
        if (submitted) return;
        const next = Object.assign({}, s.quizAnswers, { [answersKey]: Object.assign({}, answers, { [qi]: oi }) });
        app.setState({ quizAnswers: next });
      })}" style="text-align:left;padding:10px 14px;border-radius:8px;border:1.5px solid ${border};background:${bg};color:${color};font-size:14px;cursor:pointer">${esc(opt)}</button>`;
    }).join('');
    const explain = submitted ? `<p style="font-size:calc(13px * var(--r-font,1));color:var(--ink2);margin-top:8px;font-style:italic">${(answers[qi] === q.correctIndex ? '✓ Correct — ' : '✗ Not quite — ') + esc(q.explain)}</p>` : '';
    return `<div style="margin-bottom:16px">
      <p class="dos-prose" style="font-size:calc(15px * var(--r-font,1));font-weight:600;margin-bottom:8px">${qi + 1}. ${esc(q.prompt)}</p>
      <div style="display:flex;flex-direction:column;gap:6px">${optsHtml}</div>
      ${explain}
    </div>`;
  }).join('');

  let scoreHtml = '';
  if (submitted) {
    const correct = qs.filter((q, qi) => answers[qi] === q.correctIndex).length;
    const encourage = correct === qs.length ? 'nailed it.' : correct >= qs.length / 2 ? 'good — revisit the ones you missed.' : 'let’s reinforce this one together.';
    scoreHtml = `<p style="font-size:14px;font-weight:600;color:var(--accent)">Score: ${correct} / ${qs.length} — ${encourage}</p>`;
  }
  const submitBtn = (allAnswered && !submitted) ? `<button class="dos-btn-primary" data-act="${app.act(() => {
    const correct = qs.filter((q, qi) => answers[qi] === q.correctIndex).length;
    const quizScores = Object.assign({}, s.quizScores, { [cur.id]: { correct, total: qs.length } });
    let missedTopics = s.missedTopics;
    if (correct < qs.length) missedTopics = Object.assign({}, s.missedTopics, { [cur.id]: (s.missedTopics[cur.id] || 0) + 1 });
    app.persist({ quizSubmitted: Object.assign({}, s.quizSubmitted, { [cur.id]: true }), quizScores, missedTopics });
  })}">Submit answers</button>` : '';

  return `<div class="dos-card" style="background:var(--surface-alt)">
    <div class="dos-eyebrow" style="margin-bottom:10px">Check your recall</div>
    ${qHtml}${submitBtn}${scoreHtml}
  </div>`;
}

function renderTopicPage(app, cur) {
  const s = app.state;
  const route = s.route;
  const TOPICS = app.data.TOPICS, ORDER = app.data.TOPIC_ORDER;
  const idx = ORDER.indexOf(cur.id);
  const prevId = idx > 0 ? ORDER[idx - 1] : null;
  const nextId = idx < ORDER.length - 1 ? ORDER[idx + 1] : null;
  const isDone = !!s.completed[cur.id];
  const isStar = !!s.starred[cur.id];
  const isHighlighted = !!s.topicHighlighted[cur.id];

  const blocksHtml = (cur.blocks || []).map((b) => renderBlock(app, cur, b)).join('');
  const examplesHtml = (cur.examples || []).map((ex) => `<div class="dos-example-card">
    <div class="dos-callout-label" style="color:var(--accent)">${esc(ex.label)}</div>
    <p class="dos-prose" style="font-size:calc(16px * var(--r-font,1));line-height:calc(1.65 * var(--r-lh,1));max-width:var(--r-measure,720px)">${esc(ex.text)}</p>
  </div>`).join('');

  const relatedHtml = (cur.related || []).map((id) => `<button class="dos-chip" data-act="${app.act(() => app.openTopic(id))}">${esc(TOPICS[id].title)}</button>`).join('');

  const noteVal = s.topicNotes[cur.id] || '';
  const weightMap = { light: 300, regular: 400, bold: 600 };
  const rootStyle = `--r-font:${s.readerFontScale}; --r-lh:${s.readerLh}; --r-measure:${s.readerMeasure}px; --r-ls:${s.readerLs}; --r-ws:${s.readerWs}; --r-ps:${s.readerPs}; --r-align:${s.readerAlign}; --r-weight:${weightMap[s.readerWeight] || 400};`;

  return `<article class="dos-reader" data-screen-label="Topic page" style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:24px;${rootStyle}">
    <div class="dos-reader-rail" aria-label="Reading actions">
      <button class="dos-rail-btn${isDone ? ' is-on' : ''}" data-tip="${isDone ? 'Completed' : 'Mark complete'}" data-act="${app.act(() => { const c = Object.assign({}, s.completed); c[cur.id] = !c[cur.id]; app.persist({ completed: c }); })}"><svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4,9.5 7.5,13 14,5"></polyline></svg></button>
      <button class="dos-rail-btn${isStar ? ' is-on' : ''}" data-tip="${isStar ? 'Saved' : 'Save to flashcards'}" data-act="${app.act(() => { const st = Object.assign({}, s.starred); st[cur.id] = !st[cur.id]; app.persist({ starred: st }); })}"><svg width="17" height="17" viewBox="0 0 18 18" fill="${isStar ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6"><polygon points="9,1.8 11.3,6.5 16.5,7.2 12.7,10.9 13.6,16 9,13.6 4.4,16 5.3,10.9 1.5,7.2 6.7,6.5"></polygon></svg></button>
      <button class="dos-rail-btn" data-tip="${s.ttsSpeaking ? 'Stop' : 'Read aloud'}" data-act="${app.act(() => app.toggleTts())}"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7v4h3l4 3.5V3.5L6 7z"></path><path d="M12.5 6.5a4 4 0 0 1 0 5"></path></svg></button>
      <button class="dos-rail-btn" data-tip="Back to top" data-act="${app.act(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4,10 9,5 14,10"></polyline></svg></button>
    </div>
    <div class="dos-topic-progress"><div style="width:${s.readingProgress || 0}%"></div></div>
    ${backBtn(app, `Back to ${route.book ? 'Chapter ' + route.book : 'Chapters'}`, () => app.nav({ sec: 'library', book: route.book || null, topic: null }))}
    <nav aria-label="Breadcrumb" class="dos-breadcrumb">
      <button data-act="${app.act(() => app.nav({ sec: 'library', book: route.book || null, topic: null }))}">${route.book ? 'Chapter ' + route.book : 'Chapters'}</button>
      <span>/</span><span>${esc(cur.title)}</span>
      <span style="flex:1"></span>
      <button style="height:32px;padding:0 12px;border-radius:99px;border:1px solid var(--border);background:var(--surface);color:var(--accent);font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px" data-act="${app.act(() => app.toggleTts())}">
        <svg width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7v4h3l4 3.5V3.5L6 7z"></path><path d="M12.5 6.5a4 4 0 0 1 0 5"></path></svg>
        ${s.ttsSpeaking ? 'Stop reading' : 'Read aloud'}
      </button>
      <button style="height:32px;padding:0 12px;border-radius:99px;border:1px solid ${isHighlighted ? 'var(--accent)' : 'var(--border)'};background:${isHighlighted ? 'var(--accent-soft)' : 'transparent'};color:${isHighlighted ? 'var(--accent)' : 'var(--ink2)'};font-size:12px;font-weight:600;cursor:pointer" data-act="${app.act(() => app.persist({ topicHighlighted: Object.assign({}, s.topicHighlighted, { [cur.id]: !isHighlighted }) }))}">✎ Highlight page</button>
    </nav>

    <header class="dos-reader-head" style="${isHighlighted ? 'background:var(--accent-soft);border-radius:12px;padding:16px;margin:-16px' : ''}">
      <div class="dos-callout-label" style="color:var(--accent)">${esc(cur.bookLabel)}</div>
      <h1 class="dos-reader-title" style="font-family:var(--serif);font-size:33px;font-weight:700;letter-spacing:-0.02em;line-height:1.15">${esc(cur.title)}</h1>
      <p style="font-family:var(--serif);font-size:20px;line-height:1.5;margin-top:12px"><span style="float:left;font-size:52px;line-height:0.78;font-weight:700;padding:4px 6px 0 0;color:var(--accent)">${esc(cur.def.charAt(0))}</span>${esc(cur.def.slice(1))}</p>
    </header>

    <div style="border-top:1px solid var(--border);padding-top:16px">
      <div class="dos-eyebrow" style="margin-bottom:6px">Why it matters</div>
      <p class="dos-prose" style="font-size:calc(17px * var(--r-font,1));line-height:calc(1.6 * var(--r-lh,1));max-width:var(--r-measure,720px);color:var(--ink2);font-style:italic">${esc(cur.why)}</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:20px">${blocksHtml}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">${examplesHtml}</div>

    <div class="dos-callout-warn">
      <div class="dos-callout-label" style="color:var(--warn)">Common mistake</div>
      <p class="dos-prose" style="font-size:calc(16px * var(--r-font,1));line-height:calc(1.65 * var(--r-lh,1));max-width:var(--r-measure,720px)">${esc(cur.mistake)}</p>
    </div>
    <div class="dos-callout-accent">
      <div class="dos-callout-label" style="color:var(--accent)">In interviews</div>
      <p class="dos-prose" style="font-size:calc(16px * var(--r-font,1));line-height:calc(1.65 * var(--r-lh,1));max-width:var(--r-measure,720px)">${esc(cur.interview)}</p>
    </div>

    ${renderQuiz(app, cur)}

    <div>
      <div class="dos-eyebrow" style="margin-bottom:8px">Your notes</div>
      <textarea id="note-${cur.id}" placeholder="Jot a thought, a link to your own project, a question to revisit…" data-act="${app.act((e) => app.persist({ topicNotes: Object.assign({}, s.topicNotes, { [cur.id]: e.target.value }) }))}" style="width:100%;min-height:90px;padding:12px 14px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:calc(14px * var(--r-font,1));resize:vertical">${esc(noteVal)}</textarea>
    </div>

    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;border-top:1px solid var(--border);padding-top:20px">
      <button style="height:44px;padding:0 20px;border-radius:8px;border:1px solid ${isDone ? 'var(--accent)' : 'var(--accent-line)'};background:${isDone ? 'var(--accent)' : 'transparent'};color:${isDone ? 'var(--on-accent)' : 'var(--accent)'};font-size:14px;font-weight:600;cursor:pointer" data-act="${app.act(() => { const completed = Object.assign({}, s.completed); completed[cur.id] = !completed[cur.id]; app.persist({ completed }); })}">${isDone ? '✓ Completed' : 'Mark complete'}</button>
      <button style="height:44px;padding:0 20px;border-radius:8px;border:1px solid var(--border);background:transparent;color:${isStar ? 'var(--accent)' : 'var(--ink2)'};font-size:14px;font-weight:500;cursor:pointer" data-act="${app.act(() => { const starred = Object.assign({}, s.starred); starred[cur.id] = !starred[cur.id]; app.persist({ starred }); })}">${isStar ? 'Saved to flashcards' : 'Save to flashcards'}</button>
    </div>

    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <span style="font-size:13px;color:var(--ink2)">Related:</span>${relatedHtml}
    </div>

    <div style="display:flex;gap:12px;justify-content:space-between;border-top:1px solid var(--border);padding-top:20px">
      ${prevId ? `<button style="min-height:44px;padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--ink);font-size:14px;cursor:pointer;text-align:left" data-act="${app.act(() => app.openTopic(prevId))}"><span style="color:var(--ink2);font-size:12px;display:block">← Previous</span>${esc(TOPICS[prevId].title)}</button>` : '<span></span>'}
      ${nextId ? `<button style="min-height:44px;padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--ink);font-size:14px;cursor:pointer;text-align:right;margin-left:auto" data-act="${app.act(() => app.openTopic(nextId))}"><span style="color:var(--ink2);font-size:12px;display:block">Next →</span>${esc(TOPICS[nextId].title)}</button>` : ''}
    </div>
  </article>`;
}

const DAYS_PER_CHAPTER = 7;

export function conceptNamesForDay(day) {
  return day.tasks.filter((tk) => tk.id.indexOf('read-') === 0).map((tk) => tk.label.replace(/^Learn: /, ''));
}

export function chapterGroups(app) {
  const days = app.planDb.buildDays();
  const groups = [];
  for (let i = 0; i < days.length; i += DAYS_PER_CHAPTER) {
    groups.push({ n: groups.length + 1, days: days.slice(i, i + DAYS_PER_CHAPTER) });
  }
  return groups;
}

export function isReadTask(tk) { return tk.id.indexOf('read-') === 0; }

// A lesson (read) task counts as done when its topic is marked complete in the
// reader — OR when its legacy day-checkbox was ticked. Non-lesson tasks (quiz,
// flashcard, apply) are ticked manually. This keeps "reading" and "marking done"
// as one deliberate action inside the lesson, not an accidental tap on a card.
export function taskDone(app, dayN, tk) {
  const s = app.state;
  if (s.dayChecks['d' + dayN + '-' + tk.id]) return true;
  if (isReadTask(tk)) {
    const tid = app.findTopicByName(tk.label.replace(/^Learn: /, ''));
    if (tid) return !!s.completed[tid];
  }
  return false;
}

export function dayDone(app, day) {
  return day.tasks.every((tk) => taskDone(app, day.n, tk));
}

export function renderChapters(app) {
  const s = app.state;
  const route = s.route;
  const TOPICS = app.data.TOPICS;

  if (route.topic && TOPICS[route.topic]) {
    setTimeout(() => {
      const el = document.querySelector('[data-screen-label="Topic page"]');
      if (!el) return;
      const onScroll = () => {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight * 0.6;
        const scrolled = -rect.top;
        const pct = total > 0 ? Math.max(0, Math.min(100, Math.round((scrolled / total) * 100))) : 0;
        if (pct !== app.state.readingProgress) {
          app.state.readingProgress = pct;
          const bar = el.querySelector('.dos-topic-progress > div');
          if (bar) bar.style.width = pct + '%';
        }
      };
      window.removeEventListener('scroll', app._onTopicScroll || (() => {}));
      app._onTopicScroll = onScroll;
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }, 0);
    return renderTopicPage(app, TOPICS[route.topic]);
  }

  if (route.book) return renderChapterView(app, route.book);
  return renderChaptersHome(app);
}

function renderChapterView(app, chapterNum) {
  const s = app.state;
  const groups = chapterGroups(app);
  const group = groups.find((g) => g.n === chapterNum);
  if (!group) return renderChaptersHome(app);
  const firstDay = group.days[0], lastDay = group.days[group.days.length - 1];

  const daysHtml = group.days.map((day) => {
    // Lessons: prominent rows that OPEN the reader. Marking done happens inside
    // the lesson, so a tap here reads — it never toggles completion by accident.
    const lessonRows = [];
    const practiceRows = [];
    day.tasks.forEach((tk) => {
      const key = 'd' + day.n + '-' + tk.id;
      if (isReadTask(tk)) {
        const name = tk.label.replace(/^Learn: /, '');
        const tid = app.findTopicByName(name);
        const done = taskDone(app, day.n, tk);
        if (tid) {
          lessonRows.push(`<button class="dos-lesson-row${done ? ' is-done' : ''}" data-act="${app.act(() => app.nav({ sec: 'library', book: chapterNum, topic: tid }, { lastTopicId: tid }))}">
            <span class="dos-lesson-check" aria-hidden="true">${done ? '✓' : ''}</span>
            <span class="dos-lesson-name">${esc(name)}</span>
            <span class="dos-lesson-go">${done ? 'Read again' : 'Read'} →</span>
          </button>`);
          return;
        }
      }
      // Non-lesson task (quiz / flashcard / apply) or a lesson without its own page:
      // a deliberate checkbox, visually separated from the reading entry points.
      const checked = !!s.dayChecks[key];
      practiceRows.push(`<label class="dos-task-check"><input type="checkbox" ${checked ? 'checked' : ''} data-act="${app.act(() => app.persist({ dayChecks: Object.assign({}, s.dayChecks, { [key]: !checked }) }))}"><span>${esc(tk.label)}</span></label>`);
    });
    const complete = dayDone(app, day);
    return `<div class="dos-card" style="border-color:${complete ? 'var(--success)' : 'var(--card-brd)'}">
      <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">
        <span class="dos-eyebrow">Day ${day.n}</span>
        <span style="font-size:11px;color:var(--ink2)">${esc(day.phase)}</span>
        ${complete ? '<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:var(--mint);color:var(--success)">✓ Complete</span>' : ''}
        <span style="font-size:12px;color:var(--ink2);margin-left:auto">~${day.estMins} min</span>
      </div>
      <h2 style="font-family:var(--serif);font-size:19px;font-weight:600;margin-top:6px">${esc(day.theme)}</h2>
      ${lessonRows.length ? `<div class="dos-lesson-list">${lessonRows.join('')}</div>` : ''}
      ${practiceRows.length ? `<div class="dos-task-list"><div class="dos-eyebrow" style="font-size:10.5px;margin-bottom:2px">Practice &amp; recall</div>${practiceRows.join('')}</div>` : ''}
    </div>`;
  }).join('');

  return `<div class="dos-page-narrow">
    ${backBtn(app, 'Back to Chapters', () => app.nav({ sec: 'library', book: null, topic: null }))}
    <nav class="dos-breadcrumb">
      <button data-act="${app.act(() => app.nav({ sec: 'library', book: null, topic: null }))}">Chapters</button>
      <span>/</span><span>Chapter ${chapterNum}</span>
    </nav>
    <div class="dos-sticky-head">
      <h1 class="dos-h1">Chapter ${chapterNum}</h1>
      <p style="color:var(--ink2);font-size:15px;margin-top:6px">Days ${firstDay.n}–${lastDay.n} · ${esc(firstDay.phase)}${firstDay.phase !== lastDay.phase ? ' → ' + esc(lastDay.phase) : ''}</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">${daysHtml}</div>
  </div>`;
}

function renderChaptersHome(app) {
  const groups = chapterGroups(app);
  const totalDays = groups.reduce((n, g) => n + g.days.length, 0);
  const totalDone = groups.reduce((n, g) => n + g.days.filter((d) => dayDone(app, d)).length, 0);
  const C = 2 * Math.PI * 15; // progress-ring circumference
  const cards = groups.map((g) => {
    const firstDay = g.days[0], lastDay = g.days[g.days.length - 1];
    const doneDays = g.days.filter((d) => dayDone(app, d)).length;
    const pct = Math.round((doneDays / g.days.length) * 100);
    const conceptCount = g.days.reduce((sum, d) => sum + conceptNamesForDay(d).length, 0);
    const complete = pct === 100;
    const dash = (pct / 100 * C).toFixed(1) + ' ' + C.toFixed(1);
    return `<button data-dos-cardlink class="dos-chapter-card${complete ? ' is-done' : ''}" data-act="${app.act(() => app.nav({ sec: 'library', book: g.n, topic: null }))}">
      <div class="dos-chapter-top">
        <span class="dos-chapter-num">${complete ? '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="4,9.5 7.5,13 14,5"></polyline></svg>' : g.n}</span>
        <span class="dos-chapter-ring" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" style="transform:rotate(-90deg)">
            <circle cx="20" cy="20" r="15" fill="none" stroke="var(--surface-alt)" stroke-width="3.5"></circle>
            <circle cx="20" cy="20" r="15" fill="none" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="${dash}"></circle>
          </svg>
          <span class="dos-chapter-pct">${pct}%</span>
        </span>
      </div>
      <div class="dos-eyebrow" style="color:var(--accent);margin-top:16px">Days ${firstDay.n}–${lastDay.n}</div>
      <h2 class="dos-chapter-title">${esc(firstDay.phase)}</h2>
      <div class="dos-chapter-meta">${conceptCount} concepts across ${g.days.length} days</div>
      <div class="dos-chapter-foot"><span>${doneDays} of ${g.days.length} days complete</span><span class="dos-chapter-arrow">→</span></div>
    </button>`;
  }).join('');
  return `<div class="dos-page">
    <div class="dos-sticky-head"><h1 class="dos-h1">Chapters</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">${groups.length} chapters · ${totalDone} of ${totalDays} days complete. Each chapter is a focused week — open one to begin.</p></div>
    <div class="dos-grid-cards">${cards}</div>
  </div>`;
}
