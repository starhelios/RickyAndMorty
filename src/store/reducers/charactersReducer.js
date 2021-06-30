export const BASE = 'ricknmorty/reducer/characters';

export const SET_CHARACTERS_ARRAY = BASE + '/all';



const initialState = {
    characters: []
}

export default loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_ARRAY:
            console.log(`loaderReducer.js: action: ${SET_CHARACTERS_ARRAY}`);
            return {
                ...state,
                characters: action.payload,
            }
        default:
            return state;
    }
}

export const setCharactersArray = (payload) => {
    return {
        type: SET_CHARACTERS_ARRAY,
        payload
    }
}
