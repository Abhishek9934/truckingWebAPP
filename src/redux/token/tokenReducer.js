import tokenActionTypes from "./tokenTypes";

const INITIAL_STATE = {
  refreshToken: null,
  accessToken: null,
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case tokenActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };

    case tokenActionTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
      };

    case tokenActionTypes.UNSET_TOKEN:
      return {
        ...state,
        refreshToken: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default tokenReducer;