import { isAuth, refreshToken } from "../app/services/jwt/jwt";
import { store } from "../redux/store";
import { setAccessToken } from "../redux/token/tokenActions";

export const wrapper = async (apiFunc, data) => {
  const state = store.getState();
  const token = state.token;
  const isAuthToken = await isAuth(token.accessToken);
  console.log(isAuthToken, "ref");
  if (!isAuthToken.success) {
    console.log("getting new");
    const newToken = await refreshToken(token.refreshToken);
    console.log("newtoken", newToken);
    const accessToken = newToken.accessToken;
    await store.dispatch(setAccessToken({ accessToken: accessToken }));
    if (data) return apiFunc(data, accessToken);
    else return apiFunc(accessToken);
  } else {
      if (data) return apiFunc(data, token.accessToken);
      else return apiFunc(token.accessToken);
  }
};
