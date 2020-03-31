import React from 'react';
import './Error404.css';
import {Helmet} from "react-helmet";

export default function Error404() {
    return (
        <section id="error404">
            <div id="errorInfo">
            <h1 className='errorTitle'>page non trouvée</h1>

            <p className='errorSubtitle'>Il semblerait que la page que vous souhaitez voir n'existe pas...</p>

            </div>
            
            <a className="back-btn" href="/">retour à l'acceuil</a>
            <Helmet>
                      <meta charSet="utf-8" />
                      <title>CYHA DESIGN 404</title>
                      <link rel="canonical" href="https://cyha-design.fr/404/" />
                      <meta name="description" content="Cette page n'existe pas !" />
      </Helmet>
        </section>
        
    )
}