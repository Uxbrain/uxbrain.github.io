import { esc } from '../app.js';

export function renderSheets(app) {
  const s = app.state;
  const SHEETS = app.sheetsData.SHEETS;

  if (!s.sheetId) {
    const cardsHtml = SHEETS.map((sh) => {
      const mono = sh.title.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
      return `<button data-dos-cardlink data-act="${app.act(() => app.setState({ sheetId: sh.id }))}" style="text-align:left;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:var(--pad-card);cursor:pointer;color:var(--ink);display:flex;flex-direction:column;gap:6px">
        <div style="width:36px;height:36px;border-radius:8px;border:1.5px solid var(--accent-line);background:var(--accent-soft);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:13px;font-weight:700;color:var(--accent)">${mono}</div>
        <div style="font-family:var(--serif);font-size:20px;font-weight:600;margin-top:4px">${esc(sh.title)}</div>
        <div style="font-size:13px;color:var(--ink2)">${esc(sh.sub)}</div>
      </button>`;
    }).join('');
    return `<div class="dos-page">
      <div><h1 class="dos-h1">Cheat Sheets</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">Book 4 Part E, plus Book 5’s quick-reference layer — everything numeric, tabular, and revision-ready.</p></div>
      <div class="dos-grid-cards-sm">${cardsHtml}</div>
    </div>`;
  }

  const cur = SHEETS.find((x) => x.id === s.sheetId);
  if (!cur) return '';
  let body = '';
  if (cur.kind === 'table') {
    body = `<div class="dos-table-wrap"><table class="dos-table">
      <thead><tr>${cur.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${cur.rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  } else if (cur.kind === 'kv') {
    body = `<div style="display:flex;flex-direction:column;gap:10px">${cur.rows.map((row) => `<div class="dos-card" style="padding:16px 20px">
      <div style="font-size:14px;font-weight:600;color:var(--accent)">${esc(row[0])}</div>
      <div style="font-size:14px;color:var(--ink);margin-top:4px;line-height:1.55">${esc(row[1])}</div>
    </div>`).join('')}</div>`;
  } else if (cur.kind === 'revision') {
    body = `<div style="display:flex;flex-direction:column;gap:16px">
      <div style="background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:12px;padding:20px">
        <div class="dos-callout-label" style="color:var(--accent)">Numbers that must be reflexive</div>
        <p style="font-size:14px;line-height:1.7;font-variant-numeric:tabular-nums">${esc(cur.numbers)}</p>
      </div>
      <div>
        <div class="dos-callout-label" style="color:var(--ink2);margin-bottom:8px">Structures that must be reflexive</div>
        <div style="display:flex;flex-direction:column;gap:8px">${cur.structures.map((row) => `<div class="dos-card" style="padding:14px 20px"><span style="font-weight:600">${esc(row[0])}: </span><span style="color:var(--ink2)">${esc(row[1])}</span></div>`).join('')}</div>
      </div>
      <div class="dos-card"><div class="dos-callout-label" style="color:var(--ink2)">Your three anchors</div><p style="font-size:14px;line-height:1.6">${esc(cur.anchors)}</p></div>
      <div class="dos-card"><div class="dos-callout-label" style="color:var(--ink2)">Their five favorite follow-ups</div><p style="font-size:14px;line-height:1.6">${esc(cur.followups)}</p></div>
      <p style="font-size:13px;color:var(--ink2);font-style:italic">${esc(cur.night)}</p>
    </div>`;
  }

  return `<div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:20px" id="sheet-print-area">
    <div data-no-print="true" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
      <div>
        <button style="background:none;border:none;color:var(--accent);font-size:13px;font-weight:500;cursor:pointer;padding:4px 0" data-act="${app.act(() => app.setState({ sheetId: null }))}">← Cheat Sheets</button>
        <h1 class="dos-h1" style="margin-top:4px">${esc(cur.title)}</h1>
        <p style="color:var(--ink2);font-size:14px;margin-top:4px">${esc(cur.sub)}</p>
      </div>
      ${cur.printable ? `<button class="dos-btn-primary" data-act="${app.act(() => window.print())}">Print</button>` : ''}
    </div>
    ${body}
  </div>`;
}
