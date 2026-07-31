import useQuiz from "./hooks/useQuiz.js";
import StatBar from "./components/StatBar.jsx";
import RoadProgress from "./components/RoadProgress.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultsCard from "./components/ResultsCard.jsx";
import AchievementsPanel from "./components/AchievementsPanel.jsx";
import Toast from "./components/Toast.jsx";

// App is the "orchestrator": it calls useQuiz() once to get all state
// and actions, then passes the relevant slices down to each component
// as plain props. No component below this one talks to useQuiz directly —
// that keeps data flow one-directional and easy to trace.
export default function App() {
  const quiz = useQuiz();

  return (
    <div className="page">
      <div className="container">
        <StatBar score={quiz.score} streak={quiz.streak} bestStreak={quiz.bestStreak} />

        <RoadProgress
          index={quiz.index}
          total={quiz.total}
          progress={quiz.progress}
          finished={quiz.finished}
        />

        {!quiz.finished ? (
          <QuestionCard
            question={quiz.current}
            index={quiz.index}
            total={quiz.total}
            selected={quiz.selected}
            locked={quiz.locked}
            onPick={quiz.pickOption}
            onNext={quiz.next}
            isLast={quiz.index + 1 >= quiz.total}
          />
        ) : (
          <ResultsCard
            score={quiz.score}
            bestStreak={quiz.bestStreak}
            total={quiz.total}
            wrongCount={quiz.wrongCount}
            onRestart={quiz.restart}
          />
        )}

        <AchievementsPanel unlocked={quiz.unlocked} />
      </div>

      <Toast achievement={quiz.toast} />
    </div>
  );
}
