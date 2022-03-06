import DashboardTypes from "./dashboardTypes";

const INITIAL_STATE = {
  accountDetails: null
};

const dashboardReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {
        case DashboardTypes.GetTransporterDetails:
            return {
                ...state,
                accountDetails: action.payload,
            }
        case DashboardTypes.GetUnionDetails:
            return {
                ...state,
                accountDetails: action.payload,
            }
        case DashboardTypes.GetShipperDetails:
            return {
                ...state,
                accountDetails: action.payload,
            }
        
        default:
            return state;
    }
}

export default dashboardReducer;