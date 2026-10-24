"""Generate the 1200x630 Open Graph share card in the site's own design language.

Run once when the card needs to change; the PNG is committed as a static asset.
    uv run --with pillow python scripts/make-og.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
PAPER = (233, 230, 220)
INK = (22, 20, 15)
INK_SOFT = (91, 87, 76)
RULE = (199, 194, 178)
ACCENT = (27, 9, 162)
SIGNAL = (136, 214, 19)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.abspath(os.path.join(HERE, "..", "public", "og.png"))
FONT_DIR = os.environ.get("OG_FONT_DIR", os.path.join(HERE, "og-fonts"))

display = ImageFont.truetype(os.path.join(FONT_DIR, "faculty-glyphic-400-normal.ttf"), 66)
mono = ImageFont.truetype(os.path.join(FONT_DIR, "ibm-plex-mono-400-normal.ttf"), 20)
mono_sm = ImageFont.truetype(os.path.join(FONT_DIR, "ibm-plex-mono-400-normal.ttf"), 17)
mono_b = ImageFont.truetype(os.path.join(FONT_DIR, "ibm-plex-mono-500-normal.ttf"), 20)

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)

# faint engineering-paper grid, same 88px module as the site
for x in range(0, W, 88):
    d.line([(x, 0), (x, H)], fill=(224, 221, 211), width=1)
for y in range(0, H, 88):
    d.line([(0, y), (W, y)], fill=(224, 221, 211), width=1)

PAD = 72
# header row
d.text((PAD, PAD - 6), "ADEKOYA GBOLAHAN", font=mono_b, fill=INK)
right = "( FULL-STACK )"
d.text((W - PAD - d.textlength(right, font=mono), PAD - 6), right, font=mono, fill=INK_SOFT)
d.line([(PAD, PAD + 34), (W - PAD, PAD + 34)], fill=INK, width=1)

# headline: two deliberate lines — an orphaned "on." reads as a mistake
headline_lines = ["I build the software", "schools run on."]
max_w = W - PAD * 2
lines = []
for source in headline_lines:
    if d.textlength(source, font=display) <= max_w:
        lines.append(source)
        continue
    current = ""
    for word in source.split():
        trial = (current + " " + word).strip()
        if d.textlength(trial, font=display) <= max_w:
            current = trial
        else:
            lines.append(current)
            current = word
    lines.append(current)

y = 168
for line in lines:
    d.text((PAD, y), line, font=display, fill=INK)
    y += 76

# stack line
d.text((PAD, y + 30), "REACT  ·  NEXT.JS  ·  TYPESCRIPT  ·  LARAVEL  ·  NODE.JS", font=mono_sm, fill=INK_SOFT)

# footer
fy = H - PAD - 6
d.line([(PAD, fy - 40), (W - PAD, fy - 40)], fill=RULE, width=1)
d.text((PAD, fy - 24), "10,000+ STUDENTS ON SYSTEMS I BUILD", font=mono_sm, fill=ACCENT)
status = "OPEN TO SENIOR FRONTEND / FULL-STACK ROLES"
d.ellipse([W - PAD - d.textlength(status, font=mono_sm) - 20, fy - 20,
           W - PAD - d.textlength(status, font=mono_sm) - 10, fy - 10], fill=SIGNAL)
d.text((W - PAD - d.textlength(status, font=mono_sm), fy - 24), status, font=mono_sm, fill=INK_SOFT)

img.save(OUT, optimize=True)
print(f"wrote {OUT} {img.size} {os.path.getsize(OUT)} bytes")
