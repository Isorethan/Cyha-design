import React , {Fragment} from 'react';
import "./NavBar.css";
import {NavLink} from 'react-router-dom';



export default function NavBar() {

    let showNav =()=> 
    {
        let btn = document.querySelector(".toggle-button");
        let navList =  document.querySelector(".main-nav");
        (navList.classList.contains('open')) ? navList.classList.remove("open") :   navList.classList.add("open")  ;
        (navList.classList.contains('open')) ? btn.classList.add('croix') : btn.classList.remove('croix')
    }



    return (
        <Fragment>
<nav className="main-nav" role="navigation">
            <ul className="nav-list">
                <li className=" nav-top-tel">06.99.55.74.04</li>
                <NavLink to ="/about"   onClick={showNav} ><li className="nav-item">CYHA</li></NavLink>
                <NavLink to ="/atelier" onClick={showNav} ><li className="nav-item">ATELIER</li></NavLink>
                <NavLink to ="/services"onClick={showNav} ><li className="nav-item">NOS SERVICES</li></NavLink>
                <NavLink to ="/articles"onClick={showNav} ><li className="nav-item">ACTUALITES</li></NavLink>
                <NavLink to ="/contacts"onClick={showNav} ><li className="nav-item">CONTACTS</li></NavLink>
                <span className="tel-nav">06.99.55.74.04</span>
            </ul>
</nav>
        <button className="toggle-button" onClick={showNav} >
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
        </Fragment>
    )
}
