// Curriculum topics — one full topic page per concept named in the Day-by-day curriculum
// (data/plan.js CURRICULUM). Authored to the same template as the core Library topics:
// definition, why it matters, scannable body, 2 examples, common mistake, interview angle, quiz-ready.
// IDs are prefixed 'c' and ordered to match the curriculum's own phase/week sequence.

export const TOPICS = {

  c001: {
    id: 'c001', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 1 — What Design Really Is',
    title: 'UI vs UX vs Product Design',
    def: 'UI is the surface, UX is the whole experience of reaching a goal, and Product Design adds the business "why" on top of both.',
    why: 'This is the single most common vocabulary check in early-stage interviews. Interviewers listen for whether you use these three words precisely, because sloppy usage signals someone who has never had to own the difference between them in a real team.',
    blocks: [
      { t: 'ul', items: [
        'UI (User Interface) — the visible, interactive surface: layout, typography, color, components, states, motion. It answers "is it clear, usable, and beautiful?"',
        'UX (User Experience) — the entire journey someone takes to accomplish a goal, including how it feels: flows, structure, feedback, errors, emotions across every touchpoint, not just the screen in front of them. It answers "does the person succeed, and how did it feel?"',
        'Product Design — UX and UI plus business context: what to build, for whom, why now, and how success will be measured. It answers "is this the right thing to build, and did it work?"',
      ]},
      { t: 'p', text: 'Think of it as three concentric rings, not three separate jobs: UI sits inside UX, and UX sits inside product design. A product designer can zoom out to question whether a feature should exist at all, and zoom back in to fix a button\'s padding — moving fluidly across all three rings is exactly what separates a senior generalist from someone who only ever operates in one layer.' },
    ],
    examples: [
      { label: 'Example · A checkout screen', text: 'The UI question is whether the total price is legible and the pay button is easy to find. The UX question is what happens if the payment fails, times out, or the promo code is invalid. The product question is more radical: should this checkout step exist at all, or should payment be saved and made implicit the way ride-hailing apps do it?' },
      { label: 'Example · An internal HR portal', text: 'UI: are the leave-balance numbers readable at a glance? UX: what happens when an employee tries to apply for leave that overlaps a public holiday, or their manager is on leave too? Product: is a self-service leave request the highest-leverage thing to build this quarter, or is the real problem that approvals take five days because of an email-based backup process nobody redesigned?' },
    ],
    mistake: 'Using "UI/UX" as one interchangeable word. Each layer answers a genuinely different question, and collapsing them together is one of the fastest ways to read as junior in a live conversation.',
    interview: 'A strong answer sounds like: "A UX designer perfects the checkout flow; a product designer asks whether checkout friction is even the biggest lever this quarter." Naming the business "why" is what elevates an answer from UX to product thinking.',
    related: [],
  },

  c002: {
    id: 'c002', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 1 — What Design Really Is',
    title: 'Design Thinking',
    def: 'A human-centered problem-solving methodology built on five stages: Empathize, Define, Ideate, Prototype, Test — repeated in loops, not a straight line.',
    why: 'Design Thinking is the shared vocabulary every design school and most product organizations use to describe how good design work actually happens. Interviewers use it as a baseline: can you walk through a real project using this language without reciting it like a slogan?',
    blocks: [
      { t: 'ul', items: [
        'Empathize — understand the people you are designing for through direct contact: interviews, observation, immersion. You are building intuition, not just collecting facts.',
        'Define — synthesize what you learned into a sharp, actionable problem statement. A good one names a specific user and a specific need, not a vague "improve the experience."',
        'Ideate — generate a wide range of possible solutions before narrowing. Divergence before convergence is the whole point of this stage; picking the first idea defeats it.',
        'Prototype — build just enough of the idea to test the riskiest assumption, in the cheapest medium that answers the question.',
        'Test — put the prototype in front of real people and learn, expecting to loop back to any earlier stage based on what you find.',
      ]},
      { t: 'p', text: 'The honest, senior-level truth about Design Thinking: real projects are messy loops, not a clean five-step staircase. The stages are a checklist of thinking that must happen somewhere in the project, not a sequence to be followed in lockstep. Saying this out loud in an interview — with a concrete example of when you looped backward — reads as experience, not textbook recitation.' },
    ],
    examples: [
      { label: 'Example · A grocery delivery app', text: 'Empathize reveals that users don\'t actually want "more product photos" (the stated ask) — they want reassurance that substitutions won\'t ruin a recipe. Define reframes the problem as "reduce anxiety about substitutions," not "improve product imagery." That reframe changes what gets prototyped entirely.' },
      { label: 'Example · Looping backward mid-project', text: 'A team prototypes and tests a new onboarding flow, only to discover in testing that the real problem was never onboarding — it was that the value proposition wasn\'t clear on the very first screen. They loop back to Define. Naming this out loud in an interview signals real practice, not textbook recitation.' },
    ],
    mistake: 'Treating the five stages as a rigid sequence to march through once. The best practitioners cycle back constantly; presenting Design Thinking as a straight line is a documented "process theater" fail signal in senior interview debriefs.',
    interview: '"Walk me through your process" opens most interviews. Naming the flexible spine — understand, define, explore, validate, deliver, measure — with one real project attached, including a moment you looped back, is what separates a strong answer from a recited one.',
    related: [],
  },

  c003: {
    id: 'c003', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 1 — What Design Really Is',
    title: 'Human-Centered Design',
    def: 'A design philosophy that starts every decision from the real needs, behaviors, and context of the people who will use the thing — not from technology capability or internal opinion.',
    why: 'Human-Centered Design (HCD) is the underlying belief system that Design Thinking operationalizes into steps. Interviewers probe whether you can point to a moment you changed a decision because of evidence about real people, not because you personally preferred it.',
    blocks: [
      { t: 'ul', items: [
        'Desirability — do people actually want this? (the human lens)',
        'Feasibility — can it actually be built with the technology and time available? (the engineering lens)',
        'Viability — does it make business sense? (the business lens)',
        'HCD sits at the intersection of these three circles — a solution that is only desirable is a hobby project; one that is only feasible and viable but not desirable is a well-engineered failure nobody wants.',
      ]},
      { t: 'p', text: 'The discipline of HCD is resisting the urge to design from your own preferences or from what is technically easiest, and instead building genuine mechanisms — interviews, usability sessions, support-ticket analysis, analytics — to keep real user evidence in the room during every decision, especially the small ones nobody thinks to test.' },
    ],
    examples: [
      { label: 'Example · A internal expense-reporting tool', text: 'The engineering-easy solution is a form that mirrors the database schema exactly. The human-centered solution starts from how employees actually think about a trip — "the Chicago trip," not "expense report #4471" — and organizes the interface around that mental model instead.' },
      { label: 'Example · Voice input for a delivery app', text: 'Technically feasible and business-viable (it is cheap to add and demoes well), but observation shows most couriers use it one-handed on a moving scooter with background noise — the actual human context makes voice unreliable exactly when it is needed most. HCD catches this before a single line of code ships.' },
    ],
    mistake: 'Confusing HCD with just "doing user research once at the start." Human-centered design is a continuous discipline applied to every decision, not a research phase you complete and then design from memory.',
    interview: 'Have one story ready where research evidence overturned your own initial instinct. That story — not a definition — is what proves you practice HCD rather than just believe in it.',
    related: ['c002'],
  },

  c004: {
    id: 'c004', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 1 — What Design Really Is',
    title: 'The Double Diamond',
    def: 'A visual model of the design process as two diamonds back to back: diverge then converge on the right problem, then diverge then converge again on the right solution.',
    why: 'The Double Diamond is the most commonly referenced structural diagram in design interviews because it makes divergent/convergent thinking visible. Interviewers use it to check whether you understand that "exploring broadly before narrowing" applies twice — once to the problem, once to the solution — not just once at the end.',
    blocks: [
      { t: 'diagram', id: 'dd', caption: 'The Double Diamond: explore the problem widely, pick THE problem, explore solutions widely, pick and ship THE solution.' },
      { t: 'ul', items: [
        'Discover — explore the problem space broadly: talk to users, look at data, question assumptions. Resist jumping to solutions here.',
        'Define — converge on one sharp, validated problem statement worth solving. This is the narrowest point of the whole process.',
        'Develop — explore many possible solutions to that one problem, including ones that feel risky or unconventional.',
        'Deliver — converge on the solution to build, test it, and ship it.',
      ]},
    ],
    examples: [
      { label: 'Example · "Improve engagement" as a starting brief', text: 'A team handed a vague brief to "improve engagement" runs a full Discover phase and finds the real issue is that new users never reach the feature that would hook them — not that existing engaged users need more features. That reframing during Define changes the entire second diamond.' },
      { label: 'Example · Skipping the first diamond', text: 'A stakeholder wants a leaderboard feature built immediately. Without running Discover/Define, three weeks are spent polishing a leaderboard nobody asked for. Running even a compressed version of the first diamond first would have surfaced that the actual complaint was slow customer support response times.' },
    ],
    mistake: 'Jumping straight into the second diamond (solutioning) without ever narrowing the problem in the first. This is the single most common shortcut junior designers and rushed teams take, and it is exactly what "solving the wrong problem, beautifully" looks like.',
    interview: 'When asked to describe your process, sketching this shape and narrating a real project through it — including where you spent more or less time based on how well-understood the problem already was — is a strong, visual way to answer.',
    related: ['c002'],
  },

  c005: {
    id: 'c005', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 2 — How Users Think',
    title: 'Mental Models',
    def: 'The internal, simplified beliefs a person carries about how something works — built from past experience — which shape what they expect your product to do before they ever touch it.',
    why: 'Every usability problem is, underneath, a mismatch between the user\'s mental model and the system\'s actual model. Naming this explicitly in a critique is one of the clearest signals of a mature, mechanism-driven design vocabulary.',
    blocks: [
      { t: 'p', text: 'Norman\'s classic distinction: the Design Model is what the designer intends the system to be; the User\'s Mental Model is what the user believes it to be, built from prior experience with similar things; the System Image is everything the user can actually see and touch — and it is the ONLY channel through which the design model can shape the mental model. If the system image is confusing or inconsistent with prior experience, the user\'s mental model will be wrong no matter how sound the underlying design logic is.' },
      { t: 'ul', items: [
        'Users transfer mental models from other products in the same category (this is Jakob\'s Law in action) — a banking app that behaves unlike every other banking app forces users to build a new mental model from scratch, which is expensive and error-prone.',
        'Mismatched mental models are the root cause behind most "why do users keep doing that wrong" support tickets — the fix is rarely a tooltip, it is realigning the interface with how people already think.',
      ]},
    ],
    examples: [
      { label: 'Example · The trash-can-to-delete metaphor', text: 'Decades of desktop computing built a durable mental model: dragging something to a trash icon deletes it. Any interface introducing a differently-shaped "remove" affordance pays a real learning tax, even if its internal logic is cleaner.' },
      { label: 'Example · An enterprise permissions system', text: 'Employees\' mental model of "who can see this document" is usually simple: "my team" or "my manager." A system that models permissions as a complex matrix of roles and inherited groups will constantly surprise users who expect their simple mental model to hold — the interface needs to translate the complex system model into that simple mental model, not expose the matrix directly.' },
    ],
    mistake: 'Designing from the system\'s actual internal logic (how the database or business rules are structured) instead of from the user\'s existing mental model. This produces interfaces that are internally consistent but externally confusing.',
    interview: 'Naming a specific mismatch you found between how the system worked and how users expected it to work — and how you closed that gap — is a strong, mechanism-based answer to "tell me about a usability problem you fixed."',
    related: ['c003'],
  },

  c006: {
    id: 'c006', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 2 — How Users Think',
    title: 'Cognitive Load',
    def: 'The total amount of mental effort being used in working memory at any moment — and interface design\'s job is to keep it below the point where people make mistakes or give up.',
    why: 'Nearly every simplification decision in UI design — chunking, progressive disclosure, defaults, removing steps — is a direct response to the fact that working memory is small and expensive to use. Interviewers listen for whether you can name cognitive load as the underlying reason for a simplification, not just call it "cleaner."',
    blocks: [
      { t: 'ul', items: [
        'Intrinsic load — effort inherent to the task itself (filing taxes is inherently more complex than sending a text). Interface design can\'t remove this, only avoid adding to it.',
        'Extraneous load — effort caused by poor design: confusing labels, inconsistent patterns, unnecessary decisions. This is the load design is responsible for eliminating.',
        'Germane load — effort that genuinely helps build understanding (a good onboarding tutorial). This is worth spending some budget on, deliberately.',
      ]},
      { t: 'p', text: 'The practical design lever is almost always extraneous load: removing redundant confirmation steps, using recognition over recall, chunking long forms, writing in plain language instead of internal jargon. Every one of those techniques exists because working memory has a small, fixed capacity — see Miller\'s Law for the specific number.' },
    ],
    examples: [
      { label: 'Example · A 20-field signup form', text: 'Splitting one dense 20-field form into four short, clearly labeled steps of five fields each doesn\'t remove any intrinsic complexity — the same information is still required — but it dramatically cuts extraneous load, because the user\'s working memory only has to hold one small chunk in view at a time.' },
      { label: 'Example · An enterprise reporting dashboard', text: 'A dashboard that surfaces forty metrics on one screen forces every viewer to do the cognitive work of figuring out which three actually matter for their role. Designing role-based defaults that surface the right three metrics first — with the rest available on demand — moves that filtering work from every user\'s head into the design, once.' },
    ],
    mistake: 'Confusing "looks simple" with "low cognitive load." A screen can look visually minimal while still forcing the user to remember information across steps, which is a load problem invisible to a static screenshot review.',
    interview: 'Being able to distinguish intrinsic from extraneous load in a live critique — "this feels hard because of extraneous load in the labeling, not because the task itself is inherently hard" — is exactly the kind of mechanism language senior interviews reward.',
    related: ['c016'],
  },

  c007: {
    id: 'c007', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 2 — How Users Think',
    title: 'Recognition over Recall',
    def: 'One of Nielsen\'s ten usability heuristics: minimize the user\'s memory load by making objects, actions, and options visible, rather than forcing them to remember information from one part of the interface to use in another.',
    why: 'This single heuristic explains an enormous number of everyday patterns — autocomplete, recently-used lists, visible menus instead of memorized keyboard shortcuts — and is one of the most frequently cited heuristics in app-critique interview rounds.',
    blocks: [
      { t: 'p', text: 'Recall is expensive: it requires the user to retrieve information from long-term memory with no cues. Recognition is cheap: the interface presents the options, and the user only has to recognize the right one, which is a much easier cognitive operation. Nearly any time a design forces someone to remember a code, a previous screen\'s content, or a rule stated once during onboarding, there is an opportunity to replace recall with recognition instead.' },
      { t: 'ul', items: [
        'Show options rather than requiring memorized commands (a visible menu beats a memorized keyboard shortcut for infrequent actions).',
        'Surface recently-used or frequently-used items instead of making users retype or re-search for them.',
        'Keep rules and constraints visible at the point of use (password requirements shown while typing, not only after a failed attempt).',
      ]},
    ],
    examples: [
      { label: 'Example · Payee selection in a banking app', text: 'Requiring users to retype a payee\'s full account number every time forces recall of a long number under time pressure. Surfacing a recognizable list of previously-used payees by name and photo turns a recall task into a much safer recognition task.' },
      { label: 'Example · Password rules', text: 'Showing "must include a number and a symbol" only after a failed submission forces the user to recall the rule on their next attempt. Showing the rule live, next to the field, as they type turns it into a simple recognition check against visible criteria.' },
    ],
    mistake: 'Hiding necessary information behind a "remember from earlier" assumption to keep a screen visually clean. Minimalism that increases recall burden is not simplicity — it has just moved the complexity into the user\'s head.',
    interview: 'In an app-critique round, spotting a recall-heavy pattern and proposing a recognition-based alternative — with the heuristic named — demonstrates fluency in the exact vocabulary these interviews are scored against.',
    related: ['c006'],
  },

  c008: {
    id: 'c008', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 2 — How Users Think',
    title: 'Affordances & Signifiers',
    def: 'An affordance is what an object actually allows you to do with it; a signifier is the visual or interactive cue that communicates that affordance to the user. Good design needs both, and they are not the same thing.',
    why: 'This is one of Don Norman\'s most important distinctions, and interviewers use it to check whether you understand WHY a button needs to visually look clickable — not just that it should.',
    blocks: [
      { t: 'p', text: 'A flat rectangle of colored pixels on a screen has no real physical affordance for "pressing" the way a physical button does — the screen is glass. What makes it clickable is entirely the signifier: a subtle shadow, a color, a hover state, a cursor change — visual cues that signal "this responds to a click" even though the underlying material affords nothing physical at all. When a design removes all signifiers in pursuit of a "clean" look (flat design with no shadows, no color distinction, no underline), it often accidentally removes the user\'s ability to perceive what is interactive at all.' },
      { t: 'ul', items: [
        'Affordance = what is actually possible (a link can be clicked; plain text cannot).',
        'Signifier = the cue that communicates that possibility (color, underline, cursor, shadow, shape).',
        'A perceived affordance that doesn\'t match the real affordance is a design failure in either direction: a button that looks clickable but does nothing, or an interactive element with no signifier at all that users never discover.',
      ]},
    ],
    examples: [
      { label: 'Example · The "flat design" over-correction', text: 'Early flat-design trends removed nearly all shadows and gradients for visual cleanliness, and usability testing across the industry repeatedly found users struggling to tell buttons from plain labels. Most major design systems since have reintroduced subtle signifiers — a slight background tint, an underline on hover — specifically to restore perceived affordance.' },
      { label: 'Example · Swipeable cards in a mobile app', text: 'A card that can be swiped left to archive has a real affordance (the interaction works), but with zero signifier — no partial peek of a hidden action, no subtle edge shadow — most first-time users will never discover it. A small visible sliver of the hidden action on first load is often enough of a signifier to teach the gesture once.' },
    ],
    mistake: 'Assuming that because an interaction is technically possible (the affordance exists), users will find it — without ever designing the signifier that would let them perceive it.',
    interview: 'Being able to say "this has affordance but no signifier" (or vice versa) about a specific element in a critique, rather than a vague "this isn\'t obvious," is precisely the mechanism-level language these rounds reward.',
    related: ['c003'],
  },

  c009: {
    id: 'c009', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 3 — The Language of Interfaces',
    title: 'Common UI Patterns',
    def: 'The standard, widely-recognized interface solutions to recurring problems — tab bars, modals, carousels, accordions, cards — that users already know how to operate from other apps before they ever open yours.',
    why: 'Knowing the standard pattern vocabulary, and when to deviate from it, is core craft competency tested directly in visual-design and component-building interview rounds.',
    blocks: [
      { t: 'ul', items: [
        'Navigation patterns — tab bars, hamburger menus, breadcrumbs — each communicates a different depth and structure of the app to the user before they even explore it.',
        'Content patterns — cards, lists, tables — chosen based on how comparable the items are (tables for comparing many attributes across items, cards for browsing distinct items).',
        'Overlay patterns — modals, bottom sheets, toasts, tooltips — chosen based on how much attention and interruption the moment deserves. A modal demands a decision; a toast politely informs and disappears.',
        'Input patterns — steppers, sliders, segmented controls, date pickers — each matched to the shape of the underlying data (a slider for a continuous range, a segmented control for a small fixed set of mutually exclusive options).',
      ]},
      { t: 'p', text: 'The skill is not memorizing the pattern library — it is matching the right pattern to the actual shape of the content and the actual weight of the decision, and knowing when a standard pattern is being used purely out of habit rather than fit.' },
    ],
    examples: [
      { label: 'Example · Modal vs. toast for a delete action', text: 'Deleting a single email should probably be an easily-undoable toast ("Message deleted · Undo") rather than an interruptive confirmation modal — the action is low-stakes and reversible. Deleting an entire account, by contrast, deserves the friction of a modal, because the action is high-stakes and irreversible.' },
      { label: 'Example · Table vs. cards for a product catalog', text: 'A catalog of products with many comparable numeric specs (laptops, with RAM, storage, price) is often better as a table so specs can be scanned in a column. A catalog of visually distinctive items (clothing) is better as image-forward cards, since the primary comparison signal is visual, not tabular.' },
    ],
    mistake: 'Reaching for a familiar pattern out of habit rather than because it fits the content\'s actual shape or the decision\'s actual weight — for instance, defaulting every confirmation to a full-screen modal regardless of how reversible or low-stakes the action is.',
    interview: 'A craft round often asks you to justify a pattern choice on the spot. "I chose a bottom sheet here because it\'s a mobile-native, low-commitment interaction, versus a full modal which would over-interrupt for this decision weight" is the level of reasoning expected.',
    related: [],
  },

  c010: {
    id: 'c010', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 3 — The Language of Interfaces',
    title: 'Navigation Models',
    def: 'The structural approach an app uses to let people move between its major sections — tab-based, drawer-based, stack-based, or nested — chosen based on how many top-level destinations exist and how deep the content goes.',
    why: 'Choosing the wrong navigation model is one of the most expensive mistakes to fix after launch, because everything else in the information architecture is built on top of it. Interviewers use navigation-model questions to check structural, not just visual, thinking.',
    blocks: [
      { t: 'ul', items: [
        'Tab-based (bottom or top tabs) — best for 3–5 flat, equally important top-level destinations a user might jump between constantly (most consumer mobile apps).',
        'Drawer/hamburger navigation — hides destinations behind an icon, trading discoverability for screen space; best when there are many secondary destinations that are visited rarely.',
        'Stack-based (drill-down) — each screen pushes another on top, with a clear back path; best for hierarchical content where users go deep into one branch at a time (settings menus, file browsers).',
        'Nested/hybrid — many real apps combine a shallow tab bar for top-level sections with stack-based drill-down within each tab — the most common real-world pattern for anything non-trivial.',
      ]},
    ],
    examples: [
      { label: 'Example · A ride-hailing app', text: 'A tab bar for the handful of equally-weighted core destinations (Ride, Activity, Account) combined with stack-based drill-down inside each — tapping into a past ride pushes a details screen, with a clear back arrow, rather than needing its own tab.' },
      { label: 'Example · An enterprise admin console', text: 'A drawer navigation fits well here: dozens of infrequently-visited destinations (user management, billing, audit logs, integrations) that would overwhelm a tab bar, used by administrators who are willing to trade a little discoverability for a comprehensive, organized list.' },
    ],
    mistake: 'Defaulting to tabs because they are the most familiar consumer pattern, even when the actual content has more than five top-level, equally-important destinations — cramming them all into an overflowing tab bar rather than reconsidering the model.',
    interview: 'Whiteboard prompts frequently include an implicit navigation-model decision. Stating the choice and the trade-off explicitly — "I\'m using a drawer here because there are many secondary destinations, not because I like drawers" — shows structural reasoning, not just pattern recall.',
    related: ['c009', 'c048'],
  },

  c011: {
    id: 'c011', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 3 — The Language of Interfaces',
    title: 'Buttons, Inputs & Controls',
    def: 'The core interactive vocabulary of any interface — buttons, text fields, checkboxes, radio buttons, toggles, sliders — each with strict conventions for when to use which, because getting these wrong creates errors, not just aesthetic complaints.',
    why: 'This is foundational craft: interviewers and design-system reviewers check these choices first, because a mismatched control (a toggle used where a checkbox belongs) creates real usability confusion, not just a style nitpick.',
    blocks: [
      { t: 'ul', items: [
        'Buttons — trigger an immediate action (Submit, Delete, Send). Primary/secondary/tertiary hierarchy should map directly to how important that action is on the given screen.',
        'Checkboxes — select zero, one, or many independent options from a list; each one is its own independent yes/no.',
        'Radio buttons — select exactly one option from a small, fully-visible set of mutually exclusive choices.',
        'Toggles/switches — instantly apply a binary system state (on/off), typically without needing a separate "Save" — flipping it should take effect immediately.',
        'Sliders — set a value within a continuous or steppable range, when the exact number matters less than the relative position.',
      ]},
      { t: 'p', text: 'A frequent, telling mistake is using a toggle for something that actually requires a confirmation step (like changing a security setting) — toggles imply instant, low-stakes effect, so pairing one with a "are you sure?" dialog contradicts its own signifier and confuses users about whether the change already happened.' },
    ],
    examples: [
      { label: 'Example · Notification preferences', text: 'A list of independent notification types (order updates, promotions, price drops) should be checkboxes or individual toggles, each acting independently — not radio buttons, which would incorrectly imply only one can be selected.' },
      { label: 'Example · Choosing a delivery speed', text: 'A small set of mutually exclusive options (Standard, Express, Same-day) is a textbook radio-button case, not a dropdown — with only three options, showing them all at once is faster to scan and compare than hiding them behind a tap.' },
    ],
    mistake: 'Using a dropdown to hide a small number of options (2–4) that would be faster and clearer as visible radio buttons or a segmented control — dropdowns should be reserved for longer lists where showing everything at once would overwhelm the screen.',
    interview: 'Live component-building rounds test exactly this: given a data structure, choosing the right control and explaining why, out loud, is the actual skill being scored — not just visual polish.',
    related: ['c009'],
  },

  c012: {
    id: 'c012', bookId: 'curr', bookLabel: 'Curriculum · Beginner', chapter: 'Week 3 — The Language of Interfaces',
    title: 'Feedback & System Status',
    def: 'Nielsen\'s first usability heuristic: the system should always keep users informed about what is happening, through appropriate feedback within a reasonable time.',
    why: 'Silence is the enemy of trust in an interface. Every "is this app broken?" moment traces back to a missing feedback signal — this heuristic underlies loading states, confirmations, error messages, and progress indicators across the entire product.',
    blocks: [
      { t: 'ul', items: [
        'Immediate feedback (under ~100ms) — a button should visually respond the instant it is pressed, even before the underlying action completes, so the user knows their tap registered.',
        'In-progress feedback — for anything taking more than about a second, show a spinner, skeleton screen, or progress bar so the user knows work is happening, not that the app has frozen.',
        'Completion feedback — confirm success explicitly (a checkmark, a toast, a state change) rather than assuming the user will infer that something worked.',
        'Optimistic UI is an advanced feedback pattern: show the expected end state immediately (a sent message appears at once with a pending icon) rather than making the user wait for a server round-trip to see anything happen at all.',
      ]},
    ],
    examples: [
      { label: 'Example · A file upload in an internal tool', text: 'An upload with no progress indicator at all leaves users unsure whether to wait, refresh, or resubmit — often causing duplicate submissions. A simple percentage bar, even an approximate one, resolves the anxiety entirely.' },
      { label: 'Example · Optimistic sending in a messaging app', text: 'A message appears in the chat instantly with a small clock icon, and the icon becomes a checkmark once the server confirms delivery. The user never experiences a delay in \'seeing\' their message sent, even though the network round-trip takes a moment in the background.' },
    ],
    mistake: 'Silent failures — an action that fails with no visible error at all, leaving the user to assume it worked. This is worse than a visible error, because the user has no idea a problem occurred until much later, often after taking further action based on a false assumption.',
    interview: 'Naming "visibility of system status" by name while critiquing an app immediately establishes fluency with Nielsen\'s heuristics — this is one of the most frequently invoked in app-critique interview rounds.',
    related: ['c051'],
  },
  c013: {
    id: 'c013', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 4 — UX Laws I',
    title: 'Fitts’s Law',
    def: 'The time it takes to move to and select a target is a function of the distance to it and its size — bigger and closer targets are faster and more accurate to hit.',
    why: 'Fitts\'s Law is the single most commonly cited law in touch-interface critiques, because it directly explains why button size and placement decisions have measurable error-rate consequences, not just aesthetic ones.',
    blocks: [
      { t: 'p', text: 'Formally, the time to acquire a target increases with the distance to it and decreases as the target\'s size increases. Practically: primary actions should be large and placed where the user\'s hand or cursor already tends to be, and destructive or rarely-used actions should be smaller or farther away, using distance itself as a form of friction.' },
      { t: 'ul', items: [
        'On mobile, "closer" usually means within comfortable thumb reach at the bottom of the screen, not the top.',
        'On desktop, screen edges and corners are effectively infinite targets (the cursor can\'t overshoot past them), which is why OS menus live in corners.',
        'Making a target bigger isn\'t just about touch accuracy — for low-vision or motor-impaired users, target size directly affects whether the interface is usable at all.',
      ]},
    ],
    examples: [
      { label: 'Example · Primary CTA placement on mobile', text: 'A primary "Book Now" button should be large and anchored at the bottom of the screen, within easy thumb reach, while a destructive "Cancel booking" action can be smaller and requires more deliberate reach — using both size and distance to make the safe action easy and the risky one require intent.' },
      { label: 'Example · Fitts\'s Law and menu corners', text: 'Desktop operating systems place system menus in screen corners deliberately, because a cursor moving toward a corner can\'t overshoot past the edge of the screen — making corners effectively infinitely large, easy-to-hit targets regardless of how small they look.' },
    ],
    mistake: 'Placing a frequently-used primary action far from the user\'s natural hand or cursor position, or making it small "to reduce visual clutter" — this directly increases both time-to-complete and error rate, which is measurable, not a matter of taste.',
    interview: 'A strong critique answer names the mechanism directly: "this fails Fitts\'s Law — the primary CTA is small and positioned far from the thumb\'s natural resting position."',
    related: ['c001'],
  },
  c014: {
    id: 'c014', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 4 — UX Laws I',
    title: 'Hick’s Law',
    def: 'The time it takes someone to make a decision grows with the number and complexity of the choices in front of them.',
    why: 'Hick\'s Law is the direct justification behind nearly every "reduce the options" design decision — menu simplification, progressive disclosure, curated defaults — and interviewers expect you to cite it by name when critiquing an overloaded screen.',
    blocks: [
      { t: 'p', text: 'The relationship is not linear — each additional option adds a diminishing but real amount of decision time, and increases the chance of decision paralysis or an incorrect choice altogether. The design lever isn\'t always to delete options; it is often to structure them: grouping, prioritizing, or staging choices so the user only ever faces a small number at once, even if the total universe of options is large.' },
      { t: 'ul', items: [
        'Progressive disclosure — reveal advanced or secondary options only when needed, rather than all at once.',
        'Smart defaults — pre-select the most common choice so most users make zero decisions at all.',
        'Categorization — thirty options organized into five clear categories of six feels far faster to navigate than a flat list of thirty, even though the total count hasn\'t changed.',
      ]},
    ],
    examples: [
      { label: 'Example · A flat list of 80 investment funds', text: 'Presenting all 80 options in a single flat list paralyzes new users. Restructuring the decision as a short sequence — "What\'s your goal?" then "What\'s your risk tolerance?" — narrows it down to three recommended funds, converting far better than the flat list ever did.' },
      { label: 'Example · Google\'s homepage vs. a portal homepage', text: 'Google\'s homepage famously offers essentially one choice: type into the box. Portal-style homepages packed with dozens of links force a slower scan-and-decide process before the user can even begin their actual task — Hick\'s Law is a large part of why the minimal search box won that era decisively.' },
    ],
    mistake: 'Adding "just one more option" repeatedly over time without ever pruning, until a once-simple menu has quietly become an overwhelming one — Hick\'s Law effects usually creep in gradually, not all at once.',
    interview: 'This law pairs naturally with prioritization frameworks: "Hick\'s Law is why I\'d cut this menu from twelve items to five for v1" connects a UX law directly to a product decision, which is exactly the kind of cross-connection senior interviews reward.',
    related: ['c013'],
  },
  c015: {
    id: 'c015', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 4 — UX Laws I',
    title: 'Jakob’s Law',
    def: 'Users spend most of their time on other products, so they expect your product to work the same way those do — familiarity reduces learning cost, novelty increases it.',
    why: 'Jakob\'s Law is the single strongest argument against reinventing standard patterns for no reason, and interviewers use it to test whether you know where creativity belongs (brand, content, delight) versus where it is actively costly (core navigation and interaction conventions).',
    blocks: [
      { t: 'p', text: 'This law does not mean "never innovate." It means: spend your novelty budget on the things that differentiate your product — brand voice, illustration, a genuinely better core mechanic — and default to convention everywhere else, especially in structural patterns like navigation, form behavior, and iconography, where deviation creates errors rather than delight.' },
      { t: 'ul', items: [
        'Standard iconography (a magnifying glass for search, a trash can for delete) should almost never be reinvented — recognition beats originality here.',
        'Platform conventions matter: an iOS app that ignores standard iOS navigation gestures fights the user\'s years of built-up muscle memory from every other iOS app.',
        'Jakob\'s Law compounds with mental models and affordances — familiar patterns are precisely the ones users already have strong, accurate mental models for.',
      ]},
    ],
    examples: [
      { label: 'Example · UPI PIN pad layout in Indian fintech apps', text: 'Nearly every Indian fintech app uses the same PIN pad layout for payment confirmation. A competitor deviating from this layout to seem distinctive would create real entry errors, because users\' muscle memory for that layout is built from dozens of other apps, not just one.' },
      { label: 'Example · Reinventing the back gesture', text: 'A mobile app that replaces the platform-standard swipe-back gesture with a custom one to feel "unique" forces every user to unlearn years of built-up habit, creating friction with zero corresponding benefit — a textbook Jakob\'s Law violation.' },
    ],
    mistake: 'Innovating on the interaction skeleton (navigation, standard controls, core gestures) in the name of originality, when the actual brand differentiation opportunity lives in visual language, motion, and voice instead.',
    interview: 'A sharp answer distinguishes where to innovate from where to conform: "your creativity belongs in the skin, not the skeleton" is a clean, quotable way to demonstrate this judgment live.',
    related: ['c009', 'c010'],
  },
  c016: {
    id: 'c016', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 4 — UX Laws I',
    title: 'Miller’s Law',
    def: 'The average person can hold only about seven (plus or minus two) items in working memory at once — so information should be chunked into small groups rather than presented as long, unbroken sequences.',
    why: 'Miller\'s Law is the concrete number behind the more general concept of cognitive load, and it directly justifies one of the most common and effective interface techniques: chunking.',
    blocks: [
      { t: 'p', text: 'The "7±2" figure has been refined by later research (some working-memory estimates run closer to 4 for unfamiliar information), but the practical design implication hasn\'t changed: any sequence longer than about five to seven unrelated items should be broken into smaller, meaningfully-grouped chunks rather than presented as one long list or string.' },
      { t: 'ul', items: [
        'Phone numbers are chunked (a 10-digit number is never displayed as one unbroken string) precisely because ten raw digits exceeds comfortable working memory.',
        'Long forms should be split into a few short, clearly-labeled steps rather than one long scroll of unrelated fields.',
        'Chunking works by giving each group a label, which lets the brain remember "four groups" instead of "fourteen individual fields."',
      ]},
    ],
    examples: [
      { label: 'Example · A 14-field KYC form', text: 'A single continuous 14-field identity-verification form feels exhausting and error-prone. Splitting it into four labeled chunks — Identity, Address, Bank, Nominee — doesn\'t reduce the total information required, but it feels roughly half as long, because each step only demands a small, bounded chunk of attention.' },
      { label: 'Example · Credit card number formatting', text: 'Displaying a 16-digit card number as four groups of four (with automatic spacing as the user types) is a direct, small-scale application of Miller\'s Law — it is dramatically easier to verify visually than one unbroken string of sixteen digits.' },
    ],
    mistake: 'Presenting a long, flat list or form with no grouping at all, then attempting to compensate with smaller text or tighter spacing — neither addresses the actual working-memory problem, which is about grouping, not density.',
    interview: 'Being able to say "this needs chunking, not just better visual hierarchy" when critiquing a dense form shows you understand the root cognitive cause, not just the surface symptom.',
    related: ['c006'],
  },
  c017: {
    id: 'c017', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 5 — UX Laws II',
    title: 'Tesler’s Law',
    def: 'Also called the Law of Conservation of Complexity: every system has an inherent amount of complexity that cannot be removed, only moved — the design question is always who absorbs it, the user or the system.',
    why: 'Tesler\'s Law reframes "simplify this" from an aspiration into a concrete design decision: complexity doesn\'t disappear when a screen looks cleaner, it has been relocated somewhere — often onto the user, in the form of things they now must know or remember.',
    blocks: [
      { t: 'p', text: 'A genuinely well-designed system absorbs complexity on the engineering and design side so the user experiences a simpler task, rather than looking simpler while secretly pushing more inference and memory work onto the user. This is one of the more advanced UX laws precisely because it requires judgment about where complexity should live, not just a rule to apply mechanically.' },
      { t: 'ul', items: [
        'A system that infers a user\'s document type automatically has absorbed complexity into itself (better engineering); a system that just asks the user to pick from a dropdown of eleven document types has pushed that complexity onto the user.',
        'The goal is rarely zero complexity — it is choosing deliberately where the remaining complexity should live, and defaulting to absorbing it in the system whenever feasible.',
      ]},
    ],
    examples: [
      { label: 'Example · Document verification via DigiLocker vs. manual upload', text: 'Requiring users to know which of six documents to upload, in which format, pushes real complexity onto them. Pulling verified documents automatically via a government identity system (DigiLocker) absorbs that same complexity into the system\'s integration work instead — the underlying complexity of verification hasn\'t vanished, it has simply moved.' },
      { label: 'Example · Auto-detecting a card\'s issuing bank', text: 'Instead of asking a user to select their bank from a long dropdown before entering a card number, detecting the bank automatically from the card\'s number prefix absorbs that complexity into the system, removing a whole decision from the user\'s side entirely.' },
    ],
    mistake: 'Declaring an interface "simplified" simply because it displays fewer visible elements, without checking whether the removed elements\' complexity was actually eliminated or just quietly pushed onto the user\'s memory or judgment.',
    interview: 'This law is a favorite in senior-level critiques specifically because it requires naming WHERE complexity went, not just whether a screen looks clean — a strong signal of systems-level thinking.',
    related: ['c006'],
  },
  c018: {
    id: 'c018', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 5 — UX Laws II',
    title: 'Peak-End Rule',
    def: 'People judge an entire experience largely by how they felt at its most intense moment (the peak) and at its very end — not by the average of every moment along the way.',
    why: 'This principle from behavioral psychology (Daniel Kahneman) explains why obsessing over the average quality of every screen matters far less than obsessing over one or two specific moments — the hardest part and the final moment — and it comes up constantly in interview questions about "where would you focus limited design time."',
    blocks: [
      { t: 'p', text: 'Because memory of an experience is built disproportionately from its peak and its ending, a product with several mediocre moments but one delightful peak and a warm ending will often be remembered more fondly than one that was consistently "fine" throughout but ended flatly. This has direct implications for where to invest limited design and engineering time: the ending of a flow is disproportionately valuable real estate.' },
      { t: 'ul', items: [
        'The "peak" doesn\'t have to be positive to be memorable — a moment of frustration can become the dominant memory of an otherwise fine experience if it is intense enough.',
        'Endings deserve deliberate design attention: a completion screen, a farewell message, a receipt — these are disproportionately influential on overall satisfaction and reviews.',
      ]},
    ],
    examples: [
      { label: 'Example · A ride-hailing app\'s trip-end sequence', text: 'The last thirty seconds of a ride — smooth automatic payment, a driver farewell message, an instant digital receipt — shape the passenger\'s overall impression and star rating more than the preceding forty minutes of an uneventful ride. Designing this ending deliberately is disproportionately high-leverage.' },
      { label: 'Example · Duolingo\'s lesson-completion celebration', text: 'A short, deliberately delightful celebration animation at the end of each lesson exists specifically because the ending of that short session disproportionately shapes the learner\'s memory and motivation to return tomorrow — far more than the difficulty of any single question inside it.' },
    ],
    mistake: 'Spreading limited design polish evenly across every screen in a flow, rather than deliberately concentrating extra care on the hardest moment and the final moment — the two points that will actually be remembered.',
    interview: 'When asked "if you only had time to improve one part of this flow, which would you pick," naming the ending or the peak-friction moment (with this rule cited by name) is a strong, evidence-based answer.',
    related: ['c026'],
  },
  c019: {
    id: 'c019', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 5 — UX Laws II',
    title: 'Zeigarnik Effect',
    def: 'People remember and are psychologically drawn back to incomplete tasks far more than completed ones — an unfinished action creates a lingering mental "open loop."',
    why: 'This effect is the psychological engine behind progress bars, "profile is 70% complete" nudges, and save-for-later reminders — some of the most reliably effective (and most easily abused) patterns in product design.',
    blocks: [
      { t: 'p', text: 'The Zeigarnik Effect explains why an incomplete progress bar creates genuine internal pressure to finish, independent of any external reward. Used honestly, this is a powerful motivator for helpful completion (finishing an onboarding flow that genuinely benefits the user). Used manipulatively — creating artificial incompleteness purely to drive engagement metrics with no real user benefit — it slides into dark-pattern territory.' },
      { t: 'ul', items: [
        'Visible progress indicators (a percentage, a checklist with items remaining) actively leverage this effect to encourage completion.',
        'Notifications that reference an incomplete task ("You\'re one step away from...") are directly exploiting this same open-loop psychology.',
      ]},
    ],
    examples: [
      { label: 'Example · "Your profile is 70% complete"', text: 'A professional networking site\'s profile-completion bar is one of the most cited real-world examples of the Zeigarnik Effect in product design — the visible gap between 70% and 100% creates a genuine, mild psychological itch to close it.' },
      { label: 'Example · "Your identity verification is one step away"', text: 'This is reported as one of the highest-converting single notifications in fintech onboarding flows — it doesn\'t offer a new incentive, it simply reminds the user of an already-open loop, which is often enough on its own to drive completion.' },
    ],
    mistake: 'Manufacturing artificial incompleteness with no real benefit to the user purely to drive an engagement metric (for example, an arbitrary daily "streak" with no connection to genuine value) — this crosses from legitimate psychology into manipulation.',
    interview: 'Naming this effect while also being able to say where the ethical line sits — genuine progress vs. manufactured guilt — shows both technical fluency and design judgment in the same answer.',
    related: ['c052'],
  },
  c020: {
    id: 'c020', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 5 — UX Laws II',
    title: 'Doherty Threshold',
    def: 'When a system responds to user input in under about 400 milliseconds, the user stays in an uninterrupted flow of attention and productivity; beyond that, perceived responsiveness — and patience — drops sharply.',
    why: 'This threshold is the direct justification for skeleton screens, optimistic UI, and every other technique that manages perceived speed, because actual load time and perceived load time are not the same thing, and perceived speed is what the user actually experiences.',
    blocks: [
      { t: 'p', text: 'The 400ms figure is specifically about maintaining a feeling of flow — below it, interaction feels instantaneous and continuous; above it, attention starts to drift and the user perceives a "wait." Crucially, the fix for exceeding 400ms is not always to make the system faster (which may be technically constrained); it is often to provide immediate feedback that something is happening, which restores a feeling of responsiveness even while the underlying work continues.' },
      { t: 'ul', items: [
        'Skeleton screens (gray placeholder shapes shown while content loads) make a wait feel shorter with zero actual performance improvement, purely by managing perception.',
        'Optimistic UI shows the expected result immediately, syncing with the server in the background — perceived speed becomes instantaneous even when actual completion takes a moment.',
      ]},
    ],
    examples: [
      { label: 'Example · Social feed skeleton screens', text: 'Showing gray placeholder shapes in the exact layout of the content about to load, rather than a blank white screen or a spinner, measurably improves perceived load time — users report the wait feeling shorter even when the actual load time is identical.' },
      { label: 'Example · Messaging apps\' single-tick send confirmation', text: 'A message appears sent with a clock icon the instant the user hits send, well before the server actually confirms delivery — this designs for the perception of speed, keeping the sender in flow, rather than waiting for the real network round-trip to complete before showing anything.' },
    ],
    mistake: 'Treating perceived-performance techniques as unnecessary once "the backend is fast enough" — even a technically fast system benefits from feedback design, because perception and actual latency are measured and experienced differently.',
    interview: 'This law connects design directly to engineering literacy — being able to say "we can\'t always fix the network round-trip, but we can design for the Doherty Threshold with optimistic UI" shows exactly the kind of designer-engineer fluency senior interviews probe for.',
    related: ['c012', 'c104'],
  },
  c021: {
    id: 'c021', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 5 — UX Laws II',
    title: 'Weber’s Law',
    def: 'The smallest change in a stimulus that a person can actually notice (the "just noticeable difference") is proportional to the size of the original stimulus, not a fixed constant amount.',
    why: 'Weber\'s Law explains why the same absolute change in price, size, or visual weight feels dramatically different depending on the baseline — a principle used constantly (and sometimes manipulatively) in pricing, notifications, and visual hierarchy design.',
    blocks: [
      { t: 'diagram', id: 'weber', caption: 'Weber\'s Law: the same ₹10 change is barely noticeable against a ₹5,000 baseline, but obvious against a ₹50 one.' },
      { t: 'p', text: 'A ₹10 price increase feels enormous on a ₹50 item but negligible on a ₹5,000 item, because perception of change is relative to the starting magnitude, not the raw number. Designers use this both constructively (grouping small incremental price changes so they cross this "just noticeable" threshold together, making a single clear update rather than many confusing tiny ones) and, when misused, manipulatively (structuring fee increases in small enough increments that each one individually falls below the noticeable threshold).' },
      { t: 'ul', items: [
        'Visual hierarchy design uses Weber\'s Law implicitly: a font-size jump from 14px to 16px is noticeable, but the same 2px jump from 40px to 42px barely registers — proportional change matters more than absolute change.',
        'Notification and alert design should account for this: a battery percentage dropping from 20% to 15% needs to feel urgent even though the absolute change is small, because the stakes at that baseline are high.',
      ]},
    ],
    examples: [
      { label: 'Example · Subscription price increases', text: 'A subscription service raising its price from ₹99 to ₹109 will likely trigger far more complaints proportionally than one raising from ₹999 to ₹1,050, even though the second increase is larger in absolute terms — because the perceived magnitude of change is relative to the starting price, exactly as Weber\'s Law predicts.' },
      { label: 'Example · Low-battery warning thresholds', text: 'A device typically escalates battery warnings not at fixed absolute levels alone, but relative to context — a drop from 10% to 5% is designed to feel far more urgent than the same 5-percentage-point drop from 50% to 45%, matching how differently those changes are actually perceived.' },
    ],
    mistake: 'Using this principle to obscure a fee increase by breaking it into many small increments individually below the "just noticeable" threshold — this is a well-documented dark pattern, not a neutral application of the underlying psychology.',
    interview: 'Being able to name Weber\'s Law specifically when discussing pricing UI or alert-threshold design demonstrates a rarer, more advanced layer of psychological literacy beyond the more commonly cited laws.',
    related: ['c017'],
  },


  c022: {
    id: 'c022', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 6 — Perception & Gestalt',
    title: 'Proximity & Common Region',
    def: 'Two Gestalt principles of visual grouping: objects placed close together are perceived as related (Proximity), and objects enclosed within a shared boundary are perceived as a group (Common Region), even without any change in the objects themselves.',
    why: 'These two principles do more grouping work than color or borders ever could — spacing itself communicates relationships, which is why "spacing is grouping" is one of the most repeated one-liners in visual-design critiques.',
    blocks: [
      { t: 'ul', items: [
        'Proximity — the human eye groups elements that are close together as belonging to the same set, before it even reads their content.',
        'Common Region — a shared background, border, or card boundary groups elements even more strongly than proximity alone, because it makes the grouping explicit rather than implied.',
        'These two principles are the actual mechanism behind why a card component with padding "just works" as a grouping device — it applies both principles simultaneously.',
      ]},
      { t: 'p', text: 'A very common visual-design mistake is using equal spacing between every element on a screen — labels, fields, and unrelated sections all separated by the same gap. This flattens the Proximity signal entirely, forcing users to read every label carefully to figure out what belongs with what, when correctly varied spacing (tight within a group, loose between groups) would have communicated the structure instantly and wordlessly.' },
    ],
    examples: [
      { label: 'Example · A settings screen with even spacing everywhere', text: 'When every row and every section header has identical spacing, there is no visual proximity signal at all — the user has to read every label to understand the grouping. Tightening the space between a section header and its items, while widening the space before the next section, communicates the structure before a single word is read.' },
      { label: 'Example · Enclosing form sections in cards', text: 'Wrapping "Billing address" and "Shipping address" each inside their own bordered card (Common Region) makes it immediately unambiguous which fields belong to which address, even if the fields themselves — Street, City, ZIP — are visually identical and could otherwise blur together.' },
    ],
    mistake: 'Relying only on labels and headers to communicate grouping, while using uniform spacing throughout — this makes the interface work much harder to read than it needs to, since spacing is a free, wordless grouping signal being left unused.',
    interview: 'In a craft round, being able to say "space is doing the grouping work here, not color" while pointing at a specific layout demonstrates fluent, mechanism-level Gestalt literacy.',
    related: [],
  },
  c023: {
    id: 'c023', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 6 — Perception & Gestalt',
    title: 'Similarity & Continuity',
    def: 'Two more Gestalt principles: elements that share visual traits (color, shape, size) are perceived as related (Similarity), and the eye naturally follows continuous lines or curves rather than jumping between disconnected points (Continuation).',
    why: 'Similarity is the principle underneath why consistent styling must map to consistent behavior — inconsistent style applied to functionally similar elements silently breaks a promise the interface has made to the user\'s eye.',
    blocks: [
      { t: 'ul', items: [
        'Similarity — elements sharing color, shape, size, or style are read as belonging to the same category or behaving the same way. Two buttons that look identical are expected to behave the same way; if one submits a form and one silently does nothing, that visual promise has been broken.',
        'Continuation — the eye follows an implied line or curve smoothly, which is why aligned elements (a left-aligned list of labels, a straight horizontal nav bar) feel calm and scannable, while misaligned ones feel visually noisy even if each individual element is fine on its own.',
      ]},
      { t: 'p', text: 'Similarity is one of the most important principles for design-system discipline specifically: once two components look the same, users will treat them as functionally interchangeable. This means visual consistency is not just an aesthetic preference — it is a functional promise the interface is making, and breaking it (styling a disabled button identically to an active one) creates real, measurable errors.' },
    ],
    examples: [
      { label: 'Example · Terminology and styling drift', text: 'If a "Save" action is styled as a solid blue button on one screen and an identical-looking solid blue button elsewhere silently does something different (like "Save and close" with no warning), users will make mistakes based on the visual promise of similarity that the interface itself created.' },
      { label: 'Example · A misaligned navigation bar', text: 'Navigation items that are almost, but not quite, aligned to a shared baseline break Continuation subtly — the eye can\'t glide smoothly across them, and the whole bar reads as slightly unpolished even if no single item looks wrong in isolation.' },
    ],
    mistake: 'Reusing an existing visual style for a new, functionally different element purely because it was convenient, without considering that users will now expect it to behave like every other element that shares that style.',
    interview: 'A strong critique connects Similarity directly to a real usability risk: "these two buttons look identical but behave differently — that\'s going to cause errors, not just look inconsistent."',
    related: ['c022'],
  },
  c024: {
    id: 'c024', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 6 — Perception & Gestalt',
    title: 'Figure/Ground & Closure',
    def: 'Figure/Ground is the perceptual separation of a foreground element from its background; Closure is the mind\'s tendency to complete a shape that is only partially shown.',
    why: 'Figure/Ground is the underlying mechanism behind why modals need a scrim (dimming overlay) to work, and Closure is why partial-preview patterns (peeking carousels, loading skeletons) read as "recognizable" even though they\'re incomplete.',
    blocks: [
      { t: 'ul', items: [
        'Figure/Ground — the eye needs a clear signal about what is the primary focus (figure) versus what is context (ground). A modal dialog only reads as "in focus" because the dimmed background pushes everything else into the ground.',
        'Closure — the brain will complete a familiar, mostly-visible shape automatically. A partially-visible next item peeking in from a carousel\'s edge is instantly understood as "there\'s more here" without needing an explicit arrow or label.',
      ]},
      { t: 'p', text: 'Both principles are frequently under-used in the name of minimalism. Removing the scrim behind a modal to look "cleaner" actually removes the Figure/Ground separation that made the modal legible as a distinct, focused layer in the first place — and the interface becomes ambiguous about what the user is supposed to be looking at.' },
    ],
    examples: [
      { label: 'Example · A modal with no background dimming', text: 'Without a scrim behind it, a modal competes visually with the full-color content behind it, and users are genuinely less certain which layer is currently interactive. The dimming is doing real Figure/Ground work, not just decoration.' },
      { label: 'Example · A horizontally scrolling card carousel', text: 'Showing a small sliver of the next card peeking in from the right edge uses Closure to communicate "swipe for more" instantly and wordlessly — the brain completes the partially-hidden card shape and infers the interaction without needing a label or arrow at all.' },
    ],
    mistake: 'Removing a scrim, shadow, or other separation cue behind an overlay purely for a "flatter" aesthetic, without recognizing that the separation cue was doing real functional work in establishing what the user should focus on.',
    interview: 'Being able to explain why a modal "feels wrong" specifically in terms of missing Figure/Ground separation — rather than a vague "it doesn\'t pop" — is the level of specificity these critique rounds are scored on.',
    related: ['c022'],
  },
  c025: {
    id: 'c025', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 6 — Perception & Gestalt',
    title: 'Visual Hierarchy',
    def: 'The deliberate arrangement of elements — using size, weight, color, and position — to guide the viewer\'s eye to the most important information first, then to progressively less important information.',
    why: 'Visual hierarchy is the practical, applied outcome of nearly every principle covered this week (proximity, similarity, figure/ground) combined — it is the single most commonly evaluated visual-craft skill in portfolio and live design rounds.',
    blocks: [
      { t: 'ul', items: [
        'Size and weight — larger and bolder elements are scanned first; this should map directly to actual importance, not just to what the designer wants to emphasize aesthetically.',
        'Color and contrast — a single saturated accent color against a muted palette draws the eye immediately (this is also the Von Restorff Effect at work).',
        'Position — content higher and further left (in left-to-right reading cultures) is scanned first; the most important action or information should rarely be buried at the bottom or in a corner.',
        'A screen has a hierarchy failure when everything is emphasized equally — if every element is bold and colorful, nothing actually stands out, and the viewer is left to construct their own priority order.',
      ]},
    ],
    examples: [
      { label: 'Example · A pricing page with three equally bold plans', text: 'If all three pricing tiers use identical size, weight, and color, the page has no hierarchy at all — the user has to read every word of every plan to compare them. Making the recommended plan visually dominant (larger, a colored border, a "Most popular" badge) directs attention where the business and the user both benefit.' },
      { label: 'Example · An error state buried in gray text', text: 'A critical error message rendered in the same small, gray, low-contrast style as helper text will be missed by many users — the visual weight doesn\'t match the actual importance of the information, which is a hierarchy failure independent of the wording.' },
    ],
    mistake: 'Emphasizing multiple elements on the same screen so aggressively that none of them actually reads as more important than the others — hierarchy is fundamentally relative, and over-emphasizing everything is functionally identical to emphasizing nothing.',
    interview: 'A live craft critique will almost always ask you to identify what the eye lands on first — being able to name specifically why (size, contrast, position) and whether that matches actual business/user priority is the core of the skill being assessed.',
    related: ['c022', 'c023', 'c024'],
  },
  c026: {
    id: 'c026', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 7 — Cognitive Biases in Design',
    title: 'Loss Aversion & Prospect Theory',
    def: 'Prospect Theory (Kahneman & Tversky) describes how people evaluate outcomes relative to a reference point rather than in absolute terms, and weigh potential losses roughly twice as heavily as equivalent gains — a specific asymmetry called Loss Aversion.',
    why: 'This is one of the most academically well-established findings in behavioral economics, and it directly explains why "don\'t lose your streak" messaging outperforms "keep earning points" messaging of equivalent value — interviewers expect you to name Kahneman and Tversky specifically, not just describe the effect vaguely.',
    blocks: [
      { t: 'diagram', id: 'prospect', caption: 'Prospect Theory\'s value function: the curve is steeper for losses than for equivalent gains, and both flatten at the extremes — the same absolute change matters more near the reference point.' },
      { t: 'p', text: 'Prospect Theory\'s value function is S-shaped: concave for gains (diminishing sensitivity — the difference between winning ₹100 and ₹200 feels smaller than the difference between ₹0 and ₹100) and convex for losses (also diminishing sensitivity, but starting from a steeper initial slope), and critically, steeper on the loss side overall — losing ₹100 feels worse than gaining ₹100 feels good, by a well-replicated factor of roughly 2x.' },
      { t: 'ul', items: [
        'Loss-framed messaging ("you\'ll lose your progress") is measurably more motivating than equivalent gain-framed messaging ("keep your progress going") — but using this honestly requires the loss to be real and relevant, not manufactured.',
        'Default options exploit the same asymmetry: changing a default requires the user to accept the "loss" of the current option, which people resist even when the alternative is objectively better for them.',
      ]},
    ],
    examples: [
      { label: 'Example · Streak-loss messaging in habit apps', text: '"You\'ll lose your 45-day streak" is measurably more effective at bringing a lapsed user back than "keep your streak going" — the same underlying fact framed as an impending loss rather than a forward-looking gain triggers a stronger, well-documented psychological response.' },
      { label: 'Example · Framing retirement-savings shortfalls', text: 'Framing a paused monthly investment as "you\'ll miss out on an estimated ₹X of compounding by retirement" uses loss framing honestly and powerfully — as long as the number is real and the goal is genuinely the user\'s own stated objective, not a manufactured anxiety.' },
    ],
    mistake: 'Using loss-framed messaging to manufacture anxiety about something that isn\'t actually true or relevant to the user\'s real goals, purely to drive an engagement metric — this crosses from applying real behavioral science into manipulation.',
    interview: 'Naming "Prospect Theory" and "Kahneman and Tversky" specifically, rather than a vague "people don\'t like losing things," is the level of precision that distinguishes a strong psychology-fluent answer from a surface-level one.',
    related: ['c018'],
  },
  c027: {
    id: 'c027', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 7 — Cognitive Biases in Design',
    title: 'Anchoring & Framing',
    def: 'Anchoring is the tendency to rely heavily on the first piece of information encountered (the "anchor") when making subsequent judgments; Framing is how the same information, presented differently, changes the decision made about it.',
    why: 'These two biases together explain almost all pricing-page and comparison-table design, and interviewers use them to probe whether you can distinguish legitimate persuasive design from manipulative dark patterns using the same underlying mechanism.',
    blocks: [
      { t: 'ul', items: [
        'Anchoring — the first number or option a person sees becomes the reference point everything else is judged against, even when that first number is arbitrary or irrelevant.',
        'Framing — presenting a statistic as "95% success rate" versus "5% failure rate" changes how it\'s perceived, even though the two statements are mathematically identical.',
      ]},
      { t: 'p', text: 'Pricing pages routinely show the most expensive plan first (or make it visually prominent) specifically to set a high anchor, so that the actually-intended plan looks more reasonable by comparison. This is a widely accepted, common practice — the ethical line is whether the anchor itself is honest (a genuinely available premium tier) versus fabricated purely to manipulate perception (an inflated "original price" that was never actually charged).' },
    ],
    examples: [
      { label: 'Example · SaaS pricing page ordering', text: 'Displaying an Enterprise plan at ₹50,000/month first, before a Team plan at ₹8,000/month, makes the Team plan feel reasonable by comparison — both plans are real and honestly priced, so this is a legitimate use of anchoring, not a dark pattern.' },
      { label: 'Example · Pre-filled donation or investment amounts', text: 'A pre-filled default SIP (recurring investment) amount of ₹5,000 anchors the user\'s decision higher than an empty field would. This is ethically neutral only if the default is a genuinely reasonable, well-researched suggestion for that user segment — not an inflated number chosen purely to maximize revenue regardless of fit.' },
    ],
    mistake: 'Fabricating a false anchor — a "was ₹9,999, now ₹2,999" that was never actually sold at the higher price — which converts a legitimate psychological principle into outright deception, and is explicitly regulated as a dark pattern in several jurisdictions.',
    interview: 'A strong answer distinguishes the technique from the ethics: "anchoring itself isn\'t the problem — a fabricated anchor is," which shows you can separate mechanism from misuse.',
    related: ['c026'],
  },
  c028: {
    id: 'c028', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 7 — Cognitive Biases in Design',
    title: 'Social Proof',
    def: 'The tendency to look at what other people are doing (or appear to be doing) as a signal for what the correct or desirable action is, especially under uncertainty.',
    why: 'Social proof is one of the most widely deployed persuasive-design techniques in existence, and it sits directly on the line between legitimate trust-building and a well-documented dark pattern — interviewers use it to test ethical judgment as much as technique knowledge.',
    blocks: [
      { t: 'ul', items: [
        'Real, verifiable social proof (genuine review counts, genuine user totals) builds legitimate trust and reduces perceived risk, especially for first-time or high-stakes decisions.',
        'Fabricated or exaggerated social proof (fake "12 people are viewing this" counters, inflated review counts) is a well-documented, increasingly regulated dark pattern.',
        'The mechanism works because humans use others\' behavior as a low-effort proxy for quality or safety when they don\'t have time or expertise to evaluate something directly themselves.',
      ]},
    ],
    examples: [
      { label: 'Example · "2.3 crore investors trust this platform"', text: 'A genuine, verifiable user count displayed to a first-time investor reduces perceived risk honestly — it is real evidence that many other people have made the same decision safely.' },
      { label: 'Example · Fabricated "12 people viewing this" counters', text: 'A booking site showing a live "X people are looking at this right now" counter that is synthetically generated rather than reflecting real concurrent viewers is a widely cited example of social proof crossing into dark-pattern territory — the mechanic is identical to honest social proof, but the underlying claim is false.' },
    ],
    mistake: 'Fabricating or significantly inflating any social-proof number. The distinguishing question is never "is this technique manipulative" — it is always "is this specific number true."',
    interview: 'A sharp answer names the exact line: "the mechanic isn\'t the ethics problem here — the honesty of the underlying number is." This shows judgment, not just pattern recognition.',
    related: ['c027'],
  },
  c029: {
    id: 'c029', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 7 — Cognitive Biases in Design',
    title: 'Default Effect',
    def: 'People overwhelmingly tend to stick with whatever option is pre-selected for them, even when changing it would take only a moment and would clearly serve their interests better.',
    why: 'The Default Effect is one of the most powerful and consequential biases in all of product design, because a default is a decision the designer makes on behalf of every single user who doesn\'t actively change it — which is the vast majority of users in almost every product.',
    blocks: [
      { t: 'p', text: 'Because changing a default requires active effort and triggers a mild form of loss aversion (giving up the "safe" pre-selected option), whichever option is set as default will be chosen by a large majority of users regardless of whether it genuinely serves them best. This makes default selection one of the highest-leverage, most ethically significant decisions in any interface — far higher-stakes than its small visual footprint would suggest.' },
      { t: 'ul', items: [
        'Defaults should be set to genuinely serve the majority of users\' actual interests, not to maximize a business metric at the user\'s expense.',
        'Privacy and data-sharing settings are a particularly consequential category of defaults — "opt-out" defaults (data sharing on by default, requiring active effort to turn off) reliably produce far higher participation than honest "opt-in" defaults would, purely due to this effect, independent of what users would actually choose if asked directly.',
      ]},
    ],
    examples: [
      { label: 'Example · Retirement contribution auto-enrollment', text: 'Employees are far more likely to remain in a retirement savings plan when auto-enrolled by default (with an easy opt-out) than when required to actively opt in — this is one of the most well-studied, positive real-world applications of the Default Effect in policy design.' },
      { label: 'Example · Data-sharing opt-out defaults', text: 'Setting a data-sharing toggle to "on" by default, requiring users to find and disable it, produces far higher participation than an honest opt-in default would — which is precisely why privacy regulations like India\'s DPDP Act and GDPR increasingly require certain categories of consent to default to off.' },
    ],
    mistake: 'Setting a default that clearly favors the business over the user\'s genuine interest (opt-out data sharing, pre-selected expensive add-ons) and treating the resulting high adoption rate as evidence users "wanted" it — the Default Effect means that adoption rate tells you almost nothing about genuine preference.',
    interview: 'Being asked to defend a default you\'ve chosen — and being able to say plainly whether it serves the user or the business first — is a direct test of design ethics judgment, not just bias knowledge.',
    related: ['c027', 'c110'],
  },
  c030: {
    id: 'c030', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 8 — Typography & Color',
    title: 'Type Scales & Hierarchy',
    def: 'A type scale is a predefined, limited set of font sizes (and often weights) used consistently across a product, so that visual hierarchy is systematic rather than improvised screen by screen.',
    why: 'An undisciplined type scale — new font sizes invented ad hoc for every screen — is one of the fastest ways a product starts to feel inconsistent and unpolished, and building a disciplined scale is one of the first concrete deliverables of any real design system.',
    blocks: [
      { t: 'diagram', id: 'typescale', caption: 'A type scale rendered at actual size — hierarchy comes from the combination of size and weight, not size alone.' },
      { t: 'ul', items: [
        'A typical scale has 5–7 steps (e.g. Display, H1, H2, H3, Body, Body small, Caption), each with a clear, named purpose — not just a size, but a role.',
        'Ratios (often close to 1.2–1.25 between adjacent steps) keep the jumps proportional and visually coherent, rather than arbitrary.',
        'Weight does real hierarchy work alongside size — a bold body-size label can outrank a light-weight, larger heading in some layouts, so the two variables should be considered together, not size alone.',
      ]},
    ],
    examples: [
      { label: 'Example · An undisciplined product with 14 font sizes', text: 'Auditing an unsystematized product often reveals a dozen or more subtly different font sizes in use (15px here, 16px there, 15.5px somewhere else) — all invented ad hoc by different designers and moments, with no discernible logic. Consolidating to a strict 6-step scale immediately makes the whole product feel more considered, without changing any content.' },
      { label: 'Example · New headings before new sizes', text: 'A well-run design system adds a new font WEIGHT to an existing size before ever adding a new size to the scale — this keeps hierarchy legible and prevents the scale from drifting back into the same ad hoc sprawl it was built to fix.' },
    ],
    mistake: 'Introducing a new one-off font size to make a specific piece of content "feel a little more important" instead of using an existing step in the scale, or adjusting weight instead — this is exactly how disciplined scales erode back into chaos over time.',
    interview: 'Being asked to justify why a specific text uses a specific size in a craft round — "this is Body, not H3, because it\'s supporting text, not a section heading" — demonstrates systematic thinking, not just an eye for what looks nice.',
    related: [],
  },
  c031: {
    id: 'c031', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 8 — Typography & Color',
    title: 'Line-height & Measure',
    def: 'Line-height (leading) is the vertical space between lines of text; measure is the width of a block of text, usually expressed in characters per line — both directly determine how comfortable a passage is to read.',
    why: 'These two settings are the most underrated levers in all of typography — a beautifully chosen typeface set at the wrong line-height or measure will still feel exhausting to read, and this is a frequent, correctable mistake in real product critiques.',
    blocks: [
      { t: 'ul', items: [
        'Body text generally reads best around 1.4–1.6 line-height — tighter than that and lines visually crowd together, making it easy to lose your place; looser and the text feels disconnected, with lines drifting apart from each other.',
        'Headings can use tighter line-height (around 1.1–1.3) since they are short and don\'t need the same breathing room as long paragraphs.',
        'Measure — the ideal line length is roughly 45–75 characters (about 66 is often cited as ideal); shorter forces the eye to jump lines too often, longer makes it hard to track back to the start of the next line accurately.',
      ]},
      { t: 'p', text: 'On mobile, measure is naturally constrained to something closer to 30–40 characters by screen width, which is one of several reasons mobile reading experiences need somewhat different typographic tuning than desktop ones, not just a scaled-down version of the same layout.' },
    ],
    examples: [
      { label: 'Example · Tightly-set long-form content', text: 'A blog or article rendered at 1.2 line-height (appropriate for a heading) rather than 1.5–1.6 (appropriate for body text) will measurably increase reading fatigue and reduce comprehension over a long passage, even though each individual line looks fine in isolation.' },
      { label: 'Example · Full-width desktop paragraphs', text: 'A paragraph of body text stretched to the full width of a large desktop monitor can easily exceed 120 characters per line, forcing the eye to work hard to find the start of the next line — capping the content column\'s width, independent of the screen\'s width, fixes this directly.' },
    ],
    mistake: 'Tuning line-height and measure by eye on a single test paragraph rather than checking against real, varying content lengths — settings that look fine for three lines of text can feel very different across fifteen lines of real content.',
    interview: 'Being able to cite a specific measure range ("45–75 characters, about 66 ideal") in a craft conversation about a text-heavy screen signals genuine typographic literacy beyond "make it readable."',
    related: ['c030'],
  },
  c032: {
    id: 'c032', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 8 — Typography & Color',
    title: 'Color Theory & Ramps',
    def: 'A color ramp is a systematic set of tints and shades of a single hue (typically 9–12 steps from very light to very dark), built so that any step can be reliably combined with any other for accessible, consistent use across a product.',
    why: 'Ad hoc color picking (grabbing a slightly different shade of blue for every new component) is one of the most common sources of visual inconsistency in unsystematized products — a proper ramp is what a mature design system uses instead.',
    blocks: [
      { t: 'ul', items: [
        'A ramp is generated algorithmically or carefully hand-tuned so that lightness steps are perceptually even, and contrast between any two steps is predictable rather than accidental.',
        'Primitive colors (raw ramp values, like "blue-600") should never be used directly in a product — they should always be referenced through a semantic layer (see Design Tokens) so the ramp can change without breaking every reference to it.',
        'A single accent hue is usually sufficient for most product needs; multiple competing "brand colors" used simultaneously as primary accents dilute visual hierarchy rather than adding richness.',
      ]},
      { t: 'p', text: 'Color theory basics (complementary, analogous, triadic color relationships) matter far less in most product design than a disciplined, accessible ramp built from one or two hues — the goal is systematic consistency and guaranteed contrast compliance, not painterly color harmony for its own sake.' },
    ],
    examples: [
      { label: 'Example · Auditing an unsystematized product\'s blues', text: 'A color audit of an ad hoc product often finds seven or eight subtly different shades of blue used across different screens and components, none of which were chosen with contrast compliance in mind — consolidating to a single, deliberately-built 10-step ramp fixes both the visual inconsistency and the accessibility gaps in one pass.' },
      { label: 'Example · Building a ramp for an accessible error color', text: 'A design system\'s "error red" needs multiple steps in its own ramp — a lighter tint for background fills, a mid-tone for borders, and a darker tone with guaranteed 4.5:1 contrast for text — rather than one single red reused everywhere regardless of the background it sits on.' },
    ],
    mistake: 'Picking colors directly from a color wheel or personal taste for each new component, rather than working within a pre-built, contrast-verified ramp — this is exactly how products accumulate a dozen near-identical, inconsistent shades over time.',
    interview: 'Explaining "primitive versus semantic" color usage (see Design Tokens) in the same breath as color ramps shows you understand color as a systems problem, not just a taste problem.',
    related: ['c072', 'c073'],
  },
  c033: {
    id: 'c033', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 8 — Typography & Color',
    title: 'Contrast & WCAG AA',
    def: 'WCAG AA is the widely-adopted accessibility standard requiring a minimum contrast ratio between text and its background: 4.5:1 for normal body text, 3:1 for large text (18pt+ or 14pt+ bold), and 3:1 for meaningful UI components and graphics.',
    why: 'Contrast compliance is one of the few accessibility requirements that is both legally significant in many jurisdictions and mechanically verifiable with a simple tool — there is no excuse for shipping non-compliant text, and interviewers expect these exact numbers cold.',
    blocks: [
      { t: 'ul', items: [
        'Body text: minimum 4.5:1 contrast ratio against its background.',
        'Large text (≥24px, or ≥19px bold): minimum 3:1 — larger text is legible at lower contrast, so the bar is relaxed slightly.',
        'UI components and meaningful graphics (icons carrying information, input field borders, focus indicators): minimum 3:1.',
        'These are AA-level minimums; AAA level (7:1 body text) is stricter still and is required in some regulated or public-sector contexts.',
      ]},
      { t: 'p', text: 'A common and costly mistake is designing in a tool with a bright, high-contrast monitor and good lighting, checking colors by eye, and shipping something that fails these ratios in the real world — actual verification with a contrast-checking tool, not a visual judgment call, is the only reliable way to guarantee compliance.' },
    ],
    examples: [
      { label: 'Example · Light-gray placeholder text used as a label', text: 'A very light gray placeholder text at roughly 2.5:1 contrast against a white background looks acceptable to a sighted designer working in good lighting, but fails WCAG AA outright and is genuinely difficult to read for a large share of real users, especially in bright outdoor lighting or with any degree of low vision.' },
      { label: 'Example · A "soft" pastel error color', text: 'Choosing a gentle, low-contrast rose color for error text specifically to feel less alarming can inadvertently push contrast below 4.5:1 — the fix is finding a specific rose hue and darkness that passes contrast verification, not abandoning the softer tone entirely.' },
    ],
    mistake: 'Trusting visual judgment on a well-lit reference monitor instead of running an actual contrast check — a color combination that looks "obviously fine" to the designer frequently fails the numeric ratio in practice.',
    interview: 'These specific numbers (4.5:1, 3:1) are commonly asked for directly and cold in interviews — hesitating on them, or being unable to state them precisely, is a notable gap for a senior-level candidate.',
    related: ['c062'],
  },
  c034: {
    id: 'c034', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 9 — Layout & Composition',
    title: 'Grid Systems',
    def: 'A grid is an underlying structure of columns, gutters, and margins that every layout on a screen aligns to, providing consistent, predictable structure across an entire product rather than each screen being laid out freely.',
    why: 'Grids are what let dozens of designers and engineers build hundreds of screens that all feel like they belong to the same coherent product — this is foundational, systems-level craft knowledge tested in nearly every visual-design interview.',
    blocks: [
      { t: 'ul', items: [
        'Desktop layouts commonly use a 12-column grid, since 12 divides evenly into halves, thirds, and quarters, giving flexible layout options.',
        'Mobile layouts typically use fewer columns (often 4) given the constrained width, with the same underlying logic of consistent margins and gutters.',
        'Breakpoints define where the grid itself changes (column count, margins) as the viewport width changes, rather than the content simply squeezing or stretching.',
      ]},
      { t: 'p', text: 'A grid\'s real value is invisible when it\'s working: elements align cleanly across sections without the designer manually eyeballing pixel positions each time, and different screens built by different people still feel structurally consistent because they share the same underlying skeleton.' },
    ],
    examples: [
      { label: 'Example · A dashboard with misaligned card widths', text: 'Cards on a dashboard that are each sized "by eye" rather than snapped to shared grid columns will drift out of alignment with each other in subtle ways that read as unpolished, even if no individual card looks wrong on its own.' },
      { label: 'Example · Auto Layout as a modern grid implementation', text: 'Modern design tools\' auto-layout features are effectively a live, interactive implementation of grid and flexbox logic — using them correctly (rather than manually positioning every element) is what keeps a design file\'s structure aligned with how it will actually be coded.' },
    ],
    mistake: 'Positioning elements by eye rather than snapping to a defined grid — small, individually invisible misalignments compound across a whole product into a subtly unpolished feel that\'s hard to pin down without checking against the grid directly.',
    interview: 'Live component-building or craft rounds frequently check grid discipline directly — being unable to explain your column structure and margins is a notable gap.',
    related: ['c071'],
  },
  c035: {
    id: 'c035', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 9 — Layout & Composition',
    title: 'Spacing Scales (8pt)',
    def: 'A constrained, systematic set of spacing values (commonly 4, 8, 16, 24, 32, 48, 64px) used for every margin, padding, and gap in a product, instead of arbitrary pixel values chosen per screen.',
    why: 'An 8pt spacing scale is one of the single highest-leverage, easiest-to-adopt disciplines in all of design systems work, and its absence is one of the fastest ways an experienced reviewer can tell a product wasn\'t built with systematic rigor.',
    blocks: [
      { t: 'diagram', id: 'spacing', caption: 'The 8pt spacing scale rendered at actual size — every gap in a disciplined product is one of these six values.' },
      { t: 'ul', items: [
        'Base unit of 8px (sometimes 4px for finer, smaller-scale adjustments) with every spacing value in the product being a multiple of that unit.',
        'This constraint doesn\'t limit creativity meaningfully — six to eight spacing values are more than sufficient for the vast majority of real layouts — but it does eliminate an entire category of inconsistency (13px here, 15px there) that has no functional purpose.',
        'Consistent spacing scales make handoff to engineering dramatically simpler, since every spacing value maps directly and unambiguously to a named token rather than a bespoke number.',
      ]},
    ],
    examples: [
      { label: 'Example · Auditing padding values across a product', text: 'A spacing audit of an unsystematized product commonly turns up a dozen or more distinct padding values (12px, 13px, 14px, 15px, 16px, 18px...) with no discernible logic behind the differences — consolidating to a strict scale of six values removes the inconsistency without any actual loss of layout flexibility.' },
      { label: 'Example · Card padding decisions', text: 'Choosing between 16px (standard) and 24px (comfortable) card padding as one of only two allowed options, rather than freehanding a new value for every new card type, keeps the whole product\'s density consistent and predictable.' },
    ],
    mistake: 'Nudging an element by a few arbitrary pixels "until it looks right" rather than adjusting to the nearest value on the shared scale — this is exactly how off-scale values silently creep into an otherwise disciplined system.',
    interview: 'Naming the specific scale ("4/8/16/24/32/48/64, zero off-scale values") when discussing design-system discipline is a concrete, memorable way to demonstrate systematic rigor.',
    related: ['c034'],
  },
  c036: {
    id: 'c036', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 9 — Layout & Composition',
    title: 'Alignment & Balance',
    def: 'Alignment is the precise lining-up of elements against shared edges or axes; Balance is the even distribution of visual weight across a composition, whether achieved symmetrically or asymmetrically.',
    why: 'Alignment is one of the "CRAP" foundational visual-design principles (Contrast, Repetition, Alignment, Proximity) and is frequently the single fastest visible signal of whether a screen was crafted carefully or assembled hastily.',
    blocks: [
      { t: 'ul', items: [
        'Every element should align to at least one other element on the screen — nothing should be positioned in visual isolation with no relationship to anything else nearby.',
        'Symmetrical balance feels calm, formal, and stable; asymmetrical balance (a large element on one side offset by several smaller elements on the other) feels more dynamic while still avoiding a lopsided, unbalanced composition.',
        'Text alignment specifically (left, center, right, justified) should be chosen deliberately: left-alignment is generally most readable for body text in left-to-right languages, since it gives the eye a consistent starting point for every new line.',
      ]},
    ],
    examples: [
      { label: 'Example · A form with inconsistent label alignment', text: 'A form where some field labels are left-aligned and others are centered above their inputs, with slightly different starting x-positions, will feel subtly "off" even to a viewer who couldn\'t articulate why — enforcing one consistent alignment axis for every label resolves it instantly.' },
      { label: 'Example · Centered body text', text: 'Center-aligning more than a line or two of body text forces the eye to hunt for a new starting point on every line, since the left edge constantly shifts — this is why long-form reading content overwhelmingly defaults to left alignment, reserving centering for short headlines or captions.' },
    ],
    mistake: 'Center-aligning paragraphs of body text for aesthetic reasons, without accounting for the real reading-speed cost of a constantly shifting left edge on every line.',
    interview: 'A design review will often flag misalignment before anything else — being able to spot and fix subtle alignment drift quickly is a core, testable craft skill.',
    related: ['c034'],
  },
  c037: {
    id: 'c037', bookId: 'curr', bookLabel: 'Curriculum · Foundation', chapter: 'Week 9 — Layout & Composition',
    title: 'Whitespace & Rhythm',
    def: 'Whitespace (or negative space) is the deliberately empty area around and between elements; Rhythm is the consistent, repeating pattern of spacing and sizing that makes a layout feel intentional as you scroll through it.',
    why: 'Whitespace is frequently treated as "wasted space" by inexperienced teams under pressure to fit more content on screen, when in reality it is an active design tool that directly improves comprehension, focus, and perceived quality.',
    blocks: [
      { t: 'p', text: 'Generous whitespace around a primary call-to-action makes it stand out through isolation, independent of its own color or size (this connects directly to Figure/Ground and Visual Hierarchy). Consistent rhythm — the same vertical spacing pattern repeating between sections as a user scrolls — creates a subconscious sense of order and craftsmanship, even when the viewer can\'t articulate why a page "feels premium."' },
      { t: 'ul', items: [
        'Micro whitespace (within a component, like padding inside a button) affects legibility and touch-target comfort.',
        'Macro whitespace (between major sections of a page) affects overall pacing and perceived quality — cramped macro spacing is one of the most reliable visual signals of an unpolished, budget-feeling product.',
      ]},
    ],
    examples: [
      { label: 'Example · A cramped enterprise dashboard', text: 'A dashboard that packs every available pixel with data, using minimal whitespace between metric cards, often reads as lower-quality than a competitor showing the same information with generous breathing room — even though the second dashboard technically displays less data per scroll.' },
      { label: 'Example · Isolating a single primary CTA', text: 'Surrounding a single "Get started" button with significantly more empty space than any other element on the page makes it read as the primary action instantly, using isolation alone, independent of its size or color.' },
    ],
    mistake: 'Treating a request for "more whitespace" as an aesthetic nicety to cut under deadline pressure, rather than recognizing it as a functional tool that directly affects comprehension speed and perceived product quality.',
    interview: 'Being able to say "I\'m using isolation here to establish hierarchy, not just decoration" when defending a whitespace-heavy layout choice shows the reasoning behind the craft, not just an eye for it.',
    related: ['c025'],
  },

  c038: {
    id: 'c038', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 10 — UX Research: Methods',
    title: 'Generative vs Evaluative',
    def: 'Generative research discovers problems and opportunities before a solution exists; Evaluative research tests whether a solution that already exists actually works.',
    why: 'Confusing these two modes is one of the most common research mistakes — running a usability test (evaluative) before you\'ve even confirmed the problem is real (generative work), or endlessly interviewing users (generative) about a design that\'s already built and just needs testing.',
    blocks: [
      { t: 'ul', items: [
        'Generative methods: open-ended interviews, diary studies, field observation, contextual inquiry — used to discover what problems exist and why, before any solution is proposed.',
        'Evaluative methods: usability testing, A/B testing, first-click testing, heuristic evaluation — used to check whether a specific, already-built solution actually works.',
        'A simple rule of thumb: if a prototype or product doesn\'t exist yet to test, you are doing generative work by definition; if one does exist, you have the option to evaluate it.',
      ]},
      { t: 'p', text: 'Product teams under time pressure frequently skip generative research and jump straight to evaluative testing of their first idea, because it feels faster — but this only tells you whether your first guess is usable, never whether it was the right problem to solve at all. Generative work is what protects against building a beautifully polished solution to the wrong problem.' },
    ],
    examples: [
      { label: 'Example · Skipping straight to a usability test', text: 'A team builds a redesigned checkout flow and usability-tests it (evaluative) without ever having interviewed abandoning users about WHY they leave (generative) — the test can only reveal whether the new flow is easy to use, not whether it addresses the actual reason people were abandoning the old one.' },
      { label: 'Example · Contextual inquiry before an enterprise redesign', text: 'Before redesigning an internal expense tool, shadowing three employees submitting real expense reports (generative, contextual inquiry) reveals they all keep a separate personal spreadsheet because the tool doesn\'t handle multi-currency trips — a problem no usability test of the existing tool would ever surface.' },
    ],
    mistake: 'Running only evaluative research on a first idea, skipping generative discovery entirely — this validates usability while leaving the far more expensive risk (wrong problem) completely unexamined.',
    interview: '"How do you conduct research with no budget?" is commonly asked — a strong answer distinguishes cheap generative options (support tickets, sales call recordings) from cheap evaluative options (five-user hallway tests), rather than treating "research" as one undifferentiated activity.',
    related: [],
  },
  c039: {
    id: 'c039', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 10 — UX Research: Methods',
    title: 'User Interviews & The Mom Test',
    def: 'The Mom Test is a practical framework for asking questions specific and past-focused enough that even someone who loves you (like your mom) couldn\'t politely lie their way to a falsely encouraging answer.',
    why: 'Nearly every novice interviewer asks leading, hypothetical questions that get flattering but useless answers — The Mom Test is the single most practical, widely-cited fix for this, and it comes up constantly in research-method interview questions.',
    blocks: [
      { t: 'ul', items: [
        'Ask about specific past behavior, never hypothetical future behavior — "talk me through the last time you tried to do X" beats "would you use a feature that does X?" every time.',
        'Avoid asking about your idea directly, and never pitch it during the interview — you want to learn about their life and problems, not get validation for what you already built.',
        'Follow up on emotion and workarounds — visible frustration or an improvised workaround ("I just keep a separate spreadsheet for this") is often the most valuable signal in the entire conversation.',
      ]},
      { t: 'p', text: 'The core insight is that people are generally polite and want to be helpful, which makes them unreliable narrators about their own hypothetical future behavior — but they are quite reliable narrators about specific things they actually did last week, which is why anchoring every question in real, recent, specific past behavior is the discipline\'s central technique.' },
    ],
    examples: [
      { label: 'Example · "Would you pay for premium chauffeurs?"', text: 'This hypothetical question reliably gets a polite "yes" from nearly everyone, regardless of true purchase intent, and is essentially worthless as data. "Tell me about the last time you booked a premium ride — walk me through exactly what happened" gets specific, real, far more predictive detail instead.' },
      { label: 'Example · Sales calls as free interview data', text: 'Recorded sales calls are effectively free Mom-Test-style interviews already in progress — prospective customers describe their actual current workflow and pain points to a salesperson in specific, past-tense detail, without a researcher needing to run a single additional session.' },
    ],
    mistake: 'Asking "would you use this feature?" and treating an enthusiastic verbal "yes" as validated demand — verbal enthusiasm about a hypothetical is one of the weakest predictors of real future behavior in all of research methodology.',
    interview: 'Citing The Mom Test by name and explaining why hypothetical questions fail is a strong, specific answer to "how do you validate an idea with users" — much stronger than a general "I\'d interview some users."',
    related: ['c038'],
  },
  c040: {
    id: 'c040', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 10 — UX Research: Methods',
    title: 'Usability Testing (5-user)',
    def: 'Testing a prototype or product with real users attempting real tasks while thinking aloud — and the well-established finding that roughly five users are enough to uncover around 85% of a design\'s usability problems.',
    why: 'This specific number (five users, ~85% of issues) is one of the most frequently cited research statistics in the entire field, and is the practical justification for running many small, fast rounds of testing instead of one large, slow one.',
    blocks: [
      { t: 'p', text: 'The underlying logic (from Jakob Nielsen and Tom Landauer\'s research) is that usability problems aren\'t evenly distributed — a small number of severe problems will be hit by nearly every user, so they surface almost immediately, while the marginal problems found by user six, seven, and eight have rapidly diminishing value relative to their cost. This means three rounds of five users each, with fixes applied between rounds, will typically find far more real problems than one single round of fifteen.' },
      { t: 'ul', items: [
        'Recruit participants who actually resemble your real target users, not just whoever is convenient — testing with the wrong audience produces confident, precise, and completely misleading results.',
        'Give participants real, specific tasks ("find and cancel your subscription") rather than open-ended exploration, and ask them to think aloud as they work.',
        'Watch behavior over stated opinion — what someone struggles to do is far more reliable data than what they say they think about the design afterward.',
      ]},
    ],
    examples: [
      { label: 'Example · Three rounds of five beats one round of fifteen', text: 'Testing five users, fixing the two most severe issues found, then testing five NEW users on the revised design reveals a different, now-more-marginal set of issues — this iterative small-batch approach catches and fixes far more real problems within the same total research budget than one large round would.' },
      { label: 'Example · Guerrilla testing with zero budget', text: 'Five colleagues\' family members, or five people in a shared café, recruited informally and given ten minutes each with a clickable prototype, can surface the majority of a design\'s most severe usability issues — the discipline of specific, real tasks matters more than a large or formally-recruited sample.' },
    ],
    mistake: 'Treating "we don\'t have budget for research" as a reason to skip testing altogether, rather than recognizing that five informally-recruited users testing real tasks will still catch most severe problems at essentially zero cost.',
    interview: '"How do you conduct research with no budget?" has a well-known, specific answer: five users per round finds most issues, and three rounds of five beats one round of fifteen — citing this structure directly is a strong, standard response.',
    related: ['c038'],
  },
  c041: {
    id: 'c041', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 10 — UX Research: Methods',
    title: 'Surveys & Analytics',
    def: 'Surveys collect self-reported, attitudinal data at scale (what people say); analytics captures actual behavioral data from real usage (what people do) — and the two frequently disagree, which is itself valuable information.',
    why: 'Knowing when to reach for a survey versus analytics — and trusting behavior over stated preference when they conflict — is a core piece of research-method fluency tested in both research-specific and general product-thinking interview rounds.',
    blocks: [
      { t: 'ul', items: [
        'Surveys are useful for measuring attitudes, satisfaction, and preferences at scale (NPS, CSAT) but are vulnerable to social-desirability bias and simply don\'t capture what people actually did.',
        'Analytics captures real behavior at scale (what was clicked, how long a task took, where people dropped off) but tells you nothing about WHY, and can\'t be asked a follow-up question.',
        'When the two disagree — users say in a survey that they want more detailed information, but analytics shows almost nobody opens the existing detail view — the behavioral data should generally be trusted over the stated preference, since it reflects the real cost/benefit trade-off people are actually making, not their aspirational self-image.',
      ]},
    ],
    examples: [
      { label: 'Example · Stated desire for "more fund data"', text: 'A survey reports that users want more detailed fund performance data displayed. Analytics shows that fewer than 10% of users ever open the existing data tab. The want is real but aspirational — the actual behavioral job is closer to "help me feel confident choosing quickly," which a redesign should target directly rather than literally adding more data.' },
      { label: 'Example · Session-recording versus stated reading habits', text: 'Users report in surveys that they carefully read terms and disclosures before agreeing. Session recordings frequently show dwell times under two seconds on the same screens. Designing for the behavioral reality (layered, progressive disclosure) rather than the stated habit (a long, dense wall of text) serves users far better.' },
    ],
    mistake: 'Treating a survey result as ground truth when it conflicts with clear behavioral analytics — self-reported intentions are a genuinely weaker signal than observed behavior at scale, not an equally valid alternative data source.',
    interview: 'Being able to say which data source you\'d trust and why, in a specific conflicting-data scenario, demonstrates real research judgment rather than just familiarity with the tools\' names.',
    related: ['c038'],
  },
  c042: {
    id: 'c042', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 11 — UX Research: Synthesis',
    title: 'Affinity Mapping',
    def: 'A synthesis technique where individual research observations (often written on sticky notes) are clustered into groups based on underlying similarity, revealing patterns and themes that weren\'t visible in any single observation alone.',
    why: 'Raw interview transcripts and observation notes are not insights by themselves — affinity mapping is the concrete, collaborative process that turns scattered data into a small number of actionable themes a team can actually act on.',
    blocks: [
      { t: 'p', text: 'The process: write each discrete observation, quote, or pain point on its own note; as a group, physically or digitally cluster notes that feel related, without predetermining the categories in advance; name each emergent cluster once it stabilizes; then look across clusters for a higher-level insight that no single observation revealed on its own. The value comes specifically from doing this collaboratively and bottom-up — top-down categorization imposed in advance tends to just confirm what the team already believed.' },
      { t: 'ul', items: [
        'Forty individual sticky notes from six interviews might cluster into four or five themes — and one of those themes is often a genuine surprise that no single interview stated outright, but which becomes visible only once the pattern is seen across all of them together.',
        'Affinity mapping works well as a bridge from generative research directly into How-Might-We statements, since each cluster naturally suggests a design opportunity.',
      ]},
    ],
    examples: [
      { label: 'Example · A cluster nobody explicitly stated', text: 'Six separate interviews about a mutual fund app each mention a different small complaint, but clustering the notes reveals all six are actually variations of one underlying theme — a lack of trust in the platform\'s legitimacy — which no single interview named directly, but which becomes the team\'s top priority once visible in the aggregate.' },
      { label: 'Example · Clustering enterprise support tickets', text: 'Hundreds of individual internal-tool support tickets, each describing a different specific complaint, cluster into a small number of root themes when affinity-mapped — often revealing that a handful of structural IA problems are generating the majority of ticket volume, rather than needing hundreds of individual fixes.' },
    ],
    mistake: 'Pre-defining the categories before looking at the actual data, then sorting observations into those preset buckets — this produces confirmation of existing assumptions rather than genuinely new, bottom-up insight.',
    interview: 'Describing a real affinity-mapping session where the resulting insight surprised the team is a strong way to demonstrate synthesis skill, not just data-collection skill.',
    related: ['c038'],
  },
  c043: {
    id: 'c043', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 11 — UX Research: Synthesis',
    title: 'Jobs-To-Be-Done',
    def: 'A framework that reframes users not by their demographics but by the underlying "job" they are hiring a product to do — reframing "who buys this" into "what progress is someone trying to make."',
    why: 'JTBD directly answers "why" in a way personas (which mostly answer "who") don\'t, and this reframe is one of the most consequential moves a product team can make, because the real competition for a job is often a completely different category of product than an obvious feature-for-feature competitor.',
    blocks: [
      { t: 'ul', items: [
        'A "job" has multiple forces at play: push (the problem with the status quo), pull (the appeal of a new solution), anxiety (worry about the new solution), and habit (attachment to the old way) — all four affect whether someone actually switches, not just whether the new solution is objectively better.',
        'The famous illustrative case: morning commuters "hire" a milkshake to make a boring, one-handed commute more bearable — its real competitors turn out to be bagels and bananas, not other milkshake brands.',
        'JTBD interviews focus on the moment someone first felt the push to look for a new solution, and what almost stopped them from switching.',
      ]},
    ],
    examples: [
      { label: 'Example · The milkshake study', text: 'A fast-food chain trying to sell more milkshakes discovered through JTBD-style interviews that morning commuters were "hiring" the milkshake for a specific job — something filling, one-handed, and slow to consume, to make a boring commute bearable — putting it in competition with bagels and bananas, not with other dessert options.' },
      { label: 'Example · A premium ride-hailing app\'s real job', text: 'A premium ride-hailing service\'s job isn\'t "transportation" — for many riders it is closer to "arrive composed and signal status for an important meeting." Understood this way, its real competitor for that specific job is a self-driven luxury car with a personal driver on retainer, not a standard ride-hailing app — a completely different competitive frame that changes what actually needs to be designed.' },
    ],
    mistake: 'Building a detailed persona (a "who") and treating it as sufficient understanding of user motivation, without ever separately asking the JTBD "why" — personas and JTBD answer different questions and are not substitutes for each other.',
    interview: 'A strong answer to "how do you understand user motivation" distinguishes what a persona tells you from what JTBD tells you, and gives a concrete example where the JTBD reframe changed a real design direction.',
    related: ['c001'],
  },
  c044: {
    id: 'c044', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 11 — UX Research: Synthesis',
    title: 'Personas & Journey Maps',
    def: 'A persona is an evidence-based archetype representing a distinct user segment; a journey map documents a specific user\'s experience over time — stages, actions, emotions, and pain points — across an entire process, not just a single screen.',
    why: 'Both tools exist to align a team around real user needs rather than each team member\'s individual internal assumption of "the user" — but both are frequently produced as one-off deliverables that get made once and never actually referenced again, which is the exact failure mode interviewers probe for.',
    blocks: [
      { t: 'ul', items: [
        'A good persona is built from actual research patterns across multiple real users, not invented from a team\'s imagination of a typical customer — an unused persona nobody references is a common and telling failure mode.',
        'A journey map plots stages (e.g., Awareness → Consideration → Onboarding → Regular use → Support) against the user\'s actions, thoughts, and emotional state at each stage, surfacing the moments of highest frustration or drop-off across the whole arc, not just within one screen.',
        'Journey maps are especially valuable for surfacing problems that live between touchpoints or teams — a call-center handoff, a delay between a purchase and delivery — which no single screen\'s design review would ever catch.',
      ]},
    ],
    examples: [
      { label: 'Example · A journey map revealing a cross-team gap', text: 'Mapping a customer\'s full journey through an insurance claim reveals that the single worst moment isn\'t any individual screen — it\'s a three-day silent gap between submitting a claim and hearing anything back, which falls entirely outside the digital product\'s scope and into an operations team\'s process. No screen-level design review would ever have surfaced this.' },
      { label: 'Example · A persona nobody uses', text: 'A polished persona deck created at a project\'s kickoff and never referenced again is a common, wasted artifact — versus a lightweight, frequently-revisited persona that the team actually checks against during every major decision ("would this actually help Priya, our primary persona, or are we just building it because it\'s easy?").' },
    ],
    mistake: 'Treating persona and journey-map creation as a one-time deliverable to produce and file away, rather than a living reference the team actively uses to challenge decisions throughout a project.',
    interview: 'Being able to describe how a persona or journey map genuinely changed a real decision — not just that one was made — demonstrates that these tools were used as intended, not produced as theater.',
    related: ['c043'],
  },
  c045: {
    id: 'c045', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 11 — UX Research: Synthesis',
    title: 'Empathy Maps',
    def: 'A four-quadrant synthesis tool — Says, Thinks, Does, Feels — used to consolidate everything learned about a user from research into a single, quick, shared reference.',
    why: 'Empathy maps are a fast, lightweight alternative or complement to a full persona, forcing a team to separate what a user explicitly says from what they might actually be thinking or feeling — a distinction that matters enormously given how unreliable stated preference can be (see The Mom Test).',
    blocks: [
      { t: 'diagram', id: 'empathymap', caption: 'The four-quadrant Empathy Map: Says, Thinks, Does, Feels — often built around a shared central goal or job.' },
      { t: 'ul', items: [
        'Says — direct quotes and statements the user made during research, verbatim where possible.',
        'Thinks — what the user might genuinely be thinking but didn\'t say out loud, inferred carefully from context (and clearly labeled as inference, not fact).',
        'Does — observed actions and behaviors, which are often the most reliable quadrant since they don\'t depend on self-report at all.',
        'Feels — the emotional state inferred from tone, body language, or context — frustration, anxiety, relief, confidence.',
      ]},
      { t: 'p', text: 'The most valuable insights usually live in the gaps between quadrants — when what someone Says directly contradicts what they Do, that tension is frequently the most important, actionable finding in the entire research session, and an empathy map makes that contradiction visually obvious in a way a page of interview notes does not.' },
    ],
    examples: [
      { label: 'Example · A gap between Says and Does', text: 'A user Says "I always carefully compare prices before buying" (self-image) while research Does data shows they consistently purchase the first option shown to them. This gap — not either quadrant alone — is the actionable insight: design for the observed behavior, not the stated self-image.' },
      { label: 'Example · Building one after a support-call review', text: 'Listening to a batch of internal-tool support calls and building a single empathy map from the recurring patterns — frustrated tone (Feels), explicit complaints about "too many clicks" (Says), workarounds via spreadsheets (Does) — gives a fast, shareable synthesis without needing to conduct entirely new interviews.' },
    ],
    mistake: 'Filling in the Thinks and Feels quadrants with pure guesswork disconnected from any actual research evidence, which turns the tool from an evidence synthesis method into an exercise in the team\'s own unchecked assumptions.',
    interview: 'Explaining how you handled a Says/Does contradiction in a real project is a strong, specific way to demonstrate synthesis skill using this tool.',
    related: ['c044'],
  },
  c046: {
    id: 'c046', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 12 — Information Architecture',
    title: 'Taxonomy vs Ontology',
    def: 'A taxonomy is a hierarchical classification system (a strict tree of categories and subcategories); an ontology is a richer model of concepts and the relationships between them, which need not be strictly hierarchical.',
    why: 'This distinction matters because forcing genuinely networked, cross-cutting content into a strict tree-shaped taxonomy is one of the most common structural mistakes in information architecture — some content simply doesn\'t belong to just one branch.',
    blocks: [
      { t: 'p', text: 'A taxonomy assumes every item has exactly one correct place in a hierarchy — like a library\'s Dewey Decimal system. An ontology allows an item to relate to multiple other items and categories simultaneously, with typed relationships between them (a document "belongs to" a project AND "was authored by" a person AND "relates to" a client) — which is how most real, richly-connected content actually behaves, and why tagging and faceted search systems (built on ontology-like thinking) often serve users better than a single rigid folder tree.' },
      { t: 'ul', items: [
        'Pure taxonomies are simpler to build and navigate for content that genuinely has one clear home (a product catalog organized by category).',
        'Ontology-style, multi-relationship models suit content that legitimately belongs to multiple contexts at once (a single internal document relevant to three different teams and two different projects simultaneously).',
      ]},
    ],
    examples: [
      { label: 'Example · Forcing a single-parent folder structure', text: 'An internal document-management system that forces every file into exactly one folder creates constant frustration when a file (say, a shared vendor contract) is genuinely relevant to both the Legal team\'s and the Procurement team\'s folder trees — a tag-based or faceted system would let it live in both contexts at once without duplication.' },
      { label: 'Example · An e-commerce catalog', text: 'A straightforward taxonomy (Category → Subcategory → Product) works well for a shoe retailer\'s catalog because most products genuinely have one clear home — but even here, cross-cutting attributes like "on sale" or "new arrivals" work better as tags layered across the taxonomy than as their own rigid branches within it.' },
    ],
    mistake: 'Defaulting to a single rigid taxonomy for content that actually has many legitimate cross-cutting relationships, forcing awkward duplication or an arbitrary single "true" parent category for things that don\'t naturally have just one.',
    interview: 'Being able to name the distinction and identify which model fits a given content set is a more advanced IA fluency signal than simply knowing what a sitemap is.',
    related: ['c048'],
  },
  c047: {
    id: 'c047', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 12 — Information Architecture',
    title: 'Card Sorting & Tree Testing',
    def: 'Card sorting has real users group and label a set of content items to reveal how they naturally organize information; tree testing verifies whether users can successfully find specific items within an already-proposed structure.',
    why: 'These are the two core evidence-based methods for validating an information architecture, and interviewers often ask specifically which one you\'d use at which stage of a project — the two are complementary, not interchangeable.',
    blocks: [
      { t: 'ul', items: [
        'Card sorting is generative — it happens BEFORE a structure exists, to discover how users would naturally group content, using either an open sort (participants create and name their own categories) or a closed sort (participants sort into categories you\'ve already defined).',
        'Tree testing is evaluative — it happens AFTER a structure has been proposed, giving users specific "find this" tasks within a plain, visual-design-free hierarchy (usually just labeled text) to isolate whether the structure itself works, independent of visual polish.',
        'Running these two methods in sequence — card sort first to build a structure, then tree test to validate it — is a common, well-evidenced IA workflow.',
      ]},
    ],
    examples: [
      { label: 'Example · An open card sort with 15 users on 40 features', text: 'An open card sort on 40 product features can reveal that users naturally group "SIP" with "Goals" rather than with "Transactions" — a grouping the internal team, organized around backend systems, would never have arrived at independently.' },
      { label: 'Example · Tree-testing a proposed navigation before building it', text: 'Before any visual design work begins, giving users the task "find where to update your bank account" within a plain text-based hierarchy isolates whether the proposed structure itself is findable — completely separate from whether the eventual visual design is polished or not.' },
    ],
    mistake: 'Skipping tree testing because the visual design already looks finished and polished — a beautifully designed screen built on a structurally confusing hierarchy is still a structurally confusing hierarchy, just with better paint on top.',
    interview: 'Naming which method you\'d use at which project stage, and why, is the specific fluency being tested — "generative to discover structure, evaluative to validate it" is the concise version.',
    related: ['c046'],
  },
  c048: {
    id: 'c048', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 12 — Information Architecture',
    title: 'Navigation & Wayfinding',
    def: 'Wayfinding is the broader discipline of helping people understand where they are, where they can go, and how to get back — navigation menus are just one tool within that larger goal.',
    why: 'Good wayfinding means a user should never feel lost within a product; this concept elevates "add a nav bar" into a genuine design discipline about location awareness across an entire experience, not just a single component choice.',
    blocks: [
      { t: 'ul', items: [
        'Users need to answer three questions at any point: where am I? where can I go? how do I get back to where I was?',
        'Breadcrumbs, highlighted active nav states, and clear page titles all serve the "where am I" question specifically.',
        'A consistent, predictable back-path (browser back button, an explicit back arrow, a clear "Cancel" or "Close") serves the "how do I get back" question, and its absence is one of the most common sources of user anxiety in deep, multi-step flows.',
      ]},
      { t: 'p', text: 'Organizing navigation around actual user tasks and mental models (Pay, Save, Invest, Borrow) rather than internal organizational structure (Retail Liabilities Division, Cards Division) is the single most common and costly wayfinding mistake in large, siloed organizations — see the related Enterprise UX material for more on this specific failure pattern.' },
    ],
    examples: [
      { label: 'Example · Amazon\'s shallow depth despite massive scale', text: 'Amazon organizes millions of products so that almost nothing is more than roughly three taps from the home screen, relying on strong search and broad categories rather than deep hierarchy — proving that wayfinding at scale is a structural choice, not an inevitable casualty of having a lot of content.' },
      { label: 'Example · A five-tap path to a common action', text: 'If stopping a recurring payment requires Profile → Investments → Active → SIP → Manage → Stop (five levels deep), most users will give up and call customer support instead of self-serving — every support-ticket topic like this is effectively a wayfinding failure report, hiding in plain sight.' },
    ],
    mistake: 'Structuring navigation around how the backend or organization is divided internally, rather than around the tasks and mental models real users actually bring to the product — the classic large-enterprise IA failure.',
    interview: 'Whiteboard exercises frequently expose wayfinding depth in the "journey" step — narrating a flow aloud and hitting an implausibly deep navigation path is a real, visible tell interviewers watch for.',
    related: ['c010', 'c046'],
  },
  c049: {
    id: 'c049', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 12 — Information Architecture',
    title: 'Search & Faceted Filtering',
    def: 'Search lets users find content by describing what they want directly; faceted filtering lets users narrow a large set of results by progressively selecting attributes (price range, category, size) rather than typing a query.',
    why: 'For any content set beyond a small handful of items, the combination of good search and good faceted filtering usually outperforms even a very well-designed navigation hierarchy alone — this is a common, evidence-backed IA decision point.',
    blocks: [
      { t: 'ul', items: [
        'Search works best when users know roughly what they\'re looking for and can name it (a specific product, a specific document).',
        'Faceted filtering works best when users are exploring a space they don\'t have precise vocabulary for yet, narrowing gradually by attributes (price, size, brand, rating) rather than a single query.',
        'The two should typically coexist rather than being an either/or choice — search to jump directly when the user knows what they want, facets to narrow when they\'re still exploring.',
      ]},
      { t: 'p', text: 'A critical, frequently-overlooked detail is designing a genuinely good empty/zero-results state for search — a bare "no results found" is a dead end, while showing related items, suggesting a spelling correction, or offering to broaden the filters turns a failure moment into a recovery path.' },
    ],
    examples: [
      { label: 'Example · An enterprise document search returning zero results', text: 'A search for a slightly misspelled internal document name returning a bare "No results found" forces the user to guess at the correct spelling repeatedly. Suggesting "Did you mean..." or showing the most similar documents by fuzzy match turns a dead end into a successful recovery.' },
      { label: 'Example · Progressive faceted filtering on a shopping site', text: 'A user exploring "office chairs" without a specific model in mind is served well by progressively narrowing facets — price range, then material, then adjustable-height — rather than needing to type an exact search query for something they don\'t yet have precise words for.' },
    ],
    mistake: 'Shipping a search feature with no meaningful empty-state design, treating "no results found" as an acceptable dead end rather than an opportunity to recover the user\'s task.',
    interview: 'Being asked to design a search experience in a whiteboard round almost always includes an implicit test of whether you design the zero-results state deliberately, or only the happy path.',
    related: ['c048'],
  },
  c050: {
    id: 'c050', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 13 — Flows & Screen States',
    title: 'User Flows & Red Routes',
    def: 'A user flow is a diagram of every path (including error and edge-case paths) a user can take through a task; a "red route" is one of the small number of critical journeys that receive the vast majority of design and QA attention.',
    why: 'Flows should always be produced before individual screens, because structural problems (a dead end, a missing error path) are far cheaper to fix in a simple diagram than after high-fidelity screens have already been built around a flawed structure.',
    blocks: [
      { t: 'ul', items: [
        'A complete flow includes not just the happy path but every realistic branch: what if the payment fails? what if there\'s no data? what if the user backs out halfway through?',
        'Red routes — the four or five most critical journeys in a product (e.g., book a ride, track a ride, pay, rebook) — deserve a large majority of total design polish and QA attention; secondary settings screens get comparatively less.',
        'Mapping unhappy paths (payment failure, no available inventory, a required field left blank) is frequently the majority of the real design work on a feature, and is the part most often skipped under time pressure.',
      ]},
    ],
    examples: [
      { label: 'Example · A ride-booking app\'s red routes', text: 'Book, track, pay, and rebook are the four or five journeys that receive the overwhelming majority of a ride-hailing app\'s design and testing effort — settings and account-management screens, while still designed properly, receive proportionally far less.' },
      { label: 'Example · Mapping a guest-booking unhappy path', text: 'Explicitly mapping what happens when someone books a ride for a family member rather than themselves — a genuine, common edge case — is exactly the kind of unhappy-path work that gets skipped under deadline pressure, and is exactly the kind of work a strong flow diagram forces the team to confront before screens are built.' },
    ],
    mistake: 'Jumping straight into designing high-fidelity screens for only the happy path, discovering major structural gaps (no error state, no way to go back) only after significant visual design work has already been invested.',
    interview: 'The "journey" step of a whiteboard exercise is scored heavily on whether you narrate at least one unhappy path aloud, unprompted — this is one of the clearest, most commonly cited fail signals when skipped.',
    related: ['c051'],
  },
  c051: {
    id: 'c051', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 13 — Flows & Screen States',
    title: 'The Five Screen States',
    def: 'Every screen that displays data has at least five distinct states to design: empty, loading, ideal, partial/stale, and error — and most design reviews only ever look at the "ideal" one.',
    why: 'This is one of the most repeated, practical checklists in the entire discipline, precisely because it is so frequently and easily skipped — presenting only the ideal state in a design review is one of the most common gaps a rigorous critique will catch immediately.',
    blocks: [
      { t: 'diagram', id: 'states', caption: 'Every screen needs all five states designed — not just the one shown in reviews.' },
      { t: 'ul', items: [
        'Empty — before any data exists yet. This is secretly an onboarding moment, not just an absence — a well-designed empty state teaches the user what to do next.',
        'Loading — while data is being fetched; needs a skeleton or spinner, not a blank flash (see the Doherty Threshold).',
        'Ideal — the fully-populated, everything-worked state most commonly shown in design reviews and marketing screenshots.',
        'Partial or stale — some data is missing, outdated, or cached; the interface should be honest about this rather than presenting stale data as current.',
        'Error — something failed; the interface should say what happened and, wherever possible, how to fix it.',
      ]},
    ],
    examples: [
      { label: 'Example · A portfolio screen, five different ways', text: 'A first-time user\'s portfolio screen (empty — genuinely their one shot at activation), a returning user\'s screen mid-fetch (loading — skeleton), a fully-loaded normal day (ideal), a market-holiday screen showing yesterday\'s prices (partial/stale — needs an honest flag), and an API-failure screen (error — cached data plus a clear banner) are five entirely different design problems living on what looks like "one screen" in a spec document.' },
      { label: 'Example · An empty watchlist as onboarding', text: 'A brand-new, empty investment watchlist shouldn\'t show a generic sad illustration — it should actively teach fund discovery, functioning as an onboarding moment disguised as an empty state.' },
    ],
    mistake: 'Presenting and reviewing only the ideal state, both internally and to stakeholders — a "states review" covering all five before every handoff is one of the cheapest, highest-leverage QA steps design can perform.',
    interview: '"What are the five states every screen needs?" is asked nearly verbatim in interviews — being able to list all five cold, unprompted, is table stakes for a senior candidate.',
    related: ['c050'],
  },
  c052: {
    id: 'c052', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 13 — Flows & Screen States',
    title: 'Empty States as Onboarding',
    def: 'The deliberate design principle that an empty state — before any user data exists — is secretly one of the highest-leverage onboarding moments in a product, not just an absence of content to apologize for.',
    why: 'Most teams treat empty states as an afterthought (a generic illustration with "nothing here yet"), missing a genuine opportunity to teach a brand-new user exactly what to do next, at the precise moment they are most receptive to learning it.',
    blocks: [
      { t: 'p', text: 'A first-time empty state is often the very first meaningful screen a new user encounters after signup — it is prime real estate for teaching the core action, not a placeholder to minimize. A well-designed empty state explains what will appear here, why it\'s valuable, and gives a clear, immediate call to action to populate it, effectively doing onboarding work without a separate, interruptive tutorial.' },
      { t: 'ul', items: [
        'A generic "no items yet" with a sad-face illustration wastes this moment entirely.',
        'A strong empty state names the specific first action ("Add your first fund to start tracking performance") and often includes a prominent, obvious button to do exactly that.',
        'Different empty-state causes deserve different messaging: "you haven\'t created any yet" (first-time) is a different moment than "your search returned nothing" (zero-results) — conflating them into one generic template misses the specific opportunity each one offers.',
      ]},
    ],
    examples: [
      { label: 'Example · A team-collaboration tool\'s empty channel', text: 'A brand-new, empty channel in a team-messaging tool actively prompts the user to invite teammates and describes what will start appearing once they do — using the empty state itself to drive the core activation action, rather than leaving a blank space for the user to figure out alone.' },
      { label: 'Example · An empty investment watchlist', text: 'Rather than a generic "nothing here" message, an empty watchlist can actively teach fund discovery — surfacing a few popular or recommended funds to add, turning a blank moment into guided activation instead of a dead end.' },
    ],
    mistake: 'Treating every empty state with the same generic "nothing here yet" template, regardless of whether the cause is a brand-new user, a filtered search, or a genuinely empty result — each deserves distinct, purposeful messaging.',
    interview: 'Being asked for an example of "delightful" design, an empty-state-as-onboarding example is a strong, substance-backed answer, versus a purely decorative example that has no functional job to do.',
    related: ['c019', 'c051'],
  },
  c053: {
    id: 'c053', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 13 — Flows & Screen States',
    title: 'Error Prevention & Recovery',
    def: 'Two related but distinct disciplines: Error Prevention stops mistakes before they happen through careful design; Error Recovery helps users understand and fix a mistake gracefully once it has already occurred.',
    why: 'These map directly to two of Nielsen\'s ten usability heuristics, and are frequently tested together in critique rounds, since a mature interface needs both — prevention reduces how often errors happen, recovery determines how bad it feels when they inevitably still do.',
    blocks: [
      { t: 'ul', items: [
        'Prevention techniques: disabling a submit button until required fields are valid, confirming a large or unusual amount with the value spelled out in words, using input masks that only accept valid formats.',
        'Recovery techniques: specific, actionable error messages ("this PAN is already registered — log in instead?") rather than generic codes ("Error 403"); preserving already-entered form data rather than clearing it on a failed submission; offering a clear undo wherever the action is reversible.',
        'The best recovery messages state both what happened and exactly what to do next — one without the other leaves the user either confused or stuck.',
      ]},
    ],
    examples: [
      { label: 'Example · Confirming a large transaction in words', text: 'Requiring a user to see "₹1,00,000 (One lakh rupees)" spelled out in words, not just digits, before confirming a large transfer is a prevention technique that catches a common typo-driven error (an extra zero) before it becomes an actual mistake, not after.' },
      { label: 'Example · A specific, actionable duplicate-registration error', text: '"This PAN is already registered — log in instead?" recovers the user immediately by naming the problem and the fix in one sentence. A generic "Error 403: Forbidden" abandons them with no path forward at all, even though both messages might be technically triggered by the identical underlying condition.' },
    ],
    mistake: 'Clearing an entire form\'s entered data after a single field fails validation — this punishes the user for one small mistake by forcing them to redo unrelated, already-correct work, which is a common and entirely avoidable failure.',
    interview: 'A critique round will often present a raw error screen and ask you to redesign the message — a strong answer states what happened, why, and the specific next step, in plain language.',
    related: ['c012', 'c050'],
  },

  c054: {
    id: 'c054', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 14 — Interaction & Motion',
    title: 'Micro-interactions (Saffer)',
    def: 'Small, contained moments of interaction design — a single toggle, a pull-to-refresh, a "like" animation — each with a trigger, rules, feedback, and loops/modes, a framework popularized by Dan Saffer.',
    why: 'Micro-interactions are where a product\'s craft quality is most immediately felt — they are small enough to seem trivial, but their cumulative effect is a huge part of what makes a product feel "polished" versus merely functional.',
    blocks: [
      { t: 'ul', items: [
        'Trigger — what starts the micro-interaction (a tap, a state change, a system event like a completed download).',
        'Rules — what happens once triggered, and in what order or constraints.',
        'Feedback — how the user perceives that it\'s happening (motion, sound, haptic, visual change).',
        'Loops/Modes — what happens on repetition, or in edge-case modes (what happens if the same toggle is tapped rapidly ten times in a row?).',
      ]},
      { t: 'p', text: 'The discipline of designing a micro-interaction is thinking through all four parts deliberately, including the unglamorous edge cases (loops/modes) that are easy to skip — a toggle that looks great tapped once but breaks visually when tapped rapidly is an incomplete micro-interaction design, not just an edge case to patch later.' },
    ],
    examples: [
      { label: 'Example · A "like" button animation', text: 'The trigger is a tap; the rule is the icon fills and briefly scales up; the feedback is a quick color change plus a small bounce; the loop/mode consideration is what happens if the user taps it rapidly to un-like and re-like — does the animation queue awkwardly, or does it interrupt gracefully? Designing that last part deliberately is what separates a considered micro-interaction from an incomplete one.' },
      { label: 'Example · Pull-to-refresh', text: 'The trigger is a downward drag past a threshold; the rule is a loading indicator appears and content refreshes; the feedback is often a small custom animation (a spinning brand mark); the loop/mode consideration is what happens if a user pulls repeatedly before the first refresh completes.' },
    ],
    mistake: 'Designing only the primary, single-use case of a micro-interaction and never testing or considering its rapid-repeat or interrupted-mid-animation behavior — this is where polished-looking prototypes often fall apart once real, imperfect usage begins.',
    interview: 'Being asked to design a small interaction live and being able to walk through trigger/rules/feedback/loops explicitly (not just describe the visual) demonstrates structured interaction-design thinking.',
    related: ['c055'],
  },
  c055: {
    id: 'c055', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 14 — Interaction & Motion',
    title: 'Motion Principles',
    def: 'A small set of animation principles — duration, easing, choreography, and purpose — that determine whether motion in an interface feels natural and informative, or distracting and cheap.',
    why: 'Motion is one of the most frequently over- or under-used tools in interface design; understanding the underlying principles (borrowed partly from traditional animation) is what separates purposeful motion from decorative motion added "because it looks modern."',
    blocks: [
      { t: 'ul', items: [
        'Duration — standard UI transitions typically run 200–300ms; larger, more dramatic movements can run 300–400ms; anything much beyond 500ms starts to feel sluggish and broken, not deliberate.',
        'Easing — natural motion accelerates and decelerates rather than moving at a constant speed (ease-out is standard for elements entering the screen, since it feels like the element is settling into place).',
        'Choreography — when multiple elements move together, staggering their timing slightly (rather than all moving in perfect unison) reads as more natural and helps establish a spatial relationship between them.',
        'Purpose — the best test for any animation is whether it communicates something real (where an element came from, what caused a change, what state something is now in) — motion added purely for visual flourish with no informational job tends to feel gratuitous on repeat viewing.',
      ]},
    ],
    examples: [
      { label: 'Example · A card expanding into a detail view', text: 'Animating a tapped card smoothly growing into its full detail screen (rather than an instant hard cut) communicates spatial continuity — the user understands exactly where the new screen "came from," which a plain cut does not convey.' },
      { label: 'Example · Overused loading animations', text: 'An elaborate, lengthy brand animation shown on every single loading screen feels delightful the first time and actively annoying the fiftieth time a frequent user sees it — motion designed for a one-time "wow" moment often needs to be shortened or reduced for high-frequency, repeat contexts.' },
    ],
    mistake: 'Adding motion purely to seem modern or polished, with no actual informational job — this tends to feel gratuitous on repeated viewing rather than delightful, and adds unnecessary friction for users who\'d rather move quickly.',
    interview: 'Being able to explain WHY a specific transition duration or easing curve was chosen, in terms of what it communicates, rather than "it looked nice," demonstrates real motion-design literacy.',
    related: ['c054'],
  },
  c056: {
    id: 'c056', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 14 — Interaction & Motion',
    title: 'Feedback Hierarchy',
    def: 'The principle that different types of system feedback deserve different levels of visual and interruptive weight, matched to how important and how urgent the information actually is.',
    why: 'Treating every notification, confirmation, and alert with the same visual weight is one of the most common ways a product trains users to ignore ALL of its feedback, including the messages that genuinely matter.',
    blocks: [
      { t: 'ul', items: [
        'Passive/ambient feedback (a subtle color change, a small badge) suits low-stakes, informational updates.',
        'Toasts and snackbars suit confirmations that don\'t require action but should be briefly acknowledged ("Message deleted · Undo").',
        'Modal dialogs suit genuinely high-stakes moments that require an explicit decision before the user can proceed.',
        'Reserving the most interruptive feedback (modals, full-screen alerts) for genuinely rare, high-stakes moments keeps that heightened attention meaningful when it does appear.',
      ]},
    ],
    examples: [
      { label: 'Example · Modal-izing every confirmation', text: 'An app that shows a full interruptive modal for both "your file was saved" and "this action will permanently delete your account" trains users to reflexively dismiss modals without reading them — by the time the genuinely dangerous one appears, the habit of ignoring modals is already fully formed.' },
      { label: 'Example · A calibrated feedback hierarchy', text: 'A well-designed system uses a quiet toast for routine saves, a slightly firmer inline warning for a recoverable mistake (an invalid form field), and reserves a full modal exclusively for irreversible, high-stakes actions — so a modal appearing at all is itself a signal to pay close attention.' },
    ],
    mistake: 'Using the same interruptive pattern (typically a modal) for both routine confirmations and genuinely dangerous actions, which erodes the signal value of the more serious pattern over time.',
    interview: 'Critiquing an app\'s notification design in terms of whether its feedback hierarchy is calibrated (not just whether individual messages are well-worded) is a more advanced, systems-level observation.',
    related: ['c012'],
  },
  c057: {
    id: 'c057', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 14 — Interaction & Motion',
    title: 'Forms & Validation',
    def: 'The design of data-entry interfaces and the rules that check entered data — covering field types, labeling, grouping, and when and how errors are surfaced to the user.',
    why: 'Forms are among the highest-friction, highest-abandonment surfaces in most products, and form design is one of the most concretely, measurably improvable areas of craft — small changes here often produce large, trackable conversion effects.',
    blocks: [
      { t: 'ul', items: [
        'Labels should be persistently visible above or beside the field, never used as a placeholder that disappears the moment the user starts typing — this violates recognition-over-recall and causes users to forget what a field was for mid-entry.',
        'Validate inline, as close to the moment of the actual mistake as possible, rather than only on final submission — this is both a prevention and a recovery technique working together.',
        'Group related fields visually (billing versus shipping address) using proximity and common region, and chunk long forms into a few short steps rather than one long scroll (Miller\'s Law in direct application).',
        'Only mark fields required if they are genuinely required — every unnecessary required field is friction with no offsetting value.',
      ]},
    ],
    examples: [
      { label: 'Example · Placeholder-as-label', text: 'A form using placeholder text ("Enter your email") instead of a persistent label above the field means the moment a user starts typing, they lose the reminder of what that field was for — a serious problem for anyone interrupted mid-form, and a well-documented, common form anti-pattern.' },
      { label: 'Example · Real-time inline validation', text: 'Showing a green checkmark the instant a password meets its requirements (rather than only revealing failure after a full form submission) turns validation into a fast feedback loop instead of a frustrating, delayed rejection.' },
    ],
    mistake: 'Using placeholder text as the only label for a field — one of the most common, well-documented, and easily-avoided form design mistakes in the entire discipline.',
    interview: 'A live craft round frequently includes building or critiquing a form — correctly identifying label, validation-timing, and chunking issues in a real example is directly assessed craft skill.',
    related: ['c006', 'c053'],
  },
  c058: {
    id: 'c058', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 15 — Content & UX Writing',
    title: 'Clarity over Cleverness',
    def: 'The core UX writing principle that interface copy should always prioritize being instantly, unambiguously understood over being witty, clever, or brand-voiced — especially at moments of real consequence.',
    why: 'Clever copy that requires a moment of decoding is a genuine usability cost, not just a stylistic risk — this principle is why UX writing is treated as a distinct discipline from marketing or brand copywriting, with different priorities entirely.',
    blocks: [
      { t: 'p', text: 'Marketing copy is read once, in a low-stakes moment, and rewards personality and memorability. Interface copy is often read under time pressure, sometimes at a moment of real stress (an error, a payment, a legal disclosure), and any ambiguity has an immediate, measurable usability cost. This doesn\'t mean interface copy must be robotic — voice and personality absolutely have a place — but clarity should never be sacrificed for it, especially in error messages, confirmations, and anything involving money, data, or irreversible actions.' },
      { t: 'ul', items: [
        'Say exactly what will happen, in plain language, especially for irreversible or consequential actions.',
        'Save clever, brand-voiced copy for low-stakes, delightful moments (an empty state, a celebratory success screen) where ambiguity carries no real cost.',
        'When in doubt, test the copy by asking whether someone under time pressure or stress would understand it in one read.',
      ]},
    ],
    examples: [
      { label: 'Example · A clever but ambiguous delete confirmation', text: 'A button labeled "Yes, I\'m ready to let go" for deleting a financial record is memorable, but genuinely ambiguous about the actual consequence in a moment where clarity matters most. "Delete this transaction permanently" is far less clever and considerably safer.' },
      { label: 'Example · Personality in a low-stakes empty state', text: 'A playful, on-brand line in an empty search-results state ("Hmm, we looked everywhere and came up empty-handed") carries essentially zero risk, since there\'s no consequential decision riding on it being perfectly precise — this is exactly where voice and personality can safely live.' },
    ],
    mistake: 'Applying the same "fun, on-brand" voice uniformly across every piece of copy in the product, including error messages and irreversible-action confirmations, where ambiguity has a real and measurable cost.',
    interview: 'Being asked to rewrite a piece of interface copy live is a common craft-adjacent exercise — prioritizing plain clarity for anything consequential, while allowing personality in genuinely low-stakes moments, is the expected judgment.',
    related: [],
  },
  c059: {
    id: 'c059', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 15 — Content & UX Writing',
    title: 'Voice & Tone',
    def: 'Voice is a product\'s consistent underlying personality across all its writing; Tone is how that same voice is adjusted moment to moment based on the emotional context of a specific situation.',
    why: 'This distinction — one fixed voice, many contextual tones — is the practical answer to "shouldn\'t our copy always sound the same?" and is frequently tested in content-strategy and UX-writing interview questions.',
    blocks: [
      { t: 'p', text: 'A product\'s voice might be described as "warm, direct, and a little playful" — and that description holds true whether the moment is celebratory or serious. But the TONE used to express that same voice shifts: playful and light during a success celebration, warm but restrained and serious during an error or a financial-loss disclosure. The voice never changes; how it is expressed contextually does.' },
      { t: 'ul', items: [
        'A consistent voice across every touchpoint (app, emails, support messages) builds trust and brand recognition over time.',
        'Tone must flex with context — the exact same playful voice that suits an onboarding welcome message would read as tone-deaf in a payment-failure error message.',
      ]},
    ],
    examples: [
      { label: 'Example · The same voice, two different tones', text: 'A brand voice described as "warm and direct" might sound like "Nice! You\'re all set 🎉" in a success moment (playful tone) and "We couldn\'t process your payment — let\'s try again" in a failure moment (calm, direct tone, personality dialed back) — both are recognizably the same underlying voice, expressed with different emotional weight for the situation.' },
      { label: 'Example · Tone-deaf consistency', text: 'A brand voice guideline applied too literally and uniformly — using the exact same exclamation-point-heavy enthusiasm in a fraud-alert message as in a welcome email — reads as jarring and inappropriate, because it fails to adjust tone to the seriousness of the moment.' },
    ],
    mistake: 'Treating "consistent voice" as meaning "identical tone in every single message," rather than understanding voice as the constant and tone as the deliberately variable, context-sensitive layer on top of it.',
    interview: 'Explaining how the same underlying brand voice should sound different in a celebration versus an error message is a concise, effective way to demonstrate this distinction live.',
    related: ['c058'],
  },
  c060: {
    id: 'c060', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 15 — Content & UX Writing',
    title: 'Error Message Design',
    def: 'The specific craft of writing error messages that state what happened, why (if useful), and exactly what the user should do next — as a distinct discipline from general UX writing.',
    why: 'Error messages are read at a uniquely high-stress moment, making them one of the highest-leverage, most consequential pieces of copy in an entire product — and they are also, empirically, one of the most neglected.',
    blocks: [
      { t: 'ul', items: [
        'State what happened, in plain language, avoiding internal system jargon or raw error codes the user has no way to act on.',
        'State the next step explicitly whenever possible — a fixable error message without a clear next action leaves the user stuck exactly when they most need direction.',
        'Avoid blaming language ("You entered an invalid value") in favor of neutral, helpful framing ("That doesn\'t look like a valid phone number — check the country code?").',
        'Preserve any already-entered data rather than clearing the whole form, so the user only has to fix the actual problem, not redo everything.',
      ]},
    ],
    examples: [
      { label: 'Example · Turning a raw error code into a helpful message', text: '"Error 403: Forbidden" tells the user nothing actionable. "This document requires manager approval — request access below" states what happened and gives an immediate, concrete next step in the same breath.' },
      { label: 'Example · A duplicate-registration error with a path forward', text: '"This PAN is already registered — log in instead?" turns what could have been a dead-end error into an immediate, one-tap recovery path, converting a moment of frustration into a successful task completion.' },
    ],
    mistake: 'Surfacing a raw technical error code or an internal system message directly to the user, leaving them with information they have no way to act on and no clear next step.',
    interview: 'Being handed a raw, unhelpful error message and asked to rewrite it live is a very common craft/writing exercise — a strong answer always includes both the plain explanation and the specific next action.',
    related: ['c053'],
  },
  c061: {
    id: 'c061', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 15 — Content & UX Writing',
    title: 'Microcopy for Trust',
    def: 'The small, easily-overlooked pieces of interface text — button labels, helper text, tooltips, disclosures — that disproportionately shape whether a user trusts a product at moments of genuine uncertainty.',
    why: 'A single word choice at the right (or wrong) moment can measurably change conversion and trust — this is why experienced UX writers treat microcopy as a craft discipline in its own right, not an afterthought filled in once the layout is done.',
    blocks: [
      { t: 'ul', items: [
        'Translate system language into human language: "Money will reach your bank in 2 business days" builds far more trust than "T+2 settlement," even though both convey identical information.',
        'Answer the anxious question the user is silently asking at that moment — a payment screen\'s helper text answering "is this safe?" directly, rather than leaving the user to wonder, measurably reduces drop-off.',
        'Be specific rather than vague wherever possible — "Delivered by Thursday" builds more trust than a vague "Delivered soon," because specificity signals genuine confidence rather than hedging.',
      ]},
    ],
    examples: [
      { label: 'Example · Demystifying settlement time', text: 'Replacing internal banking jargon ("T+2 settlement") with plain, reassuring language ("Your money will reach your bank account within 2 business days") removes a small but real moment of uncertainty exactly when a user is trusting the product with their money.' },
      { label: 'Example · A helper line addressing silent anxiety directly', text: 'Adding "Your card details are encrypted and never stored on our servers" directly beneath a payment field addresses the specific anxious question many users are silently asking at that exact moment, rather than leaving them to either trust blindly or abandon the flow.' },
    ],
    mistake: 'Filling in microcopy as an afterthought late in the design process, using whatever generic placeholder text is fastest, rather than treating it as a deliberate trust-building opportunity worth genuine craft attention.',
    interview: 'Pointing to a specific moment of user anxiety in a flow and proposing the exact microcopy that would address it directly is a strong, concrete way to demonstrate this skill in a critique.',
    related: ['c058'],
  },
  c062: {
    id: 'c062', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 16 — Accessibility',
    title: 'WCAG POUR Principles',
    def: 'The four foundational principles underlying the Web Content Accessibility Guidelines: Perceivable, Operable, Understandable, and Robust — every specific WCAG success criterion falls under one of these four umbrellas.',
    why: 'Knowing POUR gives you a mental framework to reason about accessibility from first principles, rather than needing to memorize every individual success criterion — interviewers use it to check conceptual understanding, not just rule memorization.',
    blocks: [
      { t: 'ul', items: [
        'Perceivable — information must be presentable to users in ways they can perceive (sufficient color contrast, text alternatives for images, captions for video).',
        'Operable — interface components must be operable by all users (full keyboard navigability, no content that flashes in a way that could trigger seizures, enough time to complete tasks).',
        'Understandable — information and interface operation must be understandable (readable, plain-language text; predictable, consistent navigation; helpful error identification).',
        'Robust — content must be robust enough to be interpreted reliably by a wide range of tools, including assistive technologies like screen readers, both now and as those technologies evolve.',
      ]},
    ],
    examples: [
      { label: 'Example · A contrast failure as a Perceivable violation', text: 'Light-gray text at 2.5:1 contrast on a white background fails specifically under the Perceivable principle — the information exists, but a meaningful number of real users physically cannot perceive it clearly.' },
      { label: 'Example · A mouse-only interaction as an Operable violation', text: 'A custom dropdown or drag-and-drop interaction that only responds to mouse events, with no keyboard equivalent at all, fails under Operable — regardless of how visually clear or well-contrasted it is, a keyboard-only user simply cannot operate it.' },
    ],
    mistake: 'Treating accessibility as a single, undifferentiated checklist to satisfy after design is complete, rather than reasoning through which of the four POUR principles a specific decision might be putting at risk during the design process itself.',
    interview: 'Being able to categorize a specific accessibility issue under Perceivable, Operable, Understandable, or Robust — rather than a vague "that\'s not accessible" — signals genuine conceptual fluency, not memorized rule-following.',
    related: ['c033'],
  },
  c063: {
    id: 'c063', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 16 — Accessibility',
    title: 'Screen Readers & ARIA',
    def: 'Screen readers convert interface content into speech or braille for blind and low-vision users; ARIA (Accessible Rich Internet Applications) is a set of attributes developers add to code so that custom, visually-complex components remain understandable to those screen readers.',
    why: 'Design decisions directly determine whether a screen reader user can actually use a product at all — this is one of the clearest places where design and front-end code responsibility genuinely overlap, and interviewers expect designers to understand the basics, not just leave it entirely to engineering.',
    blocks: [
      { t: 'p', text: 'Native HTML elements (a real button, a real checkbox) come with accessibility built in automatically. Custom-built components (a div styled to look like a button, a custom dropdown built from scratch) need ARIA attributes added explicitly to communicate their role, state, and behavior to a screen reader — without this, a visually perfect custom component can be completely invisible or nonsensical to a screen-reader user, even though it looks identical to a native one sighted.' },
      { t: 'ul', items: [
        'Every meaningful image needs alt text describing its content or purpose — decorative images should be explicitly marked so screen readers skip them rather than reading meaningless filenames aloud.',
        'Custom interactive components need appropriate ARIA roles and states (aria-expanded, aria-selected) so a screen reader can announce what they are and what state they\'re currently in.',
        'Designers don\'t need to write ARIA code themselves, but need to specify these requirements clearly during handoff, and to design components using patterns that map cleanly onto accessible equivalents rather than fighting against them.',
      ]},
    ],
    examples: [
      { label: 'Example · A visually perfect but inaccessible custom dropdown', text: 'A beautifully designed custom dropdown built entirely from styled divs, with no underlying semantic structure or ARIA attributes, may be completely unusable to a screen-reader user — it announces nothing meaningful, even though sighted users experience no problem at all.' },
      { label: 'Example · Missing alt text on a critical icon-only button', text: 'An icon-only "delete" button with no accompanying text label or alt description is announced by a screen reader as simply "button" — giving a blind user zero information about what pressing it will actually do.' },
    ],
    mistake: 'Assuming accessibility is entirely engineering\'s responsibility with no design-time implications — many accessibility failures are actually baked into the design itself (icon-only buttons with no label, custom components built without accessible equivalents in mind) well before any code is written.',
    interview: 'Being able to name a specific ARIA concept (even at a basic level, like aria-label or aria-expanded) shows a designer who understands accessibility as a shared responsibility, not solely engineering\'s problem.',
    related: ['c062'],
  },
  c064: {
    id: 'c064', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 16 — Accessibility',
    title: 'Keyboard & Focus States',
    def: 'The requirement that every interactive element be fully operable using only a keyboard (no mouse), and that the current keyboard focus be clearly, visibly indicated at all times.',
    why: 'Keyboard navigation is essential not only for users who cannot use a mouse due to motor disabilities, but for many power users and anyone with a temporarily broken trackpad — it is one of the most concretely testable accessibility requirements, since you can simply try it yourself with no special tools.',
    blocks: [
      { t: 'ul', items: [
        'Every interactive element must be reachable and operable using Tab, Shift+Tab, Enter, and arrow keys, in a logical, predictable order that matches the visual layout.',
        'A visible focus indicator (commonly an outline or ring) must appear on whatever element currently has keyboard focus — removing this outline for purely visual reasons, a very common mistake, leaves keyboard users with no way to tell where they are on the page at all.',
        'Focus order should follow a logical reading sequence; a focus order that jumps unpredictably around the screen is confusing even when every individual element is technically reachable.',
      ]},
    ],
    examples: [
      { label: 'Example · Removing outline for aesthetics', text: 'A very common and damaging CSS pattern removes the default focus outline (outline: none) purely because designers find the default browser style visually unappealing, without replacing it with any custom visible alternative — leaving keyboard users with literally no way to see where they are on the page.' },
      { label: 'Example · A well-designed custom focus ring', text: 'Replacing the default browser outline with a custom-styled, still highly visible focus ring — matching the product\'s accent color at 2px with a small offset — satisfies both the visual design requirement and the accessibility requirement simultaneously, rather than treating them as in conflict.' },
    ],
    mistake: 'Removing the visible focus indicator without providing any styled replacement, purely for a "cleaner" visual look — this is one of the single most common and most damaging accessibility regressions in real products.',
    interview: 'A simple, practical test any interviewer might ask you to perform live: try navigating the given app using only Tab and Enter, with no mouse — being unable to complete a basic task this way is an immediate, visible failure.',
    related: ['c063'],
  },
  c065: {
    id: 'c065', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 16 — Accessibility',
    title: 'Inclusive & Cognitive Accessibility',
    def: 'Accessibility considerations that go beyond visual and motor disabilities to include cognitive, learning, and attention differences — plain language, predictable structure, reduced unnecessary complexity, and options to reduce distraction.',
    why: 'Cognitive accessibility is frequently underrepresented in accessibility conversations that default to focusing mainly on screen readers and color contrast — but it affects a very large population, including many users with no formal diagnosis who are simply distracted, stressed, or unfamiliar with a domain.',
    blocks: [
      { t: 'ul', items: [
        'Plain language — avoiding unnecessary jargon and complex sentence structure benefits users with cognitive or learning differences, and genuinely benefits every other user as well, especially under stress or time pressure.',
        'Predictable, consistent structure — reducing surprising layout or navigation changes reduces cognitive burden for users who rely on consistent patterns to build confidence and reduce anxiety.',
        'Reducing unnecessary choices and steps directly serves users with cognitive differences, while also being generally good practice for everyone (see Hick\'s Law and Cognitive Load).',
        'Options to reduce motion and distraction (respecting a system-level "prefers-reduced-motion" setting) serve both vestibular disorders and attention differences simultaneously.',
      ]},
    ],
    examples: [
      { label: 'Example · Simplifying a dense legal disclosure', text: 'Rewriting a dense, jargon-heavy financial disclosure into plain, short sentences with clear headers serves users with cognitive or reading differences directly — and independently improves comprehension rates for the entire user base, not just that specific group.' },
      { label: 'Example · Respecting reduced-motion preferences', text: 'Automatically disabling large, sweeping animations and parallax effects for any user with a system-level "reduce motion" preference enabled serves both vestibular-disorder accessibility needs and users who simply find excessive motion distracting or nauseating.' },
    ],
    mistake: 'Treating accessibility work as complete once color contrast and screen-reader support are addressed, without ever considering cognitive load, plain language, or motion sensitivity as accessibility concerns in their own right.',
    interview: 'Naming a cognitive-accessibility consideration specifically (not just visual/motor) in a critique demonstrates a broader, more current understanding of inclusive design than the most commonly cited basics alone.',
    related: ['c006', 'c062'],
  },
  c066: {
    id: 'c066', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 17 — Mobile & Responsive',
    title: 'iOS HIG & Material 3',
    def: 'Apple\'s Human Interface Guidelines (HIG) and Google\'s Material Design 3 are the two dominant platform design systems, each defining native conventions for navigation, components, and interaction patterns that users already have strong expectations for.',
    why: 'Jakob\'s Law applies directly here — deviating from platform convention without a strong reason creates real friction, since users bring years of muscle memory from every other app on that platform.',
    blocks: [
      { t: 'ul', items: [
        'iOS HIG conventions include bottom tab bars for primary navigation, a swipe-from-left-edge gesture for "back," and a general preference for depth and translucency in recent versions.',
        'Material 3 conventions include a bottom navigation bar or navigation rail, filled and tonal button variants, and a strong systematic emphasis on dynamic color theming derived from a user\'s wallpaper or brand palette.',
        'A cross-platform product generally should respect each platform\'s native conventions for navigation and core gestures, while its visual brand identity (color, type, illustration) can remain consistent across both.',
      ]},
    ],
    examples: [
      { label: 'Example · Respecting the iOS back-swipe gesture', text: 'A cross-platform app that overrides or breaks the standard iOS edge-swipe-to-go-back gesture creates real friction for iOS users, who rely on that gesture out of habit across every other app on their phone — regardless of how good the app\'s own custom back button might look.' },
      { label: 'Example · Material 3\'s dynamic color', text: 'An Android app adopting Material 3\'s dynamic color theming (deriving accent colors from the user\'s own device wallpaper) makes the app feel more integrated into that specific user\'s device, at some cost to strict, uniform brand-color consistency — a real trade-off platform teams have to weigh deliberately.' },
    ],
    mistake: 'Building a single, platform-agnostic design and shipping it unchanged on both iOS and Android, ignoring the real differences in navigation conventions and gesture expectations each platform\'s users bring with them.',
    interview: 'Being able to name at least one specific, concrete difference between iOS and Material conventions (not just "they\'re different") signals genuine platform-level craft awareness.',
    related: ['c015'],
  },
  c067: {
    id: 'c067', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 17 — Mobile & Responsive',
    title: 'Touch Targets & Thumb Zones',
    def: 'The minimum tappable size for interactive elements (44×44pt on iOS, 48×48dp on Android) and the concept of "thumb zones" — the areas of a mobile screen that are easy versus hard to reach one-handed.',
    why: 'These are among the most concretely specified, frequently-quizzed numbers in the entire mobile-design discipline, and getting them wrong has a direct, measurable effect on tap-error rates, especially for users with larger fingers or motor impairments.',
    blocks: [
      { t: 'diagram', id: 'touch', caption: 'Touch target anatomy: a 24px icon rendered inside a full 48×48 tappable area.' },
      { t: 'ul', items: [
        'Minimum touch target: 44×44pt on iOS, 48×48dp on Android — the WCAG accessibility floor is technically lower (24×24px) but should be treated as an absolute minimum, not a design target.',
        'The visible icon inside a touch target can be smaller (commonly 24px) as long as the full tappable AREA around it still meets the minimum — padding counts toward the target size, not just the visible glyph.',
        'Thumb zones on a typical one-handed phone grip divide roughly into an easy natural-reach zone (bottom-center), a stretch zone (middle), and a hard-to-reach zone (top corners, especially the opposite corner from the holding hand) — primary actions belong in the easy zone, destructive or rare actions can safely live in the harder-to-reach zone.',
      ]},
    ],
    examples: [
      { label: 'Example · An icon that looks fine but taps poorly', text: 'A 16px icon with almost no surrounding padding may look visually clean, but if its actual tappable area is smaller than 44×44pt, real users — especially those with larger fingers, imprecise motor control, or using the phone one-handed on a moving vehicle — will frequently mis-tap it or an adjacent element.' },
      { label: 'Example · Placing a primary CTA in the thumb-easy zone', text: 'Anchoring a ride-hailing app\'s primary "Book Now" button at the bottom of the screen, within the easy one-handed thumb zone, while placing "Cancel ride" higher and requiring more deliberate reach, directly applies both touch-target sizing and thumb-zone placement together.' },
    ],
    mistake: 'Judging a touch target\'s adequacy purely by how the visible icon looks on screen, without verifying the actual full tappable area (including padding) meets the platform minimum.',
    interview: 'These exact numbers (44×44pt, 48×48dp) are frequently asked cold in interviews — hesitating on them is a notable, easily-avoidable gap for a candidate claiming mobile craft experience.',
    related: ['c013'],
  },
  c068: {
    id: 'c068', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 17 — Mobile & Responsive',
    title: 'Responsive vs Adaptive',
    def: 'Responsive design uses a single fluid layout that reflows continuously to fit any screen size; Adaptive design uses a small number of distinct, fixed layouts, each targeted at specific breakpoints.',
    why: 'Knowing which approach — or which combination — fits a given product is a foundational cross-platform design decision, and interviewers use it to check whether you understand the real trade-off (design and engineering effort versus per-size precision) rather than treating the terms as interchangeable buzzwords.',
    blocks: [
      { t: 'ul', items: [
        'Responsive — one flexible layout using relative units and fluid grids that reflows continuously as the viewport changes; less design effort to maintain, but less precise control at any single specific size.',
        'Adaptive — several distinct, purpose-built layouts, each optimized for a specific device class (mobile, tablet, desktop); more design and engineering effort, but allows real layout restructuring (not just resizing) at each breakpoint.',
        'Most real, mature products use a hybrid: broadly responsive within a device class, with a few genuinely adaptive breakpoints where the layout needs to restructure meaningfully, not just resize (a three-column desktop table collapsing into stacked cards on mobile, for instance).',
      ]},
    ],
    examples: [
      { label: 'Example · A pure reflow versus a real restructure', text: 'A purely responsive approach might just shrink a three-column data table\'s columns as the screen narrows, becoming cramped and hard to read on mobile. A hybrid adaptive breakpoint instead restructures that same table into stacked cards on mobile — a genuine layout change, not just a resize.' },
      { label: 'Example · An enterprise dashboard\'s tablet breakpoint', text: 'An internal analytics dashboard might use a genuinely different, adaptive layout at the tablet breakpoint specifically — collapsing a persistent sidebar into a slide-out drawer — rather than simply letting the desktop layout reflow and shrink awkwardly into that in-between size.' },
    ],
    mistake: 'Treating "responsive" as sufficient for every breakpoint by default, without ever checking whether a genuine layout restructuring (adaptive) is actually needed at a specific, meaningfully different screen size.',
    interview: 'Being able to explain when you\'d reach for a genuine adaptive breakpoint versus relying on responsive reflow alone shows a real, applied understanding of the trade-off, not memorized definitions.',
    related: ['c034'],
  },
  c069: {
    id: 'c069', bookId: 'curr', bookLabel: 'Curriculum · Intermediate', chapter: 'Week 17 — Mobile & Responsive',
    title: 'Notifications & Permissions',
    def: 'The design of push notifications (type, timing, frequency) and the request for system permissions (location, camera, notifications) — both governed by the principle of asking in context, with a clear reason, rather than upfront and unexplained.',
    why: 'Poorly designed permission requests and notification strategies are among the most common, most quickly fatal first impressions a mobile product can make — a rejected permission at launch, with no chance to ask again easily, can permanently disable a whole feature for that user.',
    blocks: [
      { t: 'ul', items: [
        'Pre-permission priming — explaining WHY a permission is needed, in the app\'s own UI, before triggering the native OS permission dialog, significantly improves acceptance rates versus an unexplained system prompt appearing cold.',
        'Ask in context, at the moment the permission is actually needed for a specific action, rather than requesting everything upfront during onboarding before the user has any reason to trust the app yet.',
        'Notification strategy should be segmented by genuine value to the user (a payment confirmation) versus promotional value to the business (a marketing nudge) — treating both with the same frequency and urgency erodes trust in the more valuable category.',
      ]},
    ],
    examples: [
      { label: 'Example · Priming before requesting location access', text: 'Showing a simple in-app screen explaining "We use your location to show nearby delivery options" immediately before triggering the native permission dialog measurably improves acceptance rates compared to the same system dialog appearing with zero explanatory context.' },
      { label: 'Example · Segmenting notification urgency', text: 'A financial app treating a fraud alert and a promotional discount offer with the identical notification style and frequency trains users to dismiss all notifications from the app reflexively — undermining the one category (fraud alerts) that genuinely needs to break through.' },
    ],
    mistake: 'Requesting every permission the app might ever need immediately on first launch, before the user has any context or trust established — this reliably produces the lowest possible acceptance rates and the worst first impression.',
    interview: 'Being asked to design a permission-request flow and choosing to prime in context, rather than batch-requesting everything at onboarding, demonstrates applied understanding of both psychology and platform conventions together.',
    related: ['c019'],
  },

  c070: {
    id: 'c070', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 18 — Design Systems I',
    title: 'Why Systems Exist',
    def: 'A design system exists to let a growing number of people build a consistent, high-quality product faster, by codifying decisions once instead of re-deciding them on every new screen.',
    why: 'Understanding the underlying "why" — not just knowing how to use a component library — is what separates someone who follows a design system from someone who can actually help build, govern, and evolve one, which is exactly the level senior roles require.',
    blocks: [
      { t: 'p', text: 'Without a system, every new screen re-litigates dozens of small decisions (this shade of gray or that one, this button radius or that one), and those tiny inconsistencies compound across a growing product built by a growing team into something that feels fragmented and untrustworthy, even if every individual screen looks fine in isolation. A system doesn\'t just save time — it is literally how a design vision survives contact with dozens of engineers and dozens of releases without eroding.' },
      { t: 'ul', items: [
        'Speed — reusing a vetted component is faster than rebuilding and re-validating one from scratch for every new screen.',
        'Consistency — a shared source of truth means the same concept (a primary action, an error state) looks and behaves the same everywhere.',
        'Quality floor — once accessibility and interaction details are solved correctly once in a shared component, every screen using that component inherits the fix automatically.',
      ]},
    ],
    examples: [
      { label: 'Example · A pre-system product with 7 shades of blue', text: 'An audit of a growing product built without a system commonly finds seven or eight subtly different "primary" blues in use across different screens, each introduced independently by different designers at different times — none wrong in isolation, but collectively signaling a lack of systemic discipline.' },
      { label: 'Example · Fixing an accessibility bug once', text: 'Correcting an insufficient contrast ratio inside one shared, systemized button component instantly fixes that issue everywhere the button is used across the entire product — versus needing to hunt down and separately fix dozens of one-off, hand-built buttons scattered through the codebase.' },
    ],
    mistake: 'Treating a design system as a nice-to-have visual style guide rather than the actual infrastructure that keeps a growing product coherent — under this misunderstanding, systems work is often the first thing cut under deadline pressure.',
    interview: 'Being able to articulate the system\'s ROI in terms of speed, consistency, and quality floor (not just "it looks nicer") demonstrates that you understand systems as an investment, not decoration.',
    related: ['c032', 'c035'],
  },
  c071: {
    id: 'c071', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 18 — Design Systems I',
    title: 'Auto Layout as Flexbox',
    def: 'Modern design tools\' "auto layout" feature is a visual, interactive implementation of the same flexbox concepts (direction, gap, padding, hug/fill) that engineers use in real code — learning it properly means learning to think the way the eventual code will actually be structured.',
    why: 'This is one of the single highest-leverage, most concrete skill gaps between designers who can only produce static-looking mockups and designers who can build genuinely production-ready, responsive components — and it is one of the most commonly probed skills in live craft rounds.',
    blocks: [
      { t: 'ul', items: [
        'Direction — maps directly to flex-direction (row or column): does content stack horizontally or vertically, and does it wrap?',
        'Gap — maps directly to the gap property: consistent spacing between children, from the spacing scale, not manual positioning.',
        'Padding — the internal space between a container\'s edge and its content, same concept in both design tools and code.',
        'Hug vs. Fill — hug means a container sizes itself exactly to its content (like width: fit-content); fill means it stretches to take all available space (like flex-grow: 1) — choosing correctly between these two is what makes a component actually resize gracefully with real, variable content.',
      ]},
      { t: 'p', text: 'A button built correctly with auto layout — horizontal direction, an 8px gap between icon and label, hug-sized both axes, with consistent padding — will resize perfectly and predictably when its label text changes from "Pay" to "Pay ₹1,00,000," exactly the way the real coded component will. A button built with manual, fixed-position elements will break the moment the content changes length.' },
    ],
    examples: [
      { label: 'Example · A button that survives content changes', text: 'A properly auto-layout-built button (hug-sized, with padding and gap as tokens) automatically grows correctly when its label goes from "Pay" to "Pay ₹1,00,000" — this is literally the same underlying flexbox logic the eventual coded component will use, so the design and the build stay honestly in sync.' },
      { label: 'Example · Rebuilding old screens as practice', text: 'A concrete practice protocol for building genuine auto-layout fluency: rebuild ten existing static screens using 100% proper auto layout, with zero manually positioned elements — the first day feels frustratingly slow, but fluency compounds quickly, and most practitioners report being faster than manual positioning within about a week.' },
    ],
    mistake: 'Manually positioning elements with fixed x/y coordinates instead of using auto layout\'s direction/gap/padding/hug-fill model — this produces designs that look correct for one specific piece of content but break the moment real, variable-length content is substituted in.',
    interview: 'Live component-building interview rounds test this directly and immediately — being unable to build a component that resizes correctly with variable content is one of the most visible, concrete craft gaps an interviewer will notice.',
    related: ['c034'],
  },
  c072: {
    id: 'c072', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 18 — Design Systems I',
    title: 'Design Tokens',
    def: 'The smallest, named, reusable units of a design system\'s visual language — colors, spacing, type sizes, radii — stored as data so they can be referenced consistently by name across both design tools and code.',
    why: 'Tokens are the actual mechanism that makes systematic consistency scale — without them, "use this blue" is just a convention people can forget or misapply; with them, it is a literal shared reference both design tools and code point to.',
    blocks: [
      { t: 'diagram', id: 'tokens', caption: 'Token hierarchy: a primitive value flows into a semantic role, which is what components actually consume.' },
      { t: 'ul', items: [
        'Tokens should be named by role, not by literal value — "color-action-primary" survives a full rebrand as a one-line change; "color-blue-600" does not, because the name itself describes the wrong thing once the brand color changes.',
        'A well-built token library is what lets an entire product\'s visual identity update in a single coordinated change, rather than requiring a manual hunt through every individual screen.',
      ]},
    ],
    examples: [
      { label: 'Example · Naming by role versus by value', text: 'A button\'s background token named "color-action-primary" can be safely repointed to a different literal color during a rebrand with zero further changes needed anywhere else in the product. A token literally named "color-blue-600" becomes actively misleading the moment the brand color changes to green, even if its underlying value is updated.' },
      { label: 'Example · A one-line rebrand', text: 'Changing a single primitive token value (the underlying hex code for the brand\'s primary blue) at the token-definition layer instantly and correctly updates every button, link, and active state across the entire product that references the semantic token built on top of it — with zero screen-by-screen manual updates required.' },
    ],
    mistake: 'Naming tokens after their literal value rather than their semantic role — this is the single most common mistake that undermines a token system\'s entire purpose, since it ties every future rebrand back to a manual, error-prone find-and-replace exercise.',
    interview: 'Explaining "primitive versus semantic versus component" token layers, and specifically why role-based naming matters, is a standard, expected design-systems interview answer at senior level.',
    related: ['c032', 'c073'],
  },
  c073: {
    id: 'c073', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 18 — Design Systems I',
    title: 'Primitive → Semantic → Component',
    def: 'The standard three-layer token hierarchy: primitives are raw values, semantics assign those values a named role, and components consume the semantic layer — never the primitive layer directly.',
    why: 'This layered structure is what makes large-scale token systems maintainable, and interviewers use it to check whether you understand tokens as an architecture, not just a flat list of named colors.',
    blocks: [
      { t: 'ul', items: [
        'Primitive layer — raw values with no assigned meaning yet: "blue-600: #1A56DB," part of a full ramp of ten to twelve steps.',
        'Semantic layer — assigns a specific primitive to a named functional role: "color-action-primary" points to blue-600 today, but could point to any primitive in the future without the name itself needing to change.',
        'Component layer — the most specific level, sometimes needed for one-off exceptions: "button-primary-background" references the semantic token, adding a component-specific override only when genuinely necessary.',
        'The rule that makes this architecture work: components should reference semantic tokens, and semantic tokens should reference primitives — never skip a layer by having a component reference a primitive value directly.',
      ]},
    ],
    examples: [
      { label: 'Example · A full rebrand in one change', text: 'Updating the primitive "blue-600" value updates every semantic token built on top of it, which updates every component built on top of those — a full, coordinated visual rebrand achieved with a single change at the primitive layer, precisely because every layer correctly referenced the one above it rather than skipping straight to raw values.' },
      { label: 'Example · A component skipping the semantic layer', text: 'A button component that references the primitive "blue-600" directly, bypassing the semantic "color-action-primary" layer entirely, will NOT update correctly during a rebrand — this is exactly the kind of architectural shortcut that quietly breaks a token system\'s core promise.' },
    ],
    mistake: 'Allowing components to reference primitive values directly "just this once" as a shortcut — these exceptions compound over time into a token system that no longer actually guarantees coordinated, systemic updates.',
    interview: 'Sketching this three-layer hierarchy on a whiteboard and walking through why skipping a layer breaks the system\'s core value proposition is a strong, concrete design-systems interview answer.',
    related: ['c072'],
  },
  c074: {
    id: 'c074', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 19 — Design Systems II',
    title: 'Atomic Design',
    def: 'A methodology (Brad Frost) for structuring a design system in five increasingly complex layers: Atoms, Molecules, Organisms, Templates, and Pages — borrowed loosely from chemistry\'s structure of matter.',
    why: 'Atomic Design gives teams a shared vocabulary for talking about component complexity and reuse, and is one of the most commonly referenced mental models in design-systems interviews and documentation.',
    blocks: [
      { t: 'diagram', id: 'atomic', caption: 'The Atomic Design ladder: atoms combine into molecules, molecules into organisms, organisms are arranged into templates, templates are filled with real content to become pages.' },
      { t: 'ul', items: [
        'Atoms — the smallest indivisible pieces: a single button, a single input, a single label. Cannot be broken down further without losing their function.',
        'Molecules — a small group of atoms combined to do one specific job together: a search input plus its button forms a single functional molecule.',
        'Organisms — a more complex, complete section combining molecules and atoms: a full navigation header, a product card with an image, title, price, and add-to-cart button.',
        'Templates — a page-level layout structure with organisms placed in position, but using placeholder content rather than real data.',
        'Pages — a template filled with real, specific content, representing what a user actually sees.',
      ]},
    ],
    examples: [
      { label: 'Example · Building a search bar bottom-up', text: 'An input field (atom) and a button (atom) combine into a search bar (molecule); that search bar combines with a logo and navigation links into a full header (organism); the header is placed into a homepage template; and the template filled with real, live content becomes the actual homepage a user visits.' },
      { label: 'Example · Reusing organisms across templates', text: 'A single, well-built "product card" organism can be reused unchanged across a homepage template, a search-results template, and a category-listing template — this cross-template reuse is exactly the leverage Atomic Design is designed to produce.' },
    ],
    mistake: 'Treating the five layers as a strict, bureaucratic naming requirement to debate endlessly, rather than as a practical mental model for identifying genuinely reusable pieces at the right level of granularity.',
    interview: 'Being able to classify a given component correctly (atom, molecule, or organism) and explain why demonstrates fluency with this framework as a practical tool, not just terminology.',
    related: ['c070'],
  },
  c075: {
    id: 'c075', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 19 — Design Systems II',
    title: 'Component APIs & Slots',
    def: 'A component\'s "API" is the set of properties (props) that control its variants and behavior; a "slot" is an area within a component designed to accept open, flexible content rather than a fixed, predefined value.',
    why: 'Thinking in terms of component APIs is what lets designers and engineers speak the same language during handoff — a component\'s Figma "variants" and its coded "props" should describe the exact same set of options, not two independently-invented vocabularies.',
    blocks: [
      { t: 'ul', items: [
        'Props/variants control a finite, well-defined set of options: size (small/medium/large), state (default/hover/disabled), type (primary/secondary).',
        'Slots allow genuinely open content where a fixed set of variants wouldn\'t make sense: a card component\'s body slot might need to accept an image, a chart, or plain text, without the card needing a separate hardcoded variant for every possible content type.',
        'A well-designed component API mirrors the coded component\'s actual props one-to-one — matching a design tool\'s variant names to engineering\'s prop names directly makes handoff dramatically cheaper and less error-prone.',
      ]},
    ],
    examples: [
      { label: 'Example · A well-scoped button API', text: 'A button component with a clean, finite API — size (sm/md/lg), variant (primary/secondary/tertiary), state (default/hover/pressed/disabled/loading) — maps directly onto matching props in the coded component, letting an engineer implement it with essentially zero interpretation or guesswork required.' },
      { label: 'Example · A card component\'s content slot', text: 'A card component with a flexible content "slot" can hold a product image, a data chart, or a plain text summary interchangeably, without needing separate hardcoded card variants built for each specific content type — the slot pattern makes the single component genuinely reusable across very different contexts.' },
    ],
    mistake: 'Designing dozens of near-duplicate one-off component variants for every specific use case that arises, instead of designing a smaller number of components with a genuinely flexible slot for open content.',
    interview: 'Being asked to design a component\'s "API" (its variant and prop structure) directly, rather than just its visual appearance, is common in live design-systems interview exercises.',
    related: ['c074'],
  },
  c076: {
    id: 'c076', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 19 — Design Systems II',
    title: 'Variants & States',
    def: 'Variants are the deliberately designed different versions of a component (size, type, emphasis); States are the different conditions a single component can be in based on user interaction or system status — and every interactive component needs both dimensions fully specified.',
    why: 'A frequent, costly gap in real design-system work is variants being fully designed while states are an afterthought — shipping a beautiful default button with no designed disabled, loading, or error state, leaving engineers to guess.',
    blocks: [
      { t: 'ul', items: [
        'Every interactive component needs, at minimum: default, hover, focus, pressed/active, disabled, and — for anything involving asynchronous action — a loading state, and often an error state as well.',
        'Variants and states multiply together: a "large, secondary" button variant still needs all of the same states designed (hover, disabled, loading) as the "small, primary" variant does — skipping this for less-common variant combinations is a very common gap.',
        'Undesigned states don\'t disappear in production — an engineer without a designed disabled state will simply invent one, usually inconsistent with the rest of the system, which then needs to be caught and fixed later at higher cost.',
      ]},
    ],
    examples: [
      { label: 'Example · A missing loading state', text: 'A button with a beautifully designed default, hover, and disabled state, but no designed loading state, forces an engineer to invent one under deadline pressure — often just an inconsistent spinner dropped in ad hoc, which then needs a separate design-QA pass to catch and fix.' },
      { label: 'Example · A full state matrix for a form input', text: 'A properly specified text input component documents default, focus, filled, error, and disabled states together, rather than leaving anything past "default" to engineering\'s best guess — this is the kind of completeness a rigorous pre-handoff design QA checklist explicitly checks for.' },
    ],
    mistake: 'Designing only the default and perhaps hover state of a component and treating the remaining states (disabled, loading, error) as engineering\'s problem to improvise — a components audit should catch this gap before handoff, not after a bug report.',
    interview: 'A design-system craft question will often ask you to list every state a given component needs — being able to enumerate all of them completely and immediately (not just default and hover) is directly assessed.',
    related: ['c075'],
  },
  c077: {
    id: 'c077', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 19 — Design Systems II',
    title: 'Governance & Versioning',
    def: 'Governance is the process by which changes to a design system are proposed, reviewed, and approved; versioning is the practice of tracking those changes over time so consuming teams know exactly what changed and when.',
    why: 'A design system with no governance model tends to rot into an unreliable "UI kit" that different teams quietly diverge from over time — governance and versioning are what keep a system trustworthy and adoptable at real organizational scale.',
    blocks: [
      { t: 'ul', items: [
        'A clear contribution path — how does a team propose a new component or a change to an existing one, and who reviews and approves it — prevents both unchecked chaos (anyone changing anything) and unusable bureaucracy (nothing can ever change).',
        'Semantic versioning (major/minor/patch version numbers) communicates the severity of a change to consuming teams — a breaking change to an existing component\'s API deserves a major version bump and clear migration guidance, not a silent, undocumented update.',
        'A deprecation policy — a clear, time-boxed path for retiring old components or patterns — prevents a system from accumulating an ever-growing pile of legacy patterns nobody is confident enough to remove.',
      ]},
    ],
    examples: [
      { label: 'Example · A system without governance drifting apart', text: 'Without any review process, different product teams within the same company gradually build their own slightly different versions of "the same" button component, each solving a local problem in isolation — within a year, the once-unified system has quietly forked into several incompatible variants nobody coordinated.' },
      { label: 'Example · A breaking change with a clear migration path', text: 'A design system team changing a core spacing token\'s underlying value ships it as a major version bump, with a published migration guide and a deprecation window, giving consuming teams time to test and adopt the change deliberately rather than being silently broken by an untracked update.' },
    ],
    mistake: 'Treating a design system as a static, one-time deliverable rather than an ongoing product with its own release process, changelog, and deprecation policy — this is precisely how systems silently rot into unreliable "UI kits" over time.',
    interview: 'Describing how you\'d handle a breaking change to a widely-used component — the versioning and communication process, not just the design change itself — demonstrates systems-level maturity beyond individual component craft.',
    related: ['c070'],
  },
  c078: {
    id: 'c078', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 20 — Enterprise & B2B UX', wide: true,
    title: 'Role-Based & Permission UI',
    def: 'Designing interfaces where what a user can see and do depends on their assigned role and permissions — a defining structural challenge of enterprise and B2B software that consumer apps rarely need to solve.',
    why: 'A large share of enterprise UX complexity traces directly back to permission modeling — getting this wrong produces either dangerous over-exposure of sensitive actions, or a confusingly locked-down interface that constantly shows options users can\'t actually use.',
    blocks: [
      { t: 'ul', items: [
        'Disabled versus hidden — a genuinely important design decision: should an action a user lacks permission for be hidden entirely, or shown but disabled with an explanation? Hiding avoids clutter and confusion; showing-disabled can help users understand what exists and who to ask for access, at the cost of extra visual noise.',
        'Role complexity should be translated into simple, task-based language for the end user — most users think in terms of "what can I do," not the underlying technical permission matrix.',
        'Designing for the admin who manages roles is itself a distinct, important user experience, separate from designing for the end user constrained by those roles — and it is frequently under-designed relative to its real importance.',
      ]},
    ],
    examples: [
      { label: 'Example · An HR self-service portal', text: 'A regular employee sees only their own leave balance and personal records; their manager additionally sees a team view with approval actions; an HR administrator sees organization-wide records and configuration settings — the same underlying application surfaces three genuinely different experiences based on role, not three separate products.' },
      { label: 'Example · Showing a disabled action with an explanation', text: 'Rather than simply hiding a "publish" button from a user without publishing rights, showing it disabled with a tooltip — "Ask your manager for publishing access" — helps that user understand the system\'s structure and know exactly who to ask, at a small cost in visual clutter.' },
    ],
    mistake: 'Designing only for the top-level admin role during the initial project, then retrofitting lower-permission views later as an afterthought — this frequently produces confusing, inconsistent experiences for the actual majority of daily users, who are rarely admins.',
    interview: 'Enterprise-focused interviews frequently probe permission-UI design directly — being able to discuss the disabled-versus-hidden trade-off with a real example shows genuine B2B design experience, not just consumer-app fluency.',
    related: ['c079'],
  },
  c079: {
    id: 'c079', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 20 — Enterprise & B2B UX',
    title: 'Admin vs End-User Surfaces',
    def: 'The recognition that most enterprise software actually contains two distinct products in one: an admin/configuration surface (used rarely, by a small number of power users) and an end-user surface (used constantly, by everyone else) — and each deserves its own design priorities.',
    why: 'Conflating these two surfaces, or under-investing in the admin one because it\'s used by fewer people, is one of the most common and costly enterprise UX mistakes, since a confusing admin surface creates support burden and misconfiguration that then affects every single end user downstream.',
    blocks: [
      { t: 'p', text: 'End-user surfaces are typically optimized for frequent, fast, low-friction repeated use — the same small set of actions performed constantly. Admin surfaces are typically used less often but at much higher stakes per action (a misconfigured permission or workflow rule can silently break the experience for hundreds of end users at once) — which argues for more deliberate friction, clearer confirmation, and more thorough audit logging on the admin side, not less.' },
      { t: 'ul', items: [
        'Admin surfaces benefit from data-dense, powerful, less "pretty" interfaces — the users are trained specialists who value efficiency and completeness over approachability.',
        'End-user surfaces benefit from simple, opinionated, low-choice defaults — most end users just want the common task to be fast and obvious, not a fully configurable power tool.',
        'A single underlying data model often serves both surfaces, but the actual interface built on top of it should differ substantially in density, tone, and priorities.',
      ]},
    ],
    examples: [
      { label: 'Example · A single misconfiguration, wide impact', text: 'An HR administrator accidentally misconfiguring an approval-routing rule in the admin surface can silently break leave requests for an entire department — this asymmetry of stakes is exactly why admin surfaces deserve more deliberate confirmation and audit-trail design than their comparatively low usage frequency alone would suggest.' },
      { label: 'Example · Designing the two surfaces with different density', text: 'An internal analytics platform might give end users a simple, curated set of pre-built dashboards with minimal configuration options, while giving admins a dense, powerful surface for defining data sources, access rules, and dashboard templates — deliberately different design priorities serving the same underlying system.' },
    ],
    mistake: 'Under-investing design time in the admin surface because it has a much smaller user count than the end-user surface, without recognizing that admin mistakes have an outsized, cascading impact on every end user downstream.',
    interview: 'Being able to describe designing for internal stakeholders (HR, IT, operations teams) as "users" in their own right — not an afterthought behind the primary end-user product — is a specific, valuable enterprise-UX signal.',
    related: ['c078', 'c081'],
  },
  c080: {
    id: 'c080', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 20 — Enterprise & B2B UX',
    title: 'Data-Dense Defaults',
    def: 'The recognition that enterprise and professional users often genuinely prefer dense, information-rich interfaces over the generously-spaced, simplified defaults common in consumer design — because density directly speeds up their expert, repeated workflows.',
    why: 'Applying consumer UX conventions (large whitespace, minimal information per screen) uncritically to expert, high-frequency enterprise tools is a common mismatch — expert users doing the same task hundreds of times a day are often better served by density and information scent than by generous whitespace.',
    blocks: [
      { t: 'ul', items: [
        'Trading platforms, admin dashboards, and other expert tools commonly use tighter row heights (32px "ultra-dense" versus 48px "comfortable"), smaller type, and more information visible per screen than a typical consumer app would.',
        'The underlying design principle hasn\'t actually changed — it\'s still about matching the interface to real user needs and context — but the CONTEXT is different: an expert user performing the same task hundreds of times a day values speed and information density very differently than an occasional consumer user does.',
        'Offering a density preference (comfortable vs. compact) as a genuine, well-designed option serves both expert and occasional users of the same enterprise tool.',
      ]},
    ],
    examples: [
      { label: 'Example · A trading or admin dashboard\'s row height', text: 'An internal admin console used by full-time operations staff for eight hours a day is often genuinely better served by a dense 32–36px table row height showing more records per screen — the generous 48–52px "comfortable" row height common in consumer apps would force excessive scrolling for a task this repetitive.' },
      { label: 'Example · A configurable density toggle', text: 'Offering both a "comfortable" and a "compact" view mode in an internal reporting tool serves occasional users (who benefit from generous default spacing) and power users (who actively prefer maximum information density) within the exact same product, rather than forcing one universal default on both.' },
    ],
    mistake: 'Applying generous, consumer-app-style whitespace defaults to an expert, high-frequency internal tool without checking whether that actually serves the real, repeated workflow of its actual full-time users.',
    interview: 'Being able to justify a density decision based on actual usage frequency and expertise level — rather than assuming consumer-app whitespace conventions apply universally — is a specific enterprise-UX maturity signal.',
    related: ['c079'],
  },
  c081: {
    id: 'c081', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 20 — Enterprise & B2B UX',
    title: 'Internal Stakeholders as Users',
    def: 'The principle that internal teams — HR, IT, operations, compliance, customer support — are genuine "users" deserving of real research, usability consideration, and design quality, not an afterthought behind customer-facing products.',
    why: 'Internal tools are frequently under-resourced relative to customer-facing products, even though poor internal-tool usability has real, compounding costs: slower operations, more errors, and lower morale among the employees using them every single day.',
    blocks: [
      { t: 'p', text: 'A common organizational bias treats external, customer-facing products as "real" design work deserving research and iteration, while internal tools are treated as a lower priority to be built quickly and cheaply — even though employees using an internal tool for eight hours a day are arguably a higher-stakes, higher-frequency user population than many customer-facing use cases. Advocating for internal tools to receive the same research rigor, usability testing, and design quality as external products is a distinct, valuable skill, especially in organizations without a strong existing design culture.' },
      { t: 'ul', items: [
        'Internal-tool usability problems compound daily, at scale, across an entire workforce — a five-minute-per-day inefficiency multiplied across hundreds of employees, every working day, adds up to enormous real cost.',
        'Driving design-culture change from within a company that hasn\'t historically valued internal-tool design well is itself a recognized, distinct skill — often requiring building trust and demonstrating value incrementally rather than demanding investment upfront.',
      ]},
    ],
    examples: [
      { label: 'Example · Quantifying internal-tool cost', text: 'A clunky internal expense-reporting tool costing each employee an extra five minutes per submission seems trivial in isolation, but multiplied across an organization submitting thousands of reports a month, the aggregate lost time becomes a substantial, quantifiable cost — a strong argument for treating internal-tool design with the same rigor as customer-facing work.' },
      { label: 'Example · Building internal design credibility incrementally', text: 'In an organization with no prior history of investing in internal-tool design, running a single small, well-documented usability study on an existing painful internal tool — and showing the concrete time savings from a proposed fix — is often a far more effective way to build organizational buy-in than requesting a large upfront investment before any evidence exists.' },
    ],
    mistake: 'Accepting the common organizational assumption that internal tools don\'t deserve real research or design investment, without ever quantifying the real, compounding cost of poor internal-tool usability across the workforce.',
    interview: 'Describing a real example of advocating for internal-tool design quality — and how you built the case for it — is a specific, valuable story for candidates coming from enterprise or B2B backgrounds.',
    related: ['c078', 'c079', 'c080'],
  },
  c082: {
    id: 'c082', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 21 — Product Thinking', wide: true,
    title: 'Business Models',
    def: 'The mechanism by which a product actually generates revenue — transaction/commission, subscription, advertising, marketplace take-rate, freemium, or asset-based fees — and the recognition that every design decision either feeds or starves that mechanism.',
    why: 'You cannot design responsibly for a product company without understanding how it actually makes money — every design decision is, underneath, also a business decision, whether or not it is labeled as one.',
    blocks: [
      { t: 'ul', items: [
        'Transaction/commission — the platform takes a cut of each transaction; design implication: reducing transaction friction and increasing transaction frequency both directly drive revenue.',
        'Subscription (SaaS) — recurring revenue; the metric that matters most is retention, not just acquisition, since a subscriber who churns after one month is far less valuable than one who stays for years.',
        'Marketplace/commission — revenue depends on both sides of the marketplace (buyers and sellers) being sufficiently liquid; design must serve both sides, not just the more visible one.',
        'Asset/float-based — revenue scales with the value of assets managed over time, not per-transaction; design implication: the highest-leverage work is often reducing friction to invest more and stay invested longer, not any single flashy feature.',
        'Freemium — a free tier drives adoption while a paid tier captures value from the segment willing to pay; where the paywall sits is itself one of the most consequential design decisions in the whole product.',
      ]},
    ],
    examples: [
      { label: 'Example · A collaboration tool\'s freemium paywall placement', text: 'A tool with a generous free tier for individual use but a paywall specifically at team collaboration features has made a deliberate business-model decision: individuals adopt for free, but teams — who derive the real ongoing value and have real budget — are the ones who pay. Where exactly that paywall sits is a design decision with major revenue consequences.' },
      { label: 'Example · Designing for an asset-based revenue model', text: 'For an investment platform earning a percentage of assets under management, the single highest-leverage design work is often reducing friction in the initial investment setup flow and preventing panic-driven withdrawals during market downturns — not, for instance, a rarely-visited settings page, regardless of how much design attention that page might otherwise receive.' },
    ],
    mistake: 'Designing whichever screens you\'ve been asked to work on without ever asking how the company actually makes money and which screens are genuinely highest-leverage for that revenue model — this is a defining difference between service-company execution and product-company judgment.',
    interview: '"How does this company make money, and which three screens matter most for that?" is a question worth being able to answer for any company you interview with, before you ever walk into the room.',
    related: ['c083'],
  },
  c083: {
    id: 'c083', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 21 — Product Thinking',
    title: 'AARRR & North Star',
    def: 'AARRR (Acquisition, Activation, Retention, Referral, Revenue) is a framework for mapping a product\'s entire user funnel; a North Star Metric is the single number that best captures the core value a product delivers to users, which every team\'s work should ultimately ladder up to.',
    why: 'These are two of the most foundational product-metrics frameworks in the entire discipline, and "no metrics instinct" — never volunteering a success metric unprompted — is explicitly cited as a fail signal in senior product-design interview debriefs.',
    blocks: [
      { t: 'ul', items: [
        'Acquisition — how users first arrive at the product.',
        'Activation — the user\'s first genuine experience of core value (this specific moment must be explicitly defined — "signed up" is not the same as "activated").',
        'Retention — whether users come back and keep getting value over time.',
        'Referral — whether users bring others.',
        'Revenue — whether the business is paid, directly or indirectly, for the value delivered.',
      ]},
      { t: 'p', text: 'A North Star Metric must be a leading indicator of real value delivered, never a vanity metric like raw downloads or signups. Airbnb famously uses "nights booked," not signups or searches, because nights booked is the number that most directly reflects genuine value being exchanged between hosts and guests — everything the team builds should, in principle, be justifiable in terms of moving that one number.' },
    ],
    examples: [
      { label: 'Example · Defining activation precisely', text: 'For a mutual-fund investment app, activation isn\'t "created an account" — it is specifically "completed a first investment." Onboarding should be engineered relentlessly toward that precise moment, since a signed-up-but-never-invested user has not yet experienced the product\'s actual core value at all.' },
      { label: 'Example · Choosing a genuine North Star', text: 'For an investment platform, "monthly active recurring investments" is a far better North Star than raw app downloads, because it directly reflects ongoing, genuine value delivery — downloads can spike from a marketing campaign with zero real product value ever being experienced.' },
    ],
    mistake: 'Citing a vanity metric (total downloads, total registered users) as a North Star — these can be inflated by marketing spend alone without reflecting any genuine, sustained value delivery to real users.',
    interview: 'Volunteering a specific success metric and a specific guardrail metric for any project you present — unprompted, before being asked — is repeatedly cited as exactly what separates a senior-reading answer from a junior one.',
    related: ['c082', 'c089'],
  },
  c084: {
    id: 'c084', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 21 — Product Thinking',
    title: 'RICE, MoSCoW & Kano',
    def: 'Three complementary prioritization frameworks: RICE scores initiatives numerically (Reach × Impact × Confidence ÷ Effort); MoSCoW sorts scope into Must/Should/Could/Won\'t; Kano classifies features into basic, performance, and delighter categories based on how they affect satisfaction.',
    why: 'Prioritization frameworks turn opinions into estimates that can be debated and defended, and interviewers repeatedly cite naming a specific trade-off and a specific thing you would NOT build as a core signal of prioritization maturity.',
    blocks: [
      { t: 'diagram', id: 'kano', caption: 'The Kano model: basic needs must simply exist, performance needs scale roughly linearly with investment, and delighters surprise — until they decay into basic expectations over time.' },
      { t: 'ul', items: [
        'RICE forces explicit, debatable estimates for Reach, Impact, and Confidence, divided by Effort — the resulting score is only ever as honest as its inputs, so its real value is exposing disagreement early, not manufacturing false objectivity.',
        'MoSCoW\'s "Won\'t" category is explicitly, deliberately about naming what you will NOT build for this release — this is frequently the single most valuable and most skipped part of the exercise.',
        'Kano\'s delighters reliably decay into basic expectations over time — live GPS tracking was a genuine delighter in a ride-hailing app around 2012; its absence today would be a critical, basic-level failure, not a missed opportunity for delight.',
      ]},
    ],
    examples: [
      { label: 'Example · RICE settling a real disagreement', text: 'Comparing a redesign of a heavily-used but simple page (high reach, medium impact) against a new but complex feature for power users (medium reach, high impact) using RICE forces the team to make their impact and confidence assumptions explicit and debatable, rather than the decision being settled by whoever argues most persuasively in the room.' },
      { label: 'Example · Kano\'s delighter decay', text: 'A feature offering a live chauffeur photo and estimated arrival time might be a genuine, memorable delighter for a premium ride-hailing service today — but within a few years of competitors matching it, the same feature\'s absence would read as a basic, expected failure rather than its presence still reading as delight.' },
    ],
    mistake: 'Treating a RICE score or a Kano classification as an objective, unquestionable truth rather than a structured estimate — the numbers are only as reliable as the honesty of the confidence inputs behind them.',
    interview: 'Every whiteboard exercise should end with an explicit statement of what you would cut for a v1 — naming the "Won\'t" is what "saying no is the job" looks like in practice, and its absence is a commonly cited fail signal.',
    related: ['c082'],
  },
  c085: {
    id: 'c085', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 21 — Product Thinking',
    title: 'OKRs for Designers',
    def: 'OKRs (Objectives and Key Results) are a goal-setting framework pairing a qualitative, ambitious Objective with a small number of specific, measurable Key Results — and design work should ladder up visibly into them, not sit disconnected from them.',
    why: 'Designers who can\'t connect their work to a team\'s actual OKRs are frequently perceived as executing tasks rather than driving outcomes — being fluent in this specific business-planning language is a concrete way to demonstrate product, not just craft, thinking.',
    blocks: [
      { t: 'ul', items: [
        'An Objective is qualitative and inspirational ("Make onboarding delightful and fast").',
        'Key Results are specific, measurable, and time-bound ("Reduce onboarding drop-off from 40% to 25% this quarter") — a good Key Result is a number that can genuinely go up or down based on real work, not a vague restatement of the objective.',
        'A common, well-documented failure mode is writing Key Results that are actually just outputs or tasks ("ship the new onboarding flow") rather than genuine outcomes ("reduce drop-off by 15 percentage points") — shipping something is not, by itself, evidence that it worked.',
      ]},
    ],
    examples: [
      { label: 'Example · A weak versus a strong Key Result', text: '"Redesign the onboarding flow" is an output, not a Key Result — it says nothing about whether the redesign actually improved anything. "Reduce onboarding drop-off from 40% to 25%" is a genuine Key Result, because it is a measurable outcome that the redesign is a means toward, not an end in itself.' },
      { label: 'Example · Connecting a design project explicitly to a team OKR', text: 'Presenting a redesign project by opening with "this ladders up to our team\'s Q3 objective of improving activation, specifically the key result of raising day-one investment completion from 30% to 45%" immediately frames the work in outcome terms a business audience will find credible, rather than purely describing the deliverable.' },
    ],
    mistake: 'Writing or presenting a Key Result that is actually just a shipped deliverable ("launch the new dashboard") rather than a measurable outcome — this is one of the most common and most consequential OKR-writing mistakes.',
    interview: 'Being able to frame a past project explicitly in terms of the objective and key result it served — not just what was shipped — is a strong signal of business fluency that goes beyond craft alone.',
    related: ['c082'],
  },
  c086: {
    id: 'c086', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 22 — Data & Experimentation', wide: true,
    title: 'A/B Testing Done Right',
    def: 'A controlled experiment that randomly splits users into two or more groups, each seeing a different version of a design, to measure which version performs better against a predefined metric — done "right" means a clear hypothesis, a single primary metric, and sufficient sample size before drawing conclusions.',
    why: 'A/B testing is one of the most powerful tools available for data-informed design decisions, but it is also one of the most commonly misused — interviewers frequently probe whether you understand its real statistical requirements, not just its basic concept.',
    blocks: [
      { t: 'ul', items: [
        'A clear, falsifiable hypothesis before the test starts ("changing the CTA color to X will increase clicks because Y") — testing without a hypothesis just produces noise you can retroactively rationalize any way you like.',
        'One clearly defined primary metric decided in advance, plus at least one guardrail metric that must not be allowed to degrade — deciding the metric only after seeing results invites cherry-picking whichever number happened to move favorably.',
        'Sufficient sample size and test duration to reach real statistical significance — stopping a test the moment it looks favorable, before reaching planned significance, is a very common and serious methodological error.',
        'Watch for a metric that "wins" for the wrong reason — a redesigned upsell banner might increase raw clicks while also increasing complaints and uninstalls in the same cohort, meaning clicks was measuring the wrong thing.',
      ]},
    ],
    examples: [
      { label: 'Example · Stopping a test too early', text: 'A test that appears to be winning after only two days, with a small sample size, is frequently just random noise rather than a genuine, statistically significant effect — stopping and shipping based on this early read is one of the most common and costly A/B-testing mistakes teams make under time pressure.' },
      { label: 'Example · A metric that wins for the wrong reason', text: 'An "upsell" banner redesign that increases raw click-through rate, while a closer look at the same cohort shows rising rage-clicks and rising uninstall rates, reveals that clicks was the wrong primary metric all along — the team should have defined a metric closer to genuine satisfaction or completed purchase, not raw engagement.' },
    ],
    mistake: 'Stopping a test as soon as the results look favorable, before reaching the pre-planned sample size or duration needed for real statistical significance — this is one of the single most common ways teams fool themselves with A/B testing.',
    interview: '"Tell me about a time you disagreed with data" is a common behavioral question specifically probing this: a strong answer describes recognizing that a "winning" metric was measuring the wrong thing, and having the judgment to look deeper rather than just shipping the apparent win.',
    related: ['c087', 'c089'],
  },
  c087: {
    id: 'c087', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 22 — Data & Experimentation',
    title: 'Analytics Fluency',
    def: 'The practical ability to read, interpret, and reason from product analytics — funnels, cohort retention curves, event tracking — as a routine part of the design process, not a specialized skill delegated entirely to a separate analyst.',
    why: 'A designer who can independently pull up a funnel or a retention cohort chart and reason about it is measurably more effective at spotting real problems and defending real design decisions than one who only works from secondhand summaries.',
    blocks: [
      { t: 'ul', items: [
        'Funnels — the percentage of users who successfully move from one step to the next in a flow; the step with the steepest drop-off is usually the highest-leverage place to focus design attention.',
        'Cohort retention curves — plotting what percentage of a group who joined at the same time are still active over subsequent days/weeks; a healthy curve flattens into a habitual plateau, while an unhealthy one decays continuously toward zero.',
        'Event tracking — the underlying data model of which specific user actions are being logged; a designer should understand roughly what is and isn\'t currently being tracked, since a redesign is only measurable if the relevant events are actually instrumented.',
      ]},
    ],
    examples: [
      { label: 'Example · Reading a checkout funnel to prioritize redesign work', text: 'A funnel showing cart → address → payment → confirmation with the steepest single drop-off between address and payment immediately tells a designer exactly where redesign effort will have the highest leverage — reasoning independently from this data is far faster than waiting for a formal analyst report to arrive.' },
      { label: 'Example · Distinguishing a habit-forming product from a seasonal one', text: 'A messaging app with roughly 70% of daily active users returning daily reflects a genuine daily habit; a tax-filing app with only 5% daily return might still represent an excellent, healthy business — retention benchmarks are meaningfully category-dependent, and reading a curve without that context leads to the wrong conclusion.' },
    ],
    mistake: 'Waiting entirely on a separate analyst or data team to interpret basic funnel or retention data before forming any opinion, rather than developing enough fluency to reason about the numbers directly and quickly during the design process itself.',
    interview: 'Being handed a simple funnel or retention chart cold in an interview and asked to reason about it out loud is an increasingly common format — practicing this kind of live interpretation is directly useful preparation.',
    related: ['c086'],
  },
  c088: {
    id: 'c088', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 22 — Data & Experimentation',
    title: 'HEART Framework',
    def: 'Google\'s HEART framework organizes product metrics into five categories — Happiness, Engagement, Adoption, Retention, Task success — using a structured Goals → Signals → Metrics process to derive concrete, well-reasoned metrics for any given project.',
    why: 'HEART is one of the most widely-adopted structured approaches to choosing the RIGHT metric for a specific project, rather than reaching reflexively for whatever generic metric is easiest to pull — and it is frequently cited by name in data-and-metrics interview questions.',
    blocks: [
      { t: 'ul', items: [
        'Happiness — subjective satisfaction (surveys, ratings, NPS).',
        'Engagement — level of involvement (frequency, depth, or breadth of usage).',
        'Adoption — how many new users start using a product or feature.',
        'Retention — whether users continue to use it over time.',
        'Task success — efficiency, effectiveness, and error rate for a specific task.',
      ]},
      { t: 'p', text: 'The real discipline in HEART isn\'t memorizing the five categories — it\'s the Goals → Signals → Metrics process underneath: first state the actual goal in plain language, then identify an observable signal that would indicate progress toward it, and only then define a specific, countable metric from that signal. Skipping straight to "let\'s just track clicks" without this reasoning chain is exactly the mistake HEART is designed to prevent.' },
    ],
    examples: [
      { label: 'Example · Applying Goals → Signals → Metrics', text: 'Goal: "users should feel confident about their investment choices." Signal: confident users tend to spend less time re-reviewing their portfolio before making a decision. Metric: median time spent on the portfolio review screen before initiating a transaction, tracked over time — a genuinely reasoned metric, not an arbitrary one.' },
      { label: 'Example · Choosing the right HEART category for a project', text: 'A project aimed at reducing customer-support call volume for a specific task is fundamentally a Task Success project — the right metric is task completion rate and error rate for that specific flow, not a generic Engagement metric like session length, which wouldn\'t actually reflect the project\'s real goal.' },
    ],
    mistake: 'Choosing a generic, easily-available metric (page views, session length) as a stand-in for project success without first walking through the Goals → Signals → Metrics reasoning to check that it genuinely reflects the actual goal.',
    interview: 'Being able to name HEART\'s five categories and, more importantly, walk through the Goals-Signals-Metrics reasoning process live for a hypothetical project is a strong, structured answer to "how would you measure success here."',
    related: ['c083', 'c089'],
  },
  c089: {
    id: 'c089', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 22 — Data & Experimentation',
    title: 'Guardrail Metrics',
    def: 'A metric that must not be allowed to degrade while optimizing for a different, primary target metric — guardrails exist specifically to catch a "win" that actually causes harm somewhere else in the system.',
    why: 'Volunteering a guardrail metric alongside a primary metric, unprompted, is one of the most specifically cited signals of senior-level product-design maturity in interview debriefs — "no metrics instinct" and specifically "never named a guardrail" are documented fail patterns.',
    blocks: [
      { t: 'p', text: 'Optimizing any single metric in isolation, without a guardrail, risks producing a technically "successful" change that quietly damages something else the primary metric doesn\'t capture at all. Naming a guardrail before running an experiment or shipping a change forces the team to think through the change\'s realistic negative side effects in advance, rather than discovering them only after the fact.' },
      { t: 'ul', items: [
        'A faster checkout flow (target: conversion rate) must not increase wrong-address deliveries (guardrail: delivery accuracy) — speed achieved by removing a genuinely useful confirmation step isn\'t a real win.',
        'A simplified risk-disclosure flow (target: completion rate) must not reduce genuine comprehension (guardrail: post-disclosure quiz scores or complaint rates) — completion achieved by making the disclosure less informative isn\'t a real win either, and may carry real regulatory risk.',
      ]},
    ],
    examples: [
      { label: 'Example · Naming the guardrail unprompted', text: 'Presenting a checkout redesign project with "our target metric is conversion rate, and our guardrail is order-accuracy rate — we\'ll roll back if accuracy drops even while conversion improves" demonstrates exactly the kind of unprompted metrics discipline interviewers are listening for.' },
      { label: 'Example · A guardrail catching a false win', text: 'A redesigned upsell banner increasing raw conversion (the target metric) while a guardrail metric — 30-day uninstall rate for that same cohort — quietly rises in parallel reveals the "win" was actually damaging long-term retention, information the target metric alone would never have surfaced.' },
    ],
    mistake: 'Presenting only a single target metric for a project with no accompanying guardrail — this is explicitly, repeatedly cited as a documented fail signal ("no metrics instinct") in senior interview debriefs at top companies.',
    interview: 'Defining one target metric AND one guardrail metric for literally any project you present, before being asked, is the specific, concrete habit that reliably reads as senior in these interviews.',
    related: ['c086', 'c088'],
  },
  c090: {
    id: 'c090', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 23 — Service & Strategy', wide: true,
    title: 'Service Blueprints (Frontstage/Backstage)',
    def: 'A service blueprint extends a customer journey map by adding the "backstage" — the internal systems, staff actions, and processes the customer never sees but which directly determine whether the frontstage experience actually works.',
    why: 'A great many real user problems have no fix available in the UI at all, because their root cause lives entirely backstage — service blueprinting is the tool that reveals this and redirects the fix to where it actually needs to happen.',
    blocks: [
      { t: 'diagram', id: 'blueprint', caption: 'A service blueprint\'s lanes: frontstage (what the customer sees), backstage (staff actions), and support processes and systems underneath both.' },
      { t: 'ul', items: [
        'Frontstage — everything the customer directly experiences and sees: the app, the website, a physical interaction with staff.',
        'Backstage — staff actions and internal processes that support the frontstage but remain invisible to the customer (a claims-processing team\'s internal workflow, a warehouse\'s fulfillment process).',
        'Support processes and systems — the underlying technology and infrastructure that both frontstage and backstage actions depend on.',
        'Drawing the line of visibility between frontstage and backstage explicitly is often what reveals that a "UX problem" reported by users is actually rooted in a slow or broken backstage process no interface redesign alone could ever fix.',
      ]},
    ],
    examples: [
      { label: 'Example · A support-call spike with no UI fix', text: 'A spike in support calls about "my claim submission disappeared" traces, once properly blueprinted, to a backstage batch-processing job that runs only once every 24 hours — no amount of frontstage interface polish would fix this; the actual fix is a backstage change (more frequent processing) or, short of that, honest frontstage messaging that sets accurate expectations about the real delay.' },
      { label: 'Example · When the fix is genuinely a UI problem', text: 'A blueprint can also reveal the opposite: a support-call spike about "I can\'t find how to cancel" that, once mapped, shows the backstage cancellation process is actually fast and reliable — the real problem is a frontstage findability issue, which IS a legitimate UI fix, not a process one.' },
    ],
    mistake: 'Assuming every user complaint has a frontstage, interface-level fix available, without ever mapping the backstage process that might be the actual root cause — this leads to endless UI polish applied to a problem that a UI can\'t solve.',
    interview: 'Being able to describe a real situation where you diagnosed a problem as backstage/process rather than reflexively proposing a UI fix demonstrates service-design maturity beyond screen-level thinking.',
    related: ['c044'],
  },
  c091: {
    id: 'c091', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 23 — Service & Strategy',
    title: 'Competitive Analysis',
    def: 'A structured comparison of competing products, using two complementary methods: a feature matrix (what capabilities each competitor has) and an experience teardown (how well each competitor\'s experience actually works for real tasks).',
    why: 'Feature-matrix-only competitive analysis is a common trap that leads directly into feature-parity thinking ("they have X, so we need X too") — genuine competitive insight usually requires the deeper experience-teardown layer as well.',
    blocks: [
      { t: 'ul', items: [
        'Feature matrix — a straightforward table of which competitors have which capabilities; useful for spotting genuine gaps, but dangerous if treated as the whole analysis, since it says nothing about HOW WELL each feature actually works.',
        'Experience teardown — actually using each competitor\'s product to complete a real, specific task, evaluating friction, clarity, and delight along the way, not just presence or absence of a feature.',
        'The most valuable competitive insight often isn\'t "they have a feature we lack" — it\'s "they have the same feature we do, but theirs is measurably easier to use," which a feature matrix alone would completely miss.',
      ]},
      { t: 'p', text: 'The "feature-parity trap" describes a team that reflexively matches every competitor feature as it appears, without ever asking whether that feature is genuinely valuable to their own specific users — this produces a bloated, unfocused product optimized for a comparison chart rather than for real user value.' },
    ],
    examples: [
      { label: 'Example · Matrix versus teardown revealing different insights', text: 'A feature matrix might show that two competing expense-tracking apps both offer receipt scanning. An experience teardown reveals one requires seven taps and manual field correction while the other auto-fills nearly everything correctly in two taps — the matrix alone would have missed this entirely, and it\'s the actual competitive edge.' },
      { label: 'Example · Falling into the feature-parity trap', text: 'A team that adds a social-sharing feature purely because two competitors have it, without evidence their own users actually want it, risks diluting focus and adding maintenance burden for a feature that may never get meaningfully used — feature-matrix-driven roadmapping, unchecked, produces exactly this outcome.' },
    ],
    mistake: 'Building a feature purely to match a competitor\'s checklist item, without first validating that the feature is genuinely valuable to your own specific users — this is the defining shape of the feature-parity trap.',
    interview: 'Being able to describe a real competitive teardown, and a specific insight from it that a feature matrix alone would have missed, demonstrates depth beyond a superficial "checked what competitors offer" answer.',
    related: [],
  },
  c092: {
    id: 'c092', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 23 — Service & Strategy',
    title: 'Brand Systems in Product',
    def: 'How a brand\'s identity — voice, color, motion, illustration style — expresses itself consistently within the actual product experience, as distinct from how that same brand expresses itself in marketing materials.',
    why: 'Marketing and product brand expression frequently diverge (marketing optimizes for a one-time, attention-grabbing impression; product optimizes for repeated, functional, trustworthy daily use) and confusing the two is a common source of inconsistency across a company\'s different surfaces.',
    blocks: [
      { t: 'ul', items: [
        'Marketing surfaces (ads, landing pages) can afford more novelty, more dramatic motion, and more attention-seeking visual choices, since they are typically seen once or infrequently.',
        'Product surfaces need consistency and restraint above all, since they are used repeatedly — a marketing-style dramatic animation that delights on first viewing becomes actively annoying by the fiftieth repeated use inside the actual product.',
        'A brand\'s voice, color, and motion principles should feel like the same underlying identity across marketing and product, even though their specific EXPRESSION should be tuned differently for each context\'s actual usage pattern.',
      ]},
    ],
    examples: [
      { label: 'Example · Toning down marketing motion for product use', text: 'A brand\'s marketing site might use a dramatic, attention-grabbing entrance animation for its hero section, appropriate for a page seen once. The same brand\'s in-product loading animation needs to be much shorter and more restrained, because it will be seen by the same user dozens of times a day — using the marketing-weight animation in-product would quickly become genuinely irritating.' },
      { label: 'Example · Consistent voice across different weights', text: 'A brand voice described as "warm and direct" can show up as bold, playful headline copy on a marketing landing page and as calm, clear, reassuring microcopy inside the actual product — recognizably the same underlying voice, deliberately expressed with very different weight and frequency in mind.' },
    ],
    mistake: 'Directly reusing marketing-weight visual drama (elaborate animations, bold declarative copy) inside the actual product experience, without adjusting for the fact that product surfaces are seen repeatedly, not once.',
    interview: 'Being able to describe how you\'d tune a specific brand element differently for product versus marketing context (not just "keep it consistent") shows a more nuanced brand-in-product understanding.',
    related: ['c059'],
  },
  c093: {
    id: 'c093', bookId: 'curr', bookLabel: 'Curriculum · Advanced', chapter: 'Week 23 — Service & Strategy',
    title: 'Workshop Facilitation',
    def: 'The practice of running structured group sessions — alignment workshops, design sprints — to bring a team to a shared decision or shared understanding, using deliberate divergence-then-convergence techniques like brainstorming and dot-voting.',
    why: 'Facilitation is an underrated leadership skill that becomes increasingly important at senior levels, where influencing a room full of stakeholders toward a shared, well-reasoned decision matters as much as any individual screen design.',
    blocks: [
      { t: 'ul', items: [
        'How-Might-We (HMW) generation — reframing a raw problem statement into a generative, open-ended prompt ("How might we reduce onboarding drop-off?") that invites many possible solutions rather than presupposing one.',
        'Divergence before convergence — a well-run workshop deliberately generates a wide range of ideas first (often silently and individually, to avoid groupthink and status bias) before narrowing down together.',
        'Dot-voting — a simple, fast, visually transparent technique for a group to collectively prioritize among many generated ideas, giving everyone equal voice regardless of seniority in the room.',
        'A design sprint (popularized by Google Ventures) compresses this entire divergence-convergence cycle — understand, diverge, decide, prototype, validate — into a tightly time-boxed, typically four- or five-day structure.',
      ]},
    ],
    examples: [
      { label: 'Example · Silent individual ideation before group discussion', text: 'Having every participant silently write down their own ideas individually for several minutes before any group discussion begins prevents the most senior or most vocal person in the room from anchoring everyone else\'s thinking — a simple, well-evidenced facilitation technique for genuinely leveraging a full group\'s creativity.' },
      { label: 'Example · Dot-voting to prioritize HMW statements', text: 'After generating twenty How-Might-We statements from a research synthesis session, giving each participant three sticky dots to place on their preferred statements converts a potentially long, status-driven debate into a fast, transparent, genuinely collective prioritization in a few minutes.' },
    ],
    mistake: 'Opening a workshop by asking for the group\'s ideas verbally and out loud immediately, without a period of silent individual ideation first — this reliably lets the most senior or most vocal voice in the room disproportionately anchor everyone else\'s subsequent thinking.',
    interview: 'Describing a specific workshop you facilitated, and a specific technique you used to keep it genuinely collaborative rather than dominated by one voice, is a strong, concrete leadership-adjacent story.',
    related: ['c004'],
  },

  c094: {
    id: 'c094', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 24 — AI-Native Design', wide: true,
    title: 'Designing for Non-Determinism',
    def: 'The core shift AI-native design requires: traditional software always produces the same output for the same input, while generative AI systems can produce different, sometimes-wrong outputs for the identical input — and the interface must be designed around that uncertainty, not pretend it doesn\'t exist.',
    why: 'This is arguably the single biggest mental-model shift for designers moving from traditional software into AI-native product design, and it changes nearly every assumption about error states, trust, and user control.',
    blocks: [
      { t: 'ul', items: [
        'Traditional software errors are typically deterministic and fixable once (a bug, once patched, stays fixed); AI system "errors" (hallucinations, wrong or low-quality outputs) are probabilistic and can recur unpredictably even after improvements.',
        'Interfaces need to communicate confidence and uncertainty honestly, rather than presenting every AI output with the same flat, confident visual authority regardless of how reliable it actually is.',
        'A "regenerate" or "try again" action is a first-class design pattern in AI-native products in a way it rarely is in deterministic software, because re-running the same request can legitimately produce a meaningfully different, sometimes better, result.',
      ]},
      { t: 'p', text: 'Designing for non-determinism means building in graceful ways to handle "the AI got this wrong," treating it as an expected, normal occurrence to design around — not a rare bug to be quietly hidden or apologized for.' },
    ],
    examples: [
      { label: 'Example · Visually distinguishing confidence levels', text: 'An AI-generated summary presented with a visual "confidence" indicator, or with source citations a user can click to verify, treats the non-deterministic nature of the output honestly — versus presenting it with the same flat visual authority as a database lookup, which implies a certainty the system doesn\'t actually have.' },
      { label: 'Example · Designing the regenerate action as first-class', text: 'A prominent, easily-accessible "regenerate" button next to any AI-generated content acknowledges directly that the first output might not be the best one, and that trying again is a normal, expected part of using the product — not an admission of failure to be hidden away in a menu.' },
    ],
    mistake: 'Designing an AI feature\'s interface exactly like a deterministic feature\'s — presenting outputs with identical visual confidence and offering no easy way to retry or verify — which sets an expectation of reliability the underlying system genuinely cannot guarantee.',
    interview: 'Being able to describe a specific design pattern (confidence indicators, regenerate actions, citations) that accounts for non-determinism demonstrates real AI-native design experience, not just familiarity with AI as a buzzword.',
    related: ['c098'],
  },
  c095: {
    id: 'c095', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 24 — AI-Native Design',
    title: 'Autonomy Calibration',
    def: 'The deliberate design decision of how much independent action an AI agent should be allowed to take before requiring explicit human confirmation — ranging from fully manual, to suggest-and-confirm, to fully autonomous.',
    why: 'Getting autonomy calibration wrong in either direction is costly: too little autonomy makes an AI feature feel pointless and slow; too much creates real risk of consequential actions being taken without adequate human oversight.',
    blocks: [
      { t: 'ul', items: [
        'Manual — the AI only suggests, offering no direct action at all; the human does everything themselves with AI as a passive assistant.',
        'Suggest-and-confirm — the AI proposes a specific action and shows its reasoning, but a human must explicitly approve before anything actually happens.',
        'Autonomous with checkpoints — the AI acts independently but pauses for confirmation at specific, genuinely consequential decision points.',
        'Fully autonomous — the AI acts entirely independently with no human checkpoint at all; appropriate only for low-stakes, easily-reversible, well-validated actions.',
        'The right calibration level depends directly on the reversibility and stakes of the action — a low-stakes, easily-undone action (rephrasing a sentence) can reasonably be more autonomous than a high-stakes, hard-to-reverse one (sending an email to a customer, deleting data).',
      ]},
    ],
    examples: [
      { label: 'Example · An email drafting assistant', text: 'An AI feature that drafts a reply email but requires the user to explicitly hit "send" is calibrated as suggest-and-confirm — appropriate given how consequential and hard-to-reverse actually sending an email is, even though the drafting itself can be fully automated with confidence.' },
      { label: 'Example · Autonomous low-stakes formatting', text: 'An AI feature that automatically reformats a messy table\'s column widths with no confirmation step needed is appropriately fully autonomous, since the action is low-stakes, instantly visible, and trivially reversible with a single undo.' },
    ],
    mistake: 'Defaulting every AI feature to the same autonomy level regardless of the actual stakes and reversibility of its specific action — a one-size-fits-all approach to confirmation steps either annoys users on trivial actions or exposes them to real risk on consequential ones.',
    interview: 'Being asked to design an AI agent feature and explicitly discussing where you\'d place confirmation checkpoints — and why, based on reversibility — is now a common and expected part of AI-product design interviews.',
    related: ['c100'],
  },
  c096: {
    id: 'c096', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 24 — AI-Native Design',
    title: 'RAG & Grounding',
    def: 'Retrieval-Augmented Generation (RAG) is a technique where an AI system first retrieves relevant real documents, then generates its answer explicitly based on that retrieved content — "grounding" the response in verifiable source material rather than relying purely on the model\'s trained memory.',
    why: 'RAG is the specific mechanism that makes citations and honest "I don\'t know" responses possible in AI products, and it directly reduces (though does not eliminate) hallucination — understanding it is core AI-technical literacy for designing trustworthy AI features.',
    blocks: [
      { t: 'diagram', id: 'rag', caption: 'The RAG pipeline: a query triggers retrieval of real documents, which become context the model is instructed to answer from — enabling citations.' },
      { t: 'ul', items: [
        'Query — the user\'s question or request.',
        'Retrieve — the system searches a real document store (policy documents, product manuals, internal knowledge bases) for relevant content.',
        'Context — the retrieved real documents are inserted into the model\'s prompt as grounding material.',
        'Answer — the model is explicitly instructed to answer based on the provided context, ideally with citations back to the specific retrieved source.',
      ]},
      { t: 'p', text: 'Because the answer is explicitly grounded in retrieved real documents, RAG-based systems can show users exactly which source supports a given claim — which both increases user trust and gives the design an honest, functional way to say "I don\'t know" or "I couldn\'t find information about this" when nothing relevant is actually retrieved.' },
    ],
    examples: [
      { label: 'Example · A customer-support AI citing real policy documents', text: 'A support chatbot answering "what\'s your refund policy for damaged goods?" by retrieving the actual, current refund policy document and quoting from it directly — with a visible citation link — is far more trustworthy and verifiable than an ungrounded model answering purely from its general training, which could easily state an outdated or incorrect policy with identical confidence.' },
      { label: 'Example · Designing an honest "not found" state', text: 'When a RAG system\'s retrieval step returns no genuinely relevant documents, the interface should say so honestly ("I couldn\'t find information about this in our documentation") rather than letting the model generate an unfounded, ungrounded guess anyway — this is a direct design decision, not solely an engineering one.' },
    ],
    mistake: 'Treating RAG as a complete solution to hallucination rather than a significant mitigation — a RAG system can still misinterpret or over-generalize from its retrieved context, so citation and easy source-verification remain important design safeguards even with grounding in place.',
    interview: 'Being able to explain the RAG pipeline\'s four steps and specifically why it enables citations is common AI-technical-literacy interview territory for AI-native product design roles.',
    related: ['c098', 'c101'],
  },
  c097: {
    id: 'c097', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 24 — AI-Native Design',
    title: 'Conversational & Multimodal UX',
    def: 'Conversational UX designs interaction as a natural-language dialogue rather than a fixed set of buttons and forms; Multimodal UX extends this to interfaces that can accept and produce combinations of text, voice, and image/video.',
    why: 'These interaction models require rethinking core UX assumptions — there is no fixed menu of possible actions to visually browse, and the "affordances" of a conversational interface are almost entirely invisible until demonstrated or explained.',
    blocks: [
      { t: 'ul', items: [
        'Conversational interfaces have a fundamental discoverability problem: unlike a visible menu, users can\'t see the full range of things they could ask or say — well-designed suggestion chips, example prompts, and onboarding hints exist specifically to solve this.',
        'Multimodal interfaces (accepting a photo alongside a text question, for instance) need to design for a mix-and-match input experience where users may not initially understand which modes are available for a given task.',
        'Even in a conversational interface, high-stakes or highly structured actions (confirming a payment, selecting from a large finite list) often still benefit from falling back to a traditional visual UI component rather than forcing everything through free-text conversation.',
      ]},
    ],
    examples: [
      { label: 'Example · Suggestion chips solving the discoverability gap', text: 'A conversational AI assistant showing a row of example prompt chips ("Summarize this document," "Find contradictions," "Translate to Spanish") immediately after opening solves the core discoverability problem — showing users a sample of what\'s possible instead of leaving them facing a blank text box with no cues at all.' },
      { label: 'Example · Falling back to a visual UI for a high-stakes action', text: 'A conversational banking assistant might handle "what\'s my balance?" purely through natural-language chat, but for "transfer ₹50,000 to this account," it deliberately surfaces a traditional visual confirmation screen with clear amount and recipient fields — because a high-stakes, hard-to-reverse action benefits from the precision and structure a form provides, even inside an otherwise conversational product.' },
    ],
    mistake: 'Forcing every interaction, including high-stakes structured actions, through free-text conversation purely for aesthetic or novelty consistency — this can introduce real ambiguity and error risk exactly where clarity and confirmation matter most.',
    interview: 'Being able to identify when a conversational interface should deliberately fall back to a traditional visual component demonstrates mature judgment, not just enthusiasm for the conversational paradigm.',
    related: ['c112'],
  },
  c098: {
    id: 'c098', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 25 — AI Technical Literacy', wide: true,
    title: 'How LLMs Work',
    def: 'A large language model generates text by predicting the most statistically likely next token (roughly, word-piece) given everything before it — it is reconstructing plausible-sounding text, not retrieving verified facts from a database.',
    why: 'This single mechanical fact explains hallucination directly: the model is optimizing for plausibility, not truth, so a confident-sounding, fluent, entirely fabricated answer is not a rare malfunction — it is the expected behavior of the underlying mechanism working exactly as designed.',
    blocks: [
      { t: 'p', text: 'Because the model has no built-in mechanism to distinguish "this is something I\'m confident is factually true" from "this is a statistically plausible continuation of the text so far," a fabricated citation or an invented statistic can be produced with the exact same fluent, confident tone as an accurate one. This is precisely why grounding techniques like RAG, and interface-level honesty about uncertainty, are necessary design safeguards rather than optional extras.' },
      { t: 'ul', items: [
        'The model has no persistent memory of "truth" the way a database does — it has learned statistical patterns from its training data, which is a very different thing from a verified, queryable fact store.',
        'Longer, more specific, more unusual questions are generally more likely to trigger the model into "plausible reconstruction" territory, since there is less directly matching pattern in its training to draw from.',
      ]},
    ],
    examples: [
      { label: 'Example · A fabricated but fluent citation', text: 'An AI model asked for a specific academic source might generate a citation with a plausible-sounding author name, title, and journal that does not actually exist — stated with exactly the same fluent confidence as a real citation would be, because the underlying mechanism has no way to distinguish the two internally.' },
      { label: 'Example · Designing around this mechanism, not against it', text: 'A product that always shows AI-generated factual claims alongside a "verify this" link or a retrieved source citation is designing around the real mechanical limitation directly — treating fluent confidence as insufficient evidence of accuracy on its own, which it genuinely is.' },
    ],
    mistake: 'Assuming a fluent, confident-sounding AI response is more likely to be factually accurate — fluency and accuracy are produced by entirely different mechanisms in these systems and are not reliably correlated with each other.',
    interview: 'Being able to explain hallucination mechanistically ("it\'s optimizing for plausible continuation, not verified truth") rather than just naming it as a known limitation demonstrates genuine, not superficial, AI-technical literacy.',
    related: ['c096', 'c101'],
  },
  c099: {
    id: 'c099', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 25 — AI Technical Literacy',
    title: 'Context Windows & Temperature',
    def: 'The context window is the total amount of text (conversation history plus any provided documents) a model can consider at once — anything outside it is effectively forgotten; temperature is a setting controlling how random versus deterministic the model\'s output is.',
    why: 'Both are concrete technical constraints with direct, visible design implications — features that seem to promise perfect memory or perfect consistency need to be designed with these real limitations explicitly in mind, not assumed away.',
    blocks: [
      { t: 'ul', items: [
        'Context window — a fixed-size "working memory"; a long conversation or a large uploaded document can exceed it, causing earlier content to silently fall out of the model\'s awareness, sometimes leading to responses that seem to contradict or "forget" something established earlier.',
        'Any feature requiring genuine cross-session memory (the AI "remembering" a user\'s preferences across separate visits) requires deliberate architecture built specifically for that purpose — it is not something the underlying model provides automatically just by being a language model.',
        'Temperature — low temperature produces more consistent, conservative, repeatable outputs; high temperature produces more varied, creative, and less predictable ones. A "regenerate" button is, quite literally, re-rolling the model\'s dice again at whatever temperature is configured.',
      ]},
    ],
    examples: [
      { label: 'Example · A long conversation silently losing early context', text: 'A very long support chat conversation might cause the AI to eventually give a response that contradicts something it correctly said earlier in the same conversation — this is very often a context-window limit being silently exceeded, not a reasoning failure, and interface design (like summarizing and re-injecting key facts periodically) can help mitigate it.' },
      { label: 'Example · Choosing temperature deliberately by use case', text: 'A tool generating factual, structured summaries should typically run at low temperature, prioritizing consistency; a tool generating creative writing prompts or brainstorm ideas benefits from a higher temperature, prioritizing variety — using the same default temperature for both use cases would serve one of them poorly.' },
    ],
    mistake: 'Promising or implying persistent, unlimited memory in a product\'s UI copy or feature framing without the underlying architecture actually supporting genuine cross-session memory — this sets an expectation the real system can\'t reliably meet.',
    interview: 'Being able to explain why a long-running AI conversation might seem to "forget" something, in terms of the context window specifically, is a concrete, testable piece of AI-technical literacy.',
    related: ['c098'],
  },
  c100: {
    id: 'c100', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 25 — AI Technical Literacy',
    title: 'Agents, MCP & Function Calling',
    def: 'An AI agent is a model running in a loop with access to tools — it can call a function (search, run code, query a database), observe the result, and continue reasoning; MCP (Model Context Protocol) is an emerging standard for connecting AI systems to those tools and data sources consistently.',
    why: 'Agents represent a real shift in design responsibility — because an agent can actually take action in the world (not just generate text), the design questions shift from "can it do this?" to "when should it act, and with what confirmation and audit trail?"',
    blocks: [
      { t: 'ul', items: [
        'Function calling — the mechanism letting a model invoke a specific, defined external action (searching a database, sending an email, running a calculation) rather than only producing text.',
        'MCP — a standardization effort for how AI systems connect to external tools and data, often described as a "USB port" for AI capabilities, aiming to reduce the need for custom, bespoke integration work for every new tool.',
        'Because an agent can genuinely act (not just describe), the core design questions become: what plan is it about to execute (plan visibility), where does it pause for human confirmation (checkpoints), what record exists of what it did (audit trail), and can a human genuinely stop it mid-action (interruptibility)?',
      ]},
    ],
    examples: [
      { label: 'Example · Plan visibility before execution', text: 'An AI agent tasked with "reconcile this month\'s expense reports" showing its planned steps (fetch reports, flag discrepancies over ₹5,000, draft a summary email) before executing any of them gives the user a chance to catch a misunderstanding early, rather than discovering a problem only after actions have already been taken.' },
      { label: 'Example · A real, visible stop button', text: 'A genuinely functional, always-visible "stop" control that immediately halts an agent mid-task — not just closing the chat window while background actions continue silently — is a basic but frequently under-designed requirement once an AI system can take real, consequential actions.' },
    ],
    mistake: 'Designing an agent feature\'s interface purely as if it were a conversational chatbot, without designing explicit plan visibility, checkpoints, an audit trail, or a genuine stop mechanism — these are the direct design consequences of an agent\'s ability to actually act, not optional extras.',
    interview: 'Being asked to design an "agentic" feature and proactively bringing up plan visibility, checkpoints, and interruptibility — without being prompted for each individually — is a strong signal of genuine agent-design experience.',
    related: ['c095'],
  },
  c101: {
    id: 'c101', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 25 — AI Technical Literacy',
    title: 'Evals & AI Safety',
    def: 'Evals are the systematic methods used to measure whether an AI system\'s outputs are actually "good" — golden test sets, human rating rubrics, regression suites — and defining what "good" means for a given feature is itself a genuine design artifact, not solely an engineering task.',
    why: 'Designers are increasingly expected to contribute to defining evaluation criteria, since "is this response helpful and appropriate" is fundamentally a UX and product judgment question, not a purely technical one an engineering team can answer alone.',
    blocks: [
      { t: 'ul', items: [
        'A golden test set is a curated collection of representative inputs with known-good expected outputs, used to check whether a model or prompt change improves or regresses actual quality.',
        'Human rating rubrics translate a fuzzy concept like "helpful" or "appropriate" into specific, scoreable criteria that different human raters can apply consistently — writing a good rubric requires real product and UX judgment about what "good" actually means in this specific context.',
        'A regression suite re-runs previous test cases after any model or prompt change, to catch cases where a change that improves one behavior accidentally degrades another that was previously working fine.',
        'AI safety in a product-design context includes designing against foreseeable misuse, ensuring appropriate content boundaries, and building in genuine human oversight for consequential actions.',
      ]},
    ],
    examples: [
      { label: 'Example · A designer writing an evaluation rubric', text: 'A designer working on an AI writing assistant contributing specific rubric criteria — "does the suggestion preserve the user\'s original tone?", "is the suggested edit genuinely shorter, not just different?" — brings product judgment directly into what would otherwise be a purely engineering-owned quality metric.' },
      { label: 'Example · Catching a regression before shipping', text: 'A prompt change that improves an AI assistant\'s handling of refund questions might accidentally make it less accurate on shipping-time questions — running the full regression suite before shipping, not just testing the specific case that motivated the change, catches this kind of trade-off before real users are affected.' },
    ],
    mistake: 'Treating "does this AI feature work well" as purely an engineering quality question with no design input, rather than recognizing that defining what "well" even means for a given feature is itself a product and UX judgment call.',
    interview: 'Being able to describe contributing to an eval rubric or a specific quality criterion for an AI feature demonstrates a level of AI-product involvement beyond just designing the surrounding chat interface.',
    related: ['c096', 'c098'],
  },

  c102: {
    id: 'c102', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 26 — Engineering for Designers', wide: true,
    title: 'The Stack & APIs',
    def: 'A simplified mental model of how software actually works: a client (the app or browser a user sees) communicates with a backend server through an API, which in turn reads and writes to a database — and network latency lives specifically in the round trips between these layers.',
    why: 'Understanding this basic model is what lets a designer reason honestly about why something is slow, design appropriate loading and error states, and communicate credibly with engineers rather than treating "the backend" as an opaque black box.',
    blocks: [
      { t: 'ul', items: [
        'Client — the app or browser interface a user directly interacts with.',
        'API — the defined "waiter" layer that takes requests from the client and returns responses, without the client needing to know how the backend actually works internally.',
        'Backend — the "kitchen," where business logic actually runs and decisions are made.',
        'Database — the "pantry," where data is actually stored and retrieved from.',
        'Every one of these layers, and the network connections between them, introduces potential latency — which is exactly why loading states, optimistic UI, and honest error states are necessary design tools, not optional polish.',
      ]},
    ],
    examples: [
      { label: 'Example · Explaining a slow screen in stack terms', text: 'A screen that takes three seconds to load might be waiting on a slow database query on the backend, a slow network connection between the client and the API, or a large amount of data being transferred — understanding which layer is actually the bottleneck changes what a realistic engineering fix even looks like, and what interim design mitigation (like a skeleton screen) makes sense.' },
      { label: 'Example · Designing for the round-trip', text: 'Knowing that every user action requiring a server round-trip has inherent latency (client → API → backend → database → back again) is exactly why optimistic UI patterns exist — showing the expected result immediately rather than waiting for the full round-trip to visibly complete.' },
    ],
    mistake: 'Treating "the backend" as a single, undifferentiated black box responsible for all slowness or bugs, rather than understanding enough of the actual stack to reason about which specific layer a given problem lives in.',
    interview: 'Being able to explain, in simple terms, why a given interaction might be slow — in terms of the actual stack, not just "it needs to be faster" — demonstrates the engineering literacy senior product-design roles increasingly expect.',
    related: ['c020', 'c103'],
  },
  c103: {
    id: 'c103', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 26 — Engineering for Designers',
    title: 'REST vs GraphQL',
    def: 'REST is an API style where URLs represent things and standard verbs (GET, POST, PUT, DELETE) represent actions on them; GraphQL lets a client request exactly the specific fields it needs in a single request, rather than being locked into a fixed response shape.',
    why: 'Understanding this distinction helps a designer reason about why some screens (especially data-dense dashboards pulling from many sources) are more or less expensive to build and load, which is directly relevant to scoping and prioritization conversations with engineering.',
    blocks: [
      { t: 'ul', items: [
        'REST — each resource has its own URL (e.g., /users/123), and standard HTTP verbs map to actions (GET to read, POST to create, PUT to update, DELETE to remove) — straightforward and widely understood, but a screen needing data from many different resources may require several separate requests.',
        'GraphQL — a client specifies precisely which fields it needs, potentially across several underlying resources, in a single request — often more efficient for complex, data-dense screens like dashboards pulling from many different data sources at once.',
        'Neither is universally "better" — REST\'s simplicity suits straightforward, resource-oriented apps well; GraphQL\'s flexibility suits complex, multi-source data screens well.',
      ]},
    ],
    examples: [
      { label: 'Example · A dashboard pulling from many sources', text: 'A single analytics dashboard screen needing data from user profiles, transaction history, and account settings simultaneously might require three or more separate REST calls, versus a single, precisely-scoped GraphQL query requesting exactly the needed fields from all three sources at once — a real difference in complexity and potential loading-state design.' },
      { label: 'Example · A simple, resource-oriented mobile app', text: 'A straightforward to-do list app, where each screen maps cleanly to one clear resource (a list of tasks, a single task\'s detail), is often perfectly well served by simple REST endpoints, without needing GraphQL\'s added complexity and flexibility.' },
    ],
    mistake: 'Assuming every screen loads data through an identical, simple mechanism regardless of how many underlying sources it actually pulls from — this leads to underestimating the real complexity (and realistic loading-state needs) of data-dense, multi-source screens.',
    interview: 'Being able to explain the practical difference (not memorize the acronyms) — specifically why a data-dense dashboard might benefit from GraphQL — shows applied, not just superficial, technical literacy.',
    related: ['c102'],
  },
  c104: {
    id: 'c104', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 26 — Engineering for Designers',
    title: 'Performance & Perceived Speed',
    def: 'Actual performance is the real, measured time an operation takes; perceived speed is how fast that same operation FEELS to the user — and the two can be deliberately engineered independently of each other through interface design.',
    why: 'A large amount of "make it feel faster" work is entirely within a designer\'s control and doesn\'t require any actual engineering speed improvement at all — this is one of the clearest, most practical intersections of design and engineering literacy.',
    blocks: [
      { t: 'ul', items: [
        'Skeleton screens — showing a gray placeholder in the exact shape of the eventual content, rather than a blank screen or a generic spinner, measurably improves perceived load time with zero change to actual load time.',
        'Optimistic UI — showing the expected end state immediately while the real action completes in the background (see the Doherty Threshold).',
        'Lazy loading and appropriate image sizing — only loading content as it\'s actually needed, and serving correctly-sized images rather than a single oversized asset scaled down, directly improves ACTUAL performance, unlike the perception-only techniques above.',
        'Rough performance budgets worth knowing: about 100ms feels instant; about 1 second keeps a user in flow; beyond roughly 3 seconds on mobile web, users start abandoning the task at a meaningfully higher rate.',
      ]},
    ],
    examples: [
      { label: 'Example · A 4MB hero image as a design failure', text: 'A beautifully art-directed but unoptimized 4MB hero image loading slowly on a mobile connection isn\'t just an engineering oversight — it is a genuine design failure, since appropriate image sizing and compression are squarely within a designer\'s scope of responsibility and craft quality, not solely engineering\'s.' },
      { label: 'Example · Skeleton screens versus a blank flash', text: 'A social feed showing content-shaped gray placeholder blocks during load, rather than a blank white flash or a generic spinner, measurably reduces users\' reported sense of how long the wait felt — a pure perception win requiring zero actual speed improvement.' },
    ],
    mistake: 'Treating performance entirely as an engineering concern with no design responsibility, when a significant share of both real and perceived performance (image sizing, skeleton states, optimistic UI) is directly within a designer\'s own craft and decision-making.',
    interview: 'Being able to name a specific perceived-performance technique (skeleton screens, optimistic UI) and distinguish it from an actual-performance technique shows the specific, applied engineering literacy these interviews probe for.',
    related: ['c012', 'c020'],
  },
  c105: {
    id: 'c105', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 26 — Engineering for Designers',
    title: 'Design Handoff & Dev Mode',
    def: 'The process of transferring a design\'s specifications — measurements, colors, spacing, component structure — to engineers for implementation, increasingly automated by modern design tools\' built-in "dev mode" features that read structured, tokenized design files directly.',
    why: 'Well-structured, token-based, properly-named design files reduce handoff almost entirely to a formality; poorly-structured files (manual positioning, ungrouped layers, no token references) turn handoff into an error-prone manual translation exercise for every single screen.',
    blocks: [
      { t: 'ul', items: [
        'Modern design tools\' dev mode automatically generates code-adjacent specs (spacing values, color references, even starter code snippets) directly from a well-structured file — but only if that file actually uses real components, auto layout, and named tokens rather than manual positioning and one-off styling.',
        'A design file with clean component naming and structure matching the eventual coded component APIs (see Component APIs & Slots) makes automated handoff dramatically more accurate and useful.',
        'Handoff quality is, in large part, a direct downstream consequence of Auto Layout and Design Token discipline practiced throughout the actual design process — not a separate step bolted on at the end.',
      ]},
    ],
    examples: [
      { label: 'Example · Clean tokens producing near-automatic handoff', text: 'A design file where every spacing value references a named token, every color references a semantic token, and every button is a genuine reusable component (not a manually redrawn rectangle) allows a dev-mode tool to generate accurate, largely correct specs automatically, with the engineer needing only to verify rather than manually re-measure everything.' },
      { label: 'Example · A poorly-structured file undermining automated handoff', text: 'A design file built entirely from manually-positioned shapes with one-off hex codes and no real component structure produces unreliable, inaccurate dev-mode output, forcing the engineer back to manually inspecting and guessing at values — the automation is only as good as the discipline underneath it.' },
    ],
    mistake: 'Treating design-system discipline (tokens, components, auto layout) as separate from handoff quality, rather than recognizing that rigorous, systematic design work throughout the process is precisely what makes automated, low-friction handoff possible at the end.',
    interview: 'Being able to explain how design-system discipline directly enables smoother, more automated handoff connects craft-level rigor to a concrete engineering-collaboration benefit, which is a strong, integrative answer.',
    related: ['c071', 'c072'],
  },
  c106: {
    id: 'c106', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 27 — Data Visualization', wide: true,
    title: 'Chart Choice (Cleveland/Tufte)',
    def: 'A body of research-backed principles (associated with statisticians William Cleveland and Edward Tufte) for choosing the right chart type based on what comparison the data actually needs to communicate, and for maximizing the ratio of genuine information to visual "ink."',
    why: 'Chart choice is not primarily an aesthetic decision — decades of perceptual research show some encodings (position along a common scale) are read far more accurately by the human eye than others (angle in a pie chart, color saturation) — and this is testable, evidence-backed knowledge, not taste.',
    blocks: [
      { t: 'ul', items: [
        'Position along a common, aligned scale (as in a bar chart or dot plot) is the most accurately perceived visual encoding for comparing values — this is why bar charts so reliably outperform pie charts for comparing several distinct categories.',
        'Angle and area (as in pie charts and bubble charts) are perceived considerably less accurately than position — a pie chart is a poor choice whenever the audience needs to compare more than two or three slices precisely.',
        'Tufte\'s "data-ink ratio" principle argues for maximizing the proportion of a chart\'s visual ink that directly represents real data, minimizing decorative gridlines, borders, and unnecessary embellishment ("chartjunk") that carries no informational value.',
      ]},
    ],
    examples: [
      { label: 'Example · Replacing a pie chart with a bar chart', text: 'A pie chart comparing seven categories of expense forces the viewer to compare imprecisely-perceived angles and areas; a simple horizontal bar chart, using position along one shared scale, lets the same seven values be compared quickly and far more accurately — often a direct, evidence-backed upgrade with no loss of information.' },
      { label: 'Example · Reducing chartjunk in an internal report', text: 'Removing unnecessary 3D effects, heavy gridlines, and decorative background shading from an internal metrics chart, leaving only the data itself and minimal necessary labels, directly increases the data-ink ratio — and in practice, usually makes the chart both cleaner-looking and easier to read accurately at the same time.' },
    ],
    mistake: 'Choosing a chart type primarily for visual novelty or because "it looks more interesting" (an ornate 3D pie chart, for instance) rather than for which encoding the perceptual research shows will be read most accurately for the specific comparison being made.',
    interview: 'Being able to justify a chart-type choice by name-checking "position is more accurately perceived than angle" (or similar) demonstrates evidence-based visualization literacy beyond aesthetic preference.',
    related: ['c108'],
  },
  c107: {
    id: 'c107', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 27 — Data Visualization',
    title: 'Information Density',
    def: 'The amount of genuine data communicated per unit of screen space — a deliberate design trade-off between showing more at once (higher density) and keeping each individual data point easy to read and compare (lower density).',
    why: 'Information density is context-dependent rather than universally "more is better" or "less is better" — expert users of a dense trading terminal and occasional users of a simple consumer report genuinely need different density defaults, and conflating the two is a common data-viz design mistake.',
    blocks: [
      { t: 'p', text: 'The right density depends heavily on audience expertise and usage frequency (see also Data-Dense Defaults in enterprise UX): expert, high-frequency users of a specialized tool often prefer and benefit from higher density, since they\'ve built the visual literacy to parse it quickly, while occasional or first-time users generally need lower density, more heavily annotated visualizations to avoid feeling overwhelmed.' },
      { t: 'ul', items: [
        'Progressive disclosure (showing an overview first, with the ability to drill into specific detail on demand) lets a single visualization serve both a quick-scanning audience and a deep-diving one without compromising either.',
        'Sparklines — small, simple, data-dense inline charts with no axes or labels — are a deliberately high-density technique appropriate for trend-at-a-glance contexts, not for precise value reading.',
      ]},
    ],
    examples: [
      { label: 'Example · A trading terminal versus a consumer summary', text: 'A professional trading terminal packing dozens of dense, small multiples on one screen serves expert daily users well, who have built the visual fluency to parse it quickly — the same density would overwhelm an occasional consumer investment app user checking their portfolio once a week, who needs a simpler, more annotated summary view instead.' },
      { label: 'Example · Sparklines in a dashboard row', text: 'A row of account summaries each showing a tiny inline sparkline trend (with no axis labels at all) alongside the current balance number gives a fast, high-density sense of direction across many accounts at once — appropriate specifically because precise value-reading isn\'t the point of that particular view; a dedicated detail chart would serve that need separately.' },
    ],
    mistake: 'Applying a single density standard uniformly across an entire product, without considering that different screens serve genuinely different audiences and usage frequencies that warrant different density trade-offs.',
    interview: 'Being able to justify a density decision in terms of the specific audience\'s expertise and usage frequency — rather than a generic "keep it simple" or "show everything" rule — demonstrates real data-viz judgment.',
    related: ['c080', 'c106'],
  },
  c108: {
    id: 'c108', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 27 — Data Visualization',
    title: 'Dashboard Design',
    def: 'The specific discipline of designing a screen that surfaces multiple related metrics or visualizations together, organized to answer a specific set of questions for a specific audience — not simply a grid of every available chart.',
    why: 'The most common dashboard design failure is trying to show everything to everyone, producing a screen with no clear priority or narrative — a well-designed dashboard should be built around a specific set of decisions or questions its specific audience actually needs to answer.',
    blocks: [
      { t: 'ul', items: [
        'Start from the actual decisions the dashboard needs to support, not from an inventory of every metric that happens to be available — this determines which few metrics deserve prime, prominent placement.',
        'Establish a clear visual hierarchy so the most important number or trend is genuinely the first thing scanned (see Visual Hierarchy) — a dashboard where every metric has equal visual weight has, in effect, no real hierarchy at all.',
        'Design role-based defaults where the audience differs meaningfully (an executive summary view versus an operational detail view) rather than forcing one single dense view to serve every possible viewer equally poorly.',
      ]},
    ],
    examples: [
      { label: 'Example · A dashboard organized around decisions, not availability', text: 'An operations dashboard built specifically around "should we escalate any current issue right now" surfaces only the small number of metrics genuinely relevant to that decision prominently, with everything else available on drill-down — rather than displaying all forty tracked metrics with equal visual weight and forcing the viewer to hunt for what matters.' },
      { label: 'Example · Role-based dashboard views', text: 'A single underlying analytics platform might offer a simplified, headline-metrics executive view and a separate, much denser operational view for the analysts who need to investigate details — serving both audiences well, rather than compromising with one single view built for neither.' },
    ],
    mistake: 'Designing a dashboard by inventorying every available metric and displaying all of them with roughly equal prominence, rather than starting from the specific decisions or questions the dashboard\'s actual audience needs it to answer.',
    interview: 'Being asked to design a dashboard and starting by asking "what decision does this need to support, and for whom" — rather than immediately sketching chart types — demonstrates the right starting discipline.',
    related: ['c025', 'c107'],
  },
  c109: {
    id: 'c109', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 27 — Data Visualization',
    title: 'Accessible Viz',
    def: 'The practice of designing charts and data visualizations that remain understandable to users with color blindness, low vision, or screen readers — not relying on color alone to convey meaning, and providing genuine text alternatives for visual data.',
    why: 'Data visualizations are a frequently overlooked accessibility gap even in otherwise well-considered products, because color-coding is such a convenient default technique for distinguishing chart series — and it fails outright for a meaningful share of real users.',
    blocks: [
      { t: 'ul', items: [
        'Never rely on color alone to distinguish meaning — pairing color with a second encoding (a pattern, a shape, a direct text label) ensures the chart remains readable for colorblind users, who may not be able to distinguish red from green reliably at all.',
        'Ensure sufficient contrast between chart elements and their background, not just between text and background — a chart\'s own internal contrast requirements are frequently overlooked even in products with otherwise strong text-contrast discipline.',
        'Provide a genuine text alternative or an accessible underlying data table for screen-reader users, since a screen reader generally cannot meaningfully interpret a rendered chart image or SVG on its own.',
      ]},
    ],
    examples: [
      { label: 'Example · Distinguishing chart lines without relying on color alone', text: 'A line chart comparing three data series using color alone (red, green, blue) becomes ambiguous or unreadable for a colorblind user; adding distinct line patterns (solid, dashed, dotted) alongside the color, plus direct end-of-line labels, keeps the chart legible regardless of a viewer\'s color perception.' },
      { label: 'Example · A hidden accessible data table', text: 'Providing a properly-structured, screen-reader-accessible HTML table containing the exact same underlying data as a visual chart — even if visually hidden for sighted users — ensures a screen-reader user can access the same information the chart conveys, rather than encountering a meaningless image with no textual equivalent.' },
    ],
    mistake: 'Relying exclusively on color to distinguish data series in a chart, with no secondary encoding (pattern, label, shape) — a very common and easily fixed accessibility gap in otherwise well-designed data visualizations.',
    interview: 'Being asked to critique a dashboard\'s accessibility and specifically checking whether its charts rely on color alone is a good, concrete test of whether accessibility thinking extends beyond text and standard UI components.',
    related: ['c033', 'c108'],
  },
  c110: {
    id: 'c110', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 28 — Ethics & Emerging Surfaces', wide: true,
    title: 'Positive Design Ethics',
    def: 'A proactive framework for design ethics that goes beyond simply avoiding known dark patterns — actively scanning for unintended consequences, respecting user values, and asking whether users would genuinely consent to a design choice if they fully understood it.',
    why: 'Avoiding a checklist of known dark patterns is necessary but not sufficient — positive design ethics asks designers to actively anticipate harms that don\'t yet have a name, which is an increasingly important skill as products grow more complex and consequential.',
    blocks: [
      { t: 'ul', items: [
        'Consequence scanning — deliberately asking, before shipping, "what are the intended and unintended consequences of this feature, for different groups of people, including ones we don\'t typically consider?"',
        'Value-sensitive design — designing with explicit attention to human values (privacy, autonomy, fairness) as first-class design requirements, not an afterthought bolted on after the "real" design work is done.',
        'The "would users consent if they understood?" test — a practical, portable heuristic: if a design choice were fully and plainly explained to the user, would they genuinely agree to it? If the honest answer is no, that is a strong signal the design needs rethinking, regardless of its short-term metric impact.',
      ]},
    ],
    examples: [
      { label: 'Example · Running a consequence-scanning session', text: 'Before launching a feature that infers a user\'s likely income bracket from spending patterns to personalize offers, a consequence-scanning exercise might surface an unintended harm: the same inference could be used to justify offering worse loan terms to lower-income users — a consequence worth deliberately designing against before launch, not discovering afterward.' },
      { label: 'Example · Applying the consent test to a default setting', text: 'Asking "would users genuinely consent to this if we explained it plainly?" about an opt-out data-sharing default forces an honest reckoning — if the answer is clearly no, that is a strong signal to change the default, independent of whatever short-term metric benefit the current setting provides.' },
    ],
    mistake: 'Treating "we don\'t use any of the officially named dark patterns" as sufficient evidence of ethical design, without ever actively scanning for novel, unnamed, unintended consequences the current checklist doesn\'t yet cover.',
    interview: 'Describing a real consequence-scanning exercise, or the consent test applied to a real decision, demonstrates ethical reasoning as an active practice rather than a passive checklist compliance exercise.',
    related: ['c029'],
  },
  c111: {
    id: 'c111', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 28 — Ethics & Emerging Surfaces',
    title: 'Privacy by Design',
    def: 'The principle that privacy protections should be built into a product\'s architecture and defaults from the very start, rather than added as a compliance afterthought once a product is already built.',
    why: 'Regulations like India\'s DPDP Act and the EU\'s GDPR increasingly require privacy-protective defaults by law, but the underlying design principle predates and extends beyond legal compliance — it is good design practice independent of the specific regulatory requirement.',
    blocks: [
      { t: 'ul', items: [
        'Data minimization — collect only the specific data genuinely needed for a clearly stated purpose, rather than broadly collecting "just in case" it might be useful someday.',
        'Privacy-protective defaults — sensitive data-sharing settings should default to off/minimal, requiring active, informed opt-in, rather than defaulting to on and requiring active effort to opt out (see the Default Effect for why this default choice matters so much in practice).',
        'Transparency — clearly and plainly explaining what data is collected and why, in genuinely understandable language, not just in a lengthy legal document nobody reads.',
      ]},
    ],
    examples: [
      { label: 'Example · Minimizing a signup form to only what\'s needed', text: 'A signup flow requesting only an email address and password upfront, rather than also requesting full address, phone number, and date of birth before the user has experienced any real value yet, directly practices data minimization — additional data can always be requested later, contextually, when it\'s actually needed for a specific feature.' },
      { label: 'Example · A privacy-protective default in practice', text: 'Setting a new health-tracking feature\'s data-sharing-with-third-parties toggle to off by default, requiring an explicit, informed opt-in explained in plain language, directly applies privacy-by-design — and increasingly, is also a straightforward legal requirement in several jurisdictions for exactly this kind of sensitive data.' },
    ],
    mistake: 'Collecting broad categories of user data speculatively, on the chance it might become useful for some future feature, rather than practicing genuine data minimization tied to a specific, currently justified purpose.',
    interview: 'Being able to describe a real data-minimization or privacy-default decision you made — and why — demonstrates ethical design practice as lived experience, not just regulatory awareness.',
    related: ['c029', 'c110'],
  },
  c112: {
    id: 'c112', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 28 — Ethics & Emerging Surfaces',
    title: 'Voice & Spatial UI',
    def: 'An awareness-level introduction to voice interfaces (no visual affordances, requiring careful confirmation strategies) and spatial/AR/VR interfaces (requiring comfort and spatial-anchoring considerations) — surfaces that rarely appear in day-to-day interview questions but whose vocabulary is worth knowing.',
    why: 'These emerging surfaces come up in interviews infrequently, but knowing the core vocabulary and constraints signals breadth and future-readiness without needing deep specialist expertise — a little precise knowledge here goes a long way.',
    blocks: [
      { t: 'ul', items: [
        'Voice UI has no visual affordances at all — since a user can\'t "see" a menu of options, confirmation strategies (repeating back what was understood before acting) become essential to avoid silent misunderstandings, especially for consequential actions.',
        'Spatial/AR/VR interfaces need to consider physical comfort (avoiding motion that induces nausea) and spatial anchoring (whether virtual content stays convincingly fixed in physical space as the user moves).',
        'For most product-design roles, awareness-level fluency — knowing the vocabulary and core constraints — is sufficient; deep specialization in these surfaces is its own separate, narrower discipline.',
      ]},
    ],
    examples: [
      { label: 'Example · Confirmation strategy in a voice assistant', text: 'A voice assistant asked to "delete my last three messages" should audibly confirm exactly what it understood and intends to do ("Deleting your last 3 messages, is that right?") before acting, since there is no visual list for the user to silently review and correct the way there would be in a screen-based interface.' },
      { label: 'Example · Spatial anchoring in an AR furniture app', text: 'An AR app letting users preview furniture in their own room needs virtual objects to convincingly stay anchored to the same physical spot as the user walks around and views it from different angles — poor spatial anchoring (objects that drift or jitter) breaks the illusion and the usability of the whole feature immediately.' },
    ],
    mistake: 'Assuming standard screen-based UX principles transfer directly and completely to voice or spatial interfaces without adjustment — the complete absence of visual affordance in voice, and the physical-comfort requirements of spatial computing, are genuinely distinct constraints requiring their own specific design approaches.',
    interview: 'Being able to name at least one specific constraint unique to voice (no visual affordances, needing confirmation) or spatial (comfort, anchoring) interfaces demonstrates useful, low-effort awareness-level breadth.',
    related: ['c097'],
  },
  c113: {
    id: 'c113', bookId: 'curr', bookLabel: 'Curriculum · Expert', chapter: 'Week 28 — Ethics & Emerging Surfaces',
    title: 'Design Leadership Ladder',
    def: 'The typical individual-contributor design career progression — Senior → Staff → Principal — defined less by years of experience and more by the increasing scope of ambiguity a designer is trusted to navigate independently.',
    why: 'Understanding this ladder concretely is essential for framing your own career story in interviews, and "what changes at each level" is a commonly asked question in senior-level interview loops, particularly around leadership and seniority.',
    blocks: [
      { t: 'ul', items: [
        'Senior — reliably owns a well-defined project or feature area end to end, with correct judgment on well-understood problems, generally within a fairly clear existing scope.',
        'Staff — operates across an ambiguous problem space spanning multiple teams or systems, often defining the actual problem itself rather than being handed one, and influences direction well beyond their own immediate reporting line.',
        'Principal — sets direction at an organizational or company level, often operating in genuinely unprecedented territory with no existing playbook, and is looked to for judgment on the hardest, most consequential, least-defined problems.',
        'The through-line across all three levels is the same: seniority is fundamentally the scope of ambiguity you can absorb and navigate productively, not simply years of accumulated experience.',
      ]},
    ],
    examples: [
      { label: 'Example · Distinguishing Senior from Staff scope', text: 'A Senior designer might own a well-scoped feature redesign end to end, working within an existing team and existing constraints. A Staff designer might instead be asked to figure out whether the entire feature category should exist at all, working across several teams with no existing clear owner or precedent to follow — genuinely different scope of ambiguity, not just a bigger version of the same task.' },
      { label: 'Example · Framing your own trajectory using this ladder', text: 'Describing your own career progression explicitly in terms of increasing scope of ambiguity handled — rather than just years of tenure or number of projects shipped — directly demonstrates fluency with how senior interview panels themselves think about leveling.' },
    ],
    mistake: 'Equating seniority purely with years of experience or number of shipped projects, rather than the genuinely different quality of ambiguity being navigated — this is a common framing mistake in interview self-presentation.',
    interview: 'Being asked "what\'s the difference between a senior and a staff designer" is common in senior loops — the concise, well-regarded answer centers on scope of ambiguity absorbed, not tenure.',
    related: [],
  },

  c114: {
    id: 'c114', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 29 — The Case Study Skeleton', wide: true,
    title: 'Context → Evidence → Killed Options',
    def: 'A structural skeleton for presenting any case study: establish the context and constraints first, present the actual evidence that shaped the decision, then explicitly show which options were considered and rejected, and why.',
    why: 'The "killed options" step is the single most commonly missing piece in weak portfolio presentations — showing only the final solution, with no visible evidence of the alternatives considered, reads as either luck or a lack of real exploration, not deliberate judgment.',
    blocks: [
      { t: 'ul', items: [
        'Context — the real constraints of the project: timeline, team, technical limitations, business pressures — establishing the actual conditions the decision was made under, not an idealized version.',
        'Evidence — the actual research, data, or user feedback that informed the decision, cited specifically rather than asserted vaguely ("users told us" is weaker than a specific quote or a specific measured behavior).',
        'Killed options — at least one or two alternative directions genuinely considered and explicitly rejected, with the specific reason each was killed — this is what proves genuine exploration happened, rather than the presenter having arrived at the shown solution by luck or by only ever considering one idea.',
      ]},
    ],
    examples: [
      { label: 'Example · Presenting a killed option credibly', text: '"We also considered a fully automated recommendation engine, but killed it after early testing showed users didn\'t trust recommendations they couldn\'t see the reasoning behind — so we designed toward transparent, explainable suggestions instead" demonstrates genuine exploration and judgment, not just a lucky first guess.' },
      { label: 'Example · A case study missing this entirely', text: 'A case study that jumps straight from "here was the problem" to "here is the beautiful final solution," with no visible options considered or rejected along the way, leaves an interviewer unable to assess the actual judgment and reasoning process — only the polished final artifact.' },
    ],
    mistake: 'Presenting only the final, polished solution with no visible trace of the alternatives considered and rejected — this is one of the most commonly cited weaknesses in real portfolio reviews at senior levels.',
    interview: 'Preparing at least one genuine "killed option" and the specific reason it was rejected, for every project in your portfolio, directly strengthens the credibility of your case-study presentations.',
    related: ['c118'],
  },
  c115: {
    id: 'c115', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 29 — The Case Study Skeleton',
    title: 'Decision & Trade-offs',
    def: 'The explicit statement of what was ultimately decided, paired with a clear, honest articulation of what was sacrificed to make that decision — since every real design choice trades something away.',
    why: 'Naming a trade-off unprompted is repeatedly cited as one of the clearest, most reliable signals of seniority across nearly every interview framework — it demonstrates you understand that design decisions have costs, not just benefits.',
    blocks: [
      { t: 'p', text: 'Every meaningful design decision sacrifices something — speed for thoroughness, simplicity for power, consistency for a better fit to one specific context. Naming that sacrifice explicitly and honestly, rather than presenting a decision as a pure, costless win, is a specific, learnable habit that reads as seniority far more reliably than the decision\'s content alone.' },
      { t: 'ul', items: [
        'Infinite scroll increases engagement but destroys a sense of completion and footer accessibility — right for a casual social feed, wrong for a transactional list where users need to know they\'ve seen everything.',
        'Biometric-only login is fast and convenient but locks out shared or family devices — a real, meaningful segment of users in many markets, that a purely "faster is better" framing would miss entirely.',
      ]},
    ],
    examples: [
      { label: 'Example · Naming a trade-off unprompted', text: '"We chose biometric-only login for speed, which does trade away support for shared family devices — a real segment for us, so we kept a password fallback specifically for that case" shows the trade-off was seen and consciously managed, not simply missed.' },
      { label: 'Example · Presenting a decision as costless (a weaker answer)', text: 'Describing a redesign purely in terms of its benefits ("it\'s faster and cleaner") without ever naming what was given up to achieve that reads as either naive or dishonest to an experienced interviewer — virtually no real design decision is a pure, unqualified win.' },
    ],
    mistake: 'Presenting a design decision as an unambiguous win with no acknowledged downside — experienced interviewers read this as either inexperience or a lack of self-awareness about the decision\'s real trade-offs.',
    interview: 'The meta-skill across nearly every interview question in this entire curriculum: name the trade-off, cite the evidence, own the outcome — say all three in every answer and you will consistently read as senior.',
    related: ['c114'],
  },
  c116: {
    id: 'c116', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 29 — The Case Study Skeleton',
    title: 'Craft & Outcome',
    def: 'The final part of a strong case study: demonstrating the actual visual and interaction craft quality of the shipped work, paired with a real, ideally quantified outcome — not deliverables alone, but what changed as a result.',
    why: 'This is exactly where the "narrative gap" between service-company and product-company framing shows up most clearly: describing deliverables ("I designed 36 screens") versus describing outcomes ("task success improved 25% because of this specific decision").',
    blocks: [
      { t: 'p', text: 'Craft should be shown, not just claimed — specific screens, specific interaction details, specific systemization decisions, presented with enough precision that a craft-focused interviewer can genuinely evaluate the work\'s quality. Outcome should be stated in terms of a real, ideally numeric result and explicitly connected back to the specific design decisions that produced it, not asserted as a vague, unconnected afterthought.' },
      { t: 'ul', items: [
        'Quantified outcomes are strongest when possible ("+25% task success," "−30% handoff time") but a well-reasoned qualitative outcome, honestly described, is far better than a fabricated or unsupported number.',
        'Connect the outcome explicitly back to a specific design decision — "task success improved because we restructured around status visibility and receipt-first confirmation" is much stronger than an outcome floating disconnected from any explained mechanism.',
      ]},
    ],
    examples: [
      { label: 'Example · Deliverable-framing versus outcome-framing', text: '"I designed 36 screens for the new onboarding flow" is deliverable-framing — service-company language. "We restructured onboarding around reassurance and status visibility, which improved task completion by roughly 25%, measured via a five-user usability test before and after" is outcome-framing, connecting the specific craft decision to a specific measured result.' },
      { label: 'Example · An honest qualitative outcome when no number exists', text: 'When a precise number genuinely isn\'t available, "support tickets referencing this specific flow dropped to nearly zero after launch, based on our own review of ticket categories" is a credible, honest, still evidence-based outcome — stronger than either a fabricated statistic or no outcome claim at all.' },
    ],
    mistake: 'Describing a project purely in terms of what was produced (screens, flows, a design system) without ever connecting that work to a real outcome or change in the world — this is precisely the "service designer describing deliverables" pattern that reads as junior in product-company interviews.',
    interview: 'Every case study should end with a stated outcome connected explicitly back to a specific decision — this is the single habit most consistently cited as separating senior from junior candidates across every framework in this curriculum.',
    related: ['c115'],
  },
  c117: {
    id: 'c117', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 29 — The Case Study Skeleton',
    title: 'NDA-Safe Storytelling',
    def: 'The practice of presenting real, confidential work in a portfolio or interview by abstracting proprietary specifics (real company names, real user data, real internal metrics) while preserving the genuine substance of the design thinking and decisions.',
    why: 'Nearly every practicing designer has confidentiality obligations to past employers, and being unable to discuss real work at all due to NDA concerns is a common, avoidable weakness — learning to genericize responsibly, without inventing false claims, is a genuinely practical career skill.',
    blocks: [
      { t: 'ul', items: [
        'Replace specific proprietary names with generic but accurate category descriptions ("a fintech investment app\'s onboarding flow" rather than naming the actual company), while keeping the real problem, real constraints, and real decision-making intact.',
        'Round or generalize precise confidential metrics into ranges or relative descriptions ("a meaningful double-digit improvement" rather than a specific proprietary number) when the exact figure itself is confidential, while still conveying genuine magnitude.',
        'Never invent a statistic or outcome that didn\'t actually happen — the goal is responsible abstraction of real, true work, never fabrication dressed up as genericization.',
      ]},
    ],
    examples: [
      { label: 'Example · Genericizing a real project responsibly', text: 'Describing a real past project as "a premium ride-hailing app\'s booking flow" rather than naming the actual former employer, while keeping every actual design decision, constraint, and genuine outcome intact and honestly described, preserves both confidentiality and the real substance of the story.' },
      { label: 'Example · Rounding a confidential metric honestly', text: 'If the exact internal conversion-rate improvement is confidential, describing it honestly as "improved conversion by roughly a quarter, measured over a full quarter post-launch" preserves the real, true magnitude of the result without disclosing the precise proprietary figure.' },
    ],
    mistake: 'Either refusing to discuss any real past work at all due to NDA concerns (leaving interviewers with nothing concrete to evaluate), or fabricating specifics that never happened under the guise of "genericizing" — both are avoidable failure modes.',
    interview: 'Practicing your own real project stories in genericized form ahead of time — with real decisions and real (rounded, if needed) outcomes intact — ensures you can tell them confidently and confidentially under interview pressure.',
    related: ['c116'],
  },
  c118: {
    id: 'c118', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 30 — The Interview Loop', wide: true,
    title: 'Portfolio Presentation',
    def: 'The structured, typically 45-60 minute deep-dive interview round where a candidate walks through one or two real projects in detail — assessed as much on the QUALITY of reasoning presented as on the final visual output.',
    why: 'This is frequently the single highest-weighted round in an entire interview loop, and it is where the Case Study Skeleton (context, evidence, killed options, decision, trade-offs, outcome) gets applied in full, live, under real scrutiny and follow-up questions.',
    blocks: [
      { t: 'ul', items: [
        'Structure your time deliberately: don\'t spend the majority of it on visual walkthrough alone — allocate real time to process, evidence, and the reasoning behind key decisions, since that is what is actually being assessed most heavily.',
        'Anticipate and prepare for follow-up "why" questions at every major decision point — a strong presentation survives being interrupted and probed three questions deep without falling apart.',
        'Choose projects deliberately for what they can demonstrate — a project with genuine complexity, ambiguity, and a clear before/after outcome showcases more range than a project that was simply visually polished but straightforward.',
      ]},
    ],
    examples: [
      { label: 'Example · Surviving a deep "why" chain', text: 'An interviewer asking "why did you choose that flow?" then "why was that the right trade-off?" then "why didn\'t you test the alternative?" in sequence is a completely normal part of this round — being able to answer all three, each with a real, specific reason rather than a restated assertion, is exactly what\'s being tested.' },
      { label: 'Example · Choosing the right project to present', text: 'Presenting a project with a messy, ambiguous starting problem and a clear, evidence-backed final decision demonstrates more real judgment than presenting a visually beautiful project where the right answer was fairly obvious from the start — range of judgment matters more than polish alone in this specific round.' },
    ],
    mistake: 'Spending the overwhelming majority of presentation time walking through final screens visually, with little time left for the reasoning, evidence, and trade-offs that this round is actually weighted to assess most heavily.',
    interview: 'Rehearsing your case study out loud in full, including anticipated follow-up questions at each major decision, is genuinely effective, concrete preparation for this specific round.',
    related: ['c114', 'c115', 'c116'],
  },
  c119: {
    id: 'c119', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 30 — The Interview Loop',
    title: 'App Critique Framework',
    def: 'A structured, timed method for critiquing an unfamiliar app live in an interview: Who → Job → Red route → Works-because → Friction-because → One test — each phase with its own time allocation.',
    why: 'This exact framework structure is one of the most concretely reusable tools in this entire curriculum — following it precisely under time pressure is what separates a structured, scored-well critique from a rambling, unstructured one.',
    blocks: [
      { t: 'ul', items: [
        'Who (2 min) — name the specific audience, not a generic user.',
        'Job (2 min) — state the single core job this app is actually hired to do.',
        'Red route (4 min) — walk one critical journey aloud, screen by screen, narrating as you go.',
        'Works-because (3 min) — name specifically what works, and the underlying mechanism (a named law or heuristic), not just a vague compliment.',
        'Friction-because (3 min) — name specifically what fights the user, again in mechanism language, not just a vague complaint.',
        'One test (1 min) — propose one specific thing you\'d test first, with a metric explicitly attached.',
      ]},
    ],
    examples: [
      { label: 'Example · Naming mechanism, not taste', text: 'Instead of "the checkout feels off," a strong Works-because/Friction-because answer says "this works because the confirm button uses Fitts\'s Law well — large and thumb-reachable — but friction shows up in Hick\'s Law terms in the payment-method selector, which shows nine options with no default."' },
      { label: 'Example · A well-formed one-test proposal', text: '"I\'d test collapsing the payment-method selector to three curated defaults with an \'other\' option, measuring completion rate on that specific step" is a concrete, metric-attached test — far stronger than a vague closing remark like "I\'d test if a simpler version works better."' },
    ],
    mistake: 'Giving an all-negative critique with no acknowledgment of what genuinely works — balance is explicitly scored in most critique rubrics, and an all-negative critique is a well-documented junior tell.',
    interview: 'Practicing this exact six-phase structure, with a real timer, on one unfamiliar app per day is directly, concretely useful preparation — the structure itself is the skill being assessed as much as the specific critique content.',
    related: ['c011'],
  },
  c120: {
    id: 'c120', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 30 — The Interview Loop',
    title: 'Whiteboard Framework',
    def: 'A structured, timed method for solving an open-ended design problem live: Clarify → Users → Problem → Journey → Sketch → Close — with roughly 2/3/3/5/15/5 minutes allocated to each phase respectively.',
    why: 'This exact six-phase timing structure is one of the most heavily rehearsed frameworks in senior interview preparation, and poor time allocation — especially blowing the sketch phase\'s budget — is one of the most commonly cited, avoidable mistakes.',
    blocks: [
      { t: 'ul', items: [
        'Clarify (2 min) — ask about business context, platform, success metrics, and constraints before doing anything else.',
        'Users (3 min) — pick ONE primary persona and their specific job, resisting the urge to design for everyone at once.',
        'Problem (3 min) — narrow to one prioritized pain point, and say out loud why you\'re prioritizing it over other candidates.',
        'Journey (5 min) — map the flow including at least one unhappy path, not just the happy path.',
        'Sketch (15 min) — the largest time block; focus on key moments and critical screens, not exhaustively sketching every possible screen.',
        'Close (5 min) — state success metrics, what you\'d test first, and explicitly what you\'d cut for a v1.',
      ]},
      { t: 'diagram', id: 'wbtimeline', caption: 'The whiteboard framework timeline: 33 minutes allocated across six phases, with Sketch deliberately the largest block.' },
    ],
    examples: [
      { label: 'Example · Managing the sketch-phase budget', text: 'Most candidates who run out of time in this exercise do so specifically because they spend too long in Sketch trying to draw every conceivable screen — a stronger approach sketches only the two or three genuinely critical moments in depth, explicitly saying "I\'ll sketch the key moments, not every screen, given our time."' },
      { label: 'Example · Closing strong', text: 'Ending with "success would be measured by completion rate on this specific flow; I\'d test the onboarding step first since it\'s the riskiest assumption; and for a v1, I\'d cut the social-sharing feature entirely" hits all three required elements of a strong Close in one clean statement.' },
    ],
    mistake: 'Losing track of time and spending the majority of the exercise in the Sketch phase alone, leaving no time at all for a proper Close — this is one of the single most commonly cited, avoidable failure modes in this entire exercise.',
    interview: 'Practicing this framework daily with a real, visible timer — not just mentally rehearsing the steps — builds the actual time-management instinct that most separates strong performances from weak ones under real pressure.',
    related: ['c004'],
  },
  c121: {
    id: 'c121', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 30 — The Interview Loop',
    title: 'Behavioral / STAR',
    def: 'STAR (Situation, Task, Action, Result) is a structure for answering behavioral interview questions, ideally extended to end explicitly in a changed behavior or lesson genuinely applied since — not just a result stated and left hanging.',
    why: 'Behavioral questions ("tell me about a time you failed," "tell me about a conflict") are asked in nearly every interview loop, and an unstructured, rambling answer reads far worse than an equally substantive one delivered with clear STAR structure.',
    blocks: [
      { t: 'ul', items: [
        'Situation — brief context, just enough to understand the stakes, not a long preamble.',
        'Task — what you specifically were responsible for or trying to achieve.',
        'Action — what you specifically did (this should be the largest portion of the answer, and should center on YOUR actions, not "we" collectively).',
        'Result — what happened, ideally with some measure of outcome.',
        'A genuinely strong STAR answer adds an explicit fifth beat: what changed in your behavior or approach since, applied to later situations — this is what separates a story from a demonstrated, lasting lesson.',
      ]},
    ],
    examples: [
      { label: 'Example · A complete STAR answer with the changed-behavior beat', text: '"I designed an entire booking flow before validating that HNI users typically book through assistants, not themselves (Situation/Task). I had to redesign weeks of work once this became clear (Action/Result). Since then, I run three to five interviews before building any flow, every single time (changed behavior)" — the final sentence is what proves a genuine, lasting lesson was taken.' },
      { label: 'Example · A STAR answer missing the final beat', text: 'Stopping at "...and we had to redesign weeks of work" without ever stating what changed afterward leaves the story feeling like an isolated anecdote rather than evidence of genuine growth — the changed-behavior beat is what an interviewer is actually listening for.' },
    ],
    mistake: 'Answering behavioral questions with a rambling, unstructured narrative, or stopping at the Result without ever stating what changed in your approach afterward — both are common, avoidable weaknesses in otherwise substantive stories.',
    interview: 'Preparing five to seven real STAR stories in advance, each ending explicitly in a stated changed behavior, covers the large majority of common behavioral question categories with genuine, well-structured material.',
    related: ['c128'],
  },
  c122: {
    id: 'c122', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 31 — Craft & Systems Round', wide: true,
    title: 'Live Component Building',
    def: 'An interview format where a candidate builds a UI component (often a button, card, or form) live in a design tool, testing real, applied fluency with auto layout, tokens, variants, and states rather than a portfolio\'s polished final output.',
    why: 'This round exposes the gap between designers who can talk about systems concepts fluently and designers who can actually execute them live, under mild time pressure — real component-building fluency is directly, immediately visible here.',
    blocks: [
      { t: 'ul', items: [
        'Build with genuine auto layout (direction, gap, padding, hug/fill) from the very start — not a static, manually-positioned mockup that only looks correct for one specific piece of content.',
        'Use or reference tokens for color and spacing rather than picking arbitrary values live, even under time pressure — this is exactly the discipline the round is testing.',
        'Narrate your reasoning as you build — explaining why you chose a specific variant structure or state handling approach is often as important as the final visual result itself.',
        'Build in at least the core required states (default, hover, disabled) if time allows, rather than only the default appearance — this demonstrates the states discipline this whole curriculum has emphasized.',
      ]},
    ],
    examples: [
      { label: 'Example · Narrating a live building decision', text: 'Saying aloud "I\'m setting this button to hug both axes so it resizes correctly with different label lengths, and I\'m pulling the horizontal padding from our 16px spacing token rather than a custom value" demonstrates both the technical execution and the systems reasoning behind it simultaneously.' },
      { label: 'Example · Building states, not just the default', text: 'After building a working default button, spending the remaining time adding a visibly distinct disabled state (reduced opacity, no pointer cursor) rather than moving on to visual polish on the default state alone shows the states-completeness discipline this round is specifically looking for.' },
    ],
    mistake: 'Building a component with manually positioned elements and hardcoded, arbitrary values under time pressure, rather than using auto layout and tokens even when it feels slower in the moment — this is precisely the gap this round is designed to reveal.',
    interview: 'Practicing building common components (buttons, cards, form fields) from scratch using proper auto layout and tokens, with a timer, is the single most direct preparation for this specific round.',
    related: ['c071', 'c072', 'c076'],
  },
  c123: {
    id: 'c123', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 31 — Craft & Systems Round',
    title: 'Google vs Meta Rubrics',
    def: 'A comparison of the two most commonly referenced product-design interview loop structures: Google\'s loop typically weights craft depth and process rigor more heavily; Meta\'s loop typically weights product thinking and measurable impact more heavily, alongside craft.',
    why: 'Understanding which qualities a specific loop weights most heavily lets you calibrate how you allocate preparation time and how you frame your case studies for that specific company — this is genuinely practical, actionable interview-prep knowledge.',
    blocks: [
      { t: 'ul', items: [
        'A Google-style loop often includes: recruiter screen, a portfolio review call, sometimes a take-home or portfolio deep-dive, then an onsite with a longer portfolio presentation, an app critique, a whiteboard, and several 1:1s — with real interrogation on visual decisions down to spacing choices.',
        'A Meta-style loop often includes: recruiter, portfolio screen, a Product Sense/App Critique round, a Problem-Solving/Whiteboard round, and Background/Portfolio deep-dives — weighting product thinking and metrics connection at least as heavily as pixel-level craft, sometimes with a separate craft round as well.',
        'Levels at both companies map roughly to similar underlying scope-of-ambiguity concepts (see Design Leadership Ladder), even though the specific level-naming conventions differ between them.',
      ]},
    ],
    examples: [
      { label: 'Example · Calibrating preparation for a craft-heavy loop', text: 'Preparing for a loop known to interrogate visual decisions down to specific spacing and type choices means rehearsing being able to justify exact pixel-level decisions in your portfolio work, not just the high-level narrative.' },
      { label: 'Example · Calibrating preparation for a product-thinking-heavy loop', text: 'Preparing for a loop that weights product thinking and metrics heavily means ensuring every project story connects explicitly to a measurable business or user outcome, not just describing polished visual craft on its own.' },
    ],
    mistake: 'Preparing identically for every company\'s interview loop, without adjusting emphasis based on that specific company\'s known weighting between craft depth and product-thinking depth.',
    interview: 'Researching a specific target company\'s known interview loop structure in advance, and calibrating your case-study emphasis accordingly, is genuinely practical, high-leverage preparation.',
    related: ['c118', 'c124'],
  },
  c124: {
    id: 'c124', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 31 — Craft & Systems Round',
    title: 'Fail Signals to Avoid',
    def: 'A set of specific, commonly-cited phrases and patterns that show up verbatim in real interview debrief notes as reasons for rejection — recognizing and deliberately avoiding each one is directly actionable interview preparation.',
    why: 'These aren\'t vague, abstract weaknesses — they are the actual, specific language used in real debrief documents, which makes them unusually concrete and actionable to prepare against directly.',
    blocks: [
      { t: 'ul', items: [
        '"Solution in search of a problem" — sketched or designed before the problem was actually framed and validated.',
        '"Couldn\'t go deep" — the candidate\'s reasoning collapsed under a third consecutive "why" follow-up question.',
        '"No metrics instinct" — never volunteered a success metric or a guardrail metric unprompted.',
        '"Process theater" — recited a framework like Design Thinking or the Double Diamond mechanically, with no visible real judgment behind it.',
        '"Portfolio ≠ interview" — couldn\'t actually defend or explain the reasoning behind decisions shown in their own portfolio when asked live.',
        '"No spine" — caved and agreed with every piece of interviewer pushback instantly, with no genuine defended point of view.',
        '"One-player mode" — every project story described purely solo work, with no engineers, PMs, or researchers appearing anywhere in the narrative.',
      ]},
    ],
    examples: [
      { label: 'Example · Avoiding "no spine"', text: 'When an interviewer deliberately pushes back on a design decision to test your conviction, holding your reasoned position while genuinely engaging with the counterargument — rather than immediately agreeing just to seem collaborative — avoids this specific, commonly-cited fail signal.' },
      { label: 'Example · Avoiding "one-player mode"', text: 'Explicitly mentioning how you collaborated with a specific engineer or PM at a key decision point in a project story ("our lead engineer flagged a real feasibility constraint here, which changed our approach to...") avoids presenting every project as entirely solo work.' },
    ],
    mistake: 'Preparing case studies and answers without ever checking them against this specific list of known fail-signal patterns — since these are documented, recurring patterns, checking your own material against them directly is realistic, high-leverage preparation.',
    interview: 'Reviewing your own prepared answers and case studies specifically against this list before an interview — "am I at risk of reading as process theater here? Have I named a metric? Have I mentioned any collaborators?" — is concrete, actionable self-review.',
    related: ['c123'],
  },
  c125: {
    id: 'c125', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 31 — Craft & Systems Round',
    title: 'The Closing Sentence',
    def: 'The deliberate practice of ending any interview answer — a case study, a critique, a whiteboard — with one clear, memorable, confident closing statement, rather than letting the answer trail off vaguely.',
    why: 'Interviewers disproportionately remember how an answer ended, connecting directly to the Peak-End Rule — a strong, deliberate closing sentence measurably improves how a whole answer is remembered, independent of everything that came before it.',
    blocks: [
      { t: 'p', text: 'Many otherwise strong answers lose their impact by simply trailing off once the content is delivered, rather than landing on a clear, confident, deliberately-crafted final line. Preparing this closing sentence in advance for your key stories and exercises — practicing it explicitly, not leaving it to improvisation in the moment — is a small, low-effort habit with an outsized effect on how the whole answer is remembered.' },
      { t: 'ul', items: [
        'A strong closing sentence for a case study often restates the outcome and the key lesson in one crisp line: "That\'s the project where I learned to validate the user before validating the flow."',
        'A strong closing sentence for a whiteboard exercise explicitly states what you\'d test first and what you\'d cut for v1, landing the exercise on a decisive, confident note rather than trailing off mid-thought.',
      ]},
    ],
    examples: [
      { label: 'Example · A deliberately crafted closing line', text: 'Ending a case study with "ultimately, the 25% improvement came from treating reassurance as the actual design problem, not the visual polish — that\'s become a lens I apply to every project since" is a memorable, confident closing statement that lands the story\'s core lesson clearly.' },
      { label: 'Example · An answer that trails off (a weaker ending)', text: 'Ending the same story with "...and so that\'s basically what we did, yeah" leaves the interviewer to construct their own summary of what mattered — a real, missed opportunity given how disproportionately endings shape overall memory of an answer.' },
    ],
    mistake: 'Delivering strong content throughout an answer but letting it trail off vague and unfinished at the very end — given the Peak-End Rule, this measurably weakens how the entire answer is remembered, regardless of its actual substance.',
    interview: 'Preparing and rehearsing one specific, confident closing sentence for each of your core prepared stories in advance is a small, concrete, disproportionately effective piece of interview preparation.',
    related: ['c018'],
  },
  c126: {
    id: 'c126', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 32 — Portfolio & Positioning', wide: true,
    title: '5 Project Archetypes',
    def: 'Five common, well-understood portfolio project shapes — End-to-end app design, Feature redesign, Data/analytics dashboard, AI/conversational UX, Multi-platform/service design — each demonstrating a genuinely different kind of range to interviewers.',
    why: 'A well-rounded portfolio deliberately covers several of these archetypes rather than five variations of the same underlying skill, since each one demonstrates a distinct capability interviewers specifically look for.',
    blocks: [
      { t: 'ul', items: [
        'End-to-end app design — demonstrates ownership of a complete product experience from research through shipped craft.',
        'Feature redesign — demonstrates the ability to improve an existing, already-shipped system within real constraints, rather than only ever designing on a blank canvas.',
        'Data/analytics dashboard — demonstrates data-visualization and information-density judgment specifically.',
        'AI/conversational UX — demonstrates fluency with the emerging, increasingly important non-deterministic design challenges covered earlier in this curriculum.',
        'Multi-platform/service design — demonstrates systems-level and cross-touchpoint thinking beyond a single screen or single device.',
      ]},
    ],
    examples: [
      { label: 'Example · A deliberately diversified portfolio', text: 'A candidate presenting one end-to-end consumer app project, one enterprise feature-redesign project, and one AI-conversational project demonstrates three genuinely distinct kinds of range — versus presenting three different consumer end-to-end apps, which mostly demonstrates the same single capability three times.' },
      { label: 'Example · Choosing which archetype to build next', text: 'A candidate whose existing portfolio is strong in end-to-end app design but has no data-visualization or dashboard work might deliberately choose that specific archetype for their next portfolio project, precisely to fill a visible gap in demonstrated range.' },
    ],
    mistake: 'Building a portfolio of several projects that all demonstrate essentially the same underlying skill (end-to-end consumer app craft, for instance) rather than deliberately covering different archetypes that each showcase distinct capabilities.',
    interview: 'Auditing your own portfolio against these five archetypes and identifying which ones are missing is a concrete, actionable way to plan your next portfolio project deliberately.',
    related: ['c127'],
  },
  c127: {
    id: 'c127', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 32 — Portfolio & Positioning',
    title: 'Metrics-First Rewrites',
    def: 'The practice of rewriting existing portfolio case studies to lead with the outcome and metric first, rather than burying it at the end after a long process narrative — reordering emphasis without changing the underlying facts.',
    why: 'Many designers have genuinely strong outcomes buried at the bottom of a long, process-heavy case study — reordering the presentation to lead with impact is a purely structural change that often dramatically improves how the same real work reads to a business-minded audience.',
    blocks: [
      { t: 'p', text: 'A metrics-first rewrite doesn\'t invent new content — it restructures existing, real content so the outcome is stated early and clearly, with the process and craft details supporting that headline rather than delaying it. This single reordering exercise, applied to an existing case study with genuinely good underlying work, frequently transforms how compelling it reads, especially to interviewers and hiring managers who are scanning quickly.' },
      { t: 'ul', items: [
        'Lead with a one-sentence outcome statement before diving into process detail: "This project improved task completion by 25% by restructuring onboarding around reassurance" as an opening line, not a closing one.',
        'Keep all the same process, research, and craft detail that was already there — this is a reordering and emphasis exercise, not a content-cutting one.',
      ]},
    ],
    examples: [
      { label: 'Example · Before and after a metrics-first rewrite', text: 'A case study originally opening with "First, we conducted five user interviews, then synthesized an affinity map..." and only mentioning the 25% improvement in the final paragraph can be rewritten to open with "This redesign improved task completion by 25%. Here\'s how we got there, starting with five user interviews..." — identical real content, dramatically different, stronger first impression.' },
      { label: 'Example · Auditing your own case studies for buried outcomes', text: 'Reviewing an existing portfolio and asking "is the actual outcome stated anywhere in the first two sentences?" for each project is a fast, concrete way to identify exactly which case studies would benefit most from this specific rewrite.' },
    ],
    mistake: 'Assuming a case study with genuinely strong underlying work doesn\'t need restructuring, when in practice the outcome is often simply buried too deep in a long process narrative for a quickly-scanning reader to ever reach it.',
    interview: 'Rewriting your existing case studies\' opening lines to lead with outcome, before any process detail, is a fast, high-leverage editing exercise worth doing for every project in your portfolio.',
    related: ['c116', 'c126'],
  },
  c128: {
    id: 'c128', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 32 — Portfolio & Positioning',
    title: 'Anchor Stories (STAR)',
    def: 'A small set (typically three) of deeply rehearsed personal stories — commonly one metrics-driven story, one systems-and-influence story, and one ambiguity-and-pace story — built using the STAR structure and ready to be deployed across many different behavioral questions.',
    why: 'Rather than improvising a new story for every possible behavioral question, having three flexible, deeply-rehearsed anchor stories that can each be adapted to answer several different question types is a far more reliable, lower-stress preparation strategy.',
    blocks: [
      { t: 'ul', items: [
        'A metrics story — a project where your decision led to a clearly measurable, stated outcome, demonstrating both craft and business impact together.',
        'A systems-and-influence story — a project demonstrating you changed how a team or organization worked, not just what one screen looked like, often through influence without direct authority.',
        'An ambiguity-and-pace story — a project completed under genuine ambiguity, a tight deadline, or with no existing precedent to follow, demonstrating judgment under real pressure and constraint.',
        'Each of these three stories should be built with the full STAR structure, including the "changed behavior since" beat, and rehearsed well enough to adapt fluidly to several different specific questions, rather than needing an entirely new story for each one.',
      ]},
    ],
    examples: [
      { label: 'Example · One story answering several different questions', text: 'A single well-rehearsed systems-and-influence story — convincing a resistant team to adopt an accessible design pattern by having them experience the problem directly rather than arguing abstractly — can answer "tell me about influencing without authority," "tell me about a time you changed someone\'s mind," and "tell me about driving culture change," all from the same well-prepared material.' },
      { label: 'Example · Structuring the ambiguity-and-pace story', text: 'A project built under an immovable, non-negotiable deadline with genuinely no existing precedent to reference makes a strong ambiguity-and-pace anchor story — the STAR structure should highlight specifically how you decided what deserved excellence versus "good enough" under that real time pressure.' },
    ],
    mistake: 'Walking into interviews planning to improvise a fresh story for every individual behavioral question asked, rather than preparing a small number of flexible, deeply-rehearsed anchor stories in advance that can each answer several different question types.',
    interview: 'Preparing exactly these three anchor story types in advance, each fully STAR-structured with a stated changed-behavior beat, covers the large majority of behavioral questions you\'re likely to encounter across any interview loop.',
    related: ['c121'],
  },
  c129: {
    id: 'c129', bookId: 'curr', bookLabel: 'Curriculum · Industry Mastery', chapter: 'Week 32 — Portfolio & Positioning',
    title: 'Career-Switch Credibility',
    def: 'The specific set of framing techniques for candidates without a formal design degree, or transitioning from a different academic or professional background, to build genuine credibility through demonstrated skill and portfolio strength rather than credentials alone.',
    why: 'Career-switching into design without a traditional design education is an increasingly common, legitimate path, and this is a distinct, learnable positioning skill — not something that should be treated as an inherent disadvantage to simply apologize for.',
    blocks: [
      { t: 'ul', items: [
        'Lead with demonstrated skill and real outcomes, not academic background — a strong portfolio and well-articulated case studies speak far more directly to actual capability than any credential does.',
        'Reframe a non-design academic or professional background as a genuine asset where it honestly is one — prior domain expertise (engineering, business, a specific industry) can provide real, differentiated context and credibility other candidates lack.',
        'Never apologize for or over-explain the lack of a formal design degree — bringing it up defensively, unprompted, tends to draw more attention to it as a perceived weakness than simply presenting strong work confidently ever would.',
      ]},
    ],
    examples: [
      { label: 'Example · Reframing a non-design background as an asset', text: 'A candidate coming from a computer-applications academic background can genuinely and credibly frame that history as a real asset for design-systems and engineering-collaboration work specifically — rather than a credential gap to explain away or apologize for.' },
      { label: 'Example · Leading with portfolio strength, not credentials', text: 'Opening a portfolio review by walking directly into strong, well-reasoned case-study work — rather than opening with an explanation of an unconventional academic path — keeps the conversation focused on demonstrated capability from the very first minute.' },
    ],
    mistake: 'Proactively apologizing for or over-explaining a non-traditional path into design before an interviewer has even asked about it — this tends to invite more scrutiny of it as a perceived weakness than simply letting strong, confident work speak for itself.',
    interview: 'Preparing a brief, confident, one-line framing of your path into design (only if asked directly) that emphasizes demonstrated skill and relevant transferable strengths, rather than an extended, defensive justification, is the right level of preparation for this specific topic.',
    related: [],
  },

};

export const TOPIC_ORDER = [
  'c001', 'c002', 'c003', 'c004', 'c005', 'c006', 'c007', 'c008', 'c009', 'c010', 'c011', 'c012',
  'c013', 'c014', 'c015', 'c016', 'c017', 'c018', 'c019', 'c020', 'c021',
  'c022', 'c023', 'c024', 'c025', 'c026', 'c027', 'c028', 'c029', 'c030', 'c031', 'c032', 'c033', 'c034', 'c035', 'c036', 'c037',
  'c038', 'c039', 'c040', 'c041', 'c042', 'c043', 'c044', 'c045', 'c046', 'c047', 'c048', 'c049', 'c050', 'c051', 'c052', 'c053',
  'c054', 'c055', 'c056', 'c057', 'c058', 'c059', 'c060', 'c061', 'c062', 'c063', 'c064', 'c065', 'c066', 'c067', 'c068', 'c069',
  'c070', 'c071', 'c072', 'c073', 'c074', 'c075', 'c076', 'c077', 'c078', 'c079', 'c080', 'c081', 'c082', 'c083', 'c084', 'c085', 'c086', 'c087', 'c088', 'c089', 'c090', 'c091', 'c092', 'c093',
  'c094', 'c095', 'c096', 'c097', 'c098', 'c099', 'c100', 'c101', 'c102', 'c103', 'c104', 'c105', 'c106', 'c107', 'c108', 'c109', 'c110', 'c111', 'c112', 'c113',
  'c114', 'c115', 'c116', 'c117', 'c118', 'c119', 'c120', 'c121', 'c122', 'c123', 'c124', 'c125', 'c126', 'c127', 'c128', 'c129',
];
