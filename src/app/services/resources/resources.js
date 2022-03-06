import store from '../../../redux/store';
const state = store.getState();
const access_token = state?.user?.currentUser?.access_token;
const axios = require("axios");

export async function fetchAll(data, url) {
   try {       
 const config = {
    headers: {
      Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
    }
   };
        const res= await axios.get(
            process.env.REACT_APP_BACKEND_LINK + url,
            data,
            config
            ); 
        return res["data"]; 
    } 
    catch (error) {
 
        console.log(error); 
        return {
            error:error
        } 
    }
}

export async function fetchDetails(data, url) {

   try {
    const config = {
        headers: {
          Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
        }
       };
       console.log("kjkajgda" , state?.user?.currentUser?.access_token);
        const res= await axios.get(
            process.env.REACT_APP_BACKEND_LINK + url,
            data,
            config
            );
        return res["data"]; 
    } 
    catch (error) {
 
        console.log(error); 
        return {
            error:error
        } 
    }
}
// it can update member, union member, carrrier etc. 
export async function update(data, url) {
    try {
        const config = {
            headers: {
              Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
            }
           };
        const res= await axios.post(
            process.env.REACT_APP_BACKEND_LINK + url,
            data,
            config
            );
        return res["data"]; 
    } 
    catch (error) {
 
        console.log(error); 
        return {
            error:error
        } 
    }
}


export async function create(data,url) {
    try {
        const config = {
            headers: {
              Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
            }
           };
        const res= await axios.post(
            process.env.REACT_APP_BACKEND_LINK + url,
            data,
            config
            );
        return res["data"]; 
    } 
    catch (error) {
 
        console.log(error); 
        return {
            error:error
        } 
    }
}

export async function del(data, url) {
    try {
        const config = {
            headers: {
              Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
            }
           };
        const res= await axios.delete(
            process.env.REACT_APP_BACKEND_LINK + url,
            data,
            config
            );
        return res["data"]; 
    } 
    catch (error) {
 
        console.log(error); 
        return {
            error:error
        } 
    }
}
