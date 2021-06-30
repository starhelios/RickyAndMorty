import { all } from 'redux-saga/effects';
import { watchLocationsData } from '../../store/sagas/dataTransferSaga';

export default function* rootSaga() {
    yield all([
        watchLocationsData()
    ])
}