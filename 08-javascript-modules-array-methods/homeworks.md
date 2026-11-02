### GYAKORLÓ HÁZI FELADAT

Készítsétek el a követkető JS gyakorló feladatokat a tanultaknak megfelelően, a lent található adatforrásokon.

#### Tömbfüggvények

- Készíts tömböt a 10 és 25 közötti számokból!
- Számítsd ki a páratlan számok összegét!
- Határozd meg a 20 feletti számok átlagát!
- Keresd meg a második legnagyobb különböző számot!
- Határozd meg, hány hallgató kapott 5-öst!
- Keresd meg a legidősebb aktív hallgatót!
- Készíts tömböt a hallgatók neveiből nagybetűsen!
- Rendezd a hallgatókat először érdemjegy szerint csökkenően, azonos jegy esetén pedig név szerint!
- Vizsgáld meg, hogy minden inaktív hallgatósikeresen teljesített-e!
- Készíts egy objektumot, amely az aktív és inaktív hallgatók számát tartalmazza!

#### Modulok

A fentebbi műveleteket a gyakorlás kedvéért szervezzétek át külön fájlokba, modulokként felhasználva a következő felbontás szerint:
- `data.js` -> adatok forrása
- `number-utils.js` -> számokkal kapcsolatos műveletek
- `student-utils.js` -> hallgatókkal kapcsolatos műveletek
- `app.js` -> alkalmazás belépési pontja

#### Adatforrások

```js
const numbers = [12, 5, 8, 21, 3, 16, 9, 30, 7, 14, 25, 6]

const students = [
	{ id: 1, name: "Anna", age: 21, grade: 5, active: true },
	{ id: 2, name: "Béla", age: 24, grade: 3, active: true },
	{ id: 3, name: "Csilla", age: 20, grade: 4, active: false },
	{ id: 4, name: "Dávid", age: 23, grade: 2, active: true },
	{ id: 5, name: "Eszter", age: 22, grade: 5, active: true },
	{ id: 6, name: "Ferenc", age: 25, grade: 1, active: false },
	{ id: 7, name: "Gábor", age: 19, grade: 4, active: true },
	{ id: 8, name: "Hanna", age: 22, grade: 3, active: false }
]
```