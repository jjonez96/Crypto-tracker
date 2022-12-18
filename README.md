# Crypto tracker


**Demo:**<br />
https://coin-app-8164d.web.app/Home

Technologies: <br/>
-React <br/>
-React-styled-components <br/>
-React router <br/>
-Firebase<br/>

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

**Projektissa käytetyt rajapinnat:**
<br />
News-API: crypto-news-live3.p.rapidapi.com<br />
Crypto-API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=300&page=1&sparkline=false (avaimeton API)
