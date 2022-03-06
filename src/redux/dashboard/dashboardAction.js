import DashboardTypes from './dashboardTypes'; 


export const getTransporterDetailsAction=(payload)=> {
    // console.log(payload);
    localStorage.setItem("accountDetails", JSON.stringify(payload));

    return {
        type:DashboardTypes.GetTransporterDetails,
        payload: payload
    }
}

export const getUnionDetailsAction=(payload)=> {
    // console.log(payload);
    localStorage.setItem("accountDetails", JSON.stringify(payload));

    return {
        type:DashboardTypes.GetUnionDetails,
        payload: payload
    }
}

export const getShipperDetailsAction=(payload)=> {
    // console.log(payload);
    localStorage.setItem("accountDetails", JSON.stringify(payload));

    return {
        type:DashboardTypes.GetShipperDetails,
        payload: payload
    }
}
