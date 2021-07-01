import API from "../config/api/rnmApiConfig";
import API_PLACEHOLDER from "../config/api/placeholderApiConfig";


const ENDPOINTS = {
    CHARACTER: '/character',
    LOCATIONS: '/location',
    FORM: '/posts'
}

export const GET_Characters = async () => {
    try {
        let response = await API.get(ENDPOINTS.CHARACTER);
        let data = response.data.results;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_Characters -> ', err);
    }
}

export const GET_Locations = async () => {
    try {
        let response = await API.get(ENDPOINTS.LOCATIONS);
        let data = response.data.results;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_Locations -> ', err);
    }
}

export const GET_CharacterData = async (url) => {
    try {
        let response = await API.get(url);
        let data = response.data;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_CharacterData -> ', err);
    }
}

export const GET_Episode = async (url) => {
    try {
        let response = await API.get(url);
        let data = response.data;
        return data;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: GET_Episode -> ', err);
    }
}

export const POST_Form = async (data) => {
    try {
        let text = data.data.text;
        let body = {
            text: text
        }
        let response = await API_PLACEHOLDER.post(ENDPOINTS.FORM, body);
        return;
    } catch (err) {
        console.log('Error @ rickNmortyService.js: POST_Form -> ', err);
    }
}