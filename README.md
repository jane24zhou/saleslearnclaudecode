# 🧲 My Fridge Magnet Collection

A simple, beautiful frontend website to showcase your fridge magnet collection and the stories behind each one.

**[▶ Open the website](index.html)** — open `index.html` in any web browser (no server needed).

---

## ✨ Features

- Responsive magnet gallery with emoji-illustrated cards
- **Filter** magnets by category: Travel, Food, Gift, or Nature
- **Click any magnet** to read its full story in a pop-up panel
- Smooth hover animations and keyboard-accessible

---

## 🗂 File Structure

```
saleslearnclaudecode/
├── index.html   ← Page layout & magnet data
├── styles.css   ← All visual styling
├── script.js    ← Filter & modal interactivity
└── README.md    ← This file + GitHub guide
```

To **add your own magnet**, copy any `<article class="magnet-card" ...>` block in `index.html`, change the `data-*` attributes, and save the file.

---

## 🐙 GitHub Concepts Guide

This section walks you through every Git / GitHub action you mentioned wanting to learn.

---

### 🔑 Core vocabulary

| Term | What it means |
|---|---|
| **Repository (repo)** | A folder tracked by Git — stores your project and its full history |
| **Commit** | A saved snapshot of your changes, like a checkpoint in a game |
| **Branch** | An independent line of work; `main` is the default |
| **Remote** | A copy of the repo hosted online (e.g. on GitHub) |
| **Working tree** | The files on your computer that you edit right now |

---

### 💾 Save — `git add` + `git commit`

"Saving" in Git is a two-step process:

```bash
# 1. Stage the files you want to save
git add index.html          # stage one file
git add .                   # stage everything

# 2. Commit (take the snapshot) with a short message
git commit -m "Add gelato magnet from Florence"
```

> **Tip:** Write commit messages in the present tense and keep them under ~72 characters.

---

### ⬆️ Push — send your commits to GitHub

```bash
git push origin main
```

- `origin` = the GitHub remote (set automatically when you clone)
- `main` = the branch you're pushing to

After this, your changes are visible on github.com.

---

### ⬇️ Pull — get the latest changes from GitHub

```bash
git pull origin main
```

Use this before you start working to make sure you have the newest version, especially when collaborating.

---

### 🌿 Branch — work without breaking `main`

```bash
# Create and switch to a new branch
git checkout -b add-tokyo-magnet

# ... edit files, commit your work ...

# Push the branch to GitHub
git push origin add-tokyo-magnet
```

Branches let you experiment safely. `main` stays clean until you're ready to merge.

---

### 🔀 Merge — combine branches

**Option A — GitHub Pull Request (recommended for collaboration):**

1. Push your branch to GitHub
2. Go to the repo on github.com → click **"Compare & pull request"**
3. Write a description, ask a teammate to review
4. Click **"Merge pull request"** when approved

**Option B — local merge:**

```bash
git checkout main
git merge add-tokyo-magnet
git push origin main
```

---

### 🤝 Collaborate — working with others

```
Your flow when collaborating:

1. git pull origin main          ← get their latest work first
2. git checkout -b my-feature    ← make a branch for your change
3. (edit files)
4. git add .
5. git commit -m "My change"
6. git push origin my-feature    ← share your branch
7. Open a Pull Request on GitHub ← ask for review before merging
```

**What is a Pull Request (PR)?**  
A Pull Request is a proposal to merge your branch into `main`. It gives teammates a chance to review, comment, and suggest improvements before the code becomes permanent. It's the heart of GitHub collaboration.

---

### 🚑 Useful rescue commands

```bash
git status                      # see what's changed / staged
git log --oneline               # see commit history
git diff                        # see exactly what changed in each file
git stash                       # temporarily set aside uncommitted changes
git stash pop                   # bring them back
git restore index.html          # discard edits to a file (careful — irreversible!)
```

---

### 🗺 Typical day-to-day workflow

```
morning:  git pull origin main
work:     edit files → git add . → git commit -m "..."
share:    git push origin my-branch → open Pull Request
done:     teammate reviews → merge PR → git pull origin main
```

---

*Happy collecting — and happy coding! 🧲*
