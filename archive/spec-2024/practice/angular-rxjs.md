# Angular gyakorló feladat: RxJS operátorok

## Backend

ASP.NET-ben készítsen egy backend-et, ahol API-n keresztül lehessen zeneszám (song) entitásokat lekérdezni (read all).

Egy zeneszám rendelkezzen a következőkkel:

- id
- artist
- title
- length
- likes

## Frontend

Készítsen egy Angular kliens alkalmazást, a következők mentén.

### Data service

Készítse el a megadott szolgáltatást, a következő metódusokkal. Minden metódus adatfolyamként adja vissza az entitásokat.

- `getRaw`: a lekérdezett elemeket módosítás nélkül továbbadja
- `getFiltered`: a lekérdezett elemeket szűrje like számok alapján (csak 10-nél többet kapottak érdekelnek), majd rendezze hossz alapján növekvő sorrendbe

### Raw component

Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást. A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (`getRaw`). A megjelenítéshez használjon async pipe-ot.

### Filtered component

Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást. A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (`getFiltered`). A megjelenítéshez használjon feliratkozást (subscribe).

### MoreFilters component

Készítse el a megadott nevű komponenst, ami DI segítségével húzza be a szolgáltatást. A megfelelő hookot használva vegye át a szolgáltatásból az elemeket (`getRaw`). Készítse el a követkető metódusokat, amelyek a már átvett zeneszámokat további feltételek mentén szűri / leválogatja RxJS operátorok felhasználásával.

- `getAverageLength`: kiszámítja mennyi az átlagos számhossz
- `getTitles`: csak a számok címeit adja vissza
- `getRandomSong`: egy random számot ad vissza
- `getFirstSong`: a legelső számot adja vissza

A komponens html részébe kösse ki a metódusokat, javasolt async pipe-ot használni.
