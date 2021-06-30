import API from "../config/api/apiConfig";


const ENDPOINTS = {
    CHARACTER: '/character'
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