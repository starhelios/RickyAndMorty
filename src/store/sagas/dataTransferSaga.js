import { call, put, takeEvery } from "@redux-saga/core/effects";
import { GET_Locations, POST_Form } from "../../services/rickNmortyService";
import { setHomeLoader, setSubmitLoader } from "../reducers/loaderReducer";
import { setLocationsArray } from "../reducers/locationsReducer";
import * as NavigationService from '../../config/navigation/navigationService';
import { HOME_SCREEN } from "../../navigation/screenNames";

const BASE = 'ricknmorty/saga/dataTransferSaga'

export const LOCATIONS_DATA_SAGA = BASE + '/locations';
export const SEND_IMPRESSION_SAGA = BASE + '/impression';


export function* locationsData() {
    try {
        yield put(setHomeLoader(true));
        let data = yield call(GET_Locations);
        yield put(setLocationsArray(data));
    } catch (err) {
        console.log(`Error @ dataTransferSaga.js : SAGA -> ${LOCATIONS_DATA_SAGA}, err: `, err);
    } finally {
        yield put(setHomeLoader(false));
    }
}

export function* postImpression(data) {
    try {
        yield put(setSubmitLoader(true));
        let response = yield call(POST_Form, { data });
        NavigationService.navigate(HOME_SCREEN);
    } catch (err) {
        console.log(`Error @ dataTransferSaga.js : SAGA -> ${SEND_IMPRESSION_SAGA}, err: `, err);
    } finally {
        yield put(setSubmitLoader(false));
    }
}

export function* watchLocationsData() {
    yield takeEvery(LOCATIONS_DATA_SAGA, locationsData);
}

export function* watchImpressionData() {
    yield takeEvery(SEND_IMPRESSION_SAGA, postImpression);
}