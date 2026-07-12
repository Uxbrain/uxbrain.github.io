// Flashcards — decks built from the book's own one-liners (Book 1 Ch.2, Book 4 Parts A/E, Book 5)
// SHEETS and GLOSSARY are passed in (not imported) so this module works both as an ES import and
// as a standalone blob module in the bundled/offline build.

function cardsFromTable(SHEETS, sheetId, frontKey, backFn) {
  const sheet = SHEETS.find((s) => s.id === sheetId);
  if (!sheet) return [];
  return sheet.rows.map((row, i) => ({ id: sheetId + '-' + i, front: row[frontKey], back: backFn(row) }));
}

const NIELSEN = [
  ['Visibility of system status', 'The system always tells you what’s happening. Ex: Uber’s driver-approaching map; file-upload progress %.'],
  ['Match between system & real world', 'Speak the user’s language. Ex: “Money will reach your bank in 2 days” not “T+2 settlement.”'],
  ['User control and freedom', 'Emergency exits: undo, back, cancel. Ex: Gmail’s Undo Send.'],
  ['Consistency and standards', 'One word for one action, app-wide. Ex: “Invest” vs “Buy” vs “Purchase” — pick one.'],
  ['Error prevention', 'Stop errors before they happen. Ex: confirming ₹1,00,000 with amount-in-words.'],
  ['Recognition over recall', 'Show options; don’t make users remember. Ex: recently-used payees list.'],
  ['Flexibility and efficiency of use', 'Accelerators for experts, simplicity for novices. Ex: “Repeat last order” in Swiggy.'],
  ['Aesthetic and minimalist design', 'Every extra element competes with the needed ones. Ex: Apple Pay sheet shows only what’s needed.'],
  ['Help users recognize, diagnose, and recover from errors', 'Errors say what happened and how to fix it. Ex: “This PAN is already registered — log in instead?”'],
  ['Help and documentation', 'Help inside the flow, not a separate portal. Ex: contextual tooltips on “expense ratio.”'],
];

export function buildDecks(SHEETS, GLOSSARY) {
  return [
    {
      id: 'laws', title: 'UX Laws', sub: '22 laws — one-liner front, deploy-when back',
      cards: cardsFromTable(SHEETS, 's1', 0, (r) => r[1] + ' Deploy when: ' + r[2]),
    },
    {
      id: 'nielsen', title: 'Nielsen’s 10 Heuristics', sub: 'Memorized cold — usable live in critiques',
      cards: NIELSEN.map(([front, back], i) => ({ id: 'n-' + i, front, back })),
    },
    {
      id: 'metrics', title: 'Key Metrics', sub: '12 formulas and what to watch for',
      cards: cardsFromTable(SHEETS, 's2', 0, (r) => r[1] + ' Watch for: ' + r[2]),
    },
    {
      id: 'sizing', title: 'Sizing Numbers', sub: '15 numbers that must be reflexive',
      cards: cardsFromTable(SHEETS, 's6', 0, (r) => r[1]),
    },
    {
      id: 'darkpatterns', title: 'Dark Patterns', sub: '14 patterns — know them to refuse them',
      cards: cardsFromTable(SHEETS, 's7', 0, (r) => r[1] + ' Ethical alternative: ' + r[2]),
    },
    {
      id: 'mentalmodels', title: 'Mental Models', sub: '12 elite thinking tools',
      cards: cardsFromTable(SHEETS, 's8', 0, (r) => r[1]),
    },
    {
      id: 'glossary', title: 'Glossary Terms', sub: 'A–Z terms from the Reference Handbook',
      cards: GLOSSARY.map((g, i) => ({ id: 'g-' + i, front: g.term, back: g.def })),
    },
  ];
}
