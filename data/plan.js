// My Plan — a full, self-paced mastery curriculum organized as Week → Day.
// Not capped at 60 days: mastery over speed. Days unlock by completion, never by calendar.
// Each "unit" becomes ~2 days of study; every day has read + practice + apply/quiz tasks.

const CURRICULUM = [
  { phase: 'Beginner', weeks: [
    { title: 'What Design Really Is', topics: ['UI vs UX vs Product Design', 'Design Thinking', 'Human-Centered Design', 'The Double Diamond'] },
    { title: 'How Users Think', topics: ['Mental Models', 'Cognitive Load', 'Recognition over Recall', 'Affordances & Signifiers'] },
    { title: 'The Language of Interfaces', topics: ['Common UI Patterns', 'Navigation Models', 'Buttons, Inputs & Controls', 'Feedback & System Status'] },
  ]},
  { phase: 'Foundation', weeks: [
    { title: 'UX Laws I', topics: ['Fitts’s Law', 'Hick’s Law', 'Jakob’s Law', 'Miller’s Law'] },
    { title: 'UX Laws II', topics: ['Tesler’s Law', 'Peak-End Rule', 'Zeigarnik Effect', 'Doherty Threshold', 'Weber’s Law'] },
    { title: 'Perception & Gestalt', topics: ['Proximity & Common Region', 'Similarity & Continuity', 'Figure/Ground & Closure', 'Visual Hierarchy'] },
    { title: 'Cognitive Biases in Design', topics: ['Loss Aversion & Prospect Theory', 'Anchoring & Framing', 'Social Proof', 'Default Effect'] },
    { title: 'Typography & Color', topics: ['Type Scales & Hierarchy', 'Line-height & Measure', 'Color Theory & Ramps', 'Contrast & WCAG AA'] },
    { title: 'Layout & Composition', topics: ['Grid Systems', 'Spacing Scales (8pt)', 'Alignment & Balance', 'Whitespace & Rhythm'] },
  ]},
  { phase: 'Intermediate', weeks: [
    { title: 'UX Research: Methods', topics: ['Generative vs Evaluative', 'User Interviews & The Mom Test', 'Usability Testing (5-user)', 'Surveys & Analytics'] },
    { title: 'UX Research: Synthesis', topics: ['Affinity Mapping', 'Jobs-To-Be-Done', 'Personas & Journey Maps', 'Empathy Maps'] },
    { title: 'Information Architecture', topics: ['Taxonomy vs Ontology', 'Card Sorting & Tree Testing', 'Navigation & Wayfinding', 'Search & Faceted Filtering'] },
    { title: 'Flows & Screen States', topics: ['User Flows & Red Routes', 'The Five Screen States', 'Empty States as Onboarding', 'Error Prevention & Recovery'] },
    { title: 'Interaction & Motion', topics: ['Micro-interactions (Saffer)', 'Motion Principles', 'Feedback Hierarchy', 'Forms & Validation'] },
    { title: 'Content & UX Writing', topics: ['Clarity over Cleverness', 'Voice & Tone', 'Error Message Design', 'Microcopy for Trust'] },
    { title: 'Accessibility', topics: ['WCAG POUR Principles', 'Screen Readers & ARIA', 'Keyboard & Focus States', 'Inclusive & Cognitive Accessibility'] },
    { title: 'Mobile & Responsive', topics: ['iOS HIG & Material 3', 'Touch Targets & Thumb Zones', 'Responsive vs Adaptive', 'Notifications & Permissions'] },
  ]},
  { phase: 'Advanced', weeks: [
    { title: 'Design Systems I', topics: ['Why Systems Exist', 'Auto Layout as Flexbox', 'Design Tokens', 'Primitive → Semantic → Component'] },
    { title: 'Design Systems II', topics: ['Atomic Design', 'Component APIs & Slots', 'Variants & States', 'Governance & Versioning'] },
    { title: 'Enterprise & B2B UX', topics: ['Role-Based & Permission UI', 'Admin vs End-User Surfaces', 'Data-Dense Defaults', 'Internal Stakeholders as Users'] },
    { title: 'Product Thinking', topics: ['Business Models', 'AARRR & North Star', 'RICE, MoSCoW & Kano', 'OKRs for Designers'] },
    { title: 'Data & Experimentation', topics: ['A/B Testing Done Right', 'Analytics Fluency', 'HEART Framework', 'Guardrail Metrics'] },
    { title: 'Service & Strategy', topics: ['Service Blueprints (Frontstage/Backstage)', 'Competitive Analysis', 'Brand Systems in Product', 'Workshop Facilitation'] },
  ]},
  { phase: 'Expert', weeks: [
    { title: 'AI-Native Design', topics: ['Designing for Non-Determinism', 'Autonomy Calibration', 'RAG & Grounding', 'Conversational & Multimodal UX'] },
    { title: 'AI Technical Literacy', topics: ['How LLMs Work', 'Context Windows & Temperature', 'Agents, MCP & Function Calling', 'Evals & AI Safety'] },
    { title: 'Engineering for Designers', topics: ['The Stack & APIs', 'REST vs GraphQL', 'Performance & Perceived Speed', 'Design Handoff & Dev Mode'] },
    { title: 'Data Visualization', topics: ['Chart Choice (Cleveland/Tufte)', 'Information Density', 'Dashboard Design', 'Accessible Viz'] },
    { title: 'Ethics & Emerging Surfaces', topics: ['Positive Design Ethics', 'Privacy by Design', 'Voice & Spatial UI', 'Design Leadership Ladder'] },
  ]},
  { phase: 'Industry Mastery', weeks: [
    { title: 'The Case Study Skeleton', topics: ['Context → Evidence → Killed Options', 'Decision & Trade-offs', 'Craft & Outcome', 'NDA-Safe Storytelling'] },
    { title: 'The Interview Loop', topics: ['Portfolio Presentation', 'App Critique Framework', 'Whiteboard Framework', 'Behavioral / STAR'] },
    { title: 'Craft & Systems Round', topics: ['Live Component Building', 'Google vs Meta Rubrics', 'Fail Signals to Avoid', 'The Closing Sentence'] },
    { title: 'Portfolio & Positioning', topics: ['5 Project Archetypes', 'Metrics-First Rewrites', 'Anchor Stories (STAR)', 'Career-Switch Credibility'] },
  ]},
];

export function buildDays() {
  const days = [];
  let dayNum = 1;
  let weekNum = 1;
  CURRICULUM.forEach((phase) => {
    phase.weeks.forEach((wk) => {
      const topics = wk.topics;
      // 2 days per week-unit: split topics across the two days
      const half = Math.ceil(topics.length / 2);
      for (let d = 0; d < 2; d++) {
        const slice = topics.slice(d * half, d * half + half);
        if (!slice.length) continue;
        const tasks = slice.map((t, i) => ({ id: 'read-' + weekNum + '-' + d + '-' + i, label: 'Learn: ' + t }));
        tasks.push({ id: 'quiz-' + weekNum + '-' + d, label: 'Take the recall quiz on today’s concepts' });
        if (d === 1) {
          tasks.push({ id: 'apply-' + weekNum, label: 'Apply: work one of today’s ideas into a real screen or critique' });
        } else {
          tasks.push({ id: 'flash-' + weekNum + '-' + d, label: 'Flashcard session — 10 minutes, any due deck' });
        }
        days.push({
          n: dayNum,
          weekN: weekNum,
          phase: phase.phase,
          theme: wk.title + (d === 1 ? ' — deepen & apply' : ''),
          estMins: 40 + slice.length * 12,
          tasks,
        });
        dayNum++;
      }
      weekNum++;
    });
  });
  return days;
}

export const BEYOND_PLAN = {
  title: 'Beyond the Core Plan — the compounding phase',
  body: 'Finishing this curriculum makes you interview-ready and genuinely senior in your thinking. What comes after isn’t more days to grind — it’s rhythm: keep 2–3 app critiques and one whiteboard drill weekly, revisit your weakest domains monthly, refresh your anchor stories every time a project ships, and re-take quizzes on anything below 80%. There’s no finish line — mastery is maintained, not completed.',
};
