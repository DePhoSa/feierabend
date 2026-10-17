# Ideen, Figuren und Entscheidungen

Stand: 16. Oktober 2026. Gemeinsamer Vorrat für Nutzerideen und Entwicklungsvorschläge. Der aktuelle Arbeitsauftrag steht in ROADMAP.md. Eine Idee in dieser Liste ist noch kein Auftrag, sie vollständig umzusetzen.

## Status

**Idee → geklärt → für eine Etappe eingeplant → kleine Spielprobe → behalten / ändern / parken → fertig.**

Pro Eintrag erfassen wir Herkunft, erhofften Nutzen, kleinsten sinnvollen Test und Ergebnis. Warum eine Idee geparkt wurde, bleibt sichtbar; so führen wir dieselbe Diskussion nicht mehrfach.

## Erste Einträge

| ID | Idee / Herkunft | Nutzen / kleinster Test | Stand |
| --- | --- | --- | --- |
| I-001 | Geschäftsleiter als liebevoll ironische Bosse. **Nutzeridee.** | Erste 45-Sekunden-Probe: gestrichelte Vorwarnung, aktive Folie kostet Geduld, drei grüne Notizen klären Punkte. Vorhandene blaue Figur als Platzhalter. | Nutzer: Idee witzig und passend, aber zu hektisch, Folien zu lange aktiv, Geduldsverlust zu schnell und Handybild zu voll. Eine begrenzte Korrekturrunde: längere Vorwarnung/Pausen, kürzere kleinere Folie, halber Geduldsverlust, dauerhafte Notizen und kompaktes Probe-HUD. Erneute Bewertung: freie Sicht hilft, die Probe ist jetzt zu einfach. Nächster ausdrücklich angeregter Versuch: I-012; weiterhin keine vollständige Bossproduktion. |
| I-002 | Sprüche passend zum Ereignis statt hauptsächlich zufällig. **Entwicklungsvorschlag auf Grundlage der gelieferten Sprüche.** | Die Pointe trifft: „Seite 2“ zur Preisliste, „Containerschiff“ zur Lieferzeit. Keine permanente Anzeige im Spiel mehr, sondern gezielt bei Upgrades und Phasenwechseln. | Umgesetzt in 0.2.0-preview.6: Dennis kommentiert Ausrüstungswahl und Level-Ups direkt im Dialog bzw. per kurzem Toast. |
| I-003 | „Nur ganz kurz“-Kunden kündigen eine Nachfrage sichtbar an. **Entwicklungsvorschlag.** | Eine erkennbare Entscheidung statt nur mehr Geschwindigkeit oder Beratungsbedarf. Ein Kundentyp mit Vorwarnung; testen, ob man sein Verhalten ohne Erklärung versteht. | Vorschlag für 0.2 |
| I-004 | Tor-Floß am Kanal. **Vorheriger Entwicklungsvorschlag, vom Nutzer grundsätzlich positiv aufgenommen.** | Verbindet Originalspruch, Produkt und Reise. Erst in einer einfachen Probe klären, ob Steuern und Helfen auf dem Floß Spaß machen. | Kandidat für Kapitel 2, kein fertiges Konzept |
| I-005 | „Der Terminverdichter“ als fiktiver Chef-Begegnungsplatzhalter. **Entwicklungsvorschlag, kein reales Vorbild.** | Kündigt immer neue kurze Besprechungen an; sichere Wege müssen rechtzeitig erkannt werden. Nur als Mechanikskizze, bis ein echtes Figurenbriefing vorliegt. | Idee; nicht zur Umsetzung freigegeben |
| I-006 | IHAAS-Erleuchtung: die sichtbare Glühbirne zeigt die Lösung. **Vorheriger Entwicklungsvorschlag zum Originalspruch.** | Verständliche Pointe und gezielte Aufgabe. Test mit einer markierten Lösung statt unlesbarer Sucherei. | Idee für spätere Etappe |
| I-007 | Fähigkeitskombination „Seite 2 + Erfahrung“ erklärt den Preis gleich mit. **Entwicklungsvorschlag.** | Zwei Ausrüstungsentscheidungen verändern ein Muster sichtbar; erst prüfen, ob die vorhandenen Einzelwerkzeuge bereits unterscheidbar sind. | Parkplatz nach 0.2 |
| I-008 | Waltrop wird beim Ankommen Schritt für Schritt warm und freundlich. **Nutzerwelt + Entwicklungsvorschlag für die Umsetzung.** | Die Heimreise erhält eine fühlbare Belohnung. Erst ein kurzer spielbarer Übergang; keine lange Filmsequenz vorab. | Kandidat für Kapitel 3 |
| I-009 | Auf dem iPhone als App starten. **Nutzerwunsch; Web-App als Entwicklungsempfehlung.** | Home-Bildschirm-Symbol und eigener App-Modus ohne Apple-Entwicklergebühr; zuerst Installation und gespeicherten Fortschritt auf echtem iPhone prüfen. Offline und Updates als eigene Aufgabe. | Plattformvergleich in PLATTFORMEN.md; noch nicht umgesetzt |
| I-010 | KI-Idee hilft beim langen Chefgespräch. **Entwicklungsvorschlag zum Nutzerbriefing.** | KI-Interesse als Unterstützung für Dennis, rein geskriptet und ohne externe KI-Kosten. Erst nach Test des einfachen Gesprächsmusters ausarbeiten. | Idee; keine zusätzliche erste Probe |

| I-011 | Mehr freie Spielfläche auf Handys und Desktop. **Nutzerfeedback; kompakte Umsetzung durch Entwicklung.** | In der Folienprobe nur Geduld, Zeit/Notizen, Pause und ein aktueller Hinweis. Hilfe, Ton und Navigation in die Pause. Erst bewerten, danach eine passende Übernahme ins Herne-Hauptspiel planen. | Nutzer bestätigt freiere Sicht. Kompaktes HUD jetzt vollständig ins Herne-Hauptspiel übernommen (0.2.0-preview.5): Topbar im Spiel ausgeblendet (volle 100svh Spielfläche), Tonwahl, Spielanleitung, Neustart und Menürückkehr ins Pausenmenü verlagert. Technisch geprüft; Live-Test beim Nutzer. |

| I-012 | Jörg geht, hält an, erzählt und hinterlässt eine Notiz; Tempo in drei Stufen. **Aktuelle Nutzeridee.** | Frage: Erzeugt Folgen statt Dauerbeschuss angenehmes Repositionieren? Ein 45s-Versuch mit bestehendem Sprite, einer Route, versetzter angekündigter Folie, Notiz erst nach der Geschichte am alten Standort. Pausen am Erzählplatz 2,4/1,8/1,2s. Keine neue Grafik oder weiteren Bossphasen. | Nutzer: „ja besser“, mit zusätzlichem Wunsch nach Geduldsverlust bei Berührung/Nähe. Muster vorläufig behalten; Distanzregel ergänzt (sichtbarer Radius 62, 0,5s Reaktion, danach 10 Geduld/s). 19 Logiktests bestanden; Live-Test der Distanzregel beim Nutzer. Weitere Bossproduktion zurückgestellt; nächster Schwerpunkt normale Herne-Runde. |

| I-013 | Zahlen-Lesbarkeit (Ziffern in Pixelify Sans unleserlich). **Nutzerhinweis mit Screenshot.** | Pixelify Sans rendert Ziffern wie '2' oder '5' klobig/verwaschen. Ziffern für Schichtuhr, Geduld, XP und Canvas-Zahlen auf gestochen scharfen Monospace-Schriftsatz umstellen. | Behoben in 0.2.0-preview.6 durch Monospace-Stack für alle Ziffern. |

## Ideenkarte zum Ausfüllen

Du kannst frei erzählen; ich übertrage das anschließend in diese Form. Du musst sie nicht selbst ausfüllen.

```text
ID / kurzer Name:
Von wem stammt die Idee?
Situation oder Originalgeschichte:
Was soll der Spieler fühlen oder entscheiden?
Was ist die kleinste spielbare Probe?
Woran erkennen wir, ob sie funktioniert?
Geplanter Umfang / Abbruchgrenze:
Ergebnis und Entscheidung:
Zugeordnete Etappe:
```

## Figur- und Bosskarte

Originalnotizen zu internen Geschichten kommen zunächst lokal nach private/FIGUREN.md, das Git ignoriert. In diese gemeinsame öffentliche Liste gehören die daraus ausgearbeiteten, vorgesehenen Spielinhalte.

```text
Name oder gewünschter Spielalias:
Rolle und Verhältnis zu Dennis:
So erkennt man die Person sofort (Kleidung, Haltung, Gegenstand, Ritual):
Typische Alltagssituation / Anekdote:
Ein bis drei typische Sätze:
Was ist sympathisch an ihr?
Welche Übertreibung trifft den Humor, was wäre unpassend?
Vorgeschlagene Spielsituation (erst durch die Entwicklung ausarbeiten):
Vorwarnung → Aufgabe → Reaktion → Pointe beim Abschluss:
Erster kleiner Test und Entscheidung:
```

Ein Boss muss kein Bösewicht sein. Er kann eine Feierabendfreigabe prüfen, einen spontanen Sonderauftrag bringen oder eine Betriebsroutine absurd übersteigern. Er braucht eine eigene verständliche Spielaufgabe; mehr Beratungsbedarf allein macht ihn noch nicht zu einer interessanten Begegnung.

## Entscheidungsprotokoll

| Datum | Entscheidung | Begründung / Quelle |
| --- | --- | --- |
| 16.10.2026 | Retro-Pixelwelt aus Bild 3 | Nutzerwahl im Chat |
| 16.10.2026 | Erste spielbare Herne-Arena veröffentlichen | Nutzerauftrag; GitHub Pages eingerichtet |
| 16.10.2026 | Neue Ideen gemeinsam über einen Fahrplan entwickeln und vor großem Ausbau prüfen | Aktueller Nutzerauftrag; Arbeitsweise in AGENTS.md, vorgeschlagene Etappen in ROADMAP.md |
| 16.10.2026 | Öffentlicher Link bleibt für das private Hobbyspiel okay | Nutzerantwort; keine Zugriffsumstellung nötig |
| 16.10.2026 | PC und Handy gleich wichtig | Ergänzte Nutzerantwort: Kollegen mit iPhones, Nutzer selbst mit Android; beide mobilen Wege berücksichtigen |
| 16.10.2026 | Erstes Bossbriefing und Foto sichern; daraus einen prüfbaren Vorschlag erstellen | Nutzerinhalt lokal festgehalten; noch keine vollständige Bossproduktion |
| 16.10.2026 | Älteres iPhone als Zielklasse; zunächst PC und Nutzer-Android für echte Tests verfügbar | Kein eigenes iPhone-Testgerät. Altersangabe ungefähr sechs Jahre, konkretes Modell/iOS offen. Echte iPhone-Spielrunde vor 1.0 einplanen. |
| 16.10.2026 | Fahrplan als Arbeitsrahmen angenommen; erster kleiner Folientest | Nutzer: „machen wir weiter, die roadmap klingt super“. Eine Mechanikprobe mit vorhandenem Material; Produktionsgrafik folgt erst nach Bewertung. |
| 16.10.2026 | Folienidee gezielt beruhigen und mobiles Probe-HUD reduzieren | Nutzerfeedback: grundsätzlich super/witzig, aber hektisch, lange aktive Fläche, schneller Schaden und zu volle Handyansicht. Eine Korrekturfassung statt weiterer Bossphasen. |
| 16.10.2026 | Abschließende Live-Tests durch den Nutzer | Nutzer möchte Tokenkosten senken. Entwicklung prüft Quellcode, Syntax und vorhandene Logiktests; keine weiteren eigenständigen Browserdurchläufe. Kurze Testliste zur Übergabe; Regel in AGENTS.md. |

| 16.10.2026 | Neue Geh-und-Erzähl-Probe statt bloßer weiterer Schadenssteigerung | Nutzer findet den freien Bildschirm besser, die ruhige Probe jedoch zu einfach und schlägt Bewegung, Erzählstopps, nachfolgende Notizen und stufenweise kürzere Pausen vor. Kleiner neuer Versuch I-012, keine finale Bossfreigabe. |

| 16.10.2026 | Geh-und-Erzähl-Muster vorläufig beibehalten; Distanzregel ergänzen, dann normale Herne-Runde weiterentwickeln | Nutzer: „ja besser“, Geduldsverlust bei Nähe/Berührung gewünscht, „ansonsten können wir weiter machen“. Keine finale Balance- oder 1.0-Abnahme. |
| 17.10.2026 | Neues Repository eingerichtet; altes Depot unangetastet | Nutzerentscheidung: `https://github.com/DePhoSa/feierabend.git` als neues Remote `origin` verknüpft; altes Repo geschützt. |
| 17.10.2026 | Kompaktes HUD aus der Probe auf die normale Herne-Runde übertragen | Version 0.2.0-preview.5: Topbar im Spiel ausgeblendet (volle 100svh Spielfläche), Tonwahl, Steuerungshinweise, Neustart und Menürückkehr ins Pausenmenü verlagert. |
| 17.10.2026 | Zahlenlesbarkeit & Sprüche nur bei Updates | Version 0.2.0-preview.6: Ziffern auf Monospace-Fontstack umgestellt (Bugfix unleserliche Zahlen); permanente Zitatebox entfernt für maximale Spielfläche; Dennis-Sprüche passend in Level-Up-Dialog und bei Ausrüstungswahl integriert (I-002, I-013); Tacker & Bumerang skalieren mit Mehrfachgeschossen. |
| 17.10.2026 | Neue Schriftart 'Chakra Petch / Arcade', Mitten-Spruch-Spam entfernt & Versionsanzeige synchronisiert | Version 0.2.0-preview.7: Klobige Pixelify Sans durch die saubere, hochlesbare Indie-Arcade-Schrift 'Chakra Petch' ersetzt (keine defekten Ligaturen wie 'KonAgurator' mehr); Mitten-Spruch-Spam im laufenden Spiel komplett entfernt; Version im Hauptmenü (`.prototype`) synchronisiert und Regel in AGENTS.md verankert. |
| 17.10.2026 | Schichtziel-Banner sanft ausblenden; Meilenstein 0.2 erfolgreich abgenommen | Version 0.2.0-preview.8: Schichtziel-Banner („Schlossstraße 30 …“) blendet sich nach 5 Sekunden sanft aus; erscheint nur kurz bei Phasenwechseln neu. Meilenstein 0.2 durch den Nutzer bestätigt. Start von Meilenstein 0.3. |
| 17.10.2026 | Jörg-Bossbegegnung in Herne-Hauptschicht integriert | Version 0.3.0-preview.1: Jörg erscheint bei 80 % Schichtfortschritt („Nur ganz kurz, Dennis …“). Bewährte Geh-und-Erzähl-Mechanik mit 62-px-Distanzkreis, PowerPoint-Folienwarnung/Schaden, Notizen-Sammeln (3 Themen klären), Off-Screen-Indikatoren und Boss-Panel in die Hauptrunde integriert. 21/21 Tests bestanden. |
