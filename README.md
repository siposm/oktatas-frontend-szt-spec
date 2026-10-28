![banner](assets/banner.webp)

## Frontend fejlesztés - Szoftver specializáció BPROF

Ez a repository frontend fejlesztéshez kapcsolódó tananyagokat, példákat, gyakorlófeladatokat és kisebb projekteket tartalmaz. A fókusz főként a JavaScript, TypeScript, Angular és a kapcsolódó webes technológiák oktatásán van. A mappák többsége tematikusan vagy heti bontás szerint szervezett.

<br>

---

<br>

## 1. félév heti bontás

TTK: <https://nik.uni-obuda.hu/targyleirasok/wp-content/uploads/2026/06/UMFrontendFejlesztes_SiposMiklos-1.pdf>

| Hét | Témakör |
| --- | --- |
| 01. | [Féléves tematika, a web működése, HTML alapismeretek](#-01-hét--féléves-tematika-a-web-működése-html-alapismeretek) |
| 02. | [CSS ismeretek](#-02-hét--css-ismeretek) |
| 03. | [Bootstrap CSS keretrendszer](#-03-hét--bootstrap-css-keretrendszer) |
| 04. | [JavaScript 1.](#-04-hét--javascript-1) |
| 05. | [JavaScript 2.](#-05-hét--javascript-2) |
| 06. | [JavaScript 3.](#-06-hét--javascript-3) |
| 07. | [1. zárthelyi dolgozat](#-07-hét--1-zárthelyi-dolgozat) |
| 08. | [JavaScript 4.](#-08-hét--javascript-4) |
| 09. | [JavaScript 5.](#-09-hét--javascript-5) |
| 10. | [JavaScript 6.](#-10-hét--javascript-6) |
| 11. | [Rektori szünet – Konzultáció](#-11-hét--rektori-szünet--konzultáció) |
| 12. | [Rektori szünet – Konzultáció](#-12-hét--rektori-szünet--konzultáció) |
| 13. | [2. zárthelyi dolgozat](#-13-hét--2-zárthelyi-dolgozat) |
| 14. | [Pótló zárthelyi dolgozat](#-14-hét--pótló-zárthelyi-dolgozat) |

<br>

### 💻 01. hét – Féléves tematika, a web működése, HTML alapismeretek

A félév felépítésének és követelményeinek áttekintése után megismerjük a webfejlesztés alapfogalmait: frontend, backend és full-stack fejlesztés, a HTTP protokoll, valamint az internet és a hálózat alapvető működése. Ezt követően áttekintjük a HTML kialakulását és szerepét, a dokumentum alapstruktúráját, a fontosabb tageket és attribútumokat, listákat, hivatkozásokat, képeket, egymásba ágyazott elemeket, valamint a `<head>` elem és a metaadatok használatát.

**Gyakorlat:** egy statikus weboldalt készítünk, amely több aloldalból és azok közötti navigációból épül fel. Programozás közben áttekintjük a VSCode lehetőségeit és kiegészítőit, amik a fejlesztés menetét nagyban elősegítik.

### 💻 02. hét – CSS ismeretek

Megismerjük a CSS szerepét és fejlődését, a stílusok HTML-hez kapcsolásának lehetőségeit, a gyakori CSS tulajdonságokat, selectorokat, valamint a `class` és `id` használatát. Foglalkozunk a modernebb CSS lehetőségekkel, a böngészőtámogatottsággal, reszponzív megjelenítéssel és media query-kkel, illetve az oldalstruktúra kialakításának lehetőségeivel.

**Gyakorlat:** a meglévő statikus oldalt CSS-sel egészítjük ki, kialakítva annak megjelenését és elrendezését.

### 💻 03. hét – Bootstrap CSS keretrendszer

Áttekintjük, miért és mikor érdemes CSS keretrendszert használni, milyen előnyei és hátrányai vannak, majd Bootstrap segítségével reszponzív felületeket építünk. A cél a kész stílusok, komponensek és layout-megoldások használatának megértése, illetve annak felismerése, hogyan gyorsíthatja egy keretrendszer a konzisztens és cross-browser felületek elkészítését.

**Gyakorlat:** a korábban elkészített statikus weboldalt Bootstrap használatával alakítjuk át reszponzív, strukturált felületté.

### 💻 04. hét – JavaScript 1.

Bevezetés a JavaScript nyelvbe: kialakulása és szerepe a weben, vanilla JavaScript és keretrendszerek viszonya, JavaScript és ECMAScript kapcsolata. Megismerjük a nyelv alapvető jellemzőit, a primitív és összetett típusokat, a `var`, `let`, `const` használatát, az alapvető operátorokat, valamint a `==` és `===` közötti különbséget. Szó esik a JavaScript többparadigmás jellegéről és a procedurális, objektumorientált és funkcionális programozási megközelítésről is.

**Gyakorlat:** alapvető programozási feladatokat és algoritmusokat valósítunk meg JavaScript nyelven.

### 💻 05. hét – JavaScript 2.

Megismerjük a DOM-ot (Document Object Model) mint a HTML dokumentum strukturált, fa alapú reprezentációját és a JavaScript–HTML közötti programozási interfészt. Megtanuljuk, hogyan érhetők el és módosíthatók HTML elemek JavaScriptből, hogyan működik az oldal betöltése és a DOM létrejötte, illetve megismerjük a legfontosabb DOM-lekérdezési műveleteket, például a `querySelector`, `getElementById` és `getElementsByClassName` használatát. A DOM-ot a kliensoldali program input/output felületeként is értelmezzük. Továbbá, bemutatásra kerül a hoisting jelenség a `var` változótípus esetén; az imperatív és deklaratív programozás; valamint az XSS támadás.

**Gyakorlat:** egy *Todo manager* alkalmazást készítünk, amely CRUD módon kezeli a teendőket. A felület kialakításához Bootstrapet használunk. A kód jobb áttekinthetősége és dokumentálhatósága érdekében JSDoc kommenteket használunk a függvények, paraméterek és visszatérési értékek leírására.

### 💻 06. hét – JavaScript 3.

Az eddig megismert gyakorlati és elméleti eszközökkel egy alkalmazottakat kezelő CRUD alkalmazást készítünk objektumorientált JavaScript használatával. A kódot `Logic` és `Renderer` osztályokra bontva választjuk szét az üzleti logikát és a felületkezelést.

**Gyakorlat:** `localStorage` alapú adattárolást, automatikus dark mode-ot, natív HTML templatinget (`<template>`), valamint Bootstrap modal ablakot használunk.

### 📝 07. hét – 1. zárthelyi dolgozat

Az eddig leadott tananyagrészek elméleti és gyakorlati ismereteinek számonkérése.

### 💻 08. hét – JavaScript 4.

Megismerjük a JavaScript hibakeresési lehetőségeit, a böngésző fejlesztői eszközeinek használatát, valamint a breakpointok, a call stack és a konzolos vizsgálat szerepét. Áttekintjük a JavaScript runtime környezet működését, a JavaScript engine feladatait, valamint azt, hogyan hajtódik végre a JavaScript kód a böngészőben.

**Gyakorlat:** hibás programok vizsgálata és javítása debugger segítségével, változók és végrehajtási állapotok követése, valamint a JavaScript futási folyamatának gyakorlati megfigyelése.

### 💻 09. hét – JavaScript 5.

Áttekintjük a JavaScript modulrendszer használatát, az `import` és `export` működését, valamint a kód több fájlra bontásának lehetőségeit, tekintettel a függőségek explicit módon történő kezelésére. Megismerjük a legfontosabb tömbműveleteket és magasabb rendű függvényeket, például a `map`, `filter`, `find`, `reduce`, `some` és `every` használatát. Foglalkozunk továbbá a progressive enhancement és graceful degradation alapelveivel.

**Gyakorlat:** meglévő JavaScript kód modulokra bontása, adathalmazok feldolgozása tömb metódusokkal.

### 💻 10. hét – JavaScript 6.

Megismerjük az aszinkron JavaScript alapjait, a `Promise` működését és állapotait, valamint az `async`/`await` szintaxist. Áttekintjük a Fetch API használatát HTTP kérések indítására, a válaszok feldolgozását, a JSON adatok kezelését és az alapvető hibakezelési lehetőségeket.

**Gyakorlat:** külső API-k meghívása `fetch()` használatával, aszinkron adatok feldolgozása `Promise` és `async`/`await` segítségével, valamint a kapott adatok megjelenítése a felületen.

### 🧠 11. hét – Rektori szünet – Konzultáció

Konzultáció, gyakorlás és egyéni kérdések megbeszélése a féléves tananyaghoz kapcsolódóan.

### 🧠 12. hét – Rektori szünet – Konzultáció

Konzultáció, gyakorlás és egyéni kérdések megbeszélése a féléves tananyaghoz kapcsolódóan.

### 📝 13. hét – 2. zárthelyi dolgozat

A második tananyagrész elméleti és gyakorlati ismereteinek számonkérése.

### 📝 14. hét – Pótló zárthelyi dolgozat

A félév során megírt zárthelyi dolgozatok pótlására, illetve a tantárgyi követelmények teljesítésére szolgáló alkalom.

<br>

---

<br>


**Sipos Miklós**\
<sipos.miklos@nik.uni-obuda.hu>\
<https://nik.siposm.hu/>