# 🛠️ Configuration & Setup Guide

Congratulations on your new 3D-enhanced GitHub profile! Follow these steps to activate all features.

## 🔑 Secrets Configuration

To enable the dynamic updates (WakaTime, etc.), you need to add **Repository Secrets**.

1. Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Add the following:

| Secret Name        | Value               | Description                                                                           |
| :----------------- | :------------------ | :------------------------------------------------------------------------------------ |
| `WAKATIME_API_KEY` | `your_wakatime_key` | Get it from [WakaTime Settings](https://wakatime.com/settings/api-key)                |
| `GH_TOKEN`         | `your_github_token` | (Optional) Personal Access Token if standard `GITHUB_TOKEN` permissions aren't enough |

## ⚙️ Workflows Explained

Your `.github/workflows` directory contains automation scripts:

- **`snake.yml`**: Generates the 3D contribution snake animation every 12 hours.
- **`activity.yml`**: Updates the "Recent Activity" section every 6 hours with your latest commits/PRs.
- **`wakatime.yml`**: Updates coding stats weekly (requires API Key).
- **`blog-post.yml`**: Pulls latest articles from your RSS feed (default set to Dev.to).
- **`profile-3d.yml`**: Generates a 3D contribution graph (requires `yoshi389111/github-profile-3d-contrib`).

## 🎨 Customizing the Design

### 1. **Colors**

The README uses a premium gradient palette:

- **Primary**: `#6366F1` (Indigo)
- **Secondary**: `#8B5CF6` (Purple)
- **Accent**: `#EC4899` (Pink)

To change colors, look for these hex codes in `README.md` (SVG sections) and `.github/workflows/snake.yml`.

### 2. **3D Header**

The header uses **Capsule Render**, a dynamic image generator.

- Locate the `<img>` tag at the top of `README.md`.
- You can modify the `text=`, `desc=`, and `customColorList=` parameters in the URL to change the text and colors.
- RGB Hex codes (without `#`) are used in the URL.

### 3. **Tech Stack & Badges**

- Badges use `shields.io`.
- To add a new skill, copy an existing `<img>` tag and change the `badge/Name-Color` part.
- Icons are fetched from `simpleicons.org` (e.g., `logo=react`).

### 4. **Typing Animation**

- Edited via the URL parameters in the `readme-typing-svg` link.
- Change `&lines=...` to update the rotating text. USE `+` for spaces working with URL encoding.

## 🚀 Activation Steps

1. **Commit and Push** all files to your repository.
2. Go to the **Actions** tab in GitHub.
3. You might need to manually trigger the "Generate Snake" or other workflows for the first time if they don't run automatically.
4. **Enable GitHub Pages** (Optional but recommended for hosting assets):
   - Settings -> Pages -> Source: Deploy from branch -> Select `output` branch (created by snake workflow) or `main` / `gh-pages`.

## 🐛 Troubleshooting

- **Images not loading?** Ensure the paths (`src="..."`) point to the correct branch/URL.
- **Workflows failing?** Check the "Actions" tab logs. Often it's a missing Secret or Permission issue.
- **Layout broken?** Markdown tables can be sensitive. Ensure empty lines between HTML blocks and Markdown tables.

---

_Made with ❤️ by Agent Antigravity_
