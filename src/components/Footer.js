import React from 'react';
import './Footer.css';
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
export default function Footer() {
    return (
        <footer className="footer">
        
            <div className="social-media-container"> 
                <a href="https://www.facebook.com/cyhadesign/" target="_blank" rel="noopener noreferrer"> <img className="social-media-item" src={facebook} alt="facebook" /></a>  
                <a href="https://www.instagram.com/cyhadesign/ " target="_blank" rel="noopener noreferrer"><img className="social-media-item" src={instagram} alt="instagram" />  </a>  
            </div>

            <a href ="/mentionslegales" className="mentionslegales">Mentions légales</a>
            
        </footer>
    )
}
