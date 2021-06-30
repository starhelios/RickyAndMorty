export const BASE = 'ricknmorty/reducer/loader';

export const SET_HOME_LOADING = BASE + '/splash';



const initialState = {
    splash: false
}

export default loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_LOADING:
            console.log(`loaderReducer.js: action: ${SET_HOME_LOADING}`);
            return {
                ...state,
                splash: action.payload,
            }
        default:
            return state;
    }
}

export const setHomeLoader = (payload) => {
    return {
        type: SET_HOME_LOADING,
        payload
    }
}

