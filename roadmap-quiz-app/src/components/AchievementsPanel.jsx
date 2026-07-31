import ACHIEVEMENTS from "../data/achievements.js";

// `unlocked` is an array of achievement ids (strings). We just check
// membership to decide whether a badge is "lit up" or dimmed.
export default function AchievementsPanel({ unlocked }) {
  return (
    <div className="ach-wrap">
      <span className="mono stat-label">ACHIEVEMENTS</span>
      <div className="ach-row">
        {ACHIEVEMENTS.map((a) => {
          const got = unlocked.includes(a.id);
          return (
            <div
              key={a.id}
              title={a.desc}
              className={`badge ${got ? "badge--unlocked" : ""}`}
            >
              <span className="badge-icon">{a.icon}</span>
              <span className="mono badge-label">{a.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
