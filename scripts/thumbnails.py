#!/usr/bin/env python3
"""Deterministic background assignment, distribution reporting, and WebP compositing."""
import argparse
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / "thumbnail-system/brand_config.json").read_text())
TEMPLATES = ROOT / "thumbnail-system/templates"
OUTPUT = ROOT / "public/thumbnails"

def assignment(slug: str) -> str:
    concepts = CONFIG["concepts"]
    return concepts[int(hashlib.sha256(slug.encode()).hexdigest(), 16) % len(concepts)]

def font(size: int):
    for candidate in ("C:/Windows/Fonts/arialbd.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"):
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()

def make_templates():
    TEMPLATES.mkdir(parents=True, exist_ok=True)
    colors = CONFIG["colors"]
    for index, concept in enumerate(CONFIG["concepts"]):
        image = Image.new("RGB", (1200, 630), colors[index % 3])
        draw = ImageDraw.Draw(image)
        for step in range(10):
            x = (index * 97 + step * 143) % 1200
            y = (index * 53 + step * 79) % 630
            draw.rounded_rectangle((x - 120, y - 70, x + 180, y + 110), 36, fill=colors[(index + step + 1) % len(colors)], outline=colors[-1], width=4)
        draw.text((60, 540), concept.replace("-", " ").upper(), font=font(25), fill=colors[-1])
        image.save(TEMPLATES / f"{concept}.webp", "WEBP", quality=88)

def composite(slug: str, title: str):
    concept = assignment(slug)
    template = TEMPLATES / f"{concept}.webp"
    if not template.exists():
        make_templates()
    image = Image.open(template).convert("RGB")
    draw = ImageDraw.Draw(image, "RGBA")
    draw.rounded_rectangle((55, 55, 865, 500), 36, fill=(16, 32, 24, 230))
    words, lines, line = title.split(), [], ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textlength(candidate, font=font(58)) > 720 and line:
            lines.append(line); line = word
        else: line = candidate
    lines.append(line)
    draw.text((100, 105), "\n".join(lines[:5]), font=font(58), fill="white", spacing=14)
    draw.text((100, 445), "OFFSHORE BOOKKEEPERS", font=font(23), fill="#75e3ad")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / f"{slug}.webp"
    image.save(target, "WEBP", quality=88, method=6)
    print(json.dumps({"slug": slug, "concept": concept, "path": str(target.relative_to(ROOT)), "size": image.size}))

def report(files):
    counts = {concept: 0 for concept in CONFIG["concepts"]}
    for file in files: counts[assignment(Path(file).stem)] += 1
    print(json.dumps({"assignments": counts, "spread": max(counts.values()) - min(counts.values())}, indent=2))

parser = argparse.ArgumentParser()
sub = parser.add_subparsers(dest="command", required=True)
sub.add_parser("templates")
compose = sub.add_parser("composite"); compose.add_argument("slug"); compose.add_argument("title")
distribution = sub.add_parser("report"); distribution.add_argument("files", nargs="+")
args = parser.parse_args()
if args.command == "templates": make_templates()
elif args.command == "composite": composite(args.slug, args.title)
else: report(args.files)
