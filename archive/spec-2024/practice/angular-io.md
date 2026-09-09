# Angular gyakorló feladat: I/O kezelés

Készíts egy Angular alkalmazást, amely egy zeneszám-listát jelenít meg. Ha a felhasználó rákattint egy listában szereplő dalra, megjelennek annak részletei egy másik komponensben.

Készítsd el a következő szolgáltatást és komponenseket.

- `SongService` - szolgáltatás ami API-ról hívja és adatfolyamként adja vissza a zeneszámokat
- `AppComponent` - a szülő komponens, amely összekapcsolja a két gyereket  
- `SongListComponent` - a zeneszámok listáját jeleníti meg  
- `SongDetailComponent` - a kiválasztott zeneszám adatait mutatja

A `SongListComponent` a szolgáltatáson keresztül kérje el, vagy a szülő komponenstől kapja meg bemenetként és jelenítse meg a szám címét listában.

Ha a felhasználó rákattint egy címre:

- az esemény kimenetként továbbítódjon a szülő felé
- a szülő elmenti a kiválasztott dalt egy `selectedSong` változóba
- a `SongDetailComponent` bemenetként megkapja a kiválasztott dalt, és megjeleníti annak adatait
- ha nincs kiválasztott dal, a részletező jelenítsen meg egy üzenetet: "Nincs kiválasztott dal."
