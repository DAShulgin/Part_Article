import React, { useState } from 'react';
import style from './Article.module.css';
import AddArticleReduxForm from './OneArticle/Add_NewArticle/FormAddArticle';
import EditArticle from './OneArticle/EditArticle/EditArticle'



const Article = (props) => {

  let [editMode, setEditMode] = useState(false);


  const onSubmit = (value) => {
    props.AddArticle(value);
    setEditMode(false)
  }


   let articleElements = props.articles.map(a => (
    <EditArticle
      DeleteArticle={props.DeleteArticle} UpdateArticle ={props.UpdateArticle}
      key={a._id}
      id={a._id}
      time={a.time}
      link={a.link}
      linkImg={a.linkImg}
      zagolovok={a.zagolovok}
      preview={a.preview}
      content={a.content} />
  )) 
 

  return (
    <div className={style.item}>

      {editMode ? <div>
        <button onClick={() => setEditMode(false)} > Отмена </button>
        <AddArticleReduxForm onSubmit={onSubmit}/>

      </div> : <div>
          <button onClick={() => setEditMode(true)} > Добавить Статью </button>
        {articleElements} 
        </div>
      }
    </div>
  )
}
export default Article;
