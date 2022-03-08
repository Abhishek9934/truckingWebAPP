import DriverCard from './DriverCard';
import { Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { getMembersAction } from '../../../../redux/resources/resourcesAction';
import { fetchAll } from '../../../services/resources/resources';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Driver() {
  const user = useSelector((state) => state.user.currentUser);
  const driverArray = useSelector((state) => state.transporterMembers);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails)

  console.log(driverArray);
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      const data = { params: { id: accountDetails.id } };
      const url = `${user.account_type}/getallmembers`;
      fetchAll(data, url).then((res) => {
        // console.log(res['data']);
        dispatch(
          getMembersAction(res['data'])
        )
      });
    }, []
  );
  return (
    <>
      <Button variant="contained" sx={{ marginBottom: '2%', marginLeft: '85%' }} component={RouterLink} to="/app/adddriver">
        Add Driver
      </Button>
      <Grid container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {driverArray.map((value) => (
          <Grid item xs={2} sm={4} md={4} key={value.id}>

            <DriverCard data={value} />

          </Grid>
        ))}
      </Grid>
      {
          driverArray.length === 0 ? "No Drivers present" : ""
      }
    </>
  );


}