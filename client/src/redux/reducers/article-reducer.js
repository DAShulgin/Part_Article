import RecordAPI from '../../API/api';

const SET_ARTICLES = 'SET_ARTICLES';
const ADD_ARTICLES = 'ADD_ARTICLES';


let initialState = {
    articles: []
};

const articleReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ARTICLES:
            return { ...state, articles: action.articles };
        case ADD_ARTICLES:
            return { ...state, articles:[ ...state.articles, action.articles] };    
        default:
            return state;
    }
}

export const SetArticle = (articles) => ({ type: SET_ARTICLES, articles })
export const SetNewArticle = (articles) => ({ type: ADD_ARTICLES, articles })


export const getArticle = () => {
    return (dispatch) => {
        RecordAPI.getRecord().then(articles => {
            dispatch(SetArticle(articles))
        });
    }
}
export const AddArticle = (articles) => {
    return (dispatch) => {
        RecordAPI.AddRecord(articles);
        dispatch(SetNewArticle(articles));
        dispatch(getArticle());
    }
}
export const UpdateArticle = (id, Record) => {
    return (dispatch) => {
        RecordAPI.UpdateRecord(id);
        dispatch(getArticle());
    }
}
export const DeleteArticle = (id) => {
        return (dispatch) => {
            RecordAPI.DeleteRecord(id);
            dispatch(getArticle());
        }
}



export default articleReducer;