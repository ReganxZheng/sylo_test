import { fork, all } from 'redux-saga/effects';

import gistSaga from 'src/component/addGist/addGist.saga';

export default function*() {
  yield all([fork(gistSaga)]);
}
