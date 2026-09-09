# Angular gyakorló feladat: Todo kezelő

Készítsen egy Todo alkalmazást Angular segítségével.

## Osztály

Egy `Todo` objektumot osztállyal repzentáljon, a következő tulajdonságokat felhasználva:

- `id: string`
- `author: string`
- `title: string`
- `content: string`
- `priority: number | null`
  - (null: nincs prioritás, 1: alacsony, 2: közepes, 3: magas prioritás)
- `urgent: boolean`

Az osztályban konstruktorral állítsa be, hogy létrejövéskor egy egyedi id generálódjon és állítsa is be saját magának az objektum.

## Megjelenítés

Vigyen fel seed adatokat a komponensen belül, hogy legyen mit megjeleníteni.

Jelenítse meg az objektumokat bootstrap táblázat segítségével, ahol minden oszlopban egy-egy tulajdonság foglaljon helyet.

A prioritásnál alkalmazzon kondícionális megjelenítést, miszerint:

- ha nincs prioritás akkor legyen üresen hagyva ez a táblázat cella
- 1-es prioritás esetén legyen szürke bootstrap badge 1 db felkiáltójellel
- 2-es prioritás esetén legyen narancssárga bootstrap badge 2 db felkiáltójellel
- 3-es prioritás esetén legyen piros bootstrap badge 3 db felkiáltójellel

*Felkiáltójelek helyett nyugodtan lehet használni pl. Bootstrap icon-okat.*

## CRUD

Valósítsa meg a CRUD műveleteket a komponensen belül metódusok segítségével.

### Létrehozás

Hozzon létre inputmezőket, amiket megfelelő adatkötéssel lásson el. Minden tulajdonsághoz legyen inputmező. Id-hoz értelemszerűen nincs szükség, viszont javasolt kitenni ellenőrzés szempontjából (tehát lássuk, hogy valóban létrejön-e az egyedi id). A legegyszerűbb mindent text formában kezelni, de próbáljon meg kísérletezni pl. legördülő listával a prioritás beállításához. Gombnyomás hatására a létrehozandó elemet adja hozzá az elemekhez.

### Olvasás

Ez már megtörtént korábban.

### Módosítás

A táblázatban valamilyen formában helyezzen el egy gombot, pl. a sorok végén, amire kattintva az elemet lehessen módosítani. Több megoldás is létezik, a feladat nem szabja meg, hogy pontosan hogyan kell megvalósítani. Egy lehetséges verzió, ha a kiválaszott elemet betölti a fentebbi inputmezőkbe. Ekkor megjelenhet egy új gomb "Módosítások mentése" szöveggel.

### Törlés

Az előző feladathoz hasonlóan legyen egy gomb, melyre kattintva a kiválasztott elem törlődik. Azonban a tennivalók (todo-k) esetében az is megfelelő, ha nem törli magát az elemet, hanem csak "késznek" jelöli. Ekkor pl. a táblázat sorát meg lehetne jelölni valamilyen formában. Érdemes a változást egy boolean változóval leképezni a Todo osztályban és ez alapján végezni a táblázatban a megjelenítést. Ezt az opciót választva viszont ne törlés legyen, hanem "Megjelölés késznek" például.

## Belépés

Egészítse ki a feladatot egy belépési rendszerrel, a következők szerint.

Hozzon létre két inputmezőt és egy gombot egy div-ben. Ez csak akkor legyen látható, ha még nem vagyunk bejelentkezve. Ha viszont igen, akkor ne legyen látható -- ezt kondícionális megjelenítéssel lehet beállítani.

Lehessen megadni username és password párost a belépéskor. Az egyszerűség kedvéért nincs adatbázis, sem backend ahonnan ezeket lehet validálni, csak lokális db, amit a localstorage-ban tudunk most megvalósítani.

Localstorage-ban tárolja el az alábbi user-pass kombókat:

- admin-admin
- root-toor
- user-user

Az oldalt módosítsa úgy, hogy amennyiben nem vagyunk belépve csak a belépési inputmezők látszódjanak. Gombnyomás hatására ellenőrizze, hogy a beírt adatok megfelelnek-e a localstorage-ban letároltak valamelyikével. Ha igen, akkor a rendszer léptessen be minket és jelenítse meg a todo-kat kezelő felületet. Valahogy el kell tárolni, hogy már 1x beléptünk sikeresen, ez pl. megtehető szintén localstorage-ból, így oldalfrissítéskor ebből kiolvasva nem kell újra és újra beírnunk az adatokat.

Készítse el a kijelentkezés részt is, aminek keretein belül hozza létre a gombot és a szükséges műveletvégzést, ami kitörli a localstorage beállítást.
