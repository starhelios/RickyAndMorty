import { call, put, takeEvery } from "@redux-saga/core/effects";
import { GET_Characters, GET_Locations } from "../../services/rickNmortyService";
import { setCharactersArray } from "../reducers/charactersReducer";
import { setHomeLoader, setSubmitLoader } from "../reducers/loaderReducer";
import { setLocationsArray } from "../reducers/locationsReducer";

const BASE = 'ricknmorty/saga/dataTransferSaga'

export const LOCATIONS_DATA_SAGA = BASE + '/locations';
export const SEND_IMPRESSION_SAGA = BASE + '/impression';


export function* locationsData() {
    try {
        console.log(`dataTransferSaga.js : SAGA -> ${LOCATIONS_DATA_SAGA}`);
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
        console.log(`dataTransferSaga.js : SAGA -> ${SEND_IMPRESSION_SAGA}`);
        console.log(data);
        yield put(setSubmitLoader(true));

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