import React from 'react';
import Image from './Image';
import {Link} from 'react-router-dom';
import "./Article.css";

const Article = (props) => {
    let  {slug , featured_media ,title} = props.article ;
    return (
        
        <article  className="vignette-article">

            <Link className="link-article"to={'/articles/' + slug}> 
            <div className="overlay"></div>  
           
            <Image id={featured_media} className="vignette-img" size='medium_large' />
            
                <h4 className="title-article">{title.rendered}</h4>
               
        {/* <p dangerouslySetInnerHTML={
            {
                __html: props.article.excerpt.rendered.replace(/<script(.)*<\/script>/gm, '')
            }
            }>
        </p> */}
        {props.children}
        </Link> 
        </article>
        
    );
}

export default Article;