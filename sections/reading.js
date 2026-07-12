import { esc } from '../app.js';
import { READING_LIST } from '../data/reading.js';

export function renderReadingList(app) {
  const s = app.state;
  if (!s.readingRead) s.readingRead = {};
  const rows = READING_LIST.map((rb) => {
    const read = !!s.readingRead[rb.id];
    return `<div style="display:flex;gap:16px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 20px">
      <button aria-label="Mark as read" data-act="${app.act(() => app.persist({ readingRead: Object.assign({}, s.readingRead, { [rb.id]: !read }) }))}" style="flex:none;width:26px;height:26px;border-radius:50%;border:1.5px solid ${read ? 'var(--success)' : 'var(--border)'};background:${read ? 'var(--success)' : 'transparent'};color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;margin-top:2px">${read ? '✓' : ''}</button>
      <div style="flex:1">
        <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
          <span class="dos-eyebrow">#${rb.priority}</span>
          <h2 style="font-family:var(--serif);font-size:19px;font-weight:600;${read ? 'text-decoration:line-through;color:var(--ink2)' : ''}">${esc(rb.title)}</h2>
        </div>
        <div style="font-size:13px;color:var(--ink2);margin-top:2px">${esc(rb.author)}</div>
        <p style="font-size:14px;line-height:1.55;color:var(--ink2);margin-top:6px">${esc(rb.why)}</p>
      </div>
    </div>`;
  }).join('');
  const readCount = READING_LIST.filter((rb) => s.readingRead[rb.id]).length;
  return `<div class="dos-page-narrow">
    <div>
      <h1 class="dos-h1">Reading List</h1>
      <p style="color:var(--ink2);font-size:15px;margin-top:6px">Seventeen books, in reading-priority order. Mark them off as you go — ${readCount} of ${READING_LIST.length} read.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">${rows}</div>
  </div>`;
}
