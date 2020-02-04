import React, {useState , Fragment} from 'react';
import {useParams} from 'react-router-dom';
import wp from '../tools/Api';
import "./SingleArticle.css" ;
import Image from '../components/Image';

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
                    <Image id={article.featured_media} className="single-article-vignette-img" size='full'  />
                    {/* <p>{article.categories}</p> */}
                    <h1 className="single-article-title">{article.title.rendered}</h1>
                    <p>{ `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`}</p>

                <div>
                <div dangerouslySetInnerHTML={{
                        
                        __html: article.content.rendered.replace(/<script(.)*<\/script>/gm, '')
                    }}>
                    </div>

                </div>
                    
                   

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

