import * as DATA from './data/data.js';
import * as CURRICULUM_TOPICS from './data/curriculum-topics.js';
import * as MASTER_TOPICS from './data/master-topics.js';
import * as SHEETS_MOD from './data/sheets.js';
import * as GLOSS_MOD from './data/glossary.js';
import * as CHECKLIST_MOD from './data/checklist.js';
import * as IG from './data/interview.js';
import { buildDecks } from './data/flashcards.js';
import * as PLAN_MOD from './data/plan.js';
import { buildQuiz } from './data/quiz.js';
import { PORTFOLIO_ARCHETYPES } from './data/portfolio.js';
import * as CONCEPTS_MOD from './data/concepts.js';

import { renderDashboard } from './sections/dashboard.js';
import { renderChapters } from './sections/library.js';
import { renderFlashcards } from './sections/flashcards.js';
import { renderGym } from './sections/gym.js';
import { renderSheets } from './sections/sheets.js';
import { renderConcepts } from './sections/concepts.js';
import { renderProgress } from './sections/progress.js';
import { renderReadingList } from './sections/reading.js';

const STORAGE_KEY = 'designos.app.v1';

export function esc(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Order matches the user's fixed sidebar spec: Search, Dashboard, Chapters, Flashcards,
// Interview Gym, Cheat Sheets, Progress, Reading List.
const NAV_ITEMS = [
  ['Search', 'glossary'],
  ['Dashboard', 'dashboard'],
  ['Chapters', 'library'],
  ['Flashcards', 'cards'],
  ['Interview Gym', 'gym'],
  ['Cheat Sheets', 'sheets'],
  ['Progress', 'progress'],
  ['Reading List', 'reading'],
];

const NAV_ICONS = {
  dashboard: '<rect x="2" y="2" width="6" height="6" rx="1.5"></rect><rect x="10" y="2" width="6" height="6" rx="1.5"></rect><rect x="2" y="10" width="6" height="6" rx="1.5"></rect><rect x="10" y="10" width="6" height="6" rx="1.5"></rect>',
  library: '<rect x="2.5" y="2.5" width="4" height="13" rx="1"></rect><rect x="8" y="2.5" width="4" height="13" rx="1"></rect><line x1="14.5" y1="3" x2="15.5" y2="15"></line>',
  cards: '<rect x="4.5" y="2.5" width="11" height="9" rx="1.5"></rect><rect x="2.5" y="6.5" width="11" height="9" rx="1.5"></rect>',
  gym: '<circle cx="9" cy="9" r="6.5"></circle><circle cx="9" cy="9" r="2.5"></circle>',
  sheets: '<rect x="3" y="2.5" width="12" height="13" rx="1.5"></rect><line x1="6" y1="6" x2="12" y2="6"></line><line x1="6" y1="9" x2="12" y2="9"></line><line x1="6" y1="12" x2="10" y2="12"></line>',
  glossary: '<circle cx="8" cy="8" r="5.5"></circle><line x1="12.5" y1="12.5" x2="15.5" y2="15.5"></line>',
  progress: '<circle cx="9" cy="9" r="6.5"></circle><polyline points="6.2,9.2 8.2,11.2 12,7.2"></polyline>',
  reading: '<path d="M2.5 3.5c2-1 4.5-1 6.5.5v11c-2-1.5-4.5-1.5-6.5-.5z"></path><path d="M15.5 3.5c-2-1-4.5-1-6.5.5v11c2-1.5 4.5-1.5 6.5-.5z"></path>',
};

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
}

class App {
  constructor() {
    const saved = loadSaved();
    this.state = {
      theme: saved.theme || 'light',
      startDate: saved.startDate || null,
      route: saved.route || { sec: 'dashboard', book: null, topic: null },
      completed: saved.completed || {},
      starred: saved.starred || {},
      lastTopicId: saved.lastTopicId || null,
      searchOpen: false, q: '',
      mobileNavOpen: false,
      isMobile: window.matchMedia('(max-width: 920px)').matches,
      readerPanelOpen: false,
      readerFontScale: saved.readerFontScale || 1,
      readerLh: saved.readerLh || 1,
      readerMeasure: saved.readerMeasure || 720,
      readerFont: saved.readerFont || 'sans',
      readerLs: saved.readerLs || 0,
      readerWs: saved.readerWs || 0,
      readerPs: saved.readerPs || 0,
      readerAlign: saved.readerAlign || 'left',
      readerWeight: saved.readerWeight || 'regular',
      readerWarmth: saved.readerWarmth || 0,
      readerFocusMode: false,
      readerReduceMotion: saved.readerReduceMotion || false,
      readerLineFocus: saved.readerLineFocus || false,
      readerContrast: saved.readerContrast || 'off',
      conceptOpen: {},
      ttsSpeaking: false,
      topicNotes: saved.topicNotes || {},
      topicHighlighted: saved.topicHighlighted || {},
      readingProgress: 0,
      quizAnswers: {}, quizSubmitted: {}, quizScores: saved.quizScores || {}, missedTopics: saved.missedTopics || {},
      dayChecks: saved.dayChecks || {},
      portfolioChecks: saved.portfolioChecks || {},
      readingRead: saved.readingRead || {},
      assistantOpen: false, assistantInput: '', assistantTyping: false,
      assistantMsgs: saved.assistantMsgs && saved.assistantMsgs.length ? saved.assistantMsgs : [
        { role: 'bot', text: 'Hi! I’m your Study Buddy. Ask me to explain any concept, define a term, or find an interview question — try the chips below.' },
      ],
      sheetId: null,
      glossQ: '',
      deckId: null,
      cardSchedule: saved.cardSchedule || {},
      cardIndexByDeck: {},
      cardFlipped: false,
      starredDecksOnly: saved.starredDecksOnly || false,
      gymTab: 'bank', bankSection: 'all', bankStarOnly: false,
      igStarred: saved.igStarred || {}, igPracticed: saved.igPracticed || {}, igRevealed: {},
      drillQIndex: 0, drillSeconds: 120, drillRunning: false, drillRevealed: false,
      critiqueApp: 'CRED', critiquePhase: 0, critiqueSeconds: 120, critiqueRunning: false, critiqueNotes: saved.critiqueNotes || '',
      wbPromptIndex: 0, wbPhase: 0, wbSeconds: 120, wbRunning: false, wbScores: saved.wbScores || {},
      anchorTimerSeconds: null, anchorTimerRunning: false,
      checklistChecked: saved.checklistChecked || {}, checklistOpen: {},
      lastActiveDate: saved.lastActiveDate || null, streak: saved.streak || 0,
      studyLog: saved.studyLog || [],
      profileName: saved.profileName || '',
      beyondOpen: false,
    };

    this.data = {
      ...DATA,
      TOPICS: Object.assign({}, DATA.TOPICS, CURRICULUM_TOPICS.TOPICS, MASTER_TOPICS.TOPICS),
      TOPIC_ORDER: DATA.TOPIC_ORDER.concat(CURRICULUM_TOPICS.TOPIC_ORDER, MASTER_TOPICS.TOPIC_ORDER),
    };
    this.sheetsData = SHEETS_MOD;
    this.glossData = GLOSS_MOD;
    this.checklistData = CHECKLIST_MOD;
    this.ig = IG;
    this.planDb = { buildDays: PLAN_MOD.buildDays, BEYOND_PLAN: PLAN_MOD.BEYOND_PLAN };
    this.quizDb = { buildQuiz };
    this.portfolioDb = PORTFOLIO_ARCHETYPES;
    this.conceptsDb = CONCEPTS_MOD;
    this.decksData = buildDecks(SHEETS_MOD.SHEETS, GLOSS_MOD.GLOSSARY);

    this._actions = new Map();
    this._actId = 0;
    this._rangeBound = false;
  }

  // ---------- persistence ----------
  persist(patch) {
    Object.assign(this.state, patch);
    const s = this.state;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        theme: s.theme, startDate: s.startDate, route: s.route,
        completed: s.completed, starred: s.starred, lastTopicId: s.lastTopicId,
        cardSchedule: s.cardSchedule, starredDecksOnly: s.starredDecksOnly,
        igStarred: s.igStarred, igPracticed: s.igPracticed, critiqueNotes: s.critiqueNotes, wbScores: s.wbScores,
        checklistChecked: s.checklistChecked, lastActiveDate: s.lastActiveDate, streak: s.streak, studyLog: s.studyLog,
        readerFontScale: s.readerFontScale, readerLh: s.readerLh, readerMeasure: s.readerMeasure, readerFont: s.readerFont,
        readerLs: s.readerLs, readerWs: s.readerWs, readerPs: s.readerPs, readerAlign: s.readerAlign,
        readerWeight: s.readerWeight, readerWarmth: s.readerWarmth,
        readerReduceMotion: s.readerReduceMotion, readerLineFocus: s.readerLineFocus, readerContrast: s.readerContrast,
        topicNotes: s.topicNotes, topicHighlighted: s.topicHighlighted, quizScores: s.quizScores, missedTopics: s.missedTopics,
        dayChecks: s.dayChecks, portfolioChecks: s.portfolioChecks, profileName: s.profileName, assistantMsgs: s.assistantMsgs.slice(-30), readingRead: s.readingRead,
      }));
    } catch (e) {}
    this.render();
  }

  setState(patch) { Object.assign(this.state, patch); this.render(); }

  exportJSON() {
    const raw = localStorage.getItem(STORAGE_KEY) || '{}';
    const blob = new Blob([raw], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'designos-progress.json'; a.click();
    URL.revokeObjectURL(url);
  }

  importJSON(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(reader.result);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        window.location.reload();
      } catch (e) { window.alert('That file could not be read as DesignOS progress JSON.'); }
    };
    reader.readAsText(file);
  }

  bumpStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const log = this.state.studyLog.indexOf(today) === -1 ? this.state.studyLog.concat([today]) : this.state.studyLog;
    if (this.state.lastActiveDate === today) { if (log !== this.state.studyLog) this.persist({ studyLog: log }); return; }
    const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const streak = this.state.lastActiveDate === yest ? this.state.streak + 1 : 1;
    this.persist({ lastActiveDate: today, streak, studyLog: log });
  }

  fmtTime(sec) {
    sec = Math.max(0, sec);
    const m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  findTopicByName(name) {
    const TOPICS = this.data.TOPICS, ORDER = this.data.TOPIC_ORDER;
    const n = name.toLowerCase().replace(/’/g, "'").replace(/[()]/g, '').trim();
    const t = ORDER.find((id) => {
      const title = TOPICS[id].title.toLowerCase().replace(/’/g, "'").replace(/[()]/g, '').trim();
      return title === n || title.indexOf(n) === 0 || n.indexOf(title.split(' — ')[0]) === 0 || n.indexOf(title) !== -1 || title.indexOf(n) !== -1;
    });
    if (t) return t;
    const g = this.glossData.GLOSSARY.find((x) => x.term.toLowerCase().replace(/’/g, "'").trim() === n);
    return g && g.linkTopic && TOPICS[g.linkTopic] ? g.linkTopic : null;
  }

  cardDueInfo(cardId) {
    const sched = this.state.cardSchedule[cardId];
    if (!sched) return { due: true };
    return { due: new Date(sched.due).getTime() <= Date.now() };
  }

  dueCardsToday() {
    return (this.decksData || []).reduce((sum, dk) => sum + dk.cards.filter((c) => this.cardDueInfo(c.id).due).length, 0);
  }

  gradeCard(cardId, grade) {
    const days = { again: 0, hard: 1, good: 3, easy: 7 };
    const due = new Date(Date.now() + days[grade] * 86400000).toISOString();
    const cardSchedule = Object.assign({}, this.state.cardSchedule, { [cardId]: { due, box: grade } });
    Object.assign(this.state, { cardSchedule });
    this.bumpStreak();
  }

  // ---------- routing ----------
  nav(route, extra) {
    this.persist(Object.assign({ route, mobileNavOpen: false, searchOpen: false }, extra || {}));
    window.scrollTo(0, 0);
  }
  goSection(sec) { this.nav({ sec, book: null, topic: null }); }
  openTopic(id) {
    const t = this.data.TOPICS[id];
    if (!t) return;
    const keepChapter = this.state.route.sec === 'library' ? this.state.route.book : null;
    this.nav({ sec: 'library', book: keepChapter, topic: id }, { lastTopicId: id });
  }

  // ---------- action registry (event delegation) ----------
  act(fn) {
    const id = 'a' + (this._actId++);
    this._actions.set(id, fn);
    return id;
  }

  assistantAnswer(query) {
    const s = this.state;
    const q = query.toLowerCase().trim();
    const TOPICS = this.data.TOPICS;
    const ORDER = this.data.TOPIC_ORDER;
    const GLOSS = this.glossData.GLOSSARY;
    const QS = this.ig.QUESTIONS;
    const wordRe = (term) => new RegExp('(^|[^a-z0-9])' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z0-9]|$)', 'i');
    const bestMatch = (list, termOf) => {
      let exact = null, word = null, sub = null;
      list.forEach((item) => {
        const term = termOf(item).toLowerCase();
        if (!term) return;
        if (term === q) { if (!exact || term.length > termOf(exact).length) exact = item; return; }
        if (wordRe(term).test(q) || (q.length > 3 && wordRe(q).test(term))) { if (!word || term.length > termOf(word).length) word = item; return; }
        if ((q.length > 3 && term.includes(q)) || q.includes(term)) { if (!sub || term.length > termOf(sub).length) sub = item; }
      });
      return exact || word || sub;
    };
    let topicHit = bestMatch(ORDER.map((id) => TOPICS[id]), (t) => t.title);
    if (topicHit) return { text: topicHit.def + ' — ' + (topicHit.why || ''), linkTopicId: topicHit.id, linkLabel: topicHit.title };
    const g = bestMatch(GLOSS, (x) => x.term);
    if (g) return { text: g.term + ': ' + g.def, linkTopicId: g.linkTopic && TOPICS[g.linkTopic] ? g.linkTopic : null, linkLabel: g.linkTopic && TOPICS[g.linkTopic] ? TOPICS[g.linkTopic].title : '' };
    const topicDef = ORDER.map((id) => TOPICS[id]).find((t) => q.length > 3 && (t.title + ' ' + t.def).toLowerCase().includes(q));
    if (topicDef) return { text: topicDef.def + ' — ' + (topicDef.why || ''), linkTopicId: topicDef.id, linkLabel: topicDef.title };
    const ques = QS.find((x) => x.q.toLowerCase().includes(q) && q.length > 4);
    if (ques) return { text: 'Interview Q' + ques.n + ': ' + ques.q + '\n\nApproach: ' + ques.a };
    return { text: 'I couldn’t find that exactly. Try a concept name (e.g. “Kano model”), a term (e.g. “RICE”), or open Search from the sidebar. You can also search everything with ⌘K.' };
  }

  assistantSend(query) {
    if (!query.trim()) return;
    const msgs = this.state.assistantMsgs.concat([{ role: 'user', text: query }]);
    this.setState({ assistantMsgs: msgs, assistantInput: '', assistantTyping: true });
    this.scrollAssistantDown();
    setTimeout(() => {
      const ans = this.assistantAnswer(query);
      const botMsg = { role: 'bot', text: ans.text, linkTopicId: ans.linkTopicId, linkLabel: ans.linkLabel };
      this.persist({ assistantMsgs: this.state.assistantMsgs.concat([botMsg]), assistantTyping: false });
      this.scrollAssistantDown();
    }, 650);
  }

  scrollAssistantDown() {
    setTimeout(() => { const el = document.getElementById('dos-assistant-scroll'); if (el) el.scrollTop = el.scrollHeight; }, 30);
  }

  toggleTts() {
    if (!window.speechSynthesis) return;
    if (this.state.ttsSpeaking) { window.speechSynthesis.cancel(); this.setState({ ttsSpeaking: false }); return; }
    const cur = this.data.TOPICS[this.state.route.topic];
    if (!cur) return;
    const parts = [cur.title, cur.def, cur.why];
    (cur.blocks || []).forEach((b) => { if (b.t === 'p') parts.push(b.text); if (b.t === 'ul') parts.push(b.items.join('. ')); });
    const u = new SpeechSynthesisUtterance(parts.join('. '));
    u.onend = () => this.setState({ ttsSpeaking: false });
    window.speechSynthesis.speak(u);
    this.setState({ ttsSpeaking: true });
  }

  // ---------- timers ----------
  tick() {
    const s = this.state;
    let changed = false;
    if (s.drillRunning && s.drillSeconds > 0) { s.drillSeconds--; changed = true; }
    if (s.critiqueRunning && s.critiqueSeconds > 0) { s.critiqueSeconds--; changed = true; }
    if (s.wbRunning && s.wbSeconds > 0) { s.wbSeconds--; changed = true; }
    if (s.anchorTimerRunning && s.anchorTimerSeconds > 0) { s.anchorTimerSeconds--; changed = true; }
    if (changed) this.render();
  }

  // ---------- shell pieces ----------
  navFlags() {
    const sec = this.state.route.sec;
    return { navDash: sec === 'dashboard', navLib: sec === 'library', navCards: sec === 'cards', navGym: sec === 'gym', navSheets: sec === 'sheets', navGloss: sec === 'glossary', navProg: sec === 'progress', navReading: sec === 'reading' };
  }

  renderSidebar() {
    const sec = this.state.route.sec;
    const items = NAV_ITEMS.map(([label, id]) => {
      const active = sec === id;
      return `<button data-dos-nav aria-label="${esc(label)}" data-active="${active}" data-act="${this.act(() => this.goSection(id))}">
        <svg width="19" height="19" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${NAV_ICONS[id]}</svg>
        <span>${esc(label)}</span>
      </button>`;
    }).join('');
    const ORDER = this.data.TOPIC_ORDER;
    const done = ORDER.filter((id) => this.state.completed[id]).length;
    const total = ORDER.length;
    const C = 2 * Math.PI * 15;
    const dash = (total ? (done / total) * C : 0).toFixed(1) + ' ' + C.toFixed(1);
    return `<aside class="dos-sidebar" data-screen-label="Sidebar">
      <div class="dos-sidebar-logo"><img src="assets/logo-white.png" alt="DesignOS"></div>
      <nav aria-label="Sections">${items}</nav>
      <div class="dos-sidebar-foot">
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" style="flex:none;transform:rotate(-90deg)">
          <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="4"></circle>
          <circle cx="20" cy="20" r="15" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${dash}"></circle>
        </svg>
        <div>
          <div style="font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:#fff">${done} of ${total} topics</div>
          <div style="font-size:12px;color:var(--sidebar-ink)">Overall progress</div>
        </div>
      </div>
    </aside>`;
  }

  renderHeader() {
    const s = this.state;
    const planPct = this._planPctCache || 0;
    return `<header class="dos-header">
      ${s.isMobile ? `<button class="dos-icon-btn" aria-label="Open navigation" data-act="${this.act(() => this.setState({ mobileNavOpen: true }))}">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="3" y1="5" x2="15" y2="5"></line><line x1="3" y1="9" x2="15" y2="9"></line><line x1="3" y1="13" x2="15" y2="13"></line></svg>
      </button><div style="font-family:var(--serif);font-size:17px;font-weight:700">DesignOS</div>` : ''}
      <button class="dos-search-btn" data-act="${this.act(() => this.openSearch())}">
        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" style="flex:none"><circle cx="8" cy="8" r="5.5"></circle><line x1="12.5" y1="12.5" x2="15.5" y2="15.5"></line></svg>
        <span>Search topics…</span>
        <span class="dos-kbd">⌘K</span>
      </button>
      <div style="flex:1"></div>
      ${!s.isMobile ? `<div style="font-size:13px;font-weight:600;color:var(--accent);font-variant-numeric:tabular-nums;white-space:nowrap">${planPct}% through your plan</div>` : ''}
      <button class="dos-icon-btn" aria-label="Toggle dark mode" data-act="${this.act(() => this.toggleTheme())}">
        <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.5"></circle><path d="M10 3 a7 7 0 0 1 0 14 z" fill="currentColor"></path></svg>
      </button>
      <button class="dos-aa-btn" aria-label="Reading settings" data-act="${this.act(() => this.setState({ readerPanelOpen: !s.readerPanelOpen }))}">Aa</button>
    </header>`;
  }

  toggleTheme() {
    const s = this.state;
    this.persist({ theme: s.theme === 'dark' ? 'light' : (s.theme === 'sepia' ? 'dark' : 'sepia') });
  }

  openSearch() {
    this.setState({ searchOpen: true, q: '' });
    setTimeout(() => { const el = document.getElementById('dos-search-input'); if (el) el.focus(); }, 0);
  }

  themeClass() {
    const s = this.state;
    return [
      (s.theme === 'dark' ? 'dark' : (s.theme === 'sepia' ? 'sepia' : (s.theme === 'amoled' ? 'amoled dark' : ''))),
      (s.readerContrast === 'on' ? 'hc' : ''),
      (s.readerReduceMotion ? 'reduce-motion' : ''),
      (s.readerLineFocus ? 'line-focus' : ''),
    ].filter(Boolean).join(' ');
  }

  renderReaderPanel() {
    const s = this.state;
    if (!s.readerPanelOpen) return '';
    const seg = (val, cur) => val === cur ? 'var(--accent)' : 'var(--border)';
    return `<div class="dos-modal-scrim" data-act="${this.act(() => this.setState({ readerPanelOpen: false }))}">
      <div data-stop="1" style="position:absolute;top:64px;right:24px;width:320px;max-width:calc(100vw - 32px);max-height:calc(100vh - 88px);overflow-y:auto;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow1);padding:20px;display:flex;flex-direction:column;gap:18px">
        <div class="dos-eyebrow">Reading settings</div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Text size</span><span id="lbl-font-scale">${s.readerFontScale}×</span></div>
          <input id="range-font-scale" type="range" min="0.8" max="1.6" step="0.05" value="${s.readerFontScale}" data-range="readerFontScale" data-unit="×" style="width:100%">
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Line spacing</span><span id="lbl-line-height">${s.readerLh}×</span></div>
          <input id="range-line-height" type="range" min="0.85" max="1.6" step="0.05" value="${s.readerLh}" data-range="readerLh" data-unit="×" style="width:100%">
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Column width</span><span id="lbl-measure">${s.readerMeasure}px</span></div>
          <input id="range-measure" type="range" min="480" max="900" step="10" value="${s.readerMeasure}" data-range="readerMeasure" data-unit="px" style="width:100%">
        </div>
        <div>
          <div style="font-size:13px;color:var(--ink2);margin-bottom:8px">Reading font</div>
          <div style="display:flex;gap:6px">
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${seg('sans', s.readerFont)};background:${s.readerFont !== 'serif' ? 'var(--accent-soft)' : 'transparent'};color:var(--ink);font-family:'Inter',sans-serif;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ readerFont: 'sans' }))}">Inter</button>
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${seg('serif', s.readerFont)};background:${s.readerFont === 'serif' ? 'var(--accent-soft)' : 'transparent'};color:var(--ink);font-family:'Source Serif 4',Georgia,serif;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ readerFont: 'serif' }))}">Serif</button>
          </div>
        </div>
        <div>
          <div style="font-size:13px;color:var(--ink2);margin-bottom:8px">Page tone</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.theme !== 'dark' && s.theme !== 'sepia' && s.theme !== 'amoled' ? 'var(--accent)' : 'var(--border)'};background:#F4F5F3;color:#1C1C22;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ theme: 'light' }))}">Light</button>
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.theme === 'sepia' ? 'var(--accent)' : 'var(--border)'};background:#F5EFE2;color:#24201A;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ theme: 'sepia' }))}">Warm</button>
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.theme === 'dark' ? 'var(--accent)' : 'var(--border)'};background:#131317;color:#F4F4F8;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ theme: 'dark' }))}">Dark</button>
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.theme === 'amoled' ? 'var(--accent)' : 'var(--border)'};background:#000;color:#fff;font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ theme: 'amoled' }))}">AMOLED</button>
          </div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Letter spacing</span><span id="lbl-ls">${s.readerLs}px</span></div>
          <input id="range-ls" type="range" min="0" max="3" step="0.25" value="${s.readerLs}" data-range="readerLs" data-unit="px" style="width:100%">
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Word spacing</span><span id="lbl-ws">${s.readerWs}px</span></div>
          <input id="range-ws" type="range" min="0" max="8" step="0.5" value="${s.readerWs}" data-range="readerWs" data-unit="px" style="width:100%">
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Paragraph spacing</span><span id="lbl-ps">${s.readerPs}px</span></div>
          <input id="range-ps" type="range" min="0" max="24" step="2" value="${s.readerPs}" data-range="readerPs" data-unit="px" style="width:100%">
        </div>
        <div>
          <div style="font-size:13px;color:var(--ink2);margin-bottom:8px">Text alignment</div>
          <div style="display:flex;gap:6px">
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.readerAlign !== 'justify' ? 'var(--accent)' : 'var(--border)'};background:transparent;color:var(--ink);font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ readerAlign: 'left' }))}">Left</button>
            <button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.readerAlign === 'justify' ? 'var(--accent)' : 'var(--border)'};background:transparent;color:var(--ink);font-size:13px;cursor:pointer" data-act="${this.act(() => this.persist({ readerAlign: 'justify' }))}">Justified</button>
          </div>
        </div>
        <div>
          <div style="font-size:13px;color:var(--ink2);margin-bottom:8px">Text weight</div>
          <div style="display:flex;gap:6px">
            ${['light', 'regular', 'bold'].map((w) => `<button style="flex:1;height:36px;border-radius:8px;border:1.5px solid ${s.readerWeight === w ? 'var(--accent)' : 'var(--border)'};background:${s.readerWeight === w ? 'var(--accent-soft)' : 'transparent'};color:var(--ink);font-size:13px;cursor:pointer;text-transform:capitalize" data-act="${this.act(() => this.persist({ readerWeight: w }))}">${w}</button>`).join('')}
          </div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ink2);margin-bottom:6px"><span>Warmth (reduce blue light)</span><span id="lbl-warmth">${s.readerWarmth}%</span></div>
          <input id="range-warmth" type="range" min="0" max="60" step="5" value="${s.readerWarmth}" data-range="readerWarmth" data-unit="%" style="width:100%">
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--border);padding-top:14px">
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px;cursor:pointer"><span>High-contrast mode</span><input type="checkbox" ${s.readerContrast === 'on' ? 'checked' : ''} data-act="${this.act(() => this.persist({ readerContrast: s.readerContrast === 'on' ? 'off' : 'on' }))}" style="width:18px;height:18px"></label>
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px;cursor:pointer"><span>Line-focus (dim other paragraphs)</span><input type="checkbox" ${s.readerLineFocus ? 'checked' : ''} data-act="${this.act(() => this.persist({ readerLineFocus: !s.readerLineFocus }))}" style="width:18px;height:18px"></label>
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px;cursor:pointer"><span>Reduce motion</span><input type="checkbox" ${s.readerReduceMotion ? 'checked' : ''} data-act="${this.act(() => this.persist({ readerReduceMotion: !s.readerReduceMotion }))}" style="width:18px;height:18px"></label>
          <button class="dos-btn-outline" data-act="${this.act(() => this.setState({ readerFocusMode: true, readerPanelOpen: false }))}">Enter distraction-free mode</button>
        </div>
        <p style="font-size:12px;color:var(--ink2);line-height:1.5">These settings apply across every reading page and are remembered on this device. On a topic page, use “Read aloud” and “Highlight page” in the topic toolbar, and the notes field to jot your own thoughts.</p>
        <div style="display:flex;gap:8px;border-top:1px solid var(--border);padding-top:14px">
          <button class="dos-btn-outline" style="flex:1" data-act="${this.act(() => this.exportJSON())}">Export progress</button>
          <label class="dos-btn-outline" style="flex:1;text-align:center;display:flex;align-items:center;justify-content:center">Import<input type="file" accept="application/json" id="import-json-input" style="display:none"></label>
        </div>
      </div>
    </div>`;
  }

  renderAssistant() {
    const s = this.state;
    const fab = `<button class="dos-assistant-fab" aria-label="Open study assistant" data-act="${this.act(() => this.setState({ assistantOpen: !s.assistantOpen }))}">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="10" r="1.3" fill="#fff" stroke="none"></circle><circle cx="15" cy="10" r="1.3" fill="#fff" stroke="none"></circle><rect x="4" y="5" width="16" height="13" rx="5"></rect><line x1="12" y1="2.5" x2="12" y2="5"></line><circle cx="12" cy="2" r="1" fill="#fff" stroke="none"></circle><path d="M9.5 14c.7.6 1.6.9 2.5.9s1.8-.3 2.5-.9"></path></svg>
    </button>`;
    if (!s.assistantOpen) return fab;
    const msgs = s.assistantMsgs.map((m) => {
      const align = m.role === 'user' ? 'flex-end' : 'flex-start';
      const bg = m.role === 'user' ? 'var(--accent)' : 'var(--surface-alt)';
      const color = m.role === 'user' ? 'var(--on-accent)' : 'var(--ink)';
      const radius = m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px';
      const link = m.linkTopicId ? `<button data-act="${this.act(() => { this.setState({ assistantOpen: false }); this.openTopic(m.linkTopicId); })}" style="display:block;margin-top:6px;background:none;border:none;color:var(--accent);font-weight:600;font-size:13px;cursor:pointer;padding:0">Open “${esc(m.linkLabel)}” →</button>` : '';
      return `<div style="align-self:${align};max-width:85%;background:${bg};color:${color};padding:10px 14px;border-radius:${radius};font-size:14px;line-height:1.5;white-space:pre-wrap">${esc(m.text)}${link}</div>`;
    }).join('');
    const typing = s.assistantTyping ? `<div class="dos-typing" style="align-self:flex-start;background:var(--surface-alt);padding:12px 14px;border-radius:14px 14px 14px 4px"><span></span><span></span><span></span></div>` : '';
    const chips = [
      ['Explain Kano model', 'Kano model'], ['What is RICE?', 'RICE'], ['Define North Star metric', 'North Star'],
    ].map(([label, q]) => `<button class="dos-chip" style="color:var(--ink);background:var(--surface-alt)" data-act="${this.act(() => this.assistantSend(q))}">${esc(label)}</button>`).join('');
    return `${fab}<div class="dos-assistant-panel">
      <div style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border);background:linear-gradient(135deg,var(--accent),var(--accent-2))">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" aria-hidden="true"><rect x="4" y="5" width="16" height="13" rx="5"></rect><circle cx="9" cy="11" r="1.2" fill="#fff" stroke="none"></circle><circle cx="15" cy="11" r="1.2" fill="#fff" stroke="none"></circle></svg>
        <div style="flex:1"><div style="font-family:var(--display);font-weight:600;font-size:15px;color:#fff">Study Buddy</div><div style="font-size:11px;color:rgba(255,255,255,.8)">Ask about any concept, term, or question</div></div>
        <button aria-label="Close" data-act="${this.act(() => this.setState({ assistantOpen: false }))}" style="width:30px;height:30px;border-radius:50%;border:none;background:rgba(255,255,255,.2);color:#fff;cursor:pointer;font-size:16px">✕</button>
      </div>
      <div id="dos-assistant-scroll" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px">${msgs}${typing}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 8px">${chips}</div>
      <form id="assistant-form" style="display:flex;gap:8px;padding:12px;border-top:1px solid var(--border)">
        <input id="assistant-input" value="${esc(s.assistantInput)}" placeholder="Ask me anything…" style="flex:1;height:42px;padding:0 14px;border:1px solid var(--border);border-radius:12px;background:var(--bg);color:var(--ink);font-size:14px">
        <button type="submit" aria-label="Send" style="width:42px;height:42px;flex:none;border-radius:12px;border:none;background:var(--accent);color:var(--on-accent);cursor:pointer;display:flex;align-items:center;justify-content:center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10l14-6-6 14-2-6z"></path></svg>
        </button>
      </form>
    </div>`;
  }

  searchResultsHtml() {
    const s = this.state;
    const TOPICS = this.data.TOPICS, ORDER = this.data.TOPIC_ORDER;
    const q = s.q.trim().toLowerCase();
    const pool = q ? ORDER.filter((id) => { const t = TOPICS[id]; return (t.title + ' ' + t.def + ' ' + t.why).toLowerCase().includes(q); }) : ORDER.slice(0, 6);
    const results = pool.slice(0, 8);
    const rows = results.map((id) => `<button data-dos-row data-act="${this.act(() => { this.setState({ searchOpen: false }); this.openTopic(id); })}" style="display:flex;flex-direction:column;gap:2px;width:100%;padding:10px 12px;border:none;border-radius:8px;background:transparent;cursor:pointer;text-align:left;color:var(--ink)">
      <span style="font-size:15px;font-weight:500">${esc(TOPICS[id].title)}</span>
      <span style="font-size:12px;color:var(--ink2)">${esc(TOPICS[id].bookLabel)} · ${esc(TOPICS[id].chapter)}</span>
    </button>`).join('');
    const noResults = q && results.length === 0;
    return `${rows}${noResults ? `<div style="padding:24px;text-align:center;font-size:14px;color:var(--ink2)">No matches for “${esc(s.q)}.” Try Search from the sidebar for the full concept index.</div>` : ''}`;
  }

  renderSearchModal() {
    const s = this.state;
    if (!s.searchOpen) return '';
    return `<div class="dos-search-scrim" data-act="${this.act(() => this.setState({ searchOpen: false }))}">
      <div role="dialog" aria-label="Search" data-stop="1" class="dos-search-box">
        <div style="display:flex;align-items:center;gap:10px;padding:0 16px;border-bottom:1px solid var(--border)">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="var(--ink2)" stroke-width="1.5" aria-hidden="true" style="flex:none"><circle cx="8" cy="8" r="5.5"></circle><line x1="12.5" y1="12.5" x2="15.5" y2="15.5"></line></svg>
          <input id="dos-search-input" type="text" value="${esc(s.q)}" placeholder="Search topics, laws, concepts…" style="flex:1;height:52px;border:none;outline:none;background:transparent;color:var(--ink);font-size:16px">
          <span class="dos-kbd">esc</span>
        </div>
        <div id="dos-search-results" style="max-height:50vh;overflow:auto;padding:8px">${this.searchResultsHtml()}</div>
      </div>
    </div>`;
  }

  renderMobileNav() {
    const s = this.state;
    if (!s.mobileNavOpen) return '';
    const items = NAV_ITEMS.map(([label, id]) => `<button data-dos-nav data-active="${s.route.sec === id}" data-act="${this.act(() => this.goSection(id))}" style="height:48px;color:var(--ink)">${esc(label)}</button>`).join('');
    return `<div class="dos-mobilenav-scrim" data-act="${this.act(() => this.setState({ mobileNavOpen: false }))}">
      <div role="dialog" aria-label="Navigation" data-stop="1" style="width:100%;background:var(--surface);border-top-left-radius:16px;border-top-right-radius:16px;padding:12px 16px 32px;max-height:80vh;overflow:auto">
        <div style="width:32px;height:4px;border-radius:99px;background:var(--border);margin:0 auto 12px"></div>
        <div style="display:flex;flex-direction:column;gap:2px">${items}</div>
      </div>
    </div>`;
  }

  // ---------- main render ----------
  render() {
    const active = document.activeElement;
    const focusInfo = active && active.id ? { id: active.id, start: active.selectionStart, end: active.selectionEnd } : null;

    this._actions = new Map();
    this._actId = 0;

    const s = this.state;
    const plan = this.planDb.buildDays();
    const doneOf = (d) => d.tasks.every((tk) => s.dayChecks['d' + d.n + '-' + tk.id]);
    const planDoneCount = plan.filter(doneOf).length;
    this._planPctCache = plan.length ? Math.round((planDoneCount / plan.length) * 100) : 0;

    let mainHtml = '';
    switch (s.route.sec) {
      case 'library': mainHtml = renderChapters(this); break;
      case 'cards': mainHtml = renderFlashcards(this); break;
      case 'gym': mainHtml = renderGym(this); break;
      case 'sheets': mainHtml = renderSheets(this); break;
      case 'glossary': mainHtml = renderConcepts(this); break;
      case 'progress': mainHtml = renderProgress(this); break;
      case 'reading': mainHtml = renderReadingList(this); break;
      default: mainHtml = renderDashboard(this); break;
    }

    const root = document.getElementById('dos-root');
    root.className = 'dos ' + this.themeClass() + ' ' + (s.readerFont === 'serif' ? 'serifprose' : 'sansprose') + (s.readerFocusMode ? ' reading-mode' : '');
    root.innerHTML = `
      ${!s.isMobile ? this.renderSidebar() : ''}
      <div style="flex:1;min-width:0;display:flex;flex-direction:column">
        ${this.renderHeader()}
        ${this.renderReaderPanel()}
        ${this.renderAssistant()}
        <main class="dos-main">${mainHtml}</main>
      </div>
      ${this.renderSearchModal()}
      ${this.renderMobileNav()}
      <div id="dos-warmth-overlay" class="warmth-overlay" style="background:#FF9900;opacity:${(s.readerWarmth / 100 * 0.35).toFixed(2)}"></div>
      ${s.readerFocusMode ? `<button data-act="${this.act(() => this.setState({ readerFocusMode: false }))}" style="position:fixed;top:16px;right:16px;z-index:60;height:40px;padding:0 16px;border-radius:99px;border:1px solid var(--border);background:var(--surface);color:var(--ink);font-size:13px;font-weight:600;cursor:pointer;box-shadow:var(--shadow1)">✕ Exit distraction-free mode</button>` : ''}
    `;

    this.wireEvents(root);
    const importInput = document.getElementById('import-json-input');
    if (importInput) importInput.addEventListener('change', (e) => { if (e.target.files && e.target.files[0]) this.importJSON(e.target.files[0]); });

    if (focusInfo) {
      const el = document.getElementById(focusInfo.id);
      if (el) {
        el.focus();
        if (focusInfo.start != null && typeof el.setSelectionRange === 'function') {
          try { el.setSelectionRange(focusInfo.start, focusInfo.end); } catch (e) {}
        }
      }
    }
  }

  wireEvents(root) {
    if (this._wired) return;
    this._wired = true;

    root.addEventListener('click', (e) => {
      const actEl = e.target.closest('[data-act]');
      if (!actEl) return;
      const isScrim = actEl.classList.contains('dos-modal-scrim') || actEl.classList.contains('dos-search-scrim') || actEl.classList.contains('dos-mobilenav-scrim');
      if (isScrim && e.target.closest('[data-stop]')) return; // click landed inside dialog content, not the backdrop
      const fn = this._actions.get(actEl.getAttribute('data-act'));
      if (fn) fn(e);
    });

    root.addEventListener('change', (e) => {
      const t = e.target;
      if (t.id === 'import-json-input' && t.files && t.files[0]) { this.importJSON(t.files[0]); return; }
      if (t.hasAttribute('data-range')) { this.commitRange(t); return; }
      const el = t.closest('[data-act]');
      if (el) { const fn = this._actions.get(el.getAttribute('data-act')); if (fn) fn(e); }
    });

    root.addEventListener('input', (e) => {
      const t = e.target;
      if (t.hasAttribute('data-range')) { this.liveRange(t); return; }
      if (t.id === 'dos-search-input') {
        this.state.q = t.value;
        const c = document.getElementById('dos-search-results');
        if (c) c.innerHTML = this.searchResultsHtml();
        return;
      }
      if (t.id === 'assistant-input') { this.state.assistantInput = t.value; return; }
      const el = t.closest('[data-act]');
      if (el) { const fn = this._actions.get(el.getAttribute('data-act')); if (fn) fn(e); }
    });

    root.addEventListener('submit', (e) => {
      if (e.target.id === 'assistant-form') {
        e.preventDefault();
        this.assistantSend(this.state.assistantInput);
      }
    });
  }

  liveRange(el) {
    const key = el.getAttribute('data-range');
    const val = Number(el.value);
    if (key.indexOf('wbScore-') === 0) {
      const label = key.slice('wbScore-'.length);
      this.state.wbScores[label] = val;
      const lbl = document.getElementById('lbl-wbScore-' + label.replace(/\s/g, ''));
      if (lbl) lbl.textContent = val + ' / 5';
      return;
    }
    this.state[key] = val;
    if (key === 'readerWarmth') {
      const overlay = document.getElementById('dos-warmth-overlay');
      if (overlay) overlay.style.opacity = (val / 100 * 0.35).toFixed(2);
      const lbl = document.getElementById('lbl-warmth');
      if (lbl) lbl.textContent = val + '%';
      return;
    }
    const root = document.getElementById('dos-root');
    const cssVarMap = { readerFontScale: '--r-font', readerLh: '--r-lh', readerMeasure: '--r-measure', readerLs: '--r-ls', readerWs: '--r-ws', readerPs: '--r-ps' };
    if (cssVarMap[key] && root) root.style.setProperty(cssVarMap[key], key === 'readerMeasure' ? val + 'px' : val);
    const lblMap = { readerFontScale: 'lbl-font-scale', readerLh: 'lbl-line-height', readerMeasure: 'lbl-measure', readerLs: 'lbl-ls', readerWs: 'lbl-ws', readerPs: 'lbl-ps' };
    const lbl = document.getElementById(lblMap[key]);
    if (lbl) lbl.textContent = val + el.getAttribute('data-unit');
  }

  commitRange(el) {
    const key = el.getAttribute('data-range');
    if (key.indexOf('wbScore-') === 0) {
      const label = key.slice('wbScore-'.length);
      this.persist({ wbScores: Object.assign({}, this.state.wbScores, { [label]: Number(el.value) }) });
      return;
    }
    this.persist({ [key]: Number(el.value) });
  }
}

function main() {
  const app = new App();
  window.__dos = app;
  app.render();
  app.bumpStreak();

  const mq = window.matchMedia('(max-width: 920px)');
  mq.addEventListener('change', () => app.setState({ isMobile: mq.matches }));

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      app.openSearch();
    } else if (e.key === 'Escape') {
      app.setState({ searchOpen: false, mobileNavOpen: false, readerPanelOpen: false, assistantOpen: false });
    } else if (e.key === ' ' && app.state.route.sec === 'cards' && app.state.deckId && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      app.setState({ cardFlipped: !app.state.cardFlipped });
    } else if ((e.key === 'ArrowRight') && app.state.route.sec === 'cards' && app.state.deckId) {
      app.setState({ cardIndexByDeck: Object.assign({}, app.state.cardIndexByDeck, { [app.state.deckId]: (app.state.cardIndexByDeck[app.state.deckId] || 0) + 1 }), cardFlipped: false });
    }
  });

  setInterval(() => app.tick(), 1000);
}

main();
