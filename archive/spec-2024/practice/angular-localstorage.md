# Angular gyakorló feladat: Localstorage kezelő

Készítsen egy localstorage-t használó alkalmazást Angular segítségével.

Az alkalmazásban legyen lehetőség egy inputmezőn keresztül neveket felvenni egy tömbbe, gombnyomás hatására. A feladatban localstorage használattal valósítsa meg, hogy a böngésző bezárását követően is az adatok meglegyenek, ne vesszenek el.

Adatok betöltését localstorage-ből a konstruktorban valósítsa meg. Az adatok elmentését pedig minden egyes új elem létrehozásakor, tehát a gombnyomások alkalmával.

## Localstorage gyorstalpaló

A localstorage a böngészőben egy tároló, aminek a tartalma megmarad a böngésző bezárása után is. Teljesen lokális (ebből a neve), tehát csak a saját gépünkön, csak adott böngészőben létezik. Tehát pl. a Chrome localstorage-ját a Firefox nem éri el. A cookie-hoz nagyon hasonló, csak jobb, újabb eszköz. Teljesen független eszköz bármilyen keretrendszertől, egy sima js fájlból is használható, ugyan úgy ahogy a fetch api hívás is!

Két fő művelettel lehet használni:

- írás: `localStorage.setItem("kulcs", "érték")`
- olvasás: `let x = localStorage.getItem("kulcs")`

A kulcs alapvetően egy string azonosító, az érték lehet bármi, akár objektumokat tartalmazó tömb is! Ez esetben viszont stringify-olni kell a teljes tömböt; kiolvasásnál pedig parse-olni, ahogy az alábbi kódban látható.

```javascript
// 1. Példa objektumokat tartalmazó tömb
let data = [
  { name: "Anna", age: 25 },
  { name: "Béla", age: 30 }
]

// 2. Tömb mentése localStorage-be (stringgé alakítás szükséges)
localStorage.setItem("users_db", JSON.stringify(data))

// 3. Kiolvasás (parseolás szükséges)
let content = JSON.parse(localStorage.getItem("users_db"))
console.log(content)
```

A localstorage aktuális állapota megtekinthető bármilyen böngésző devtools nézetében. Chrome esetén pl.: F12 → Application → Local storage
