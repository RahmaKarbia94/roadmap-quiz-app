// Pure presentational component: receives numbers as props, renders them.
// It holds no state of its own — all state lives in useQuiz.
export default function StatBar({ score, streak, bestStreak }) {
  return (
    <div className="stat-bar">
      <Stat label="SCORE" value={score} />
      <Stat
        label="STREAK"
        value={streak > 0 ? `${streak}x` : "\u2014"}
        highlight={streak > 0}
      />
      <Stat label="BEST" value={bestStreak} />
    </div>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <div className="stat-block">
      <span className="mono stat-label">{label}</span>
      <span className={`mono stat-value ${highlight ? "stat-value--accent" : ""}`}>
        {value}
      </span>
    </div>
  );
}
