import store from '../../../redux/store';
const state = store.getState();
const access_token = state?.user?.currentUser?.access_token;
const axios = require("axios");

async function caller(data, route)
{
    const config = {
        headers: {
          Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
        }
       };
    const res= await axios.post(process.env.REACT_APP_BACKEND_LINK + route, 
    data,
    config);
    return res["data"]; 

}

export async function fetchallorders(data, url) {
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

export async function getOrderDetails(data) {
    try {
        const config = {
            headers: {
              Authorization: 'Bearer ' + access_token //the token is a variable which holds the token
            }
           };
        const res= await axios.get(
            process.env.REACT_APP_BACKEND_LINK + 'orders/getorder',
            data,
            config
            ); 
        return res["data"]; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function assignOrder(data) {
    try {
        const res=await caller(data, 'orders/assignOrder')
        // console.log(res);

        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function createOrder(data) {
    try {
        const res=await caller(data, 'orders/createorder')
        // console.log(res);

        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function cancelOrder(data) {
   try {
        const res=await caller(data, 'orders/createorder');
        console.log(res);
        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function updateOrder(data) {
    try {
        const res=await caller(data, 'orders/editorder')
        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function getOrderQueue(data) {
    try {
        const res=await caller(data, 'orders/getorderqueue')
        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}

export async function searchOrders(data) {
    try {
        const res=await caller(data, 'orders/searchorders')
        return res; 
        
    } catch (error) {
        console.log(error); 
        return {
            error:error
        }
    }
}



