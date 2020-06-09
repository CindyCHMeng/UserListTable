import {
  FETCH_USERLIST,
  GET_USERINFO
} from '../actions';

const initState = {
  userList: [],
  userInfo: {},
};

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERINFO.BASE:
      return {
        ...state,
        userInfo: initState.userInfo
      }
    case FETCH_USERLIST.SUCCESS:
      return {
        ...state,
        userList: (action.info)? action.info : initState.userList,
      }
    case GET_USERINFO.SUCCESS:
      return {
        ...state,
        userInfo: (action.info)? action.info : initState.userInfo
      }
    case FETCH_USERLIST.FAILURE:
    case GET_USERINFO.FAILURE:
      console.log("Fail: ", action.error);
    default:
      return state;
  }
}

export default infoReducer;