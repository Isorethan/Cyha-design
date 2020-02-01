import React, {Component, Fragment } from 'react';
import {Switch,Route} from "react-router-dom";
import Accueil from '../views/Accueil';
import About from '../views/About';
import "./MainRouter.css";
import Atelier from '../views/Atelier';
import Footer from '../components/Footer';
import GalleryPhoto from '../views/Gallery';
import Blog from '../views/Blog';
import SingleArcticle from '../views/SingleArcticle';
import Contact from '../views/Contact';
import Services from'../views/Services';

export default class MainRouter extends Component {

    state ={
    
   }









      
    
    

render() {
    let { realisations  } = this.state ;
    return (
        <Fragment>
        <main>
                <Switch>
                        <Route exact path="/">
                            <Accueil/>
                        </Route> 

                        <Route exact path="/about">   
                            <About/>
                        </Route> 


                        <Route exact path="/atelier">
                            <Atelier realisations={realisations} />
                        </Route> 

                        <Route exact path="/atelier/galerie/:realisation" children={({location}) => <GalleryPhoto location={location} />}/>
                           
                   
                        


                        <Route exact path="/services">
                            <Services/>
                         </Route> 

                        <Route exact path="/articles">
                        <Blog/>
                        </Route> 

                        <Route path="/articles/:slug" children={<SingleArcticle/>} />
                        
                        
                        <Route exact path="/contacts">
                        <Contact/>
                        </Route> 

                        <Route exact path="/mentionslegales">

                        </Route> 


                </Switch>
        </main>
        <Footer/>
        </Fragment>
    )

}

}
        
       

 