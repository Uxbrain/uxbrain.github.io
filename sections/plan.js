import { esc } from '../app.js';

export function renderPlanSection(app) {
  const s = app.state;
  const days = app.planDb.buildDays();
  let firstIncompleteIdx = -1;
  let lastPhase = '';
  const rows = days.map((d, di) => {
    const tasksHtml = d.tasks.map((tk) => {
      const key = 'd' + d.n + '-' + tk.id;
      const checked = !!s.dayChecks[key];
      return `<label style="display:flex;align-items:flex-start;gap:10px;padding:6px 0;font-size:14px;line-height:1.5;cursor:pointer">
        <input type="checkbox" ${checked ? 'checked' : ''} data-act="${app.act(() => app.persist({ dayChecks: Object.assign({}, s.dayChecks, { [key]: !checked }) }))}" style="width:18px;height:18px;flex:none;margin-top:2px">
        <span style="color:var(--ink2)">${esc(tk.label)}</span>
      </label>`;
    }).join('');
    const complete = d.tasks.every((tk) => s.dayChecks['d' + d.n + '-' + tk.id]);
    if (!complete && firstIncompleteIdx === -1) firstIncompleteIdx = di;
    const phaseStart = d.phase !== lastPhase;
    lastPhase = d.phase;
    const isCurrent = di === firstIncompleteIdx;
    const borderColor = isCurrent ? 'var(--accent-line)' : 'var(--border)';
    return { phaseStart, phase: d.phase, complete, isCurrent, borderColor, html: `
      <div data-dos-cardlink class="dos-card" style="border-color:${borderColor}">
        <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">
          <span class="dos-eyebrow">Day ${d.n}</span>
          <span style="font-size:11px;color:var(--ink2)">Week ${d.weekN}</span>
          ${isCurrent ? '<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:var(--accent-soft);color:var(--accent)">Up next</span>' : ''}
          ${complete ? '<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;background:var(--warn-soft);color:var(--success)">✓ Complete</span>' : ''}
          <span style="font-size:12px;color:var(--ink2);margin-left:auto">~${d.estMins} min</span>
        </div>
        <h2 style="font-family:var(--serif);font-size:19px;font-weight:600;margin-top:6px">${esc(d.theme)}</h2>
        <div style="display:flex;flex-direction:column;gap:2px;margin-top:10px">${tasksHtml}</div>
      </div>` };
  });

  const doneCount = rows.filter((r) => r.complete).length;
  const pct = rows.length ? Math.round((doneCount / rows.length) * 100) : 0;

  let body = '';
  rows.forEach((r) => {
    if (r.phaseStart) body += `<div style="display:flex;align-items:center;gap:12px;margin-top:8px"><span class="dos-eyebrow" style="color:var(--accent);font-size:13px">${esc(r.phase)}</span><span style="flex:1;height:1px;background:var(--border)"></span></div>`;
    body += r.html;
  });

  const beyond = app.planDb.BEYOND_PLAN;
  const beyondOpen = !!s.beyondOpen;

  return `<div class="dos-page-narrow">
    <div>
      <h1 class="dos-h1">My Plan</h1>
      <p style="color:var(--ink2);font-size:15px;margin-top:6px">A self-paced Day sequence built from the 8-week roadmap. A Day completes only when its tasks are checked — take one real day or five, the plan waits for you.</p>
      <div class="dos-progress" style="margin-top:14px"><div style="width:${pct}%"></div></div>
      <p style="font-size:13px;color:var(--ink2);margin-top:6px">${pct}% through your plan · ${doneCount} of ${rows.length} days complete</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px">${body}</div>
    <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden">
      <button style="width:100%;display:flex;align-items:center;gap:12px;padding:16px 20px;background:transparent;border:none;cursor:pointer;text-align:left" data-act="${app.act(() => app.setState({ beyondOpen: !beyondOpen }))}">
        <span style="flex:1;font-size:15px;font-weight:600">${esc(beyond.title)}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--ink2)" stroke-width="1.5" style="flex:none;transform:${beyondOpen ? 'rotate(90deg)' : 'rotate(0deg)'}"><polyline points="4,2 10,7 4,12"></polyline></svg>
      </button>
      ${beyondOpen ? `<p style="padding:0 20px 20px;font-size:15px;line-height:1.6;color:var(--ink2)">${esc(beyond.body)}</p>` : ''}
    </div>
  </div>`;
}
