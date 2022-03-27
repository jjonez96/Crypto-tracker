# Coin-app

**Demo:**<br />
https://coin-app-8164d.web.app

**Projektin idea:**
<br />
Tämän projektin avulla voit seurata haluamiasi kryptovaluuttoja lisäämällä niitä portfolioon ja voit etsiä niitä hakukentässä nimen, lyhenteen tai rankin perusteella.
<br />
Voit selata myös kryptovaluuttoihin liittyviä uutisia.
<br />
Kirjautumisjärjestelmä on todella alkeellinen ja hyödytön vielä, mutta toimii. Tiedot tallentuvat Firebaseen.
<br />
CSS on toteutettu react-styled-components menetelmällä.
<img src="/uploads/9b05c122720262c2b2337f3698763e5d/Näyttökuva_2022-03-19_133128.png" >
<br />
# Panostin tässä projektissa myös responsiivisuuteen, eli pitäisi skaalautua hyvin myös mobiililaitteilla.
<br />
<img src="/uploads/6cc55bfb5eded417689cf586ab8ffe71/Näyttökuva_2022-03-20_171419.png"  >
<img src="/uploads/269566a3d81ea85092557c0a79346d73/Näyttökuva_2022-03-20_171444.png"  >

**Kehitysideoita:**
<br />
Tavoitteena olisi vaihtaa localstorage tietokantaan, että jokaisella rekisteröidyllä käyttäjällä olisi henkilökohtainen portfolio mistä voi seurata omia kolikoita.

**Projektissa käytetyt rajapinnat:**
<br />
News-API: crypto-news-live3.p.rapidapi.com<br />
Crypto-API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=300&page=1&sparkline=false (avaimeton API)

**Projektin tavoitteet:**
<br />
Should include several (>3) components X

Should use props to pass data between the components X

Should be structured correctly (components, containers, menu/Menu.jsx, menu/Menu.css) X

Should be implemented in modern favor: const MyApp=(props)=> X

Should only use functional component and hooks X

Should have unit test (>3) to test components X

Should fetch some data from RESTful backend (like Firebase) X

Source code should be in gitlab.com X

Should run by npm i, npm start, npm run build, firebase deploy X

Should have some menu navigation X

Should have some input fields X

The app should be deployd (to Firebase, public_html,...) X
