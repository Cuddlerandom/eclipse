# Goblin V0.7 – technische Upload-Prüfung (2026-10-16)

Zielbranch: `feature/goblin-assets`. Neues Verzeichnis: `assets/goblin/v0.7/`.
Alle 36 Dateien des beigefügten ZIP wurden unverändert übernommen; dieses Dokument ist die einzige zusätzliche Datei. Vorhandene Goblin-Versionen, gemeinsame Spieldateien, main, Gameplay und Hitboxen bleiben unverändert. Keine Design- oder Produktionsfreigabe.

## Tatsächlich geprüfte Inhalte

- ZIP-CRC-Prüfung ohne Fehler.
- 24 Einzel-PNGs: 64x64, RGBA, transparente und deckende Pixel vorhanden. Alpha ausschliesslich 0 oder 255, keine weich interpolierten Alpha-Ränder.
- 5 horizontale Sheets: idle 256x64 (4), run 384x64 (6), attack 384x64 (6), hit 192x64 (3), death 320x64 (5).
- Alle 24 Sheet-Ausschnitte sind pixelgenau identisch mit den zugehörigen Einzelframes. Frame-Rechtecke und Pfade im JSON stimmen.
- Alle 24 SHA-256-Frame-Prüfsummen aus dem originalen QA_REPORT.md stimmen.
- JSON: Framegrösse 64x64; Anker (32,60); Timings 180/100/90/110/150 ms.
- Die unveränderte HTML-Vorschau wurde als JavaScript in einer simulierten DOM-/Image-/Canvas-Umgebung ausgeführt: 24 unterschiedliche existierende PNG-Pfade, 10 Canvas-Flächen mit 64/128 px interner und CSS-Grösse, imageSmoothingEnabled=false, fünf passende Timer; alle 24 Frames werden angesprochen, Tod hält den letzten Frame.
- Originale Kontaktübersicht mit tatsächlichen PNG-Frames visuell betrachtet; dies ist keine Browseraufnahme und keine Freigabe der Animationsqualität.
- Original-HTML referenziert nur `frames/` innerhalb dieses Verzeichnisses; nach Download/Checkout kann `preview.html` lokal geöffnet werden. GitHubs normale Datei-/Raw-Ansicht ist kein HTML-Hosting.

## Browserprüfung: versucht, nicht erfolgreich

Der echte Cloud-Browser konnte die isolierte Vorschau über den lokalen Vorschauzugang nicht öffnen: `net::ERR_CONNECTION_REFUSED`. Deshalb keine erfolgreichen echten Browser-, Canvas-Rendering-, Safari- oder iPhone-Laufzeittests. Die automatisierte DOM-Simulation ersetzt diese Tests nicht. Es wurde keine neue öffentliche Website bereitgestellt.

## Kompatibilität mit bestehendem Renderer

Geprüfte Referenz: aktueller Branch `integration/goblin-prototype-preview`, Commit `a167ec942762ed750cf1f602ba1e5346dd412c66`, Funktion `drawGoblinPrototype` (nur gelesen).

- Framezahl, horizontales 64x64-Sheetlayout und Timings passen zum bisherigen Renderer.
- Nicht direkt austauschbar: Renderer lädt alte `assets/goblin/animation-work/goblin_*.png`, V0.7 liegt unter `assets/goblin/v0.7/sheets/`. Kein Pfad wurde im Spiel geändert.
- V0.7 hat Anker (32,60); Renderer verwendet noch y=57. Bei 42px Ausgabe entsprechen 3 Quellpixel knapp 1.97 Ausgabepixeln. Eine spätere Integration muss den Anker explizit berücksichtigen.
- V0.7-JSON nutzt `sheet`/`files`/`frameRects` und oberste `frameWidth`/`frameHeight`/`anchor`; altes JSON nutzt `path`/`gifPreview` und andere Struktur. Der aktuelle Renderer liest seine Konfiguration hartcodiert, nicht dieses JSON.
- V0.7 erklärt attack und hit als loop=true; bisherige Metadaten als loop=false, der aktuelle Spielrenderer begrenzt deren Dauer anhand Ereigniszeitstempeln. Schleifenverhalten muss bei späterer Integration bewusst zugeordnet werden.
- Die native Vorschau nutzt 64x64 und 128x128, der Spielrenderer 42x42. 42/64 ist keine ganzzahlige Skalierung; ausgeschaltete Glättung erhält harte Kanten, kann jedoch einzelne Pixel/Details auslassen. Die 1x/2x-Vorschau bestätigt somit nicht die Lesbarkeit im Spiel.

## Bekannte Grenzen

- Einige Death-Frames berühren oberen/linken Bildrand; attack_03 erreicht den rechten Rand. Ob dort Inhalt abgeschnitten wirkt, bleibt visuell zu beurteilen. Originaldateien nicht verändert.
- Idle 00 und 02 sind identisch; hit 00 ist ebenfalls identisch mit idle 00. Kein Integritätsfehler, aber keine 24 einzigartigen Posen.
- Vergleich mit einer separat freigegebenen V0.5-Referenz war mangels beigefügter Referenz nicht möglich. Historische Freigabeaussagen im Original-HANDOFF werden nicht neu bestätigt.
- Originale HANDOFF.md / QA_REPORT.md enthalten noch den historischen Hinweis „Upload offen“. Diese Texte bleiben absichtlich unverändert; der aktuelle Uploadstand wird durch den GitHub-Commit und dieses Zusatzdokument belegt.
- Finale Design-, Bewegungs- und Produktionsfreigabe ausschliesslich durch den Game Director.

## Vollständige Originaldateiliste / SHA-256

- `HANDOFF.md` — `d464b0045ac3417b3d214557bbf4c84ca9ea62f8925c3abf642a7b7f45dbee9c`
- `QA_REPORT.md` — `a32921f817b242bd1132cefe2d0cbcf5b570a889d638714f51c5d6168b9ba490`
- `all_animations_contact.png` — `2a04f34558e788b10986c37ae806cd7331944a3e102a77f47cb2ceedc2c738f6`
- `animations.json` — `8da6e510fd79629eae783bdc80fc107880a1935227343215012f1e4589c29b22`
- `attack_comparison.png` — `b00c3f389853a79de50817c8ddd9f19a4127a093280bbe895978755b95daf16d`
- `frames/goblin_attack_00.png` — `9f6bc780c104ae074d542605cc24e3d26004b4d44e1aeeb7ce643459dddec583`
- `frames/goblin_attack_01.png` — `0e53ca480dc7c7f156f3eeed56df835e98f2e1f4763e8f43b1a3148d7e0c2e83`
- `frames/goblin_attack_02.png` — `78c4402a2b1b9e53348c0485ba8795b7fc10fb25cf37e6b2df66a5205fa46294`
- `frames/goblin_attack_03.png` — `f8e881b15bc94f8d19597239bd3d29f9db7a71058ab96d3679b6e22b1fc78218`
- `frames/goblin_attack_04.png` — `8aa825f7a61789fa23171c7d85d9ca3c9789ba65f391c7dc0fd779e5ba0a2920`
- `frames/goblin_attack_05.png` — `a9a4aafb6407cb6a4615c6deef1c2cc0c3651a6532dcce4433990b797acc7650`
- `frames/goblin_death_00.png` — `e7c56bb6b6d47b42f375d0e48b6ad8eab734c5f4969ad3b46d37f869609e0e82`
- `frames/goblin_death_01.png` — `3de85876339efc271162d0be75443fe82d1933ce9e9ed695bb769943b2107250`
- `frames/goblin_death_02.png` — `c72de9f748288f52cfaad1f250c4ed45d26f4e4c912793c07423047b5d81a201`
- `frames/goblin_death_03.png` — `37f891e867d5c5dfe8a3aa0d218c8d8995b1422f44989b20d9bbb4ee22467eac`
- `frames/goblin_death_04.png` — `4a851a7e7fa7464a45869d9438deac59e854f0d9bd505a171311b387ae4e6579`
- `frames/goblin_hit_00.png` — `3a2b12e5df316409bc1b2b0f188dfcbc74494fb8317c608f02fd016f817fc787`
- `frames/goblin_hit_01.png` — `969f1825e3c5e1c0addcfe4435a49937d0b3955119ecd3a54f07583e18522bfd`
- `frames/goblin_hit_02.png` — `346b1dfa38cf2e2dc1d6b0ed0cebe49f4979398192e92bc2915f429028a62499`
- `frames/goblin_idle_00.png` — `3a2b12e5df316409bc1b2b0f188dfcbc74494fb8317c608f02fd016f817fc787`
- `frames/goblin_idle_01.png` — `7e6c203409dc072cffbbfa0d19ca43090e6cc52b218801a2bc87333bfc4e1ad3`
- `frames/goblin_idle_02.png` — `3a2b12e5df316409bc1b2b0f188dfcbc74494fb8317c608f02fd016f817fc787`
- `frames/goblin_idle_03.png` — `1a4e8142d553f04cc1ec231f8973d34efa7719fd3df18957c58c0f4458b17ea2`
- `frames/goblin_run_00.png` — `57a82e8add33156927ce31d5dfeab9d036d634e76ca9cfa796d702f1e7182975`
- `frames/goblin_run_01.png` — `8b498c3ddbca79db6147018c051218594e030e780eb0cc1f64a52d1b9737cf25`
- `frames/goblin_run_02.png` — `bde1df190b93f9db4a88d4a35c1937f7ffa0f407a9bc9a1cc4a083361feac10a`
- `frames/goblin_run_03.png` — `3c6d91c28a0cc68868c3445b8ed4924f0c73b9be9d450ae6d0f5770d908fccb3`
- `frames/goblin_run_04.png` — `33b2c5fb757595955b7d380ecd7f77b6a2b710e60886bf85d6ae1b002bb8118e`
- `frames/goblin_run_05.png` — `794bec27606dceb565badbee1eec510e0d26a672dc7ff4484e5f9cae8489f7a4`
- `preview.html` — `7fa8618f6adcb327e1d7169a374c8bca1e48c8e546ac63e20cd5be719af02c84`
- `production_1x_comparison.png` — `17e3357ffde7b09180f28fd13db5b5c6b6c8e10b7b4b9f5a3b3aed6e96bf321f`
- `sheets/goblin_attack.png` — `dd05d49af7562f099cf0c1878fcb3e7c8a010e72c5f12a06392b3aefba3c5b9a`
- `sheets/goblin_death.png` — `0b8f98d59f111cd8bc30354d94665970ba6eb10c68593812e4db9999eb9154ed`
- `sheets/goblin_hit.png` — `d1d91c41c52a07663b486104f52ddfdf00b0fa279390a2696f8665459e3603b1`
- `sheets/goblin_idle.png` — `facac29581fc9bd14d975a6b7870cb59f1a173a6be35d115dc145d4b78d25110`
- `sheets/goblin_run.png` — `6a9ecb9994e1e5d0fa7f7303358d1a44ef5350b8c55f1619475acde39bca3e73`
