"""Hilfsskript zum Indexieren neuer Manim-GIFs für die ZBCgifs-Website."""
import argparse
import datetime
import json
import os
import re
import shutil
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
GIFS_DIR = REPO_ROOT / "gifs"
DATA_JSON = REPO_ROOT / "data" / "gifs.json"
APP_JS = REPO_ROOT / "app.js"


def slugify(text: str) -> str:
    s = text.lower()
    replacements = {
        "ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss",
        "₂": "2", "₃": "3", "⁺": "plus", "⁻": "minus",
        "(": "", ")": ""
    }
    for k, v in replacements.items():
        s = s.replace(k, v)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "animation"


def add_or_update_gif(
    src_gif: str,
    title: str,
    categories: list[str],
    tags: list[str],
    hidden_tags: list[str],
    gif_id: str | None = None,
    series: str | None = None,
    step: int | None = None,
) -> dict:
    GIFS_DIR.mkdir(parents=True, exist_ok=True)
    slug = gif_id or slugify(title)
    dest_gif = GIFS_DIR / f"{slug}.gif"

    if os.path.abspath(src_gif) != os.path.abspath(dest_gif):
        shutil.copy2(src_gif, dest_gif)

    with open(DATA_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    entry = {
        "id": slug,
        "title": title,
        "file": f"./gifs/{slug}.gif",
        "categories": categories,
        "tags": tags[:5],
        "hiddenTags": hidden_tags,
        "createdAt": datetime.date.today().isoformat(),
    }
    if series:
        entry["series"] = series
    if step is not None:
        entry["step"] = step

    existing_idx = next((i for i, g in enumerate(data["gifs"]) if g["id"] == slug), None)
    if existing_idx is not None:
        data["gifs"][existing_idx] = entry
    else:
        data["gifs"].insert(0, entry)

    with open(DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    # Sync FALLBACK_DATA in app.js
    if APP_JS.exists():
        app_src = APP_JS.read_text(encoding="utf-8")
        new_fallback = "const FALLBACK_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";"
        app_src_updated = re.sub(
            r"const FALLBACK_DATA = \{[\s\S]*?\n\};",
            lambda _: new_fallback,
            app_src,
            count=1,
        )
        APP_JS.write_text(app_src_updated, encoding="utf-8")

    return entry


def main():
    parser = argparse.ArgumentParser(description="Indexiert ein neues Manim-GIF in ZBCgifs.")
    parser.add_argument("--src", required=True, help="Pfad zur erzeugten .gif Datei")
    parser.add_argument("--title", required=True, help="Anzeigename (z.B. 'Zellatmung (1)')")
    parser.add_argument("--id", default=None, help="Optionaler Dateiname/Slug ohne .gif")
    parser.add_argument("--categories", required=True, help="Kommagetrennte Lernbereiche, z.B. 'C10 LB 3,B10 LB 3'")
    parser.add_argument("--tags", required=True, help="Kommagetrennte sichtbare Tags (3-5 Stück)")
    parser.add_argument("--hidden-tags", default="", help="Kommagetrennte versteckte Suchbegriffe/Synonyme")
    parser.add_argument("--series", default=None, help="Optionaler Serienname für mehrschrittige Prozesse")
    parser.add_argument("--step", type=int, default=None, help="Optionaler Schritt (1, 2, 3...)")

    args = parser.parse_args()
    cats = [c.strip() for c in args.categories.split(",") if c.strip()]
    tags = [t.strip() for t in args.tags.split(",") if t.strip()]
    hidden = [h.strip() for h in args.hidden_tags.split(",") if h.strip()]

    entry = add_or_update_gif(
        src_gif=args.src,
        title=args.title,
        categories=cats,
        tags=tags,
        hidden_tags=hidden,
        gif_id=args.id,
        series=args.series,
        step=args.step,
    )
    print(f"Erfolgreich indexiert: {entry['title']} -> {entry['file']}")


if __name__ == "__main__":
    main()
