import UserActionTypes from "./userTypes";
import  {logIn, logOut, register } from '../../app/services/auth/auth';

export const signInStart =  (payload) =>{
        localStorage.setItem("user", JSON.stringify(payload));
        return {
            type: UserActionTypes.SIGN_IN_START,
            payload: payload
            } 
};

export const logOutAction = (data) => {
    const payload =  logOut(data);
    localStorage.removeItem("user");
    localStorage.removeItem("accountDetails");
    return {
        type: UserActionTypes.SIGN_OUT_START,
        payload: payload
    }
}

// export const signUpAction = (data) => {
//     register(data).then(
//         (payload) => {
            
//         }
//     ).catch((err) => {

//     })
// }