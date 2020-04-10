import React, {useState , Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import wp from '../tools/Api';
import "./SingleArticle.css" ;
import Image from '../components/Image';
import GalleryPhoto from './Gallery';
import {Helmet} from "react-helmet";
import BtnRetour from '../components/BtnRetour';




 export default ()  => {
  const[article, loadArticle] = useState(false);
  const [gallery, setGallery] = useState([]);
    let {slug} = useParams();

    

    useEffect(() => {
       let  imgNode= document.querySelectorAll(".wp-block-gallery img") ;
       let imgArray= [...imgNode] ;
       let photos= [];
       imgArray.map(img => 
           photos.push({
            src:img.dataset["fullUrl"],
            width:4,
            height:3,
           })
        )
            setGallery(photos)
          
       }, [article])

    if(!article){
    wp.posts().slug(slug).get(function (err, article) {
        if (err){
            console.error(err);
        }else{
            if(article.length){
            loadArticle(article[0]);
            }
        }
    });
}

    if (article){
        console.log(gallery)
        const date = new Date(article.date);
        return (
            <div className="single-article">
                <BtnRetour class="btn-retour-blog" link="/articles" description="Retour Aux Actualités" />  
                <h1>{article.title.rendered}</h1>
                    {/* <p>{article.categories}</p> */}
                    <p>{ `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`}</p>
                    <Image id={article.featured_media} className="vignette-img" size='full'  />                    
                    <div className="article-content" dangerouslySetInnerHTML={{
                        __html: article.content.rendered.replace(/<script(.)*<\/script>/gm, '')
                    }}>
                    </div> 

          
                {(gallery !== []) ? <GalleryPhoto  photos={gallery} /> 
                :  
                 <Fragment>
                    <p className="loading-text">Loading...</p>
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                </Fragment>}
                  
               
                    <Helmet>
                      <meta charSet="utf-8" />
                        <title>CYHA DESIGN-{article.title.rendered}</title>
                      
                      <meta name="description" content={article.excerpt.rendered} />
                    </Helmet>
                    {console.log("return ended")}
                    
            </div>
        )
    }

   
   
    

    return(
        <Fragment>
        <h1 className="loading-text">Chargement de l'article...</h1>
        <div className="spinner">
        <div className="cube1"></div>
         <div className="cube2"></div>
        </div>
        ></Fragment>
    )
    }

