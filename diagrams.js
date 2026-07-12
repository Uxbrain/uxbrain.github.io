// The 15 inline SVG diagrams from the DesignOS spec — monochrome ink + single indigo/accent color,
// driven entirely by CSS custom properties so they follow the active theme automatically.

export function dgScope() {
  return `<svg viewBox="0 0 760 264" role="img" aria-label="Nested scope: UI inside UX inside product design" style="width:100%;height:auto">
    <rect x="16" y="14" width="728" height="236" rx="14" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="40" y="46" font-size="13" font-weight="600" fill="var(--ink)" letter-spacing="1">PRODUCT DESIGN</text>
    <text x="40" y="66" font-size="12" fill="var(--ink2)">what should exist, why, and how success is measured</text>
    <rect x="40" y="86" width="470" height="140" rx="12" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="62" y="114" font-size="13" font-weight="600" fill="var(--ink)" letter-spacing="1">UX DESIGN</text>
    <text x="62" y="133" font-size="12" fill="var(--ink2)">how it works and flows</text>
    <rect x="62" y="148" width="300" height="60" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></rect>
    <text x="82" y="174" font-size="13" font-weight="600" fill="var(--accent)" letter-spacing="1">UI DESIGN</text>
    <text x="82" y="192" font-size="12" fill="var(--ink2)">how it looks and responds</text>
    <text x="720" y="46" font-size="12" font-style="italic" fill="var(--ink2)" text-anchor="end">is this the right thing, did it work?</text>
    <text x="530" y="114" font-size="12" font-style="italic" fill="var(--ink2)">does the person</text>
    <text x="530" y="130" font-size="12" font-style="italic" fill="var(--ink2)">succeed?</text>
    <text x="382" y="174" font-size="12" font-style="italic" fill="var(--ink2)">is it clear, usable,</text>
    <text x="382" y="190" font-size="12" font-style="italic" fill="var(--ink2)">beautiful?</text>
  </svg>`;
}

export function dgDD() {
  return `<svg viewBox="0 0 760 250" role="img" aria-label="Double Diamond: discover, define, develop, deliver" style="width:100%;height:auto">
    <text x="190" y="22" font-size="12" font-style="italic" fill="var(--ink2)" text-anchor="middle">Are we solving the RIGHT problem?</text>
    <text x="565" y="22" font-size="12" font-style="italic" fill="var(--ink2)" text-anchor="middle">Are we solving the problem RIGHT?</text>
    <polygon points="30,125 190,45 350,125 190,205" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></polygon>
    <polygon points="405,125 565,45 725,125 565,205" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></polygon>
    <line x1="190" y1="45" x2="190" y2="205" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="4 4"></line>
    <line x1="565" y1="45" x2="565" y2="205" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="4 4"></line>
    <line x1="355" y1="125" x2="392" y2="125" stroke="var(--ink2)" stroke-width="1.3"></line>
    <polygon points="392,120 402,125 392,130" fill="var(--ink2)"></polygon>
    <circle cx="30" cy="125" r="4" fill="var(--ink)"></circle>
    <circle cx="377" cy="125" r="4" fill="var(--ink)"></circle>
    <circle cx="725" cy="125" r="4" fill="var(--ink)"></circle>
    <text x="30" y="108" font-size="11" fill="var(--ink2)" text-anchor="middle">problem</text>
    <text x="377" y="108" font-size="11" fill="var(--ink2)" text-anchor="middle">brief / HMW</text>
    <text x="725" y="108" font-size="11" fill="var(--ink2)" text-anchor="middle">ship</text>
    <text x="110" y="232" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">DISCOVER</text>
    <text x="272" y="232" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">DEFINE</text>
    <text x="485" y="232" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">DEVELOP</text>
    <text x="648" y="232" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">DELIVER</text>
    <text x="110" y="248" font-size="11" fill="var(--ink2)" text-anchor="middle">explore widely</text>
    <text x="272" y="248" font-size="11" fill="var(--ink2)" text-anchor="middle">pick THE problem</text>
    <text x="485" y="248" font-size="11" fill="var(--ink2)" text-anchor="middle">explore solutions</text>
    <text x="648" y="248" font-size="11" fill="var(--ink2)" text-anchor="middle">pick &amp; ship</text>
  </svg>`;
}

export function dgFid() {
  return `<svg viewBox="0 0 760 216" role="img" aria-label="Fidelity ladder: sketch to wireframe to mockup to prototype to code" style="width:100%;height:auto">
    <rect x="20" y="58" width="124" height="64" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="168" y="58" width="124" height="64" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="316" y="58" width="124" height="64" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="464" y="58" width="124" height="64" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></rect>
    <rect x="612" y="58" width="124" height="64" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="82" y="86" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">Sketch</text>
    <text x="230" y="86" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">Wireframe</text>
    <text x="378" y="86" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">Mockup</text>
    <text x="526" y="86" font-size="13" font-weight="600" fill="var(--accent)" text-anchor="middle">Prototype</text>
    <text x="674" y="86" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">Code</text>
    <text x="82" y="106" font-size="11" fill="var(--ink2)" text-anchor="middle">concept &amp; direction</text>
    <text x="230" y="106" font-size="11" fill="var(--ink2)" text-anchor="middle">structure &amp; hierarchy</text>
    <text x="378" y="106" font-size="11" fill="var(--ink2)" text-anchor="middle">visual language</text>
    <text x="526" y="106" font-size="11" fill="var(--ink2)" text-anchor="middle">behavior &amp; flow</text>
    <text x="674" y="106" font-size="11" fill="var(--ink2)" text-anchor="middle">reality &amp; feel</text>
    <line x1="147" y1="90" x2="163" y2="90" stroke="var(--ink2)" stroke-width="1.2"></line>
    <line x1="295" y1="90" x2="311" y2="90" stroke="var(--ink2)" stroke-width="1.2"></line>
    <line x1="443" y1="90" x2="459" y2="90" stroke="var(--ink2)" stroke-width="1.2"></line>
    <line x1="591" y1="90" x2="607" y2="90" stroke="var(--ink2)" stroke-width="1.2"></line>
    <line x1="20" y1="158" x2="726" y2="158" stroke="var(--ink2)" stroke-width="1.2"></line>
    <polygon points="726,153 736,158 726,163" fill="var(--ink2)"></polygon>
    <text x="20" y="180" font-size="11" fill="var(--ink2)">cost &amp; commitment</text>
    <text x="378" y="206" font-size="12" font-style="italic" fill="var(--accent)" text-anchor="middle">Test with the lowest fidelity that answers the question.</text>
  </svg>`;
}

export function dgFunnel() {
  return `<svg viewBox="0 0 760 296" role="img" aria-label="AARRR funnel: acquisition, activation, retention, referral, revenue" style="width:100%;height:auto">
    <polygon points="60,16 580,16 548,60 92,60" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></polygon>
    <polygon points="92,72 548,72 516,116 124,116" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></polygon>
    <polygon points="124,128 516,128 484,172 156,172" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></polygon>
    <polygon points="156,184 484,184 452,228 188,228" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></polygon>
    <polygon points="188,240 452,240 420,284 220,284" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></polygon>
    <text x="320" y="43" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">ACQUISITION</text>
    <text x="320" y="99" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">ACTIVATION</text>
    <text x="320" y="155" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">RETENTION</text>
    <text x="320" y="211" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">REFERRAL</text>
    <text x="320" y="267" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">REVENUE</text>
    <text x="600" y="43" font-size="12" fill="var(--ink2)">users arrive</text>
    <text x="600" y="99" font-size="12" fill="var(--ink2)">first value moment — define it</text>
    <text x="600" y="155" font-size="12" fill="var(--ink2)">they come back</text>
    <text x="600" y="211" font-size="12" fill="var(--ink2)">they bring others</text>
    <text x="600" y="267" font-size="12" fill="var(--ink2)">they pay</text>
  </svg>`;
}

export function dgMatrix() {
  return `<svg viewBox="0 0 760 300" role="img" aria-label="Impact and effort two-by-two matrix" style="width:100%;height:auto">
    <rect x="90" y="28" width="300" height="116" fill="var(--accent-soft)"></rect>
    <line x1="90" y1="260" x2="710" y2="260" stroke="var(--ink)" stroke-width="1.3"></line>
    <polygon points="710,255 720,260 710,265" fill="var(--ink)"></polygon>
    <line x1="90" y1="260" x2="90" y2="30" stroke="var(--ink)" stroke-width="1.3"></line>
    <polygon points="85,30 90,20 95,30" fill="var(--ink)"></polygon>
    <line x1="400" y1="28" x2="400" y2="260" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="4 4"></line>
    <line x1="90" y1="144" x2="710" y2="144" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="4 4"></line>
    <text x="240" y="80" font-size="14" font-weight="600" fill="var(--accent)" text-anchor="middle">Quick wins</text>
    <text x="240" y="99" font-size="11" fill="var(--ink2)" text-anchor="middle">do first — broken back-button fix</text>
    <text x="555" y="80" font-size="14" font-weight="600" fill="var(--ink)" text-anchor="middle">Big bets</text>
    <text x="555" y="99" font-size="11" fill="var(--ink2)" text-anchor="middle">prototype cheaply before committing</text>
    <text x="240" y="196" font-size="14" font-weight="600" fill="var(--ink2)" text-anchor="middle">Fill-ins</text>
    <text x="240" y="215" font-size="11" fill="var(--ink2)" text-anchor="middle">when idle</text>
    <text x="555" y="196" font-size="14" font-weight="600" fill="var(--ink2)" text-anchor="middle">Money pits</text>
    <text x="555" y="215" font-size="11" fill="var(--ink2)" text-anchor="middle">never — "AI advisor" without evidence</text>
    <text x="712" y="282" font-size="12" fill="var(--ink2)" text-anchor="end">Effort →</text>
    <text x="76" y="30" font-size="12" fill="var(--ink2)" text-anchor="end">Impact ↑</text>
  </svg>`;
}

export function dgTokens() {
  return `<svg viewBox="0 0 760 210" role="img" aria-label="Token hierarchy: primitive to semantic to component" style="width:100%;height:auto">
    <rect x="20" y="60" width="200" height="90" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="120" y="90" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">PRIMITIVE</text>
    <text x="120" y="112" font-size="11" font-family="monospace" fill="var(--ink2)" text-anchor="middle">blue-600: #1A56DB</text>
    <text x="120" y="130" font-size="11" fill="var(--ink2)" text-anchor="middle">raw values, 10–12 step ramp</text>
    <line x1="228" y1="105" x2="272" y2="105" stroke="var(--ink2)" stroke-width="1.3"></line>
    <polygon points="272,100 282,105 272,110" fill="var(--ink2)"></polygon>
    <rect x="290" y="60" width="220" height="90" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"></rect>
    <text x="400" y="90" font-size="13" font-weight="600" fill="var(--accent)" text-anchor="middle">SEMANTIC</text>
    <text x="400" y="112" font-size="11" font-family="monospace" fill="var(--ink2)" text-anchor="middle">color-action-primary</text>
    <text x="400" y="130" font-size="11" fill="var(--ink2)" text-anchor="middle">named role, not value</text>
    <line x1="518" y1="105" x2="562" y2="105" stroke="var(--ink2)" stroke-width="1.3"></line>
    <polygon points="562,100 572,105 562,110" fill="var(--ink2)"></polygon>
    <rect x="580" y="60" width="160" height="90" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="660" y="90" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">COMPONENT</text>
    <text x="660" y="112" font-size="11" font-family="monospace" fill="var(--ink2)" text-anchor="middle">button-primary-bg</text>
    <text x="660" y="130" font-size="11" fill="var(--ink2)" text-anchor="middle">consumed in UI</text>
    <text x="380" y="190" font-size="12" font-style="italic" fill="var(--accent)" text-anchor="middle">Change one primitive → every semantic and component role updates.</text>
  </svg>`;
}

export function dgStates() {
  return `<svg viewBox="0 0 760 190" role="img" aria-label="The five screen states: empty, loading, ideal, partial, error" style="width:100%;height:auto">
    <rect x="10" y="20" width="136" height="100" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3" stroke-dasharray="3 3"></rect>
    <rect x="164" y="20" width="136" height="100" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="318" y="20" width="136" height="100" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></rect>
    <rect x="472" y="20" width="136" height="100" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="626" y="20" width="126" height="100" rx="10" fill="none" stroke="var(--error)" stroke-width="1.3"></rect>
    <circle cx="78" cy="55" r="9" fill="none" stroke="var(--ink2)" stroke-width="1.3" stroke-dasharray="2 2"></circle>
    <rect x="188" y="46" width="88" height="10" rx="4" fill="var(--ink2)" opacity="0.35"></rect>
    <rect x="188" y="62" width="60" height="10" rx="4" fill="var(--ink2)" opacity="0.35"></rect>
    <rect x="342" y="46" width="88" height="8" rx="3" fill="var(--accent)"></rect>
    <rect x="342" y="60" width="60" height="8" rx="3" fill="var(--ink2)"></rect>
    <rect x="342" y="74" width="72" height="8" rx="3" fill="var(--ink2)"></rect>
    <rect x="496" y="46" width="88" height="8" rx="3" fill="var(--ink2)"></rect>
    <line x1="496" y1="64" x2="584" y2="64" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="2 2"></line>
    <circle cx="689" cy="55" r="9" fill="none" stroke="var(--error)" stroke-width="1.3"></circle>
    <line x1="685" y1="51" x2="693" y2="59" stroke="var(--error)" stroke-width="1.3"></line>
    <line x1="693" y1="51" x2="685" y2="59" stroke="var(--error)" stroke-width="1.3"></line>
    <text x="78" y="100" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Empty</text>
    <text x="232" y="100" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Loading</text>
    <text x="386" y="100" font-size="12" font-weight="600" fill="var(--accent)" text-anchor="middle">Ideal</text>
    <text x="540" y="100" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Partial</text>
    <text x="689" y="100" font-size="12" font-weight="600" fill="var(--error)" text-anchor="middle">Error</text>
    <text x="78" y="114" font-size="10" fill="var(--ink2)" text-anchor="middle">onboarding moment</text>
    <text x="232" y="114" font-size="10" fill="var(--ink2)" text-anchor="middle">skeleton</text>
    <text x="386" y="114" font-size="10" fill="var(--ink2)" text-anchor="middle">the reviewed state</text>
    <text x="540" y="114" font-size="10" fill="var(--ink2)" text-anchor="middle">stale / cached</text>
    <text x="689" y="114" font-size="10" fill="var(--ink2)" text-anchor="middle">say how to fix</text>
    <text x="380" y="168" font-size="12" font-style="italic" fill="var(--ink2)" text-anchor="middle">Designers present the ideal state; users live in the other four.</text>
  </svg>`;
}

export function dgRetention() {
  return `<svg viewBox="0 0 620 220" role="img" aria-label="Cohort retention curve, good vs bad" style="width:100%;height:auto">
    <line x1="50" y1="20" x2="50" y2="190" stroke="var(--ink)" stroke-width="1.3"></line>
    <line x1="50" y1="190" x2="600" y2="190" stroke="var(--ink)" stroke-width="1.3"></line>
    <polygon points="595,185 605,190 595,195" fill="var(--ink)"></polygon>
    <path d="M50,40 C120,110 160,150 250,160 C350,168 450,170 600,171" fill="none" stroke="var(--accent)" stroke-width="2.2"></path>
    <path d="M50,40 C110,120 150,168 220,182 C280,190 350,187 600,188" fill="none" stroke="var(--error)" stroke-width="2" stroke-dasharray="5 4"></path>
    <text x="605" y="168" font-size="12" font-weight="600" fill="var(--accent)">Good — flattens (habit)</text>
    <text x="605" y="190" font-size="12" font-weight="600" fill="var(--error)">Bad — decays to zero</text>
    <text x="30" y="20" font-size="11" fill="var(--ink2)" text-anchor="end">100%</text>
    <text x="30" y="192" font-size="11" fill="var(--ink2)" text-anchor="end">0%</text>
    <text x="325" y="212" font-size="12" fill="var(--ink2)" text-anchor="middle">days since first use →</text>
  </svg>`;
}

export function dgKano() {
  return `<svg viewBox="0 0 620 260" role="img" aria-label="Kano model: basic, performance, delighter curves" style="width:100%;height:auto">
    <line x1="310" y1="20" x2="310" y2="240" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="3 3"></line>
    <line x1="60" y1="130" x2="560" y2="130" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="3 3"></line>
    <line x1="60" y1="230" x2="560" y2="230" stroke="var(--ink)" stroke-width="1.3"></line>
    <polygon points="555,225 565,230 555,235" fill="var(--ink)"></polygon>
    <line x1="60" y1="230" x2="60" y2="30" stroke="var(--ink)" stroke-width="1.3"></line>
    <polygon points="55,30 60,20 65,30" fill="var(--ink)"></polygon>
    <path d="M60,150 C200,150 250,150 560,40" fill="none" stroke="var(--accent)" stroke-width="2"></path>
    <path d="M60,220 C250,150 350,110 560,60" fill="none" stroke="var(--ink)" stroke-width="2"></path>
    <path d="M60,225 C120,222 200,150 560,140" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="5 4"></path>
    <text x="500" y="35" font-size="12" font-weight="600" fill="var(--accent)">Delighter</text>
    <text x="480" y="55" font-size="12" font-weight="600" fill="var(--ink)">Performance</text>
    <text x="420" y="132" font-size="12" font-weight="600" fill="var(--ink2)">Basic</text>
    <text x="565" y="250" font-size="12" fill="var(--ink2)" text-anchor="end">feature investment →</text>
    <text x="30" y="25" font-size="12" fill="var(--ink2)" text-anchor="middle" transform="rotate(-90 30 130)">satisfaction ↑</text>
  </svg>`;
}

export function dgComponent() {
  return `<svg viewBox="0 0 620 240" role="img" aria-label="Component anatomy: a button annotated with padding, radius and height labels" style="width:100%;height:auto">
    <rect x="210" y="90" width="200" height="48" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></rect>
    <text x="310" y="119" font-size="14" font-weight="600" fill="var(--accent)" text-anchor="middle">Invest ₹5,000</text>
    <line x1="210" y1="160" x2="410" y2="160" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="210" y1="155" x2="210" y2="165" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="410" y1="155" x2="410" y2="165" stroke="var(--ink2)" stroke-width="1"></line>
    <text x="310" y="178" font-size="11" fill="var(--ink2)" text-anchor="middle">min-width 64px, hug label + 20px padding each side</text>
    <line x1="430" y1="90" x2="430" y2="138" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="425" y1="90" x2="435" y2="90" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="425" y1="138" x2="435" y2="138" stroke="var(--ink2)" stroke-width="1"></line>
    <text x="445" y="118" font-size="11" fill="var(--ink2)">48px height</text>
    <path d="M210,90 Q210,90 218,90" fill="none" stroke="var(--ink)" stroke-width="1.5"></path>
    <text x="150" y="80" font-size="11" fill="var(--ink2)" text-anchor="end">8px radius</text>
    <line x1="153" y1="82" x2="212" y2="93" stroke="var(--ink2)" stroke-width="1"></line>
    <text x="310" y="210" font-size="12" font-style="italic" fill="var(--accent)" text-anchor="middle">Every dimension named and sourced from a token — never eyeballed.</text>
  </svg>`;
}

export function dgSpacing() {
  return `<svg viewBox="0 0 620 160" role="img" aria-label="Spacing scale rendered at actual size: 4, 8, 16, 24, 32, 48px" style="width:100%;height:auto">
    <rect x="20" y="40" width="4" height="24" fill="var(--accent)"></rect>
    <rect x="60" y="40" width="8" height="24" fill="var(--accent)"></rect>
    <rect x="104" y="40" width="16" height="24" fill="var(--accent)"></rect>
    <rect x="156" y="40" width="24" height="24" fill="var(--accent)"></rect>
    <rect x="216" y="40" width="32" height="24" fill="var(--accent)"></rect>
    <rect x="284" y="40" width="48" height="24" fill="var(--accent)"></rect>
    <text x="22" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">4</text>
    <text x="64" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">8</text>
    <text x="112" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">16</text>
    <text x="168" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">24</text>
    <text x="232" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">32</text>
    <text x="308" y="84" font-size="11" fill="var(--ink2)" text-anchor="middle">48</text>
    <text x="20" y="120" font-size="12" fill="var(--ink2)">Every gap in the product is one of these six values — nothing off-scale.</text>
  </svg>`;
}

export function dgTouch() {
  return `<svg viewBox="0 0 400 200" role="img" aria-label="Touch target anatomy: a 24px icon inside a 48px tappable area" style="width:100%;height:auto">
    <rect x="150" y="46" width="100" height="100" rx="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3"></rect>
    <rect x="176" y="72" width="48" height="48" rx="6" fill="var(--ink)"></rect>
    <text x="200" y="100" font-size="11" fill="var(--bg)" text-anchor="middle" dy="4">icon</text>
    <text x="200" y="170" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">24px icon inside a 48×48 tappable area</text>
    <text x="200" y="30" font-size="11" fill="var(--accent)" text-anchor="middle">tappable region (dashed)</text>
  </svg>`;
}

export function dgTypescale() {
  return `<svg viewBox="0 0 620 260" role="img" aria-label="Type scale rendered live at actual sizes" style="width:100%;height:auto">
    <text x="10" y="45" font-size="39" font-weight="700" fill="var(--ink)">Display 39</text>
    <text x="10" y="80" font-size="31" font-weight="700" fill="var(--ink)">H1 31</text>
    <text x="10" y="110" font-size="25" font-weight="600" fill="var(--ink)">H2 25</text>
    <text x="10" y="136" font-size="20" font-weight="600" fill="var(--ink)">H3 20</text>
    <text x="10" y="160" font-size="16" font-weight="400" fill="var(--ink)">Body 16 — the base size</text>
    <text x="10" y="180" font-size="14" font-weight="400" fill="var(--ink2)">Body small 14</text>
    <text x="10" y="198" font-size="12" font-weight="500" fill="var(--ink2)">Caption 12</text>
    <text x="10" y="230" font-size="12" font-style="italic" fill="var(--accent)">1.25 ratio from a 16px base — hierarchy from weight and size together.</text>
  </svg>`;
}

export function dgRag() {
  return `<svg viewBox="0 0 760 180" role="img" aria-label="RAG pipeline: query, retrieve, context, answer with citations" style="width:100%;height:auto">
    <rect x="20" y="55" width="140" height="60" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="210" y="55" width="140" height="60" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"></rect>
    <rect x="400" y="55" width="140" height="60" rx="10" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="590" y="55" width="150" height="60" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"></rect>
    <text x="90" y="90" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">QUERY</text>
    <text x="280" y="90" font-size="13" font-weight="600" fill="var(--accent)" text-anchor="middle">RETRIEVE</text>
    <text x="470" y="90" font-size="13" font-weight="600" fill="var(--ink)" text-anchor="middle">CONTEXT</text>
    <text x="665" y="83" font-size="13" font-weight="600" fill="var(--accent)" text-anchor="middle">ANSWER</text>
    <text x="665" y="100" font-size="10" fill="var(--ink2)" text-anchor="middle">+ citations</text>
    <line x1="160" y1="85" x2="204" y2="85" stroke="var(--ink2)" stroke-width="1.3"></line><polygon points="204,80 214,85 204,90" fill="var(--ink2)"></polygon>
    <line x1="350" y1="85" x2="394" y2="85" stroke="var(--ink2)" stroke-width="1.3"></line><polygon points="394,80 404,85 394,90" fill="var(--ink2)"></polygon>
    <line x1="540" y1="85" x2="584" y2="85" stroke="var(--ink2)" stroke-width="1.3"></line><polygon points="584,80 594,85 584,90" fill="var(--ink2)"></polygon>
    <text x="280" y="140" font-size="11" fill="var(--ink2)" text-anchor="middle">real documents (factsheets, policy docs)</text>
  </svg>`;
}

export function dgWbtimeline() {
  return `<svg viewBox="0 0 760 120" role="img" aria-label="Whiteboard framework timeline: 33 minutes allocated across six phases" style="width:100%;height:auto">
    <rect x="10" y="30" width="46" height="40" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="56" y="30" width="69" height="40" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="125" y="30" width="69" height="40" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="194" y="30" width="115" height="40" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="309" y="30" width="345" height="40" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"></rect>
    <rect x="654" y="30" width="115" height="40" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="33" y="54" font-size="11" font-weight="600" fill="var(--ink)" text-anchor="middle">Clarify</text>
    <text x="90" y="54" font-size="11" font-weight="600" fill="var(--ink)" text-anchor="middle">Users</text>
    <text x="159" y="54" font-size="11" font-weight="600" fill="var(--ink)" text-anchor="middle">Problem</text>
    <text x="251" y="54" font-size="11" font-weight="600" fill="var(--ink)" text-anchor="middle">Journey</text>
    <text x="481" y="54" font-size="12" font-weight="700" fill="var(--accent)" text-anchor="middle">Sketch</text>
    <text x="711" y="54" font-size="11" font-weight="600" fill="var(--ink)" text-anchor="middle">Close</text>
    <text x="33" y="84" font-size="10" fill="var(--ink2)" text-anchor="middle">2m</text>
    <text x="90" y="84" font-size="10" fill="var(--ink2)" text-anchor="middle">3m</text>
    <text x="159" y="84" font-size="10" fill="var(--ink2)" text-anchor="middle">3m</text>
    <text x="251" y="84" font-size="10" fill="var(--ink2)" text-anchor="middle">5m</text>
    <text x="481" y="84" font-size="10" fill="var(--accent)" text-anchor="middle">15m — most candidates blow this budget</text>
    <text x="711" y="84" font-size="10" fill="var(--ink2)" text-anchor="middle">5m</text>
  </svg>`;
}

export function dgProspect() {
  return `<svg viewBox="0 0 620 320" role="img" aria-label="Prospect Theory value function: steeper for losses than gains" style="width:100%;height:auto">
    <line x1="40" y1="160" x2="580" y2="160" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="310" y1="20" x2="310" y2="300" stroke="var(--ink2)" stroke-width="1"></line>
    <path d="M310,160 C370,110 430,90 560,70" fill="none" stroke="var(--accent)" stroke-width="2.4"></path>
    <path d="M310,160 C260,230 220,270 60,290" fill="none" stroke="var(--error)" stroke-width="2.4"></path>
    <text x="560" y="60" font-size="12" font-weight="600" fill="var(--accent)" text-anchor="end">Gains — diminishing sensitivity</text>
    <text x="60" y="305" font-size="12" font-weight="600" fill="var(--error)" text-anchor="start">Losses — steeper, felt ~2x harder</text>
    <text x="320" y="35" font-size="11" fill="var(--ink2)">Value felt</text>
    <text x="565" y="178" font-size="11" fill="var(--ink2)" text-anchor="end">Gain →</text>
    <text x="55" y="178" font-size="11" fill="var(--ink2)">← Loss</text>
    <circle cx="310" cy="160" r="4" fill="var(--ink)"></circle>
    <text x="310" y="145" font-size="11" fill="var(--ink2)" text-anchor="middle">reference point</text>
  </svg>`;
}

export function dgWeber() {
  return `<svg viewBox="0 0 620 220" role="img" aria-label="Weber's Law: the same absolute change matters less at a larger baseline" style="width:100%;height:auto">
    <rect x="40" y="140" width="16" height="40" fill="var(--ink2)"></rect>
    <rect x="40" y="120" width="16" height="20" fill="var(--accent)"></rect>
    <text x="48" y="185" font-size="11" fill="var(--ink2)" text-anchor="middle">₹50</text>
    <text x="48" y="105" font-size="11" fill="var(--accent)" text-anchor="middle">+₹10</text>
    <rect x="320" y="60" width="16" height="120" fill="var(--ink2)"></rect>
    <rect x="320" y="50" width="16" height="10" fill="var(--accent)"></rect>
    <text x="328" y="195" font-size="11" fill="var(--ink2)" text-anchor="middle">₹5,000</text>
    <text x="328" y="42" font-size="11" fill="var(--accent)" text-anchor="middle">+₹10</text>
    <text x="230" y="30" font-size="12" font-style="italic" fill="var(--ink2)" text-anchor="middle">Same ₹10 change — barely noticeable at a high baseline, obvious at a low one.</text>
  </svg>`;
}

export function dgSus() {
  return `<svg viewBox="0 0 620 220" role="img" aria-label="SUS score gauge from 0 to 100 with adjective ratings" style="width:100%;height:auto">
    <path d="M60,180 A210,210 0 0 1 560,180" fill="none" stroke="var(--border)" stroke-width="22"></path>
    <path d="M60,180 A210,210 0 0 1 340,10" fill="none" stroke="var(--error)" stroke-width="22"></path>
    <path d="M340,10 A210,210 0 0 1 460,45" fill="none" stroke="var(--warn)" stroke-width="22"></path>
    <path d="M460,45 A210,210 0 0 1 560,180" fill="none" stroke="var(--accent)" stroke-width="22"></path>
    <text x="310" y="120" font-size="28" font-weight="700" fill="var(--ink)" text-anchor="middle">68</text>
    <text x="310" y="145" font-size="12" fill="var(--ink2)" text-anchor="middle">average SUS score</text>
    <text x="90" y="205" font-size="11" fill="var(--error)">Poor (&lt;51)</text>
    <text x="370" y="30" font-size="11" fill="var(--warn)">OK (51–68)</text>
    <text x="480" y="205" font-size="11" fill="var(--accent)" text-anchor="end">Good (&gt;68)</text>
  </svg>`;
}

export function dgEmpathyMap() {
  return `<svg viewBox="0 0 620 380" role="img" aria-label="Empathy map: four quadrants — Says, Thinks, Does, Feels" style="width:100%;height:auto">
    <line x1="310" y1="20" x2="310" y2="360" stroke="var(--ink2)" stroke-width="1"></line>
    <line x1="40" y1="190" x2="580" y2="190" stroke="var(--ink2)" stroke-width="1"></line>
    <rect x="40" y="20" width="270" height="170" rx="10" fill="none" stroke="var(--border)" stroke-width="1.3"></rect>
    <rect x="310" y="20" width="270" height="170" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></rect>
    <rect x="40" y="190" width="270" height="170" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></rect>
    <rect x="310" y="190" width="270" height="170" rx="10" fill="none" stroke="var(--border)" stroke-width="1.3"></rect>
    <text x="60" y="45" font-size="13" font-weight="700" fill="var(--ink)">SAYS</text>
    <text x="330" y="45" font-size="13" font-weight="700" fill="var(--accent)">THINKS</text>
    <text x="60" y="215" font-size="13" font-weight="700" fill="var(--accent)">DOES</text>
    <text x="330" y="215" font-size="13" font-weight="700" fill="var(--ink)">FEELS</text>
    <text x="60" y="70" font-size="11" fill="var(--ink2)">Direct quotes,</text>
    <text x="60" y="86" font-size="11" fill="var(--ink2)">verbatim statements</text>
    <text x="330" y="70" font-size="11" fill="var(--ink2)">Inferred, unstated</text>
    <text x="330" y="86" font-size="11" fill="var(--ink2)">beliefs and worries</text>
    <text x="60" y="240" font-size="11" fill="var(--ink2)">Observed actions</text>
    <text x="60" y="256" font-size="11" fill="var(--ink2)">and behaviors</text>
    <text x="330" y="240" font-size="11" fill="var(--ink2)">Inferred emotional</text>
    <text x="330" y="256" font-size="11" fill="var(--ink2)">state</text>
    <text x="310" y="10" font-size="11" font-style="italic" fill="var(--ink2)" text-anchor="middle">The gap between Says and Does is usually the real insight.</text>
  </svg>`;
}

export function dgAtomic() {
  return `<svg viewBox="0 0 760 160" role="img" aria-label="Atomic Design ladder: atoms, molecules, organisms, templates, pages" style="width:100%;height:auto">
    <circle cx="60" cy="80" r="26" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"></circle>
    <circle cx="220" cy="80" r="34" fill="none" stroke="var(--ink2)" stroke-width="1.3"></circle>
    <circle cx="230" cy="72" r="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"></circle>
    <circle cx="212" cy="90" r="7" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"></circle>
    <rect x="380" y="40" width="100" height="80" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <rect x="392" y="52" width="30" height="20" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1"></rect>
    <rect x="392" y="80" width="76" height="10" fill="var(--ink2)" opacity=".4"></rect>
    <rect x="392" y="96" width="50" height="10" fill="var(--ink2)" opacity=".4"></rect>
    <rect x="540" y="30" width="100" height="100" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3" stroke-dasharray="4 3"></rect>
    <rect x="700" y="30" width="50" height="100" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.4"></rect>
    <text x="60" y="122" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Atom</text>
    <text x="220" y="130" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Molecule</text>
    <text x="430" y="135" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Organism</text>
    <text x="590" y="146" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Template</text>
    <text x="725" y="146" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Page</text>
    <line x1="94" y1="80" x2="182" y2="80" stroke="var(--ink2)" stroke-width="1.2"></line><polygon points="182,75 192,80 182,85" fill="var(--ink2)"></polygon>
    <line x1="256" y1="80" x2="374" y2="80" stroke="var(--ink2)" stroke-width="1.2"></line><polygon points="374,75 384,80 374,85" fill="var(--ink2)"></polygon>
    <line x1="482" y1="80" x2="534" y2="80" stroke="var(--ink2)" stroke-width="1.2"></line><polygon points="534,75 544,80 534,85" fill="var(--ink2)"></polygon>
    <line x1="642" y1="80" x2="694" y2="80" stroke="var(--ink2)" stroke-width="1.2"></line><polygon points="694,75 704,80 694,85" fill="var(--ink2)"></polygon>
  </svg>`;
}

export function dgBlueprint() {
  return `<svg viewBox="0 0 760 260" role="img" aria-label="Service blueprint lanes: frontstage, line of visibility, backstage, support processes" style="width:100%;height:auto">
    <rect x="20" y="20" width="720" height="60" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></rect>
    <text x="40" y="45" font-size="12" font-weight="700" fill="var(--accent)">FRONTSTAGE</text>
    <text x="40" y="63" font-size="11" fill="var(--ink2)">what the customer sees and does</text>
    <line x1="20" y1="90" x2="740" y2="90" stroke="var(--ink)" stroke-width="1.3" stroke-dasharray="6 4"></line>
    <text x="745" y="94" font-size="10" fill="var(--ink2)">line of visibility</text>
    <rect x="20" y="100" width="720" height="60" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3"></rect>
    <text x="40" y="125" font-size="12" font-weight="700" fill="var(--ink)">BACKSTAGE</text>
    <text x="40" y="143" font-size="11" fill="var(--ink2)">staff actions the customer never sees</text>
    <rect x="20" y="170" width="720" height="60" rx="8" fill="none" stroke="var(--ink2)" stroke-width="1.3" stroke-dasharray="3 3"></rect>
    <text x="40" y="195" font-size="12" font-weight="700" fill="var(--ink)">SUPPORT PROCESSES &amp; SYSTEMS</text>
    <text x="40" y="213" font-size="11" fill="var(--ink2)">the infrastructure both layers depend on</text>
  </svg>`;
}

export const DIAGRAMS = {
  scope: dgScope, dd: dgDD, fid: dgFid, funnel: dgFunnel, matrix: dgMatrix, tokens: dgTokens,
  states: dgStates, retention: dgRetention, kano: dgKano, component: dgComponent, spacing: dgSpacing,
  touch: dgTouch, typescale: dgTypescale, rag: dgRag, wbtimeline: dgWbtimeline,
  prospect: dgProspect, weber: dgWeber, sus: dgSus, empathymap: dgEmpathyMap, atomic: dgAtomic, blueprint: dgBlueprint,
};
