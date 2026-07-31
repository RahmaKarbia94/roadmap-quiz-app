// Central question bank for the quiz.
// Each question is a plain object: { q, options, correct, topic }
// "correct" is the index into "options" (0-based).
// "topic" is used only for display (badge on the question card).
//
// To add more questions, just push a new object with the same shape.
// The app doesn't care how many there are — everything (progress bar,
// checkpoints, results) is computed from this array's length.

const QUESTIONS = [
  {
    topic: "HTML",
    q: "Which HTML element is used to define the main content of a document, distinct from headers/footers/nav?",
    options: ["<section>", "<main>", "<content>", "<body>"],
    correct: 1,
  },
  {
    topic: "CSS",
    q: "Which CSS property is used to create space between flex or grid items?",
    options: ["margin", "gap", "spacing", "padding"],
    correct: 1,
  },
  {
    topic: "CSS",
    q: "In CSS, what does the 'specificity' of a selector determine?",
    options: [
      "How fast the browser parses it",
      "Which rule wins when multiple rules target the same element",
      "The file size of the stylesheet",
      "Whether the rule is cached",
    ],
    correct: 1,
  },
  {
    topic: "JavaScript",
    q: "What will `typeof null` return in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    correct: 2,
  },
  {
    topic: "JavaScript",
    q: "Which array method creates a new array with only the elements that pass a test?",
    options: ["map()", "reduce()", "filter()", "forEach()"],
    correct: 2,
  },
  {
    topic: "JavaScript",
    q: "What does the 'this' keyword refer to inside a regular (non-arrow) function called as a method?",
    options: [
      "The global object always",
      "The object the method was called on",
      "The function itself",
      "undefined always",
    ],
    correct: 1,
  },
  {
    topic: "TypeScript",
    q: "What is the main benefit TypeScript adds on top of JavaScript?",
    options: [
      "Faster runtime execution",
      "Static type checking at compile time",
      "Built-in database access",
      "Automatic styling",
    ],
    correct: 1,
  },
  {
    topic: "React",
    q: "In React, what triggers a functional component to re-render?",
    options: [
      "Editing the source file only",
      "A change in state or props",
      "Refreshing the CSS",
      "Calling console.log",
    ],
    correct: 1,
  },
  {
    topic: "React",
    q: "What is the purpose of a 'key' prop when rendering a list in React?",
    options: [
      "It styles the list items",
      "It helps React identify which items changed, were added, or removed",
      "It sorts the array automatically",
      "It is required only for arrays longer than 10",
    ],
    correct: 1,
  },
  {
    topic: "HTTP",
    q: "Which HTTP status code indicates a resource was not found?",
    options: ["200", "301", "404", "500"],
    correct: 2,
  },
  {
    topic: "HTTP",
    q: "Which HTTP method is idempotent and safe (does not modify server state)?",
    options: ["POST", "GET", "PATCH", "DELETE"],
    correct: 1,
  },
  {
    topic: "Git",
    q: "Which Git command creates a new branch and switches to it in one step?",
    options: ["git branch -m", "git checkout -b", "git merge -b", "git switch --new"],
    correct: 1,
  },
  {
    topic: "Web Perf",
    q: "What does 'lazy loading' an image mean?",
    options: [
      "The image is loaded only when it's about to enter the viewport",
      "The image is compressed to zero bytes",
      "The image is loaded before the page even starts rendering",
      "The image is cached forever",
    ],
    correct: 0,
  },
  {
    topic: "Accessibility",
    q: "What is the purpose of the 'alt' attribute on an <img> tag?",
    options: [
      "It sets the image's alignment",
      "It provides alternative text for screen readers and when the image fails to load",
      "It defines the image's file format",
      "It is purely decorative and has no functional role",
    ],
    correct: 1,
  },
];

export default QUESTIONS;
