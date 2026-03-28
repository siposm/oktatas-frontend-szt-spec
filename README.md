## Frontend fejlesztés - Szoftver specializáció BPROF

Ez a repository frontend fejlesztéshez kapcsolódó tananyagokat, példákat, gyakorlófeladatokat és kisebb projekteket tartalmaz. A fókusz főként a JavaScript, TypeScript, Angular és a kapcsolódó webes technológiák oktatásán van. A mappák többsége tematikusan vagy heti bontás szerint szervezett.

<br>

---

<br>

## Mappák áttekintése

#### `angular/`

Angular alapú példák és mini projektek, az alapoktól a haladóbb témákig.

Tartalma többek között:

- **autentikációs példák**
  - `auth-login-jwt/` – JWT alapú bejelentkezési példa külön backend és frontend résszel
  - `auth-login-simple-token/` – egyszerű token alapú autentikációs példa
- **Angular alapfogalmak**
  - `basics-data-binding-forms/` – adatkötés és űrlapkezelés alapjai
  - `component-io/` – komponensek közötti kommunikáció input/output segítségével
  - `content-projection/` – content projection példák
  - `lifecycles/` – Angular lifecycle hook példák
  - `viewchild/` – `ViewChild` használati példák
  - `button-component/` – újrafelhasználható gomb komponens példa
- **reaktív működés és űrlapkezelés**
  - `reactive-form/` – reaktív űrlapok
  - `observables/` – observable alapú példák
  - `signalr-observables-interceptor/` – SignalR, observables és interceptor használata
- **tesztelés és alkalmazás példák**
  - `testing/` – Angular tesztelési példák
  - `devcrud/` – CRUD jellegű Angular alkalmazás példa
- **kiegészítő anyagok**
  - `materials/` – Angular témákhoz kapcsolódó képek és markdown jegyzetek
- `README.md` – Angular témakörök összefoglalója

---

#### `archive/`

Archivált, értékeléshez vagy féléves munkához kapcsolódó leírások.

Tartalma:

- `exam-01.md`
- `exam-02.md`
- `semester-project.md`

---

#### `css-preprocessor/`

CSS preprocesszorokhoz kapcsolódó példák és feladatok.

Tartalma:

- `01-intro/` – bevezető példa
- `02-refactoring/` – CSS refaktorálása preprocesszor használatával
- `03-sass/`
  - `01-sass-basics/`
  - `02-sass-advanced/`
- `04-less/`
  - `01-less-basics/`
  - `02-less-advanced/`

---

#### `html-01-02-03/`

Bevezető HTML és CSS példák.

Tartalma többek között:

- oldalstruktúra és alap HTML elemek
- `block-inline.html`
- `flexbox.html`
- `grid.html`
- `grid2.html`
- `kulso-css.html`
- `pages/` – egyszerű aloldalak
- `styles/` – közös stílusfájlok

---

#### `js-01/`

Alap JavaScript példák.

Tartalma:

- alap szintaxis és nyelvi elemek
- demó fájlok
- first-class function példák
- egyszerű HTML integráció

---

#### `js-02/`

Középhaladó JavaScript példák, főként böngészőoldali működésre és aszinkron programozásra fókuszálva.

Tartalma többek között:

- DOM kezelés
- eseménykezelés
- event bubbling és event delegation
- promise használat
- `fetch`
- timeout kezelés
- todo példa
- aszinkron működéssel kapcsolatos példák

---

#### `js-03/`

Haladóbb JavaScript példák és kisebb alkalmazások.

Tartalma többek között:

- `developer-crud/` – CRUD jellegű JavaScript alkalmazás
- `js-modules/` – JavaScript modulok használata
- `layered-api-crud-app/` – réteges felépítésű frontend CRUD alkalmazás API kapcsolattal
- `layering-minimal-example/` – minimális példa réteges szervezésre
- további témák:
  - tömbműveletek
  - imperatív vs deklaratív megközelítés
  - async/await
  - scope
  - XSS
  - event loop

---

#### `practice/`

Gyakorlófeladatok és feladatkiírások hallgatók számára.

Tartalma Angularhoz és frontend fejlesztéshez kapcsolódó feladatokat tartalmaz, például:

- API használat
- komponens kommunikáció
- login/autentikáció
- RxJS feladatok
- CRUD jellegű feladatok
- hash, localStorage és biztonsági témák
- Sass/Less feladatok

---

#### `typescript/`

TypeScript példák és kisebb projektek.

Tartalma:

- `basics/` – bevezető TypeScript példa, fordítással és alap szintaxissal
- `snake/` – TypeScript alapú snake projekt `src/` és `dist/` mappával

<br>

---

<br>

## 1. félév heti bontás

| Hét |  Témakör |
| --- | --- |
| 01. | Féléves tematika és menetrend ismertetése, HTML |
| 02. | CSS |
| 03. | CSS preprocesszorok - Sass, Less |
| 04. | Bootstrap keretrendszer |
| 05. | JavaScript 1. |
| 06. | JavaScript 2. |
| 07. | JavaScript 3. |
| 08. | 1. zárthelyi dolgozat (elmélet és gyakorlat) |
| 09. | TypeScript |
| 10. | Angular 1. |
| 11. | Angular 2. |
| 12. | Angular 3. |
| 13. | 2. zárthelyi dolgozat (elmélet és gyakorlat) |
| 14. | FF leadás, FF bemutatás, Pótló zárthelyi dolgozat |

<br>

---

<br>

## 2. félév heti bontás

| Hét |  Témakör |
| --- | --- |
| 01. | Féléves tematika és menetrend ismertetése, előző félév ismétlése |
| 02. | Komponensek haladó szintű felhasználása Angular keretrendszerben |
| 03. | Authentikáció használata és tokenek kezelése a kliensoldalon |
| 04. | Tesztelés, Reactive forms használata |
| 05. | HTTP kérések haladó szintű kezelése (interceptor, observable, async pipe, stateless) |
| 06. | Konzultáció |
| 07. | Rektori szünet |
| 08. | Zárthelyi dolgozat I. |
| 09. | Web security I. |
| 10. | Web security II. |
| 11. | Rektori szünet |
| 12. | Zárthelyi dolgozat II. |
| 13. | Konzultáció |
| 14. | Pótló zárthelyi dolgozat |

<br>

---

<br>

## TTK

- 1. félév: <https://nik.uni-obuda.hu/targyleirasok/tantargyak/frontend-fejlesztes/>
- 1. félév: <https://nik.uni-obuda.hu/targyleirasok/tantargyak/halado-szoftverfejlesztes-es-teszteles/>
