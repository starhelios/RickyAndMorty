import { combineReducers } from 'redux';
import loaderReducer from '../../store/reducers/loaderReducer';
import charactersReducer from '../../store/reducers/charactersReducer';

export default combineReducers({
    loaderReducer,
    charactersReducer
})