import React  from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainRouter from './routes/MainRouter';
import {Helmet} from "react-helmet";


let App = () => {




  return (
    <Router>
    <div className="App">
      <Header/>
      <MainRouter/>

<Helmet>
<meta charSet="utf-8" />
                <title>CYHA DESIGN</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Site internet de l'Agence CYHA DESIGN" />
</Helmet>

    </div>
    </Router>
  );
}

export default App;
