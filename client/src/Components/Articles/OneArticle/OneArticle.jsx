import React from 'react';
import style from './OneArticle.module.css';

const OneArticle = (props) => {

    let Delete = () => {
        let id = newMessageElement.current.value;
        props.DeleteArticle(id)
    }

    let newMessageElement = React.createRef();

    const id = props.id;



    return (

        <div className={style.item}>

            <div>
                <input type='hidden' value={id} ref={newMessageElement} />
                <div> {props.time} </div>
                <div> {props.link}</div>
                <div> {props.linkImg}</div>
                <div> {props.zagolovok}  </div>
                <div> {props.preview} </div>
                <div>  {props.content} </div>
                <div className={style.btn}>
                <button> ...Изменить</button>
                <button onClick={Delete}>Удалить</button> </div>
            </div>
        </div>

    )
}

export default OneArticle;
