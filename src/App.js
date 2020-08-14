import React  from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainRouter from './routes/MainRouter';
import {Helmet} from "react-helmet";
import BtnRetourEnHaut from './components/BtnRetourEnHaut';


// caca
let App = () => {

  return (
    <Router>
    <div className="App">
      <Header/>
      <BtnRetourEnHaut/>
      <MainRouter/>
     
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>CYHA DESIGN Accueil</title>
                      <link rel="canonical" href="https://cyha-design.fr" />
                      <meta name="description" content="Showroom d'Arts et Design spécialisé dans les tapisseries d'ameublement et la confection de textiles en décoration : CYHA DESIGN. Nous créons et confectionnons sur-mesure pour professionnels et particuliers des coussins d'intérieur et extérieur, des housses de canapés et banquettes, tapis, poufs, rideaux et voilages ainsi que des housses et voilages de bateau. Nous sommes créateurs d'ambiance et pouvons agencer et aménager la décoration de votre intérieur ou de vos espaces dédiés à un usage professionnel (bar, hôtel, restaurant...). Nous restaurons également les fauteuils, sièges et canapés." />
      </Helmet>

    </div>
    </Router>
  );
}

export default App;
