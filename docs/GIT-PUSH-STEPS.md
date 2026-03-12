# Pushing to GitHub (small increments)

Git isn’t available in this environment, so run these on your machine.

## One-time setup

1. **Use the existing GitHub repo**  
   `https://github.com/High-Achievers-Pro/High_Achievers`  
   (repo is already created and currently empty).

2. **Initialize and add remote** (in `HA` folder):

```bash
cd /Users/sethabayo/Documents/HA
git init
git remote add origin https://github.com/High-Achievers-Pro/High_Achievers.git
```

## Push in small increments (by feature)

### Feature 1: Project + initial landing

```bash
git add docs/ index.html src/ .gitignore README.md
git commit -m "feat: consulting landing page with src structure"
git branch -M main
git push -u origin main
```

### Feature 2: Content & polish

```bash
git add src/ docs/FEATURES.md README.md
git commit -m "feat: refine services, process, and CTA content"
git push
```

Use the same pattern for later features: small commits and push after each logical change.

## If the repo already exists with a README

```bash
git pull origin main --rebase
# fix any conflicts, then:
git push
```

You’re using `High-Achievers-Pro/High_Achievers` as the remote repository.
