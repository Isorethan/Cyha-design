import React, {Component , Fragment} from 'react';
import wp from '../tools/Api';
import Article from '../components/Article';
import './Blog.css' ;
import prev from "../assets/img/FLECHEGAUCHE.svg"
import next from "../assets/img/FLECHEDROITE.svg"
import {Helmet} from "react-helmet";

export default class Blog extends Component{
   
    
        state = {
            articles: null,
            page: 1,
            categorie:false,
            perPage : 9
        }

    componentDidMount()
    {
      this.getArticles();
      this.getCategories();
    }




    componentDidUpdate(Pp ,Ps, Ss){
      if (Ps.categorie !== this.state.categorie){
          this.updateArticles(1)
      }
  
   
    }

getCategories=()=>{
let t=this;
 wp.categories().get((err , categories)=>{
   if (err){

   }else {
    categories.map(() =>
    t.setState({
      allCategories:categories
    })
     )
      
   }
 })
}



// getArticles(){
//   let t = this;
//   fetch('/wp-json/wp/v2/posts?perpage=9&page='+this.state.page)
//       .then(response => {
//           let headers = response.headers;
//           t.setState({totalPages: headers.get('X-WP-TotalPages')});
//           return response.json();
//       })
//       .then(articles => {
//           t.setState({articles : articles});
//       })
// }




 getArticles=()=>{
   
    let t =this;
 
    wp.posts().perPage(this.state.perPage).page(t.state.page).get((error, articles)=>{
        if(error){
            t.setState({
                error: error
            })
        }else{
            t.setState({
                page:1,
                totalPages:articles._paging.totalPages,
                articles: articles
            })
        }
    });
 }
 updateArticles=(newpage)=>{
    let t =this;

    t.setState({
      articles:null,
      page:newpage 
    })
    

    if (t.state.categorie) {
      wp.posts().categories(t.state.categorie).page(newpage).perPage(this.state.perPage).get((error, articles)=>{
        if(error){
            t.setState({
                error: error
            })
        }else{
           if(articles) {  
               t.setState({
            articles: articles ,
            totalPages:articles._paging.totalPages
        }) }
          
        }
      
      })
    }else{
      wp.posts().page(newpage).perPage(this.state.perPage).get((error, articles)=>{
        if(error){
            t.setState({
                error: error
            })
        }else{
       
            t.setState({
              articles: articles ,
              totalPages:articles._paging.totalPages
          })
          
        }
      
    })
    } 
 }




chooseCategorie = (e) => {
  let t =this;

  let {value} = e.target ;

  t.setState({
    categorie:value,
    page:1
  })
}

  resetCat= ()=> {
    this.setState({
      categorie:false,
    })
  }


   increment=()=> {
    let   t= this;
   let nextPage = t.state.page+1 ;
    
     this.updateArticles(nextPage)
   }


   decrement=()=> {
     let t=this;
     let prevPage = t.state.page-1 ;
   
     t.updateArticles(prevPage)
   }

      render () {
        
        let {articles, page ,totalPages, allCategories} = this.state;
        
        return(
          <Fragment>
        <section id="actualite-content">
        <div id="nav-articles">
                <select id="nav-list"  onChange={this.chooseCategorie.bind(this)} >
               
                  { (allCategories) && allCategories.map((cat,i)=>
                  <option className="nav-list-item" value={cat.id} key={i}  >{cat.name}</option>
                  )}
                </select>
            </div>
            { 
             
                (articles != null) ? <Fragment>
                    <div id="vignettes-content">
                        {
                            articles.map(
                                (article, index) =>
                                    <Article key={index} article={article} />
                                        
                                    
                            )
                        }
                      
              

                    </div>
                    
                       <div id="pagination">
                          <img onClick={this.decrement.bind(this)} src={prev} alt="prev" className={(page < 2 ) ? 'disabled' : 'prev'}  />  
                                <span className="page-count">
                                  |{page} / {totalPages}|
                                </span>
                            <img onClick={this.increment.bind(this)} src={next} alt="next" className={(page>= totalPages ) ? 'disabled' : 'next'}/>  
                        </div>
                             <Helmet>
                                <meta charSet="utf-8" />
                                <title>CYHA DESIGN Articles</title>
                                <link rel="canonical" href="https://cyha-design.fr/articles/" />
                                <meta name="description" content="Les actualités de CYHA DESIGN" />
                            </Helmet>
                             </Fragment>
                :
                <Fragment>
                <p className="loading-text">Loading...</p>
                <div className="spinner">
                   <div className="cube1"></div>
                    <div className="cube2"></div>
                   </div>
                    </Fragment>
            }
         
        </section>
       
        </Fragment>
        )
    }
}