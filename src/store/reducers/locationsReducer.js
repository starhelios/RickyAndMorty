export const BASE = 'ricknmorty/reducer/locations';

export const SET_LOCATIONS_ARRAY = BASE + '/all';



const initialState = {
    locations: [],
    activeLocation: {
        "id": 1,
        "name": "Earth (C-137)",
        "type": "Planet",
        "dimension": "Dimension C-137",
        "residents": [
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/45",
            "https://rickandmortyapi.com/api/character/71",
            "https://rickandmortyapi.com/api/character/82",
            "https://rickandmortyapi.com/api/character/83",
            "https://rickandmortyapi.com/api/character/92",
            "https://rickandmortyapi.com/api/character/112",
            "https://rickandmortyapi.com/api/character/114",
            "https://rickandmortyapi.com/api/character/116",
            "https://rickandmortyapi.com/api/character/117",
            "https://rickandmortyapi.com/api/character/120",
            "https://rickandmortyapi.com/api/character/127",
            "https://rickandmortyapi.com/api/character/155",
            "https://rickandmortyapi.com/api/character/169",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/179",
            "https://rickandmortyapi.com/api/character/186",
            "https://rickandmortyapi.com/api/character/201",
            "https://rickandmortyapi.com/api/character/216",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/302",
            "https://rickandmortyapi.com/api/character/303",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/343",
            "https://rickandmortyapi.com/api/character/356",
            "https://rickandmortyapi.com/api/character/394"
        ],
        "url": "https://rickandmortyapi.com/api/location/1",
        "created": "2017-11-10T12:42:04.162Z"
    },
}

// ONE CHARACTER MODEL

export default locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATIONS_ARRAY:
            console.log(`loaderReducer.js: action: ${SET_CHARACTERS_ARRAY}`);
            return {
                ...state,
                characters: action.payload,
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