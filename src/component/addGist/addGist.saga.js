import { takeLatest, put, select } from 'redux-saga/effects';

import * as actions from 'src/redux/index.duck';
import * as apis from './addGist.api';
import * as selectors from 'src/redux/index.selector';

function* addGistControl() {
  const gistList = yield select(selectors.gistListSelector);
  const hash = yield apis.addGistToIPFS(gistList[gistList.length - 1]);
  const payload = { id: gistList.length - 1, hash: hash };
  yield put({ type: 'ADD_HASH_TO_LIST', payload });
}

export default function*() {
  yield takeLatest(actions.addNewGist, addGistControl);
}
