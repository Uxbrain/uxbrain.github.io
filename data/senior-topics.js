// Senior & Staff topics — leadership, people, teamwork, decision-making and the
// frameworks a senior/staff product designer is expected to own. Same page template
// as the Library topics (def, why, body, examples, mistake, interview). IDs 'sr##'.

export const TOPICS = {

  sr01: {
    id: 'sr01', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Frameworks',
    title: 'Jobs To Be Done (JTBD)',
    def: 'People don’t buy products, they “hire” them to make progress in a specific situation. A job is the progress a person is trying to make, described independent of any solution.',
    why: 'JTBD is the senior antidote to feature-thinking and persona clichés. It reframes “who is the user (25–34, urban)” into “what progress are they trying to make, and what’s stopping them” — which is what actually predicts whether they’ll adopt your design.',
    blocks: [
      { t: 'p', text: 'A job statement is written as: When [situation], I want to [motivation], so I can [expected outcome]. Notice there is no product in it — “when I move to a new city, I want to furnish my flat without overspending, so I can feel settled fast.” IKEA, Facebook Marketplace and a loan all compete for that same job.' },
      { t: 'h', text: 'Three layers of every job' },
      { t: 'ul', items: [
        'Functional — the practical task (get a receipt, split a bill, learn a concept).',
        'Emotional — how the person wants to feel while doing it (in control, unjudged, competent).',
        'Social — how they want to be perceived by others (a savvy shopper, a good manager).',
      ]},
      { t: 'h', text: 'The four forces of progress (the switch)' },
      { t: 'p', text: 'People switch to a new solution only when Push + Pull > Anxiety + Habit. Push is frustration with today. Pull is the attraction of the new. Anxiety is fear of the new thing going wrong. Habit is the comfort of the current way. The fastest wins usually come from reducing anxiety and habit — the two forces your competitors ignore because they’re busy shouting about pull.' },
    ],
    examples: [
      { label: 'Example · Onboarding drop-off', text: 'A budgeting app blamed low activation on “lazy users.” A JTBD switch interview revealed the real forces: strong push (overspending scared them), decent pull (nice charts), but huge anxiety (“will it see my bank password?”) and habit (a trusted spreadsheet). The team stopped adding chart types and instead added a read-only bank connection with a visible “we never store your login.” Activation jumped — they’d reduced anxiety, not increased pull.' },
      { label: 'Example · Writing a job statement', text: 'Weak: “Users want a faster dashboard.” JTBD: “When I’m asked for numbers in a meeting I didn’t prepare for, I want to find the one metric that answers the question in seconds, so I don’t look unprepared.” That statement instantly reprioritises search and a single hero number over yet another chart.' },
    ],
    mistake: 'Turning JTBD into a persona in disguise (“busy mums who want convenience”). A job has no demographic and no product — the moment yours does, you’ve stopped using it.',
    interview: 'Strong signal: “I don’t start from who the user is; I start from the progress they’re stuck making and the forces holding them back. Most adoption problems are anxiety and habit, not a missing feature.”',
    related: ['sr02', 'sr04'],
  },

  sr02: {
    id: 'sr02', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Frameworks',
    title: 'Making & Defending Design Decisions',
    def: 'Senior work is judged on decision quality under ambiguity, not output. A defensible decision names the problem, the options considered, the trade-off made, and how you’ll know if you were wrong.',
    why: 'The thing that reads as “senior” in a portfolio review is not the pixels — it’s the sentence “we chose A over B because…”. Interviewers probe with three “why”s in a row; a decision you can’t defend past the third why collapses.',
    blocks: [
      { t: 'h', text: 'The anatomy of a good decision' },
      { t: 'ul', items: [
        'Problem framed — one primary metric, one guardrail, named before designing.',
        'Options — at least two meaningfully different, not one plus two strawmen.',
        'Trade-off made explicit — every real decision costs something; name what you gave up.',
        'Reversibility — one-way doors (hard to undo) deserve more rigour than two-way doors.',
        'A falsifiable bet — “we expect X; if we see Y instead, we were wrong” — written before launch.',
      ]},
      { t: 'p', text: 'Record it. A one-paragraph decision record (context → options → decision → trade-off → revisit-if) turns a defensible decision into a durable one your team can revisit without re-litigating.' },
      { t: 'h', text: 'When you’re overruled' },
      { t: 'p', text: 'Bring the user cost as evidence, not opinion. If you’re still overruled after quantifying it cheaply, disagree and commit: argue hard once, then support the decision fully and instrument it so the data settles it. Quiet sabotage of a decision you lost is how senior people lose trust.' },
    ],
    examples: [
      { label: 'Example · The third why', text: '“Why a bottom sheet?” Because it keeps context. “Why does context matter here?” Because users lost their place in the old modal. “Why did that matter?” Because 22% abandoned at that step and session replays showed re-orientation. Each why should hit evidence, not taste — that’s the difference between a decision and a preference.' },
      { label: 'Example · One-way vs two-way door', text: 'Changing a button colour is a two-way door — ship it, measure, revert cheaply. Changing your data model or a core navigation pattern is a one-way door — worth a prototype test with 5 users first. Matching rigour to reversibility is senior judgement; treating everything as high-stakes is just slow.' },
    ],
    mistake: 'Defending decisions with adjectives (“it feels cleaner”). Feelings aren’t defensible; mechanisms and evidence are.',
    interview: '“I make the trade-off explicit and tie it to a metric and a guardrail before I design. And I calibrate rigour to reversibility — I don’t user-test a font tweak, and I don’t ship a data-model change on a hunch.”',
    related: ['sr01', 'sr10'],
  },

  sr03: {
    id: 'sr03', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Prioritisation',
    title: 'Prioritisation Frameworks',
    def: 'Structured ways to decide what to build next — RICE, ICE, Kano and MoSCoW — used as conversation tools that force estimates over opinions, not as truth machines.',
    why: '“Everything is a priority” is where junior teams live. A senior designer brings a shared, explicit method so prioritisation becomes a defensible group decision instead of the loudest stakeholder winning.',
    blocks: [
      { t: 'ul', items: [
        'RICE — Reach × Impact × Confidence ÷ Effort. Best for roadmap debates; the point is that estimating each factor out loud surfaces disagreement about reality.',
        'ICE — Impact × Confidence × Ease. A lighter, faster RICE for quick triage when you don’t have reach numbers.',
        'Kano — classifies features as Basic (expected; their absence angers), Performance (more is better), or Delighters (unexpected joy). Basics are non-negotiable; you can’t delight your way out of a missing basic.',
        'MoSCoW — Must / Should / Could / Won’t. Best for scoping a specific release, especially the explicit “Won’t (this time)” that protects the timeline.',
      ]},
      { t: 'p', text: 'The framework is never the decision — it’s a way to make the argument visible. When two people score the same feature 3 and 9 on Impact, the number isn’t the value; the conversation about why is.' },
    ],
    examples: [
      { label: 'Example · Kano saves a launch', text: 'A team wanted to ship a “delightful” animated onboarding while live-tracking (a Basic for a delivery app) was still flaky. Kano reframed it: no amount of delighter fixes a missing basic. They shipped reliable tracking first — boring, and exactly right.' },
      { label: 'Example · RICE exposing a fantasy', text: 'A stakeholder’s pet feature “felt huge.” Scoring it revealed Reach was ~4% of users and Confidence was low (no data). The same 15 minutes surfaced a tiny fix with 100% reach and high confidence. RICE didn’t decide — it made the opportunity cost impossible to ignore.' },
    ],
    mistake: 'Treating the score as objective truth. Garbage estimates produce confident-looking garbage; the value is the forced conversation, not the decimal.',
    interview: '“I use RICE to turn opinions into estimates in a roadmap conversation, and Kano to stop a team polishing delighters while a basic is broken. The framework is a conversation tool, not a verdict.”',
    related: ['sr02', 'sr10'],
  },

  sr04: {
    id: 'sr04', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Teamwork',
    title: 'Driving Cross-Functional Alignment',
    def: 'Getting the right thing built when you don’t control the roadmap or the engineers — by making the better path the visible, low-friction, evidence-backed one.',
    why: 'A senior designer’s leverage isn’t the org chart; it’s the ability to move a cross-functional team. Most design work dies not because it’s wrong but because the designer couldn’t bring PM, engineering and research along.',
    blocks: [
      { t: 'h', text: 'How influence actually works' },
      { t: 'ul', items: [
        'Let people touch the evidence. A 30-second clip of a user failing beats any slide. Data delivered as experience persuades; data delivered as argument threatens.',
        'Bring engineers in during exploration, not at handoff — feasibility issues are cheap to fix before the design is “done,” and co-ownership makes them defend the work.',
        'Convert disagreements into measurable questions. “You think faster, I think clearer — let’s define the guardrail and test both” turns a fight into an experiment.',
        'Reduce the cost of the right thing: pre-validated components, ready templates, a states checklist — make quality the default, not an act of heroism.',
      ]},
      { t: 'p', text: 'Give every collaborator a reason to say yes: the PM a metric, the engineer a smaller build, the researcher a real question. Influence is designing the incentives around the decision, not winning the argument in the room.' },
    ],
    examples: [
      { label: 'Example · Accessibility adopted, not argued', text: 'Marketing saw a WCAG audit as overhead. Instead of arguing, the designer had them navigate their own banner with a screen reader and a contrast simulator — experience beat the slide. Then pre-validated colour tokens made the failing combinations un-pickable. Advocacy that redesigns the incentive wins where the lecture failed.' },
      { label: 'Example · “Not feasible” decoded', text: 'An eng lead kept rejecting designs as “not feasible.” Thirty minutes of weekly pairing revealed “not feasible” meant “not by Friday.” Most difficult collaborators are un-communicated constraints wearing a face; proximity, not persuasion, dissolves them.' },
    ],
    mistake: 'Trying to win with authority you don’t have (“as the designer, I decide the UX”). It’s technically true and completely ineffective.',
    interview: '“I don’t rely on being right; I make the better path the easy path — bring engineers in early, let stakeholders touch the evidence, and turn disagreements into a guardrail we can test.”',
    related: ['sr05', 'sr10'],
  },

  sr05: {
    id: 'sr05', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'People',
    title: 'Running a Design Critique',
    def: 'A structured session where a team improves work-in-progress against its intent — not a taste vote, not an approval gate.',
    why: 'Critique is the single highest-leverage ritual for raising a team’s quality bar. Run badly it’s a demoralising opinion pile-on; run well it’s how craft compounds across a team.',
    blocks: [
      { t: 'h', text: 'The rules that make it work' },
      { t: 'ul', items: [
        'The presenter opens by stating the problem, the stage, and the kind of feedback they want. Feedback aimed at the wrong stage (polishing a concept) is wasted.',
        'Critics respond to the stated intent, not their personal aesthetic. “Against your goal of reducing anxiety, this red felt alarming” — not “I don’t like red.”',
        'Questions before verdicts; problems, not prescriptions. “Users missed this control twice” beats “make it bigger” — it names the problem and leaves the solution to the designer.',
        'The presenter writes everything down and defends nothing live. Debating in the room turns critique into a courtroom.',
      ]},
      { t: 'p', text: 'Useful feedback names a problem and its evidence. Useless feedback is a preference cosplaying as a principle. A senior designer’s job is to model the former and gently reframe the latter in real time.' },
    ],
    examples: [
      { label: 'Example · Reframing taste into a problem', text: '“This feels cheap.” The facilitator probes: “what specifically — the imagery, the density, the type?” It surfaces that stock photos clashed with a premium repositioning. Now it’s an actionable problem, fixable in a day, instead of an insult.' },
      { label: 'Example · Protecting the stage', text: 'A designer brings early wireframes; a stakeholder critiques the colours. The facilitator: “this is structure stage — colour comes next week; today, does the flow make sense?” Guarding the stage is what keeps critique from derailing into bikeshedding.' },
    ],
    mistake: 'Letting critique become an approval meeting where the loudest or most senior voice “wins.” That trains everyone to design for the room, not the user.',
    interview: '“I run critique so the presenter sets the intent and the type of feedback wanted, and critics respond to that intent with problems and evidence, not prescriptions. It’s how a team’s quality bar rises without me touching every file.”',
    related: ['sr06', 'sr08'],
  },

  sr06: {
    id: 'sr06', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'People',
    title: 'Mentoring & Growing Junior Designers',
    def: 'Multiplying a team’s output by growing its people — through feedback, calibrated delegation, and teaching decision-making rather than handing over answers.',
    why: 'At senior and especially staff level, your impact stops being what you ship and becomes what your team ships because of you. “Designs through others” is the phrase interviewers listen for.',
    blocks: [
      { t: 'h', text: 'How to actually grow someone' },
      { t: 'ul', items: [
        'Give problems and context, not tasks and mockups. “Here’s the drop-off and the constraint” grows a designer; “make this screen” grows a pixel-pusher.',
        'Feedback anchored to the work’s goal, not the person. “This screen’s hierarchy fights its own CTA — walk me through the intent?” opens a conversation; “this feels junior” closes one.',
        'Calibrate delegation to their level: a junior gets a scoped surface with tight loops; a mid-level gets a problem and a check-in; over-delegating drowns people, under-delegating starves them.',
        'Make the invisible visible — narrate your own decisions out loud so they learn the judgement, not just the output.',
      ]},
      { t: 'p', text: 'One durable rule that transforms juniors: every element needs a “because.” Within two months of enforcing it in reviews, their stakeholder presentations change, because they’ve learned to think in decisions, not decorations.' },
    ],
    examples: [
      { label: 'Example · The “because” rule', text: 'A junior produced beautiful screens but couldn’t explain a single choice. One rule — every element needs a because — reframed her craft from decoration to decision. Her next portfolio review was unrecognisable.' },
      { label: 'Example · Delegation gone wrong', text: 'A lead handed a junior a fuzzy “redesign onboarding” with no context and was frustrated by the result. The fix wasn’t doing it himself — it was giving the problem (activation drop at step 2), the constraint (no new backend), and a mid-week check-in. Same person, transformed output.' },
    ],
    mistake: 'Mentoring by taking the work back (“let me just fix it”). It ships one better screen and teaches nothing; multiplier work is slower now for faster forever.',
    interview: '“My leverage is craft plus judgement, multiplied through people — I give problems and context, anchor feedback to the goal, and teach decision-making so the team ships better work without me in every file.”',
    related: ['sr05', 'sr07'],
  },

  sr07: {
    id: 'sr07', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Culture',
    title: 'Building Design Culture',
    def: 'The shared habits, rituals and standards that make good design the default in a team — built through wins and tools, not memos and manifestos.',
    why: 'You can’t argue a team into caring about craft. Culture is what happens by default when no one is watching, and a senior designer shapes it deliberately or watches it rot.',
    blocks: [
      { t: 'h', text: 'How culture actually changes' },
      { t: 'ul', items: [
        'Wins before rituals — fix one visible problem measurably, narrate how you did it, then introduce the habit. Credibility precedes culture.',
        'Artifacts over arguments — a states checklist, a critique format, tokens that make quality the default. Culture changes through tools and rituals people use, not values on a wall.',
        'Make the right way the easy way — if doing the accessible, systematic, tested thing is more work, people won’t; if it’s the path of least resistance, they will.',
        'Protect the bar on red routes absolutely; let low-traffic surfaces ship “consistent” rather than “perfect.” A culture that demands perfection everywhere burns out and ships nothing.',
      ]},
      { t: 'p', text: 'Treat the design system, the critique ritual and the quality checklist as products, not projects — they need an owner, a changelog and maintenance, or they decay into a rotting UI kit and a meeting nobody respects.' },
    ],
    examples: [
      { label: 'Example · Wins, then rituals', text: 'A designer joining a team with no design culture didn’t open with “we should do critiques.” She fixed a checkout leak measurably, told the story of how, and only then proposed a weekly critique — which the team now wanted, because it clearly worked.' },
      { label: 'Example · Incentive redesign', text: 'To get accessibility adopted, the team didn’t write a policy — they built pre-validated tokens so inaccessible combinations couldn’t be selected. The right way became the only easy way, and adoption followed without a single lecture.' },
    ],
    mistake: 'Trying to install culture with a values deck or a Slack manifesto. Culture follows credibility and tools; announcements change nothing.',
    interview: '“I change culture with wins and artifacts, not memos — fix something visible, narrate it, then make the better way the easy way with a checklist or tokens. Culture is what the team does by default.”',
    related: ['sr05', 'sr06'],
  },

  sr08: {
    id: 'sr08', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Leadership',
    title: 'Senior vs Staff: the Multiplier',
    def: 'Seniority is measured by the scope of ambiguity you can absorb, not years. Senior ships great features end-to-end and owns a surface; staff makes the product “make sense as a whole” and multiplies others.',
    why: 'Hiring managers actively hunt title inflation — a portfolio that claims staff but shows only feature-level execution. Knowing the real difference lets you both level yourself honestly and tell the multiplier story that earns the title.',
    blocks: [
      { t: 'h', text: 'The ladder, by scope' },
      { t: 'ul', items: [
        'Junior — executes a defined solution well.',
        'Mid — owns a defined problem and returns a shipped answer.',
        'Senior — is handed a fuzzy outcome, frames it, and returns a validated, shipped result; owns a surface or vertical; names trade-offs unprompted.',
        'Staff — designs through others and across surfaces; does multiplier work (systems, standards, mentoring) and makes the whole product coherent, not just their slice.',
      ]},
      { t: 'h', text: 'Staff archetypes (borrowed from engineering, they map cleanly to design)' },
      { t: 'ul', items: [
        'The Right Hand / Team Lead — sets direction and multiplies a whole design team.',
        'The Architect — owns a critical system (the design system, the end-to-end IA) everyone builds on.',
        'The Solver — parachutes into the hardest, gnarliest UX problem and untangles it.',
      ]},
    ],
    examples: [
      { label: 'Example · The multiplier bet', text: 'A staff-track designer spent weeks on a token architecture before a single polished screen, while stakeholders wanted visible progress. Later surfaces shipped in a fraction of the first one’s time. Staff judgement often looks like slower starts for faster finishes — leverage over output.' },
      { label: 'Example · Title-inflation tell', text: 'A “Staff” portfolio where every case is one feature executed beautifully reads as a strong senior, not staff. The missing signal is systems, multiplier work, and coherence across surfaces — the things that make other people’s work better.' },
    ],
    mistake: 'Equating seniority with tool mastery or years. A ten-year designer who only ever executes defined solutions is a very experienced mid, not a senior.',
    interview: '“Senior is the scope of ambiguity I can absorb and own end-to-end; staff is when my leverage comes through others and through systems — I make the product cohere, not just my slice of it.”',
    related: ['sr06', 'sr09'],
  },

  sr09: {
    id: 'sr09', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Leadership',
    title: 'IC vs Management Track',
    def: 'The senior fork: keep growing as an individual contributor (toward staff/principal) or move into people management. Different jobs, not a promotion vs a plateau.',
    why: 'Interviewers ask which you want and why to check self-awareness. The wrong reason (“management is the only way up”) signals someone who hasn’t understood that both tracks reach senior leadership.',
    blocks: [
      { t: 'ul', items: [
        'IC track (senior → staff → principal) — leverage through craft, product judgement, systems and mentoring, without owning headcount, ratings or hiring.',
        'Management track — leverage through the team: hiring, growth, performance, team health and organisational design. The craft becomes coaching.',
        'Both are leadership; neither is “higher.” The daily work is genuinely different — a manager who misses making things, or an IC who resents mentoring, is on the wrong track.',
      ]},
      { t: 'p', text: 'A grounded answer names the leverage you’re optimising for. “IC toward staff — my leverage is craft plus product judgement, and I multiply others through systems and mentoring rather than the org chart” is self-aware; “whichever gets promoted faster” is not.' },
    ],
    examples: [
      { label: 'Example · Choosing IC on purpose', text: 'A senior turned down a manager role after honestly noticing that the parts of the week that energised her were craft and mentoring in the work, not headcount and performance cycles. Choosing IC deliberately — not by default — is the self-awareness interviewers reward.' },
      { label: 'Example · The wrong reason', text: '“I want to manage because that’s how you get promoted” is a red flag. It reveals someone chasing a title rather than choosing a job — and management done for status makes for bad managers.' },
    ],
    mistake: 'Framing IC as the consolation prize. At staff/principal, an IC operates at the same altitude as a design manager — different leverage, same seniority.',
    interview: '“IC toward staff, held honestly: my leverage is craft plus judgement, multiplied through systems and mentoring. If that changes, I’ll move — but I’m not chasing a title, I’m choosing the job.”',
    related: ['sr08', 'sr06'],
  },

  sr10: {
    id: 'sr10', bookId: 'senior', bookLabel: 'Senior · Leadership & Frameworks', chapter: 'Teamwork',
    title: 'Stakeholder Alignment & Decision Rights',
    def: 'Getting a group to a decision everyone will actually support — by making roles in the decision explicit (who decides, who advises, who’s informed) and managing up with options, not objections.',
    why: 'Most stalled design work isn’t a craft problem; it’s an alignment problem. Senior designers make the decision process legible so “design by committee” becomes a clear, owned decision.',
    blocks: [
      { t: 'h', text: 'Name the decision rights' },
      { t: 'ul', items: [
        'DACI — Driver (moves it forward), Approver (the single person who decides), Contributors (advise), Informed (kept in the loop). One Approver is the point — it kills the committee.',
        'RACI — Responsible, Accountable, Consulted, Informed — the same idea for execution ownership.',
        'The move that dissolves committees: before showing options, agree the criteria. When someone says “I like option B,” ask “against which of our criteria?” Committees fight about taste; they align on goals.',
      ]},
      { t: 'h', text: 'Managing up' },
      { t: 'p', text: 'Bring executives decisions to de-risk, not designs to review: “here’s the problem in business terms, here’s my recommendation, here’s the evidence,” in three minutes. Offer options with trade-offs, not a single answer to approve or a bare objection to overrule.' },
    ],
    examples: [
      { label: 'Example · One Approver ends the loop', text: 'A redesign had stalled for weeks because five stakeholders each held soft veto. Naming a single DACI Approver — and demoting the rest to Contributors — unstuck it in one meeting. The design didn’t change; the decision structure did.' },
      { label: 'Example · Criteria before options', text: 'A team kept relitigating a layout on taste. The designer reframed: “our criteria were scannability and mobile-first — which option serves those?” The conversation moved from “I prefer” to “this one wins on scannability,” and the decision made itself.' },
    ],
    mistake: 'Presenting more options to a committee with no named decider. Options without decision rights multiply opinions; they don’t produce a decision.',
    interview: '“I make decision rights explicit — one DACI Approver, the rest Contributors — and I align on criteria before showing options, so we argue about goals, not taste. To execs I bring a recommendation and evidence to de-risk, not a design to admire.”',
    related: ['sr02', 'sr04'],
  },

};

export const TOPIC_ORDER = ['sr01', 'sr02', 'sr03', 'sr04', 'sr05', 'sr06', 'sr07', 'sr08', 'sr09', 'sr10'];
