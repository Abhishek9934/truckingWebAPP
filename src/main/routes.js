import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../app/layouts/Dashboard'
//
import Login from '../app/pages/Login';
import Register from '../app/pages/Register';
import TransporterDashboard from '../app/pages/Dashboard/TransporterDashboard';
import Messenger from '../app/pages/Chat/Messenger';
import Resources from '../app/pages/Resources';
import Orders from '../app/pages/Orders';
import CreateOrder from '../app/pages/CreateOrder/CreateOrder';
import OrderDetails from '../app/pages/Orders/OrderDetails';
import Dashboard from '../app/pages/Dashboard';
import { useSelector , useDispatch} from 'react-redux';
import TransporterDetails from '../app/pages/UnionMembers';
import AddDriver from '../app/pages/Resources/Driver/AddDriver';
import AddTruck from '../app/pages/Resources/Carrier/AddTruck';
import { signInStart } from '../redux/user/userActions';
import { useEffect } from 'react';
import {getShipperDetailsAction} from '../redux/dashboard/dashboardAction';
// ----------------------------------------------------------------------

export default function Router() {
  const dispatch = useDispatch()

  useEffect( ()=>{
    if (user?.currentUser === null){
      const user1 = localStorage.getItem("user");
      const details = localStorage.getItem("accountDetails");
      console.log(user1)
      dispatch(signInStart(JSON.parse(user1)));
      dispatch(getShipperDetailsAction(JSON.parse(details)));
    }
  },[]);
  
  const user = useSelector((state) => state.user);
  console.log(user);

  return useRoutes([
    {
      path: '/app',
      element: user?.currentUser ? <DashboardLayout/> : <Login />,
      children: [
         { element: <Navigate to="/app/dashboard" replace/> },
         { path: 'dashboard', element:  <Dashboard /> },
         { path: 'orders', element: <Orders/> },
         { path: 'order-details/:id', element: <OrderDetails/>},
         { path: 'resources', element: <Resources/> },
         { path: 'chat', element: <Messenger/> },
         { path: 'createorder' , element: <CreateOrder /> },
         { path: 'transporter-details'  , element: <TransporterDetails /> },
         { path: 'addtruck'  , element: <AddTruck /> },
         { path: 'adddriver'  , element: <AddDriver /> }
         
      ]
    },
    {
      path: '/',
      children: [
        { element: <Navigate to="/login" replace/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/>}
        
      ]
    },
  ]);
}
