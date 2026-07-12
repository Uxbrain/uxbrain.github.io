// Portfolio Project Builder — 5 archetypes with deliverables checklists.

export const PORTFOLIO_ARCHETYPES = [
  { id: 'p1', title: 'End-to-end App Design', tag: 'Breadth story', items: [
    'Problem framing doc: user, business context, success metric, non-goals',
    'Evidence: at least 3 real user conversations or a support-ticket theme analysis',
    'Flows for the 2–3 red routes, including one unhappy path each',
    'All 5 screen states designed for the primary flow (empty/loading/ideal/partial/error)',
    'A small token system: type scale, spacing scale, 6–8 components with states',
    'Outcome section: what you’d measure, what you’d test first',
  ]},
  { id: 'p2', title: 'Feature Redesign', tag: 'Depth + trade-off story', items: [
    'Before/after framing: what specifically was broken, with evidence (data or heuristic audit)',
    'At least 2 alternative directions explored and explicitly killed, with reasons',
    'The shipped direction’s full flow, states, and edge cases',
    'A stated metric hypothesis: what should move, and by how much',
    'One clearly named trade-off you accepted',
  ]},
  { id: 'p3', title: 'Data / Analytics Dashboard', tag: 'Systems + density story', items: [
    'A clear "what does this user check daily" hierarchy decision',
    'Progressive disclosure: summary view → drill-down, not one dense screen',
    'A component built for numeric density: tabular figures, sticky headers, sort/filter',
    'At least one alternative chart-choice decision explained (why this chart, not that one)',
    'Empty and loading states for a data-heavy screen — the hardest states to get right',
  ]},
  { id: 'p4', title: 'AI / Conversational UX', tag: 'Modern-design story', items: [
    'A stated autonomy-calibration decision: act-with-undo vs suggest vs propose-and-confirm',
    'Confidence framing and source citation shown in the UI, not just promised',
    'A designed failure/correction path — what happens when the AI is wrong',
    'A conversational or hybrid GUI+chat interaction, with an explicit "escape to GUI" moment',
    'Your point of view on what shouldn’t be automated in this flow, and why',
  ]},
  { id: 'p5', title: 'Multi-platform / Service Design', tag: 'Scale story', items: [
    'A journey spanning at least 2 touchpoints (app + support call, or app + physical/in-person)',
    'A service blueprint: frontstage actions mapped against backstage systems/processes',
    'At least one moment where the fix is a process change, not a UI change — named explicitly',
    'Consistency decisions across platforms: what’s shared, what’s intentionally different',
    'A cross-team collaboration note: who else had to agree for this to ship',
  ]},
];
