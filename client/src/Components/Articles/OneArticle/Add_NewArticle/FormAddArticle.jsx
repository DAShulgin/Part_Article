import React from 'react';
import style from './FormArticle.module.css';
import style2 from '../EditArticle/EditArticle.module.css';
import { Field, reduxForm } from 'redux-form';


const FormArticle = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div className={style.item}>
                <div className={style2.EditZagolovok}><Field placeholder={"Введите Заголовок"} name={'zagolovok'} component={'textarea'} /></div>
                <div className={style2.EditLink}><Field placeholder={"Введите дату"} name={"time"} component={'input'} /></div>
                <div className={style2.EditLink}><Field placeholder={"Введите превью"} name={'preview'} component={'input'} /></div>
                <div className={style2.EditContent}><Field placeholder={"Введите текст"} name={'content'} component={'textarea'} /></div>
                <div className={style2.EditLink}><Field placeholder={"Введите ссылку"} name={'link'} component={'input'} /></div>
                <div className={style2.EditLink}><Field placeholder={"Введите ссылку на изображение"} name={'linkImg'} component={'input'} /></div>

                <div className={style.btn}>
                <button> Сохранить </button>
                </div>
            </div>

        </form>
    )
}

const AddArticleReduxForm = reduxForm({ form: 'Add_NewArticle' })(FormArticle);

export default AddArticleReduxForm;

