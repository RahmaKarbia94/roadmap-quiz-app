// Renders one question and its options. All the "what happens when you click"
// logic lives in useQuiz — this component just calls onPick(index) and
// displays whatever state it's given (selected / locked / correct answer).
export default function QuestionCard({
  question,
  index,
  total,
  selected,
  locked,
  onPick,
  onNext,
  isLast,
}) {
  return (
    <div key={index} className="card fade-in">
      <span className="mono question-tag">
        {question.topic.toUpperCase()} {"\u00B7"} CHECKPOINT {index + 1} / {total}
      </span>
      <h2 className="question-text">{question.q}</h2>

      <div className="options-list">
        {question.options.map((opt, i) => (
          <OptionButton
            key={i}
            label={String.fromCharCode(65 + i)} // A, B, C, D...
            text={opt}
            isCorrectAnswer={i === question.correct}
            isSelected={selected === i}
            locked={locked}
            onClick={() => onPick(i)}
          />
        ))}
      </div>

      {locked && (
        <button className="next-btn fade-in" onClick={onNext}>
          {isLast ? "See results" : "Next checkpoint"} {"\u2192"}
        </button>
      )}
    </div>
  );
}

function OptionButton({ label, text, isCorrectAnswer, isSelected, locked, onClick }) {
  // Decide the visual state of this specific option once the question is locked:
  //  - the correct option is always highlighted green
  //  - a wrong option the user picked is highlighted red
  //  - everything else stays neutral
  let stateClass = "";
  if (locked && isCorrectAnswer) stateClass = "option--correct";
  if (locked && isSelected && !isCorrectAnswer) stateClass = "option--wrong";

  return (
    <button
      className={`option ${locked ? "locked" : ""} ${stateClass}`}
      onClick={onClick}
      disabled={locked}
    >
      <span className="mono option-letter">{label}</span>
      <span className="option-text">{text}</span>
    </button>
  );
}
