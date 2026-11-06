/**
 * Quiz content. Order matters: the first questions are effortless (age range,
 * what bothers you, what you've tried) so visitors commit before the
 * reflective questions.
 *
 * Answer `id`s are stable keys used by analytics and personalization — change
 * labels freely, but keep ids unless you also update `src/lib/personalize.ts`.
 *
 * Snap-on veneers are a removable cosmetic product, not dental treatment. The
 * copy never promises medical outcomes and points people to a dentist for
 * anything health-related.
 */

export type Answer = {
  id: string;
  label: string;
  /** Short accent shown above the label in grid layouts. */
  badge?: string;
};

export type Question = {
  id: QuestionId;
  prompt: string;
  helper?: string;
  layout?: "grid" | "list";
  answers: Answer[];
};

export type QuestionId = "age" | "concern" | "tried" | "moment" | "obstacle" | "readiness";

export const questions: Question[] = [
  {
    id: "age",
    prompt: "How old are you?",
    helper: "Pick one to get started.",
    layout: "grid",
    answers: [
      { id: "18_29", badge: "18–29", label: "Young adult" },
      { id: "30_44", badge: "30–44", label: "Busy years" },
      { id: "45_59", badge: "45–59", label: "Prime time" },
      { id: "60_plus", badge: "60+", label: "Golden years" },
    ],
  },
  {
    id: "concern",
    prompt: "What bothers you most about your smile?",
    layout: "list",
    answers: [
      { id: "stains", label: "Stains or yellowing that whitening doesn't fix." },
      { id: "gaps", label: "Gaps or teeth that aren't straight." },
      { id: "chips", label: "Chipped, worn, or uneven teeth." },
      { id: "missing", label: "A missing tooth that shows when I smile." },
      { id: "overall", label: "Nothing specific — I just want a brighter smile." },
    ],
  },
  {
    id: "tried",
    prompt: "What have you tried so far?",
    layout: "list",
    answers: [
      { id: "nothing", label: "Nothing yet — I'm just starting to look." },
      { id: "whitening", label: "Whitening strips, gels, or toothpaste." },
      { id: "quoted", label: "I got a quote for porcelain veneers or implants." },
      { id: "aligners", label: "Braces or clear aligners at some point." },
    ],
  },
  {
    id: "moment",
    prompt: "When would you most like to smile without thinking twice?",
    layout: "list",
    answers: [
      { id: "photos", label: "In photos and on video calls." },
      { id: "event", label: "At a wedding, reunion, or big event coming up." },
      { id: "dating", label: "On dates and meeting new people." },
      { id: "work", label: "At work, in meetings, or talking to customers." },
      { id: "everyday", label: "Every day — laughing without covering my mouth." },
    ],
  },
  {
    id: "obstacle",
    prompt: "What's held you back so far?",
    layout: "list",
    answers: [
      { id: "cost", label: "Cosmetic dental work costs more than I can justify." },
      { id: "fear", label: "I don't love the idea of drills or the dentist's chair." },
      { id: "time", label: "Multiple appointments just don't fit my schedule." },
      { id: "natural", label: "I'm worried it won't look natural." },
      { id: "permanent", label: "I don't want anything permanent done to my teeth." },
    ],
  },
  {
    id: "readiness",
    prompt: "If you found an option that fit your budget, how soon would you try it?",
    layout: "list",
    answers: [
      { id: "now", label: "Right away — I'm ready." },
      { id: "month", label: "Within the next month." },
      { id: "soon", label: "Sometime this year." },
      { id: "exploring", label: "I'm still exploring my options." },
    ],
  },
];

export type QuizAnswers = Partial<Record<QuestionId, string>>;

export function findAnswer(questionId: QuestionId, answerId: string | undefined) {
  const q = questions.find((x) => x.id === questionId);
  return q?.answers.find((a) => a.id === answerId);
}

export function renderPrompt(prompt: string): string {
  return prompt;
}
