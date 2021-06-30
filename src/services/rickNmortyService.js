import API from "../config/api/apiConfig";


const ENDPOINTS = {
    CHARACTER: '/character',
    LOCATIONS: '/location'
}

export const GET_Characters = async () => {
    try {
        let response = await API.get(ENDPOINTS.CHARACTER);
        let data = response.data.results;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_CHARACTERS -> ', err);
    }
}

export const GET_Locations = async () => {
    try {
        let response = await API.get(ENDPOINTS.LOCATIONS);
        let data = response.data.results;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_CHARACTERS -> ', err);
    }
}

export const GET_CharacterData = async (url) => {
    try {
        let response = await API.get(url);
        let data = response.data;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_CHARACTERS -> ', err);
    }
}