export const BASE = 'ricknmorty/reducer/loader';

export const SET_HOME_LOADING = BASE + '/home';



const initialState = {
    home: false
}

export default loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_LOADING:
            console.log(`loaderReducer.js: action: ${SET_HOME_LOADING}`);
            return {
                ...state,
                home: action.payload,
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

