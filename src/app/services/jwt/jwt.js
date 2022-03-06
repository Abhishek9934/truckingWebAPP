const axios = require("axios");

export async function isAuth(access_token) {
  const res = await axios.get(
    process.env.REACT_APP_BACKEND_LINK + "auth/isauth",
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  );
  return res["data"];
}

export async function refreshToken(refresh_token) {
  const res = await axios.post(
    process.env.REACT_APP_BACKEND_LINK + "auth/refresh",
    {
      refreshToken: refresh_token,
    },
    {
      "Content- Type": "application / json",
    }
  );
  return res["data"]["data"];
}