# Coin-app

**Demo:**<br />
https://coin-app-8164d.web.app

**Projektin idea:**
<br />
Tämän projektin avulla voit seurata haluamiasi kryptovaluuttoja lisäämällä niitä portfolioon ja voit etsiä niitä hakukentässä nimen, lyhenteen tai rankin perusteella.
<br />
Kryptovaluutan data siirtyy add painikkeella portfolioon, localstorageen ja firebasen firestoreen. Remove nappi taas poistaa sen tietyn datan.
<br />
Voit selata myös kryptovaluuttoihin liittyviä uutisia.
<br />
Kirjautumisjärjestelmä on todella alkeellinen ja hyödytön vielä, mutta toimii. Tiedot tallentuvat Firebaseen.
<br />
CSS on toteutettu react-styled-components menetelmällä.

<br/>
<img src="/uploads/f8d19903f0a8db63acbbe74098cd8914/Näyttökuva_2022-03-27_132737.png" >

# Data portfoliossa ja firestoressa.
<img src="/uploads/492e4ec398014d13793aa71c9e7c185c/Näyttökuva_2022-03-27_130053.png" >
<img src="/uploads/d7a794cb8fa5b432b2e857e0cce7241e/Näyttökuva_2022-03-27_130121.png" >

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
