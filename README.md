# Roadmap Quiz — Web Dev Edition

A quiz game about web development fundamentals (HTML, CSS, JavaScript,
TypeScript, React, HTTP, Git, performance, accessibility). Built with
React.

![tech](https://img.shields.io/badge/React-18-61DAFB) ![tech](https://img.shields.io/badge/Vite-5-646CFF)

## Features

- 14 web-development questions across 8 topics
- Streak-based scoring — consecutive correct answers earn increasing bonus points
- A "roadmap" progress bar: checkpoints light up as you advance, with an animated marker
- 5 unlockable achievements (first correct answer, 3-streak, 6-streak, flawless run, completion)
- Fully responsive, no external UI framework — hand-written CSS design system

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
roadmap-quiz-app/
├── index.html              # HTML shell Vite mounts the app into
├── package.json             # dependencies + npm scripts
├── vite.config.js           # Vite + React plugin config
├── src/
│   ├── main.jsx              # entry point — mounts <App /> into the DOM
│   ├── App.jsx                # top-level component, wires hook + UI together
│   ├── index.css              # design tokens + all component styles
│   ├── data/
│   │   ├── questions.js        # the question bank
│   │   └── achievements.js     # achievement definitions
│   ├── hooks/
│   │   └── useQuiz.js          # all game logic/state (score, streak, unlocks)
│   └── components/
│       ├── StatBar.jsx         # score / streak / best-streak display
│       ├── RoadProgress.jsx    # checkpoint progress bar
│       ├── QuestionCard.jsx    # question + answer options
│       ├── ResultsCard.jsx     # end-of-quiz summary
│       ├── AchievementsPanel.jsx  # badge grid
│       └── Toast.jsx           # achievement-unlock popup
```

## Adding your own questions

Open `src/data/questions.js` and push a new object onto the array:

```js
{
  topic: "CSS",
  q: "Your question text?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 1, // index of the right answer in "options"
}
```

Nothing else needs to change — the progress bar, checkpoints, and
results screen all read the array's length automatically.

## Why this structure

- **`hooks/useQuiz.js`** owns every piece of state and every rule (scoring,
  streaks, unlock conditions). Components never touch state directly —
  they only receive props and call functions the hook gives them. This
  keeps the logic testable independently of the UI.
- **`data/`** separates content (questions, achievements) from code, so
  editing the quiz doesn't require touching any component.
- **`components/`** are all "dumb" — each renders one thing based on the
  props it's given, with no business logic inside.

## License

MIT — do whatever you want with it.
