
function createAction(actionName) {
  return {BASE: actionName, REQUEST: `${actionName}_REQUEST`, SUCCESS: `${actionName}_SUCCESS`, FAILURE: `${actionName}_FAILURE`};
}


export const FETCH_USERLIST = createAction('FETCH_USERLIST');
export const GET_USERINFO = createAction('GET_USERINFO');