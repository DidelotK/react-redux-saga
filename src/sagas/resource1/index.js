import { fork } from 'redux-saga/effects';
import watchGetResource1 from './get-resource1';

export default [
  fork(watchGetResource1)
];
