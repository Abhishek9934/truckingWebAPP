import UserActionTypes from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {
        case UserActionTypes.SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                currentUser: action.payload,
            }
        case UserActionTypes.SIGN_OUT_START:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default userReducer;