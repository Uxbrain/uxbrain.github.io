// DesignOS content — sourced from THE-COMPLETE-PRODUCT-DESIGN-BIBLE.md
// Phase 1: Book 0 (Fundamentals Primer) + Book 1 Chapters 1–2

export const BOOKS = [
  { id: 'b0', num: 'Book 0', title: 'Fundamentals Primer', desc: 'The absolute basics, defined properly — the definitions to use in interviews.', available: true },
  { id: 'b1', num: 'Book 1', title: 'The 60-Day Bible', desc: 'Product thinking, UX psychology, systems, data, AI — plus the 8-week roadmap.', available: true },
  { id: 'b2', num: 'Book 2', title: 'Master Knowledge Checklist', desc: '15 domains, ~180 items, priority-coded to your gaps.', available: false, phase: 'Powers My Progress →' },
  { id: 'b3', num: 'Book 3', title: 'Interview Question Bank', desc: '148 questions with answer structures and worked examples.', available: false, phase: 'Powers Interview Gym →' },
  { id: 'b4', num: 'Book 4', title: 'Reference Handbook', desc: 'Exact numbers, standards, rubrics, dark-pattern taxonomy, 7 cheat sheets.', available: false, phase: 'Powers Cheat Sheets & Glossary →' },
  { id: 'b5', num: 'Book 5', title: 'The Missing Disciplines', desc: 'Business strategy, engineering literacy, mental models, AI fundamentals.', available: true },
];

export const TOPIC_ORDER = [
  't01','t02','t03','t04','t05','t06','t07','t08','t09','t10','t11','t12',
  't13','t14','t15','t16','t17','t18','t19','t20','t21','t22','t23','t24','t25','t26',
  'g01','g02','g03','g04','g05','g06','g07','g08','g09','g10'
];

export const TOPICS = {

  t01: {
    id: 't01', bookId: 'b0', bookLabel: 'Book 0 · Primer', chapter: 'The Primer',
    title: 'The Discipline Map',
    def: 'Product design = UX + UI plus business context: deciding what should exist, why, and how success is measured.',
    why: 'Interviewers test whether you use these words precisely. “What’s the difference between UX design and product design?” appears in nearly every loop — sloppy usage reads as junior.',
    blocks: [
      { t: 'diagram', id: 'scope', caption: 'UI sits inside UX; UX sits inside product design. Each layer answers a different question.' },
      { t: 'ul', items: [
        'UI Design — the visible, interactive surface: layout, typography, color, components, states, motion. Answers: is it clear, usable, and beautiful?',
        'UX Design — the entire experience of accomplishing a goal: flows, structure, feedback, errors, emotions across touchpoints. Answers: does the person succeed, and how does it feel?',
        'Product Design — UX + UI plus business context: what to build, for whom, why now, and how success is measured. Answers: is this the right thing, and did it work?',
      ]},
      { t: 'p', text: 'Adjacent roles you’ll collaborate with: UX Researcher (dedicated evidence-gathering), Content Designer / UX Writer (interface language), Design Ops (tooling, process, systems infrastructure), PM (owns problem selection and business outcomes), Design Technologist (prototypes in code).' },
    ],
    examples: [
      { label: 'Example · A payment screen', text: 'UI question: is the amount field legible and the CTA prominent? UX question: what happens on failure, timeout, or a wrong amount? Product question: should this payment step exist at all — or should payment be saved and implicit, like Uber’s?' },
      { label: 'Example · Your own trajectory', text: 'Your career maps exactly onto this ladder — Gloify (UI volume) → Robosoft (UX ecosystems) → the job change you’re making now (product ownership).' },
    ],
    mistake: 'Using “UI/UX” as one interchangeable word. Each layer answers a different question — collapsing them signals you’ve never had to own the difference.',
    interview: 'Q30 asks this directly. Strong answer: “A UX designer perfects the checkout; a product designer asks whether checkout friction is even the biggest lever this quarter.”',
    related: ['t02','t05','t09'],
  },

  t02: {
    id: 't02', bookId: 'b0', bookLabel: 'Book 0 · Primer', chapter: 'The Primer',
    title: 'Anatomy of the Design Process',
    def: 'Every framework — Double Diamond, Design Thinking, Lean UX — is the same skeleton wearing different clothes: diverge and converge, twice.',
    why: '“Walk me through your process” opens most interviews, and reciting a framework robotically is a documented fail signal — Google/Meta debriefs call it “process theater.”',
    blocks: [
      { t: 'diagram', id: 'dd', caption: 'The Double Diamond: explore the problem widely, pick THE problem, explore solutions widely, pick and ship THE solution.' },
      { t: 'ul', items: [
        'Design Thinking (Stanford d.school): Empathize → Define → Ideate → Prototype → Test — same shape, emphasis on empathy and rapid prototyping.',
        'Lean UX: compresses the loop into Build → Measure → Learn cycles with minimum viable artifacts; documentation replaced by shared understanding. Right for startups and continuous product teams; wrong for regulated big-bang launches.',
      ]},
      { t: 'p', text: 'The honest truth about process: real projects are messy loops, not clean diamonds. The framework is a checklist of thinking that must happen, not a sequence that must be followed. Saying this in interviews — with an example of when you looped back — reads as experience.' },
    ],
    examples: [
      { label: 'Example · UTI', text: 'Your UTI work should run Double Diamond at project level — the discovery phase is what services usually skip. That’s the habit to install.' },
      { label: 'Example · The interview answer', text: 'When asked “what’s your process”: name the skeleton, then immediately say “but process flexes by risk — a copy change and a KYC redesign don’t deserve the same ceremony.” That caveat separates practitioners from students.' },
    ],
    mistake: 'Treating the framework as a sequence to follow instead of a checklist of thinking that must happen. Never recite Double Diamond without evidence of judgment attached.',
    interview: 'Q26 (★): show a flexible spine — understand → define → explore → validate → deliver → measure — with a real project attached. Google scores process rigor; Meta flags process theater.',
    related: ['t01','t03','t08'],
  },

  t03: {
    id: 't03', bookId: 'b0', bookLabel: 'Book 0 · Primer', chapter: 'The Primer',
    title: 'The Fidelity Ladder',
    def: 'Artifacts run sketch → wireframe → mockup → prototype → code. Each rung costs more — and answers a different question.',
    why: 'Test with the lowest fidelity that answers the question. Usability of a flow tests fine in grayscale; brand perception needs hi-fi. Polishing first wastes a week and biases feedback toward compliments.',
    blocks: [
      { t: 'diagram', id: 'fid', caption: 'Cost rises left to right; each rung teaches something different.' },
      { t: 'ul', items: [
        'Sketch (paper/whiteboard) — minutes each; for exploring many directions and killing bad ideas cheaply. Never skip: jumping to hi-fi anchors you to your first idea.',
        'Wireframe (lo-fi) — boxes and hierarchy, no visual design; for structure and IA conversations where color would distract stakeholders into bikeshedding.',
        'Mockup (hi-fi static) — real type, color, content; for visual language decisions and stakeholder sign-off.',
        'Prototype (interactive) — clickable (Figma) or coded (HTML / Figma Make — your speed advantage); for testing behavior with users.',
      ]},
      { t: 'p', text: 'Rule of thumb: a PoC proves it’s possible (tech-facing), a prototype proves it’s usable (user-facing), an MVP proves it’s valuable (market-facing). Three different artifacts, constantly confused — using them precisely is an interview tell.' },
    ],
    examples: [
      { label: 'Example · Stop-SIP findability', text: 'Testing whether users can find “stop SIP”: a grayscale clickable wireframe answers it in a day. Polishing it first wastes a week and biases feedback toward compliments.' },
      { label: 'Example · PoC vs prototype vs MVP', text: 'PoC = possible, prototype = usable, MVP = valuable. A cab platform MVP without live tracking isn’t lean, it’s broken — tracking is a Kano basic.' },
    ],
    mistake: 'Skipping the sketch. Jumping straight to hi-fi anchors you to your first idea — the cheapest rung exists to kill bad ideas cheaply.',
    interview: 'Q47 (“what does MVP mean to you as a designer?”) tests exactly this vocabulary. Minimum viable, not minimum shippable — it must actually test the value hypothesis.',
    related: ['t02','t04'],
  },

  t04: {
    id: 't04', bookId: 'b0', bookLabel: 'Book 0 · Primer', chapter: 'The Primer',
    title: 'Core Artifacts, Defined',
    def: 'Each artifact is a tool with a “use when” — a brief before every project, flows before every screen.',
    why: 'Craft rounds probe whether you know which artifact answers which question. Producing the wrong one — or one nobody references — is theater.',
    blocks: [
      { t: 'table',
        head: ['Artifact', 'What it is', 'Use when'],
        rows: [
          ['Design brief', 'Problem, evidence, users, success metric, constraints, non-goals (1 page)', 'Before any project — always'],
          ['Persona', 'Evidence-based user archetype', 'Aligning a team on “who”; prefer JTBD for “why”'],
          ['Jobs story', '“When [situation], I want [motivation], so I can [outcome]”', 'Framing design around context, not demographics'],
          ['User story', '“As a [user], I want [action], so that [benefit]”', 'Engineering backlog language'],
          ['User flow', 'Diagram of paths through a task, incl. errors', 'Before screens, every feature'],
          ['Journey map', 'Experience over time: stages, actions, emotions, pain points', 'Cross-touchpoint problems, alignment workshops'],
          ['Service blueprint', 'Journey map + backstage (systems, staff, processes)', 'When the fix isn’t in the UI (support, ops)'],
          ['Sitemap / IA map', 'Structure of content & navigation', 'New products, nav redesigns'],
          ['Story map', 'Backbone of activities + slices of releases', 'Scoping MVP vs. later releases'],
          ['Spec / redline', 'Annotated measurements, states, behavior', 'Handoff (mostly automated by tokens + Dev Mode now)'],
        ],
      },
    ],
    examples: [
      { label: 'Example · Jobs story vs user story', text: '“When my SIP date nears and my balance is low, I want a heads-up, so I can top up before it bounces” frames the context. “As an investor, I want notifications” is backlog language — useful for engineering, useless for insight.' },
      { label: 'Example · Service blueprint', text: 'When the fix isn’t in the UI: a journey map plus the backstage (systems, staff, processes) reveals that support-call volume is an ops problem no screen redesign will solve.' },
    ],
    mistake: 'Producing artifacts for their own sake. A persona nobody references is theater — prefer JTBD when the real question is “why.”',
    interview: '“What would you make first?” — the answer is almost always a one-page brief, then a flow. Screens are the last artifact, not the first.',
    related: ['t03','t09'],
  },

  t05: {
    id: 't05', bookId: 'b0', bookLabel: 'Book 0 · Primer', chapter: 'The Primer',
    title: 'The Vocabulary of Quality',
    def: 'Usability = effectiveness + efficiency + satisfaction — measured, not opined. Usefulness = usability × utility.',
    why: 'Formal definitions make critiques sharp. “This fails on efficiency, not effectiveness” is a senior sentence; “this feels clunky” is not.',
    blocks: [
      { t: 'ul', items: [
        'Usability (ISO-flavored): effectiveness (can they do it?) + efficiency (how fast?) + satisfaction (how did it feel?). Measured, not opined.',
        'Utility: does it do the right things? Usability × utility = usefulness — a perfectly usable product nobody needs is a well-polished failure.',
        'Desirability / delight: exceeds expectation. Comes after the basics — delight on a broken flow is lipstick.',
        'Accessibility: usable across the full range of human ability — a floor, not a feature.',
      ]},
    ],
    examples: [
      { label: 'Example · Utility without usability', text: 'IRCTC has utility without usability — and a monopoly on the job, which is why it survives. UX quality is one competitive lever among several.' },
      { label: 'Example · Usability without utility', text: 'A beautiful crypto app in 2022 had usability without durable utility. You need the multiplication: usefulness = usability × utility.' },
    ],
    mistake: 'Chasing delight before basics. Delight on a broken flow is lipstick — desirability comes after effectiveness and efficiency.',
    interview: 'Use the multiplication in critiques: naming whether a product fails on usability or on utility instantly raises the altitude of your answer.',
    related: ['t01','t11'],
  },

  t06: {
    id: 't06', bookId: 'b1', bookLabel: 'Book 1 · Ch. 1', chapter: 'Ch. 1 — How Businesses Actually Work',
    title: 'Business Models',
    def: 'Every product has a revenue engine. Your design either feeds it or starves it.',
    why: 'You cannot design for a product company without understanding how it makes money. Every design decision is a business decision wearing a UI.',
    blocks: [
      { t: 'cards', cards: [
        { name: 'Transaction / commission', one: 'The platform takes a cut of each transaction.', ex: [
          'Swiggy earns commission per order + delivery fees + ads — that’s why the app aggressively surfaces “items you may have missed” at checkout. Every ₹40 add-on is margin.',
          'GBLACK — a luxury cab platform earns per ride. Design implication: reducing booking friction matters less than increasing trust. HNI users churn on one bad experience, and their lifetime value is enormous.',
        ]},
        { name: 'Subscription (SaaS)', one: 'Recurring revenue; the metric that matters is retention, not acquisition.', ex: [
          'Netflix optimizes “time to first play” for new users — users who watch something in session one retain dramatically better.',
          'Figma’s free tier is generous for individuals but caps collaboration — because teams pay, individuals don’t. The paywall sits exactly at the moment of team value.',
        ]},
        { name: 'AUM / float-based (your world)', one: 'Revenue = % of assets under management.', ex: [
          'UTI earns more when users invest more and stay invested longer — so the highest-leverage design work is SIP setup friction and preventing panic redemptions during market dips, not the “Other Businesses” page.',
          'Zerodha’s Coin made direct mutual funds free — losing commission revenue — because it feeds their brokerage business. Why a company gives something away tells you what they actually sell.',
        ]},
      ]},
      { t: 'p', text: 'Exercise (Day 2): write one page — “How does UTI Mutual Fund make money, and what are the 3 highest-leverage screens in the investor app for that revenue?” You will find they are not the screens you spent the most time on.' },
    ],
    examples: [
      { label: 'Example · GBLACK', text: 'A luxury cab platform earns per ride, but the design lever is trust, not friction — HNI users churn on one bad experience and their lifetime value is enormous.' },
      { label: 'Example · Figma’s paywall', text: 'Free for individual creation, paid for team collaboration. Where the paywall sits is a design decision with more revenue impact than any screen.' },
    ],
    mistake: 'Designing the screens you were asked for instead of the revenue-critical ones. Service companies reward execution; product companies reward judgment.',
    interview: '“How does this company make money, and which 3 screens matter most for that?” — be able to answer this for every company you interview with, before the interview.',
    related: ['t07','t08','t09'],
  },

  t07: {
    id: 't07', bookId: 'b1', bookLabel: 'Book 1 · Ch. 1', chapter: 'Ch. 1 — How Businesses Actually Work',
    title: 'Metrics — The Language of Product Companies',
    def: 'If you can’t speak metrics, you’re a decorator in their eyes. Learn these cold.',
    why: '“No metrics instinct” is literal reject language in FAANG debriefs. Meta scores whether you volunteer a success metric and a guardrail unprompted.',
    blocks: [
      { t: 'diagram', id: 'funnel', caption: 'AARRR (Pirate Metrics): every product funnel, in five stages.' },
      { t: 'cards', cards: [
        { name: 'North Star Metric', one: 'The one number that best captures value delivered.', ex: [
          'Airbnb — nights booked. Not signups, not searches. Every team’s work ladders up to it.',
          'For a mutual fund app — monthly active SIPs (recurring invested users), not app downloads.',
        ]},
        { name: 'AARRR & activation', one: 'Acquisition → Activation → Retention → Referral → Revenue.', ex: [
          'Activation for CRED = first bill paid. Their entire onboarding is engineered to get you there in one session.',
          'Activation for the GBLACK guest app = first completed ride. Everything before that moment (KYC, payment setup) is friction to be ruthlessly minimized or deferred.',
        ]},
        { name: 'Conversion funnels', one: '% of users who move step to step — sketch one for any flow you’ve designed.', ex: [
          'E-commerce checkout: cart → address → payment → success. Amazon’s one-click patent existed because each removed step recovered measurable revenue.',
          'Mutual fund onboarding: install → PAN → KYC docs → bank link → first investment. In Indian fintech, KYC document upload is almost always the biggest leak — why Groww invested in DigiLocker.',
        ]},
        { name: 'Retention, DAU/MAU, churn', one: 'DAU/MAU ratio = stickiness — category-dependent, don’t chase universally.', ex: [
          'WhatsApp’s DAU/MAU is ~70%+ (daily habit). A tax-filing app might be 5% and still be a great business (seasonal).',
          'Don’t chase daily engagement for GBLACK — an HNI books chauffeurs weekly. The right frame: monthly booking frequency and zero defection.',
        ]},
        { name: 'Guardrail metrics', one: 'What you must not break while improving your target metric.', ex: [
          'Making Swiggy checkout faster (target: conversion) must not increase wrong-address deliveries (guardrail: order accuracy).',
          'Simplifying a mutual fund risk disclosure (target: completion) must not reduce comprehension (guardrail: quiz scores, regulatory compliance).',
        ]},
      ]},
      { t: 'diagram', id: 'retention', caption: 'Cohort retention: a good curve flattens into a habit; a bad curve decays to zero.' },
    ],
    examples: [
      { label: 'Example · Pick the North Star', text: 'For UTI: monthly active SIPs — recurring invested users — not downloads. A North Star must be leading and value-delivered, never vanity.' },
      { label: 'Example · Name the guardrail', text: 'Every experiment names one metric that must not degrade. Faster checkout can’t cost order accuracy; simpler disclosures can’t cost comprehension.' },
    ],
    mistake: '“Improved task success by ~25%” without being able to explain how you measured it, what the baseline was, and what trade-off you made. Interviewers drill exactly here.',
    interview: 'Define one primary metric and one guardrail for anything you present — before being asked. Q84’s structure: one adoption metric, one success metric, one guardrail.',
    related: ['t06','t08','t09'],
  },

  t08: {
    id: 't08', bookId: 'b1', bookLabel: 'Book 1 · Ch. 1', chapter: 'Ch. 1 — How Businesses Actually Work',
    title: 'Prioritization — Saying No Is the Job',
    def: 'Frameworks turn opinions into estimates you can defend — and expose disagreements early.',
    why: 'The whiteboard rubric explicitly scores prioritization: why you’d do one thing first, and what you would NOT do. “No trade-offs named” is a fail signal.',
    blocks: [
      { t: 'diagram', id: 'matrix', caption: 'The Impact/Effort 2×2 — quick wins first, money pits never.' },
      { t: 'diagram', id: 'kano', caption: 'The Kano model: basic needs must exist, performance needs scale linearly, delighters surprise — and decay into basics over time.' },
      { t: 'cards', cards: [
        { name: 'RICE', one: 'Reach × Impact × Confidence ÷ Effort — a defensible, non-political answer.', ex: [
          'Feature A helps 10,000 users/month slightly (score ~500); Feature B helps 500 power users massively (~400). RICE forces you to estimate, not opine.',
          'UTI: redesigning the fund detail page (high reach, medium impact) vs. a portfolio health checker (medium reach, high impact) — RICE settles it with numbers.',
        ]},
        { name: 'Impact / Effort 2×2', one: 'Quick wins vs. big bets vs. money pits.', ex: [
          'Fixing broken back-button behavior: low effort, high impact — do first.',
          '“AI portfolio advisor”: high effort, uncertain impact — prototype cheaply before committing.',
        ]},
        { name: 'Kano model', one: 'Basic needs (expected), performance needs (more = better), delighters — and delighters decay.', ex: [
          'In a cab app, live tracking is now a basic need — its absence infuriates, its presence delights no one. In 2012 it was a delighter.',
          'For GBLACK, “chauffeur speaks English / temperature pre-set” could be a genuine delighter today — and table stakes in 3 years.',
        ]},
      ]},
    ],
    examples: [
      { label: 'Example · Delighter decay', text: 'Live tracking was a delighter in 2012; it’s a basic today. Kano teaches that yesterday’s wow is tomorrow’s table stakes — plan for the decay.' },
      { label: 'Example · Frameworks as conversation tools', text: 'A RICE score is only as honest as its confidence number. Use frameworks to expose disagreements early, not to outsource judgment.' },
    ],
    mistake: 'Treating a framework as a truth machine. RICE settles arguments with estimates — but garbage confidence in, garbage priority out.',
    interview: 'Always close a whiteboard with what you’d cut for v1. “MoSCoW’s Won’t is the power move” — naming non-goals is what saying no looks like.',
    related: ['t07','t06','t02'],
  },

  t09: {
    id: 't09', bookId: 'b1', bookLabel: 'Book 1 · Ch. 1', chapter: 'Ch. 1 — How Businesses Actually Work',
    title: 'Working Like a Product Person',
    def: 'Product companies run on documents and named trade-offs, not decks and deliverables.',
    why: 'The narrative gap: service designers describe deliverables (“I designed 36 screens”); product designers describe outcomes (“I reduced KYC drop-off, validated with 8 usability sessions”).',
    blocks: [
      { t: 'h', text: 'Write a one-page opportunity brief before designing anything' },
      { t: 'ul', items: [
        'Contents: problem, evidence, who’s affected, business impact, success metric, constraints.',
        'Amazon’s “working backwards” PR/FAQ: teams write the press release for a feature before building it.',
        'Before your next UTI screen: “Investors abandon SIP setup at bank-mandate step (58% drop, per analytics). Affected: first-time investors. Cost: ~₹X in unrealized AUM. Success: mandate completion +15%.”',
      ]},
      { t: 'h', text: 'Trade-off thinking' },
      { t: 'ul', items: [
        'Every design choice sacrifices something. Interviewers listen for whether you name your trade-offs unprompted.',
        'Infinite scroll boosts engagement but destroys sense of completion and footer access — right for Instagram, wrong for a banking transaction list.',
        'Biometric-only login is fast (good) but locks out users on shared/family devices — a real segment in India.',
      ]},
    ],
    examples: [
      { label: 'Example · Amazon PR/FAQ', text: 'Working backwards: write the press release before building. If the release isn’t exciting, the feature isn’t worth building — the document is the discipline.' },
      { label: 'Example · The UTI brief', text: '“58% drop at bank-mandate step. Affected: first-time investors. Cost: unrealized AUM. Success: mandate completion +15%.” One page, and every later design debate has an anchor.' },
    ],
    mistake: 'Describing deliverables instead of outcomes. “I designed 36 screens” is service language; “drop-off fell because we rethought document upload” is product language.',
    interview: 'The meta-skill across all 148 answers: name the trade-off, cite the evidence, own the outcome. Say those three things in every answer and you will sound senior.',
    related: ['t06','t07','t08'],
  },

  t10: {
    id: 't10', bookId: 'b1', bookLabel: 'Book 1 · Ch. 2', chapter: 'Ch. 2 — UX Foundations: The Psychology Layer',
    title: 'The UX Laws',
    def: 'The psychology layer that makes your decisions defensible — learn all, apply weekly.',
    why: 'Top schools drill this; most working designers never learn it formally. In critiques, laws convert “the button feels off” into “this violates Fitts — the primary CTA is small and far from the thumb.”',
    blocks: [
      { t: 'cards', cards: [
        { name: 'Fitts’s Law', one: 'Time to hit a target = f(distance, size). Big, close targets win.', ex: [
          'iOS puts destructive actions in menus but primary CTAs thumb-reachable at the bottom.',
          'GBLACK’s “Book Now” should own the bottom of the screen; “cancel ride” should require deliberate reach.',
        ]},
        { name: 'Hick’s Law', one: 'Decision time grows with the number of options.', ex: [
          'Google’s homepage: one box. Yahoo died with forty links.',
          'UTI fund selection — 80 schemes in a flat list paralyzes new investors. Progressive filtering (“Goal → Risk → 3 recommendations”) converts.',
        ]},
        { name: 'Jakob’s Law', one: 'Users expect your product to work like the products they already use.', ex: [
          'Every Indian fintech app uses the UPI PIN pad layout — deviating creates errors, not distinction.',
          'Your creativity belongs in brand expression (illustration, motion, color), not in reinventing the tab bar. Innovate on the skin, standardize the skeleton.',
        ]},
        { name: 'Miller’s Law (7±2) & chunking', one: 'Working memory is tiny — chunk everything.', ex: [
          'Phone numbers are chunked (90666 62969) because 10 raw digits exceed memory.',
          'A 14-field KYC form → 4 chunked steps (“Identity, Address, Bank, Nominee”) feels half as long.',
        ]},
        { name: 'Peak-End Rule', one: 'People judge experiences by the peak moment and the ending.', ex: [
          'Duolingo’s celebration animations at lesson end exist because the ending disproportionately shapes memory of the whole session.',
          'For GBLACK, the ride ending (smooth payment, chauffeur farewell, instant receipt) shapes the review more than 40 minutes of driving. Design the last 30 seconds hardest.',
        ]},
        { name: 'Von Restorff Effect', one: 'The different thing gets remembered.', ex: [
          'One colored “Upgrade” button in a monochrome nav.',
          'Highlighting one “recommended” fund plan visually — but ethically, only if it genuinely fits.',
        ]},
        { name: 'Doherty Threshold', one: 'Keep response under 400ms — or provide feedback.', ex: [
          'Skeleton screens (Facebook, LinkedIn) make loads feel faster with zero performance change.',
          'Optimistic UI — WhatsApp shows your message instantly with a clock icon, syncing later. Design the perception, not just the speed.',
        ]},
        { name: 'Zeigarnik Effect', one: 'Incomplete tasks nag at memory.', ex: [
          'LinkedIn’s “Profile 70% complete” bar.',
          '“Your KYC is 1 step away” — the single highest-converting notification in Indian fintech onboarding.',
        ]},
      ]},
      { t: 'p', text: 'The full set (Tesler, Postel, Serial Position, Goal Gradient, Aesthetic-Usability, Pareto, Parkinson, and the seven Gestalt principles) lives in the E1 cheat sheet — all 23 become a flashcard deck in Phase 3.' },
    ],
    examples: [
      { label: 'Example · Hick’s at UTI', text: '80 schemes in a flat list paralyzes new investors. Progressive filtering — Goal → Risk → 3 recommendations — converts.' },
      { label: 'Example · Zeigarnik in fintech', text: '“Your KYC is 1 step away” is the single highest-converting notification in Indian fintech onboarding: an incomplete task nags at memory.' },
    ],
    mistake: 'Naming laws without applying them. Find 3 examples of each law in apps you use (Week 2 task) — application, not recall, is what critiques test.',
    interview: 'App critiques are scored in heuristics-and-laws language. “This works because Fitts / fails because Hick” is mechanism thinking — exactly what Meta’s rubric rewards.',
    related: ['t11','t12'],
  },

  t11: {
    id: 't11', bookId: 'b1', bookLabel: 'Book 1 · Ch. 2', chapter: 'Ch. 2 — UX Foundations: The Psychology Layer',
    title: 'Nielsen’s 10 Usability Heuristics',
    def: 'The shared vocabulary of app critiques — memorize them cold; interviewers use them live.',
    why: 'Heuristic evaluation is the expert-review method: score any interface against these ten. In Meta’s signature app-critique round, this is the language of your assessment.',
    blocks: [
      { t: 'cards', cards: [
        { name: '1 · Visibility of system status', one: 'The system always tells you what’s happening.', ex: ['Uber’s driver-approaching map.', 'File-upload progress %.'] },
        { name: '2 · Match system & real world', one: 'Speak the user’s language, not the system’s.', ex: ['“Money will reach your bank in 2 days,” not “T+2 settlement.”', 'Trash-can icon for delete.'] },
        { name: '3 · User control & freedom', one: 'Emergency exits: undo, back, cancel.', ex: ['Gmail’s Undo Send.', 'Multi-step forms that preserve data on back.'] },
        { name: '4 · Consistency & standards', one: 'One word for one action, app-wide.', ex: ['“Invest” vs “Buy” vs “Purchase” — pick one.', 'Platform-native share sheets.'] },
        { name: '5 · Error prevention', one: 'Stop errors before they happen.', ex: ['Confirming ₹1,00,000 vs ₹10,000 with amount-in-words.', 'Disabling “Submit” until valid.'] },
        { name: '6 · Recognition over recall', one: 'Show options; don’t make users remember.', ex: ['Recently-used payees list.', 'Password rules shown while typing, not after failing.'] },
        { name: '7 · Flexibility & efficiency', one: 'Accelerators for experts, simplicity for novices.', ex: ['Keyboard shortcuts for pros.', '“Repeat last order” in Swiggy.'] },
        { name: '8 · Aesthetic & minimalist design', one: 'Every extra element competes with the needed ones.', ex: ['Apple Pay sheet shows only what’s needed to confirm.', 'Progressive disclosure of “advanced options.”'] },
        { name: '9 · Recognize & recover from errors', one: 'Errors say what happened and how to fix it.', ex: ['“This PAN is already registered — log in instead?” vs “Error 403.”', 'Inline field-level errors.'] },
        { name: '10 · Help & documentation', one: 'Help inside the flow, not a separate portal.', ex: ['Contextual tooltips on “expense ratio.”', 'Searchable help inside the flow.'] },
      ]},
    ],
    examples: [
      { label: 'Example · Consistency (#4)', text: 'One word for one action app-wide: “Invest” vs “Buy” vs “Purchase” — pick one. Terminology drift reads as cheapness and creates real errors.' },
      { label: 'Example · Error recovery (#9)', text: '“This PAN is already registered — log in instead?” recovers the user; “Error 403” abandons them. Errors state what happened and how to fix it.' },
    ],
    mistake: 'All-negative critiques. Name what works and why — balance is scored, and “all-negative” is a junior tell in Meta’s rubric.',
    interview: 'Week 2 task: heuristic evaluation of the UTI investor app, scoring every red route — a 10-issue audit doc that becomes case-study material.',
    related: ['t10','t12'],
  },

  t12: {
    id: 't12', bookId: 'b1', bookLabel: 'Book 1 · Ch. 2', chapter: 'Ch. 2 — UX Foundations: The Psychology Layer',
    title: 'Cognitive Biases & Ethical Design',
    def: 'Biases are levers — and the line between persuasion and manipulation is where good companies test your judgment.',
    why: 'India context: dark patterns are now explicitly regulated (CCPA guidelines 2023 listed 13; DPDP Act, RBI/SEBI increasingly enforce in fintech). Knowing this cold signals senior judgment in your domain.',
    blocks: [
      { t: 'cards', cards: [
        { name: 'Loss aversion', one: 'Losses hurt ~2× more than equivalent gains please.', ex: [
          '“You’ll lose your 45-day streak” retains better than “keep your streak going.”',
          'Framing SIP pause as “you’ll miss ₹X of compounding by age 60” — powerful, and must be used honestly.',
        ]},
        { name: 'Anchoring', one: 'The first number seen becomes the reference.', ex: [
          'SaaS pricing pages show the expensive plan first so the middle one feels reasonable.',
          'A default SIP amount of ₹5,000 pre-filled anchors higher than an empty field — test what’s right for the user, not just revenue.',
        ]},
        { name: 'Social proof', one: 'We follow what others (appear to) do.', ex: [
          '“2.3 crore investors trust UTI.”',
          'Booking.com’s “12 people viewing” — which crosses into a dark pattern when fabricated.',
        ]},
      ]},
      { t: 'h', text: 'Dark patterns — know them to refuse them' },
      { t: 'ul', items: [
        'Roach motel: easy to subscribe, buried cancellation. Amazon Prime’s old cancel flow was ruled illegal in the EU.',
        'Confirmshaming: “No thanks, I hate saving money.” Neutral declines are the ethical alternative.',
        'The full 14-pattern taxonomy (with ethical alternatives) arrives with the Cheat Sheets in Phase 2 — and becomes a flashcard deck in Phase 3.',
      ]},
      { t: 'p', text: 'Interviewers at good companies want to hear you name and reject these. India’s DPDP Act and RBI/SEBI guidelines increasingly prohibit them in your domain — regulation has made refusal a professional skill, not just a virtue.' },
    ],
    examples: [
      { label: 'Example · Honest loss aversion', text: 'Framing SIP pause as “you’ll miss ₹X of compounding by age 60” is powerful — and legitimate only when it’s true and serves the user’s stated goal.' },
      { label: 'Example · The fabrication line', text: '“12 people viewing this property” is social proof when real, a dark pattern when fabricated. The mechanic isn’t the ethics — the honesty is.' },
    ],
    mistake: 'Using biases for revenue against the user. First-order win, second-order disaster: urgency banners lift conversion, then train users to distrust all your messaging.',
    interview: 'Q104-style answers live here: “the metric is winning and the user is losing” is the sentence that shows you can see the line.',
    related: ['t10','t11','t06'],
  },

  t13: {
    id: 't13', bookId: 'b1', bookLabel: 'Book 1 · Ch. 3', chapter: 'Ch. 3 — User Research: Evidence Over Opinion',
    title: 'Methods Map — When to Use What',
    def: 'Generative methods discover problems before solutions exist; evaluative methods test solutions that already exist. Trust behavior over stated preference.',
    why: 'Service companies rarely give designers research access. Product companies expect you to generate evidence yourself — with or without a budget.',
    blocks: [
      { t: 'cards', cards: [
        { name: 'Generative (discover problems)', one: 'Interviews, diary studies, field observation — used before solutions exist.', ex: [
          'Before redesigning a distributor portal, shadow 3 UTI distributors for a day — you’ll discover they run everything through WhatsApp and Excel, which no survey would reveal.',
          'Diary study for GBLACK: 5 HNI users log every chauffeur interaction for 2 weeks — reveals the real jobs (impressing clients, kids’ school runs) behind “book a cab.”',
        ]},
        { name: 'Evaluative (test solutions)', one: 'Usability testing, A/B tests, first-click tests.', ex: [
          '5-user moderated test on a KYC flow — Nielsen showed 5 users find ~85% of issues.',
          'First-click test: “Where would you tap to stop your SIP?” If under 60% click right, the IA is broken regardless of how it looks.',
        ]},
        { name: 'Attitudinal vs. behavioral', one: 'What people say vs. what they do. Trust behavior.', ex: [
          'Users say they read disclosures; session recordings show 1.2-second dwell. Design for the behavior (layered disclosure).',
          'Survey says users want “more fund data”; analytics shows 90% never open the existing data tab. The want is aspirational, not actual.',
        ]},
      ]},
    ],
    examples: [
      { label: 'Example · The Mom Test', text: '“Would you pay for premium chauffeurs?” → everyone says yes, worthless. “Tell me about your last airport trip — walk me through it” → gold. Ask about past behavior, never hypotheticals.' },
      { label: 'Example · Guerrilla rigor, zero budget', text: 'Support tickets are a free diary study, sales calls are recorded interviews, five colleagues’ family members cover usability tests. The constraint that matters is discipline, not money.' },
    ],
    mistake: 'Quantifying qual. “3 of 5 users preferred A” is a hint, not a statistic — the classic error interviewers listen for.',
    interview: 'Q76 (★): “How do you conduct user research with no budget?” Five users per round finds most issues — three rounds of five beats one of fifteen.',
    related: ['t14','t11'],
  },
  t14: {
    id: 't14', bookId: 'b1', bookLabel: 'Book 1 · Ch. 3', chapter: 'Ch. 3 — User Research: Evidence Over Opinion',
    title: 'Synthesis & Jobs-to-be-Done',
    def: 'Affinity mapping turns observations into insights into opportunities. JTBD reframes users by the job they hire a product to do, not their demographics.',
    why: 'Personas answer “who”; JTBD answers “why” — and the reframe changes what you design. This is the difference between a persona deck nobody uses and an insight that redirects a roadmap.',
    blocks: [
      { t: 'ul', items: [
        'Affinity mapping: cluster observations → insights → opportunities. 40 sticky notes from 6 interviews can cluster into an insight no single interview stated.',
        'Turn clusters into How-Might-We statements: “HMW give investors proof-of-transaction they trust enough to screenshot-and-share?”',
        'JTBD: people “hire” products for jobs — forces at play are push (problem), pull (solution), anxiety, and habit.',
      ]},
    ],
    examples: [
      { label: 'Example · The milkshake study (Christensen)', text: 'Morning commuters hired milkshakes to make a boring drive bearable one-handed — competitors were bagels and bananas, not other milkshakes.' },
      { label: 'Example · GBLACK’s real job', text: 'GBLACK’s job isn’t “transportation” — it’s “arrive composed and signal status.” Competitor: not Uber, but a self-driven Mercedes with a personal driver on payroll. That reframe changes everything you design.' },
    ],
    mistake: 'Building a persona and never using JTBD for “why.” Personas describe who; only JTBD explains motivation and competing alternatives.',
    interview: 'Q78: users said they wanted more fund data; behavior showed 90% never opened the data tab. The stated want was aspirational; the job was “help me feel safe choosing quickly.”',
    related: ['t13','t04'],
  },
  t15: {
    id: 't15', bookId: 'b1', bookLabel: 'Book 1 · Ch. 4', chapter: 'Ch. 4 — Information Architecture & Flows',
    title: 'IA Fundamentals',
    def: 'Structure by task, audience, topic, or frequency — never by org chart. Broad-and-shallow beats narrow-and-deep on mobile.',
    why: 'Support-call topics are a free IA bug list. If stopping a SIP takes 5 taps, users call support instead of self-serving — that failure is measurable and traceable to structure.',
    blocks: [
      { t: 'ul', items: [
        'Organization schemes: banking apps organize by task (Pay, Save, Invest, Borrow) not by backend department (Retail Liabilities, Cards Division) — org-chart IA is the classic enterprise failure.',
        'A multi-sided ecosystem (like UTI’s investor + distributor apps) splits by audience at the top, task within each.',
        'Card sorting & tree testing: let users define the structure, then verify it. An open card sort with 15 users on 40 features can reveal users group “SIP” with “Goals,” not “Transactions.”',
        'Amazon buries nothing more than ~3 taps from home despite millions of SKUs — search + broad categories over deep hierarchy.',
      ]},
    ],
    examples: [
      { label: 'Example · Tree testing', text: '“Find where to update your bank account” measures findability with zero visual design — isolating IA quality from visual polish.' },
      { label: 'Example · Support tickets as IA bug list', text: 'If stopping a SIP takes Profile → Investments → Active → SIP → Manage → Stop (5 levels), users call support instead. Every support-call topic is a navigation failure waiting to be fixed.' },
    ],
    mistake: 'Structuring navigation around backend departments instead of user tasks — the classic enterprise IA failure that ships confusion at scale.',
    interview: 'Whiteboard structure step 4 (journey) always exposes IA depth — narrate the flow aloud and the interviewer hears whether your structure survives an unhappy path.',
    related: ['t16','t04'],
  },
  t16: {
    id: 't16', bookId: 'b1', bookLabel: 'Book 1 · Ch. 4', chapter: 'Ch. 4 — Information Architecture & Flows',
    title: 'User Flows & the Five Screen States',
    def: 'Flow diagrams come before screens, always. Every screen has at least 5 states: empty, loading, ideal, partial, error — and unhappy paths are 60% of real design work.',
    why: 'Screens presented in reviews are almost always the ideal state — but users live in the other four. A “states review” before handoff is the cheapest QA design can do.',
    blocks: [
      { t: 'diagram', id: 'states', caption: 'Every screen needs all five states designed — not just the one you show in reviews.' },
      { t: 'ul', items: [
        'Red routes: the 4–5 critical journeys (book ride, track ride, pay, rebook) get 80% of design effort; settings screens get the leftovers.',
        'Map every unhappy path: no chauffeurs available, payment failure, guest booking for someone else. Unhappy paths are 60% of real design work and 90% of what service-company designers skip.',
        'Empty states are secretly onboarding: Slack’s empty channel teaches you to invite people; an empty watchlist should teach fund discovery, not show a sad illustration.',
      ]},
    ],
    examples: [
      { label: 'Example · A portfolio screen, five ways', text: 'First-time (empty — your one shot at activation), loading (skeleton), ideal, market-holiday (stale-data flag), API-failure (cached data + banner). Five different design problems on one screen.' },
      { label: 'Example · GBLACK’s unhappy paths', text: 'No chauffeurs available, payment failure, guest booking for someone else — mapping these is 60% of the real design work, and the part service-company designers most often skip.' },
    ],
    mistake: 'Presenting only the ideal state in reviews. Hold a states review before every handoff — it is the cheapest QA design can do.',
    interview: 'Q60: “What are the five states every screen needs?” — a reflexive answer, straight from the D1 pre-handoff QA checklist.',
    related: ['t15','t04'],
  },
  t17: {
    id: 't17', bookId: 'b1', bookLabel: 'Book 1 · Ch. 5', chapter: 'Ch. 5 — Interaction Design & Micro-interactions',
    title: 'Micro-interactions & Motion With Purpose',
    def: 'Every micro-interaction has a trigger, rules, feedback, and loops (Saffer). Motion should explain, respond, or express — never decorate.',
    why: 'Your visual strength becomes principled craft here — the difference between “feels nice” and “is designed” is being able to name the trigger and the rule.',
    blocks: [
      { t: 'ul', items: [
        'The model: trigger → rules → feedback → loops. Pull-to-refresh: trigger (pull), rules (threshold distance), feedback (spinner/elastic), loop (release = refresh). Every part is designable.',
        'Motion principles (Material): informative, focused, expressive. Duration discipline: 200–300ms for most transitions; 500ms+ feels broken.',
        'Feedback hierarchy: visual < haptic < sound — match intensity to stakes. A filter chip toggle needs only color change; a haptic there would be noise.',
        'Forms — where products are won and lost in India: input masking (PAN auto-uppercases, ₹1,00,000 Indian grouping), inline validation on blur not submit, errors that say how to fix, not just what’s wrong.',
      ]},
    ],
    examples: [
      { label: 'Example · GBLACK’s chauffeur-arriving moment', text: 'Trigger (500m geofence), feedback (subtle haptic + card slides up), rules (don’t fire if user is already watching map). Motion with logic, not decoration.' },
      { label: 'Example · Feedback matched to stakes', text: 'Apple Pay success: checkmark + haptic + sound — full sensory confirmation for a high-stakes moment. Toggling a filter chip: color change only. Restraint is a skill.' },
    ],
    mistake: 'Adding a haptic or sound to a low-stakes action. Match feedback intensity to stakes — over-signaling is as wrong as under-signaling.',
    interview: 'Q69: motion has three legitimate jobs — explain, respond, express — and every animation must answer “what does the user understand because of this?”',
    related: ['t10','t22'],
  },
  t18: {
    id: 't18', bookId: 'b1', bookLabel: 'Book 1 · Ch. 6', chapter: 'Ch. 6 — Content Design & UX Writing',
    title: 'Content Design & UX Writing',
    def: 'The most underrated skill and the fastest way to look senior: clarity beats cleverness, and buttons state outcomes.',
    why: 'Content design is free craft that most visual designers never invest in — it costs nothing but attention and separates senior work instantly.',
    blocks: [
      { t: 'ul', items: [
        'Front-load the verb and the value: “Get your money in 2 days” beats “Redemption processing timelines apply.”',
        'Button labels state outcomes: “Start SIP of ₹5,000” beats “Submit.” “Cancel ride — ₹200 fee applies” beats “Confirm.”',
        'Voice & tone matrix: same voice, situational tone — playful in success states, dead-serious in error and billing states.',
      ]},
    ],
    examples: [
      { label: 'Example · Mailchimp’s tone matrix', text: 'A classic guide: playful in success states, dead-serious in error and billing states — one voice, calibrated tone per moment.' },
      { label: 'Example · GBLACK’s luxury voice', text: 'Confident brevity (“Your chauffeur, Rajesh, arrives in 4 minutes”), never exclamation marks, never emoji — luxury whispers.' },
    ],
    mistake: 'Writing what’s wrong instead of how to fix it. “Invalid input” abandons the user; “PAN must be 10 characters: AAAAA9999A” recovers them.',
    interview: 'Content design rarely gets its own interview round but shows up constantly in craft critiques — button copy is an easy tell of seniority.',
    related: ['t11','t10'],
  },
  t19: {
    id: 't19', bookId: 'b1', bookLabel: 'Book 1 · Ch. 7', chapter: 'Ch. 7 — Design Systems, Tokens, Auto Layout',
    title: 'Why Systems Exist & Auto Layout',
    def: 'Auto layout IS flexbox with different names — direction, gap, padding, hug/fill. Systems are what let creativity survive contact with 40 engineers and 12 releases.',
    why: 'At Flipkart or Google, a designer who can’t build a proper component library cannot pass the craft round. Full stop. This is 3 weeks of deliberate practice away from being a strength.',
    blocks: [
      { t: 'ul', items: [
        'Direction = flex-direction, spacing = gap, hug = fit-content, fill = flex-grow, padding is padding. Constraints are position rules for non-flex children.',
        'A button = horizontal auto layout, padding 12/20, gap 8 (icon+label), hug both axes. Change the label from “Pay” to “Pay ₹1,00,000” — it grows perfectly. That’s the whole religion.',
        'Practice protocol: rebuild 10 existing screens with 100% auto layout. Day 1 will be rage. Day 4 you’ll be faster than manual. Day 10 you won’t go back.',
      ]},
      { t: 'diagram', id: 'component', caption: 'Component anatomy: every dimension named and sourced from a token, not eyeballed.' },
      { t: 'diagram', id: 'spacing', caption: 'The spacing scale, rendered at actual size — every gap in the product comes from this ruler.' },
    ],
    examples: [
      { label: 'Example · Airbnb’s DLS', text: 'Airbnb’s design language system let them ship consistent UI across iOS/Android/web with hundreds of designers. Without it, “creativity” produces 47 shades of gray and 12 button heights — which users experience as cheapness.' },
      { label: 'Example · Manual spacing breaks localization', text: 'Every screen where you manually nudge spacing is a screen that breaks in Arabic RTL, in Kannada strings 40% longer than English, on a small Android. Systems are how your vision survives localization.' },
    ],
    mistake: 'Treating auto layout and tokens as bureaucracy that kills creativity. They are what lets creativity scale past one screen and one designer.',
    interview: 'The craft round is pass/fail on this. Q67: explain auto layout to someone who knows CSS — “it IS flexbox with different names.”',
    related: ['t20','t21'],
  },
  t20: {
    id: 't20', bookId: 'b1', bookLabel: 'Book 1 · Ch. 7', chapter: 'Ch. 7 — Design Systems, Tokens, Auto Layout',
    title: 'Tokens & Variables',
    def: 'Design decisions stored as named values, in three tiers: primitive → semantic → component. Rebrand? Change one primitive. Dark mode? Remap semantics.',
    why: 'Tokens turn subjective color/spacing choices into deployable, auditable data — the accessibility story (pre-validated tokens) is the single strongest systems narrative in your portfolio.',
    blocks: [
      { t: 'diagram', id: 'tokens', caption: 'Primitive values feed semantic roles, which feed component properties — change one primitive, remap everywhere.' },
      { t: 'ul', items: [
        'Primitive: blue-600: #1A56DB (raw values, 10–12 step ramps). Semantic: color-action-primary: {blue-600}. Component: button-primary-bg: {color-action-primary}.',
        'Spacing scale: 4/8/12/16/24/32/48/64. Every gap in the product comes from this scale. Two designers, zero drift.',
        'Figma Variables in practice: modes for light/dark, brand A/brand B, comfortable/compact density.',
      ]},
    ],
    examples: [
      { label: 'Example · Rebranding in one edit', text: 'Rebrand from blue to UTI navy = change one primitive. Dark mode = remap semantics. “Creative” color explorations become deployable in minutes.' },
      { label: 'Example · One library, two brands', text: 'One component library serving UTI’s investor app AND distributor portal via a brand-mode variable — no duplicate files, one source of truth.' },
    ],
    mistake: 'Naming tokens by value instead of role (“color-blue” instead of “color-action-primary”). Name by role, not value — that’s what survives a rebrand.',
    interview: 'Q52: “Explain design tokens to a non-designer.” The glossary/dictionary metaphor is the reflexive answer — rehearse it exactly.',
    related: ['t19','t21'],
  },
  t21: {
    id: 't21', bookId: 'b1', bookLabel: 'Book 1 · Ch. 7', chapter: 'Ch. 7 — Design Systems, Tokens, Auto Layout',
    title: 'Component Architecture & Accessibility as System',
    def: 'Atomic design (atoms → molecules → organisms → templates → pages) plus slots over mega-variants. Accessibility built into tokens, not retrofitted per screen.',
    why: 'This is your existing strength (WCAG audits) — weaponized as a systems story rather than a compliance checklist. “I made accessibility impossible to violate” is gold in interviews.',
    blocks: [
      { t: 'ul', items: [
        'Atomic design: Atom = input field. Molecule = labeled input with error slot. Organism = full KYC form section. Design the atom’s states once; hundreds of forms inherit correctness.',
        'Props/variants done right: a Button with variants (primary/secondary/ghost) × sizes (S/M/L) × states (default/hover/pressed/disabled/loading) = one component, 60 combinations, zero detached copies.',
        'Slots over mega-variants: a Card with an instance-swap “content” slot beats a Card with 25 layout variants.',
        'Contrast tokens: every text/background pairing pre-validated for WCAG AA. Touch targets ≥44/48px baked into component minimums; focus states designed once, per component.',
      ]},
      { t: 'diagram', id: 'touch', caption: 'Touch-target anatomy: a small visual icon can sit inside a much larger tappable area.' },
    ],
    examples: [
      { label: 'Example · Accessibility impossible to violate', text: 'Every text/surface pair validated for WCAG contrast at the token level — the marketing team physically can’t pick a failing combination from the palette.' },
      { label: 'Example · Slots vs. mega-variants', text: 'A Card with an instance-swap content slot beats a Card with 25 layout variants — composition scales; exhaustive variants rot.' },
    ],
    mistake: 'Retrofitting accessibility per screen instead of baking it into component minimums. Focus states and touch targets belong in the component, not the reviewer’s memory.',
    interview: 'Your signature story (Q100): advocacy that relies on virtue loses; advocacy that redesigns incentives — pre-validated tokens — wins.',
    related: ['t20','t19'],
  },
  t22: {
    id: 't22', bookId: 'b1', bookLabel: 'Book 1 · Ch. 8', chapter: 'Ch. 8 — Visual Design: Sharpening Your Strength',
    title: 'Typography & Grid Systems',
    def: 'A type scale (1.25 ratio: 12/16/20/25/31/39), line-height rules, and a max of 2 families. Optical alignment beats mathematical alignment when they conflict.',
    why: 'You’re already strong here — but product companies test systematic visual judgment, not raw taste. Restraint reads as premium; a disciplined scale is what makes restraint repeatable.',
    blocks: [
      { t: 'ul', items: [
        'Stripe’s docs use essentially two type styles doing everything — hierarchy through weight and space, not more fonts.',
        'Indian-language readiness: Devanagari/Kannada scripts need taller line-heights (~1.7) and render heavier — test your type system in Hindi before calling it done.',
        'Elevation logic: define 3 shadow levels max with meaning (resting/raised/overlay), not per-screen improvisation.',
        'Play button triangles are mathematically off-center to look centered — systems serve perception, not vice versa.',
      ]},
      { t: 'diagram', id: 'typescale', caption: 'The type scale, rendered live at actual sizes — 12/16/20/25/31/39, a 1.25 ratio from a 16px base.' },
    ],
    examples: [
      { label: 'Example · Restraint as premium', text: 'Stripe’s docs run on essentially two type styles — hierarchy comes from weight and space, not decorative fonts. Restraint reads as premium.' },
      { label: 'Example · Optical correction', text: 'Play icon triangles sit mathematically off-center to visually read as centered. Trust your eye for the 5% math can’t solve.' },
    ],
    mistake: 'Trusting the grid over your eye when they conflict. Systems handle 95%; optical judgment is the skilled 5%.',
    interview: 'Q55 (★): walk through a real typography decision — scale, weights-before-size, and the language constraint that shaped it.',
    related: ['t10','t19'],
  },
  t23: {
    id: 't23', bookId: 'b1', bookLabel: 'Book 1 · Ch. 9', chapter: 'Ch. 9 — Data-Informed Design & Experimentation',
    title: 'A/B Testing & Analytics Fluency',
    def: 'Hypothesis → variant → sample size → significance → decision. Quant tells you WHERE; qual tells you WHY — use them together.',
    why: 'A/B literacy separates decorators from product designers. Know the traps: peeking early, testing 10 things at once, ignoring novelty effects.',
    blocks: [
      { t: 'ul', items: [
        'Hypothesis format: “Changing the SIP CTA from ‘Invest Now’ to ‘Start with ₹500’ will increase tap-through by 10% because it lowers perceived commitment.” Measurable, falsifiable, reasoned.',
        'Cohort analysis: users who set up a SIP in week 1 retain at 80% vs 20% — onboarding’s job is SIP setup, and now you know what to design for.',
        'Rage-click detection: users hammering a non-tappable fund NAV number = they expect it to open a chart. Free roadmap.',
      ]},
    ],
    examples: [
      { label: 'Example · Quant + qual together', text: 'Analytics: 58% drop at bank-mandate step (where). 5 user calls: “I don’t trust entering my account number in an app” (why). Solution: NPCI mandate via UPI — trust transferred to a known brand.' },
      { label: 'Example · Booking.com’s testing scale', text: 'Booking.com runs 1,000+ concurrent experiments; even losing tests are wins (learning) — but the traps (peeking, novelty effects) apply at any scale.' },
    ],
    mistake: 'Chasing clicks as the success metric when they diverge from retention. A banner that wins on clicks but raises uninstalls won the battle and lost the war.',
    interview: 'Q85: set up an A/B test with one variable, a pre-agreed sample size and duration, a guardrail metric, and a decision rule written before launch.',
    related: ['t07','t24'],
  },
  t24: {
    id: 't24', bookId: 'b1', bookLabel: 'Book 1 · Ch. 10', chapter: 'Ch. 10 — AI-Native UX',
    title: 'Designing for Non-Determinism',
    def: 'AI outputs vary — design for confidence, correction, and failure. Autonomy should be calibrated to stakes: act-with-undo, suggest, or propose-and-confirm.',
    why: 'Your CV claims AI-Native UX and MCP thinking — interviewers WILL probe. This topic is the substance behind the claim.',
    blocks: [
      { t: 'ul', items: [
        'Low stakes: act and allow undo (autocomplete). Medium: suggest, don’t apply (Copilot’s ghost text — dismissal must be free). High stakes: propose and require confirmation.',
        'An AI fund-summary feature needs: source citations, a confidence frame (“based on last 4 quarters”), and one-tap “report inaccuracy” — in a SEBI-regulated context, hallucination isn’t a UX bug, it’s a legal event.',
        'New patterns to master: streaming responses, human-in-the-loop confirmation, prompt scaffolding, graceful degradation.',
      ]},
      { t: 'diagram', id: 'rag', caption: 'RAG: retrieve real documents first, then instruct the model to answer from them — citations become possible and mandatory.' },
    ],
    examples: [
      { label: 'Example · GitHub Copilot’s ghost text', text: 'Suggestions render as ghost text — trivially dismissible, never blocking — because ~70% acceptance means 30% rejection must be free.' },
      { label: 'Example · Propose, never execute', text: 'AI actions in fintech should propose, never execute: “I’ve prepared a rebalance: sell X, buy Y — review and confirm.” Autonomy calibrated to stakes.' },
    ],
    mistake: 'Letting an AI feature execute a consequential action without confirmation. In a regulated product, an AI that executes is a legal event; one that drafts is a feature.',
    interview: 'Q124: “How do you design for AI’s mistakes?” — calibrate autonomy to stakes, always show sources, always frame confidence.',
    related: ['t23','t07'],
  },
  t25: {
    id: 't25', bookId: 'b1', bookLabel: 'Book 1 · Ch. 11', chapter: 'Ch. 11 — Case Studies & Portfolio',
    title: 'The Case Study Skeleton',
    def: 'Context & problem → evidence → exploration (options killed) → decision & rationale → craft → outcome & learning. Killed options prove judgment.',
    why: 'Service-company portfolios show output; product-company portfolios show judgment. This skeleton is the difference, and it’s learnable in one rewrite pass.',
    blocks: [
      { t: 'ul', items: [
        'Craft comes as the 5th act, not the 1st — visual strength shines, but after the reasoning that earned it.',
        'Rules: 3–4 case studies max. One must show metrics. One must show research. One should show systems. NDA-safe versions abstract the data, keep the reasoning.',
      ]},
    ],
    examples: [
      { label: 'Example · Bad → good rewrite', text: '“Redesigned HDFC Life app with a modern UI” → “Policy-renewal completion was suffering; we hypothesized payment-proof anxiety was the cause, tested 3 flows with 8 users, shipped the receipt-first pattern, and task success rose ~25%. Here’s the option we killed and why.”' },
      { label: 'Example · Repurposing the accessibility audit', text: '“I found X violations affecting Y% of users, built a remediation system — not just a report — and made violations structurally impossible via tokens.” System thinking + measurable rigor + real constraint.' },
    ],
    mistake: 'Leading with craft. Beautiful work that can’t defend its decisions or name trade-offs is a documented FAANG fail signal (“Portfolio ≠ interview”).',
    interview: 'The whole Interview Gym section (Phase 3) is built to rehearse this skeleton against your three anchor stories — HDFC, UTI accessibility, Dekoder.',
    related: ['t26','t09'],
  },
  t26: {
    id: 't26', bookId: 'b1', bookLabel: 'Book 1 · Ch. 12', chapter: 'Ch. 12 — Cracking Product-Company Interviews',
    title: 'The Loop, Mapped',
    def: 'Five rounds, in order: portfolio presentation, app critique, whiteboard/take-home, behavioral, craft/systems. Each grades a different muscle.',
    why: 'Knowing the shape of the loop in advance turns anxiety into preparation — you rehearse each round differently.',
    blocks: [
      { t: 'ul', items: [
        'Portfolio presentation (45–60 min): 1–2 deep dives. They interrupt with “why?” constantly. Practice being interrupted.',
        'App critique (30–45 min): Who’s it for → core job → walk a red route → heuristics violations → what’s working → what you’d test first.',
        'Whiteboard/take-home: ambiguous prompt, graded on process — clarifying questions → users & jobs → prioritize ONE problem → flows → sketch → success metrics. Never jump to UI.',
        'Behavioral (increasingly decisive): STAR stories. Prepare 8: conflict, failure, influence, deadline, ambiguity, disagreeing with data, mentoring, pushback-and-wrong.',
        'Craft/systems round: live Figma or file review — this is where auto layout mastery is pass/fail.',
      ]},
      { t: 'diagram', id: 'wbtimeline', caption: 'The whiteboard 33 minutes, allocated — most candidates blow the budget on minute 15’s sketch phase.' },
    ],
    examples: [
      { label: 'Example · Strong whiteboard openers', text: '“Who’s the business? What’s the success metric? What platform constraints? Let me pick a primary persona and one critical journey.” Never jump to UI in minute two.' },
      { label: 'Example · The closing sentence', text: 'Always end with: “Here’s how I’d measure success and what I’d validate first.” That sentence alone separates product designers from UI designers.' },
    ],
    mistake: 'Reciting Double Diamond without evidence of judgment — “process theater” is literal debrief language at Google and Meta.',
    interview: 'Target order: Tier 1 India (Flipkart, PhonePe, CRED, Razorpay, Swiggy, Zerodha, Groww) → Global product cos in India (Google, Microsoft, Amazon, Uber) → High-growth SaaS (Postman, Chargebee, Hasura).',
    related: ['t25','t02'],
  },

  // ---- Book 5 gap-fill (content completeness addendum) ----
  g01: {
    id: 'g01', bookId: 'b5', bookLabel: 'Gap-fill · Business', chapter: 'Content Completeness Addendum',
    title: 'OKRs for Designers',
    def: 'Objectives are qualitative and ambitious; Key Results are quantitative and time-bound. Design work should ladder into a KR, not just produce a deliverable.',
    why: 'Product companies plan in OKRs, not project lists. If you can’t say which KR your work moves, you’re describing output, not outcome — the exact service-company tell this platform is built to remove.',
    blocks: [
      { t: 'ul', items: [
        'Objective: qualitative, ambitious, memorable (“Make first-time investing feel safe”). Key Results: 2–4 measurable outcomes with a number and a deadline (“SIP setup completion 58%→70% by Q2”).',
        'Design work ladders into KRs as a contributing initiative, not the KR itself: “redesign document upload” is an initiative; “KYC completion +12pp” is the KR it serves.',
        'Good KR: outcome-shaped and falsifiable (“D7 retention of new SIP users 40%→55%”). Bad KR: activity-shaped and ungameable-proof-free (“ship 3 new screens,” “redesign the onboarding flow”) — these can be “done” while moving nothing.',
      ]},
    ],
    examples: [
      { label: 'Example · A good vs bad KR pair', text: 'Bad: “Launch new fund-comparison feature.” Good: “Increase comparison→investment conversion from 8% to 14% by end of quarter.” The first can ship and fail silently; the second forces you to watch the number.' },
      { label: 'Example · Laddering your own work', text: 'Your UTI accessibility system doesn’t “belong” to an OKR about accessibility — frame it as laddering into a retention or trust KR: fewer errors and higher completion among assisted/low-vision users.' },
    ],
    mistake: 'Writing OKRs that describe shipping a feature instead of moving a number. If the KR can be satisfied by shipping something that changes nothing, it’s not a Key Result.',
    interview: 'Interviewers listen for whether you connect your project story to a metric a business actually tracks — this is Section 2’s “How did design directly impact business metrics?” in disguise.',
    related: ['t07','t09'],
  },
  g02: {
    id: 'g02', bookId: 'b5', bookLabel: 'Gap-fill · Business', chapter: 'Content Completeness Addendum',
    title: 'Service Design: Beyond the Blueprint',
    def: 'Frontstage is what the user sees; backstage is the systems, staff, and processes that make it work. Sometimes the fix isn’t in the UI at all.',
    why: 'A service blueprint is listed as a core artifact for exactly this reason: when the fix isn’t in the UI (support, ops), no amount of screen redesign solves the actual problem.',
    blocks: [
      { t: 'ul', items: [
        'Frontstage: everything the customer directly experiences — screens, calls, receipts, the chauffeur’s greeting. Backstage: the internal systems, staff scripts, and processes that produce the frontstage experience.',
        'A journey map plus the backstage layer is a service blueprint — use it specifically for cross-touchpoint problems where a screen redesign would just move the friction, not remove it.',
        'Diagnostic question: is this a UI problem (the button is hard to find) or a service problem (the process behind the button is broken)? Redesigning the wrong layer wastes a sprint and changes nothing.',
      ]},
    ],
    examples: [
      { label: 'Example · Fixing support-call volume vs. adding app features', text: 'If support calls spike about “where is my refund,” the instinct is a new in-app tracker screen. A service-design lens asks first whether the backstage refund process itself is slow or inconsistent — a beautiful tracker showing an unreliable process just makes the unreliability more visible, not less painful.' },
      { label: 'Example · UTI’s distributor WhatsApp workaround', text: 'Distributors running everything through WhatsApp and Excel (Topic: Methods Map) is a backstage signal — the frontstage portal isn’t the problem; the backstage workflow it was meant to replace never actually got redesigned around how distributors work.' },
    ],
    mistake: 'Redesigning the frontstage screen when the actual failure is a backstage process. This is the single most common reason a “successful” redesign doesn’t move the metric it was meant to move.',
    interview: 'When a whiteboard prompt smells like an ops problem wearing a UI costume, naming that distinction aloud — “I want to check whether this is a screen problem or a process problem” — is a senior tell.',
    related: ['t15','t04'],
  },
  g03: {
    id: 'g03', bookId: 'b5', bookLabel: 'Gap-fill · Practice', chapter: 'Content Completeness Addendum',
    title: 'Design Ops',
    def: 'Design Ops is the discipline of tooling, rituals, and process infrastructure that lets a design team scale — the practice of making good practice easy.',
    why: 'You’ll collaborate with (or need to build) Design Ops functions at any product company past a certain size. Knowing what it is and when a team needs it shows organizational maturity.',
    blocks: [
      { t: 'ul', items: [
        'What it covers: tooling (Figma library governance, plugin standards), rituals (critique cadence, design reviews, onboarding for new designers), and infrastructure (how files are organized, how components are versioned and deprecated).',
        'When a team needs it: once inconsistency has a visible cost — new designers take weeks to find the right component, two designers build the same pattern differently, or handoff time keeps growing as the team grows. Below that threshold, a strong IC can absorb the work informally.',
        'Design Ops as a practice, not a role: even without a dedicated Design Ops hire, someone (often the most senior IC) owns file hygiene, critique structure, and onboarding docs — these are Design Ops functions performed without the title.',
      ]},
    ],
    examples: [
      { label: 'Example · Onboarding as a Design Ops artifact', text: 'A new designer joining a 12-person team should be productive in their component library within a day, not a week — that gap is exactly what a Design Ops onboarding doc and clean file structure is meant to close.' },
      { label: 'Example · Your own file hygiene as proto-Design-Ops', text: 'Your Figma workflow answer (Q66) — pages per lifecycle stage, published library, engineer-navigable naming — is literally Design Ops practiced individually before a team needs the formal role.' },
    ],
    mistake: 'Introducing heavy process (rituals, governance, tooling) before there’s a visible cost of inconsistency to justify it. Premature process reads as bureaucracy, not maturity.',
    interview: '“How would you build design culture at a company that doesn’t have one?” (Q138) — wins before rituals; Design Ops earns its keep by fixing a visible pain, not by existing on principle.',
    related: ['t21','g04'],
  },
  g04: {
    id: 'g04', bookId: 'b5', bookLabel: 'Gap-fill · Practice', chapter: 'Content Completeness Addendum',
    title: 'Workshop Facilitation',
    def: 'Running an alignment workshop or a design sprint means designing the room, not just the artifact: an explicit agenda shape of diverge then converge, every time.',
    why: 'Senior designers are expected to run rooms, not just attend them — facilitation is a craft with its own techniques (dot-voting, HMW generation) that most designers never practice deliberately.',
    blocks: [
      { t: 'ul', items: [
        'Agenda shape: every good workshop is a diamond — diverge (generate many ideas/options, no judgment) then converge (narrow with an explicit method). Mixing the two phases kills both: judging ideas while generating them suppresses volume.',
        'How-Might-We (HMW) generation: turn a problem statement or research insight into several HMW questions (“HMW give investors proof-of-transaction they trust enough to screenshot-and-share?”) — good HMWs are neither too broad (“HMW improve onboarding”) nor too narrow (“HMW change this button’s color”).',
        'Dot-voting: give each participant a fixed number of votes (dots) to distribute across generated ideas/HMWs — converts a loud-voice-wins room into a visible, defensible priority list in minutes.',
        'Design sprint shape (Knapp): Understand → Diverge → Decide → Prototype → Test, usually compressed into days — the same diverge/converge skeleton as Double Diamond, timeboxed hard.',
      ]},
    ],
    examples: [
      { label: 'Example · Turning insights into HMWs', text: 'Affinity-mapping clusters (Topic: Synthesis & JTBD) directly generate a workshop’s HMW list — “distrust of digital payment proofs” becomes “HMW give investors proof they trust enough to screenshot-and-share?”' },
      { label: 'Example · Dot-voting to end a committee fight', text: 'Instead of letting the loudest stakeholder’s preference win, give the room 3 dots each across 8 generated options — the result is a visible, numeric priority the room agreed to, not a title-based override.' },
    ],
    mistake: 'Letting divergence and convergence blur together in the same conversation. Generating and judging at the same time collapses idea volume — separate the phases explicitly, even just by saying so aloud.',
    interview: '“How do you handle design-by-committee?” (Q95) is a facilitation question in disguise — reframe from opinions to criteria, then converge with a method (dot-voting), not a debate.',
    related: ['t14','g03'],
  },
  g05: {
    id: 'g05', bookId: 'b5', bookLabel: 'Gap-fill · Strategy', chapter: 'Content Completeness Addendum',
    title: 'Competitive Analysis',
    def: 'Two different methods answer two different questions: a feature matrix answers “what do they have that we don’t,” an experience teardown answers “why does theirs work better.”',
    why: 'The most common competitive-analysis failure is chasing feature parity — matching a competitor’s checklist while missing the mechanism that actually makes their experience work.',
    blocks: [
      { t: 'ul', items: [
        'Feature matrix: a table of competitors × features, checked or unchecked. Useful for spotting genuine gaps, dangerous when treated as a roadmap — matching every checkmark produces bloat, not advantage.',
        'Experience teardown: walk a competitor’s red route as a real user would, asking at each step “why is this here, and what is it optimizing for?” — this is the same mechanism-thinking used in app critiques (Section 6 of the Interview Bank).',
        'Avoiding the feature-parity trap: ask what job the competitor’s feature actually serves before deciding you need your own version of it. A feature that serves their business model or user segment may serve neither of yours.',
      ]},
    ],
    examples: [
      { label: 'Example · Zerodha vs. Groww, torn down not tabulated', text: 'A feature matrix would show both apps “have” onboarding, education content, and fund search — it would miss that Zerodha assumes competence and Groww assumes anxiety, the actual strategic difference that a teardown surfaces.' },
      { label: 'Example · The parity trap', text: 'Adding a competitor’s gamified rewards layer just because they have it — without asking what job it serves them (engagement metrics) versus what it would cost you (trust, in a fintech context) — is competitive analysis producing the wrong roadmap.' },
    ],
    mistake: 'Building a feature matrix and treating unchecked boxes as a to-do list. A gap is only worth closing if it serves your users and your business model — not just because a competitor has it.',
    interview: 'Q105 (“Compare two competing apps’ approaches to the same problem”) is a live experience-teardown exercise — practice narrating mechanism, not a feature checklist.',
    related: ['t26','g06'],
  },
  g06: {
    id: 'g06', bookId: 'b5', bookLabel: 'Gap-fill · Strategy', chapter: 'Content Completeness Addendum',
    title: 'Brand Systems in Product',
    def: 'Brand expresses differently in product than in marketing: voice, motion, and restraint carry it, consistently, across every surface — not a hero illustration on a landing page.',
    why: 'Designers who only think of “brand” as marketing assets miss that a product’s brand is felt through hundreds of small, consistent decisions — tone of an error message, the easing curve of a transition, what gets said and what doesn’t.',
    blocks: [
      { t: 'ul', items: [
        'Marketing brand vs. product brand: marketing brand is a campaign, a hero image, a tagline — episodic and disposable. Product brand is voice, motion quality, and restraint expressed every single day, in every screen a user actually lives in.',
        'Where brand lives in product: voice (word choice, formality, whether it ever jokes), motion (duration and easing — snappy vs. languid says something), and what a system chooses NOT to do (GBLACK’s conventional tab bar, Topic: “How do you design for both iOS and Android” — brand budget spent on the parts users actually notice).',
        'Consistency across surfaces: the same voice and motion quality should hold whether a user is in the investor app, the distributor portal, or a support email — brand fragments the moment one surface gets a different treatment “because marketing owns that one.”',
      ]},
    ],
    examples: [
      { label: 'Example · CRED’s brand as UI logic', text: 'CRED’s exclusivity positioning (“for the creditworthy”) isn’t just a tagline — it’s executed through dark luxe UI, invite gating, and a brand tone that never begs. Design IS the positioning made tangible, not a wrapper around it.' },
      { label: 'Example · GBLACK’s brand budget', text: 'No exclamation marks, no emoji, a muted palette, and a completely conventional tab bar — the brand doesn’t spend its “creative capital” on navigation; it spends it on tone and the ride-ending moment where it’s actually felt.' },
    ],
    mistake: 'Treating brand as a skin applied at the end (colors, a logo, a hero image) instead of a set of behavioral commitments (voice, motion, restraint) that show up in every state, including error states.',
    interview: 'Q59: “How do you make a design feel premium?” is fundamentally a brand-systems question — the answer is restraint and consistency, not decoration.',
    related: ['t18','t22'],
  },
  g07: {
    id: 'g07', bookId: 'b5', bookLabel: 'Gap-fill · Mobile', chapter: 'Content Completeness Addendum',
    title: 'The Mobile Pattern Set',
    def: 'Notifications, permissions, onboarding sequences, and offline design are the four mobile-specific pattern families every product designer must own — none of them are “extra,” all are core UX.',
    why: 'Mobile is India’s primary and often only device — network variability, permission fatigue, and first-open experience decide whether a user ever reaches your carefully designed second screen.',
    blocks: [
      { t: 'ul', items: [
        'Notifications strategy: types (transactional, re-engagement, promotional) each need a different frequency and tone; timing matters more than copy (a SIP reminder the day before due date beats a generic “come back” push); permission-priming — explain WHY before the OS permission dialog appears, never ask cold.',
        'Permissions UX: ask-in-context (request camera access at the moment of scanning a document, not at first launch), and use pre-permission explainer screens so the user understands the trade before the irreversible OS prompt appears.',
        'Onboarding sequences — three shapes: value-first (show the product working before any signup, best when the value is instantly graspable), tour (guided walkthrough, best for genuinely novel interaction models), progressive (teach features just-in-time as the user reaches them, best for complex products like a KYC-heavy fintech app — this is the shape Book 1 recommends for chunked KYC).',
        'Offline design: optimistic UI (show the action succeeded, sync later — WhatsApp’s single tick), cached last-known state clearly flagged as stale, and never a dead blank screen when connectivity drops.',
      ]},
    ],
    examples: [
      { label: 'Example · Permission-priming for a KYC camera scan', text: 'Instead of triggering the OS camera-permission dialog on first app open, show one explainer screen first — “We’ll need your camera to scan your PAN card” — then request. Cold permission asks get denied far more often, and a denial is often permanent friction.' },
      { label: 'Example · Progressive onboarding for KYC', text: 'A 14-field KYC form chunked into “Identity, Address, Bank, Nominee” (Miller’s Law, Topic: The UX Laws) IS a progressive onboarding sequence — each chunk is taught and completed just-in-time rather than dumped at once.' },
    ],
    mistake: 'Requesting a permission cold, at first launch, with no context. This is the single highest-friction mobile mistake — users deny what they don’t yet understand the value of.',
    interview: 'Mobile-specific whiteboard prompts (elderly medicine reminders, queue experiences) implicitly test whether you reach for notification timing and offline resilience unprompted.',
    related: ['t16','g08'],
  },
  g08: {
    id: 'g08', bookId: 'b5', bookLabel: 'Gap-fill · Ethics', chapter: 'Content Completeness Addendum',
    title: 'Design Ethics — The Positive Framework',
    def: 'Beyond avoiding dark patterns: consequence scanning, value-sensitive design, and one clean test — would users consent if they fully understood?',
    why: 'Refusing dark patterns is a floor, not a practice. Product companies that take ethics seriously want designers who proactively scan for harm, not just ones who avoid a known blacklist.',
    blocks: [
      { t: 'ul', items: [
        'Consequence scanning: before shipping, deliberately ask what could go wrong — for the user, for society, for the business — even in a feature with good intentions. This is the positive-framework cousin of the pre-mortem ritual (Topic: Inversion, in the mental models set).',
        'Value-sensitive design: explicitly name whose values are embedded in a design decision, and whether they match the people affected by it — a “simplify by removing the disclosure” decision embeds the business’s values (speed) over the regulator’s and user’s (informed consent) unless checked.',
        'The consent test: “would users consent to this if they fully understood what’s happening?” If a user would feel deceived upon learning the mechanism, the design has failed the test regardless of whether it’s technically legal.',
      ]},
    ],
    examples: [
      { label: 'Example · Applying the consent test to loss aversion', text: 'Framing SIP pause as “you’ll miss ₹X of compounding by age 60” (Topic: Cognitive Biases) passes the consent test only if the number is true and the goal is the user’s own — the same mechanic used to manufacture false urgency would fail it.' },
      { label: 'Example · Consequence-scanning a rewards feature', text: 'A points/streak mechanic for a trading app might consequence-scan to: could this encourage overtrading among retail users who statistically lose more the more they trade? That question — asked before shipping — is what separates ethics-by-design from ethics-by-lawsuit.' },
    ],
    mistake: 'Treating “we didn’t use a known dark pattern” as proof of ethical design. Positive ethics asks what a feature could cause, not just whether it matches a blacklist.',
    interview: 'Interviewers increasingly probe this directly (Q131, data/privacy) — naming DPDP Act awareness plus a “would the user consent if they understood” framing signals judgment beyond compliance.',
    related: ['t12','t24'],
  },
  g09: {
    id: 'g09', bookId: 'b5', bookLabel: 'Gap-fill · Emerging', chapter: 'Content Completeness Addendum',
    title: 'Emerging Surfaces (Awareness Level)',
    def: 'Voice UI and AR/VR each break the assumption that affordances are visible — know the vocabulary; know when it rarely matters for a product-designer interview.',
    why: 'These surfaces show up rarely in interviews, but confidently naming the core concept when they do (rather than going blank) is a cheap, high-value hedge.',
    blocks: [
      { t: 'ul', items: [
        'Voice UI: no visual affordances means the user can’t see what’s possible — the core design response is confirmation strategy (repeat back what was heard before acting) and aggressive expectation-setting about capability limits, the same principles as conversational UI (Topic: Designing for Non-Determinism) applied without a screen at all.',
        'AR/VR/spatial — core concepts: comfort (motion sickness from mismatched visual/vestibular signals is the #1 failure mode), spatial anchoring (virtual objects must stay convincingly fixed to real-world positions as the user moves, or trust in the whole experience collapses).',
        'When these matter for a product-designer interview: rarely — most product-company loops (Flipkart, CRED, even Google/Meta for a mobile-first product role) will not whiteboard a VR prompt. Knowing the vocabulary is a hedge against the rare case, not a preparation priority.',
      ]},
    ],
    examples: [
      { label: 'Example · Voice confirmation strategy', text: 'A voice-only banking assistant should always repeat back what it understood before executing (“Transferring ₹5,000 to Rahul — say confirm”) — the same propose-and-confirm pattern used for AI actions (Topic: Designing for Non-Determinism), because voice has zero visual affordance to fall back on if it misheard.' },
      { label: 'Example · Spatial anchoring trust', text: 'An AR furniture-placement app that lets a virtual sofa visibly drift from its placed position as the user walks around it breaks trust in the whole feature instantly — spatial anchoring failures are felt as “broken,” not “imprecise.”' },
    ],
    mistake: 'Spending real prep time mastering AR/VR/voice mechanics at the expense of the core loop (product thinking, systems, metrics). This topic is a vocabulary hedge, explicitly not a priority.',
    interview: 'If asked, the strongest move is naming the core concept in one sentence, then redirecting to what you do know deeply — confident brevity, not a bluffed deep-dive.',
    related: ['t24','g08'],
  },
  g10: {
    id: 'g10', bookId: 'b5', bookLabel: 'Gap-fill · Leadership', chapter: 'Content Completeness Addendum',
    title: 'The Design Leadership Ladder',
    def: 'Seniority is scope of ambiguity handled, not years or tool mastery — senior, staff, and principal each get handed progressively fuzzier problems.',
    why: 'Q133 (★) — “What makes a designer senior?” — is asked in nearly every loop. This topic is the expanded, level-by-level version of that answer.',
    blocks: [
      { t: 'ul', items: [
        'Senior: handed a fuzzy outcome (“first-time investor activation is weak”) and returns a validated, shipped answer — aligning PMs, engineers, and stakeholders along the way. Scope: one product area, one to two quarters out.',
        'Staff: scope of ambiguity widens to cross-team or cross-product problems — the input is often not even a stated problem yet, but a sensed org-wide friction (design debt, inconsistent patterns across three teams) that staff-level judgment must first name before solving.',
        'Principal: scope becomes company-wide or multi-year — principal-level designers often shape what problems the company chooses to work on at all, not just how those problems get solved. The deliverable is frequently a point of view that changes strategy, not a shipped screen.',
        'What changes at each level is not craft quality (a senior’s pixels can be as good as a principal’s) — it’s the size and fuzziness of the ambiguity you’re trusted to resolve without supervision, and how many people’s work your judgment now redirects.',
      ]},
    ],
    examples: [
      { label: 'Example · The tell in interviews', text: 'Seniors name their trade-offs unprompted (Q133) — this single behavior is the interview-visible proxy for “has handled real ambiguity,” regardless of title on a CV.' },
      { label: 'Example · IC vs. management, held honestly', text: 'Q135’s honest answer — “my leverage is craft plus product judgment… I’d rather own the hardest design problems than the calendar of people who do” — describes choosing the IC ladder (senior → staff → principal) deliberately, not drifting into management as a default promotion.' },
    ],
    mistake: 'Equating seniority with years of experience or visual polish. A designer with beautiful screens who has never owned a fuzzy, cross-functional outcome has not yet demonstrated senior scope.',
    interview: 'Q133 expanded: be ready to describe what changes moving from senior to staff to principal — most candidates can define “senior” but go vague past it, which is exactly where this topic helps.',
    related: ['t25','t09'],
  },
};

// ---- 8-week roadmap (Book 1, Part VI) ----
export const WEEKS = [
  { n: 1, title: 'Product Thinking Foundations',
    goals: ['Read: Continuous Discovery Habits (start) · Good Strategy Bad Strategy summary · Lenny’s/Reforge on metrics', 'Learn: Ch. 1 fully — business models, AARRR, North Star, RICE, Kano'],
    apply: 'Write the UTI revenue one-pager + funnel sketch for GBLACK booking',
    output: '2 opportunity briefs for real current work',
    reading: ['t06','t07','t08','t09'] },
  { n: 2, title: 'UX Laws, Heuristics, Psychology',
    goals: ['Read: lawsofux.com (all) · Nielsen’s 10 + NN/g articles · Design of Everyday Things ch. 1–3'],
    apply: 'Heuristic evaluation of the UTI investor app (score every red route); find 3 examples of each law in apps you use',
    output: '10-issue heuristic audit doc — this becomes case-study material',
    reading: ['t10','t11','t12'] },
  { n: 3, title: 'Systems Bootcamp I (the grind week)',
    goals: ['Learn: Figma auto layout deep-dive — think in flexbox'],
    apply: 'Rebuild 10 existing GBLACK/UTI screens, 100% auto layout, zero absolute positioning',
    output: 'Timed test: change copy + resize on old vs new versions. Journal the difference.',
    reading: [] },
  { n: 4, title: 'Systems Bootcamp II',
    goals: ['Learn: variables, modes, token hierarchy (primitive→semantic→component), component variants & slots; study Material 3’s kit architecture'],
    apply: 'Build a mini design system: 1 brand, light+dark modes, 8 components, full states',
    output: 'Published Figma library + a 1-page “system decisions” doc. Portfolio piece #3.',
    reading: [] },
  { n: 5, title: 'Research & Evidence',
    goals: ['Read: The Mom Test (whole book) · NN/g on usability testing & card sorting · finish Continuous Discovery Habits'],
    apply: 'Run 3 real user interviews on mutual fund app behavior; run 1 five-user usability test on any flow you’ve designed',
    output: 'Affinity map → 3 insights → 3 HMWs. Real research you conducted = interview gold.',
    reading: [] },
  { n: 6, title: 'Case Study Rebuild',
    goals: ['Learn: Ch. 11; study 10 great case studies (bestfolios, Cofolios)'],
    apply: 'Rewrite your 2 strongest projects (UTI accessibility-as-system + GBLACK or HDFC Life) in the 6-act skeleton',
    output: '2 finished case studies with named trade-offs and killed options',
    reading: [] },
  { n: 7, title: 'Metrics, Experimentation, AI-Native Depth',
    goals: ['Read: Amplitude’s North Star Playbook · A/B testing pitfalls · Ch. 9–10'],
    apply: 'Retrofit metrics thinking onto both case studies; write your AI-native UX point of view (1 page)',
    output: 'Portfolio site updated; LinkedIn rewritten in outcome language',
    reading: [] },
  { n: 8, title: 'Interview Machine',
    goals: ['4 app critiques aloud (recorded) · 2 full timed whiteboard challenges · 8 STAR stories written · 1 full portfolio presentation with brutal interruptions'],
    apply: 'Start applying: 5 tier-1 Indian product companies + referrals hunt',
    output: 'Interview-ready for Indian product companies. FAANG: keep compounding 3–4 more months.',
    reading: [] },
];

// ---- Law of the day (Ch. 2 + E1 cheat sheet) ----
export const LAWS = [
  { name: 'Fitts’s Law', one: 'Big + close = fast to hit.', ex: 'GBLACK’s “Book Now” owns the bottom of the screen; “cancel ride” requires deliberate reach.' },
  { name: 'Hick’s Law', one: 'More options = slower choice.', ex: '80 UTI schemes in a flat list paralyzes; “Goal → Risk → 3 recommendations” converts.' },
  { name: 'Jakob’s Law', one: 'Users import expectations from every other app.', ex: 'Every Indian fintech app uses the UPI PIN pad layout — deviating creates errors, not distinction.' },
  { name: 'Miller’s Law', one: '~4–7 chunks fit in working memory.', ex: 'A 14-field KYC form → 4 chunked steps (“Identity, Address, Bank, Nominee”) feels half as long.' },
  { name: 'Peak-End Rule', one: 'Peaks and endings shape the memory of the whole.', ex: 'The ride ending — payment, farewell, instant receipt — shapes the review more than 40 minutes of driving.' },
  { name: 'Von Restorff Effect', one: 'The different thing gets remembered.', ex: 'One colored “Upgrade” button in a monochrome nav. Use one accent CTA — sparingly.' },
  { name: 'Doherty Threshold', one: 'Under 400ms keeps flow — or show feedback.', ex: 'WhatsApp shows your message instantly with a clock icon, syncing later. Design the perception.' },
  { name: 'Zeigarnik Effect', one: 'Incomplete tasks nag at memory.', ex: '“Your KYC is 1 step away” — the highest-converting notification in Indian fintech onboarding.' },
  { name: 'Tesler’s Law', one: 'Complexity is conserved — someone absorbs it.', ex: 'Push complexity to the system, not the user: DigiLocker pull beats a 6-document upload picker.' },
  { name: 'Serial Position Effect', one: 'First and last items are remembered.', ex: 'Order navigation and lists so the critical items sit at the ends, not the middle.' },
  { name: 'Goal-Gradient Effect', one: 'Effort rises as the goal nears.', ex: 'Show progress and pre-fill step 1 — a bar that starts at 20% finishes more often than one at 0%.' },
  { name: 'Aesthetic-Usability Effect', one: 'Pretty is perceived as more usable.', ex: 'Polish buys patience — but audit past it: beauty hides usability debt in your own reviews.' },
];

// ---- flag post-processing for template rendering ----
const FLAG = { p: 'isP', h: 'isH', ul: 'isUl', table: 'isTable', cards: 'isCards', diagram: 'isDiagram' };
const DG = { dd: 'dgDD', fid: 'dgFid', scope: 'dgScope', funnel: 'dgFunnel', matrix: 'dgMatrix', tokens: 'dgTokens', states: 'dgStates', retention: 'dgRetention', kano: 'dgKano', component: 'dgComponent', spacing: 'dgSpacing', touch: 'dgTouch', typescale: 'dgTypescale', rag: 'dgRag', wbtimeline: 'dgWbtimeline' };
Object.values(TOPICS).forEach((tp) => {
  tp.blocks.forEach((b) => {
    b[FLAG[b.t]] = true;
    if (b.t === 'diagram') b[DG[b.id]] = true;
  });
});
