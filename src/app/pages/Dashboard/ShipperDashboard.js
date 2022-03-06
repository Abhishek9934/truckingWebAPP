// material
import { Box, Grid, Container, Typography, Paper } from '@mui/material';
// components
import { useEffect , useState } from 'react';
import Orders from './Orders'
import Drivers from './Drivers'
import Fleet from './Fleet';
import Payment from './Payment';
import OrdersGraph from './OrdersGraph';
import Ratings from './Ratings'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../../services/resources/resources';
import { getShipperDetailsAction } from '../../../redux/dashboard/dashboardAction';
import { Button, Divider } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MakeOrder from './MakeOrder';
import UnionCard from './UnionCard';
export default function ShipperDashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  console.log(user);
  console.log(accountDetails);
  const [unionArray, setUnionArray] = useState([])
  useEffect(
    () => {
      const data = {
        params: {
          user_id: user.id
        }
      };
      const url = `${user.account_type}/getdetails`;
      fetchDetails(data, url).then(
        (res) => {
          console.log(res['data']);
          dispatch(
            getShipperDetailsAction(res['data'])
          );

        });
    }, []
  );

  useEffect(() => {
    const data = {
    };
    const url = `union/getall`;
    fetchDetails(data, url).then(
      (res) => {
        console.log(res['data']);

        setUnionArray(res['data']);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, {accountDetails?.name} </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Orders />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Payment />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Box sx={{ margin: '14%' }}>
            <MakeOrder />
          </Box>
        </Grid>
      </Grid>


      <Typography variant="h3" sx={{ margin: '2%' }}>Unions around you !!!</Typography>



      <Divider sx={{ margin: '3%' }} />

      <Grid container>
        {unionArray.map((value) => (
          <Grid item xs={12} md={6} lg={4}>
            <UnionCard union = {value} />
          </Grid>
        ))}

      </Grid>
    </Container>
  );
}
