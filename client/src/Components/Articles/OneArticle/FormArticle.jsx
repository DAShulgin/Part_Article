import React from 'react';
import style from './FormArticle.module.css';
import { Field, reduxForm } from 'redux-form';

const FormArticle = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div className={style.item}>
                <div className={style.blok_1}><Field placeholder={"Введите Заголовок"} name={'zagolovok'} component={'input'} /></div>
                <div className={style.blok_2}><Field placeholder={"Введите дату"} name={"time"} component={'input'} /></div>
                <div className={style.blok_2}><Field placeholder={"Введите ссылку"} name={'link'} component={'input'} /></div>
                <div className={style.blok_2}><Field placeholder={"Введите ссылку на изображение"} name={'linkImg'} component={'input'} /></div>
                <div className={style.blok_2}><Field placeholder={"Введите превью"} name={'preview'} component={'input'} /></div>
                <div className={style.blok_1} ><Field placeholder={"Введите текст"} name={'content'} component={'input'} /></div>

                <div className={style.btn}>
                <button> Сохранить </button>
                </div>
            </div>

        </form>
    )
}

const ArticleReduxForm = reduxForm({ form: 'Article' })(FormArticle);

export default ArticleReduxForm;

