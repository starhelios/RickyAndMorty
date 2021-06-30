import { call, put, takeEvery } from "@redux-saga/core/effects";
import { setHomeLoader } from "../reducers/loaderReducer";

const BASE = 'ricknmorty/saga/dataTransferSaga'

export const RnM_DATA_SAGA = BASE + '/data';

export function* rnmData() {
    try {
        yield put(setHomeLoader(true));
        console.log(`dataTransferSaga.js : SAGA -> ${RnM_DATA_SAGA}`);
    } catch (err) {
        console.log(`Error @ dataTransferSaga.js : SAGA -> ${RnM_DATA_SAGA}, err: `, err);
    } finally {
        yield put(setHomeLoader(false));
    }
}