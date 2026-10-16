# Feierabend ist nicht lagermäßig

Arbeitstitel. Stand: 16. Oktober 2026. Konzeptphase; ausdrücklich noch keine Implementierung, bis der Nutzer einen Grafikstil ausgewählt hat.

## Drei Grafikrichtungen

1. **Düsteres Bilderbuch** — `01-duesteres-bilderbuch.png`. Malerische 2D-Illustration, nasse Pflastersteine, Nebel, blaue Nacht und warme orange Lampen. Dennis wirkt wie ein gemütlicher Held in einer übertrieben dramatischen Welt. Empfehlung für den Kontrast Herne/Waltrop. Das Bild ist eine Titelbild-Stimmung, keine Spielansicht.
2. **Ruhrpott-Comic** — `02-ruhrpott-comic.png`. Kräftige Konturen, flächige Schatten, expressive Figuren und Papier-Action. Besonders geeignet für animierte Story-Panels und Dennis' Sprechblasen. Das Bild ist eine Titelbild-Stimmung, keine Spielansicht.
3. **Feierabend in 32 Bit** — `03-retro-pixel.png`. Sichtbare Pixel, stimmungsvolles Licht und kompakte, sympathische Figuren. Das Bild ist eine mögliche schräg von oben betrachtete Arena. Noch kein Gameplay-Screenshot und kein fertiges Sprite-Set.

In allen Varianten: Gameplay aus schräger Vogelperspektive, gut erkennbare Kundentypen und klar abgegrenzte Hilfseffekte. Die Bilder zeigen erfundene Industriekulissen und keine originalgetreue Rekonstruktion von Schlossstraße 30.

## Titelideen

- Feierabend ist nicht lagermäßig
- Ressemann regelt.
- Nur noch eine kurze Frage
- Dennis gegen den Beratungsstau
- Hör auf, Mann! Ich hab Feierabend.
- Tor zum Feierabend
- Beschlagfertig!
- Herne Survivors: Auf nach Waltrop
- Der Herr der Tore
- Das Haus der intransparenten Fragen
- ThermoSafe & Feierabend
- Büroklammern bis Waltrop

Favorit: **Feierabend ist nicht lagermäßig**, Untertitel **Dennis regelt den Rest.**

## Geplanter spielbarer Prototyp

Ein erster kompletter Durchlauf von etwa 6–8 Minuten. Vorläufige Designwerte, noch nicht getestet.

1. Animierte kurze Einleitung: 16:59 Uhr, Dennis packt seine Sachen; ein Kunde erscheint mit einer angeblich kurzen Frage.
2. Auswahlkarte für Dennis: grüner Hoodie, leicht pummelig, grauer Bart, souveränes Grinsen. Anfangs nur Dennis spielbar; keine funktionslosen weiteren Charaktere.
3. Bewegung mit WASD/Pfeiltasten, geplante Touch-Steuerung. Beratung erfolgt automatisch in Reichweite.
4. Kunden besitzen einen Beratungsbedarf statt Lebenspunkten. Gelöste Anliegen erzeugen ein Danke, eine zufriedene Abreise und Erfahrungspunkte.
5. Aufsteigen pausiert die Runde für die Wahl einer von drei Verbesserungen.
6. Dennis' Geduld sinkt, wenn zu viele Fragen gleichzeitig bei ihm ankommen. Bei null: Kaffeepause und verständlicher Neustart, kein Tod.
7. Abschlusskunde und geöffneter Ausgang; als Belohnung eine animierte Vorschau auf Waltrop.
8. Pause, Tonsteuerung, Neustart und lokale Bestleistung. Keine globale Rangliste im ersten Prototyp.

## Erstes Level

**Schlossstraße 30 – Nur noch eine kurze Frage.** Frei gestalteter Außenhof der Hörmann-Niederlassung Herne, mit Lagerzufahrt, Ausstellungs-Toren, Paletten, Laternen und Lieferzone. Der Startort ist real; Hindernisse und Grundriss sind erfunden. Keine Google-Maps-Kacheln und keine behaupteten exakten Weglängen im Prototyp.

Wellen: erste Maßfragen → Ersatzteil-Ansturm → Lieferzeit-Diskussion → Konfigurator-Verwirrung → Abschlusskunde mit fünf unklaren Fotos.

Spätere Kapitel: Kanalpassage mit LPU-Floß, Schleusenpark/Henrichenburg als regionale Kulisse, schließlich Waltrop als heller Wald mit warmen Fenstern. Diese Dramaturgie ist keine geprüfte Navigationsroute. Der Dortmund-Ems-Kanal und der Schleusenpark sind belegte Waltroper Motive.

## Hilfsmittel und Weiterentwicklungen

| Fähigkeit | Spieleffekt | Passender Spruch |
| --- | --- | --- |
| Angebots-Tacker | Versendet automatisch helfende Angebotsblätter zum nächsten Kunden | Sie bekommen das, was wir haben. |
| Seite-2-Bumerang | Preislisten-Blatt erreicht mehrere Kunden und kehrt zurück | In Euro, nicht in Dollar oder Wong. |
| ThermoSafe-Ruhezone | Schützt Dennis' Geduld und schafft Raum für Beratung | Ich hör nur zu … |
| LPU-42-Lamellenwelle | Breite Welle von Produktwissen durch eine Kundengruppe | Das reicht sogar für Dirk Nowitzki. |
| N80/F80-Pendelschwung | Schwingendes Demonstrationstor sortiert die Warteschlange | Und da ist der Fehler … |
| IHAAS-Erleuchtung | Markiert unklare Anliegen und löst sie mit einem Lichtimpuls | Ist die selbe Glühbirne. Der ist da! |
| 25 Jahre Beschlagserfahrung | Passiv mehr Beratungswirkung und größere Sammelreichweite | Wenn ich das wüsste, wäre ich Arzt geworden. |
| Containerschiff-Modus | Langsame, große Beratungswelle für die Lieferzeit-Gruppe | Hörmann ist ein Containerschiff und kein Rennboot. |

Alle Effekte sind bewusst erfundene Spielmechanik, keine Produkteigenschaften. Der Prototyp soll zunächst vier aktive Hilfsmittel enthalten; weitere sind Ausbauideen.

Sprüche erscheinen kontextbezogen und mit Abstand, damit sie verständlich bleiben. Wortwitz wird auf die Situation gerichtet. Kunden bleiben sympathische Menschen. Schützenverein als Präzisionsbonus denkbar; Alkohol ist kein notwendiges Kampfsystem.

## Hosting

Bestätigter Zielhoster: GitHub Pages. Ein statisches Spiel mit HTML, CSS, JavaScript und lokalen Assets benötigt kein Backend. Bei GitHub Free wird dafür ein öffentliches Repository benötigt. Projektseiten laufen üblicherweise unter `https://<konto>.github.io/<repository>/`; Asset-Pfade werden deshalb relativ angelegt. Konkreter Kontoname und Repositoryname stehen noch nicht fest.

Nach Stilwahl: Projekt bauen und lokal prüfen, Repository anlegen, Dateien pushen, GitHub Pages konfigurieren und den veröffentlichten Aufruf prüfen. Kein Repository und keine Veröffentlichung in dieser Konzeptphase. Speicherstände zunächst nur im Browser auf demselben Gerät. Ranglisten und geräteübergreifende Spielstände würden später einen zusätzlichen Dienst erfordern.

## Quellen

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages Bereitstellung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Hörmann LPU 42: https://www.hoermann.de/private-bauherren-und-modernisierer/garagentore/garagen-sektionaltore/
- Hörmann Haustüren/ThermoSafe: https://www.hoermann.de/private-bauherren-und-modernisierer/tueren/haustueren/
- Hörmann N80/F80 Bezeichnungen im Garantieheft: https://www.hoermann.de/fileadmin/_country/hoermann.com/documentations/warranty_terms/Garantieheft_fuer_Garagentore.pdf
- Waltroper Landschaft und Kanäle: https://www.waltrop.de/kultur-freizeit/draussen-aktiv
- Schleusenpark: https://www.waltrop.de/ueber-waltrop/schiffshebewerke
