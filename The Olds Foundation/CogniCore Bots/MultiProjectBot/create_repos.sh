#!/usr/bin/env bash
# create_repos.sh
# Template script to create GitHub repositories and push local starter folders.
# REQUIREMENTS:
# - git installed
# - gh (GitHub CLI) installed OR set GITHUB_TOKEN and use API (script uses gh by default)
#
# WARNING: Replace placeholders before running. Do NOT store tokens in public scripts.

GITHUB_USER="YOUR_GITHUB_USERNAME"
# Option A: use gh CLI (recommended)
USE_GH_CLI=true

# Option B: Use GITHUB_TOKEN (less secure if stored directly)
GITHUB_TOKEN="YOUR_GITHUB_TOKEN"

set -e

repos=(
  "mpbot-html-starter"
  "mpbot-python-starter"
  "mpbot-js-starter"
  "mpbot-swift-starter"
  "mpbot-ruby-starter"
)

starters=(
  "html-starter"
  "python-starter"
  "js-starter"
  "swift-starter"
  "ruby-starter"
)

for i in "${!repos[@]}"; do
  repo=${repos[$i]}
  folder=${starters[$i]}
  echo "Processing $repo from folder $folder"

  if [ "$USE_GH_CLI" = true ]; then
    gh repo create "$GITHUB_USER/$repo" --public --confirm --source="$folder" || echo "Repo may already exist"
    echo "Pushed $folder -> $GITHUB_USER/$repo"
  else
    # Fallback: create repo via API (curl) and push manually (implementation left as an exercise)
    echo "GH CLI disabled. Implement API creation with GITHUB_TOKEN or use gh auth login."
  fi
done

echo "Done. Check GitHub for created repositories."