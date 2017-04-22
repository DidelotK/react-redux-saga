import { call, put, takeLatest } from 'redux-saga/effects';

import * as RESOURCE2_CONSTANTS from '../../constants/resource2';
import {getResource2} from '../../actions/resource2';

const resource2Init = function* () {
  try {
    yield call(getResource2);
    yield put({type: RESOURCE2_CONSTANTS.RESOURCE2_INIT_SUCCESS});
  } catch (e) {
    yield put({type: RESOURCE2_CONSTANTS.RESOURCE2_INIT_FAILURE});
  }
};

export default function* () {
  yield takeLatest(RESOURCE2_CONSTANTS.RESOURCE2_INIT, resource2Init);
};
