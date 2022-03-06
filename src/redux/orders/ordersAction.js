import OrderActionTypes from './ordersTypes'; 
import {getUnionOrders, getOrderDetails, createOrder, 
cancelOrder, updateOrder, searchOrders,getOrderQueue } from '../../app/services/orders/orders';


export const fetchAllOrdersAction = (payload , account_type) => {

    if(account_type === "transporter"){
        console.log(payload);
        return {
            type:OrderActionTypes.GetTransporterOrders,
            payload: payload
        }
    }
    else if(account_type === "union"){
        return {
            type:OrderActionTypes.GetUnionOrders,
            payload: payload
        }
    }
    else{
        return {
            type:OrderActionTypes.GetShipperOrders,
            payload: payload
        }
    }
}

export const fetchOrdersDetailAction = (data) => {
    const payload = getOrderDetails(data);
    
    return {
        type:OrderActionTypes.GetOrderDetails,
        payload: payload
    }
}


export const createOrderAction = (data) => {
    const payload = createOrder(data);
    return {
        type:OrderActionTypes.CreateOrder,
        payload: payload
    }
}

export const updateOrderAction = (data) => {
    const payload = updateOrder(data);
    return {
        type:OrderActionTypes.UpdateOrder,
        payload: payload
    }
}

export const cancelOrderAction = (data) => {
    const payload = cancelOrder(data);
    return {
        type:OrderActionTypes.CancelOrder,
        payload: payload
    }
}

export const getOrderQueueAction = (data) => {
    const payload = getOrderQueue(data);
    return {
        type:OrderActionTypes.GetOrderQueue,
        payload: payload
    }
}

export const searchOrderAction = (data) => {
    const payload  = searchOrders(data);
    return {
        type:OrderActionTypes.SearchOrders,
        payload: payload
    }
}

