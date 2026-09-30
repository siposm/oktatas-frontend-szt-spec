### GYAKORLÓ HÁZI FELADAT

Készítsétek el a követkető JS gyakorló feladatokat a tanultaknak megfelelően. A cél, hogy magabiztosan programozzatok a már megszerzett korábbi tárgyakon lévő tudással JS nyelven. Ehhez ismerni kell a JS nyelv szintaktikáját és sajátosságait, ez pedig gyakorlással érhető el.

A következő feladatokat külön függvényekkel (és ha kell, osztályokkal) készítsétek el és saját algoritmusokkal dolgozzatok, ne beépített tömb metódusokkal.

Az egyes feladatokat a nekik megfelelő, jelzett JS állományokba tegyétek, amiket aztán a HTML-be be lehet hivatkozni.

```html
<script src="numbers.js"></script>
<script src="strings.js"></script>
<script src="arrays.js"></script>
<script src="objects.js"></script>
```

#### Egyszerű feladat, számokkal (`numbers.js`)

- random egész számokkal töltsetek fel egy tömböt kézzel (30 elem)
- határozzátok meg a legkisebb elemet
- határozzátok meg a legnagyobb elemet
- rendezzétek a tömböt csökkenő / növekvő sorrendbe és írjátok ki a konzolra az első 5 elemet
- válogassátok le a 10-nél nagyobb és 20-nál kisebb számokat egy külön tömbbe
- távolítsátok el az ismétlődő elemeket a tömbből, az eredmény egy új tömbbe kerüljön

#### Komplex feladat, stringekkel (`strings.js`)

Az alábbi JSON tömböt feldolgozva, készítsétek el a következő feladatokat.

```js
let movies = [
	"Inception#Sci-Fi#2010#8",
	"The Godfather#Bűnügyi#1972#9",
	"Interstellar#Sci-Fi#2014#8",
	"The Dark Knight#Akció#2008#9",
	"Pulp Fiction#Bűnügyi#1994#8",
	"Parasite#Dráma#2019#8",
	"Gladiator#Történelmi#2000#8"
]
```

- Van-e 20 évnél régebbi film (ha igen, melyik az)?
- Mennyi a filmek átlagértékelése?
- Melyik a leghosszabb című film?
- Mely filmek azok amelyek X stílussal rendelkeznek (az X a függvény paramétere legyen, pl. "Sci-Fi")?
- A 2. legmagasabb értékelésű filmmel egyforma értékeléssel rendelkező filmeknek, mi az átlagos évjárata?

#### Komplex feladat, tömbök tömbjével (`arrays.js`)

Az alábbi JSON tömböt feldolgovza, készítsétek el a következő feladatokat.

```js
let temperatures = [
	[
		"Budapest",
		[2, 4, 9, 15, 20, 24, 27, 26, 21, 15, 8, 3]
	],
	[
		"Vienna",
		[1, 3, 8, 14, 19, 23, 26, 25, 20, 14, 7, 2]
	],
	[
		"Prague",
		[0, 2, 7, 13, 18, 22, 25, 24, 19, 13, 6, 1]
	],
	[
		"Rome",
		[8, 9, 12, 16, 21, 25, 28, 28, 24, 19, 14, 10]
	],
	[
		"Berlin",
		[1, 3, 7, 13, 18, 22, 24, 24, 19, 13, 7, 3]
	]
]
```
- Írjátok ki a konzolra az adatokat a következő formában, példa:
    + Budapest (Éves átlag: x)
    	+ Január: 2
    	+ Február: 4
    	+ Március: 9
    	+ ... egészen decemberig
- Melyik városban volt a legmagasabb júliusi hőmérséklet?
- Mennyi Budapest éves átlaghőmérséklete?
- Mely városokban volt legalább 3 olyan hónap, amikor a hőmérséklet meghaladta a 25 °C-ot?
- Melyik városban volt a legnagyobb különbség az éves minimum és maximum hőmérséklet között?
- Készíts függvényt, amely paraméterként kap egy városnevet, és visszaadja, hány hónapban volt 20 °C felett az átlaghőmérséklet.

#### Komplex feladat, objektumokkal (`objects.js`)

Az alábbi JSON tömböt feldolgozva, készítsétek el a következő feladatokat.

```js
let cars = [
	{
		brand: "BMW",
		model: "M3",
		year: 2022,
		extras: ["Bőrülés", "Navigáció", "Tolatókamera"]
	},
	{
		brand: "Audi",
		model: "RS6",
		year: 2021,
		extras: ["Panorámatető", "Adaptív tempomat", "Ülésfűtés"]
	},
	{
		brand: "Mercedes",
		model: "C63 AMG",
		year: 2023,
		extras: ["Sportülés", "360° kamera", "Head-up display"]
	},
	{
		brand: "Ford",
		model: "Mustang",
		year: 2020,
		extras: ["Bőrülés", "Apple CarPlay", "Sport kipufogó"]
	}
]
```

- Van-e 5 évnél régebbi autó (ha igen, melyik/melyek azok)?
- Mennyi az autók átlagos évjárata?
- Melyik autónak a leghosszabb a modellneve?
- Mely autók rendelkeznek X extrával (az X a függvény paramétere legyen, pl. "Bőrülés")?
- Melyik márkából van a legtöbb autó?
- Hány különböző extra szerepel összesen az autók között?
- Melyik autónak van a legtöbb extrája?
- Adjuk vissza azoknak az autóknak a márkáját és modelljét, amelyek legalább 3 extrával rendelkeznek?
- Mely extrák fordulnak elő egynél több autónál?
- A 2. legrégebbi évjárattal megegyező évjáratú autóknak mennyi az átlagos extraszámuk?
- A cars tömböt bejárva, a meglévő névtelen objektumokból hozzatok létre Car típusú objektumot (ehhez pedig a szükséges Car osztályt is implementáljátok).




