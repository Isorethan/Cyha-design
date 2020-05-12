import React from 'react' ;
import NavBar from './NavBar' ;
import './Header.css' ;
import logo from '../assets/img/logo_blanc.svg' ;

import {Link, useLocation} from "react-router-dom";

export default function Header() {

 
   
    


    let headerClass='header' ;
    let location= useLocation();
    // console.log(location.pathname)
    if (location.pathname==="/"){
       headerClass="header-home" ;
    }
    return (
        <header className={headerClass}>
          <Link className="logo-link" to="/" > 
            <img src={logo} alt="CYHA DESIGN" id="logo"/>
          </Link>
         <NavBar />
      
        </header>
    )
}
