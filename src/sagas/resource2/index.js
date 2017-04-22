import { fork } from 'redux-saga/effects';
import watchGetResource2 from './get-resource2';

export default [
  fork(watchGetResource2)
];
