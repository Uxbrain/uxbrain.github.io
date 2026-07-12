// Quiz system — auto-derives a 3-question quiz per topic from its own content
// (definition, common mistake, interview callout) plus distractors pulled from sibling topics.
// Deterministic per topic (seeded by topic id) so the same topic always gets the same quiz.

function seededShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function seedFromId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % 100000 || 1;
}
function truncate(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

export function buildQuiz(topicId, TOPICS, ORDER) {
  const t = TOPICS[topicId];
  if (!t) return [];
  const seed = seedFromId(topicId);
  const siblings = ORDER.filter((id) => id !== topicId && TOPICS[id]);
  const pick = (n, offset) => seededShuffle(siblings, seed + offset).slice(0, n).map((id) => TOPICS[id]);

  const distractorDefs = pick(3, 1).map((s) => truncate(s.def, 110));
  const q1Options = seededShuffle([truncate(t.def, 110), ...distractorDefs], seed + 2);
  const q1 = {
    type: 'mc',
    prompt: 'Which of these is the correct definition of “' + t.title + '”?',
    options: q1Options,
    correctIndex: q1Options.indexOf(truncate(t.def, 110)),
    explain: t.def,
  };

  const q2 = t.mistake ? {
    type: 'tf',
    prompt: 'True or false: “' + truncate(t.mistake, 140) + '” describes the common mistake with ' + t.title + '.',
    options: ['True', 'False'],
    correctIndex: 0,
    explain: t.mistake,
  } : null;

  const distractorTitles = pick(3, 3).map((s) => s.title);
  const q3Options = seededShuffle([t.title, ...distractorTitles], seed + 4);
  const q3 = t.interview ? {
    type: 'mc',
    prompt: 'This interview scenario tests which concept? “' + truncate(t.interview, 130) + '”',
    options: q3Options,
    correctIndex: q3Options.indexOf(t.title),
    explain: t.interview,
  } : null;

  return [q1, q2, q3].filter(Boolean);
}
