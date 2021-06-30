import { call, put, takeEvery } from "@redux-saga/core/effects";
import { GET_Characters } from "../../services/rickNmortyService";
import { setHomeLoader } from "../reducers/loaderReducer";

const BASE = 'ricknmorty/saga/dataTransferSaga'

export const RnM_DATA_SAGA = BASE + '/data';

export function* rnmData() {
    try {
        console.log(`dataTransferSaga.js : SAGA -> ${RnM_DATA_SAGA}`);
        yield put(setHomeLoader(true));
        const data = yield call(GET_Characters);
    } catch (err) {
        console.log(`Error @ dataTransferSaga.js : SAGA -> ${RnM_DATA_SAGA}, err: `, err);
    } finally {
        yield put(setHomeLoader(false));
    }
}

export function* watchRnmData() {
    yield takeEvery(RnM_DATA_SAGA, rnmData)
}