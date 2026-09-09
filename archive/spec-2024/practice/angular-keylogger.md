# Angular gyakorló feladat: Keylogger

Készítsen egy keylogger-szerű alkalmazást Angular segítségével.

Hozzon létre 2 db input mezőt:

- `username`, text típus
- `password`, password típus

Hozzon létre egy `User` osztályt, amibe pont ez a két tulajdonság foglaljon helyet, majd ezek legyenek adatkötve az inputmezőkhöz.

Bármelyik inputmezőbe is ír a felhasználó, **karakterleütésenként** írja ki `div`-be a tartalmat a következő formában:

```txt
Username: {ide kerül az aktuálisan beírt username értéke}
Password: {ide kerül az aktuálisan beírt password értéke}
```

Hozzon létre egy gombot, amelyre kattintva `alert()` ablak segítségével jelenítse meg a beírt tartalmakat, szerializált (`JSON.stringify()`) formában.

## Feltételes megjelenítés

A div elemben csak akkor jelenjen meg a tartalom, ha a két inputmező értéke nem üres! Ha üres, akkor az jelenjen meg, hogy "Még nincs beírt tartalom.".

## Class használat

Amennyiben a username hossza 5 vagy annál kevesebb, akkor a színe legyen piros, egyéb esetben zöld. Ehhez hozzon létre két saját osztályt (pl. wrong, good) és állítsa be ezeket.

Password esetén vizsgálja meg, hogy van-e legalább 8 karakter és van-e benne szám karakter és legalább egy speciális karakter (pl. @&#!%/=). Ha ezek teljesülnek akkor legyen zöld színű, egyéb esetben legyen piros színű.

## Localstorage bevezetés

Módosítsa úgy a feladatot, hogy localstorage-ba írja ki a tartalmat, a p tag-ek helyett.

Nyissa meg a developer tools nézetet és ellenőrizze, hogy localstorage-ban tényleg leütésenként frissül-e.

## Időbélyeg bevezetés

Egészítse ki a meglévő feladatot úgy, hogy a localstorage-ban tárolásnál nyomon lehessen követni, hogyan változott a beírás. Ehhez lássa el időbélyegekkel az adott mentés pillanatait (karakterleütések).

Miután a gombra rányomott a felhasználó, táblázatban jelenítse meg a beírt adatokat, időrendben, fentről lefelé. A táblázat csak a gombnyomást követően jelenjen meg, előtte ne legyen látható!

Egy minta, ehhez hasonlót szeretnénk látni localstorage-ban:

```json
[
    {
        "timestamp": "2025-04-14T08:21:34.123Z",
        "username": "a",
        "password": ""
    },
    {
        "timestamp": "2025-04-14T08:21:34.345Z",
        "username": "al",
        "password": ""
    },
    {
        "timestamp": "2025-04-14T08:21:34.567Z",
        "username": "ali",
        "password": ""
    },
    {
        "timestamp": "2025-04-14T08:21:36.101Z",
        "username": "ali",
        "password": "p"
    },
    {
        "timestamp": "2025-04-14T08:21:36.223Z",
        "username": "ali",
        "password": "pa"
    },
    {
        "timestamp": "2025-04-14T08:21:36.345Z",
        "username": "ali",
        "password": "pas"
    },
    {
        "timestamp": "2025-04-14T08:21:36.467Z",
        "username": "ali",
        "password": "pass"
    },
    {
        "timestamp": "2025-04-14T08:21:36.589Z",
        "username": "ali",
        "password": "pass1"
    }
]
```
