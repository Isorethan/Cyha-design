import React, { Component , Fragment } from 'react'
import {Link} from "react-router-dom" ;
import "./Atelier.css" ;
import img1 from "../assets/img/whiteroom.jpg" ;
import wp from "../tools/Api" ;
import Gallery from 'react-photo-gallery';
import GalleryPhoto from './Gallery';


let photos = [] ;



  
export default class Atelier extends Component {
    constructor(props){
        super(props);

        this.state={
            realisations:null,
            currentReal:null,
            photos:[],
            
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
        currentReal:realisation,
        photos:[]
    })
    
})
 }


 componentDidUpdate(prevProp, prevState) {
    if(prevState.currentReal !== this.state.currentReal) {
        this.setState({
            photos:[]
        })
        let {currentReal} = this.state ;

      this.getMedia(currentReal.id)
        
    }
 }
    
    componentDidMount(){
      
        this.getRealisations();

     
      
        
    }

    getMedia(catId){
        
      

        wp.media().param('realisation', [catId]).page(1).perPage(100).get(function( err, data ) {
          if ( err ) {
              // handle err
          } 
             data.map((image) =>  
              photos.push({
                  src:image.guid.rendered,
                  width:4,
                  height:3,
                  title:image.title.rendered

                })                   
             )
        })
       
            this.setState({
                photos:photos
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
        let {realisations , currentReal,photos} = this.state ;


        return (


        <section id="atelier-container">
            
            <div className="atelier-container-one">      
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
        </div>
    </div>
    
    <div id="galerie-tapisserie" className="atelier-container-two">
        <div className="img-atelier-bloc">
           
           {(photos) ?
               <GalleryPhoto photos={photos} />
        
                  :"LOADING"}  
         </div>
    </div>
        </section>

        )
    }
}
