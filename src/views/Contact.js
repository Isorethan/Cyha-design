import React from 'react' ;
import "./Contact.css" ;
import  MapContainer  from '../components/GoogleMap';


export default function Contact() {
    return (
        <section id="contact">

            <div id="contact-shop-info">
                            <div id="overlay-horaire-shop">
                                <p className="horaire-shop">
                                    Rendez-nous visite : <br/>
                                    Lundi - Vendredi : 10H - 19H <br/>
                                    Samedi : 10H - 17H
                                </p>
                            </div>
                        
                        </div>


            <div id="contact-geo-info">
                <p className="postal-geo-info">
                    CYHA DESIGN <br/>
                    77, Avenue Aristide Briand <br/>
                    35000 Rennes <br/>
                    06.99.55.74.04
                </p>

                <div id="map">
                    <MapContainer/>
                </div>
      
                
            </div>

        </section>
    )
}