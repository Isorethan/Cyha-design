import React, { Component , Fragment } from 'react'
import "./Atelier.css" ;
import wp from "../tools/Api" ;
import GalleryPhoto from './Gallery';
import {Helmet} from "react-helmet";
import prev from "../assets/img/FLECHEGAUCHE.svg"
import next from "../assets/img/FLECHEDROITE.svg"





let photos ;
function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  }
export default class Atelier extends Component {
    constructor(props){
        super(props);

        this.state={
            realisations:null,
            currentReal:null,
            photos:[],
            page:1
            
        }
//  this.initGallery = this.initGallery.bind(this);
//  this.getMedia = this.getMedia.bind(this);
    }
   
 setCurrentReal=(e)=> {
let atelierItems = document.querySelectorAll('.nav-item-atelier')
if(atelierItems){
    for (let item of atelierItems) {
        item.classList.remove("active")
        }
}
    let t = this ;

 let ServiceChoisi = e.target.dataset.id ;
 if(ServiceChoisi){
   e.target.classList.add("active")
 }


 wp.realisation().id(ServiceChoisi).get(function( err, realisation ) {
    if ( err ) {
        // handle err
        console.log(err)
    }else {
        t.setState({
            currentReal:realisation,
            page:1
         
        })
    t.getMedia(ServiceChoisi, 1) ;
    }
    // do something with the returned posts                      

    
 })
 }

initGallery=()=> {

    wp.realisation = wp.registerRoute( 'wp/v2', '/realisation/(?P<id>)' );
            let t = this ;
           
            wp.realisation().get(function( err, realisations ) {
                if ( err ) {   
                    console.log(err)
                }
                    t.setState({
                    currentReal:realisations[0]
                })

            })
}


 componentDidUpdate(prevProp, prevState) {
    let {currentReal, page} = this.state ;
    
    if(prevState.currentReal !== this.state.currentReal) {
     
        this.setState({
            currentReal:currentReal
       
        })

        this.getMedia(currentReal.id, page)
      
    }
   
 }
    
    componentDidMount(){
      
        this.getRealisations();
        this.initGallery();    
        
        wp.realisation = wp.registerRoute( 'wp/v2', '/realisation/(?P<id>)' );
            let t = this ;
           
            wp.realisation().get(function( err, realisations ) {
                if ( err ) {   
                    console.log(err)
                }
                    
                  t.getMedia(realisations[0].id,1)


            })
          
    }

    getMedia(catId, currentPage){    
     let t=this;
        wp.media().param('realisation', [catId]).page(currentPage).perPage(9).get(function( err, data ) {
          if ( err ) {
              // handle err
          }else{
            photos= [];
            data.map((image) =>  
             photos.push({
                 src:image.guid.rendered,
                 width:4,
                 height:4,
                 title:image.title.rendered
                 

               })                   
            )
            t.setState({
                photos:photos,
                page:currentPage,
                totalPages:data._paging.totalPages

            })   
          }  
        })
       
           
     }





     increment=()=> {
        let   t= this;
        let {currentReal}= t.state ;
        let nextPage = t.state.page+1 ;
        
        this.getMedia(currentReal.id, nextPage)
       }
    
    
       decrement=()=> {
         let t=this;
         let {currentReal}= t.state ;
         let prevPage = t.state.page-1 ;
       
         this.getMedia(currentReal.id, prevPage)
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
        let {realisations , currentReal,photos,page,totalPages} = this.state ;


        return (


        <section id="atelier-container">
            
            <div className="atelier-container-one">      
        <h2 className="title-page-atelier">l' atelier de cyha</h2>
        <nav className="bloc-atelier-nav">
            {  (realisations)? realisations.map((realisation, i)=>
                  
                <li key={i} className="nav-item-atelier"  onClick={this.setCurrentReal.bind(this)}  data-id={realisation.id}>{realisation.name}</li>
                
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
           <Fragment>
               <GalleryPhoto  photos={photos} direction="column" columns={columns}/>
               <div id="pagination">
                    <img onClick={this.decrement.bind(this)} src={prev} alt="prev" className={(page < 2 ) ? 'disabled' : 'prev'}  />  
                            <span className="page-count">
                            |{page} / {totalPages}|
                            </span>
                        <img onClick={this.increment.bind(this)} src={next} alt="next" className={(page>= totalPages ) ? 'disabled' : 'next'}/>  
                </div>
             </Fragment>
        
                  :
                  <Fragment>
                  <p className="loading-text">Loading...</p>
                  <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                  </div>
                      </Fragment>}  
                    
         </div>
    </div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CYHA DESIGN Réalisations</title>
                <link rel="canonical" href="https://cyha-design.fr/realisations/" />
                <meta name="description" content="Réalisations de CYHA DESIGN , photos et descriptions" />
            </Helmet>
        </section>

        )
    }
}
