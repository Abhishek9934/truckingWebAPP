// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components

import Orders from './Orders'
import Drivers from './Drivers'
import Fleet from './Fleet';
import Payment from './Payment';
import OrdersGraph from './OrdersGraph';
import Ratings from './Ratings';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect, useState  } from 'react';
import { fetchDetails } from '../../services/resources/resources';
import { getUnionDetailsAction } from '../../../redux/dashboard/dashboardAction';
// ----------------------------------------------------------------------
import Carousel from 'react-material-ui-carousel'
import OrderCard from '../Orders/OrderCard';

export default function UnionDashboard() {

  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  console.log(accountDetails);
  const [order_queue , setOrderQueue] = useState([]);
  useEffect(
    ()=>{
      const data = {
        params:{
          user_id: user.id
        }
      };
      const url  = `${user.account_type}/getdetails`;
      fetchDetails(data , url ).then(
        (res)=>{
          console.log(res);
          dispatch(
            getUnionDetailsAction(res['data'])
          );

        });
      
      fetchDetails({
        params:{
          id: accountDetails?.id
        }
      } , '/orders/getorderqueue' ).then(
        (res)=>{
          console.log(res);
          setOrderQueue(res['data']);
        });
        

    },[]
  );


  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Welcome to  {accountDetails?.name} !</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Orders />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Fleet />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Drivers />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Payment/>
        </Grid>
        <Grid item xs ={12} sm={6} md={3}>
        <Carousel>
            {
                order_queue.map( (item) => <OrderCard order={item}/> )
            }
        </Carousel>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OrdersGraph />
        </Grid> 

        <Grid item xs={12} md={6} lg={4}>
          <Ratings />
        </Grid>
      </Grid>
    </Container>
  );
}
