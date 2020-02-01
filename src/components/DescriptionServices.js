import React from 'react'

export default function DescriptionServices(props) {
    return (
        <div id="services-container">
        <div id="services-description">
            <h3 className="services-title">confection d'ameublement</h3>
            <p className="services-text">
            {props.service.acf.description_du_service}
            </p>
            <p className="services-postal-info">
                Pour toutes demandes d'information : <br/>
                CYHA DESIGN <br/>
                77, Avenue Aristide Briand <br/>
                35000 Rennes <br/>
                06.99.55.74.04 <br/>
            </p>
        </div>
        <div className="services-img-container"> <img src={ameublement} alt="Services" className="services-img"/> </div>

    </div>
    )
}
