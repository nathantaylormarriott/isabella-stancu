#!/usr/bin/env python3
"""Generate Open Graph and icon assets for Isabella Stancu CV site."""

from pathlib import Path

from typing import Union

from PIL import Image, ImageDraw, ImageFont

PUBLIC = Path(__file__).resolve().parent.parent / "public"

NAME = "Isabella Stancu"
TITLE = "Administration & Business Operations"
PHONE = "+44 7501 119985"
TAGLINE = "Customer Service · Microsoft Office · London, UK"

BG = (201, 107, 74)  # #C96B4A
BG_DARK = (168, 86, 58)
WHITE = (255, 255, 255)
MUTED = (255, 240, 232)


def load_font(size: int, bold: bool = False) -> Union[ImageFont.FreeTypeFont, ImageFont.ImageFont]:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_gradient(width: int, height: int) -> Image.Image:
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        r = int(BG[0] * (1 - ratio * 0.18) + BG_DARK[0] * ratio * 0.18)
        g = int(BG[1] * (1 - ratio * 0.18) + BG_DARK[1] * ratio * 0.18)
        b = int(BG[2] * (1 - ratio * 0.18) + BG_DARK[2] * ratio * 0.18)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return img


def text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def generate_og_image() -> None:
    width, height = 1200, 630
    img = draw_gradient(width, height)
    draw = ImageDraw.Draw(img)

    name_font = load_font(88, bold=True)
    title_font = load_font(42, bold=True)
    phone_font = load_font(34, bold=False)
    tag_font = load_font(28, bold=False)

    name_w, name_h = text_size(draw, NAME, name_font)
    title_w, title_h = text_size(draw, TITLE, title_font)
    phone_w, phone_h = text_size(draw, PHONE, phone_font)
    tag_w, tag_h = text_size(draw, TAGLINE, tag_font)

    gap = 18
    total_h = name_h + title_h + phone_h + tag_h + gap * 3
    y = (height - total_h) // 2

    draw.text(((width - name_w) / 2, y), NAME, font=name_font, fill=WHITE)
    y += name_h + gap
    draw.text(((width - title_w) / 2, y), TITLE, font=title_font, fill=MUTED)
    y += title_h + gap
    draw.text(((width - tag_w) / 2, y), TAGLINE, font=tag_font, fill=MUTED)
    y += tag_h + gap
    draw.text(((width - phone_w) / 2, y), PHONE, font=phone_font, fill=WHITE)

    img.save(PUBLIC / "og-image.png", format="PNG", optimize=True)
    print("Wrote og-image.png")


def generate_icon(size: int, path: Path, radius_ratio: float = 0.22) -> None:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = int(size * radius_ratio)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=BG + (255,))

    font = load_font(int(size * 0.52), bold=True)
    letter = "I"
    letter_w, letter_h = text_size(draw, letter, font)
    draw.text(
        ((size - letter_w) / 2, (size - letter_h) / 2 - size * 0.04),
        letter,
        font=font,
        fill=WHITE,
    )
    img.save(path, format="PNG", optimize=True)
    print(f"Wrote {path.name}")


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    generate_og_image()
    generate_icon(180, PUBLIC / "apple-touch-icon.png")
    generate_icon(32, PUBLIC / "favicon-32x32.png", radius_ratio=0.24)


if __name__ == "__main__":
    main()
