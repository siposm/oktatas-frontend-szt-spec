# Angular gyakorló komplex feladat

Egészítsd ki a zeneszámokhoz tartozó backendet további CRUD és nonCRUD funkciókkal (utóbbi a statisztikákhoz kell), valamint felhasználókezeléssel. A song modell legyen kiegészítve egy `link` tulajdonsággal, amin keresztül youtube vagy spotify linket lehet a számhoz megadni.

A backend legyen képes signalR segítségével jelezni, ha bármi történt (create, read, update, non crud stb.).

Készíts egy Angular alkalmazást amiben routing és komponensek segítségével lehessen aloldalak között navigálni.

Aloldalak:

- bejelentkezés (`login` komponens)
- listázás (`list` komponens)
- új elem létrehozás (`create` komponens)
- statisztika (`stats` komponens)

A komponensek szolgáltatáson keresztül kapják meg a szükséges adatokat (ha szükségük van rá), adatfolyamként.

Szolgáltatások:

- `songService` - zeneszámok CRUD és non-CRUD műveletei
- `authService` - authentikációval kapcsolatos műveletek
- `statService` - statisztikákkal kapcsolatos műveletek

## Működés

Az alkalmazásban található aloldalak mind reaktívan, valós időben frissüljenek a signalR-nek köszönhetően.

Szolgáltatásokat a megfelelő módon (DI + lifecycle hook) használja a komponensekből.

Az API-hoz, tokenhez és egyebekhez szükséges dolgokat környezeti változóban tárolja el.

### Új létrehozás

A megfelelő inputmezőkkel legyen lehetőség új elemet létrehozni. Sikeres létrehozás esetén navigáljon át a listázás felületre. A felületet reaktív formként hozza létre, ahol használjon szükséges validátorokat.

### Listázás

A listázás aloldalon az elemeket jelenítse meg saját kártya komponenseken. Ezekhez használjon `card` nevű komponenst. Egy lehetséges kis egyszerű html struktúra ehhez:

```html
<div class="song-card">
  <h3>Chill Vibes Song Title <span>150 likes</span></h3>
  <p>John Doe artist</p>
  <button>Play</button>
</div>
```

A szám címét és kedvelések számát (amely legyen bootstrap badge-ként kezelve) content projection-nel oldja meg.

Az előadót és a gombot/linket pedig inputok segítségével. A gombnyomást a szülő komponensben kezelje le output segítségével - miszerint nyíljon meg új lapfülön a szám linkje.

### Bejelentkezés

A bejelentkezés aloldalon lehessen user/pass segítségével belépni. A backend JWT-t adjon vissza ha sikeres.

### Statisztika

A statisztikai aloldalon legyenek tetszőleges metrikák megjelenítve, ezeket a backend API-n keresztül a szolgáltatás streamként biztosítja a komponens felé.

#### JWT, auth guard

A statisztikai adatok lekéréséhez szükség van bejelentkezésre, a többi funkcióhoz nem. Ezzel összhangban a backend megfelelő API-jai csak tokennel együtt működjenek; illetve a frontend megfelelő komponensei ne legyenek elérhetők jogosulatlan felhasználók számára. Utóbbihoz használjon auth guard-ot.

#### Interceptor

Amely végpontokhoz token szükséges, azokat interceptor segítségével biztosítsa.

Hozz létre egy globális értesítőt, amelyet a HTTP Interceptor vezérel. Minden frontendes végponthívás feldolgozása után (siker vagy hiba) jelenjen meg a jobb felső sarokban egy fix pozíciójú üzenetdoboz, amely automatikusan eltűnik X másodperc után. Az értesítő csak akkor látszódjon, ha ténylegesen történt hívás és azt az interceptor már feldolgozta.

### Tesztelés

Készítsen teszteket a fentebbi funkciókhoz, minden komponens és service tartalmazzon legalább 2 db tesztet, lehetőleg értelmeset és ne egymás copypaste-jeit.
