### GYAKORLÓ HÁZI FELADAT

Készítsétek el a követkető JS gyakorló feladatokat a tanultaknak megfelelően. A cél, hogy magabiztosan programozzatok a már megszerzett korábbi tárgyakon lévő tudással JS nyelven. Ehhez ismerni kell a JS nyelv szintaktikáját és sajátosságait, ez pedig gyakorlással érhető el.

A következő feladatokat külön függvényekkel (és ha kell, osztályokkal) készítsétek el és saját algoritmusokkal dolgozzatok, ne beépített tömb metódusokkal.

Az egyes feladatokat a nekik megfelelő, jelzett JS állományokba tegyétek, amiket aztán a HTML-be be lehet hivatkozni.

#### Egyszerű feladat, számokkal (`numbers.js`)

- random egész számokkal töltsetek fel egy tömböt (30 elem)
- határozzátok meg a legkisebb elemet
- határozzátok meg a legnagyobb elemet
- rendezzétek a tömböt csökkenő / növekvő sorrendbe és írjátok ki a konzolra az első 5 elemet
- válogassátok le a 10-nél nagyobb és 20-nál kisebb számokat egy külön tömbbe
- távolítsátok el az ismétlődő elemeket a tömbből, az eredmény egy új tömbbe kerüljön

#### Komplex feladat, stringekkel (`string.js`)

Az alábbi JSON tömböt feldolgoza, készítsétek el a következő feladatokat.

```json
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

- van-e 20 évnél régebbi film (ha igen, melyik az)
- mennyi a filmek átlagértékelése
- melyik a leghosszabb című film
- mely filmek azok amelyek X stílussal rendelkeznek (az X a függvény paramétere legyen, pl. "Sci-Fi")
- a 2. legmagasabb értékelésű filmmel egyforma értékeléssel rendelkező filmeknek, mi az átlagos évjárata

#### Komplex feladat, objektumokkal (`objects.js`)

Az alábbi JSON tömböt feldolgoza, készítsétek el a következő feladatokat.

```json
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

- van-e 5 évnél régebbi autó (ha igen, melyik/melyek azok)
- mennyi az autók átlagos évjárata
- melyik autónak a leghosszabb a modellneve
- mely autók rendelkeznek X extrával (az X a függvény paramétere legyen, pl. "Bőrülés")
- melyik márkából van a legtöbb autó
- hány különböző extra szerepel összesen az autók között
- melyik autónak van a legtöbb extrája
- adjuk vissza azoknak az autóknak a márkáját és modelljét, amelyek legalább 3 extrával rendelkeznek
- mely extrák fordulnak elő egynél több autónál
- a 2. legrégebbi évjárattal megegyező évjáratú autóknak mennyi az átlagos extraszámuk
- a cars tömböt bejárva, a meglévő névtelejn objektumokból hozzatok létre Car típusú objektumot (ehhez pedig a szükséges Car osztályt is implementáljátok)





