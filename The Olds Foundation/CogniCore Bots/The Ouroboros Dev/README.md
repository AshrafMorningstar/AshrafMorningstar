# Multi-Language Project Generator

**Author:** Ashraf Siddiqui
**GitHub:** https://github.com/AshrafMorningstar

This Python tool can automatically generate ready‑to‑use project skeletons for a variety of popular programming languages with a single command. Each generated project includes a personalized `README.md` containing the author's name and GitHub link.

## Supported Languages (initial)
- HTML & JavaScript (static web page)
- Python
- Swift (macOS/iOS command‑line app)
- Ruby

## How to Use
```bash
python -m multi_language_generator generate --languages html js python swift ruby
```
The command creates a folder for each language inside the current working directory, populated with a minimal but functional starter project.

## Extending
Add new language templates under `multi_language_generator/templates/` and update the `LANG_TEMPLATES` mapping in `generator.py`.
