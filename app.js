// ============================================================
//  GitHub Learning Journey — app.js
//  Interactive flashcards, quizzes, and AI workflow comparison
// ============================================================

const STORAGE_KEY = "github_learning_progress";

// ---- GitHub Concept Flashcards Data ----
const flashcardsData = [
  { term: "Repository / 仓库", definition: "A storage space for your project containing all files, folders, and version history. Think of it as a project folder with superpowers! / 包含所有文件、文件夹和版本历史的项目存储空间。就像一个具有超能力的项目文件夹！" },
  { term: "Commit / 提交", definition: "A snapshot of your project at a specific point in time. It's like saving your game progress - you can always go back to this point. / 项目在特定时间点的快照。就像保存游戏进度，你可以随时回到这个点。" },
  { term: "Branch / 分支", definition: "A parallel version of your repository. It allows you to work on features without affecting the main codebase, like having multiple save files. / 仓库的并行版本。允许你在不影响主代码库的情况下开发功能，就像有多个存档文件。" },
  { term: "Pull Request / 拉取请求", definition: "A request to merge your changes into another branch. It's where code review happens and team collaboration shines! / 将你的更改合并到另一个分支的请求。这里是代码审查和团队协作的舞台！" },
  { term: "Fork / 复刻", definition: "A personal copy of someone else's repository. You can experiment freely without affecting the original project. / 他人仓库的个人副本。你可以自由实验而不影响原始项目。" },
  { term: "Clone / 克隆", definition: "Downloading a repository to your local computer so you can work on it offline. Like downloading a file from the cloud. / 将仓库下载到本地计算机以便离线工作。就像从云端下载文件。" },
  { term: "Push / 推送", definition: "Uploading your local commits to a remote repository on GitHub. It's like syncing your work to the cloud. / 将本地提交上传到GitHub远程仓库。就像将工作同步到云端。" },
  { term: "Pull / 拉取", definition: "Downloading changes from a remote repository to your local machine. Keeps your local copy up-to-date with others' work. / 从远程仓库下载更改到本地机器。保持本地副本与他人工作同步。" },
  { term: "Merge / 合并", definition: "Combining changes from different branches into one. It's how teams integrate everyone's work together. / 将不同分支的更改合并为一个。这是团队整合所有人工作的方式。" },
  { term: "Issue / 问题", definition: "A way to track bugs, enhancements, or tasks. Think of it as a smart to-do list for your project. / 跟踪错误、增强功能或任务的方式。可以把它看作项目的智能待办事项列表。" },
  { term: "Actions / 动作", definition: "GitHub's automation tool that runs workflows like testing, building, and deploying your code automatically. / GitHub的自动化工具，可自动运行测试、构建和部署代码等工作流。" },
  { term: "README", definition: "The front page of your repository. It explains what your project does and how to use it - make it shine! ✨ / 仓库的首页。它解释项目的功能和使用方法 - 让它闪耀吧！✨" }
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
const githubWorkflowSteps = [
  {
    step: 1,
    action: "Create an Issue / 创建问题",
    description: "Start by documenting what you want to build. Issues help track features, bugs, and tasks. / 从记录你想要构建的内容开始。Issue帮助跟踪功能、错误和任务。",
    githubAction: `<div class="github-ui-mock">
      <div class="github-header">📋 New Issue</div>
      <div class="github-form">
        <input type="text" class="github-input" value="Add user authentication feature" readonly>
        <textarea class="github-textarea" readonly>We need to add user login functionality with:
- Email/password authentication
- Remember me option
- Password reset flow</textarea>
        <button class="github-btn">Create Issue</button>
      </div>
    </div>`,
    explanation: "✨ Issues are where work begins. They create a record of what needs to be done and why. / Issue是工作开始的地方。它们创建需要做什么以及为什么要做的记录。",
    showTerminal: false
  },
  {
    step: 2,
    action: "Clone Repository / 克隆仓库",
    description: "Download the repository to your local machine so you can work on it. / 将仓库下载到本地机器以便进行工作。",
    terminalCommands: [
      { command: "git clone https://github.com/yourname/yourproject.git", output: "Cloning into 'yourproject'...\nremote: Counting objects: 100% (250/250)\nreceiving objects: 100% (250/250), done." },
      { command: "cd yourproject", output: "" },
      { command: "ls", output: "src/  tests/  README.md  package.json" }
    ],
    explanation: "📥 Cloning creates a local copy of the repository with all its history. Now you can code! / 克隆创建仓库的本地副本及其所有历史记录。现在你可以编码了！",
    showTerminal: true
  },
  {
    step: 3,
    action: "Create a Branch / 创建分支",
    description: "Create a new branch to work on your feature without affecting the main code. / 创建新分支以在不影响主代码的情况下开发功能。",
    terminalCommands: [
      { command: "git checkout -b feature/user-auth", output: "Switched to a new branch 'feature/user-auth'" },
      { command: "git branch", output: "  main\n* feature/user-auth" }
    ],
    explanation: "🌿 Branches let you experiment safely. Your changes won't affect the main branch until you're ready to merge. / 分支让你安全地进行实验。在你准备好合并之前，你的更改不会影响主分支。",
    showTerminal: true
  },
  {
    step: 4,
    action: "Write Code / 编写代码",
    description: "Implement your feature by writing and editing code files. / 通过编写和编辑代码文件来实现你的功能。",
    githubAction: `<div class="code-editor-mock">
      <div class="editor-header">📝 src/auth.js</div>
      <pre class="code-content">
function authenticateUser(email, password) {
  // Validate email format
  if (!isValidEmail(email)) {
    return { success: false, error: 'Invalid email' };
  }

  // Check credentials
  const user = database.findUser(email);
  if (user && user.password === hashPassword(password)) {
    return { success: true, token: generateToken(user) };
  }

  return { success: false, error: 'Invalid credentials' };
}</pre>
    </div>`,
    explanation: "💻 This is where the magic happens! Write clean, tested code that implements your feature. / 这是魔法发生的地方！编写干净、经过测试的代码来实现你的功能。",
    showTerminal: false
  },
  {
    step: 5,
    action: "Check Status / 检查状态",
    description: "See what files you've changed before committing. / 在提交之前查看你更改了哪些文件。",
    terminalCommands: [
      { command: "git status", output: "On branch feature/user-auth\nChanges not staged for commit:\n  modified:   src/auth.js\n  modified:   src/database.js\n\nUntracked files:\n  tests/auth.test.js" }
    ],
    explanation: "🔍 Always check git status before committing. It shows what's changed and what's ready to commit. / 在提交之前始终检查git status。它显示更改的内容以及准备提交的内容。",
    showTerminal: true
  },
  {
    step: 6,
    action: "Stage & Commit / 暂存和提交",
    description: "Add your changes to staging and create a commit with a descriptive message. / 将更改添加到暂存区并使用描述性消息创建提交。",
    terminalCommands: [
      { command: "git add .", output: "" },
      { command: 'git commit -m "Add user authentication with email/password"', output: "[feature/user-auth a1b2c3d] Add user authentication with email/password\n 3 files changed, 145 insertions(+), 12 deletions(-)" }
    ],
    explanation: "💾 Commits are snapshots of your work. Write clear messages so others (and future you) understand what changed. / 提交是工作的快照。编写清晰的消息，以便其他人（和未来的你）理解更改的内容。",
    showTerminal: true
  },
  {
    step: 7,
    action: "Push to Remote / 推送到远程",
    description: "Upload your branch and commits to GitHub so others can see your work. / 将分支和提交上传到GitHub，以便其他人可以看到你的工作。",
    terminalCommands: [
      { command: "git push -u origin feature/user-auth", output: "Enumerating objects: 12, done.\nCounting objects: 100% (12/12), done.\nWriting objects: 100% (8/8), 2.15 KiB | 2.15 MiB/s, done.\nTotal 8 (delta 3), reused 0 (delta 0)\nremote: \nremote: Create a pull request for 'feature/user-auth' on GitHub by visiting:\nremote:      https://github.com/yourname/yourproject/pull/new/feature/user-auth\nTo github.com:yourname/yourproject.git\n * [new branch]      feature/user-auth -> feature/user-auth" }
    ],
    explanation: "🚀 Pushing uploads your local commits to GitHub. The -u flag sets up tracking so future pushes are easier. / 推送将本地提交上传到GitHub。-u标志设置跟踪，使未来的推送更容易。",
    showTerminal: true
  },
  {
    step: 8,
    action: "Create Pull Request / 创建拉取请求",
    description: "Request to merge your changes into the main branch. This is where code review happens! / 请求将更改合并到主分支。这是代码审查发生的地方！",
    githubAction: `<div class="github-ui-mock">
      <div class="github-header">🔀 Open a Pull Request</div>
      <div class="github-form">
        <div class="pr-branches">
          <span class="branch-badge">feature/user-auth</span> → <span class="branch-badge main">main</span>
        </div>
        <input type="text" class="github-input" value="Add user authentication feature" readonly>
        <textarea class="github-textarea" readonly>## What this PR does
Implements user authentication with email/password login.

## Changes
- Added authenticateUser() function
- Added password hashing
- Added token generation
- Added comprehensive tests

Fixes #42</textarea>
        <button class="github-btn">Create Pull Request</button>
      </div>
    </div>`,
    explanation: "🤝 PRs are where collaboration happens. Team members review your code, suggest improvements, and approve changes. / PR是协作发生的地方。团队成员审查你的代码、提出改进建议并批准更改。",
    showTerminal: false
  },
  {
    step: 9,
    action: "Code Review & Update / 代码审查和更新",
    description: "Team members review your code and you address their feedback. / 团队成员审查你的代码，你解决他们的反馈。",
    githubAction: `<div class="github-ui-mock">
      <div class="github-pr-review">
        <div class="review-comment">
          <div class="reviewer">👤 ReviewerBot</div>
          <p>Great work! Please add input validation for password length.</p>
        </div>
        <div class="review-comment approved">
          <div class="reviewer">👤 SeniorDev</div>
          <p>✅ Looks good! Security practices are solid. Approved!</p>
        </div>
      </div>
    </div>`,
    explanation: "👀 Code review improves quality. It catches bugs, ensures consistency, and spreads knowledge across the team. / 代码审查提高质量。它捕获错误、确保一致性并在团队中传播知识。",
    showTerminal: false
  },
  {
    step: 10,
    action: "Merge & Deploy / 合并和部署",
    description: "Once approved, merge your changes into the main branch. Your feature is now live! / 一旦获得批准，将更改合并到主分支。你的功能现已上线！",
    githubAction: `<div class="github-ui-mock">
      <div class="github-pr-merged">
        <div class="merge-badge">✅ Merged</div>
        <p>Pull request successfully merged and closed</p>
        <div class="merge-details">
          <p>feature/user-auth → main</p>
          <p>3 commits merged</p>
        </div>
        <button class="github-btn delete">Delete Branch</button>
      </div>
    </div>`,
    explanation: "🎉 Success! Your code is now part of the main branch. Pull the latest changes locally to stay in sync. / 成功！你的代码现在是主分支的一部分。在本地拉取最新更改以保持同步。",
    showTerminal: false
  },
  {
    step: 11,
    action: "Pull Latest Changes / 拉取最新更改",
    description: "Update your local repository with the latest changes from the main branch. / 使用主分支的最新更改更新本地仓库。",
    terminalCommands: [
      { command: "git checkout main", output: "Switched to branch 'main'" },
      { command: "git pull origin main", output: "From github.com:yourname/yourproject\n * branch            main       -> FETCH_HEAD\nUpdating 9z8y7x6..a1b2c3d\nFast-forward\n src/auth.js       | 145 ++++++++++++++++++++++\n tests/auth.test.js|  87 +++++++++++\n 2 files changed, 232 insertions(+)" }
    ],
    explanation: "🔄 Always pull before starting new work. This ensures you have the latest code and avoids merge conflicts. / 在开始新工作之前始终拉取。这确保你拥有最新的代码并避免合并冲突。",
    showTerminal: true
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
let currentWorkflowStep = 0;

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
  renderGitHubWorkflow();
  renderProgress();
  setupEventListeners();
  initTerminal();
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

  // GitHub Workflow navigation
  const prevStepBtn = document.getElementById("prev-step-btn");
  const nextStepBtn = document.getElementById("next-step-btn");
  if (prevStepBtn && nextStepBtn) {
    prevStepBtn.addEventListener("click", () => navigateWorkflowStep(-1));
    nextStepBtn.addEventListener("click", () => navigateWorkflowStep(1));
  }
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

// ---- Terminal Simulator ----
const terminalCommands = {
  help: {
    output: `Available commands / 可用命令:
  git status   - Show repository status / 显示仓库状态
  git log      - Show commit history / 显示提交历史
  git branch   - List branches / 列出分支
  git add      - Stage files / 暂存文件
  git commit   - Commit changes / 提交更改
  git push     - Push to remote / 推送到远程
  git pull     - Pull from remote / 从远程拉取
  ls           - List files / 列出文件
  pwd          - Print working directory / 打印当前目录
  clear        - Clear terminal / 清空终端
  help         - Show this help / 显示此帮助`,
    type: 'output'
  },
  'git status': {
    output: `On branch main / 在 main 分支上
Your branch is up to date with 'origin/main'.
你的分支与 'origin/main' 一致。

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  未暂存以备提交的变更：
  （使用 "git add <file>..." 更新要提交的内容）

    modified:   index.html
    modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")
修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）`,
    type: 'output'
  },
  'git log': {
    output: `commit a1b2c3d4e5f6g7h8i9j0 (HEAD -> main, origin/main)
Author: GitHub Learner <learner@github.com>
Date:   Thu Mar 27 2026

    Add bilingual support and terminal feature
    添加双语支持和终端功能

commit 9z8y7x6w5v4u3t2s1r0q
Author: GitHub Learner <learner@github.com>
Date:   Wed Mar 26 2026

    Update color scheme to lighter Budapest Hotel palette
    更新为更亮的布达佩斯饭店配色方案`,
    type: 'output'
  },
  'git branch': {
    output: `* main
  feature/terminal
  feature/bilingual`,
    type: 'success'
  },
  'git add .': {
    output: 'Files staged successfully! / 文件暂存成功！',
    type: 'success'
  },
  'git commit -m "update"': {
    output: `[main a1b2c3d] update
 2 files changed, 145 insertions(+), 23 deletions(-)

✓ Commit created successfully! / 提交创建成功！`,
    type: 'success'
  },
  'git push': {
    output: `Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 892 bytes | 892.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/yourname/yourrepo.git
   9z8y7x6..a1b2c3d  main -> main

✓ Push successful! / 推送成功！`,
    type: 'success'
  },
  'git pull': {
    output: `Already up to date. / 已经是最新的。`,
    type: 'success'
  },
  ls: {
    output: `index.html
styles.css
app.js
README.md
.git/`,
    type: 'output'
  },
  pwd: {
    output: '/home/user/github-learning-journey',
    type: 'output'
  },
  clear: {
    output: '',
    type: 'clear'
  }
};

function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  if (!terminalInput) return;

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim();
      if (command) {
        executeCommand(command);
        terminalInput.value = '';
      }
    }
  });
}

function executeCommand(command) {
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');

  // Add command to output
  const commandLine = document.createElement('div');
  commandLine.className = 'terminal-line';
  commandLine.innerHTML = `<span class="terminal-prompt">user@github:~$</span> <span class="terminal-command">${command}</span>`;
  terminalOutput.appendChild(commandLine);

  // Execute command
  const cmd = terminalCommands[command];

  if (cmd) {
    if (cmd.type === 'clear') {
      terminalOutput.innerHTML = '';
    } else {
      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-line';
      outputLine.innerHTML = `<span class="terminal-${cmd.type}">${cmd.output}</span>`;
      terminalOutput.appendChild(outputLine);
    }
  } else {
    const errorLine = document.createElement('div');
    errorLine.className = 'terminal-line';
    errorLine.innerHTML = `<span class="terminal-error">Command not found: ${command}
Type 'help' for available commands
命令未找到: ${command}
输入 'help' 查看可用命令</span>`;
    terminalOutput.appendChild(errorLine);
  }

  // Scroll to bottom
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// ---- GitHub Workflow Simulation ----
function renderGitHubWorkflow() {
  currentWorkflowStep = 0;
  renderWorkflowStep();
  renderProgressTracker();
}

function renderWorkflowStep() {
  const step = githubWorkflowSteps[currentWorkflowStep];
  if (!step) return;

  // Update header
  document.getElementById('step-number').textContent = `Step ${step.step}/${githubWorkflowSteps.length}`;
  document.getElementById('step-action').textContent = step.action;

  // Update description
  document.getElementById('step-description').innerHTML = `<p>${step.description}</p>`;

  // Update GitHub action or terminal
  const githubActionEl = document.getElementById('step-github-action');
  const terminalEl = document.getElementById('step-terminal');

  if (step.showTerminal && step.terminalCommands) {
    githubActionEl.style.display = 'none';
    terminalEl.style.display = 'block';

    let terminalHTML = '<div class="workflow-terminal">';
    step.terminalCommands.forEach(cmd => {
      terminalHTML += `<div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-command">${cmd.command}</span></div>`;
      if (cmd.output) {
        terminalHTML += `<div class="terminal-line"><span class="terminal-output">${cmd.output}</span></div>`;
      }
    });
    terminalHTML += '</div>';
    terminalEl.innerHTML = terminalHTML;
  } else if (step.githubAction) {
    githubActionEl.style.display = 'block';
    terminalEl.style.display = 'none';
    githubActionEl.innerHTML = step.githubAction;
  } else {
    githubActionEl.style.display = 'none';
    terminalEl.style.display = 'none';
  }

  // Update explanation
  document.getElementById('step-explanation').innerHTML = `<p class="explanation-text">${step.explanation}</p>`;

  // Update navigation buttons
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');

  if (prevBtn && nextBtn) {
    prevBtn.disabled = currentWorkflowStep === 0;

    if (currentWorkflowStep === githubWorkflowSteps.length - 1) {
      nextBtn.textContent = 'Complete! / 完成！ ✅';
    } else {
      nextBtn.textContent = 'Next / 下一步 →';
    }
  }

  renderProgressTracker();
}

function navigateWorkflowStep(direction) {
  const newStep = currentWorkflowStep + direction;

  if (newStep < 0) return;

  if (newStep >= githubWorkflowSteps.length) {
    // Completed the workflow
    if (!progress.completedGitHubWorkflow) {
      progress.completedGitHubWorkflow = true;
      saveProgress();
      alert('🎉 Congratulations! You completed the GitHub workflow simulation! / 恭喜！你完成了GitHub工作流模拟！');
    }
    currentWorkflowStep = 0;
  } else {
    currentWorkflowStep = newStep;
  }

  renderWorkflowStep();
}

function renderProgressTracker() {
  const trackerEl = document.getElementById('progress-steps');
  if (!trackerEl) return;

  let html = '';
  githubWorkflowSteps.forEach((step, index) => {
    const status = index < currentWorkflowStep ? 'completed' :
                   index === currentWorkflowStep ? 'active' : 'pending';
    html += `<div class="progress-step ${status}">
      <div class="progress-step-number">${step.step}</div>
      <div class="progress-step-label">${step.action.split('/')[0].trim()}</div>
    </div>`;
  });
  trackerEl.innerHTML = html;
}

