import { esc } from '../app.js';
import { quizStats } from './progress.js';

const DYK = [
  'Users find about 85% of usability problems with just 5 test participants — research doesn’t need a big budget.',
  'The Doherty Threshold says a response under 400ms keeps users in flow; past that, show feedback.',
  'Minimum touch targets are 44×44pt on iOS and 48×48dp on Android — smaller and error rates climb.',
  'A well-named design token survives a full rebrand as a one-line change to a single primitive value.',
  'Peak-End Rule: people judge an experience by its most intense moment and its ending, not the average.',
  'Miller’s Law: working memory holds ~4–7 chunks — which is why a 14-field form feels shorter in 4 steps.',
  'Jakob’s Law: users spend most of their time on other apps, so they expect yours to work the same way.',
];
const QUOTES = [
  'Seniority is the scope of ambiguity you can absorb — not the years on your résumé.',
  'Beautiful work that can’t defend its trade-offs reads as junior. Name the trade-off, always.',
  'The best answer in a whiteboard is “here’s how I’d measure success and what I’d test first.”',
  'Constraints aren’t the enemy of creativity — they’re the material of it.',
  'Design reduces the risk of building the wrong thing and the friction of using the right one.',
  'Systems are how your vision survives contact with 40 engineers and 12 releases.',
];

function badgeDefs(app) {
  const s = app.state;
  const done = Object.values(s.completed || {}).filter(Boolean).length;
  const quizzesTaken = Object.keys(s.quizScores || {}).length;
  const quizEntries = Object.values(s.quizScores || {}).filter((x) => x && x.total);
  const avgQuiz = quizEntries.length ? quizEntries.reduce((a, e) => a + e.correct / e.total, 0) / quizEntries.length : 0;
  const cardsGraded = Object.keys(s.cardSchedule || {}).length;
  const questionsPracticed = Object.values(s.igPracticed || {}).filter(Boolean).length;
  const days = app.planDb.buildDays();
  const daysComplete = days.filter((d) => d.tasks.every((tk) => s.dayChecks['d' + d.n + '-' + tk.id])).length;
  return [
    { icon: '🌱', title: 'First Steps', desc: 'Complete your first topic', val: done, goal: 1 },
    { icon: '📚', title: 'Curious Mind', desc: 'Complete 5 topics', val: done, goal: 5 },
    { icon: '🎓', title: 'Scholar', desc: 'Complete 15 topics', val: done, goal: 15 },
    { icon: '✏️', title: 'Quiz Taker', desc: 'Take your first quiz', val: quizzesTaken, goal: 1 },
    { icon: '🧠', title: 'Sharp', desc: 'Average 80%+ across 3+ quizzes', val: (quizzesTaken >= 3 && avgQuiz >= 0.8) ? 1 : 0, goal: 1 },
    { icon: '🔥', title: 'On Fire', desc: 'Reach a 3-day streak', val: s.streak, goal: 3 },
    { icon: '⚡', title: 'Committed', desc: 'Reach a 7-day streak', val: s.streak, goal: 7 },
    { icon: '🃏', title: 'Card Shark', desc: 'Grade 20 flashcards', val: cardsGraded, goal: 20 },
    { icon: '🥊', title: 'Interviewer', desc: 'Practice 10 questions', val: questionsPracticed, goal: 10 },
    { icon: '🗓️', title: 'Planner', desc: 'Complete a full plan-day', val: daysComplete, goal: 1 },
  ];
}

function renderFocus(app) {
  const s = app.state;
  const days = app.planDb.buildDays();
  const doneOf = (d) => d.tasks.every((tk) => s.dayChecks['d' + d.n + '-' + tk.id]);
  const doneCount = days.filter(doneOf).length;
  const planPct = days.length ? Math.round((doneCount / days.length) * 100) : 0;
  const focus = days.find((d) => !doneOf(d)) || days[days.length - 1];
  return { planPct, focus };
}

export function renderDashboard(app) {
  const s = app.state;
  const TOPICS = app.data.TOPICS, ORDER = app.data.TOPIC_ORDER;
  const total = ORDER.length;
  const done = ORDER.filter((id) => s.completed[id]).length;
  const dueCards = app.dueCardsToday();
  const questionsPracticedCount = Object.values(s.igPracticed).filter(Boolean).length;

  const { planPct, focus } = renderFocus(app);
  const focusTasksHtml = focus ? focus.tasks.map((tk) => {
    const key = 'd' + focus.n + '-' + tk.id;
    const checked = !!s.dayChecks[key];
    return `<label style="display:flex;align-items:flex-start;gap:10px;padding:7px 0;font-size:14px;line-height:1.5;cursor:pointer">
      <input type="checkbox" ${checked ? 'checked' : ''} data-act="${app.act(() => app.persist({ dayChecks: Object.assign({}, s.dayChecks, { [key]: !checked }) }))}" style="width:18px;height:18px;flex:none;margin-top:2px">
      <span style="color:var(--ink)">${esc(tk.label)}</span>
    </label>`;
  }).join('') : '';

  const dayIdx = Math.floor(Date.now() / 86400000);
  const law = app.data.LAWS[dayIdx % app.data.LAWS.length];
  const last = s.lastTopicId ? TOPICS[s.lastTopicId] : null;

  const log = s.studyLog || [];
  const todayStr = new Date().toISOString().slice(0, 10);
  const streakDots = [];
  for (let i = 6; i >= 0; i--) {
    const dd = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    streakDots.push(log.indexOf(dd) !== -1 ? 'var(--warn)' : 'rgba(0,0,0,.08)');
  }
  const streakMsg = s.streak >= 3 ? 'You’re building real momentum — keep it going.' : (s.streak > 0 ? 'Nice start. Any activity counts.' : 'Open a topic or a flashcard to start a streak.');

  const recs = [];
  if (dueCards > 0) recs.push({ icon: '🃏', title: 'Review ' + dueCards + ' due flashcards', sub: 'Active recall keeps it stuck', go: () => app.goSection('cards') });
  recs.push({ icon: '📝', title: 'Take a topic quiz', sub: 'Test your recall in the Library', go: () => app.goSection('library') });
  recs.push({ icon: '🥊', title: 'Drill an interview question', sub: 'Two-minute timed practice', go: () => { app.state.gymTab = 'drill'; app.goSection('gym'); } });
  if (Object.keys(s.missedTopics || {}).length) recs.push({ icon: '🎯', title: 'Reinforce missed concepts', sub: Object.keys(s.missedTopics).length + ' to revisit', go: () => app.goSection('cards') });
  const recsHtml = recs.map((rc) => `<button data-dos-row data-act="${app.act(rc.go)}" style="display:flex;align-items:center;gap:12px;text-align:left;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--ink);cursor:pointer">
    <span style="width:34px;height:34px;flex:none;border-radius:10px;background:var(--accent-soft);display:flex;align-items:center;justify-content:center;font-size:16px">${rc.icon}</span>
    <span style="flex:1"><span style="display:block;font-size:14px;font-weight:600">${esc(rc.title)}</span><span style="font-size:12px;color:var(--ink2)">${esc(rc.sub)}</span></span>
    <span style="color:var(--accent);font-size:16px">→</span>
  </button>`).join('');

  const now = new Date();
  const y = now.getFullYear(), mo = now.getMonth();
  const first = new Date(y, mo, 1).getDay();
  const daysIn = new Date(y, mo + 1, 0).getDate();
  let calCells = '';
  for (let i = 0; i < first; i++) calCells += `<div></div>`;
  for (let dnum = 1; dnum <= daysIn; dnum++) {
    const ds = new Date(y, mo, dnum).toISOString().slice(0, 10);
    const studied = log.indexOf(ds) !== -1;
    const isToday = ds === todayStr;
    const bg = studied ? 'var(--accent)' : 'var(--surface-alt)';
    const color = studied ? 'var(--on-accent)' : 'var(--ink2)';
    const weight = isToday ? '700' : '500';
    const border = isToday && !studied ? '1.5px solid var(--accent)' : 'none';
    calCells += `<div style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:8px;background:${bg};color:${color};font-weight:${weight};border:${border}">${dnum}</div>`;
  }
  const activeThisMonth = log.filter((dx) => dx.slice(0, 7) === todayStr.slice(0, 7)).length;

  const badges = badgeDefs(app).map((b) => {
    const earned = b.val >= b.goal;
    const pct = Math.min(100, Math.round((b.val / b.goal) * 100));
    return `<div style="border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:6px;opacity:${earned ? '1' : '.62'};background:${earned ? 'var(--mint)' : 'var(--surface)'}">
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:22px;filter:${earned ? 'none' : 'grayscale(1)'}">${b.icon}</span>
        ${earned ? '<span style="font-size:11px;font-weight:600;color:var(--success)">✓ Earned</span>' : ''}
      </div>
      <div style="font-size:13px;font-weight:600">${esc(b.title)}</div>
      <div style="font-size:12px;color:var(--ink2);line-height:1.4">${esc(b.desc)}</div>
      ${!earned ? `<div style="height:5px;border-radius:99px;background:var(--border);overflow:hidden;margin-top:2px"><div style="height:100%;width:${pct}%;background:var(--accent)"></div></div>` : ''}
    </div>`;
  }).join('');
  const badgesEarned = badgeDefs(app).filter((b) => b.val >= b.goal).length;
  const qz = quizStats(app);

  return `<div class="dos-page">
    <div style="display:flex;flex-wrap:wrap;align-items:flex-end;gap:16px;justify-content:space-between">
      <div>
        <h1 class="dos-h1-lg">Overview</h1>
        <p style="color:var(--ink2);font-size:15px;margin-top:6px">You’re ${planPct}% through your plan · ${esc(focus ? focus.phase : '')}</p>
      </div>
      <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:var(--ink2)">
        Start date
        <input type="date" value="${esc(s.startDate || '')}" data-act="${app.act((e) => app.persist({ startDate: e.target.value || null }))}" style="height:40px;padding:0 12px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:14px">
      </label>
    </div>

    <div class="dos-grid-stats">
      <div class="stat-tile">
        <span class="ic"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M4 3.5h10v11l-5-2.5-5 2.5z"></path></svg></span>
        <div><div class="num">${done}<span style="color:var(--ink2);font-size:15px;font-weight:500"> / ${total}</span></div><div class="lbl">Topics completed</div></div>
      </div>
      <button class="stat-tile clickable" data-act="${app.act(() => app.goSection('cards'))}">
        <span class="ic"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="4.5" y="2.5" width="11" height="9" rx="1.5"></rect><rect x="2.5" y="6.5" width="11" height="9" rx="1.5"></rect></svg></span>
        <div><div class="num">${dueCards}</div><div class="lbl">Flashcards due today</div></div>
      </button>
      <button class="stat-tile clickable" data-act="${app.act(() => app.goSection('gym'))}">
        <span class="ic"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="9" cy="9" r="6.5"></circle><circle cx="9" cy="9" r="2.5"></circle></svg></span>
        <div><div class="num">${questionsPracticedCount}<span style="color:var(--ink2);font-size:15px;font-weight:500"> / 148</span></div><div class="lbl">Questions practiced</div></div>
      </button>
    </div>

    <div class="dos-grid-2">
      <div class="dos-card" style="display:flex;flex-direction:column;gap:12px">
        <div class="dos-eyebrow" style="color:var(--accent)">Today’s focus · Day ${focus ? focus.n : 1} · ${esc(focus ? focus.phase : '')}</div>
        <h2 style="font-family:var(--serif);font-size:25px;font-weight:600;line-height:1.25">${esc(focus ? focus.theme : 'All caught up — nice work!')}</h2>
        <div style="display:flex;flex-direction:column;gap:2px">${focusTasksHtml}</div>
        <button class="dos-btn-soft" style="align-self:flex-start" data-act="${app.act(() => app.goSection('library'))}">Open Chapters →</button>
      </div>
      <div class="dos-card" style="display:flex;flex-direction:column;gap:8px">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"><polygon points="9,1.5 16.5,9 9,16.5 1.5,9"></polygon></svg>
        <div class="dos-eyebrow">Law of the day</div>
        <div style="font-family:var(--serif);font-size:20px;font-weight:600;line-height:1.3">${esc(law.name)}</div>
        <p style="font-size:14px;font-weight:500">${esc(law.one)}</p>
        <p style="font-size:14px;color:var(--ink2)">${esc(law.ex)}</p>
        <div style="margin-top:auto;padding-top:8px"><button style="height:36px;padding:0 2px;border:none;background:transparent;color:var(--accent);font-size:13px;font-weight:600;cursor:pointer" data-act="${app.act(() => app.openTopic('t10'))}">All UX laws →</button></div>
      </div>
    </div>

    <div class="dos-card" style="display:flex;flex-wrap:wrap;align-items:center;gap:16px">
      <svg width="16" height="20" viewBox="0 0 14 18" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4" style="flex:none"><path d="M1.5 1.5h11v15l-5.5-3.5-5.5 3.5z"></path></svg>
      <div style="flex:1;min-width:200px">
        <div class="dos-eyebrow">Continue where you left off</div>
        ${last ? `<div style="font-family:var(--serif);font-size:20px;font-weight:600;line-height:1.3;margin-top:4px">${esc(last.title)}</div><div style="font-size:13px;color:var(--ink2)">${esc(last.bookLabel)}</div>`
          : `<div style="font-family:var(--serif);font-size:20px;font-weight:600;line-height:1.3;margin-top:4px">Start with the Fundamentals Primer</div><div style="font-size:13px;color:var(--ink2)">The Discipline Map — the definitions to use in interviews.</div>`}
      </div>
      <button class="dos-btn-primary" data-act="${app.act(() => last ? app.openTopic(s.lastTopicId) : app.openTopic('t01'))}">${last ? 'Resume →' : 'Begin →'}</button>
    </div>

    <div class="dos-grid-3-auto">
      <div class="dos-card-16" style="background:var(--peach)">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:22px">🔥</span><span class="dos-eyebrow" style="color:var(--warn)">Streak</span></div>
        <div style="font-family:var(--display);font-size:31px;font-weight:700;margin-top:6px">${s.streak} <span style="font-size:16px;color:var(--ink2);font-weight:500">days</span></div>
        <div style="display:flex;gap:5px;margin-top:10px">${streakDots.map((bg) => `<div style="flex:1;height:8px;border-radius:99px;background:${bg}"></div>`).join('')}</div>
        <p style="font-size:13px;color:var(--ink2);margin-top:8px">${streakMsg}</p>
      </div>
      <div class="dos-card-16" style="background:var(--lav)">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">💡</span><span class="dos-eyebrow" style="color:var(--accent-2)">Did you know</span></div>
        <p style="font-size:15px;line-height:1.55;margin-top:8px">${esc(DYK[dayIdx % DYK.length])}</p>
      </div>
      <div class="dos-card-16" style="background:var(--mint)">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">✦</span><span class="dos-eyebrow" style="color:var(--success)">Insight</span></div>
        <p style="font-size:15px;line-height:1.55;margin-top:8px;font-style:italic">${esc(QUOTES[dayIdx % QUOTES.length])}</p>
      </div>
    </div>

    <div class="dos-grid-2-eq">
      <div class="dos-card-16">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:18px">⚡</span><span class="dos-eyebrow">Recommended next</span></div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">${recsHtml}</div>
      </div>
      <div class="dos-card-16">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:8px"><span style="font-size:18px">📅</span><span class="dos-eyebrow">${now.toLocaleString('default', { month: 'long', year: 'numeric' })}</span></div>
          <span style="font-size:12px;color:var(--ink2)">${activeThisMonth} active days</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:12px">
          ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((wd) => `<div style="text-align:center;font-size:10px;color:var(--ink2);font-weight:600">${wd}</div>`).join('')}
          ${calCells}
        </div>
        <div style="display:flex;gap:14px;margin-top:12px;font-size:11px;color:var(--ink2)">
          <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:10px;border-radius:3px;background:var(--accent)"></span>Studied</span>
          <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:10px;border-radius:3px;border:1.5px solid var(--accent)"></span>Today</span>
        </div>
      </div>
    </div>

    <div class="dos-card-16">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:18px">📊</span><span class="dos-eyebrow">Quiz performance</span></div>
        <button style="background:none;border:none;color:var(--accent);font-size:13px;font-weight:600;cursor:pointer" data-act="${app.act(() => app.goSection('progress'))}">Full history →</button>
      </div>
      ${qz.hasData ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:14px">
        <div><div style="font-family:var(--display);font-size:26px;font-weight:700">${qz.avgPct}%</div><div style="font-size:12px;color:var(--ink2)">Average score</div></div>
        <div><div style="font-family:var(--display);font-size:26px;font-weight:700">${qz.taken}</div><div style="font-size:12px;color:var(--ink2)">Quizzes taken</div></div>
        <div><div style="font-family:var(--display);font-size:26px;font-weight:700">${qz.perfect}</div><div style="font-size:12px;color:var(--ink2)">Perfect scores</div></div>
        <div><div style="font-family:var(--display);font-size:26px;font-weight:700;color:var(--warn)">${qz.review}</div><div style="font-size:12px;color:var(--ink2)">To reinforce</div></div>
      </div>` : `<p style="font-size:14px;color:var(--ink2)">No quizzes taken yet — finish a topic in Chapters and take its micro-quiz. Your scores and trend will show up here.</p>`}
    </div>

    <div class="dos-card-16">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:8px"><span style="font-size:18px">🏆</span><span class="dos-eyebrow">Achievements</span></div>
        <span style="font-size:12px;color:var(--ink2)">${badgesEarned} of 10 earned</span>
      </div>
      <div class="dos-grid-badges">${badges}</div>
    </div>
  </div>`;
}
