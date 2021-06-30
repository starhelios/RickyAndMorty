import { combineReducers } from 'redux';
import loaderReducer from '../../store/reducers/loaderReducer';
import charactersReducer from '../../store/reducers/charactersReducer';
import locationsReducer from '../../store/reducers/locationsReducer';

export default combineReducers({
    loaderReducer,
    charactersReducer,
    locationsReducer
})