import React from 'react'
import './About.css'
import {Helmet} from "react-helmet";


export default function About() {


    //new js
    return (
        
        <section id="about-main">
       <nav id="nav-content">
                <ul>
                    <a href="#about"><li>qui sommes-nous ?</li></a>
                    <a href="#histoire"><li>notre histoire</li></a>
                    <a href="#demarche"><li>démarche</li></a>
                </ul>
            </nav>
        
            <div id="about" className="description-div-bloc">
                <hr/>
                <h3 className="title-description-about">qui sommes-nous ?</h3>
                <p>
                L'atelier cyha design est basé à Rennes, spécialisé en création, confection et réfection décoration textile et mobiliers sur-mesure pour
                professionnels et particuliers.<br/>
                Nous répondons à toutes vos demandes selon votre goût et vos choix
                de matières.
                Nous sélectionnons toujours avec soin des produits à la pointe des
                dernières tendances et adaptés à vos exigences, avec le meilleur
                rapport qualité-prix.
                Nous vous aiderons à choisir les matières et coloris appropriés et
                prendrons les mesures avec vous.
                </p>
                <hr/>
            </div>
          
            
            <div id="histoire" className="description-div-bloc">
            <hr/>
                <h3 className="title-description-about">notre histoire</h3 >
                <p>
                À travers la marque, le but est de promouvoir le coton local et authentique malien, l’artisanat et le savoir-faire africain en métissant
                les cultures vestimentaires d’un pays d’origine, le Mali, et, d’un pays de résidence, la France.
                Les créations CYHÄ sont faites a base des matières et techniques traditionnelles issues de l’artisanat malien telles que le bogolan, l’indigo et les tissages traditionnels.
                Le coton local cultivé, tissé et teinté par les braves cultivateurs, tisserands et teinturières locaux certifie l’authenticité des produits.
                </p>
                <hr/>
            </div>


            <div id="demarche" className="description-div-bloc">
                <hr/>
                <h3 className="title-description-about">démarche</h3 >
                <p>
                Chaque produit vendu par CYHÄ contribue à l’épanouissement de l’artisanat de l’Afrique de l’Ouest.
                Les savoir-faire sont puisés là où ils sont et sont mobilisés avec joie parmi tous les continents tant que les humains sont respectés dans 
                leurs conditions de travail et que la fabrication des produits est en accord avec la démarche de la marque.
                Si la matière première provient essentiellement du Mali, la plupart des pièces sont fabriquées en France pour des raisons avant tout pratique et humaine.
                </p>
                <hr/> 
            </div>

            <Helmet>
                      <meta charSet="utf-8" />
                      <title>CYHA DESIGN Qui sommes nous</title>
                      <link rel="canonical" href="https://cyha-design.fr/about/" />
                      <meta name="description" content="Présntation de CYHA DESIGN" />
      </Helmet>

        </section>
       
      
    )
}
