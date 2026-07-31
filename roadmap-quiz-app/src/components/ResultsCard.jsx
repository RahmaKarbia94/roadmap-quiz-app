export default function ResultsCard({ score, bestStreak, total, wrongCount, onRestart }) {
  const correctCount = total - wrongCount;

  return (
    <div className="card fade-in">
      <span className="mono question-tag">ROUTE COMPLETE</span>
      <h2 className="question-text">You scored {score} points</h2>
      <p className="results-sub">
        Best streak: {bestStreak} {"\u00B7"} {correctCount}/{total} correct
      </p>
      <button className="next-btn" onClick={onRestart}>
        Restart route {"\u21BB"}
      </button>
    </div>
  );
}
