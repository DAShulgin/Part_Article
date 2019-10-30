import { createStore, combineReducers,  applyMiddleware  } from "redux";
import articleReducer from '../redux/reducers/article-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    articlePage: articleReducer,
    form: formReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
