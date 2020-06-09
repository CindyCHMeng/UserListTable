import { all, call, delay, put, fork, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USERLIST,
  GET_USERINFO
} from '../actions';
import {
  getUserList,
  getUserInfo
} from '../api/infoAPI'

function* requestUserList(action) {
  const { response, error } = yield call(getUserList, action.data);
  if (response)
    yield put({ type: FETCH_USERLIST.SUCCESS, info: response.body })
  else
    yield put({ type: FETCH_USERLIST.FAILURE, error })
}

function* requestUserInfo(action) {
  const { response, error } = yield call(getUserInfo, action.data);
  if (response)
    yield put({ type: GET_USERINFO.SUCCESS, info: response.body })
  else
    yield put({ type: GET_USERINFO.FAILURE, error })
}

export default function* watchIncrementAsync() {
  yield takeLatest(FETCH_USERLIST.BASE, requestUserList);
  yield takeLatest(GET_USERINFO.BASE, requestUserInfo);
}