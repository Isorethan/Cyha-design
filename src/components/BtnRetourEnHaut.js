import React, {useState ,useEffect} from 'react'
import "./BtnRetourEnHaut.css"
export default function BtnRetourEnHaut () {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 let backTop = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }






  
    return (
        (scrollPosition >200) ? <div id="backToTop" onClick={backTop} >
             <i class="arrow up"></i>
    </div>:null
       
    )
}
