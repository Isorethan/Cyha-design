import React, { Component , Fragment } from 'react'
import {Link} from "react-router-dom" ;
import "./Atelier.css" ;
import img1 from "../assets/img/whiteroom.jpg" ;
import wp from "../tools/Api" ;

let photos = [] ;
export default class Atelier extends Component {
    constructor(props){
        super(props);

        this.state={
            realisations:null,
            currentReal:null,
            photos:[],
            pics: false
        }

    }
   
 setCurrentReal=(e)=> {
let atelierItems = document.querySelectorAll('.nav-item-atelier')
if(atelierItems){
    for (let item of atelierItems) {
        item.classList.remove("active")
        }
}


    let t = this ;
t.setState({pics: false});
 let ServiceChoisi = e.target.value ;
 if(ServiceChoisi){
   e.target.classList.add("active")
 }


 wp.realisation().id(ServiceChoisi).get(function( err, realisation ) {
    if ( err ) {
        // handle err
        console.log(err)
    }
    // do something with the returned posts                      
        t.setState({
        currentReal:realisation
    })
    
})
 }


 componentDidUpdate(prevProp, prevState) {
    if(prevState.currentReal !== this.state.currentReal) {
       
        let {currentReal} = this.state ;

        (currentReal) && this.getMedia(currentReal.id)
        
    }
 }
    
    componentDidMount(){
      
        this.getRealisations();

        window.addEventListener("load", function(event) {
            console.log("Toutes les ressources sont chargées !");
            let atelierItems = document.querySelector('.nav-item-atelier')
            console.log(atelierItems)
          });
     
        // atelierItems.classList.add('active')
      
        
    }

    getMedia(catId){
      photos = []
        wp.media().param('realisation', [catId]).page(1).perPage(100).get(function( err, data ) {
          if ( err ) {
              // handle err
          } 
             data.map((image) =>  
              photos.push({
                  src:image.guid.rendered,
                  width:1,
                  height:1,
                  title:image.title.rendered

                })                   
             )
        })
         this.setState({
             photos:photos,
             pics: true
         })
       
     }

    getRealisations=()=>{
        wp.realisation = wp.registerRoute( 'wp/v2', '/realisation/(?P<id>)' );
            let t = this ;
           
           

            wp.realisation().get(function( err, realisations ) {
                if ( err ) {
    
                    console.log(err)
                }

                    t.setState({
                    realisations:realisations,
                    currentReal:realisations[0]
                })

            })
           

         
              
}
               
            
    
    



    render() {
        let {realisations , currentReal,photos, pics} = this.state ;


        return (


        <section id="atelier-container">
            
            <h2 className="title-page-atelier">l' atelier de cyha</h2>
            <nav className="bloc-atelier-nav">
                 
                {  (realisations)? realisations.map((realisation, i)=>
                  
                    <li key={i} className="nav-item-atelier"  onClick={this.setCurrentReal.bind(this)}  value={realisation.id}>{realisation.name}</li>
                    
                 ) :
                <Fragment>
                <p className="loading-text">Loading...</p>
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
                </Fragment>
                } 
                
              
            </nav>
        
            <div id="atelier-info-bloc">
                <div className="atelier-description">
                    <h5 className="atelier-title">confection</h5>
                    <p className="atelier-texte">
                        {(currentReal)? currentReal.description :"LOADING" }
                    </p>
                </div>
            
                <div className="img-atelier-bloc">
                    <img src={img1} alt="gallerie" className="img-atelier"/>
                        <div className="access-gallerie-btn">
                        {(currentReal && pics) ?
                                <Link 
                                className="gallerie-btn" 
                                    to ={{pathname:'/atelier/galerie/'+currentReal.name,
                                    state:{photos:photos}}}
                                         >Voir la galerie
                                </Link>
                                :"LOADING"}    
                        </div>
                </div>
               

            </div>
        </section>

        )
    }
}
