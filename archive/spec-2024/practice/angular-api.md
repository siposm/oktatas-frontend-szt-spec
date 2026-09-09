# Angular gyakorló feladat: API kezelés

Készítsen egy API olvasó alkalmazást Angular segítségével.

Hozzon létre egy navigációs menüsávot, benne három gombbal:

- Developers: <https://api.siposm.hu/getDevelopers>
- Jobs: <https://api.siposm.hu/job>
- Skills: <https://api.siposm.hu/skill>

Amennyiben a developers, jobs vagy skills gombra kattintunk, úgy töltse be az elemeket a hozzátartozó API végpontról, az alábbi leírásoknak megfelelően. Figyeljen arra, hogy mindig csak az az egy tartalom jelenjen meg az oldalon, aminek a gombjára éppen rákattintottunk.

Az API hívásokat az alábbiak alapján valósítsa meg.

## Developers API

Gombnyomás hatására töltse le az elemeket, majd ezek közül válogassa le azokat, amelyeknek az id-jában lévő számok összege 60 és 80 között van. Ehhez egy kis értelmezési segítség alább látható.

```txt
id: b8878c6c-eda2-35ee-f621-91f9b7af14dc
    → 8+8+7+8+6+2+3+5+6+2+1+9+1+9+7+1+4
    → 87 a számok összege
```

A leválogatott elemeket Bootstrap card-ok segítségével jelenítse meg, tetszőleges részletességgel és elrendezéssel.

## Jobs API

Gombnyomás hatására töltse le az elemeket, majd ezeket jelenítse meg p tag-ekkel, a következő mintának megfelelően.

A formázáshoz Sass CSS-t használjon!

Formázási elvárások:

- az id legyen félkövér és a betűköz legyen szellős
- a name kezdődjön beljebb tolva
- a description kezdődjön beljebb tolve és legyen dőlt stílusú

```txt
f5e6d7c8-1234-5678-9101-1121-314151617181
    Software Tester
    A Software Tester felelős a...
```

## Skills API

Gombnyomás hatására töltse le az elemeket, majd ezeket saját ul, li listában jelenítse meg, az alábbi mintának megfelelően:

```txt
6c2e786a-7717-4804-9822-1387813e29ad
    Név: Agile Methodologies
    Leírás: Egy iteratív és inkrementális megközelítés...
```
