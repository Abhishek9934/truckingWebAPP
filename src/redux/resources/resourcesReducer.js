import ResourcesActionTypes from './resourcesActionTypes'; 


const INITIAL_STATE = []

const transporterMembersReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {

        case ResourcesActionTypes.GetTransporterMembers:
            return action.payload; 

        case ResourcesActionTypes.CreateTransporterMember:
            return [...state , action.payload]; 

        case ResourcesActionTypes.UpdateTransporterMember:
            var temp=[...state]; 
            temp[action.payload.index]=action.payload.data;
            return temp;

        case ResourcesActionTypes.DeleteTransporterMember: 
            return state.filter((item, index) => index!==action.payload.index);  

        default: 
        return state; 

    }
}

export default transporterMembersReducer;