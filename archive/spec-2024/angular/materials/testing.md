# Teszteléssel kapcsolatos ismeretek

A szoftvertesztelés (software testing) a **verifikáció és validáció** folyamata, amelynek célja annak biztosítása, hogy a szoftver hibamentes legyen, megfeleljen a műszaki követelményeknek és használói igényeknek.

- **Verifikáció**: "A terméket jól építjük-e?" — belső működés, követelmények szerinti megfelelés.
- **Validáció**: "A megfelelő terméket építjük-e?" — felhasználói igények teljesülése.

## Miért tesztelünk? (Célok)

A szoftvertesztelés célja a hibák feltárása, a minőség javítása és annak biztosítása, hogy a rendszer megfeleljen a követelményeknek.

- Hibák korai felfedezése → olcsóbb javítás
- Magasabb szoftverminőség
- Jobb felhasználói elégedettség
- Megbízhatóság, biztonság
- Idő- és költségmegtakarítás
- Skálázhatóság felismerése

## Teszt típusok felosztása I

### Manuális tesztelés

- A tesztelő személyesen hajtja végre a teszteket (pl. kattintások, API-hívások).
- Időigényes, drága, és hajlamos a **emberi hibákra** (pl. elgépelés, lépések kihagyása).

### Automatizált tesztelés

- Előre megírt tesztszkriptek alapján **gépi futtatás**.
- Lehet egyszerű (egy metódus tesztelése) vagy összetett (UI műveletsor ellenőrzése).
- **Megbízhatóbb és skálázhatóbb**, de a minőség a szkriptek megírásán múlik.
- Alapvető része a **folyamatos integrációnak (CI)** és a **folyamatos szállításnak (CD)**.

## Teszt típusok felosztása II

### White Box Testing

- A tesztelő **ismeri a kód belső működését**.  
- A cél: a program logikájának, vezérlési útvonalainak, ágai és ciklusai helyességének vizsgálata.  
- Jellemzően a fejlesztők végzik (pl. unit tesztek).

### Black Box Testing

- A tesztelő **nem ismeri a belső működést**, csak a bemeneteket és a kimeneteket vizsgálja.
- A cél: a rendszer megfelel-e a specifikációnak.
- Példák: funkcionális tesztelés, rendszertesztelés.

### Grey Box Testing

- **Köztes megközelítés**: a tesztelő részben ismeri a belső felépítést.
- Célja: a belső logika részleges ismerete alapján hatékonyabb tesztesetek készítése.
- Gyakran használják integrációs teszteknél, biztonsági vizsgálatoknál.

## Teszt típusok felosztása III

### Funkcionális tesztelés

- A rendszer **funkcióit** vizsgálja a specifikáció alapján.
- A kérdés: **"A program azt csinálja, amit kell?"**
- Példák:
  - **Unit Testing** (Egységtesztelés) – modulok külön tesztelése
  - **Integration Testing** (Integrációs tesztelés) – modulok együttműködésének vizsgálata
  - **System Testing** (Rendszertesztelés) – teljes rendszer ellenőrzése
  - **Acceptance Testing** (Felhasználói elfogadási teszt) – megfelel-e az ügyféligényeknek
  - **E2E Testing** (End-to-End tesztelés) – valós felhasználói folyamatok teljes lefutása
  - **Smoke Testing** (Alapfunkciók gyors ellenőrzése) – annak vizsgálata, hogy érdemes-e további tesztelést futtatni

### Nem-funkcionális tesztelés

- A rendszer **minőségi jellemzőit** vizsgálja (nem a konkrét funkciókat).
- A kérdés: **"Mennyire jól működik a program?"**
- Példák:
  - **Performance Testing** (Teljesítménytesztelés) – mennyire gyors a rendszer normál körülmények között
  - **Load/Stress Testing** (Terheléses tesztelés) – hogyan viselkedik nagy terhelés, sok felhasználó alatt
  - **Usability Testing** (Használhatósági tesztelés) – mennyire könnyen és kényelmesen használható a felhasználók számára
  - **Compatibility Testing** (Kompatibilitási tesztelés) – működik-e különböző böngészőkben, eszközökön, operációs rendszereken
  - **Security Testing** (Biztonsági tesztelés) – mennyire védett a rendszer a támadásokkal és sebezhetőségekkel szemben

## Mit érdemes tesztelni Angularban?

- **Komponensek**: a bemenetek (Input) hatása a működésre, a kimenetek (Output) megfelelő visszajelzése, a DOM változásai, a sablonlogika működése és a hibás állapotok kezelése.
- **Szolgáltatások**: az üzleti logika helyessége, az adatok tárolása vagy gyorsítótárazása (cache), valamint a hibás vagy szélsőséges esetek kezelése.
- **Pipe-ok és direktívák**: a transzformációk pontossága, illetve a host elemre gyakorolt hatások (attribútumok, események) működése.
- **Űrlapok**: a validációk helyessége, a kezdeti értékek beállítása, a hibák megjelenítése és a felhasználói interakciók hatása az állapotra.
- **Routing**: a guardok működése, a resolverek által szolgáltatott adatok, az átirányítások, valamint a paraméterek kezelése.
- **RxJS logika**: az aszinkron adatfolyamok viselkedése, az időzítések működése, a hibakezelés és az újrapróbálkozási (retry) logikák, szükség esetén márka-teszteléssel.

## Tesztelési elvek és jó gyakorlatok

- **Viselkedés-orientált tesztelés (Behavior-Driven)**
  - A *"mit"* teszteld, ne a *"hogyan"*-t.
  - A felhasználói szemszögből gondolkodj: a komponens viselkedését figyeld, ne a belső implementációt (pl. privát mezők).
  - Így a tesztjeid kevésbé lesznek törékenyek a kód átalakításakor.

- **AAA struktúra (Arrange – Act – Assert)**
  - **Arrange**: állítsd elő a szükséges környezetet (pl. komponens inicializálása, mock objektumok).
  - **Act**: hajtsd végre a vizsgált műveletet.
  - **Assert**: ellenőrizd az eredményt egyértelmű elvárásokkal.
  - Cél: a teszt jól olvasható és önmagyarázó legyen.

- **Kicsi és fókuszált tesztek**
  - Egy teszt csak **egy elvárást** ellenőrizzen.
  - Ha több különböző dologra vagy kíváncsi, bontsd szét több tesztre.
  - Könnyebb lesz megérteni a hibát, ha pontosan tudod, mi bukott el.

- **Gyorsan futó tesztek**
  - A jó tesztek másodpercek alatt lefutnak.
  - Gyors visszajelzést adnak, így bátran futtathatók gyakran (akár minden mentésnél vagy CI pipeline-ban).

- **Független tesztek**
  - A tesztek **ne függjenek egymás sorrendjétől vagy állapotától**.
  - Mindegyik önállóan is lefuthasson, így stabilabb a teljes tesztkészlet.

- **Olvasható, karbantartható tesztek**
  - A tesztek is kód: legyenek érthetőek, beszédes nevűek, és kövessék a clean code elveket.

## Kód lefedettség

A test coverage azt mutatja meg, hogy a kód milyen arányban lett lefedve tesztekkel (pl. sorok, ágak, függvények szintjén). Fontos mérőszám, mert segít azonosítani a teszteletlen részeket, de önmagában nem garantálja a jó minőségű teszteket. Magas lefedettség mellett is lehetnek hibák, ha a tesztek csak "átfutnak" a kódon, de nem ellenőrzik a helyes viselkedést. Érdemes irányértéket (pl. 70–80%) beállítani, de a fókusz mindig a kritikus logika alapos tesztelésén legyen, nem a 100%-os szám hajszolásán.

## Test double eszköztár

| Típus | Rövid leírás | Mire használjuk | Példa |
|-------|--------------|-----------------|-------|
| **Dummy** | Csak "helykitöltő", nincs valódi logika. | Amikor kell egy objektum a metódus szignatúrához, de a tesztben nem használjuk. | Üres `User` objektum, amit átadsz egy függvénynek, de a tesztben nincs rá szükség. |
| **Stub** | Előre beállított válaszokat ad, nem reagál a hívásokra dinamikusan. | Ha az adott függvény/komponens kimenete kell a teszthez, de nem akarjuk a valódi logikát futtatni. | Egy `HttpService.get()` mindig fix JSON-t ad vissza. |
| **Fake** | Egyszerűsített, működő implementáció. | Ha szeretnél logikát, de "könnyített" formában, külső függőség nélkül. | In-memory adatbázis az igazi DB helyett. |
| **Mock** | Előre beállított elvárásokkal rendelkező helyettesítő. Ha a kód eltér ettől, a teszt elbukik. | Viselkedés ellenőrzése (behavior verification). | Egy mockolt API kliens, amelyet kötelező pontosan így meghívni: `POST /login`. |
| **Spy** | Megfigyeli, hogyan hívták (hányszor, milyen paraméterekkel), opcionálisan válaszokat is adhat. | Ha ellenőrizni akarod, hogy egy függvényt valóban meghívtak-e. | Jasmine `spyOn(service, "save")`. |

## Főbb eszközök és környezet

### Jasmine

A **JavaScript tesztelési keretrendszer** (testing framework), amely biztosítja a **tesztelési nyelvet és logikát**, amellyel meghatározható, hogy mit kell a kódnak teljesítenie.

- **Szintaxis**: olvasható, BDD (Behavior-Driven Development) stílusú – `describe()`, `it()`, `expect()`.
- **Assertion (állítások)**: beépített matcher-ek (`toBe`, `toEqual`, `toContain`, stb.).
- **Spy-ok**: függvények/módszerek "megfigyelése" (hány hívás történt, milyen paraméterekkel).
- **Aszinkron támogatás**: `done()` callback, Promise/async-await integráció, valamint Angularban a `fakeAsync` és `tick`.

### Karma

Egy **tesztfuttató környezet** (test runner), amelyet a Google fejlesztett. Lényegében a "motorháztető alatti motor", amely előkészíti a környezetet, böngészőt indít, futtatja a teszteket és összegyűjti az eredményeket.

- **Fő szerep**: böngészőben futtatja a Jasmine-tesztek kódját.
- **Integráció**: Angular CLI projektekben alapértelmezetten Karma van beállítva, így az `ng test` parancs a Karma segítségével indítja a böngészőt és futtatja a teszteket.
- **Támogatott böngészők**: Chrome, Firefox, Edge, valamint headless mód (CI környezetben).
- **Kimenet**: a tesztek futási eredménye (zöld/piros), valamint opcionálisan coverage riport.
- **Plugin rendszer**: riporterek (pl. progress, spec, HTML), böngésző-launcherek, coverage mérések.

### Angular teszt API-k

- **TestBed**: moduláris tesztkörnyezet Angularhoz, amely beállítja a DI-t, deklarációkat és providereket.
- **ComponentFixture**: komponens példány, template és change detection kezelése.
- **HttpTestingController**: HttpClient-hívások ellenőrzött stubolása.
- **RouterTestingModule, NoopAnimationsModule**: integrációs tesztek támogatása.
- **Angular Material Harness-ek**: stabil és hozzáférhetőségi szempontból is barátságos komponens-lekérdezési API.
