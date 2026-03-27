// ============================================================
//  GitHub Learning Journey — app.js
//  Interactive flashcards, quizzes, and AI workflow comparison
// ============================================================

const STORAGE_KEY = "github_learning_progress";

// ---- GitHub Concept Flashcards Data ----
const flashcardsData = [
  { term: "Repository", definition: "A storage space for your project containing all files, folders, and version history. Think of it as a project folder with superpowers!" },
  { term: "Commit", definition: "A snapshot of your project at a specific point in time. It's like saving your game progress - you can always go back to this point." },
  { term: "Branch", definition: "A parallel version of your repository. It allows you to work on features without affecting the main codebase, like having multiple save files." },
  { term: "Pull Request", definition: "A request to merge your changes into another branch. It's where code review happens and team collaboration shines!" },
  { term: "Fork", definition: "A personal copy of someone else's repository. You can experiment freely without affecting the original project." },
  { term: "Clone", definition: "Downloading a repository to your local computer so you can work on it offline. Like downloading a file from the cloud." },
  { term: "Push", definition: "Uploading your local commits to a remote repository on GitHub. It's like syncing your work to the cloud." },
  { term: "Pull", definition: "Downloading changes from a remote repository to your local machine. Keeps your local copy up-to-date with others' work." },
  { term: "Merge", definition: "Combining changes from different branches into one. It's how teams integrate everyone's work together." },
  { term: "Issue", definition: "A way to track bugs, enhancements, or tasks. Think of it as a smart to-do list for your project." },
  { term: "Actions", definition: "GitHub's automation tool that runs workflows like testing, building, and deploying your code automatically." },
  { term: "README", definition: "The front page of your repository. It explains what your project does and how to use it - make it shine! ✨" }
];

// ---- Quiz Questions ----
const quizQuestions = [
  {
    question: "What is a Git commit?",
    options: [
      "A way to upload files to GitHub",
      "A snapshot of your code at a specific point in time",
      "A message to other developers",
      "A type of branch"
    ],
    correct: 1,
    explanation: "A commit is like a checkpoint in your project's history. It saves the state of your files so you can return to it later."
  },
  {
    question: "What's the main purpose of a Pull Request?",
    options: [
      "To download code from GitHub",
      "To delete a branch",
      "To review and merge code changes",
      "To create a new repository"
    ],
    correct: 2,
    explanation: "Pull Requests are where code review happens! They let team members discuss and review changes before merging them."
  },
  {
    question: "What does 'forking' a repository mean?",
    options: [
      "Deleting a repository",
      "Creating your own copy of someone else's repository",
      "Merging two branches",
      "Renaming a repository"
    ],
    correct: 1,
    explanation: "Forking creates a personal copy of someone's repository under your account, letting you experiment freely!"
  },
  {
    question: "Which command updates your local repository with remote changes?",
    options: [
      "git push",
      "git commit",
      "git pull",
      "git fork"
    ],
    correct: 2,
    explanation: "git pull downloads changes from the remote repository and updates your local copy. Stay in sync with your team!"
  },
  {
    question: "What is GitHub Actions used for?",
    options: [
      "Writing code faster",
      "Automating workflows like testing and deployment",
      "Creating pull requests",
      "Managing issues"
    ],
    correct: 1,
    explanation: "GitHub Actions automates repetitive tasks like running tests, building code, and deploying apps. Set it up once, benefit forever!"
  }
];

// ---- Workflow Scenarios ----
const workflowScenarios = [
  {
    title: "Creating a Feature",
    before: {
      time: "~2 hours",
      steps: [
        "📝 Manually create feature branch using git commands",
        "💻 Write code while constantly checking documentation",
        "🔍 Manually test each change in the browser/terminal",
        "📋 Write commit messages trying to remember what changed",
        "🔄 Push to GitHub using command line",
        "📝 Manually create Pull Request and write description",
        "⏳ Wait for team review and manually address feedback"
      ]
    },
    after: {
      time: "~20 minutes",
      steps: [
        "💬 Tell Claude Code what feature you want to build",
        "🤖 AI creates branch, writes code, and handles edge cases",
        "✅ AI runs tests and validates changes automatically",
        "📝 AI generates descriptive commit messages",
        "🚀 One command: AI pushes and creates PR with full description",
        "🎯 AI can address review feedback instantly",
        "⚡ 6x faster with better quality!"
      ]
    }
  },
  {
    title: "Fixing a Bug",
    before: {
      time: "~3 hours",
      steps: [
        "🐛 Read error message and try to understand it",
        "🔍 Manually search codebase for the problem",
        "📚 Search Stack Overflow and documentation",
        "💭 Try different solutions one by one",
        "🧪 Manually test each attempt",
        "📝 Update tests and documentation",
        "✍️ Write commit and PR manually"
      ]
    },
    after: {
      time: "~30 minutes",
      steps: [
        "💬 Paste error message to Claude Code",
        "🔍 AI searches entire codebase instantly",
        "🎯 AI identifies root cause and suggests fix",
        "✨ AI implements fix with proper error handling",
        "🧪 AI updates tests automatically",
        "📝 AI commits with clear explanation",
        "⚡ 6x faster debugging!"
      ]
    }
  },
  {
    title: "Code Review",
    before: {
      time: "~1 hour",
      steps: [
        "👀 Manually read through all changed files",
        "🤔 Try to understand the context and purpose",
        "📝 Write comments on potential issues",
        "🔍 Check for style consistency manually",
        "🧪 Verify tests exist and make sense",
        "💬 Wait for author to respond and update",
        "🔄 Review changes again"
      ]
    },
    after: {
      time: "~15 minutes",
      steps: [
        "🤖 AI analyzes all changes instantly",
        "🎯 AI identifies bugs, security issues, and improvements",
        "📊 AI checks test coverage automatically",
        "✅ AI verifies style guide compliance",
        "💡 AI suggests optimizations",
        "📝 AI generates comprehensive review",
        "⚡ 4x faster with deeper insights!"
      ]
    }
  }
];

// ---- Achievements ----
const achievements = [
  { id: "first-card", name: "First Steps", description: "Reviewed your first flashcard", icon: "🎯", unlocked: false },
  { id: "all-cards", name: "Card Master", description: "Reviewed all flashcards", icon: "📚", unlocked: false },
  { id: "quiz-start", name: "Quiz Taker", description: "Completed your first quiz", icon: "✏️", unlocked: false },
  { id: "perfect-score", name: "Perfect Score", description: "Got 100% on a quiz", icon: "💯", unlocked: false },
  { id: "workflow-explorer", name: "Workflow Explorer", description: "Viewed all workflow scenarios", icon: "🚀", unlocked: false }
];

// ---- State ----
let progress = loadProgress();
let currentQuizQuestion = 0;
let quizScore = 0;
let currentScenario = 0;

// ---- DOM References ----
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content-section");
const flashcardsContainer = document.getElementById("flashcards-container");
const quizCard = document.getElementById("quiz-card");
const quizResult = document.getElementById("quiz-result");
const workflowComparison = document.getElementById("workflow-comparison");
const scenarioButtons = document.querySelectorAll(".scenario-btn");

// ---- Initialize ----
init();

function init() {
  renderFlashcards();
  renderQuiz();
  renderWorkflow(0);
  renderProgress();
  setupEventListeners();
}

// ---- Event Listeners ----
function setupEventListeners() {
  // Navigation
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.dataset.section;
      switchSection(section);
    });
  });

  // Scenario selection
  scenarioButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const scenario = parseInt(btn.dataset.scenario);
      currentScenario = scenario;
      scenarioButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderWorkflow(scenario);

      // Track workflow exploration
      if (!progress.viewedScenarios) progress.viewedScenarios = [];
      if (!progress.viewedScenarios.includes(scenario)) {
        progress.viewedScenarios.push(scenario);
        if (progress.viewedScenarios.length === workflowScenarios.length) {
          unlockAchievement("workflow-explorer");
        }
        saveProgress();
      }
    });
  });

  // Quiz buttons
  document.getElementById("next-question-btn").addEventListener("click", nextQuestion);
  document.getElementById("restart-quiz-btn").addEventListener("click", restartQuiz);
}

// ---- Navigation ----
function switchSection(sectionName) {
  sections.forEach(section => section.classList.remove("active"));
  navButtons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(`${sectionName}-section`).classList.add("active");
  document.querySelector(`[data-section="${sectionName}"]`).classList.add("active");
}

// ---- Flashcards ----
function renderFlashcards() {
  flashcardsContainer.innerHTML = "";

  flashcardsData.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "flashcard";
    cardEl.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="card-icon">💡</div>
          <h3>${card.term}</h3>
          <p class="flip-hint">Click to reveal →</p>
        </div>
        <div class="flashcard-back">
          <h3>${card.term}</h3>
          <p>${card.definition}</p>
          <p class="flip-hint">← Click to flip back</p>
        </div>
      </div>
    `;

    cardEl.addEventListener("click", () => {
      cardEl.classList.toggle("flipped");

      // Track progress
      if (!progress.viewedCards) progress.viewedCards = [];
      if (!progress.viewedCards.includes(index)) {
        progress.viewedCards.push(index);
        if (progress.viewedCards.length === 1) {
          unlockAchievement("first-card");
        }
        if (progress.viewedCards.length === flashcardsData.length) {
          unlockAchievement("all-cards");
        }
        saveProgress();
        renderProgress();
      }
    });

    flashcardsContainer.appendChild(cardEl);
  });
}

// ---- Quiz ----
function renderQuiz() {
  if (currentQuizQuestion >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const question = quizQuestions[currentQuizQuestion];

  document.getElementById("current-question").textContent = currentQuizQuestion + 1;
  document.getElementById("total-questions").textContent = quizQuestions.length;
  document.getElementById("quiz-question").textContent = question.question;

  const progress = ((currentQuizQuestion) / quizQuestions.length) * 100;
  document.getElementById("quiz-progress").style.width = progress + "%";

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "quiz-option";
    optionBtn.textContent = option;
    optionBtn.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(optionBtn);
  });

  document.getElementById("quiz-feedback").classList.add("hidden");
}

function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuizQuestion];
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) quizScore++;

  // Update UI
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((opt, idx) => {
    opt.disabled = true;
    if (idx === question.correct) {
      opt.classList.add("correct");
    } else if (idx === selectedIndex && !isCorrect) {
      opt.classList.add("incorrect");
    }
  });

  // Show feedback
  const feedback = document.getElementById("quiz-feedback");
  feedback.classList.remove("hidden");
  feedback.querySelector(".feedback-text").innerHTML = `
    <strong>${isCorrect ? "✅ Correct!" : "❌ Incorrect"}</strong><br>
    ${question.explanation}
  `;
}

function nextQuestion() {
  currentQuizQuestion++;
  renderQuiz();
}

function showQuizResult() {
  quizCard.classList.add("hidden");
  quizResult.classList.remove("hidden");

  const percentage = Math.round((quizScore / quizQuestions.length) * 100);
  document.getElementById("final-score").textContent = quizScore;
  document.getElementById("final-total").textContent = quizQuestions.length;

  // Update progress
  progress.lastQuizScore = percentage;
  if (percentage === 100) {
    unlockAchievement("perfect-score");
  }
  unlockAchievement("quiz-start");
  saveProgress();
  renderProgress();
}

function restartQuiz() {
  currentQuizQuestion = 0;
  quizScore = 0;
  quizCard.classList.remove("hidden");
  quizResult.classList.add("hidden");
  renderQuiz();
}

// ---- Workflow Comparison ----
function renderWorkflow(scenarioIndex) {
  const scenario = workflowScenarios[scenarioIndex];

  document.getElementById("time-before").textContent = scenario.before.time;
  document.getElementById("time-after").textContent = scenario.after.time;

  const beforeSteps = document.getElementById("steps-before");
  beforeSteps.innerHTML = "";
  scenario.before.steps.forEach(step => {
    const stepEl = document.createElement("div");
    stepEl.className = "workflow-step";
    stepEl.textContent = step;
    beforeSteps.appendChild(stepEl);
  });

  const afterSteps = document.getElementById("steps-after");
  afterSteps.innerHTML = "";
  scenario.after.steps.forEach(step => {
    const stepEl = document.createElement("div");
    stepEl.className = "workflow-step";
    stepEl.textContent = step;
    afterSteps.appendChild(stepEl);
  });
}

// ---- Progress & Achievements ----
function renderProgress() {
  document.getElementById("cards-viewed").textContent = (progress.viewedCards || []).length;
  document.getElementById("quiz-score").textContent = (progress.lastQuizScore || 0) + "%";

  const level = calculateLevel();
  document.getElementById("level").textContent = level;

  // Render achievements
  const achievementsGrid = document.getElementById("achievements-grid");
  achievementsGrid.innerHTML = "";

  achievements.forEach(achievement => {
    const isUnlocked = progress.achievements && progress.achievements.includes(achievement.id);
    const achEl = document.createElement("div");
    achEl.className = `achievement ${isUnlocked ? "unlocked" : "locked"}`;
    achEl.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-info">
        <h4>${achievement.name}</h4>
        <p>${achievement.description}</p>
      </div>
    `;
    achievementsGrid.appendChild(achEl);
  });
}

function calculateLevel() {
  const cardsViewed = (progress.viewedCards || []).length;
  const quizScore = progress.lastQuizScore || 0;
  const achievementCount = (progress.achievements || []).length;

  const points = cardsViewed * 10 + quizScore + achievementCount * 50;
  return Math.floor(points / 100) + 1;
}

function unlockAchievement(achievementId) {
  if (!progress.achievements) progress.achievements = [];
  if (!progress.achievements.includes(achievementId)) {
    progress.achievements.push(achievementId);
    saveProgress();
    renderProgress();
  }
}

// ---- Local Storage ----
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
