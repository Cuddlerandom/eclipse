# Übergabe an ECLIPSE-Hauptzentrale – Söldner B

Datum: 2026-10-16  
Status: **Technisches Animationsmodul fertig, grafische Produktionsassets und Integration offen**

## Bereich / Ziel
Krieger B: ursprüngliches Design erhalten; Animationen mit echten Spriteframes statt künstlicher Streifen-/Wellenverformung ermöglichen.

## Dateien neu
- `assets/mercenary/animation-work/mercenary-animator.js` – eigenständiger ES-Modul-Controller und Canvas-Atlasrenderer.
- `assets/mercenary/animation-work/mercenary-animator.test.mjs` – automatisierte Logiktests.
- `assets/mercenary/animation-work/HANDOFF.md` – diese Übergabe.

## Vorhandene Dateien
- `assets/mercenary/animation-work/MERCENARY_ANIMATION_SPEC.md` – Qualitäts- und Integrationskriterien.
- `assets/mercenary/animation-work/run-extraction-manifest.json` – acht ungeprüfte Adobe-Extraktionen.
- `game.js`, `index.html`, `ECLIPSE_PROJECT.md` wurden **nicht** geändert.

## Schnittstelle
```js
import {MercenaryAnimator,drawMercenaryFrame,MERCENARY_STATES,MERCENARY_CLIPS} from './assets/mercenary/animation-work/mercenary-animator.js';
const anim = new MercenaryAnimator();
anim.setState('run'); anim.face(1); anim.update(dt);
const frame = anim.sample();
drawMercenaryFrame(ctx, atlasImage, frame, {x:player.x,y:player.y,frameWidth:96,frameHeight:112,anchorX:48,anchorY:104});
```
Die Pixelwerte sind **Beispielwerte**, keine final bestätigte Sprite-Geometrie. Das Atlas-Layout besteht aus horizontalen Reihen in Reihenfolge `idle,run,attack,dodge,hit,death`. Frame 0 steht links; alle Zellen gleich gross. Fussanker pro Zelle gleich. Rendering verändert keine Körperteile. `update(dt)` erwartet Sekunden und verarbeitet die volle verstrichene Zeit (auch bei Framerate-Einbrüchen). Zustandswechsel müssen vom vorhandenen Gameplay gesetzt werden; nicht automatisch.

Vorgeschlagene, **nicht final bestätigte** Clips: idle 8×8 FPS loop, run 8×12 FPS loop, attack 8×24 FPS, dodge 8×24 FPS, hit 4×16 FPS, death 12×12 FPS.

## Tests
- **Bestanden:** Modul-Logiktest in isolierter JavaScript-Ausführung: initial idle, Run-Fortschritt und Loop, Blickrichtung, Attack-Ende, Restart, negative Zeitdifferenz, Clipdaten, Atlas-Ausschnitt, Spiegelung und fehlender Atlas.
- **Zusätzlich bestanden (2026-10-16):** Grosse Zeitdifferenzen werden vollständig verarbeitet, ungültige Atlas-Frame-Indizes werden zurückgewiesen.\n- **Nicht durchgeführt:** Browserintegration, iPhone Safari, Bildqualität, Rendering echter Sprite-Atlanten, Lasttest.

## Bekannte Probleme / Blocker
1. Der Söldner in `game.js` nutzt noch eine externe Adobe-Short-URL und ein Einzelbild.
2. Die acht ausgeschnittenen Laufposen sind **nicht qualitätsgeprüft**, weder als konsistenter Loop noch als originalgetreue transparente Frames bestätigt.
3. Kein stabil im Repository abgelegter Produktionsatlas vorhanden. Das Modul alleine verbessert die sichtbare Animation im Live-Spiel nicht.
4. Für Attack/Dodge/Hit/Death liegen keine geprüften Einzelbildsequenzen vor.
5. Bestehendes `game.js` ist ein nichtmodulares Script; Import/Loader muss durch Technik-Chat geplant werden.

## Integrationsschritte – nur Hauptzentrale/Technik
1. Originalgrafik dauerhaft ins Repo sichern.
2. Echte, konsistente PNG-Frames je Clip erstellen und einzeln freigeben; Run-Loop zuerst.
3. Atlas mit definierten Zellen, Fussanker und Transparenz exportieren.
4. Controller im Game-Loop anbinden, Spielzustände zuordnen, Fallback auf Originalgrafik erhalten.
5. Gameplay-/Safari-Regressionen und Performance prüfen, erst dann Release.

## Commits
- Modul: `372106c`
- Tests: `5e92e33`, korrigiert `3b8a08f`\n- Frametiming-/Frame-Grenzen-Fix: `fb694f7`\n- Erweiterte Tests: `c6c54d9`

**Keine eigenmächtige Integration oder Release durch den Krieger-Fach-Chat.**
