// `achievement` is either null (nothing to show) or an object like
// { icon, label, desc }. useQuiz is responsible for clearing it after
// a couple of seconds via setTimeout — this component just renders
// whatever it's currently given.
export default function Toast({ achievement }) {
  if (!achievement) return null;

  return (
    <div className="toast">
      <span className="toast-icon">{achievement.icon}</span>
      <div>
        <div className="toast-title">ACHIEVEMENT UNLOCKED</div>
        <div className="toast-label">{achievement.label}</div>
      </div>
    </div>
  );
}
