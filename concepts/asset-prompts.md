# Produktionsgrafiken – Pixelstil

Erzeugt mit der eingebauten Bildgenerierung am 16.10.2026. Die Referenzgrafik `03-retro-pixel.png` dient als Stilreferenz, das vom Nutzer bereitgestellte Foto als Dennis-Referenz. Die Umgebung ist fiktiv und keine genaue Rekonstruktion einer Adresse.

## yard.png

```text
Use case: stylized-concept
Asset type: production background raster for a browser survivor-like top-down 2D game, landscape 3:2.
Primary request: Create an EMPTY playable industrial yard in Herne, Germany at blue twilight, inspired by the supplied pixel-art concept. Input image is STYLE REFERENCE ONLY, not an edit target. No people and no interface.
Style/medium: polished 32-bit pixel art, crisp visible consistent square pixel clusters, dark blue shadow palette, warm amber-orange industrial lamps, charming nostalgic illustrated game aesthetic. Strict orthographic 3/4 overhead RPG camera: looking down at the ground, NO horizon and NO sky, no perspective vanishing point.
Composition: the CENTRAL 75 PERCENT of the entire image is a continuous unobstructed navigable paved courtyard, extending down to bottom edge. Paving is subtle muted dark blue-grey, sparse puddles and a few scattered leaves, low visual noise so small characters will be very legible. Around the outermost upper border only, a narrow band of brick industrial warehouse facade with sectional garage doors and a pedestrian entrance. A narrow canal glimpsed beyond upper-right fence. Small pallets and bins clustered only at far left and right edges. Warm lamps along upper building. Very small hints of foliage at corners, no large foreground objects.
Constraints: empty environment, no characters, no text, no logo, no UI, no title, no borders, no floating objects, no weapons, no effects, no stars. Large generously spacious central playable ground. All important decoration concentrated near the top and outermost edges. This is a practical game map texture, not a cinematic composition. Match reference palette and tactile pixel rendering.
```

## characters.png

```text
Use case: stylized-concept
Asset type: production transparent PNG sprite atlas for a browser game.
Primary request: Exactly SIX separate isolated sprites on GENUINE transparent alpha, in EXACTLY 3 equal-width columns by 2 equal-height rows. Landscape image 3:2. Each cell holds exactly one centered sprite, ample transparent gutters, nothing crosses cell boundary. No visible grid.
Input images: Image 1 is pixel art STYLE reference. Image 2 is Dennis FACE AND CLOTHING reference, stylize kindly while preserving recognizable salt-and-pepper spiky short hair, stubble beard, friendly smile, dark green zip hoodie with pale drawstrings; a slightly chubby rounded build.
Style: polished charming 32-bit pixel sprites with thick crisp dark pixel outlines, consistent square pixels, blue shadows and warm highlights, full body, front three-quarter facing slightly right, viewed a little from above like classic top-down RPG sprites. All five human sprites share identical approximate scale, heads and feet safely inside their cells. Every sprite must fit inside middle 62 percent of its cell width and 76 percent of cell height, vertically centered. Simple bold shapes readable at tiny game scale.
Cell layout, left to right: TOP LEFT Dennis, friendly smiling middle-aged man, slightly chubby, green hoodie, dark trousers, brown shoes, blue folder in left hand and small orange office stapler in right. TOP MIDDLE male customer, brown coat, dark trousers, holding white paperwork, mildly puzzled. TOP RIGHT female customer, purple coat, glasses, shoulder-length brown hair, holding paperwork, curious friendly expression. BOTTOM LEFT construction customer with yellow hardhat, orange work jacket, navy trousers and clipboard. BOTTOM MIDDLE tall boss customer in navy-blue suit, carrying an exaggerated stack of folders, demanding but funny face. BOTTOM RIGHT single white takeaway coffee cup with orange sleeve and blue lid, same centered isolated atlas treatment; the cup itself is approximately 45 percent cell height.
Constraints: transparent background with native alpha, no checkerboard, no solid background, no ground planes, no cast shadows, no glows, no labels, no text, no UI, no grid lines, no extra people or objects outside the six sprites. Full bodies complete, no clipping. Crisp non-antialiased-looking pixel style.
```

Atlas-Reihenfolge: oben Dennis / Kunde braun / Kundin lila; unten Baukunde / Boss / Kaffee.
