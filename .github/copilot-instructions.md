# Regulative BeHANDlung – Projekt-Kontext

## Projektbeschreibung
Statische Website für Martina Stöckers Heilpraktiker-Praxis.
Kein Framework, kein Build-Tool – nur HTML + CSS (ggf. später JavaScript).

## Dateistruktur
- `index.html` – Haupt-Seite
- `css/style.css` – alle Stile
- `img/` – Bilder (Logo, Fotos, Hintergründe)
- `pdf/` – Infoblätter & Preislisten (Salz, Flor de Sal etc.)

## Farben
- Gelb:  #F9C922
- Blau:  #1E4D9B
- Weiß:  #FFFFFF
- Hellgrau (Hintergrund): #F5F5F5

## Praxis-Inhaberin
Martina Stöcker – Heilpraktikerin, Jahrgang 1964, Praxis seit 1997.
Tätigkeiten: Akupunkt-Massage, Ortho-Bionomy, THEKI BewusstseinsTraining, Regulative BeHANDlung.

## Sektionen (Anker)
- `#regulative` – regulative BeHANDlung ist …
- `#aktuelles`  – Aktuelles
- `#information` – Information
- `#salz`       – Salz (Flor de Sal, La Palma)
- `#kontakt`    – Kontakt

## Coding-Regeln
- Kommentare auf Deutsch
- Kein Inline-CSS – alles in `css/style.css`
- Keine externen CSS-Frameworks (kein Bootstrap, kein Tailwind)
- Accessibility: `alt`-Texte auf allen Bildern, `aria-label` auf Icons/Links
- Responsive: Mobile-First, Breakpoint bei 768 px – die Seite muss auf Smartphone und Tablet genauso gut aussehen wie auf dem Desktop
- Wiederverwendung: CSS-Klassen und HTML-Strukturen so gestalten, dass sie mehrfach einsetzbar sind (DRY-Prinzip) – keine unnötigen Duplikate
- Zoom-Verhalten: Keine fixen Pixel-Höhen für Bild-Container – stattdessen `aspect-ratio` verwenden, damit Bilder beim Browser-Zoom genauso sanft skalieren wie der Rest der Seite

## CMS-Vorbereitung
Die Website soll später einfach mit einem CMS (z.B. Decap CMS / Netlify CMS) erweiterbar sein.
Deshalb gelten diese Regeln von Anfang an:

- **Inhalt von Layout trennen**: Texte, Überschriften und Bilder stehen nie fest im Layout-Gerüst – immer in eigenen, klar abgegrenzten Bereichen
- **Editierbare Bereiche kennzeichnen**: Jede Section hat ein `<div class="section-content">` als direkten Container für den Inhalt – das ist der Bereich, den ein CMS später befüllt
- **Keine hartcodierten Texte im Template**: Navigationsstruktur, Section-IDs und Klassen bleiben stabil – nur der Inhalt ändert sich
- **Bilder mit `data-`-Attributen**: Bilder die vom CMS verwaltbar sein sollen bekommen `data-cms-image` – das erleichtert die spätere Anbindung
- **Konsistente Benennung**: Section-IDs, CSS-Klassen und Dateinamen immer nach dem gleichen Muster – macht die CMS-Konfiguration einfacher
- **Kein JavaScript für Inhalt**: Keine Texte oder Bilder per JS ins HTML schreiben – CMS-Systeme erwarten reines HTML
