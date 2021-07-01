import axios from 'axios';

const BASE_URL_ROUTE = "https://jsonplaceholder.typicode.com"

const API_PLACEHOLDER = axios.create({
    baseURL: BASE_URL_ROUTE
})

const responseInterceptorID = API_PLACEHOLDER.interceptors.response.use(
    response => handleSuccessResponse(response),
    error => handleErrorResponse(error),
);

const handleSuccessResponse = response => {
    return response;
};

const handleErrorResponse = error => {
    if (error.message === 'Network Error') {
        let customError = {
            title: 'Network Error',
            status: 0,
            message: 'Check your internet connection',
            completed: false,
        };
        Alert.alert(customError.title, customError.message);
        return Promise.reject(customError);
    } else
        console.log('Not network error.');

    const { status, errors } = error.response.data;

    let customError = null;

    switch (status) {
        case 400:
            customError = {
                title: 'Bad request',
                status: 400,
                message: errors,
                completed: false,
            };
            break;
        case 404:
            customError = {
                title: 'Not found',
                status: 404,
                message: 'Resource does not exist',
                completed: false,
            };
            break;
        case 500:
            customError = {
                title: 'Server error',
                status: 500,
                message: errors,
                completed: false,
            };
        default:
            customError = error;
            break;
    }

    if (error.response.status == 500) {
        customError = {
            title: 'Server error',
            status: 500,
            message: { error: 'Server error' },
            completed: false,
        };
    }
    return Promise.reject(customError);
};

export default API_PLACEHOLDER;