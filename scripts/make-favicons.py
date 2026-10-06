# Génère les favicons (monogramme "S" du logo SISIA) dans public/
from PIL import Image
src = Image.open('public/images/logo-smart3.png').convert('RGBA')
# lettre S : zone approximative du logo (581 x 268 px d'origine, affiché ici en 640 px)
w, h = src.size
sx = w / 640
box = (int(62 * sx), int(48 * sx), int(174 * sx), int(205 * sx))
s = src.crop(box)
# recadrage serré sur les pixels non transparents / non blancs
bg = Image.new('RGBA', s.size, (255, 255, 255, 255))
bg.alpha_composite(s)
px = bg.convert('RGB')
bbox = Image.eval(px.convert('L'), lambda v: 255 if v < 235 else 0).getbbox()
s = bg.crop(bbox)
def square(size, pad=0.14, bgc=(255, 255, 255, 255)):
    canvas = Image.new('RGBA', (size, size), bgc)
    inner = int(size * (1 - 2 * pad))
    r = min(inner / s.width, inner / s.height)
    t = s.resize((max(1, int(s.width * r)), max(1, int(s.height * r))), Image.LANCZOS)
    canvas.alpha_composite(t, ((size - t.width) // 2, (size - t.height) // 2))
    return canvas
for name, size, pad in [('favicon-16.png', 16, 0.04), ('favicon-32.png', 32, 0.06)]:
    square(size, pad).convert('RGB').save('public/' + name, optimize=True)

# Icônes d'application : logo complet (comme l'apple-touch-icon de l'ancien site) centré sur fond blanc
def full_logo(size, pad=0.10):
    canvas = Image.new('RGBA', (size, size), (255, 255, 255, 255))
    inner = int(size * (1 - 2 * pad))
    r = inner / max(src.width, src.height)
    t = src.resize((int(src.width * r), int(src.height * r)), Image.LANCZOS)
    canvas.alpha_composite(t, ((size - t.width) // 2, (size - t.height) // 2))
    return canvas
for name, size in [('apple-touch-icon.png', 180), ('icon-192.png', 192), ('icon-512.png', 512)]:
    full_logo(size).convert('RGB').save('public/' + name, optimize=True)
square(64, 0.06).convert('RGB').save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print('ok')
