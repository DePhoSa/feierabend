# Prüfprotokoll · 16.10.2026

## Simulation

Sieben automatisierte Tests bestanden (Node.js Test Runner): Pause friert Simulation ein; normalisierte diagonale Bewegung und Hofgrenzen; genau einmalige Vergabe von Kunden-Erfahrung; Aufstiegsunterbrechung und gültige Auswahl; einmaliger Abschlusskunde und bedingter Ausgang; Geduldsende; längere deterministische Simulation ohne ungültige Werte oder unbeschränkte Gegner-/Projektilanzahl.

JavaScript-Syntax von core.js und game.js geprüft.

## Browser

Lokale Vorschau im Codex-Browser. Desktop-Start bei 1440×900, schmale Ansicht bei 390×844 sowie ursprüngliche Fensterbreite geprüft. In einer echten 90-Sekunden-Runde: Story-Start, automatische Beratung, WASD-Bewegung mit gehaltener Taste, Erfahrung einsammeln, Level 2 und 3, Auswahl der Preisliste und Erfahrung, Pause und Rückkehr zum Menü. Mobile Steuerkreis-Eingabe per Pointer-Drag geprüft. Kein Konsolenfehler in der beobachteten Runde. Siegbedingung und Niederlage wurden automatisiert in der Simulation geprüft; ein vollständiger manueller Sieg ist noch kein Bestandteil dieses Prüfprotokolls.

Die erste visuelle Prüfung zeigte sehr kleine Nebenbeschriftungen. Funktionale Schrift wurde auf mindestens 11px angehoben, der Touch-Kreis auch unter 700px eingeblendet, eine unnötige Überschrift-Vorzeile entfernt und eine Wortverklebung im mobilen Dossier behoben.

## Unabhängige Prüfung

Review-Ergebnis: **ship als erster spielbarer Arena-Prototyp**. Quellcode, Desktop-/Mobil-Menü, mobile Spielansicht und Aufstiegsansichten geprüft; keine materiellen Blocker gefunden. Ein fehlerhafter Screenshot unmittelbar nach Größenwechsel wurde ausdrücklich verworfen. Kein Nachweis für vollständige Kampagne, pixelgenaue UI-Reproduktion des Konzeptbilds oder reale Ortsrekonstruktion.

## Bekannte Grenzen

- Touch-Steuerung im Browser geprüft, noch kein Test auf echter iOS-/Android-Hardware.
- Sehr schmale 320px-Geräte und kurzes Handy-Querformat sind noch nicht visuell geprüft.
- Kein Screenreader-komplett bedienbares Actionspiel; Menüs sind semantisch, per Tastatur und mit Fokusführung bedienbar.
- Spielbalance benötigt Feedback von echten Spielern, insbesondere über die volle Sechs-Minuten-Schicht.
- Einzel-Sprites mit Schrittbewegung statt vollständiger mehrteiliger Animationszyklen.

## Aktualisierte Geräteplanung

Nutzer besitzt ein Android-Handy, kein eigenes iPhone-Testgerät. Kollegen-iPhone ungefähr sechs Jahre alt, Modell und iOS noch unbekannt. Nächste echte Rückmeldungen auf PC und Nutzer-Android einholen; iPhone-Leistung erst nach einer Spielrunde auf dem tatsächlichen Gerät bewerten. Touch-/Layoutsimulation und etwaige automatisierte WebKit-Tests getrennt vom Hardwaretest protokollieren. Kein zusätzlicher Gerätetest wurde durch diese Planaktualisierung durchgeführt.

## Erste 0.2-Probe: Jörgs Folien

14 Simulationstests bestanden: sieben bestehende Tests plus sieben neue Prüfungen für Start/Pause, schadensfreie Vorwarnung vor aktiver Folie, rechtzeitig erreichbare sichere Notizen an allen Hofgrenzen, vollständigen Durchlauf mit normaler Bewegung, fehlende Gesprächspunkte beim Zeitende, einmalige Notizvergabe/frischen Neustart und fraktionale Touch-Eingabe. Syntaxprüfung der neuen Module bestanden.

Browserdurchlauf bei 1440×900: Probe tatsächlich mit normaler Tastaturbedienung und Pause-Kontrollpunkten bis zum Ende gespielt. Ergebnis: drei von drei Notizen, sechs vermiedene Folien, 100 Prozent Geduld. Keine simulierte Zustandsmanipulation oder vorgezogene Zeit. Standstill-Versuch scheitert an Geduld; Neustart und Pause/Fortsetzen geprüft.

Bei 390×844: gedrückter Pointer auf dem Steuerkreis bewegt Dennis und sammelt die erste Notiz; Warnzustand, Timer, Rückmeldung, Pause und Ergebnisansicht geprüft. Kein horizontaler Überlauf im geprüften Zustand. Das ist eine schmale Browseransicht, kein Android-/iPhone-Hardwaretest. Keine Browser-Konsolenfehler in den beobachteten Durchläufen.

Gefundene Canvas-Größenübernahme korrigiert; funktionale Schrift nicht unter 11px. Mechanischer Designcheck einmal ausgeführt; überwiegend geerbte Farb-/Schrift-Rampenabweichungen als Hinweise, kein Anlass zum Umbau der bestehenden Identität. Menschliche Spielspaßbewertung und Gerätefeedback stehen aus. Version 0.2 ist damit noch nicht vollständig abgenommen.

Unabhängige Abschlussprüfung: **ship als begrenzte Spielprobe**, keine materiellen Blocker in Quelle und gelieferten Screenshots. In der Welt gerenderte Folientitel können teilweise von Figuren oder dem oberen HUD überlagert werden; als kosmetisch bewertet, weil separate Vorwarnung und Flächenränder verständlich bleiben. Design-Dokumentationsprüfung bestätigt die Übernahme des vorhandenen Systems; keine neuen globalen Tokens oder Komponenten nötig. Rückweg zum Hauptspiel und Einstieg über den neuen Menülink bei 390px ebenfalls geprüft.

## Ruhigere Folienprobe · 0.2.0-preview.2

Nutzerfeedback: grundsätzlich witzige Idee, aber hektisch, Folie zu lange aktiv, Geduldsverlust zu schnell, mobile Ansicht zu voll. Eine Korrekturrunde: Vorwarnung 2,4→3,2s; aktiv 3→1,2s; Abstand 6,8→9s; Geduldsverlust 24→12/s; Fläche 440×190→320×140. Noch offene Notizen bleiben unverändert liegen und werden von der folgenden Folie freigehalten. Keine zusätzlichen Bossphasen.

Funktionsprüfung vor der neuen Testregel: echter Tastaturdurchlauf bis Sieg, 3/3 Notizen, 76 Prozent Geduld, drei vollständig vermiedene Folien. Zwei Folien nicht vollständig vermieden; der letzte Aktivabschnitt wird vom 45-Sekunden-Ende abgeschnitten. Ein weiterer vollständiger Durchlauf ohne Notizen scheitert an fehlenden Gesprächspunkten. Pause, Fortsetzen, Tonwahl, Neustart nach Scheitern und gedrückter Steuerkreis mit Notizaufnahme geprüft. Keine Konsolenwarnungen/-fehler in den beobachteten Abläufen.

Darstellung vor der neuen Testregel: 1440×900, 390×844, 320×568 und 844×390 im Browser angesehen, kein seitlicher Überlauf. Statusleiste 64px im Hochformat, etwa 53px im kurzen Querformat; eine aktuelle Hinweiszeile statt Masthead, permanenter Legende, doppeltem Zieltext und Zitatkasten. Hilfe, Ton und Navigation bleiben über Pause erreichbar. Detector einmal ausgeführt: Hinweise zu geerbten Farben/Schriftgrößen und vermeintlich randnahen Texten. Letzteres per berechnetem Stil widerlegt: Geduld/Uhr haben bewusst weder Rand noch Hintergrund; Außenabstand liegt auf der gemeinsamen Statusleiste. Keine erneute Scan-Schleife.

Spielgefühl: Nur der Nutzer kann beurteilen, ob die Korrektur den gewünschten Rhythmus trifft. Reale Android-/iPhone-Hardware weiterhin nicht durch die Entwicklung geprüft.

Neue verbindliche Testzuständigkeit: Der Nutzer übernimmt ab jetzt die abschließenden Live-/Browser- und Spielgefühltests, um Tokenkosten zu sparen. Die oben protokollierten Durchläufe fanden vor seiner Entscheidung statt; danach keine weiteren Live-Tests. Entwicklung beschränkt sich auf Quellcodeanalyse, Syntax und passende vorhandene Logiktests, sofern nicht ausdrücklich anders beauftragt.

Kurze Testliste für die Übergabe: (1) Notiz während einer aktiven Folie kurz liegen lassen und danach holen; angenehmer Rhythmus? (2) Auf dem Handy freie Sicht, Statusleiste und Steuerkreis beurteilen. (3) Runde beenden, Pause/Ton und Neustart ausprobieren. Weitere Bossproduktion erst nach Bewertung.
`nAbschließende technische Prüfung: 17 Logiktests, JavaScript-Syntax aller vier Module und git diff --check bestanden. Darunter ein vollständiger vorsichtiger Simulationsdurchlauf, der Notizen ausschließlich in Folienpausen sammelt.
