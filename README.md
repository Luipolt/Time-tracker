# Work Time Tracker (PWA)

Ein minimalistischer, datenschutzfreundlicher Arbeitszeittracker als Single-Page Web-App. Entwickelt für die schnelle Erfassung von Stempelzeiten unterwegs inklusive automatischer Industriestunden-Berechnung und nativem XLSX-Export.

## 🚀 Features

* **Stempel-Typen:** Erfassung von *Active*, *Passive*, *Break* und *End*.
* **Industriestunden-Berechnung:** Automatische Summenbildung (Dezimalstunden) pro Tag. Keine Zeitzählung nach dem Status *End*.
* **Nativer XLSX-Export:** Erstellt eine übersichtliche Matrix-Tabelle aller Tage direkt als Excel-Datei via SheetJS.
* **Dark Mode:** Manuelles Umschalten (Sonne/Mond) sowie automatische Übernahme des Systemschemas.
* **Datenschutz & Offline-First:** Alle Daten verbleiben lokal im Browser (`localStorage`). Funktioniert komplett ohne Server oder Datenbank.
* **PWA & Standalone:** Kann auf Android/iOS direkt als App auf dem Startbildschirm installiert werden (inkl. farbigem App-Icon).
* **Anpassbar:** Nachträgliches Bearbeiten von Datum, Uhrzeit und Notizen mit automatischer chronologischer Neusortierung.

## 🛠️ Technologien

* **HTML5 / CSS3** (Vanilla CSS mit Design-Variablen)
* **JavaScript** (ES6+)
* **SheetJS (xlsx.full.min.js)** für den Excel-Export
* **Service Worker & Web App Manifest** für PWA-Funktionalität

## 📦 Installation & Nutzung

1. Repository klonen oder den Code in eine `index.html` einfügen.
2. Über **GitHub Pages** oder einen beliebigen Webserver hosten.
3. Im Browser des Smartphones öffnen und zum **Startbildschirm hinzufügen**.
4. 
