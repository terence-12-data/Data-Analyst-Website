"""Run once from the website root (the folder containing index.html):
    pip install pillow
    python optimize_images.py
Creates the .webp files the updated HTML/CSS/JS point to. Originals are left untouched."""
from PIL import Image
from pathlib import Path

D = Path("assets/images")
# (source file, widths to export, webp quality)
JOBS = [
    ("hero_bg.jpg",        [800, 1600], 65),
    ("fifa_dashboard.jpg", [480, 800],  78),
    ("ipl_dashboard.jpg",  [480, 800],  78),
    ("hr_dashboard.png",   [480, 800],  80),
    ("logo-icon.png",      [48, 96],    90),
    ("upi_qr.jpeg",        [640],       90),   # high quality so the QR stays scannable
]

for name, widths, q in JOBS:
    src = D / name
    if not src.exists():
        print("MISSING", src); continue
    im = Image.open(src)
    im = im.convert("RGBA") if src.suffix == ".png" else im.convert("RGB")
    for w in widths:
        tw = min(w, im.width)                       # never upscale
        th = round(im.height * tw / im.width)
        out = D / f"{src.stem}-{w}.webp"
        im.resize((tw, th), Image.LANCZOS).save(out, "WEBP", quality=q, method=6)
        print(f"{out.name:28s} {tw}x{th}  {out.stat().st_size//1024} KB")
