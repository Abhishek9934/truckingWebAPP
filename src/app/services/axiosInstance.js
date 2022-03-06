import axios from "axios";
import store from '../../redux/store';
import { isAuth, refreshToken } from "./jwt/jwt";
import { setAccessToken } from "../../redux/token/tokenActions";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_LINK,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token = state.token;
    const isAuthToken = await isAuth(token.accessToken);
    console.log(isAuthToken, "ref");
    if (!isAuthToken.success) {
      const newToken = await refreshToken(token.refreshToken);
      console.log("newtoken", newToken);
      const accessToken = newToken.accessToken;
      await store.dispatch(setAccessToken({ accessToken: accessToken }));
      config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    } else {
      config.headers = {
        authorization: `Bearer ${token.accessToken}`,
      };
    }
    config.params = config.params || {};
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;