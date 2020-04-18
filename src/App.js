import React  from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainRouter from './routes/MainRouter';
import {Helmet} from "react-helmet";



let App = () => {

/* je suis un commentaire de Marie, je suis mignon et sympathique, j'aime beaucoup les carottes*/
/** Je suis un commentaire aussi que Marie peu lire */

  return (
    <Router>
    <div className="App">
      <Header/>
      <MainRouter/>
     
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>CYHA DESIGN Accueil</title>
                      <link rel="canonical" href="https://cyha-design.fr" />
                      <meta name="description" content="Site internet de l'Agence CYHA DESIGN, CREATION ET CONFECTION EN DECORATION TEXTILE COUTURE - RETOUCHE - AMEUBLEMENT -VOILAGE -RIDEAUX
SUR-MESURE A RENNES 06.99.55.74.04" />
      </Helmet>

    </div>
    </Router>
  );
}

export default App;
