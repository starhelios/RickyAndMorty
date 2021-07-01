export const BASE = 'ricknmorty/reducer/loader';

export const SET_HOME_LOADING = BASE + '/home';
export const SET_SUBMIT_LOADING = BASE + '/sumbit';


const initialState = {
    home: false,
    submit: false,
}

export default loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_LOADING:
            return {
                ...state,
                home: action.payload,
            }
        case SET_SUBMIT_LOADING:
            return {
                ...state,
                submit: action.payload,
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

export const setSubmitLoader = (payload) => {
    return {
        type: SET_SUBMIT_LOADING,
        payload
    }
}


