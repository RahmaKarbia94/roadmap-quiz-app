// Achievement definitions. "id" must be unique — it's the key used
// everywhere else (useQuiz, AchievementsPanel) to track unlock state.
const ACHIEVEMENTS = [
  {
    id: "first_blood",
    label: "First Checkpoint",
    desc: "Answer your first question correctly",
    icon: "\u25C6",
  },
  {
    id: "on_fire",
    label: "On a Roll",
    desc: "Reach a 3-answer streak",
    icon: "\u25B2",
  },
  {
    id: "unstoppable",
    label: "Unstoppable",
    desc: "Reach a 6-answer streak",
    icon: "\u26A1",
  },
  {
    id: "perfectionist",
    label: "Flawless Route",
    desc: "Finish the quiz with zero wrong answers",
    icon: "\u2605",
  },
  {
    id: "finisher",
    label: "Road Complete",
    desc: "Reach the end of the quiz",
    icon: "\u25CF",
  },
];

export default ACHIEVEMENTS;
