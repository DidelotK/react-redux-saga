import { call, put, takeLatest } from 'redux-saga/effects';

import * as RESOURCE1_CONSTANTS from '../../constants/resource1';
import {getResource1} from '../../actions/resource1';

const resource1Init = function* () {
  try {
    yield call(getResource1);
    yield put({type: RESOURCE1_CONSTANTS.RESOURCE1_INIT_SUCCESS});
  } catch (e) {
    yield put({type: RESOURCE1_CONSTANTS.RESOURCE1_INIT_FAILURE});
  }
};

export default function* () {
  yield takeLatest(RESOURCE1_CONSTANTS.RESOURCE1_INIT, resource1Init);
};
