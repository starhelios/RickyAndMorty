import { all } from 'redux-saga/effects';
import { watchRnmData } from '../../store/sagas/dataTransferSaga';

export default function* rootSaga() {
    yield all([
        watchRnmData()
    ])
}