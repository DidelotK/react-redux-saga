import { take, put } from 'redux-saga/effects';

const test = function*() {
  while (true) {
    yield take('TEST');
    yield put('TEST_2');
  }
};

export default function*() {
  yield [
    test
  ];
};
