export const BASE = 'ricknmorty/reducer/locations';

export const SET_LOCATIONS_ARRAY = BASE + '/all';



const initialState = {
    locations: [],
    activeLocation: {},
}

export default locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATIONS_ARRAY:
            console.log(`loaderReducer.js: action: ${SET_LOCATIONS_ARRAY}`);
            return {
                ...state,
                locations: action.payload,
            }
        default:
            return state;
    }
}

export const setLocationsArray = (payload) => {
    return {
        type: SET_LOCATIONS_ARRAY,
        payload
    }
}