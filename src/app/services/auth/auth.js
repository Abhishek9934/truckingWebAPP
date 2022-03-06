const axios = require("axios");
const axiosInstance = require("../axiosInstance");


export async function logIn(data) {
  try {
    const res = await axios.post(
      process.env.REACT_APP_BACKEND_LINK + "auth/login",
      data,
      {
        "Content- Type": "application / json",
      }
    );
    return res['data'];
    
  } catch (error) {
    console.log(error);
    return {
      error: error,
    }
  }
}

export async function register(data) {
  try {
    const res = await axios.post(process.env.REACT_APP_BACKEND_LINK + "auth/register",
      data,
      {
        "Content- Type": "application / json",
      }
    );
    console.log(res["data"]["data"][0]["id"]);
    var url;
    if ( data.account_type === "shipper")
    {
     url = "shipper/create";
    }
    else if ( data.account_type === "transporter")
    {
      url = "transporter/create";

    }
    else if (data.account_type === "union"){
      url = "union/create";
    }
    const res1 = await axios.post(`${process.env.REACT_APP_BACKEND_LINK}${url}`,
    {"name":data.username , "user_id": res["data"]["data"][0]["id"]},
    {
      "Content- Type": "application / json",
    });


    return res['data'];

  } catch (error) {
    return {
      error: error,
    }
  }

}

export async function logOut(refresh_token) {
  try {
    const res = await axios.post(process.env.REACT_APP_BACKEND_LINK + "auth/logout", {
      "refreshToken": refresh_token
    }, {
      "Content- Type": "application / json"
    })
    return res['data'];
  } catch (error) {
    return {
      error: error
    }
  }
}