# React Web Aplikacija

Ovaj projekat je napravljen pomoću [Create React App](https://github.com/facebook/create-react-app).

## Dostupne skripte

Ukoliko `yarn` nije dostupan na sistemu [ovde](https://yarnpkg.com/getting-started/install) se nalazi uputstvo za instalaciju.

### `yarn install`

Instalacija potrebnih zavisnosti(dependencies) za pokretanje aplikacije.

### `yarn start`

Pokreće aplikaciju u development modu koju možete pregledati u browseru na [http://localhost:3000](http://localhost:3000).

Stranica će se uživo osvežavati prilikom izmena u projektu.

### `yarn server`

Startuje mali [json-server](https://github.com/typicode/json-server) na portu `3001` koji služi da simulira realan API koji bi aplikacija konzumirala. Sve promene nad podacima se čuvaju u fajlu `data/db.json`.

Svi API pozivi iz React aplikacije su preko proxy-a povezani za JSON serverom što znači da npr. `GET /posts` se prosleđuje na `http://localhost:3001/posts` umesto na `http:localhost:3000/posts`. Pogledati `proxy` ključ u `package.json`. Ova funkcionalnost je deo [Webpack Dev Server-a](https://webpack.js.org/configuration/dev-server) koji se koristi za razvoj React aplikacija.

<small>`yarn start` i `yarn server` pokrenuti u posebnim terminalima</small>

## Korisni linkovi

* [node.js](https://nodejs.org/en)
