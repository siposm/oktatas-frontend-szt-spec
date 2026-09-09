# Angular gyakorló feladat: Statisztika

Készítsen egy statisztikákat számító Angular alkalmazást.

Az alul található json kódot használja fel seed adatként az alkalmazásban. Később a seedelés kiváltható API hívással is, melyet erről a végpontról lehet megtenni: <https://api.siposm.hu/job>

Az elemeket feldolgozva végezze el a következő szűréseket, mindegyiket külön metódussal és mindegyik eredménye legyen megjelenítve a html-en is.

Feladatok:

- melyik foglalkozás az, amelynek a leghosszabb a leírása?
- melyik foglalkozás id-jában van a legtöbb betű karakter?
- mennyi az átlagos szószám a leírásokban?
- mennyi az átlagos karakterszám a nevekben?
- hány karakter eltérés van a 3. és a 10. leghosszabb karakterszámú foglalkozás nevében?
- van-e és ha igen melyik az a foglalkozás, ahol az azonosító első részében (első kötőjele előtti rész) van egymást követően 3 szám karakter?

A szűréseket javasolt két verzióban is elkészíteni gyakorlás céljából. Egyrészt valósítsa meg saját algoritmussal *(ehhez érdemes visszakeresni korábbi félévek tárgyain tanult algoritmusokat, nem árt az ismétlés!)*; másrészt használjon tömb metódusokat is, hogy azokban is gyakorlatot szerezzen. *(Emlékeztetőül pár példa: [itt](../js-03/array-methods.html))*

A feladat továbbfejlesztéséhez szervezze ki az adatbetöltést és a számításokat service alapúra.

```json
[
  {
    "id": "f5e6d7c8-1234-5678-9101-1121-314151617181",
    "name": "Software Tester",
    "description": "A Software Tester felelős a szoftverek minőségellenőrzéséért és teszteléséért. Feladatai közé tartozik a tesztelési tervek kidolgozása, manuális és automatizált tesztek végrehajtása, hibajelentések készítése, valamint a fejlesztőcsapattal való szoros együttműködés a problémák gyors megoldása érdekében."
  },
  {
    "id": "a1b2c3d4-5678-9101-1121-314151617181",
    "name": "Lead Developer",
    "description": "Olyan vezető szoftverfejlesztő, aki irányítja a fejlesztőcsapat munkáját, felelős a technikai döntésekért és biztosítja a projektek sikeres megvalósítását, miközben aktívan részt vesz a kódolásban és a rendszertervezésben."
  },
  {
    "id": "e2f3g4h5-6789-0123-4567-890123456789",
    "name": "Architect",
    "description": "Olyan szakértő, aki a szoftverrendszerek magas szintű tervezéséért felelős, definiálja a rendszerek struktúráját és architektúráját, biztosítja a hosszú távú fenntarthatóságot és a skálázhatóságot, valamint együttműködik a fejlesztőcsapatokkal a műszaki   irányvonalak kialakításában."
  },
  {
    "id": "253cdb82-40ff-5b70-3963-2b9bdc711ef3",
    "name": "Fullstack Developer",
    "description": "Olyan szoftverfejlesztő, aki mind a front-end, mind a back-end fejlesztéssel foglalkozik, teljes körű megoldásokat biztosítva a webes alkalmazásokhoz."
  },
  {
    "id": "dc709c81-8046-f4df-b188-e8ea78f872f5",
    "name": "DevOps Engineer",
    "description": "Szakember, aki a fejlesztés és az üzemeltetés közötti folyamatokat automatizálja, optimalizálja, és biztosítja a folyamatos integrációt és szállítást."
  },
  {
    "id": "a02228df-962a-a252-df97-72ad0e2bf208",
    "name": "Frontend Developer",
    "description": "Fejlesztő, aki a weboldalak és webalkalmazások felhasználói felületének megtervezésével és megvalósításával foglalkozik."
  },
  {
    "id": "77801e17-a798-4ece-df99-15c0e7407aed",
    "name": "Data Scientist",
    "description": "Adattudós, aki különböző analitikai eszközökkel és módszerekkel dolgozik, hogy hasznos információkat és következtetéseket vonjon le a nagy mennyiségű adatokból."
  },
  {
    "id": "298b10e1-9a33-63ba-3f8f-954cdb3eb859",
    "name": "Backend Developer",
    "description": "Fejlesztő, aki a szerveroldali logikát, adatbázisokat és az alkalmazások hátterében futó folyamatokat fejleszti és kezeli."
  },
  {
    "id": "abb264d0-147e-9492-bcc2-dddcc313cc7f",
    "name": "Quality Assurance Engineer",
    "description": "Minőségbiztosítási mérnök, aki a szoftverek teszteléséért és minőségének biztosításáért felelős."
  },
  {
    "id": "79a172c2-da9a-a894-7459-074882142e2c",
    "name": "UI/UX Designer",
    "description": "Felhasználói felület és élmény tervező, aki a felhasználóbarát és esztétikus design megalkotásával foglalkozik."
  },
  {
    "id": "a2d759d7-e4aa-9e14-bfe4-6c020fd1ac24",
    "name": "System Administrator",
    "description": "Rendszergazda, aki a számítógépes rendszerek telepítését, konfigurálását és karbantartását végzi."
  },
  {
    "id": "c211e5d5-f9da-ca85-6df6-4a3614ebdb88",
    "name": "Project Manager",
    "description": "Projektmenedzser, aki a projektek tervezéséért, irányításáért és végrehajtásáért felelős, biztosítva, hogy a projektek időben és költségkereten belül elkészüljenek."
  },
  {
    "id": "6635fc1e-d73e-d07f-9bb7-039159450d31",
    "name": "Mobile App Developer",
    "description": "Mobilalkalmazás-fejlesztő, aki iOS és Android platformokra fejleszt alkalmazásokat."
  },
  {
    "id": "c557d780-ec33-c86a-55cb-406d7f04f4b6",
    "name": "Data Engineer",
    "description": "Adatmérnök, aki az adatok gyűjtését, tárolását és feldolgozását végzi, hogy a szervezetek hatékonyan használhassák az adatokat."
  },
  {
    "id": "9168f1d3-2ea5-3dd5-64f4-b39e39f607a7",
    "name": "Cybersecurity Specialist",
    "description": "Kiberbiztonsági szakember, aki a számítógépes rendszerek és hálózatok védelmét biztosítja a kiberfenyegetésekkel szemben."
  },
  {
    "id": "9df8f2a6-c154-9e5f-5f93-87987ba88fab",
    "name": "Machine Learning Engineer",
    "description": "Gépi tanulási mérnök, aki gépi tanulási modellek fejlesztésével, tanításával és alkalmazásával foglalkozik."
  },
  {
    "id": "b6224e5c-4d62-6f44-8a92-e2a08c26c5da",
    "name": "Product Manager",
    "description": "Termékmenedzser, aki a termékek fejlesztéséért, stratégiai irányításáért és piacra viteléért felelős."
  },
  {
    "id": "23c29d93-8206-0844-5a2e-c3a4eee01389",
    "name": "Embedded Systems Developer",
    "description": "Beágyazott rendszerek fejlesztője, aki speciális célú számítógépes rendszerek tervezésével és fejlesztésével foglalkozik."
  },
  {
    "id": "777bd5b7-3c8d-882a-b388-140035affd98",
    "name": "Cloud Solutions Architect",
    "description": "Felhőmegoldások építésze, aki felhőalapú rendszerek és infrastruktúrák tervezésével és implementálásával foglalkozik."
  },
  {
    "id": "f6g7h8i9-0123-4567-8901-234567890123",
    "name": "Security Analyst",
    "description": "Olyan szakember, aki a vállalat informatikai rendszereinek és adatainak biztonságáért felelős, folyamatosan monitorozza és értékeli a biztonsági fenyegetéseket, végrehajtja a kockázatelemzéseket és javaslatokat tesz a védekezési intézkedések javítására, miközben együttműködik a   csapattal a biztonsági irányelvek és protokollok kialakításában és betartatásában."
  },
  {
    "id": "h8i9j0k1-2345-6789-0123-456789012345",
    "name": "Product Owner",
    "description": "Olyan szakember, aki meghatározza a termék vízióját, kezelni a követelményeket és priorizálja a feladatokat, biztosítva, hogy a fejlesztési folyamat megfeleljen az üzleti céloknak és a felhasználói igényeknek."
  },
  {
    "id": "x5efbc61-ed1a-7e2f-686a-041f35d4b687",
    "name": "Blockchain Developer",
    "description": "Blockchain fejlesztő, aki decentralizált alkalmazások és okosszerződések fejlesztésével foglalkozik a blockchain technológián alapulva."
  }
]
```
