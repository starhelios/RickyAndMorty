import { all } from 'redux-saga/effects';
import { watchImpressionData, watchLocationsData } from '../../store/sagas/dataTransferSaga';

export default function* rootSaga() {
    yield all([
        watchLocationsData(),
        watchImpressionData(),
    ])
}