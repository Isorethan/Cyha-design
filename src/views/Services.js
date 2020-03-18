import React , {Component , Fragment}from 'react'
import "./Services.css" ;
import wp from "../tools/Api" ;




export default class Services extends Component {
    constructor(){
        super();

        this.state={
            services:[]
        }

    }

    componentDidMount(){
        wp.service = wp.registerRoute( 'wp/v2', '/services/(?P<id>)' );
        let t = this ;
        wp.service().get(function( err, services ) {
            if ( err ) {
                // handle err
                console.log(err)
            }
            // do something with the returned posts
        (
                
                t.setState({
                services:services
            })
        )
        }) 
    }

    SetId(e){
        this.setState({

        })
     const title = document.querySelector(".services-title") ;
     const description = document.querySelector(".services-text") ;
     const image = document.querySelector('.services-img');
     title.innerText = e.target.innerText;
     description.innerText=e.target.getAttribute("serviceid");
     image.src = e.target.getAttribute('imagesrc');
        
    }



render() {
 let {services} = this.state ;
return(


<section id="services-wrapper">
   
        <nav className="nav-services">
            <ul className="items-nav-services">
            { (services) ? services.map((service, index)=><li className="service-link" serviceid={service.acf.description_du_service} onClick={this.SetId.bind(this)} imagesrc={service.acf.image_du_service.url}  key={index} >{service.acf.titre_du_service}</li>):
            <Fragment>
        <h1 className="loading-text">Chargement de la liste</h1>
        <div className="spinner">
        <div className="cube1"></div>
         <div className="cube2"></div>
        </div>
        </Fragment>   }
               
            
            </ul>
        </nav>
        {(services[0])?<div id="services-container">
            <div id="services-description">
                <h3 className="services-title">{services[0].acf.titre_du_service}</h3>
                <p className="services-text">
                {services[0].acf.description_du_service}
                </p>
                <p className="services-postal-info">
                    Pour toutes demandes d'information : <br/>
                    CYHA DESIGN <br/>
                    77, Avenue Aristide Briand <br/>
                    35000 Rennes <br/>
                    06.99.55.74.04 <br/>
                </p>
            </div>
            <div className="services-img-container"> <img src={services[0].acf.image_du_service.url} alt="Services" className="services-img"/> </div>

        </div> :    <Fragment>
        <h1 className="loading-text">Chargement du services</h1>
        <div className="spinner">
        <div className="cube1"></div>
         <div className="cube2"></div>
        </div>
        </Fragment> }
        



    </section>


        )
    }
}
