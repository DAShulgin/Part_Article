import React, { useState } from 'react';
import style from './EditArticle.module.css';

const EditArticle = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [id] = useState(props.id);
    let [zagolovok, setZagolovok] = useState(props.zagolovok);
    let [time, setTime] = useState(props.time);
    let [link, setLink] = useState(props.link);
    let [linkImg, setLinkImg] = useState(props.linkImg);
    let [preview, setPreview] = useState(props.preview);
    let [content, setContent] = useState(props.content);


    const onHandleChange = () => {
        setZagolovok(inputREf1.current.value);
        setTime(inputREf2.current.value);
        setLink(inputREf3.current.value);
        setLinkImg(inputREf4.current.value);
        setPreview(inputREf5.current.value);
        setContent(inputREf6.current.value);
    }

    const inputREf1 = React.createRef();
    const inputREf2 = React.createRef();
    const inputREf3 = React.createRef();
    const inputREf4 = React.createRef();
    const inputREf5 = React.createRef();
    const inputREf6 = React.createRef();

    const Delete =()=>{
        props.DeleteArticle(id)
    }
    const Save =()=> {
    const article = { zagolovok, time, link, linkImg, preview, content }
                    setEditMode(false);
    props.UpdateArticle(id,article);

    } 
    return (<div className={style.item}>

        {editMode ? <div>
            <div className={style.EditZagolovok}><textarea ref={inputREf1} onChange={onHandleChange} value={zagolovok} /></div>
            <div className={style.EditLink}><input ref={inputREf2} onChange={onHandleChange} value={time} /></div>
            <div className={style.EditLink}><input ref={inputREf5} onChange={onHandleChange} value={preview} /></div>
            <div className={style.EditContent} ><textarea ref={inputREf6} onChange={onHandleChange} value={content} /></div>
            <div className={style.EditLink}><input ref={inputREf3} onChange={onHandleChange} value={link} /></div>
            <div className={style.EditLink}><input ref={inputREf4} onChange={onHandleChange} value={linkImg} /></div>
            <div className={style.btn}>
            <button onClick={Save} > ...Сохранить</button>
            <button onClick={()=>setEditMode(false)} > ...Отмена</button>
            </div>
        </div>
            : <div>
                <div className={style.textZagolovok}>{zagolovok}</div>
                <div className={style.textData}>{time}</div>
                <div className={style.textPreiew}>{preview}</div>
                <div className={style.textContent} >{content}</div>
                <div><b>Cсылка на статью: </b>{link}</div>
                <div><b>Доп.Ссылка: </b>{linkImg}</div>
              
                <div className={style.btn}>
                <button onClick={() => setEditMode(true)} > ...Изменить</button>
                <button onClick = {Delete} >Удалить</button>
                </div>
            </div>
        }
    </div>
    )
}

export default EditArticle;
