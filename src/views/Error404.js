import React from 'react';
import './Error404.css';

export default function Error404() {
    return (
        <section id="error404">
            <div id="errorInfo">
            <h1 className='errorTitle'>page non trouvée</h1>

            <p className='errorSubtitle'>Il semblerait que la page que vous souhaitez voir n'existe pas...</p>

            </div>
            
            <a className="back-btn" href="/">retour à l'acceuil</a>
        </section>
        
    )
}