import resourcesActionTypes from './resourcesActionTypes'; 


export const getMembersAction=(payload)=> {
    console.log(payload);
    return {
        type:resourcesActionTypes.GetTransporterMembers,
        payload: payload
    }

}


// export const updateTransporterMember = (data)=>
// {
//     const updateData=
// }
