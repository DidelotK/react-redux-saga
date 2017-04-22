import { take, put, takeLatest } from 'redux-saga/effects';

import * as APP_CONSTANTS from '../../constants/app';
import * as RESOURCE1_CONSTANTS from '../../constants/resource1';
import * as RESOURCE2_CONSTANTS from '../../constants/resource2';

const takePatern = action => {
  switch (action.type) {
    case RESOURCE1_CONSTANTS.RESOURCE1_INIT_SUCCESS:
      return true;
    case RESOURCE1_CONSTANTS.RESOURCE1_INIT_FAILURE:
      return true;
    case RESOURCE2_CONSTANTS.RESOURCE2_INIT_SUCCESS:
      return true;
    case RESOURCE2_CONSTANTS.RESOURCE2_INIT_FAILURE:
      return true;
    default:
      return false;
  }
};

const updateState = (initState, result) => {
  switch (result.type) {
    case RESOURCE1_CONSTANTS.RESOURCE1_INIT_SUCCESS:
      initState.resource1Done = true;
      return;
    case RESOURCE1_CONSTANTS.RESOURCE1_INIT_FAILURE:
      initState.resource1Done = true;
      initState.errors.push('Fail to fetch resource 1');
      return;
    case RESOURCE2_CONSTANTS.RESOURCE2_INIT_SUCCESS:
      initState.resource2Done = true;
      return;
    case RESOURCE2_CONSTANTS.RESOURCE2_INIT_FAILURE:
      initState.resource2Done = true;
      initState.errors.push('Fail to fetch resource 2');
      return;
    default:
      return;
  }
};

const appInit = function*() {
  const initState = {
    resource1Done: false,
    resource2Done: false,
    errors: []
  };

  yield put({type: RESOURCE1_CONSTANTS.RESOURCE1_INIT});
  yield put({type: RESOURCE2_CONSTANTS.RESOURCE2_INIT});

  while (!initState.resource1Done || !initState.resource2Done) {
    const result = yield take(takePatern);
    updateState(initState, result);
  }

  if (initState.errors.length === 0) {
    yield put({type: APP_CONSTANTS.APP_INIT_SUCCESS});
  } else {
    yield put({type: APP_CONSTANTS.APP_INIT_FAILURE, errors: initState.errors});
  }

};

export default function* () {
  yield takeLatest(APP_CONSTANTS.APP_INIT, appInit);
};
