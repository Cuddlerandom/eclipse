# ECLIPSE – Verbindliches Projektregelwerk V1.0

**Status:** Zur Gesamtprüfung über Pull Request  
**Geltungsbereich:** Projektorganisation, Kommunikation, Entwicklung, Grafikproduktion, Qualitätssicherung, Integration und Releases  
**Verbindliche Quelle:** GitHub-Repository `Cuddlerandom/eclipse`  
**Letzte Konsolidierung:** 2026-10-16

> Dieses Regelwerk wird erst nach Prüfung und ausdrücklicher Freigabe des Game Directors als verbindliche Projektversion übernommen. Es verändert keine Gameplay-Dateien und erteilt keine Design- oder Produktionsfreigabe für bestehende Assets.

## 0. Rollen, Zuständigkeiten und Grundsätze

### 0.1 Game Director
Der Game Director bestimmt Spielvision, Design, Prioritäten, kreative Richtung, endgültige Designfreigaben und Live-Veröffentlichungen. Nur der Game Director darf Rollen und Zuständigkeiten ändern. Änderungen am Regelwerk oder an Projektdateien benötigen die ausdrücklich erteilte Freigabe des Game Directors, soweit nicht eine bereits delegierte technische Zuständigkeit greift.

### 0.2 Hauptzentrale
Die Hauptzentrale ist das technische Bindeglied zwischen Game Director und Fachbereichen. Sie verantwortet technische Architektur, Gameplay, Balancing, Programmierung, Integration, Stabilität, Qualitätssicherung, Staging und technische Releases. Sie darf innerhalb dieser Zuständigkeit Fehler beheben und geprüfte Änderungen nach den Regeln dieses Dokuments integrieren. Sie informiert den Game Director über wichtige Entscheidungen, Risiken, Blocker und Freigabebedarf.

### 0.3 Fach-Chats
Fach-Chats arbeiten ausschliesslich innerhalb ihres zugewiesenen Aufgabenbereichs. Sie erstellen und überarbeiten ihre eigenen visuellen Assets, Animationen, Metadaten und isolierten Vorschauen. Sie ändern keine gemeinsamen Gameplay-Dateien, keine zentralen Schnittstellen und nicht `main`, sofern der Game Director ihnen dies nicht ausdrücklich zuweist. Neue Chats ohne Aufgabenbereich müssen zuerst den Game Director um eine Zuweisung bitten.

### 0.4 GitHub als verbindliche Quelle
GitHub ist die maßgebliche Quelle für Code, Assets, Regeln, Übergaben, Entscheidungen und dokumentierten Entwicklungsstand. Behauptungen über Commits, Tests, Merges oder Veröffentlichungen müssen durch tatsächliche Ergebnisse belegbar sein.

### 0.5 Grundsatz der Wahrhaftigkeit
Ein Konzeptbild ist kein Produktionsasset. Ein Commit ist kein Merge. Ein Merge ist keine Live-Veröffentlichung. Ein erfolgreicher Build ist kein Nachweis für korrektes Gameplay oder eine erfolgreiche iPhone-Prüfung. Nicht durchgeführte Prüfungen sind ausdrücklich als **„Nicht geprüft“** auszuweisen.

## 1. Kommunikation, Updates und Eskalation

### 1.1 Kombiniertes Updatesystem
Es gilt ein kombiniertes System aus GitHub-Dokumentation und Updates im Chat:
- GitHub ist der dauerhafte, nachvollziehbare Ort für Status, Entscheidungen, technische Details, Übergaben, Issues und Pull Requests.
- Der Chat dient dem kompakten Überblick, der Priorisierung und den Entscheidungen des Game Directors.
- Wichtige Ergebnisse werden in beiden passenden Formen festgehalten: detailliert auf GitHub und als verständliche Statusmeldung im Chat.
- Der Game Director soll nicht jeden Arbeitsfortschritt einzeln verfolgen müssen. Fachbereiche melden sich mit einem klaren Status, wenn eine Arbeit fertig, blockiert oder entscheidungsreif ist.

### 1.2 Direkte Fachkommunikation über GitHub
Fachbereiche kommunizieren technische Fragen, Abhängigkeiten und Reviews direkt über relevante GitHub-Issues und Pull Requests. Die Hauptzentrale wird eingebunden, sobald gemeinsame Schnittstellen, Gameplay, Integration, Prioritäten oder mehrere Fachbereiche betroffen sind. Wichtige Entscheidungen dürfen nicht nur in privaten oder flüchtigen Chatnachrichten stehen; sie sind auf GitHub zu dokumentieren.

### 1.3 Fehler, Blocker und Eskalation – ausgewogen
- **Kritisch:** Spiel startet nicht, Datenverlust, Sicherheitsproblem, erhebliche Beschädigung von `main` oder Live-Ausfall. Arbeit am betroffenen Bereich stoppen, Hauptzentrale sofort informieren und Wiederherstellung priorisieren.
- **Hoch:** Eine zentrale Funktion oder ein Meilenstein ist blockiert, eine Übergabe ist nicht integrierbar oder ein Pflichtcheck schlägt fehl. Zeitnah dokumentieren, Verantwortliche und nächste Aktion nennen und an die Hauptzentrale eskalieren.
- **Normal:** Nichtkritische visuelle Fehler, kleinere Abweichungen oder offene Detailfragen werden im zuständigen Issue/PR festgehalten und in der regulären Arbeit priorisiert.
- Fehler dürfen nicht verschwiegen, als bestanden markiert oder durch Umgehung von Pflichtprüfungen verborgen werden. Eskalationen sollen sachlich und verhältnismäßig erfolgen.

### 1.4 Standard für Statusmeldungen
Jede relevante Übergabe oder Blockermeldung nennt:
1. Bereich und zuständige Person/Fach-Chat,
2. Status und betroffenen Branch/PR/Commit,
3. tatsächlich erledigte Arbeiten,
4. tatsächlich ausgeführte Tests samt Ergebnis,
5. offene Punkte, bekannte Fehler und nicht ausgeführte Tests,
6. benötigte Entscheidung oder nächsten konkreten Schritt.

### 1.5 Automatische Benachrichtigungen und Berichte
Benachrichtigungen sollen sich auf wichtige Ereignisse beschränken: fertige Testversionen, kritische Fehler, notwendige Freigaben, blockierte Meilensteine und bedeutende Fortschritte. Routinemäßige Kleinständerungen lösen keine unnötigen Meldungen aus. Automatische Benachrichtigungen gelten erst dann als aktiv, wenn Einrichtung und Funktion technisch geprüft und dokumentiert sind. Regelmäßige Berichte sollen den aktuellen Stand und wichtige Veränderungen zusammenfassen, nicht ungeprüfte Aktivität vortäuschen.

## 2. Entwicklungsphasen, Korrekturen und Freigaben

### 2.1 Verbindliche Entwicklungsphasen mit zwei Freigaben
Assets und Funktionen durchlaufen nachvollziehbare Phasen:
1. **Geplant:** Aufgabe, Umfang und Verantwortlichkeit sind dokumentiert.
2. **In Entwicklung:** Umsetzung läuft; noch keine Produktionsfreigabe.
3. **Fachlich fertig:** Fachbereich bestätigt, dass die Arbeit seinem Auftrag entspricht.
4. **Technisch geprüft:** Hauptzentrale prüft Dateien, Schnittstellen, Integrationstauglichkeit und vorgeschriebene QA.
5. **Zur Freigabe bereit:** Vollständiges Übergabepaket und Testnachweise liegen vor.
6. **Designfreigabe:** Game Director bestätigt das visuelle Ergebnis bzw. das Design, soweit eine kreative Freigabe erforderlich ist.
7. **Produktionsfreigabe/Integration:** Nach den erforderlichen Freigaben integriert die Hauptzentrale in den vorgesehenen Zielbereich.
8. **Gesamtspiel geprüft:** Die Integration wurde im tatsächlichen Spiel getestet; offene Einschränkungen sind dokumentiert.

Es gelten zwei getrennte Freigaben: **Designfreigabe durch den Game Director** und **technische Integrationsfreigabe durch die Hauptzentrale**. Eine technische Prüfung ersetzt keine Designfreigabe; eine Designfreigabe ersetzt keine technische QA. Für rein technische Änderungen ohne kreativen Einfluss dokumentiert die Hauptzentrale, weshalb keine separate Designfreigabe erforderlich ist.

### 2.2 Kreative Eigenständigkeit der Fachbereiche
Fach-Chats dürfen innerhalb des freigegebenen Briefings eigenständig kreative und technische Lösungen entwickeln, iterieren und verbessern. Sie dürfen Vorschläge machen und Alternativen zeigen. Sie dürfen jedoch keine bereits freigegebene Designrichtung stillschweigend ändern, keine Produktionsfreigabe selbst erteilen und keine fremden Zuständigkeitsbereiche überschreiben. Wesentliche Abweichungen vom Briefing werden dem Game Director zur Entscheidung vorgelegt.

### 2.3 Vollständige Produktionsübergabe
Eine Übergabe ist erst vollständig, wenn sie – soweit für den Auftrag relevant – enthält:
- unveränderte Original-Produktionsdateien in den vereinbarten Formaten,
- transparente Einzel-PNGs und Sprite-Sheets/Atlanten, sofern erforderlich,
- Metadaten: Frame-Abmessungen, Reihenfolge, FPS/Timing, Loops, Ankerpunkte, Zustände und Dateizuordnung,
- isolierte Vorschau, die exakt dieselben Produktionsdateien verwendet,
- klare Asset-Lizenz-/Herkunftsangabe, Dateiliste und Prüfsummen oder Integritätsnachweis, sofern verfügbar,
- Branch, Commit und Pull Request,
- QA-Bericht mit ausgeführten Tests, Ergebnissen und nicht geprüften Punkten,
- bekannte Probleme, Einschränkungen und Integrationshinweise.
Fehlende Bestandteile sind ausdrücklich aufzuführen; die Übergabe darf nicht als vollständig bezeichnet werden, wenn wesentliche Pflichtbestandteile fehlen.

## 3. 1:1-Spielvorschauen und Grafikqualität

### 3.1 Strikte 1:1-Produktionsregel
Freigegebene Produktionsgrafiken müssen unverändert integriert werden. Die tatsächliche Spielvorschau muss dieselben Originaldateien verwenden, die später integriert werden. Keine vereinfachten Ersatzgrafiken, kein Nachzeichnen als Ersatz, keine stille Neugenerierung, keine nachträglichen stilistischen Änderungen und keine Vorschau mit anderen Assets als der Produktionsversion. Zulässige Rendering-Transformationen wie Positionierung, Spiegelung für die Blickrichtung oder ganzzahlige Skalierung müssen dokumentiert sein und dürfen die Quelldateien nicht verändern. Abweichungen, die das Aussehen verändern, benötigen eine erneute Freigabe.

### 3.2 Flexible Sprite-Grössen mit einheitlichen Standards
Charaktere und Umgebungsobjekte dürfen unterschiedliche Sprite-Abmessungen haben, sofern das Design es erfordert. Einheitlich dokumentiert werden müssen:
- logische Spielgrösse und Darstellungsgrösse,
- transparente Ränder und tatsächliche Pixelbegrenzung,
- Fuss-/Bodenanker und weitere relevante Pivot-Punkte,
- Skalierungsregeln, Pixelausrichtung und Ausrichtung zum Weltkoordinatensystem,
- Animationszustände, Framezahl und Timing,
- Richtungswechsel, Loop-Verhalten und Übergänge.
Eine einzelne fixe Frame-Grösse für alle Figuren ist nicht vorgeschrieben. Einheitliche Schnittstellen und dokumentierte Anker sind vorgeschrieben.

### 3.3 Grafikvision und Produktionsqualität
ECLIPSE strebt gestochen scharfe, eigenständige und detailreiche Pixel-Art an. Kapitel 1 ist ein helles, sattgrünes Grasland. Alle Umgebungsassets müssen stilistisch zusammenpassen. Flüssige, dynamische Animationen sollen sich in Bewegungsqualität, Timing und Lesbarkeit an hochwertigen Actionspielen orientieren, ohne die Pixel-Art-Identität zu verlieren. Beleuchtung, Partikel, prozedurale Bewegungen, 2D-Skelettanimation und Animation-Blending dürfen kombiniert werden, wenn Qualität, Stabilität und mobile Performance dadurch verbessert werden.

### 3.4 Krieger als erster verbindlicher Qualitätsmassstab
Zuerst werden Grafik, Animationen, Effekte und Darstellung des vom Game Director freigegebenen Kriegers technisch optimiert. Für ihn wird eine separate spielbare Testversion bereitgestellt. Erst nach ausdrücklicher Freigabe des Game Directors wird der erreichte Qualitätsstandard als Referenz auf weitere Charaktere übertragen. Jeder weitere Charakter benötigt weiterhin seine eigene Design- und Produktionsfreigabe. Die Freigabe des Kriegers erteilt keine automatische Freigabe für Goblin, Wolf, Söldner oder andere Figuren.

### 3.5 Animation und Bewegungsqualität
Für jeden Charakter werden die erforderlichen Bewegungen anhand seines Game-Designs festgelegt. Relevante Zustände können Idle, Walk/Run, Attack, Heavy Attack, Dodge, Hit und Death umfassen; nicht jeder Charakter benötigt zwingend alle Zustände. Bewegungen müssen lesbar und konsistent sein, ohne unbeabsichtigtes Springen, Clipping, wechselnde Körperproportionen oder Fussgleiten. Framezahl und FPS dürfen je Animation variieren, müssen aber dokumentiert und in Bewegung beurteilt werden. Das Ziel ist flüssige Darstellung bei angestrebten 60 FPS im Spiel; tatsächliche Geräteziele werden gemessen und dokumentiert.

## 4. Qualitätssicherung und Tests

### 4.1 Strenge Qualitätssicherung
Pflichtprüfungen dürfen nicht ignoriert werden. Schlägt ein Pflichtcheck fehl, wird die betroffene Änderung nicht als bestanden oder integrationsbereit markiert. Ein begründeter Ausnahmeentscheid muss durch die zuständige Hauptzentrale dokumentiert werden; sicherheitskritische, datenverlustgefährdende oder veröffentlichungsrelevante Prüfungen dürfen nicht stillschweigend übersprungen werden.

### 4.2 Umfassende automatisierte QA
Die Hauptzentrale definiert, führt aus und dokumentiert – soweit technisch möglich – automatisierte Tests für:
- Dateiintegrität, Dateinamen, Dimensionen, Transparenz/Alpha und unerwartete leere Dateien,
- Sprite-Sheets, Framezahl, Frame-Reihenfolge, Zuschnitt und Clipping,
- Metadaten und Konsistenz zwischen Manifest, Assets und Animationscode,
- Animationszustände, Frame-Timing, Loop-Ende und ungültige Zustände,
- Renderer-Verträge, fehlende Assets und Regressionen,
- Build-, Syntax- und vorhandene Unit-/Integrationstests.
Automatisierte Tests ergänzen die visuelle Prüfung; sie ersetzen sie nicht. Wo automatisierte Prüfung nicht sinnvoll oder technisch nicht verfügbar ist, wird eine manuelle Prüfung dokumentiert.

### 4.3 Browser-, Geräte- und Performanceprüfung
Isolierte Vorschauen werden mit den tatsächlichen Produktionsdateien geprüft. Der Browser-Test muss Start, Asset-Laden, Animationen, Skalierung und Fehlerfälle abdecken. iPhone-/Safari-Prüfungen sind separat auszuführen und zu dokumentieren. Ein simulierter mobiler Browser gilt nicht als erfolgreicher Test auf einem echten iPhone. Performanceberichte sollen mindestens beobachtete Bildrate/Framezeiten, relevante Gerätekonfiguration und bekannte Einschränkungen nennen.

### 4.4 QA-Bericht und Fehlerbehandlung
Jeder Bericht unterscheidet klar zwischen **Bestanden**, **Fehlgeschlagen**, **Nicht geprüft** und **Blockiert**. Er nennt Testumgebung, betroffene Commit-/Asset-Version, Reproduktionsschritte für Fehler und verantwortliche nächste Aktion. Fehlgeschlagene Pflichtprüfungen dürfen nicht als bestanden ausgegeben werden.

## 5. Branches, Pull Requests, Zuständigkeiten und Merges

### 5.1 Verbindliche Branches und Pull Requests
Arbeiten erfolgen in passenden Feature-/Fach-Branches. Änderungen werden über Pull Requests nachvollziehbar zur Prüfung gestellt. `main` ist die stabile gemeinsame Spielbasis und darf nicht für laufende Experimente oder unfertige visuelle Arbeiten verwendet werden. Fach-Chats übergeben über ihren eigenen Branch/PR; sie integrieren ihre Assets nicht eigenständig in `main`.

### 5.2 Weitreichende technische Vollmacht der Hauptzentrale
Die Hauptzentrale darf innerhalb ihrer technischen Zuständigkeit Architekturentscheidungen treffen, Fehler beheben, Tests ergänzen, technische Refactorings durchführen und Integrationen koordinieren. Diese Vollmacht ist an die Projektvision, freigegebene Designs, die 1:1-Regel, QA-Pflichten und Release-Regeln gebunden. Sie erlaubt keine eigenmächtige Änderung der Spielvision, keine unfreigegebene stilistische Änderung und keine Live-Veröffentlichung ohne Freigabe des Game Directors.

### 5.3 Eigenständige Merges nach bestandener QA
Die Hauptzentrale darf passende Pull Requests nach bestandener QA, geklärten Konflikten und vorliegenden erforderlichen Freigaben eigenständig in `main` mergen. Vor dem Merge werden Umfang, betroffene Dateien, Testresultate, bekannte Probleme und Rückfallmöglichkeit geprüft. Ein Merge ist keine Live-Freigabe. Pflichtprüfungen dürfen nicht wegen Zeitdrucks umgangen werden. Nicht bestandene Checks blockieren den Merge, sofern die Hauptzentrale keinen zulässigen, dokumentierten Ausnahmeentscheid treffen kann; eine erforderliche Designfreigabe kann nicht technisch ersetzt werden.

### 5.4 Fachübergreifende Änderungen
Gemeinsame Gameplay-Dateien, zentrale Schnittstellen, Balancing, KI, Hitboxen und Spawnlogik liegen in der Zuständigkeit der Hauptzentrale. Fach-Chats melden notwendige Änderungen über Issues/PR-Kommentare und liefern Integrationshinweise, statt diese Bereiche ohne Auftrag selbst zu verändern.

## 6. Staging, Playtests und Live-Veröffentlichungen

### 6.1 Staging wird von der Hauptzentrale verwaltet
Die Hauptzentrale verwaltet eine von Live getrennte Testumgebung. Staging dient der Prüfung integrierter Änderungen und darf unfertige Inhalte enthalten, sofern diese klar als Teststand gekennzeichnet sind. Staging muss unabhängig von Live aktualisiert und zurückgesetzt werden können. Die technische Pipeline ist so zu konfigurieren, dass ein normaler Merge nicht unkontrolliert als Live-Freigabe behandelt wird.

### 6.2 Playtests bei wichtigen Meilensteinen
Der Game Director erhält eine spielbare Testversion bei wichtigen Meilensteinen, insbesondere beim Krieger-Qualitätsprototyp, bei grundlegenden Änderungen am Rendering, bei wesentlichen Gameplay-Meilensteinen und vor relevanten Releases. Die Testübergabe nennt Build/Commit, enthaltene Änderungen, bekannte Probleme, Testziele und Rückmeldungsweg. Der Game Director muss nicht jeden Kleinschritt testen; seine Zeit wird auf entscheidungsrelevante Versionen konzentriert.

### 6.3 Live-Freigabe und Notfall-Rollback
Reguläre Live-Veröffentlichungen benötigen die ausdrückliche Freigabe des Game Directors. Die Hauptzentrale darf bei kritischen Live-Fehlern auf die letzte nachweislich funktionierende und bereits freigegebene Version zurückrollen. Sie informiert den Game Director umgehend, dokumentiert Ursache und betroffene Version und überprüft die Wiederherstellung. Ein Notfall-Rollback ist keine allgemeine Erlaubnis für andere ungeprüfte Live-Änderungen.

### 6.4 Trennung von Merge und Release
Merge, Staging-Deployment und Live-Deployment sind getrennte Vorgänge. Der tatsächliche Workflow und die erforderlichen Freigaben müssen dokumentiert und technisch verifiziert werden. Ein automatischer Deployment-Workflow, der bei Push auf `main` Live aktualisiert, ist mit dieser Regel nicht vereinbar, solange er nicht durch eine wirksame Freigabesperre oder eine getrennte Deployment-Strategie abgesichert ist.

## 7. Entwicklungsdashboard, Projektübersicht und Berichte

### 7.1 GitHub als Datenquelle, Dashboard im Chat
GitHub ist die Quelle für Branches, Commits, PRs, Issues, Tests und dokumentierte Statuswerte. Die Hauptzentrale stellt auf Anfrage im Chat ein verständliches Entwicklungsdashboard bereit, das die wichtigen Fakten bündelt: Gesamtstatus, wichtige Änderungen, Blocker, Freigaben, Testversionen und nächste Schritte. Das Dashboard darf nur verifizierte Daten als Tatsachen ausgeben und muss fehlende Informationen kenntlich machen.

### 7.2 Intelligentes Update mit vollständiger Prüfung
Bei der Anfrage **„ECLIPSE Update“** prüft die Hauptzentrale die verfügbaren relevanten GitHub-Daten und berichtet zuerst:
1. wichtige Änderungen seit dem letzten dokumentierten Stand,
2. kritische Fehler und Blocker,
3. notwendige Entscheidungen oder Freigaben des Game Directors,
4. Status wichtiger Testversionen und Releases,
5. nächste konkrete Schritte.
Auf Wunsch folgt ein vollständiger Projektbericht mit Fachbereichen, offenen PRs, QA-Ergebnissen und technischen Risiken. Der Bericht unterscheidet tatsächliche Änderungen von unverändertem Status und nicht verfügbaren Daten.

### 7.3 Nur wichtige automatische Meldungen
Automatische Benachrichtigungen an den Game Director beschränken sich auf wichtige Ereignisse: fertige spielbare Testversionen, kritische Fehler, notwendige Freigaben, bedeutende Meilensteine und relevante Risiken. Routinemässige Commit-Meldungen und Kleinstfortschritte werden nicht einzeln gesendet. Die Einrichtung gilt erst nach dokumentierter technischer Prüfung als aktiv.

## 8. Verbindlicher Arbeitsplan für den Grafik-Neustart

### 8.1 Kontrollierter Parallelprototyp
Das bestehende Spiel bleibt erhalten. Eine neue Rendering-/Animationsgrundlage wird zunächst getrennt und isoliert aufgebaut. Es werden weder bestehende Spielsysteme gelöscht noch `main` oder Live für Experimente verwendet. Eine Engine-Änderung wird erst nach einer dokumentierten technischen Begründung beschlossen.

### 8.2 Reihenfolge
1. Bestehenden Stand und wiederverwendbare Systeme sichern und dokumentieren.
2. Freigegebene Krieger-Originaldateien, Metadaten und Ankerpunkte verifizieren.
3. Isoliertes Rendering-Labor und modularen Animationskern erstellen.
4. Originaldateien 1:1 darstellen und Animationen, Effekte, Pixelausrichtung und Skalierung prüfen.
5. Automatisierte Tests sowie Browser- und echte iPhone-Prüfung durchführen, soweit verfügbar.
6. Dem Game Director eine separate spielbare Staging-Version mit QA-Bericht bereitstellen.
7. Erst nach ausdrücklicher Freigabe über Integration und Übertragung des Standards auf weitere Charaktere entscheiden.

### 8.3 Abnahmekriterien für den Krieger
Der Prototyp ist nicht produktionsbereit, bevor:
- die tatsächlich verwendeten Dateien und deren Freigabe eindeutig dokumentiert sind,
- Vorschau und Renderer dieselben Produktionsdateien verwenden,
- Transparenz, Schärfe, Abmessungen, Ankerpunkte und Animationen geprüft sind,
- die relevanten Animationen ohne unbeabsichtigtes Clipping oder instabile Proportionen funktionieren,
- automatisierte und manuelle QA-Ergebnisse dokumentiert sind,
- Desktop-Browser- und echte iPhone-Tests getrennt ausgewiesen sind,
- offene Probleme und nicht geprüfte Punkte transparent gemeldet wurden,
- der Game Director die visuelle Qualität ausdrücklich freigegeben hat.

## 9. Änderungen dieses Regelwerks

Dieses Dokument ist V1.0 zur Gesamtprüfung. Ergänzungen oder Änderungen werden nachvollziehbar über einen eigenen Branch und Pull Request vorgeschlagen. Die Hauptzentrale darf technische Widersprüche benennen und Verbesserungsvorschläge vorbereiten. Die verbindliche kreative und organisatorische Entscheidung liegt beim Game Director. Nach ausdrücklicher Freigabe wird die genehmigte Fassung als aktuelle Version gekennzeichnet; ältere Fassungen bleiben über die Git-Historie nachvollziehbar.

---

## Änderungs- und Umsetzungsstatus bei Veröffentlichung dieses Entwurfs

- Dieses Dokument enthält die konsolidierten Projektentscheidungen zur Prüfung.
- Das Hochladen dieses Entwurfs bedeutet noch keine endgültige Regelwerksfreigabe.
- Keine Gameplay-Dateien, Grafiken, Renderer oder Deployment-Einstellungen werden durch dieses Dokument verändert.
- Nächster Schritt nach Regelwerksfreigabe: Krieger-Originaldateien verifizieren und den isolierten Rendering-Prototyp in einem separaten Branch beginnen.
