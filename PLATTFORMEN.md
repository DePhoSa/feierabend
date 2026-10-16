# PC, iPhone und mögliche App

Stand: 16. Oktober 2026. Nutzer bestätigt: privates Hobby, öffentlicher Link okay; PC und Handy gleich wichtig. Kollegen nutzen iPhones, Nutzer nutzt Android. Kein eigenes iPhone-Testgerät vorhanden. Ein ungefähr sechs Jahre altes iPhone soll unterstützt werden; Modell und iOS-Version sind noch unbekannt. Native iOS-App ist ein Wunsch zum Prüfen, kein beschlossener paralleler Produktionsauftrag.

## Empfehlung für dieses Projekt

Das bestehende Browser-Spiel weiterentwickeln und die **installierbare Web-App** als eigenen überschaubaren Arbeitspunkt vorsehen. Damit nutzen PC und iPhone denselben Spielstand der Software. Ein Symbol auf dem iPhone-Home-Bildschirm und ein eigener App-Modus sind möglich, ohne dass wir dem Apple Developer Program beitreten oder einen Mac kaufen müssen. Dafür fällt keine Apple-Entwicklergebühr an. Hosting und mögliche künftige externe Dienste sind davon getrennte Kostenfragen; derzeit läuft das statische Spiel auf GitHub Pages.

Das ist ein geplanter Ausbau. Der aktuelle Prototyp ist ein Browser-Spiel; ein Offline-Cache, Installationsprüfung und App-Update-Verhalten sind noch nicht implementiert oder auf einem echten iPhone getestet.

## Vergleich

| Weg | Kosten / Voraussetzungen | Nutzen und Grenzen für uns |
| --- | --- | --- |
| Browser-Link | Keine Apple-Entwicklergebühr; bestehendes Hosting und ein Browser | Sofort teilbar; unser aktueller Stand. PC und iPhone müssen trotzdem getrennt gespielt und geprüft werden. |
| Home-Bildschirm-Web-App / PWA | Kein bezahltes Apple-Entwicklerkonto oder lokaler Mac für die Webentwicklung nötig | Symbol und eigener App-Modus auf dem iPhone. Offline-Spiel erfordert zusätzliche Cache-Implementierung. App-ähnliche Bedienung und Speicher-/Update-Verhalten auf echten Geräten prüfen. |
| Native App zum eigenen Testen | Kostenloses Apple-Konto möglich; Xcode-/Apple-Buildweg und passende Hardware bzw. Buildumgebung | Apple nennt beim kostenlosen Personal Team sieben Tage Gültigkeit für Provisioning-Profile; danach neu bauen/installieren. Bis zu drei registrierte Geräte. Kein bequemer dauerhafter Verteilweg für die ganze Kollegenrunde. |
| App Store / reguläre Beta-Verteilung | Apple Developer Program: derzeit 99 USD pro Mitgliedsjahr; regionaler Preis in lokaler Währung. Apple-Build-/Signierweg und Verteilanforderungen kommen hinzu. | Eigene spätere Entscheidung, wenn uns die installierbare Web-App konkrete wichtige Funktionen nicht bietet. Keine vollständige Neuentwicklung als Voraussetzung behaupten; Wiederverwendung des Webspiels später technisch prüfen. |

Ein Teil der Entwicklung kann weiterhin unter Windows erfolgen. Eine native iOS-Binärdatei erfordert jedoch Apples Build-/Signierwerkzeuge; ein Mac oder Mac-Builddienst ist praktisch separat zu betrachten. Xcode selbst ist kein kostenpflichtiges Abonnement. Es werden keine Dienste gebucht und keine Konten eingerichtet.

## Eigener Arbeitspunkt: Web-App-Probe

Vorgeschlagener Zeitpunkt: nach der ersten stabilen Mobil-Spielprobe; unabhängig vom Bossinhalt planbar, ohne dafür ein zweites Spiel zu bauen.

1. Web-App-Metadaten und passende Symbole ergänzen; Startadresse und Projekt-Unterpfad von GitHub Pages beachten.
2. Installation in Safari über Teilen → Zum Home-Bildschirm auf einem echten iPhone prüfen. Je nach iOS-Version „Als Web-App öffnen“ nutzen.
3. Hoch-/Querformat, Displayaussparung und untere Systemleiste, Touch-Bedienung, Audiostart nach Berührung, App-Wechsel und automatische Pause prüfen.
4. Lokalen Fortschritt und den Unterschied zwischen Safari-Aufruf und installierter Web-App praktisch testen; keine automatische Geräte- oder App-Synchronisierung versprechen.
5. Offline-Spiel erst als abgegrenzte zweite Teilaufgabe: benötigte Dateien nach erstem vollständigem Laden zwischenspeichern, Offline-Neustart prüfen und eine neue Spielversion ohne veraltete Dateien übernehmen können. Cache-Fehler dürfen keine Fortschrittsdaten löschen.

**Abnahme:** Start per Symbol funktioniert; Touch und Ton sind benutzbar; Pausieren beim App-Wechsel funktioniert; Fortschritt bleibt nach einem Neustart erhalten. Offline-Fähigkeit wird erst nach erfolgreich geprüftem Offline-Start behauptet. Keine App-Store-Veröffentlichung oder dauerhafte Speicherung durch das Betriebssystem garantieren.

## Geräteprüfung für 1.0

- PC: aktuelle Versionen von Chrome und Edge, zusätzlich Firefox als Ziel für die Browserprüfung. Tastatur, Fenstergrößen und Pause prüfen.
- Android: manuelle Spieltests auf dem Handy des Nutzers, zunächst im tatsächlich verwendeten Browser. Modell, Browser und Betriebssystem sind noch nicht protokolliert. Zusätzliche Tests im Home-Bildschirm-Modus, sobald dieser umgesetzt ist.
- iPhone: Safari und Home-Bildschirm-Modus möglichst auf dem ungefähr sechs Jahre alten Gerät der Kollegenrunde. Der Nutzer hat kein eigenes iPhone-Testgerät. Modell/iOS-Version später am tatsächlichen Gerät erfassen; keine konkrete Modellreihe aus der Altersangabe ableiten und noch keine Mindestversion festlegen.
- Für alle Zielgeräte: neue und vorhandene Spielstände, eine vollständige Runde, Sieg, Scheitern, Neustart, Aufstiegswahl und Ton prüfen.
- Leistung nach Gerätewahl konkret festlegen. Arbeitsziel als Vorschlag: auf dem ältesten Ziel-iPhone mindestens 30 Bilder pro Sekunde in der dichten Spielsituation; noch nicht gemessen und keine derzeitige Zusage.
- Bis ein iPhone-Test möglich ist: Touch- und Layoutprüfungen im Browser plus echte Android-Rückmeldungen nutzen. Automatisierte Browser-/WebKit-Prüfungen bei Bedarf ergänzen; diese belegen weder iPhone-Leistung noch alle Safari-/iOS-Eigenheiten. Vor 1.0 eine kurze echte Spielrunde auf dem älteren iPhone organisieren; kein Gerätekauf für den nächsten Entwicklungsschritt nötig.

## Planung für ältere Handys

Sparsame Effekte und begrenzte gleichzeitige Spielobjekte von Anfang an berücksichtigen. Einfache Grafik-/Effektstufen bei gemessenen Engpässen als kleinen eigenen Arbeitspunkt vorsehen; nicht allein aufgrund des Gerätealters neue Systeme bauen. Rundendauer, dichte Kundensituationen, Temperaturentwicklung und Touch-Reaktion im echten Spiel testen. Die Zielklasse „etwa sechs Jahre alt“ ist noch keine pauschale Zusage für jedes damalige iPhone und jede iOS-Version.

## Apple-Quellen

Offizielle Quellen geprüft am 16.10.2026; Bedingungen vor einer späteren nativen Veröffentlichung erneut prüfen:

- Home-Bildschirm/Web-App: https://support.apple.com/de-de/guide/iphone/iph42ab2f3a7/ios
- Kostenloses Konto, Personal Team, Geräte- und Sieben-Tage-Grenzen: https://developer.apple.com/help/account/basics/about-your-developer-account
- Entwicklerprogramm und regional abhängige Mitgliedsgebühr: https://developer.apple.com/programs/enroll/
- Xcode und Apple-Entwicklungsweg: https://developer.apple.com/xcode/
