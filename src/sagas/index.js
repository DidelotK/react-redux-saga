import appSagas from './app';
import resource1Sagas from './resource1';
import resource2Sagas from './resource2';

export default function*() {
  yield [
    ...appSagas,
    ...resource1Sagas,
    ...resource2Sagas
  ];
};
