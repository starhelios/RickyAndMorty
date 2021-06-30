export const BASE = 'ricknmorty/reducer/loader';

export const SET_SPLASH_LOADING = BASE + '/splash';



const initialState = {
    splash: false
}

export default loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPLASH_LOADING:
            console.log(`loaderReducer.js: action: ${SET_SPLASH_LOADING}`);
            return {
                ...state,
                splash: action.payload,
            }
        default:
            return state;
    }
}

export const setSplashLoader = (payload) => {
    return {
        type: SET_SPLASH_LOADING,
        payload
    }
}

