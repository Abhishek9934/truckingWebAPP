// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components

import Orders from './Orders'
import Drivers from './Drivers'
import Fleet from './Fleet';
import Payment from './Payment';
import OrdersGraph from './OrdersGraph';
import Ratings from './Ratings'
// ----------------------------------------------------------------------
import {useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchDetails } from '../../services/resources/resources';
import { getTransporterDetailsAction } from '../../../redux/dashboard/dashboardAction';
import { RiUserSearchLine } from 'react-icons/ri';

export default function TransporterDashboard() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  console.log(accountDetails);

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

          dispatch(
            getTransporterDetailsAction(res['data'])
          );

        });
    },[]
  );

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Welcome to {accountDetails?.name} !  </Typography>
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

        <Grid item xs={12} md={6} lg={8}>
          <OrdersGraph />
        </Grid> 

        <Grid item xs={12} md={6} lg={4}>
          <Ratings />
        </Grid>

      </Grid>
    </Container>
  );
}
