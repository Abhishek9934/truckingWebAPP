import * as React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import ShipperDashboard from './ShipperDashboard';
import TransporterDashboard from './TransporterDashboard';
import UnionDashboard from './UnionDashboard';
import { useEffect } from 'react';
import { signInStart } from '../../../redux/user/userActions';

export default function Dashboard() {
    const dispatch = useDispatch();
    const user = useSelector( (state)=> state.user.currentUser);
    console.log(user?.account_type);
    // useEffect( ()=>{
    //     if (user?.currentUser === null){
    //       const user1 = localStorage.getItem("user");
    //       console.log(user1)
    //       dispatch(signInStart(user1));
    //     }
    //   },[]);

    if (user.account_type === "shipper")
    {
        return (
            <ShipperDashboard />
        );
    }
    else if(user.account_type === "transporter")
    {   
        return (
            <TransporterDashboard />
        );
    }
    else if(user.account_type === "union")
    {
        return (
            <UnionDashboard />
        );
    }
    else{
        return (
            <h1>
                Wrong Url
            </h1>
        );
    }
}