import { esc } from '../app.js';
import { chapterGroups, conceptNamesForDay, dayDone } from './library.js';

function renderUnifiedResults(app, q) {
  const TOPICS = app.data.TOPICS, ORDER = app.data.TOPIC_ORDER;
  const ql = q.trim().toLowerCase();
  const topicHits = ORDER.filter((id) => {
    const t = TOPICS[id];
    return (t.title + ' ' + t.def + ' ' + t.why).toLowerCase().includes(ql);
  }).slice(0, 12);
  const glossHits = app.glossData.GLOSSARY.filter((g) => (g.term + ' ' + g.def).toLowerCase().includes(ql)).slice(0, 12);
  const conceptHits = [];
  app.conceptsDb.CONCEPT_CATEGORIES.forEach((cat) => {
    cat.concepts.forEach((name) => { if (name.toLowerCase().includes(ql)) conceptHits.push({ name, cat: cat.title }); });
  });

  const topicsHtml = topicHits.map((id) => `<button data-dos-row data-act="${app.act(() => app.openTopic(id))}" style="display:flex;flex-direction:column;gap:2px;width:100%;padding:12px 14px;border:none;border-radius:10px;background:transparent;cursor:pointer;text-align:left;color:var(--ink)">
    <span style="font-size:15px;font-weight:600">${esc(TOPICS[id].title)}</span>
    <span style="font-size:13px;color:var(--ink2)">${esc(TOPICS[id].def)}</span>
  </button>`).join('');
  const glossHtml = glossHits.map((g) => {
    const hasLink = !!(g.linkTopic && TOPICS[g.linkTopic]);
    return `<button data-dos-row data-act="${app.act(() => { if (hasLink) app.openTopic(g.linkTopic); })}" style="display:flex;flex-direction:column;gap:2px;width:100%;padding:12px 14px;border:none;border-radius:10px;background:transparent;cursor:${hasLink ? 'pointer' : 'default'};text-align:left;color:var(--ink)">
      <span style="font-size:15px;font-weight:600">${esc(g.term)}${hasLink ? ' →' : ''}</span>
      <span style="font-size:13px;color:var(--ink2)">${esc(g.def)}</span>
    </button>`;
  }).join('');
  const conceptsHtml = conceptHits.slice(0, 24).map((c) => `<span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:99px;border:1px solid var(--border);background:var(--surface-alt);color:var(--ink2);font-size:13px;margin:3px">${esc(c.name)} <span style="color:var(--ink2);opacity:.6">· ${esc(c.cat)}</span></span>`).join('');

  const nothing = !topicHits.length && !glossHits.length && !conceptHits.length;
  return `<div style="display:flex;flex-direction:column;gap:18px">
    ${topicHits.length ? `<div><div class="dos-eyebrow" style="margin-bottom:6px">Chapters &amp; topics</div><div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden">${topicsHtml}</div></div>` : ''}
    ${glossHits.length ? `<div><div class="dos-eyebrow" style="margin-bottom:6px">Glossary</div><div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden">${glossHtml}</div></div>` : ''}
    ${conceptHits.length ? `<div><div class="dos-eyebrow" style="margin-bottom:6px">Concept index (${conceptHits.length} match${conceptHits.length === 1 ? '' : 'es'})</div><div style="line-height:2.4">${conceptsHtml}</div></div>` : ''}
    ${nothing ? `<div style="padding:24px;text-align:center;font-size:14px;color:var(--ink2)">No matches for “${esc(q)}.”</div>` : ''}
  </div>`;
}

function renderDayWiseBrowse(app) {
  const groups = chapterGroups(app);
  const rows = groups.map((g) => {
    const firstDay = g.days[0], lastDay = g.days[g.days.length - 1];
    const doneDays = g.days.filter((d) => dayDone(app, d)).length;
    const dayChips = g.days.map((d) => {
      const complete = dayDone(app, d);
      return `<button style="height:30px;padding:0 10px;border-radius:99px;border:1px solid ${complete ? 'var(--success)' : 'var(--border)'};background:${complete ? 'var(--mint)' : 'var(--surface-alt)'};color:${complete ? 'var(--success)' : 'var(--ink2)'};font-size:12.5px;cursor:pointer" data-act="${app.act(() => app.nav({ sec: 'library', book: g.n, topic: null }))}">Day ${d.n}${complete ? ' ✓' : ''}</button>`;
    }).join('');
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 18px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span class="dos-eyebrow" style="color:var(--accent)">Chapter ${g.n}</span>
        <span style="font-size:12px;color:var(--ink2)">Days ${firstDay.n}–${lastDay.n} · ${doneDays}/${g.days.length} complete</span>
        <button style="margin-left:auto;background:none;border:none;color:var(--accent);font-size:13px;font-weight:600;cursor:pointer" data-act="${app.act(() => app.nav({ sec: 'library', book: g.n, topic: null }))}">Open →</button>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${dayChips}</div>
    </div>`;
  }).join('');
  return `<div style="display:flex;flex-direction:column;gap:12px">
    <div style="display:flex;align-items:center;gap:10px">
      <span class="dos-eyebrow">Browse by day</span>
      <span style="flex:1;height:1px;background:var(--border)"></span>
      <span style="font-size:12px;color:var(--ink2)">${groups.length} chapters · every 7 days</span>
    </div>
    ${rows}
  </div>`;
}

function renderConceptIndex(app) {
  const s = app.state;
  const CB = app.conceptsDb;
  const categoriesHtml = CB.CONCEPT_CATEGORIES.map((cat, ci) => {
    const isOpen = !!s.conceptOpen[cat.id];
    const chips = isOpen ? `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:0 20px 18px">${cat.concepts.map((name) => {
      const tid = app.findTopicByName(name);
      const border = tid ? 'var(--accent-line)' : 'var(--border)';
      const bg = tid ? 'var(--accent-soft)' : 'var(--surface-alt)';
      const color = tid ? 'var(--accent)' : 'var(--ink2)';
      return `<button style="height:32px;padding:0 12px;border-radius:99px;border:1px solid ${border};background:${bg};color:${color};font-size:13px;cursor:${tid ? 'pointer' : 'default'}" data-act="${app.act(() => { if (tid) app.openTopic(tid); })}">${esc(name)}${tid ? ' →' : ''}</button>`;
    }).join('')}</div>` : '';
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden">
      <button style="width:100%;display:flex;align-items:center;gap:12px;padding:16px 20px;background:transparent;border:none;cursor:pointer;text-align:left" data-act="${app.act(() => app.setState({ conceptOpen: Object.assign({}, s.conceptOpen, { [cat.id]: !isOpen }) }))}">
        <span style="width:30px;height:30px;flex:none;border-radius:8px;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:700;font-size:13px">${ci + 1}</span>
        <span style="flex:1;font-size:15px;font-weight:600">${esc(cat.title)}</span>
        <span style="font-size:12px;color:var(--ink2)">${cat.count}+</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--ink2)" stroke-width="1.5" style="flex:none;transform:${isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}"><polyline points="4,2 10,7 4,12"></polyline></svg>
      </button>
      ${chips}
    </div>`;
  }).join('');
  return `<div style="display:flex;flex-direction:column;gap:14px">
    <div style="display:flex;align-items:center;gap:10px">
      <span class="dos-eyebrow">Master Concept Index</span>
      <span style="flex:1;height:1px;background:var(--border)"></span>
      <span style="font-size:12px;color:var(--ink2)">${CB.CONCEPT_TOTAL}+ concepts</span>
    </div>
    ${categoriesHtml}
  </div>`;
}

function renderGlossaryList(app) {
  const s = app.state;
  const all = app.glossData.GLOSSARY;
  const q = s.glossQ.trim().toLowerCase();
  const filtered = q ? all.filter((g) => (g.term + ' ' + g.def).toLowerCase().includes(q)) : all;
  const seenLetters = {};
  const azLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l) => {
    const present = all.some((g) => g.term[0].toUpperCase() === l);
    return `<a href="${present ? '#gloss-' + l : '#'}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;border-radius:6px;color:${present ? 'var(--accent)' : 'var(--border)'};text-decoration:none;background:var(--surface);border:1px solid var(--border)">${l}</a>`;
  }).join('');
  const termsHtml = filtered.map((g) => {
    const letter = g.term[0].toUpperCase();
    const first = !seenLetters[letter];
    seenLetters[letter] = true;
    const hasLink = !!(g.linkTopic && app.data.TOPICS[g.linkTopic]);
    return `<div id="${first ? 'gloss-' + letter : ''}" style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:4px">
      <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap">
        <span style="font-size:15px;font-weight:600">${esc(g.term)}</span>
        ${hasLink ? `<button style="background:none;border:none;color:var(--accent);font-size:12px;font-weight:500;cursor:pointer" data-act="${app.act(() => app.openTopic(g.linkTopic))}">Library topic →</button>` : ''}
      </div>
      <div style="font-size:14px;color:var(--ink2);line-height:1.55">${esc(g.def)}</div>
    </div>`;
  }).join('');
  const noResults = q && filtered.length === 0;
  return `<div style="display:flex;align-items:center;gap:10px;margin-top:8px">
      <span class="dos-eyebrow">A–Z Glossary</span>
      <span style="flex:1;height:1px;background:var(--border)"></span>
    </div>
    <input type="text" value="${esc(s.glossQ)}" placeholder="Filter terms…" data-act="${app.act((e) => app.setState({ glossQ: e.target.value }))}" style="height:48px;padding:0 16px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-size:15px">
    <div style="display:flex;flex-wrap:wrap;gap:6px">${azLetters}</div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden">
      ${termsHtml}
      ${noResults ? `<div style="padding:24px;text-align:center;font-size:14px;color:var(--ink2)">No terms match “${esc(s.glossQ)}.”</div>` : ''}
    </div>`;
}

export function renderConcepts(app) {
  const s = app.state;
  if (s.pageSearchQ === undefined) s.pageSearchQ = '';
  const q = s.pageSearchQ.trim();
  return `<div class="dos-page-mid">
    <div><h1 class="dos-h1">Search</h1><p style="color:var(--ink2);font-size:15px;margin-top:6px">Every chapter, concept, and glossary term in one place — searchable, A–Z, and browsable day by day. Terms with a Chapters topic link straight through.</p></div>
    <div style="position:sticky;top:64px;z-index:15;background:var(--bg);padding:4px 0 8px">
      <div style="display:flex;align-items:center;gap:10px;height:52px;padding:0 16px;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:var(--shadow1)">
        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="var(--ink2)" stroke-width="1.5" style="flex:none"><circle cx="8" cy="8" r="5.5"></circle><line x1="12.5" y1="12.5" x2="15.5" y2="15.5"></line></svg>
        <input id="page-search-input" type="text" value="${esc(s.pageSearchQ)}" placeholder="Search chapters, concepts, glossary…" data-act="${app.act((e) => app.setState({ pageSearchQ: e.target.value }))}" style="flex:1;border:none;outline:none;background:transparent;color:var(--ink);font-size:15px">
      </div>
    </div>
    ${q ? renderUnifiedResults(app, q) : `${renderDayWiseBrowse(app)}${renderConceptIndex(app)}${renderGlossaryList(app)}`}
  </div>`;
}
