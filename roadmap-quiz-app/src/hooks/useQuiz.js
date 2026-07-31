import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../data/questions.js";
import ACHIEVEMENTS from "../data/achievements.js";

// This hook owns ALL the quiz's state and rules.
// Keeping the logic here (instead of inside a component) means:
//  - Components stay "dumb": they just render what the hook gives them.
//  - The logic is unit-testable on its own, with no UI involved.
//  - If you ever build a second UI (e.g. a CLI version), you can reuse this hook as-is.
export default function useQuiz() {
  const total = QUESTIONS.length;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // index of the option the user picked
  const [locked, setLocked] = useState(false); // true after answering, until "Next" is pressed
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [unlocked, setUnlocked] = useState([]); // array of achievement ids
  const [toast, setToast] = useState(null); // achievement currently being shown as a popup
  const [finished, setFinished] = useState(false);

  const toastTimer = useRef(null);

  const current = QUESTIONS[index];
  const progress = (index / total) * 100;

  // Adds an achievement id to "unlocked" if it isn't there already,
  // and briefly shows it as a toast notification.
  const unlock = useCallback((id) => {
    setUnlocked((prev) => {
      if (prev.includes(id)) return prev; // already unlocked, do nothing
      const achievement = ACHIEVEMENTS.find((a) => a.id === id);
      setToast(achievement);
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 2200);
      return [...prev, id];
    });
  }, []);

  // Called when the user clicks an option button.
  const pickOption = useCallback(
    (optionIndex) => {
      if (locked) return; // ignore clicks after the question is already answered

      setSelected(optionIndex);
      setLocked(true);
      setAnsweredCount((c) => c + 1);

      const isCorrect = optionIndex === current.correct;

      if (isCorrect) {
        // Base 10 points, +5 per streak level, capped at +20 bonus (streak 5+)
        const newStreak = streak + 1;
        const bonus = 10 + Math.min(newStreak - 1, 4) * 5;

        setScore((s) => s + bonus);
        setStreak(newStreak);
        setBestStreak((b) => Math.max(b, newStreak));

        if (answeredCount === 0) unlock("first_blood");
        if (newStreak >= 3) unlock("on_fire");
        if (newStreak >= 6) unlock("unstoppable");
      } else {
        setStreak(0);
        setWrongCount((w) => w + 1);
      }
    },
    [locked, current, streak, answeredCount, unlock]
  );

  // Moves to the next question, or ends the quiz if this was the last one.
  const next = useCallback(() => {
    const isLastQuestion = index + 1 >= total;

    if (isLastQuestion) {
      if (wrongCount === 0) unlock("perfectionist");
      unlock("finisher");
      setFinished(true);
      return;
    }

    setIndex((i) => i + 1);
    setSelected(null);
    setLocked(false);
  }, [index, total, wrongCount, unlock]);

  // Resets every piece of state back to its initial value.
  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setWrongCount(0);
    setAnsweredCount(0);
    setUnlocked([]);
    setFinished(false);
    setToast(null);
  }, []);

  return {
    total,
    index,
    current,
    selected,
    locked,
    score,
    streak,
    bestStreak,
    wrongCount,
    unlocked,
    toast,
    finished,
    progress,
    pickOption,
    next,
    restart,
  };
}
