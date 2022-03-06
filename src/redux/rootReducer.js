import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import orderReducer from './orders/ordersReducer';
import transporterMembersReducer from './resources/resourcesReducer';
import dashboardReducer from './dashboard/dashboardReducer';

const rootReducer  =  combineReducers({
    user: userReducer,
    orders: orderReducer,
    transporterMembers: transporterMembersReducer,
    dashboard: dashboardReducer,
})

export default rootReducer;