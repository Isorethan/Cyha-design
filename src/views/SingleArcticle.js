import React, {useState , Fragment} from 'react';
import {useParams} from 'react-router-dom';
import wp from '../tools/Api';
import "./SingleArticle.css" ;
import Image from '../components/Image';
import {Helmet} from "react-helmet";

 export default ()  => {
  const[article, loadArticle] = useState(false);
    let {slug} = useParams();
    // let state = useState(false);
    // const article = state [0];
    // const loadArticle = state[1];
   
    // [
        //value,
        // function (newValue) 
    // ]
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
        const date = new Date(article.date);
        return (
            <div className="single-article">
                <h1>{article.title.rendered}</h1>
                    {/* <p>{article.categories}</p> */}
                    <p>{ `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`}</p>
                    <Image id={article.featured_media} className="vignette-img" size='full'  />                    
                    <div dangerouslySetInnerHTML={{
                        __html: article.content.rendered.replace(/<script(.)*<\/script>/gm, '')
                    }}>
                    </div>
                    <Helmet>
                      <meta charSet="utf-8" />
                        <title>CYHA DESIGN-{article.title.rendered}</title>
                      
                      <meta name="description" content={article.excerpt.rendered} />
                    </Helmet>
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

