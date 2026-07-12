import { esc } from '../app.js';

const TABS = [['bank', 'Question Bank'], ['drill', 'Drill Mode'], ['critique', 'App Critique'], ['whiteboard', 'Whiteboard'], ['rubrics', 'Rubrics'], ['anchors', 'Anchor Stories'], ['portfolio', 'Portfolio Builder']];
const WB_CRITERIA_LABELS = ['Framing', 'User specificity', 'Prioritization', 'Flows', 'Metrics', 'Trade-offs'];

function renderTabs(app) {
  const s = app.state;
  return `<div role="tablist" style="display:flex;gap:4px;overflow:auto;border-bottom:1px solid var(--border);padding-bottom:0">
    ${TABS.map(([id, label]) => `<button role="tab" style="white-space:nowrap;padding:10px 14px;background:transparent;border:none;border-bottom:2px solid ${s.gymTab === id ? 'var(--accent)' : 'transparent'};color:${s.gymTab === id ? 'var(--accent)' : 'var(--ink2)'};font-size:14px;font-weight:600;cursor:pointer" data-act="${app.act(() => app.setState({ gymTab: id }))}">${label}</button>`).join('')}
  </div>`;
}

function renderBank(app) {
  const s = app.state;
  const IG = app.ig;
  let bankQ = IG.QUESTIONS;
  if (s.bankSection !== 'all') bankQ = bankQ.filter((q) => q.s === s.bankSection);
  if (s.bankStarOnly) bankQ = bankQ.filter((q) => s.igStarred[q.n]);
  const options = IG.IG_SECTIONS.map((sec) => `<option value="${sec.id}" ${s.bankSection === sec.id ? 'selected' : ''}>${esc(sec.title)}</option>`).join('');
  const rows = bankQ.slice(0, 40).map((q) => {
    const revealed = !!s.igRevealed[q.n];
    const starred = !!s.igStarred[q.n];
    const practiced = !!s.igPracticed[q.n];
    return `<div class="dos-card">
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
        <div style="font-size:15px;font-weight:600;line-height:1.4">${q.n}. ${esc(q.q)}</div>
        <button aria-label="Star" style="background:none;border:none;font-size:18px;cursor:pointer;color:${starred ? 'var(--accent)' : 'var(--border)'};flex:none" data-act="${app.act(() => app.persist({ igStarred: Object.assign({}, s.igStarred, { [q.n]: !starred }) }))}">★</button>
      </div>
      ${revealed ? `<p style="font-size:14px;color:var(--ink2);line-height:1.6;margin-top:10px">${esc(q.a)}</p>` : ''}
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:12px">
        <button class="dos-pill-btn" style="background:var(--accent-soft);border-color:var(--accent-line)" data-act="${app.act(() => app.setState({ igRevealed: Object.assign({}, s.igRevealed, { [q.n]: !revealed }) }))}">${revealed ? 'Hide answer' : 'Reveal'}</button>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--ink2)"><input type="checkbox" ${practiced ? 'checked' : ''} data-act="${app.act(() => app.persist({ igPracticed: Object.assign({}, s.igPracticed, { [q.n]: !practiced }) }))}">Practiced</label>
      </div>
    </div>`;
  }).join('');
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <select style="height:40px;padding:0 10px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:13px" data-act="${app.act((e) => app.setState({ bankSection: e.target.value }))}">
        <option value="all" ${s.bankSection === 'all' ? 'selected' : ''}>All sections</option>${options}
      </select>
      <label style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--ink2)"><input type="checkbox" ${s.bankStarOnly ? 'checked' : ''} data-act="${app.act(() => app.setState({ bankStarOnly: !s.bankStarOnly }))}">★ starred only</label>
      <span style="font-size:13px;color:var(--ink2);margin-left:auto">${bankQ.length} questions</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px">${rows}</div>
  </div>`;
}

function renderDrill(app) {
  const s = app.state;
  const IG = app.ig;
  const drillPool = IG.QUESTIONS.filter((q) => s.igStarred[q.n] || !s.igPracticed[q.n]);
  const list = drillPool.length ? drillPool : IG.QUESTIONS;
  const q = list[s.drillQIndex % list.length];
  const sectionTitle = q ? (IG.IG_SECTIONS.find((x) => x.id === q.s) || {}).title || '' : '';
  return `<div style="max-width:520px;margin:0 auto;width:100%;display:flex;flex-direction:column;gap:16px;align-items:center">
    <div style="font-size:39px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--accent)">${app.fmtTime(s.drillSeconds)}</div>
    <div class="dos-card" style="width:100%;text-align:center">
      <div class="dos-eyebrow">${esc(sectionTitle)}</div>
      <div style="font-family:var(--serif);font-size:20px;font-weight:600;margin-top:8px;line-height:1.4">${esc(q ? q.q : '')}</div>
      ${s.drillRevealed ? `<p style="font-size:14px;color:var(--ink2);line-height:1.6;margin-top:14px;text-align:left">${esc(q ? q.a : '')}</p>` : ''}
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
      <button class="dos-btn-primary" data-act="${app.act(() => app.setState({ drillRunning: !s.drillRunning, drillSeconds: s.drillRunning ? s.drillSeconds : (s.drillSeconds || 120) }))}">${s.drillRunning ? 'Pause' : 'Start 2:00'}</button>
      <button class="dos-btn-outline" data-act="${app.act(() => app.setState({ drillRevealed: true }))}">Reveal</button>
      <button class="dos-btn-outline" data-act="${app.act(() => app.setState({ drillQIndex: s.drillQIndex + 1, drillSeconds: 120, drillRunning: false, drillRevealed: false }))}">Next question →</button>
    </div>
  </div>`;
}

function renderCritique(app) {
  const s = app.state;
  const IG = app.ig;
  const phases = IG.CRITIQUE_FRAMEWORK;
  const cur = phases[s.critiquePhase] || {};
  const appsOpts = IG.CRITIQUE_APPS.map((a) => `<option value="${esc(a)}" ${s.critiqueApp === a ? 'selected' : ''}>${esc(a)}</option>`).join('');
  const phasesHtml = phases.map((p, i) => `<div style="flex:1;min-width:80px;text-align:center;padding:8px 4px;border-radius:8px;background:${i === s.critiquePhase ? 'var(--accent-soft)' : 'transparent'};border:1px solid ${i === s.critiquePhase ? 'var(--accent)' : 'var(--border)'}">
    <div style="font-size:12px;font-weight:600;color:${i === s.critiquePhase ? 'var(--accent)' : 'var(--ink2)'}">${esc(p.phase)}</div>
    <div style="font-size:11px;color:var(--ink2)">${p.min} min</div>
  </div>`).join('');
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <span style="font-size:13px;color:var(--ink2)">App:</span>
      <select style="height:40px;padding:0 10px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:13px" data-act="${app.act((e) => app.setState({ critiqueApp: e.target.value }))}">${appsOpts}</select>
      <button class="dos-pill-btn" data-act="${app.act(() => app.setState({ critiqueApp: IG.CRITIQUE_APPS[Math.floor(Math.random() * IG.CRITIQUE_APPS.length)] }))}">Shuffle</button>
    </div>
    <div style="display:flex;gap:6px;overflow:auto">${phasesHtml}</div>
    <div class="dos-card" style="text-align:center">
      <div style="font-size:31px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--accent)">${app.fmtTime(s.critiqueSeconds)}</div>
      <div class="dos-eyebrow" style="color:var(--accent);margin-top:8px">${esc(cur.phase || '')}</div>
      <p style="font-size:15px;margin-top:6px">${esc(cur.prompt || '')}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button class="dos-btn-primary" data-act="${app.act(() => app.setState({ critiqueRunning: !s.critiqueRunning, critiqueSeconds: s.critiqueSeconds || (cur.min || 2) * 60 }))}">${s.critiqueRunning ? 'Pause' : 'Start phase'}</button>
        <button class="dos-btn-outline" data-act="${app.act(() => {
          const next = (s.critiquePhase + 1) % phases.length;
          app.setState({ critiquePhase: next, critiqueSeconds: (phases[next] || {}).min * 60 || 120, critiqueRunning: false });
        })}">Next phase →</button>
      </div>
    </div>
    <textarea placeholder="Notes for this session…" data-act="${app.act((e) => app.persist({ critiqueNotes: e.target.value }))}" style="min-height:120px;padding:14px 16px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:14px;resize:vertical">${esc(s.critiqueNotes)}</textarea>
  </div>`;
}

function renderWhiteboard(app) {
  const s = app.state;
  const IG = app.ig;
  const prompts = IG.WHITEBOARD_PROMPTS;
  const phases = IG.WHITEBOARD_PHASES;
  const cur = phases[s.wbPhase] || {};
  const prompt = prompts[s.wbPromptIndex % prompts.length];
  const phasesHtml = phases.map((p, i) => `<div style="flex:1;min-width:70px;text-align:center;padding:8px 4px;border-radius:8px;background:${i === s.wbPhase ? 'var(--accent-soft)' : 'transparent'};border:1px solid ${i === s.wbPhase ? 'var(--accent)' : 'var(--border)'}">
    <div style="font-size:12px;font-weight:600;color:${i === s.wbPhase ? 'var(--accent)' : 'var(--ink2)'}">${esc(p.phase)}</div>
    <div style="font-size:11px;color:var(--ink2)">${p.min} min</div>
  </div>`).join('');
  const criteriaHtml = WB_CRITERIA_LABELS.map((label) => {
    const val = s.wbScores[label] || 3;
    return `<div class="dos-card" style="padding:10px 12px">
      <div style="font-size:12px;font-weight:600">${esc(label)}</div>
      <input type="range" min="1" max="5" step="1" value="${val}" data-range="wbScore-${label}" data-unit="" style="width:100%;margin-top:6px">
      <div style="font-size:12px;color:var(--ink2);text-align:right;font-variant-numeric:tabular-nums" id="lbl-wbScore-${label.replace(/\s/g, '')}">${val} / 5</div>
    </div>`;
  }).join('');
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div class="dos-card">
      <div class="dos-eyebrow">Prompt</div>
      <p style="font-family:var(--serif);font-size:20px;font-weight:600;margin-top:6px">${esc(prompt)}</p>
      <button class="dos-pill-btn" style="margin-top:8px" data-act="${app.act(() => app.setState({ wbPromptIndex: Math.floor(Math.random() * prompts.length), wbPhase: 0, wbSeconds: phases[0].min * 60, wbRunning: false }))}">New prompt</button>
    </div>
    <div style="display:flex;gap:6px;overflow:auto">${phasesHtml}</div>
    <div class="dos-card" style="text-align:center">
      <div style="font-size:31px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--accent)">${app.fmtTime(s.wbSeconds)}</div>
      <div class="dos-eyebrow" style="color:var(--accent);margin-top:8px">${esc(cur.phase || '')}</div>
      <p style="font-size:15px;margin-top:6px">${esc(cur.prompt || '')}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
        <button class="dos-btn-primary" data-act="${app.act(() => app.setState({ wbRunning: !s.wbRunning, wbSeconds: s.wbSeconds || (cur.min || 2) * 60 }))}">${s.wbRunning ? 'Pause' : 'Start phase'}</button>
        <button class="dos-btn-outline" data-act="${app.act(() => {
          const next = (s.wbPhase + 1) % phases.length;
          app.setState({ wbPhase: next, wbSeconds: (phases[next] || {}).min * 60 || 120, wbRunning: false });
        })}">Next phase →</button>
      </div>
    </div>
    <div>
      <div class="dos-eyebrow" style="margin-bottom:8px">Wrap-up self-score (1–5)</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px">${criteriaHtml}</div>
    </div>
  </div>`;
}

function renderRubrics(app) {
  const IG = app.ig;
  const R = IG.RUBRICS;
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
      <div class="dos-card">
        <div style="font-family:var(--serif);font-size:20px;font-weight:600">Google</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;margin-top:10px">${R.google.loop.map((st) => `<li style="font-size:13px;color:var(--ink2)">→ ${esc(st)}</li>`).join('')}</ul>
        <p style="font-size:13px;margin-top:10px">${esc(R.google.weights)}</p>
        <p style="font-size:13px;color:var(--ink2);margin-top:6px">${esc(R.google.levels)}</p>
      </div>
      <div class="dos-card">
        <div style="font-family:var(--serif);font-size:20px;font-weight:600">Meta</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;margin-top:10px">${R.meta.loop.map((st) => `<li style="font-size:13px;color:var(--ink2)">→ ${esc(st)}</li>`).join('')}</ul>
        <p style="font-size:13px;margin-top:10px">${esc(R.meta.weights)}</p>
        <p style="font-size:13px;color:var(--ink2);margin-top:6px">${esc(R.meta.levels)}</p>
      </div>
    </div>
    <div style="border:1px solid var(--error);background:var(--warn-soft);border-radius:12px;padding:20px">
      <div class="dos-callout-label" style="color:var(--error)">Fail signals — their debrief language</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:6px">${R.failSignals.map((f) => `<li style="font-size:14px;color:var(--ink)">${esc(f)}</li>`).join('')}</ul>
    </div>
  </div>`;
}

function renderAnchors(app) {
  const s = app.state;
  const IG = app.ig;
  return `<div style="display:flex;flex-direction:column;gap:16px">
    ${IG.ANCHOR_STORIES.map((an) => `<div class="dos-card">
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;align-items:flex-start">
        <div>
          <div class="dos-eyebrow" style="color:var(--accent)">${esc(an.tag)}</div>
          <div style="font-family:var(--serif);font-size:22px;font-weight:600;margin-top:4px">${esc(an.name)}</div>
          <div style="font-size:13px;color:var(--ink2);margin-top:2px">${esc(an.outcome)}</div>
        </div>
        <button class="dos-btn-primary" style="height:40px;padding:0 16px" data-act="${app.act(() => app.setState({ anchorTimerRunning: !s.anchorTimerRunning, anchorTimerSeconds: s.anchorTimerSeconds || 120 }))}">${s.anchorTimerRunning ? app.fmtTime(s.anchorTimerSeconds) + ' ⏸' : 'Practice aloud (2 min)'}</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
        ${an.star.map((beat) => `<div><span style="font-size:12px;font-weight:600;color:var(--accent)">${esc(beat[0])}: </span><span style="font-size:14px;color:var(--ink);line-height:1.55">${esc(beat[1])}</span></div>`).join('')}
      </div>
    </div>`).join('')}
  </div>`;
}

function renderPortfolio(app) {
  const s = app.state;
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <p style="font-size:14px;color:var(--ink2)">Five portfolio-project archetypes. Tick off deliverables as each project matures — a project isn’t done until its checklist is.</p>
    ${app.portfolioDb.map((ar) => {
      const doneCount = ar.items.filter((_, i) => s.portfolioChecks[ar.id + '-' + i]).length;
      const pct = ar.items.length ? Math.round((doneCount / ar.items.length) * 100) : 0;
      const itemsHtml = ar.items.map((text, i) => {
        const key = ar.id + '-' + i;
        const checked = !!s.portfolioChecks[key];
        return `<label style="display:flex;align-items:flex-start;gap:10px;padding:7px 0;font-size:14px;line-height:1.5;cursor:pointer">
          <input type="checkbox" ${checked ? 'checked' : ''} data-act="${app.act(() => app.persist({ portfolioChecks: Object.assign({}, s.portfolioChecks, { [key]: !checked }) }))}" style="width:18px;height:18px;flex:none;margin-top:2px">
          <span>${esc(text)}</span>
        </label>`;
      }).join('');
      return `<div class="dos-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px">
          <div><div class="dos-eyebrow">${esc(ar.tag)}</div><h2 style="font-family:var(--serif);font-size:20px;font-weight:600;margin-top:4px">${esc(ar.title)}</h2></div>
          <span style="font-size:13px;color:var(--ink2);font-variant-numeric:tabular-nums">${doneCount}/${ar.items.length}</span>
        </div>
        <div class="dos-progress" style="height:5px;margin-top:10px"><div style="width:${pct}%"></div></div>
        <div style="display:flex;flex-direction:column;gap:2px;margin-top:12px">${itemsHtml}</div>
      </div>`;
    }).join('')}
  </div>`;
}

export function renderGym(app) {
  const s = app.state;
  let body;
  switch (s.gymTab) {
    case 'drill': body = renderDrill(app); break;
    case 'critique': body = renderCritique(app); break;
    case 'whiteboard': body = renderWhiteboard(app); break;
    case 'rubrics': body = renderRubrics(app); break;
    case 'anchors': body = renderAnchors(app); break;
    case 'portfolio': body = renderPortfolio(app); break;
    default: body = renderBank(app); break;
  }
  return `<div class="dos-page-gym">
    <div><h1 class="dos-h1">Interview Gym</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">148 questions, drilled with a timer, critiqued live, whiteboarded against the clock.</p></div>
    ${renderTabs(app)}
    ${body}
  </div>`;
}
