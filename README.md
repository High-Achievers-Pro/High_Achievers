# High Achievers

Landing page for **High Achievers** — an AI consulting and delivery studio focused on practical AI systems (agents, RAG, chatbots) integrated into real workflows.

## Sections

- **Hero** – Clear positioning + CTA + “What we deliver” panel
- **Services** – AI consulting, agent workflows, RAG, chatbots
- **Process** – Discovery → Pilot → Production
- **Partners** – Reference list from the sheet
- **CTA** – Contact
- **Footer** – Copyright

## Run locally

Run a simple local server (recommended; `file://` will block `fetch()`):

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Project structure

- `index.html` – root entry (loads `src/index.html`)
- `src/index.html` – page markup (header/sections/footer)
- `src/styles/main.css` – styling
- `src/js/main.js` – reveal + active-nav behavior
- `src/assets/` – images/icons (logo)

## Context

Project context and feature tracking are in the `docs/` folder:

- `docs/CONTEXT.md` – Overview and design direction
- `docs/FEATURES.md` – Feature list and completion status
