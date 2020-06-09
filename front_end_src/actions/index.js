import {
  FETCH_USERLIST,
  GET_USERINFO
} from '../actions';

export function requestUserList(data) {
  return {
    type: FETCH_USERLIST.BASE,
    data
  }
}

export function requestUserInfo(data) {
  return {
    type: GET_USERINFO.BASE,
    data
  }
}