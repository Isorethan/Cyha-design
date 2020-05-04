import React ,{ Fragment}from 'react';
import './Footer.css';
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.png';
import {Link,useLocation} from 'react-router-dom' ;
export default function Footer() {

    let location = useLocation();

    let TestLocation = ()=> {
        if (location.pathname!=='/'){
            return (<footer className="footer">
            
            
      


        <div className="social-media-container"> 
            <a href="https://www.facebook.com/cyhadesign/" target="_blank" rel="noopener noreferrer"> <img className="social-media-item" src={facebook} alt="facebook" /></a>  
            <a href="https://www.instagram.com/cyhadesign/ " target="_blank" rel="noopener noreferrer"><img className="social-media-item" src={instagram} alt="instagram" />  </a>  
        </div>
        <Link className="mentions-link" to="/mentions-legales/">Mentions Légales</Link>
        </footer>  )
        } else {
            return null
        }
    }


    return (

         <Fragment>
             {TestLocation()}
        
        </Fragment>
    )
}
