# Lifecycle hooks

| **Fázis** | **Metódus neve** | **Mikor fut le** | **Tipikus Példa** |
| --- | --- | --- | --- |
| **Creation** | `constructor` | Lefut, amikor Angular példányosítja a komponenst.  | Szolgáltatás injektálása, property-k alapértékre állítása.    |
| **Change Detection** | `ngOnInit`   | Egyszer fut le, miután az összes input inicializálva lett.   | Kezdeti adatbetöltés, API-hívás indítása, form alapállapotának felépítése, egyszeri inicializálás.    |
|  | `ngOnChanges` | Minden alkalommal lefut, amikor egy `@Input` értéke megváltozik (az első beállításkor is). | Input alapján belső állapot frissítése (pl. számított mező kiszámítása, log transform).   |
|  | `ngDoCheck`  | Minden change detection ciklusban lefut.   | Saját, optimalizált változásdetektáló logika írása (pl. nagy listák diffelése, teljesítmény-optimalizáció).  |
|  | `ngAfterContentInit`  | Egyszer fut, miután a projectált tartalom (`<ng-content>`) inicializálva lett.| Ellenőrzés, hogy a kötelező projected content tényleg bekerült-e (pl. slot-validáció).   |
|  | `ngAfterContentChecked` | Minden content change detection után lefut.  | Projectált tartalom figyelése, amikor belső logikát kell futtatni content-változáskor.   |
|  | `ngAfterViewInit`    | Egyszer fut, miután a komponens nézete és a gyerek komponensek nézete inicializálódott.  | DOM-méretek lekérése, 3rd-party UI lib inicializálása, `@ViewChild` komponens meghívása.  |
|  | `ngAfterViewChecked`  | Minden view change detection után lefut.   | Layout finomhangolása, animáció elindítása a DOM végleges állapota után. (Óvatosan használni, nehogy végtelen ciklust okozzon!) |
| **Rendering**    | `afterNextRender`    | Egyszer fut, amikor a teljes DOM render befejeződött. | Egyedi mérés vagy animáció, amihez a teljes oldalt készen kell látni (pl. scroll pozíció beállítása).|
|  | `afterEveryRender`   | Minden DOM render után lefut.    | Globális UI-szinkron (pl. sticky header pozíció frissítése minden render után).  |
| **Destruction**   | `ngOnDestroy` | Egyszer fut, mielőtt a komponens megsemmisül. | Subscribek leiratása, interval/timeouts leállítása, DOM események leválasztása.  |
