# Projekt-Arbeitsweise

Diese Regeln setzen den Nutzerwunsch vom 16.10.2026 nach gemeinsamer, zielgerichteter Spieleentwicklung um. Neuere Nutzerentscheidungen haben Vorrang.

## Vor Änderungen

- PRODUCT.md enthält bestätigte Produktfakten, DESIGN.md das bestätigte Erscheinungsbild.
- ROADMAP.md enthält aktuellen Stand, vorgeschlagenen 1.0-Umfang, Meilensteine und Abschlusskriterien. Vorschläge sind keine beschlossenen Anforderungen.
- IDEEN.md enthält Vorschläge beider Seiten und deren Status. Wiederaufnahme nach einer Pause: zuerst „Aktueller Stand“ und „Nächster Arbeitsschritt“ in ROADMAP.md lesen, dann Git-Status prüfen.
- Keine neue Produkt-, Stil- oder Hosting-Runde zu bereits entschiedenen Punkten starten.

## Umsetzung

- Pro Arbeitsabschnitt ein klarer spielbarer Schwerpunkt. Umfang vorab knapp benennen; Routinekorrekturen innerhalb dieses Schwerpunkts selbstständig erledigen.
- Eigene Ideen sind ausdrücklich erwünscht. Pro Etappe höchstens ein bis zwei größere Vorschläge entwickeln, ihren Nutzen erklären und in IDEEN.md aufnehmen.
- Kleine reversible Verbesserungen innerhalb des vereinbarten Ziels dürfen direkt umgesetzt werden. Neue Welten, zusätzliche spielbare Figuren, Änderungen der Kernschleife oder umfangreiche Systeme zuerst als Vorschlag behandeln. Ein Test einer Idee ist keine Freigabe für deren vollständigen Ausbau.
- Ungewisse Mechaniken zuerst mit vorhandenem Material in einer kleinen spielbaren Probe prüfen. Erst nach positivem Ergebnis Produktionsgrafiken, mehrere Varianten und umfangreiche Inhalte anfertigen.
- Jedes Experiment erhält eine Frage, einen kleinen Umfang, einen Prüfweg und eine Abbruchgrenze. Nach einer begrenzten Umsetzungsrunde und einer Korrekturrunde Ergebnis vorlegen; nicht stillschweigend weiter ausbauen. Richtwert für die Planung: 30–60 Minuten aktiver Arbeit bis zum ersten bewertbaren Zwischenstand; keine Garantie für externe Laufzeiten.
- Neue Ideen verdrängen laufende Arbeit nicht automatisch. Gemeinsam entscheiden: jetzt ersetzen, später einplanen oder parken. Keine verworfenen Dateien und alten Pläne ungeprüft löschen.
- Keine ungefragte Neuimplementierung in einer anderen Engine. Technische Umstellungen nur zur Lösung eines belegten Problems.

## Inhalt und Darstellung

- de-DE: richtige Umlaute und ß, bei Großschreibung bevorzugt ẞ. Kein pauschaler Austausch von ss. Namen und Originalzitate als Quellen erhalten; veröffentlichte Adaptionen separat kennzeichnen.
- Dennis bleibt freundlich und kompetent. Kunden und Kollegen sind liebevoll überzeichnet. Ein Boss braucht erkennbare Eigenarten, Vorankündigung, eine verständliche Aufgabe und einen zufriedenstellenden Abschluss.
- Die Nutzung ist ein privates Hobbyprojekt; der öffentliche Link wurde ausdrücklich bestätigt. PC und iPhone sind gleich wichtig. GitHub Pages und das Repository bleiben öffentlich. Native iPhone-App nur als separaten Arbeitspunkt betrachten; PLATTFORMEN.md beachten. Konkrete Geräte-/iOS-Basis noch offen, keine Hardwaretests behaupten, die nicht stattgefunden haben.
- Neue rohe Figureninterviews und interne Geschichten unter private/ festhalten (nicht im öffentlichen Git). Für das Spiel ausgearbeitete Texte bewusst aus diesen Notizen übernehmen. Bereits bestätigte öffentliche Spielinhalte dürfen veröffentlicht werden.

## Prüfung und Abschluss

- Passende bestehende Tests und Syntaxprüfung ausführen. Keine Tests schreiben, die nur eine kleine Textänderung nachbauen.
- Gameplay-Änderungen zusätzlich im Browser spielen. Den betroffenen Weg bis Ende prüfen; bei bossbezogenen Mechaniken auch Sieg, Scheitern und Neustart. Nicht aus bestandenen Logiktests auf einen manuellen vollständigen Durchlauf schließen.
- Für Funktionsfehler, Spielgefühl und Darstellung getrennt festhalten, was geprüft wurde. Grenzen ehrlich angeben.
- IDEEN.md und ROADMAP.md bei Entscheidungen aktualisieren; bestätigte dauerhafte Änderungen in PRODUCT.md übernehmen. Entscheidungen einmal festhalten und auf die Quelle verweisen, statt widersprüchliche Listen zu pflegen.
- GitHub Pages wird aus main veröffentlicht. Experimente auf einem Entwicklungszweig halten; main bleibt die spielbare Fassung. Erst integrierte, passend geprüfte Änderungen nach main übernehmen. Bereits autorisierte Korrekturen dürfen nach den Checks veröffentlicht werden.
- Abschlussmeldung: spielbarer Link, was sich geändert hat, wie es geprüft wurde, offene Grenzen und der nächste sinnvolle Schritt.
