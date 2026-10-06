### GYAKORLÓ HÁZI FELADAT

Készítsétek el a követkető JS gyakorló feladatokat a tanultaknak megfelelően. A cél, hogy a korábban megszerzett JS programozási rutint felhasználva, a DOM-on keresztül a megjelenített HTML elemeket tudjátok létrehozni, lekérdezni, módosítani.

A következő feladatokat külön függvényekkel (és ha kell, osztályokkal) készítsétek el és saját algoritmusokkal dolgozzatok, ne beépített tömb metódusokkal.

A felhasznált osztályokhoz / függvényekhez használjatok JSDoc kommentezést, a kód átlátását segítendő.

Az alábbi HTML skeleton-t használjátok fel a feladatokhoz.

```html
<div>
  <!-- 1. feladat megoldásai ide jönnek -->
  <p id="1-result"></p>
  <hr />
  <!-- 2. feladat megoldásai ide jönnek -->
  <h4 id="student-name"></h4>
  <ul>
    <li id="neptun"></li>
    <li id="year"></li>
    <li id="credit"></li>
  </ul>
  <ul id="subjects"></ul>
  <hr />
  <!-- 3. feladat megoldásai ide jönnek -->
  <p id="student-list"></p>
	<hr />
	<!-- 5. feladat megoldásai ide jönnek -->
  <div id="courses"></div>
</div>
```

#### Első feladat

- egy input mezőn keresztül, a felhasználótól számokat tudunk bekérni, vesszőkkel elválasztva (pl. `10,2,33,5`)
- gombnyomás hatására olvassuk ki az input értékét, daraboljuk szét számokra, konvertáljuk át őket numerikus értékekké
- csak 5 számot tudunk elfogadni, ha többet ad meg a felhasználó, akkor csak az első 5 db-ot vegye figyelembe
- válogassátok le a 10-nél nagyobb és 20-nál kisebb számokat egy külön tömbbe
- a kiválogatott számokat írjuk be az erre jelzett HTML elembe (`<p id="1-result"></p>`)

#### Második feladat

Az alábbi JSON tömböt feldolgozva, készítsük el a következő feladatokat.

```js
let students = [
  {
    name: "Kovács Anna",
    neptun: "ABC123",
    enrollmentYear: 2022,
    completedCredits: 86,
    completedSubjects: ["Programozás I.", "Adatbázisok", "Webprogramozás"]
  },
  {
    name: "Nagy Péter",
    neptun: "DEF456",
    enrollmentYear: 2021,
    completedCredits: 132,
    completedSubjects: [
      "Programozás I.",
      "Programozás II.",
      "Adatbázisok",
      "Szoftvertervezés"
    ]
  },
  {
    name: "Szabó Dóra",
    neptun: "GHI789",
    enrollmentYear: 2023,
    completedCredits: 54,
    completedSubjects: ["Programozás I.", "Matematika I."]
  },
  {
    name: "Tóth Bence",
    neptun: "JKL012",
    enrollmentYear: 2022,
    completedCredits: 98,
    completedSubjects: [
      "Programozás I.",
      "Programozás II.",
      "Webprogramozás",
      "Számítógép-hálózatok"
    ]
  }
]
```

- a felhasználó egy input mezőn keresztül, be tud írni egy hallgatói nevet, vagy neptun kódot
- gombnyomás hatására az adott hallgatót kikeresve, annak adatai jelenjenek meg a HTML-en a neki megfelelő helyeken (lásd megadott skeleton)

#### Harmadik feladat

- a második feladatban megadott tömböt feldolgozva, a hallgatók adatit jelenítsük meg a cél HTML elemben
- ehhez tetszőleges tag-eket és formázást lehet felhasználni, a cél, hogy minden hallgató minden adata megjelenjen

#### Negyedik feladat

- hozzon létre további input mezőket, amiken keresztül új hallgatót tudunk felvinni a rendszerbe
- minden tulajdonsághoz 1 dedikált input tartozik
- a tárgyakat megfelelő, ha 1 inputon keresztül kérjük be, viszont @ karakterrel kell őket elválasztani
- gombnyomás hatására a beírt adatokat dolgozza fel és helyezze el a létrehozott új elemet a tömbben
- új elem létrehozását követően, a korábbi "listás nézet" frissüljön

#### Ötödik feladat

Az alábbi tömböt felhasználva, listák listájával jelenítse meg a hallgatókat.

```js
let classes = [
  ["Alexandra Kovács", "Zoltán Szabó", "Eszter Nagy", "Bence Tóth", "Dóra Molnár"],
  ["Viktória Kiss", "Gábor Varga", "Dóra Molnár"],
  ["Viktória Kiss", "Gábor Varga", "Petra Bálint"],
  ["Máté Farkas", "Petra Bálint", "László Horváth"]
]
```

Az egyes sorok egy-egy tárgyra járó diákokat reprezentálnak. A HTML-en azt szeretnénk látni, hogy:

```txt
  1. TÁRGY:
    * Alexandra Kovács
    * Zoltán Szabó
    * Eszter Nagy
    * Bence Tóth
    * Dóra Molnár
  2. TÁRGY:
    ...
```

Amikor egy adott hallgató nevére kattintunk egérrel, akkor az legyen megjelölve félkövér stílussal és kék színnel. CSS-t felhasználva állítsa be, hogy a hallgató neve előtt egy tetszőleges emoji jelenjen meg.

#### Hatodik házi feladat

Az órai TODO manager feladatot bővíteni a következők szerint:
- a TODO-k legyenek külön megjelenítve kész / nem kész státusz alapján (pl. két táblázatban)
- üres táblázat ne magában álljon, hanem valamilyen szöveg jelenjen meg, hogy "Nincs még elem" vagy "Mindennel készen vagy :)"
- a táblázat felett legyen egy-egy számláló, ami mutatja, hogy hány teendő van összesen és ebből hány van készen