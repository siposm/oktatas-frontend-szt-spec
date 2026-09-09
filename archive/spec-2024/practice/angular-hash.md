# Angular gyakorló feladat: Hash feldolgozó

Készítsen egy hash feldolgozó alkalmazást Angular segítségével.

Hozzon létre egy textarea-t és egy gombot.

A textarea-ba egy alábbi bemenetet tudunk megadni:

```txt
b8878c6c-eda2-35ee-f621-91f9b7af14dc
a49335ca-d76a-02d1-2a6c-fdab1a3f8c0a
d255b2e3-9fde-c833-1cda-fa9ee62e851c
20ef4e13-94db-8a96-ca02-4f65a2a545d2
e31bc524-918f-a7dc-6b36-0be9c7181a11
fbdc476a-eedf-de7e-bac6-2563dd40b0ab
575bc89b-907f-3410-0fd2-cc119004b7ed
b83254e1-8893-666a-1185-17cfab8d9a5c
c9878a6c-7ba3-45ee-f619-91f9a7ef23dc
d49337ca-d78a-12e1-3a5d-fdab2b3f9d2a
e255a2b3-9fde-d833-1dfa-fa9fe62e85fc
f0ef5e14-93db-7c96-da32-4e65b2a655d2
g41bc623-818f-b8dc-5b26-0af8c5184a12
h3dc376b-f8df-ce7e-ba76-2574dd30b0ab
i28bc12d-5c93-1b56-3d91-754fe2d8a2b1
j7f32f1b-4d7a-8b94-8e41-dc93e76b4c71
k8fc3d2a-6e39-4d9f-9b11-579fbb64b701
```

Gombnyomás hatására a textarea tartalmát dolgozza fel soronként és hozzon belőle létre egy leképezést a számok halmazára. Ezt úgy állítsa elő, hogy az adott sorban vizsgálja meg, hogy egyik-másik betű hányadik helyen szerepel az (angol) abc-ben, és ezeket a számokat összegezze.

```txt
bemenet:
b8878c6c-eda2-35ee-f621-91f9b7af14dc

kiszűrt betűk:
b c c e d a e e f f b a f d c

számok és helyei:
b → 2
c → 3
c → 3
e → 5
d → 4
a → 1
e → 5
e → 5
f → 6
f → 6
b → 2
a → 1
f → 6
d → 4
c → 3

összeg:
2+3+3+5+4+1+5+5+6+6+2+1+6+4+3 = 56
```

A kész eredményt bootstrap táblázatban jelenítse meg. Első oszlopban a bemeneti id-t, második oszlopban pedig magát a számot. A táblázatban növekvő sorrendben szerepeljenek az értékek. Ahol a kalkulált szám nagyobb mint az átlag, ott az id legyen piros bootstrap badge-ben.
