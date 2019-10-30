import React from 'react';
import style from './Article.module.css';
import  ArticleReduxForm  from './OneArticle/FormArticle';
import OneArticle from './OneArticle/OneArticle';



const Article = (props) => {
  

   let articleElements = props.articles.map(a => ( 
    <OneArticle  DeleteArticle = {props.DeleteArticle} 
     key = {a._id}  
     id = {a._id}  
     time = {a.time} 
     link = {a.link} 
     linkImg = {a.linkImg} 
     zagolovok = {a.zagolovok}  
     preview = {a.preview} 
     content = {a.content} /> 
     ))
      

const onSubmit = (formData) => {
props.AddArticle(formData); 
} 

  return (
    <div className={style.item} >
    <ArticleReduxForm onSubmit = {onSubmit} />
    {articleElements}
    </div>
  )
}
export default Article;
