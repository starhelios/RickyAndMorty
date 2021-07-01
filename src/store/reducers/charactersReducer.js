export const BASE = 'ricknmorty/reducer/characters';

export const SET_CHARACTERS_ARRAY = BASE + '/all';
export const SET_ACTIVE_CHARACTER = BASE + '/active';


const initialState = {
    characters: [],
    activeResident: {},
}
export default charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_ARRAY:
            console.log(`loaderReducer.js: action: ${SET_CHARACTERS_ARRAY}`);
            return {
                ...state,
                characters: action.payload,
            }
        case SET_ACTIVE_CHARACTER:
            console.log(`loaderReducer.js: action: ${SET_ACTIVE_CHARACTER}`);
            return {
                ...state,
                activeResident: action.payload,
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

export const setActiveCharacterArray = (payload) => {
    return {
        type: SET_ACTIVE_CHARACTER,
        payload
    }
}
