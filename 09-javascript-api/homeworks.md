### GYAKORLÓ HÁZI FELADAT

Készítse el a követkető JS gyakorló feladatokat a tanultaknak megfelelően.

Az egyes feladatokat a gyakorlás kedvéért, egyrészt `then()` másrészt pedig `async-await` formában is oldja meg.

A feladatban említett eszközök, pl. card, badge stb., minden esetben a megfelelő Bootstrap eszközre vonatkoznak.

#### 1. feladat

A(z) `https://api.siposm.hu/word` végpontot meghívva, töltse le az ott található szavakat, majd azokat a következő formában jelenítse meg a konzolon:
- azon szavak, amelyek "a" betűvel kezdődnek, legyenek nagybetűs formában kiírva
- azon szavak, amelyek nem "a" betűvel kezdődnek és hosszabbak mint 6 karakter, legyenek alulvonások közé rakva (pl. `_balaton_`)

#### 2. feladat

A(z) `https://api.siposm.hu/word` végpontot meghívva, töltse le az ott található szavakat, majd azokat a következő formában jelenítse meg a a HTML-ben.

- Azon szavak, amelyek páros karakterszámból állnak, legyenek zöld badge-ben megjelenítve, míg a páratlanok piros badge-ben legyenek megjelenítve.
- Az egyes szócsoportok külön Bootstrap card-ban legyenek elheyezve.
- Amikor egy szóra kattintunk, akkor az legyen nagybetűsre alakítva.

#### 3. feladat

Hozzon létre egy input mezőt, amiben számot lehet beírni, illetve egy gombot. Amikor a felhasználó megnyomja a gombot, a beírt szám alapján hívja meg az API-t `https://api.siposm.hu/word?count=szam`. Még a hívás előtt a kódból vizsgálja le, hogy a szám nem lehet kisebb mint 1 és nem lehet nagyobb mint 100.

Mivel a felhasználó többször is beírhat különböző számokat és megnyomhatja a gombot, az egyes kérésekre kapott válaszokat tárolja el és a HTML-en jelenítse meg ezen eredményeket, az alábbi mintának megfelelően:

```txt
1. hívás:
alma, körte, barack, nyúl, macska
2. hívás:
körte, barack
3. hívás:
barack, nyúl, macska, kutya, delfin
```

Az egyes hívások számozását valamint a válaszban kapott szavakat, első körben az egyszerűség kedvéért simán `p` tagekkel vagy valamilyen tetszőleges egyszerű módon valósítsa meg. Miután ez sikeresen működik, alakítsa át card-os verzióra, ahol a `card-title` a hívás sorszáma, a `card-body`-ban pedig a szavak jelenjenek meg.

#### 4. feladat

A(z) `https://api.siposm.hu/getDevelopers` végpontot meghívva, tömb metódusokkal számolja ki a következőket és írja ki a konzolra az eredményeket.

- hány fejlesztő van, aki ért a "HTML"-hez?
- hogy hívják azokat akik 30-50 éves kor között vannak?
- mi az email címe azoknak, akik az alphatech cégtől vannak?
- azon fejlesztők, akik 30 évesek még nem múltak el, év végi bónuszt kapnak, amely a jelenlegi fizetésükből és a hozzáértési körökből (skill) számolódik. ahány skillel rendelkezik a fejlesztő, annyi százalékát kapja meg a fizetésének pluszban. írja ki a konzolra az érintett fejlesztők nevét és fizetését, valamint a bónusz mértékét és végül a bónusszal megemelt fizetést!
- hozzon létre egy "fizetés emelés" gombot, amit megnyomva a következő feladat hajtódjon végre
	- a frontend fejlesztők fizetését 3%-os inflációkövetéssel kell ellátni, ehhez gyűjtse ki az érintett személyeket és a megfelelő HTTP metódust küldve a megfelelő végpontra, emelje meg a fizetésüket az említett összegre
	- mivel több érintett is lehet, ezeket `Promise.All()` segítségével érdemes végrehajtani

> [!IMPORTANT]
> Az API mindenki számára ugyan azt az adatot mutatja, így ha valaki módosít benne valamit, az természetesen mindenkinél meg fog jelenni! Az ebből adódó többszörös adatmódosítás előfordulhat és normális velejárója egy közös adatbázis esetén. A reset végpontot meghívva, minden visszaállítható a default értékre.

#### 5. feladat

Készítsen a félév elején tanultaknak megfelelő több aloldalból álló alkalmazást, ahol tetszőlegesen bármilyen Bootstrap eszközzel lehet dolgozni.

Hozzon létre egy főoldalt tetszőleges elemekkel. Hozzon létre egy "Fejlesztők", "Kompetenciák" és "Munkakörök" linket a navigációban és ezekhez tartozó aloldalakkal.

A fejlesztők aloldalon a fejlesztőket API-ról letöltve listázza ki tetszőleges elrendezésben, majd ugyan így járjon el a kompetenciák és munkakörök esetén is.

- Fejlesztők: https://api.siposm.hu/getDevelopers
- Kompetenciák: https://api.siposm.hu/skill
- Munkakörök: https://api.siposm.hu/job

A kompetenciák megjelenítésekor card-ot használjon, a következők szerint. Az itt található kompetenciákat 3 kategóriába soroljuk (lásd lentebb). Az egyes kategóriákhoz tartozó skill-eket a card-on belül felsorolással jelenítse meg. A kategória neve a card title-jében jelenjen meg. Kategóriánként [eltérő színű](https://getbootstrap.com/docs/5.3/components/card/#background-and-color) kártyát alkalmazzon! Az 1. kategória színe legyen zöld, a 2. kategória színe legyen sárga, a 3. kategória pedig kék.

**Software Development**: Programozási nyelvek, frontend és backend technológiák, adatbázisok, API-k, adatelemzés és AI.

```txt
Java, JavaScript, TypeScript, Python, Ruby, HTML, CSS, SCSS, Sass, Angular, React, Vue.js, Redux, RxJS, Node.js, Express, Django, Flask, Rails, Spring, Spring Boot, Hibernate, RESTful APIs, GraphQL, WebAssembly, SQL, MySQL, PostgreSQL, MongoDB, CouchDB, Redis, Machine Learning, Pandas, Scikit-Learn, TensorFlow, Apache Spark
```

**DevOps, Infrastructure & Quality Assurance**: Üzemeltetés, automatizálás, tesztelés, biztonság és monitorozás.

```txt
Docker, Kubernetes, CI/CD, Automated Testing, Manual Testing, E2E Testing, Selenium, Zephyr, Network Security, Penetration Testing, SIEM, Ansible, Chef, Puppet, Terraform, Vagrant, Bash, Webpack, Nginx, Apache Kafka, RabbitMQ, Elasticsearch, Logstash, Kibana, Grafana, Prometheus, Zabbix
```

**Design, UX & Project Management**: Felhasználói élmény, vizuális tervezés, prototípuskészítés és projektmenedzsment.

```txt
Figma, Sketch, Interaction Design, Visual Design, Prototyping, Wireframing, User Research, User Testing, Agile Methodologies, Scrum, JIRA, Product Management, Roadmap Planning, Stakeholder Management
```