from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public"
DEST = SOURCE / "rooms-clean"
DEST.mkdir(parents=True, exist_ok=True)
# Preserve original brochure images while generating clean photos.

cuts = {
    "StandardRoom.jpeg": (0.454, 0.695),
    "JuniorSuite.jpeg": (0.454, 0.695),
    "DeluxeJuniorSuite.jpeg": (0.454, 0.691),
    "DeluxeSuiteTwoBed.jpeg": (0.458, 0.695),
    "DoubleBedRoomJacuzziBalconyPanoramicView.jpeg": (0.453, 0.663),
    "GardenViewRoomWithJacuzzi.jpeg": (0.451, 0.690),
    "JacuzziBalconyGardenViewSuite.jpeg": (0.458, 0.696),
    "JacuzziBalconyRoomPanoramicView.jpeg": (0.458, 0.695),
    "JacuzziRoomGardenView.jpeg": (0.451, 0.690),
}

for name, (split, bottom) in cuts.items():
    with Image.open(SOURCE / name) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        w, h = image.size
        top = image.crop((0, 0, w, round(h * split)))
        thumbnails = image.crop((0, round(h * split), w, round(h * bottom)))
        output = Image.new("RGB", (1200, 675), "#ffffff")
        output.paste(ImageOps.fit(top, (1200, 465), method=Image.Resampling.LANCZOS), (0, 0))
        output.paste(ImageOps.fit(thumbnails, (1200, 210), method=Image.Resampling.LANCZOS), (0, 465))
        output.save(DEST / name, "JPEG", quality=92, optimize=True, subsampling=0)
        print(name, image.size, "->", output.size)
