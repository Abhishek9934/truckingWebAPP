import OrderActionTypes from "./ordersTypes";

const INITIAL_STATE = []

const orderReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {

        case OrderActionTypes.GetTransporterOrders:
            return action.payload;
        case OrderActionTypes.GetShipperOrders:
            return action.payload;
        case OrderActionTypes.GetUnionOrders:
            return action.payload;

        // case OrderActionTypes.CreateOrder:
        //     return [...state].concat(action.payload);
        
        // case OrderActionTypes.CreateOrder:
        //     return {
        //         [...state,action.payload]
        //     }
        // case OrderActionTypes.:
        //     return INITIAL_STATE;
        default:
            return state;
    }
}



export default orderReducer;