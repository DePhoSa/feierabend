# Feierabend ist nicht lagermäßig

Ein liebevoller Pixel-Survivor-Prototyp mit Dennis Ressemann. Kunden wird geholfen; niemand wird getötet. Ausgangspunkt: Hörmann Herne, Schlossstraße 30. Inoffizielle Parodie, keine offizielle Hörmann-Veröffentlichung.

**Online spielen:** https://dephosa.github.io/feierabend-survivors/

**Repository:** https://github.com/DePhoSa/feierabend-survivors

**Neue Spielprobe:** https://dephosa.github.io/feierabend-survivors/probe.html — Jörgs kurze Besprechung: 45 Sekunden, drei Notizen, ein angekündigtes Folienmuster. Bestehende Grafik als ausdrücklicher Platzhalter; dient der gemeinsamen Bewertung vor dem weiteren Bossausbau.

## Gemeinsam weiterentwickeln

Der Fahrplan und die Abschlusskriterien bis 1.0 stehen in [ROADMAP.md](ROADMAP.md). Nutzerideen, eigene Vorschläge und ihre Entscheidungen sammeln wir in [IDEEN.md](IDEEN.md). [AGENTS.md](AGENTS.md) hält die Arbeitsweise für weitere Entwicklungssitzungen fest. Neue Etappen und Umfangsziele sind Empfehlungen, bis sie gemeinsam bestätigt wurden.

## Spielen

WASD oder Pfeiltasten bewegen Dennis. Auf Touchgeräten den Steuerkreis ziehen. Hilfsmittel beraten automatisch. Grüne Danke-Punkte einsammeln, bei Aufstiegen eine Verbesserung wählen. P/Escape pausiert. Nach Schichtende das letzte große Anliegen lösen und den grünen Ausgang oben erreichen.

Zwei Spielzeiten: 6 Minuten und 90 Sekunden. Geduld regeneriert außerhalb des Gedränges, Kaffee hilft zusätzlich. Lokale Rekorde pro Spielzeit und Tonwahl werden im Browser gespeichert; kein Login, Backend, Analytics oder externer Laufzeitdienst.

## Lokal starten

Node.js 22 oder neuer genügt, keine Paketinstallation:

```sh
node server.mjs
```

Dann http://127.0.0.1:4173 öffnen. Alternativ kann jeder statische Server den Ordner `public` bereitstellen. Das Spiel verwendet ES-Module und sollte über HTTP statt per Doppelklick auf index.html gestartet werden.

## Prüfen

```sh
node --test tests/*.test.mjs
node --check public/game.js
node --check public/core.js
node --check public/presentation.js
node --check public/probe.js
```

## Veröffentlichung

GitHub Pages deployt den Ordner `public` durch `.github/workflows/pages.yml`, sobald ein Commit auf `main` gepusht wird. In den Repository-Einstellungen Pages → Source: GitHub Actions wählen. Alle Assets sind relativ verlinkt und funktionieren unter einem Repository-Unterpfad.

## Aufbau

- `public/core.js`: unabhängige Spielsimulation, Wellen, Fähigkeiten, Fortschritt und Sieg/Niederlage.
- `public/game.js`: Canvas-Rendering, Eingabe, Menüs, Audio und lokale Rekorde.
- `public/style.css`: responsive Oberfläche und Touch-Steuerung.
- `public/assets`: generierte Pixelgrafik und lokal bereitgestellte Schrift.
- `tests/core.test.mjs`: Tests für Bewegung, Pause, Aufstiege, Abschluss, Geduld und eine längere Simulation.
- `public/presentation.js`, `public/probe.js`, `public/probe.html`: isolierte Simulation und Oberfläche der ersten Folien-Spielprobe; `tests/presentation.test.mjs` prüft Vorwarnung, sichere Notizpositionen, Sieg, Scheitern und Neustart.
- `concepts`: Konzept, Original-Sprüche, Bildentwürfe und Generierungsprotokolle.

## Umfang dieses Prototyps

Kapitel 1 ist eine vollständige Arena mit Abschluss. Die Kanalreise, weitere Außenwelten, Waltrop als begehbarer Ort und echte mehrteilige Laufanimationen sind noch nicht implementiert. Figuren bewegen sich mit leichter Schrittbewegung aus Einzel-Sprites. Der Hof ist frei gestaltet, keine vermessene Ortsrekonstruktion. Audio besteht aus synthetischen Spielsignalen und ist standardmäßig aus.

## Bild- und Schriftquellen

Pixelgrafiken mit der eingebauten Bildgenerierung anhand des bereitgestellten Referenzfotos erzeugt. Prompts unter `concepts/PROMPTS.md` und `concepts/asset-prompts.md`. Das Originalfoto wird nicht veröffentlicht. Pixelify Sans: Stefie Justprince, SIL Open Font License; Lizenz in `public/assets/Pixelify-OFL.txt`. Marken- und Produktnamen gehören ihren jeweiligen Inhabern.

Die Folienprobe besitzt eine ruhigere Korrekturfassung (`0.2.0-preview.2`): kürzere aktive Folien, längere Pausen, halber Geduldsverlust, liegen bleibende Notizen und kompaktes HUD. Details und nächste Bewertung in ROADMAP.md; Herne-Hauptspiel unverändert.
