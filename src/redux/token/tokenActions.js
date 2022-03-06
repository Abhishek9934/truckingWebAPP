import tokenActionTypes from "./tokenTypes";

export const setAccessToken = (access_token) => ({
  type: tokenActionTypes.SET_ACCESS_TOKEN,
  payload: access_token
});

export const setRefreshToken = (refresh_token) => ({
  type: tokenActionTypes.SET_REFRESH_TOKEN,
  payload: refresh_token
});

export const unsetToken = () => ({
  type: tokenActionTypes.UNSET_TOKEN,
});