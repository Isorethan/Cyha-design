import React from 'react'
import './About.css'
import separator from '../assets/img/Groupe 49.svg'
export default function About() {
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
                L'aletelier cyha design est basé a rennes, spécialisé en création
                ,confection et refection decoration textile et mobiliers sur-mesure pour
                professionnels et particuliers.<br/>
                Nous répondons à toutes vos demandes selon votre goût et vos choix
                de matières
                Nous sélectionnons toujours avec soin des produits à la pointe des
                dernières tendances et adaptés à vos exigences, avec le meilleur
                rapport qualité-prix.
                nous vous aiderons à choisir les matières et coloris appropriés et
                prendre les mesures avec vous.
                </p>
                <hr/>
                <div className="horizontal-separator"> 
                    <img className="dotes-separator" src={separator} alt="" />
                </div>
            </div>
          
            
            <div id="histoire" className="description-div-bloc">
            <hr/>
                <h3 className="title-description-about">notre histoire</h3 >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <hr/>
                <div className="horizontal-separator">
                    <img className="dotes-separator" src={separator} alt="" />
                </div>
            </div>
           

            <div id="demarche" className="description-div-bloc">
                <hr/>
                <h3 className="title-description-about">démarche</h3 >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <hr/>
            </div>


        </section>
       
      
    )
}
