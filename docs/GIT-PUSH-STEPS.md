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

### Feature 1: Project + Hero

```bash
git add docs/ index.html styles.css .gitignore README.md
git commit -m "feat: project setup, context docs, hero section and base styles"
git branch -M main
git push -u origin main
```

### Feature 2: Additional sections

```bash
git add index.html styles.css docs/FEATURES.md
git commit -m "feat: add About, Features, and CTA sections"
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
