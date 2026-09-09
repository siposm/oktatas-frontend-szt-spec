# Féléves feladat elvárások

## Backend API

A féléves feladatban egy Angular-ban létrehozott kliensoldali alkalmazást kell elkészíteni, amely képes az előző félévben létrehozott backend alkalmazással API alapon kommunikálni. A backend által támasztott funkciókat mind lehessen frontend oldalról is használni. Azon esetekben, amikor valamilyen hitelesített felhasználói interakcióra van szükség, ott egyelőre a backenden szüntesse meg az authorizációt (megjegyzés: következő félévben fogjuk tanulni a kliensoldali tananyag idevágó részét).

Amennyiben nincs még, egészítse ki a backend logikát összetett lekérdezésekkel, amelyek valamilyen statisztikai adatot számolnak ki és adnak vissza.

## UI

A kliensoldali alkalmazásban Bootstrap keretrendszert kell használni és törekedni kell a valóban szép és esztétikus, jól használható alkalmazás létrehozására.

A következő felületeket hozza létre:

- **listázás**: entitás típusonként külön-külön legyen egy dedikált felület ami kilistázza az elemeket és megjeleníti azokat, ehhez használjon egyik esetben Bootstrap Card-okat, más esetben táblázatos elrendezést
- **szerkesztő**: legyen egy szerkesztő felület ahol módosítani és törölni lehet egy-egy konkrét entitást
- **grafikon**: legyen egy felület ahol a komplexebb lekérdezések eredményei saját készítésű grafikon alapján megjelennek. pl. oszlopdiagrammon keresztül legyen bemutatva filmek értékelése

## Verziókövetés

A programot lokális verziókövetéssel kell kezelni a tanultaknak megfelelően. Minimum 30 commit megléte szükséges az elfogadható féléves feladathoz. A commit-oknak követniük kell a "commit small, commit often" elvet, illetve törekedni kell az értelmes (értendő ezalatt, hogy a "csak meglegyen a minimum darabszám" miatt létrehozott commit-ok nem számítanak) commit-ok léterhozására, beszédes üzenetekkel.

## Kód felépítés

A kliensoldali alkalmazás kódját a tanultaknak megfelelően komponensekkel és servicek segítségével valósítsa meg.

A verziókövetésre létrehozott repository (mappa) gyökerében egy `BACKEND` és egy `FRONTEND` mappa lehet csak, illetve a `README.md` állomány, illetve természetesen a rejtett .git mappa, ahogy alább látható. A létrehozott gyökérmappa neve `NEPTUNKOD-VEZETEKNEV` formában épüljön fel, ékezetek nélkül, végig nagy betűvel és kötőjellel. Hibás elnevezés automatikusan elégtelen feladatot jelent.

A backend mappába át kell másolni az előző féléves kód egészét és 1 db commit-ot készíteni "backend added" üzenettel. Figyelni kell átmásoláskor, hogy az ottani .git mappát ne másoljuk át, hogy ne akadjon össze az itteni .git mappával. A .gitignore viszont kelleni fog külön a backend mappán belül.

```txt
root
├── .git
├── README.md
├── BACKEND
└── FRONTEND
```

## Dokumentáció

A repository gyökerében található `README.md` állományba legyenek beleírva az alábbi információk:

- hallgató neve
- hallgató neptun kódja
- alkalmazás témája (pl. könyvkezelő, foglaláskezelő stb.)
- funkciólista felsorolással (azaz mit tud az alkalmazás)

A feladat része a markdown leíró nyelv megismerése és ennek megfelelően kell formázni a szöveget. Ellenőrzésképpen a GitHub felületről ellenőrizhető, hogy minden jól jelenik-e meg, vagy VSCode-ban `Ctrl + Shift + V` gombok megnyomásával a markdown nézet előugrik.

## Leadás

A féléves feladatok 1 db .zip állományba tömörítve kell leadni a Moodle-ben, a teljes local git history-val együtt, a megadott határidőn belül. Késve leadott, vagy hibásan elnevezett feladatokat csak vizsgaidőszakban, évközi jegypótló vagy aláíráspótló vizsgán lehet pótolni.

- Leadás előtt a `BACKEND` mappából a `bin` és `obj` mappákat törölni kell!
- Leadás előtt a `FRONTEND` mappából a `node_modules` mappát törölni kell!
