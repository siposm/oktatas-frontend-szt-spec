# Angular gyakorló feladat: Login kezelő

Készítsen egy login felületet Angular segítségével.

Az alkalmazás (alapértelmezett `app` komponens) fő felületén egy login felület legyen, username és password inputokkal, valamint egy "Login" feliratú gomb. Ezt egy `login` komponensben hozza már létre, és a komponens legyen az app-ban felhasználva. A felület legyen szépen megcsinálva bootstrap osztályokkal és ikonokkal.

A gomb megnyomás hatására vizsgálja meg, hogy a beírt username és password páros létezik-e. Ehhez konstruktorban a komponensben vigyen fel pár seed adatot. Ehhez készítsen egy `User` osztályt a fenti tulajdonságokkal (igény esetén kiegészíthető még ezzel-azzal). Amennyiben a beírt adatok léteznek, úgy irányítsa át a felhasználót egy `loginSuccess` komponensre, ahol bootstrap success alert-el jelezze, hogy sikeres a belépés! Ha valamelyik adat hibás, akkor egy `loginError` komponensre vigye át, és itt is alert-el (danger) jelezze, hogy hibásak az adatok.

Ehhez a szükséges komponenseket generálja le és a megfelelő routingot is állítsa be.

Refaktorálja a kódot, és a konsturktorban létrehozott seed adatokat service-n keresztül vegye át a komponensbe.

Készítsen egy `overview` komponenst, aminek annyi a célja, hogy minden komponenst egyben lehessen látni. Ebben a komponensben használja fel a `login`, `loginSuccess` és `loginError` komponenseket egymás alatt. Az overview-t is lehessen elérni route alapján természetesen.
