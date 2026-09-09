# Sass / Less gyakorló feladat: CSS refaktorálás

Az alább található HTML oldalt és a hozzá tartozó CSS-t refaktorálja SASS vagy LESS felhasználással. A kettő CSS preprocesszor között szabadon megválasztható, hogy melyiket kívánja használni.

Refaktorálandó feladatok:

- A színeket szervezze ki külön változókba.
- A gombokat mixin-ek segítségével valósítsa meg. (sass esetén: `@mixin`, `@include`)
- A card elemet beágyazással (nestinggel) valósítsa meg. (sass esetén: `&-...`)

Kiegészítés:

- A meglévő feladatot egészítse ki valamilyen saját elgondolással, amihez használjon megfelelő css preprocesszorbéli eszközt.

## HTML

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Gyakorló oldal</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="main-header">
    <h1>Üdvözöllek az oldalon!</h1>
    <p>Ez egy gyakorló HTML oldal SASS/LESS refaktoráláshoz.</p>
  </header>

  <section class="card card-info">
    <h2>Információ</h2>
    <p>Ez egy információs doboz, világoskék háttérrel.</p>
    <button class="btn btn-primary">Részletek</button>
  </section>

  <section class="card card-warning">
    <h2>Figyelem</h2>
    <p>Ez egy figyelmeztető doboz, narancssárga háttérrel.</p>
    <button class="btn btn-warning">Megértettem</button>
  </section>

  <section class="card card-error">
    <h2>Hiba</h2>
    <p>Ez egy hibaüzenet doboz, piros háttérrel.</p>
    <button class="btn btn-danger">Bezárás</button>
  </section>
</body>
</html>
```

## CSS

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 20px;
}

.main-header {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.card {
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card-info {
  border-left: 5px solid #3498db;
}

.card-warning {
  border-left: 5px solid #f39c12;
}

.card-error {
  border-left: 5px solid #e74c3c;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
}

.btn-primary {
  background-color: #3498db;
}

.btn-warning {
  background-color: #f39c12;
}

.btn-danger {
  background-color: #e74c3c;
}
```
