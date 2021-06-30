export const BASE = 'ricknmorty/reducer/characters';

export const SET_CHARACTERS_ARRAY = BASE + '/all';



const initialState = {
    characters: []
}

// ONE CHARACTER MODEL
// {
//          "created":"2017-11-04T18:50:21.651Z",
//          "episode":[
//             "Array"
//          ],
//          "gender":"Male",
//          "id":2,
//          "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//          "location":[
//             "Object"
//          ],
//          "name":"Morty Smith",
//          "origin":[
//             "Object"
//          ],
//          "species":"Human",
//          "status":"Alive",
//          "type":"",
//          "url":"https://rickandmortyapi.com/api/character/2"
//       },
export default charactersReducer = (state = initialState, action) => {
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
