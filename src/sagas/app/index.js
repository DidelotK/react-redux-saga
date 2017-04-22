import { fork } from 'redux-saga/effects';

import watchAppInit from './app-init';

export default [
  fork(watchAppInit)
];