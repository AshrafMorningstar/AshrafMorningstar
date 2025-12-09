# 🛠️ Implementation Guide: 3D GitHub Profile

Welcome to the implementation guide for your Quantum-Themed GitHub profile. This document covers setup, customization, and automation.

## 📋 Prerequisites

1. A GitHub account
2. A repository named `AshrafMorningstar/AshrafMorningstar` (Case sensitive for the special profile feature)
3. Basic familiarity with Git/GitHub Actions

## 🏗️ Step 1: Repository Setup

1. Create a new public repository named `AshrafMorningstar`.
2. Initialize it with a `README.md`.
3. Create a `.github/workflows` directory for automation scripts.

## 🐍 Step 2: Automation Workflows (Snake & 3D Contrib)

To enable the animated snake and 3D contribution graph, you need to set up GitHub Actions.

### Snake Animation Workflow

Create: `.github/workflows/snake.yml`

```yaml
name: Generate Snake

on:
  schedule:
    - cron: "0 */6 * * *" # every 6 hours
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: Platane/snk@v2
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: dist/snake.svg?palette=github-dark
      - uses: crazy-max/ghaction-github-pages@v2.1.3
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 3D Contribution Workflow

Create: `.github/workflows/profile-3d.yml`

```yaml
name: GitHub-Profile-3D-Contrib

on:
  schedule:
    - cron: "0 18 * * *" # daily
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: generate-github-profile-3d-contrib
    steps:
      - uses: actions/checkout@v3
      - uses: yoshi389111/github-profile-3d-contrib@0.7.1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          USERNAME: ${{ github.repository_owner }}
      - name: Commit & Push
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add -A .
          git commit -m "generated"
          git push
```

## 🎨 Step 3: Customization

### Colors (Quantum Theme)

- **Primary:** `#00F0FF` (Cyan)
- **Secondary:** `#7000FF` (Neon Purple)
- **Background:** `#0d1117` (GitHub Dark)

### Replacing Images

Upload your custom 3D banners to an `assets/` folder in your repository and reference them like:
`![Banner](https://github.com/AshrafMorningstar/AshrafMorningstar/blob/main/assets/banner.gif?raw=true)`

## 🚀 Troubleshooting

**Issue: Images not loading**

- Ensure you used `?raw=true` for GitHub-hosted images.
- Check relative paths vs absolute paths.

**Issue: Action failed**

- Go to "Settings > Actions > General" and ensure "Read and write permissions" are enabled for workflows.

---

_Created for Ashraf Morningstar's 3D Profile System_
