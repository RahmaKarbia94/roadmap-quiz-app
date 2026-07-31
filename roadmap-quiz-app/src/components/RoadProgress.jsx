// Renders the "road": a filled bar with a moving marker, plus one dot
// ("checkpoint") per question. This is purely derived from `index`,
// `total`, and `progress` — it doesn't know anything about scoring.
export default function RoadProgress({ index, total, progress, finished }) {
  const checkpoints = Array.from({ length: total });

  return (
    <div className="road-wrap">
      <div className="road-track">
        <div className="road-fill" style={{ width: `${progress}%` }} />
        <div className="road-marker" style={{ left: `calc(${progress}% - 10px)` }}>
          {"\u25B2"}
        </div>
      </div>

      <div className="checkpoint-row">
        {checkpoints.map((_, i) => {
          const isPassed = i < index || finished;
          const isCurrent = i === index && !finished;
          return (
            <div
              key={i}
              className={`checkpoint ${isPassed ? "checkpoint--passed" : ""} ${
                isCurrent ? "checkpoint--current" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
