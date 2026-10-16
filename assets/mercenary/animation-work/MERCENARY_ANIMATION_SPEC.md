# ECLIPSE – Söldner B: Animationsspezifikation (Entwurf)

Status: **Fach-Chat / zur Prüfung durch Technik-Chat und Hauptzentrale**  
Stand: 2026-10-16

## Verbindliche Designvorgaben
- **Originalkrieger B bleibt erhalten**: zerzaustes dunkles Haar, abgenutzte braune Lederrüstung, roter Umhang/Schal, Stahl-Langschwert.
- Kein neues weisses Samurai-Schwert. Keine streifenweise Bildverformung und kein künstliches Wellenlaufen.
- BALL x PIT dient als **Bewegungsgefühl-Referenz** (direkte Reaktion, lesbare Silhouette, klare Angriffsphasen), nicht als Aufforderung, Designs zu kopieren.
- Die grünen Lande, Steuerung, Schadenswerte und bestehende Spielmechanik bleiben unverändert.

## Aktueller Ist-Zustand (aus game.js)
- Die aktuelle Bildfigur stammt aus einem **externen Adobe-Short-Link** und wird als **ein einzelnes Ganzkörperbild** gezeichnet.
- `drawMercenaryMotion(mode,q)` verwendet Rotation, Versatz und geringfügige Skalierung; das sind **keine echten Animationsframes**.
- Lauf-/Angriffs-/Dodge-/Trefferzustände werden aus dem bestehenden Gameplay übernommen.
- Der im Spiel vorhandene Legacy-`heroSprites`-Fallback ist eine separate prozedurale Grafik.
- Die acht in `run-extraction-manifest.json` erfassten freigestellten Laufposen sind **ungeprüfte Entwürfe**, nicht produktionsreif. Die Adobe-URLs sind nicht als dauerhafte Asset-URLs geeignet.

## Vorgeschlagener erster Produktionsmeilenstein: Run-Loop
| Parameter | Vorgabe zur Prüfung |
| --- | --- |
| Animation | `run` |
| Frames | **8 tatsächlich unterschiedliche** Posen (Vorschlag, noch nicht bestätigt) |
| Schleife | 8 → 1 ohne sichtbaren Sprung |
| Timing | Ziel 10–12 FPS für Run-Loop; Spiel bleibt mit `requestAnimationFrame` flüssig |
| Referenzformat | Transparente PNGs; zunächst 96 × 112 px als Arbeits-Canvas, nicht als endgültige Sprite-Grösse |
| Anker | Fuss-/Bodenpunkt in allen Frames identisch; keine springenden Füsse |
| Darstellung | Gleichbleibende Figurengrösse, Ausrichtung und Schwert-/Umhangform |
| Performance | Ein kompakter Atlas statt vieler externer Bildrequests; mobile Safari testen |

## Qualitätskontrolle vor Freigabe
1. Acht Bilder einzeln prüfen: Kopf, Hände, Füsse, Schwert und Umhang vollständig.
2. Silhouette und Ausrüstung in jedem Frame mit **dem Originalkrieger** vergleichen.
3. Hintergrund wirklich transparent, keine Beschriftung, keine Artefakte.
4. Gleiche Höhe, Perspektive und identischer Fuss-Anker in allen Frames.
5. Links-/Rechts-Schrittfolge logisch; Übergang 8 → 1 ohne Sprung.
6. Test auf iPhone Safari: Bewegung, Spiegelung, Kollisionen, Bildladeverhalten, Speicher/Performance.
7. Nur nach Freigabe durch Technik-Chat in gemeinsame `game.js` integrieren; Version/Release durch Hauptzentrale.

## Übergabe / Integrationsschnittstelle (Vorschlag)
- Asset-Pfad: `assets/mercenary/run.png` (noch **nicht** vorhanden).
- Manifest: `assets/mercenary/run.json` (noch **nicht** vorhanden).
- Schnittstelle: Animation-ID `run`, Frameindex, Framebreite/-höhe, Dauer je Frame, `originX`/`originY` für Bodenanker.
- Fallback: Bei fehlendem Atlas unverändert Originalbild zeichnen.
- **Kein Eingriff in `game.js` durch diesen Fach-Chat ohne Integrationsfreigabe.**

## Offene Punkte
- Vorliegende 8 Extraktionen sind auf Originaltreue, Alphakanten und korrekte Schrittfolge zu prüfen; gegebenenfalls neu zeichnen.
- Die vollständigen 13 Animationsarten und endgültige Sprite-Masse sind durch die Hauptzentrale zu bestätigen.
- Originalgrafik dauerhaft als Repo-Asset sichern, bevor die Adobe-URL abläuft.

## Übergabebericht
- **Bereich:** Krieger / Animation.
- **Ergebnis:** Aktuellen Implementierungsstand geprüft, klare Run-Loop-Anforderungen und QA-Gates definiert.
- **Datei neu:** `assets/mercenary/animation-work/MERCENARY_ANIMATION_SPEC.md`.
- **Dateien unverändert:** `game.js`, `index.html`, bestehende Assets.
- **Tests:** Repo-Inhalt und Schnittstelle geprüft; **kein Browser-/iPhone-Test durchgeführt**.
- **Probleme:** Kein verifizierter produktionsreifer Laufatlas; temporärer externer Charakter-URL.
- **Integration:** Technik-Chat prüft Anforderungen und koordiniert Atlas-Einbau; Hauptzentrale bestätigt Design und Release.
