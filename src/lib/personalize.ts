import { findAnswer, type QuizAnswers } from "@/config/quiz";

/**
 * Deterministic results copy: the same answers always produce the same text.
 * It reflects what the visitor told us — it is not dental advice or an
 * assessment of whether a product is right for their teeth.
 */

export type Insight = { title: string; body: string };

export type Results = {
  intro: string;
  insights: Insight[];
  goalLine: string;
  nextStep: string;
  snapshot: { label: string; value: string }[];
};

const intros: Record<string, string> = {
  nothing:
    "You're at the very start, which is a good place to be: you can compare your options before spending anything. Snap-on veneers are one of the simplest to try because nothing about your natural teeth has to change.",
  whitening:
    "You've already tried whitening — and if you're here, it probably didn't give you the result you wanted. Whitening can only change color; it can't cover chips, gaps, or uneven shapes.",
  quoted:
    "You've seen what traditional cosmetic dentistry can cost, and it's often a lot. Removable snap-on veneers are a very different category: a cosmetic cover you wear, not a procedure.",
  aligners:
    "You've already invested in your smile once. Snap-on veneers don't move teeth — they sit over them — which makes them a cosmetic option for how your smile looks today.",
};

const concernInsights: Record<string, Insight> = {
  stains: {
    title: "Covering what whitening can't",
    body: "Some discoloration doesn't respond well to whitening. A removable veneer covers the visible surface with a uniform shade instead of trying to bleach it away.",
  },
  gaps: {
    title: "A more even look",
    body: "Snap-on veneers can make small gaps and slightly uneven teeth look more uniform while you wear them. They don't straighten teeth — for that, an orthodontist is the right person to ask.",
  },
  chips: {
    title: "Smoothing out the edges",
    body: "Chips and worn edges are often what people notice most in close-ups. A removable veneer gives the front of your smile a fuller, more even outline.",
  },
  missing: {
    title: "Filling the visible gap",
    body: "Some snap-on designs can visually fill a missing tooth. They are cosmetic only — they don't replace a tooth for chewing, so it's worth asking a dentist about long-term options too.",
  },
  overall: {
    title: "A brighter smile, on your terms",
    body: "You don't need a specific problem to want a smile you love. Snap-on veneers let you choose a look and wear it when you want to.",
  },
};

const obstacleInsights: Record<string, Insight> = {
  cost: {
    title: "A different price category",
    body: "Traditional veneers are a dental procedure priced per tooth. Removable snap-on veneers are a product you buy once for the whole arch, which usually puts them in a far lower price range.",
  },
  fear: {
    title: "No drills, no needles",
    body: "Most snap-on veneers are made from an impression you take at home. Nothing is filed down or glued on, so there's no dentist's chair involved in getting them.",
  },
  time: {
    title: "Fits around your schedule",
    body: "Instead of a series of appointments, the typical process is an at-home impression kit, mailing it back, and receiving your custom set by mail.",
  },
  natural: {
    title: "Looking like you",
    body: "Custom-fit veneers made from your own impression, in a shade you choose, tend to look far more natural than one-size-fits-all options. Picking a realistic shade matters more than picking the whitest one.",
  },
  permanent: {
    title: "Completely removable",
    body: "Snap-on veneers clip over your natural teeth and come out whenever you want. Your own teeth stay exactly as they are underneath.",
  },
};

const goalLines: Record<string, string> = {
  photos: "And you know where it matters most: smiling in photos instead of hiding from the camera.",
  event: "And you know where it matters most: feeling great about your smile on the big day.",
  dating: "And you know where it matters most: a confident first impression.",
  work: "And you know where it matters most: smiling freely when people are looking at you.",
  everyday: "And you know where it matters most: laughing without covering your mouth.",
};

const nextSteps: Record<string, string> = {
  now: "You said you're ready — so it's worth taking a look while the motivation is fresh.",
  month: "Custom sets usually take a few weeks to make, so starting soon is a good fit for your timeline.",
  soon: "There's no commitment in taking a look and seeing how the process works.",
  exploring: "Exploring your options is a smart move — here's one worth adding to your list.",
};

export function buildResults(answers: QuizAnswers): Results {
  const intro = intros[answers.tried ?? ""] ?? intros.nothing;

  const insights: Insight[] = [];
  const concern = concernInsights[answers.concern ?? ""];
  if (concern) insights.push(concern);
  const obstacle = obstacleInsights[answers.obstacle ?? ""];
  if (obstacle) insights.push(obstacle);

  const moment = findAnswer("moment", answers.moment);

  return {
    intro,
    insights,
    goalLine: goalLines[answers.moment ?? ""] ?? "",
    nextStep: nextSteps[answers.readiness ?? ""] ?? nextSteps.soon,
    snapshot: [
      { label: "Main concern", value: concern ? concern.title : "—" },
      { label: "Your moment", value: moment ? trimPeriod(moment.label) : "—" },
      { label: "Focus area", value: obstacle ? obstacle.title : "—" },
    ],
  };
}

function trimPeriod(s: string): string {
  return s.replace(/\.$/, "");
}
