import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { MenuItem, FormControl, InputLabel, Select, Box, Paper, Grid, Stack } from '@mui/material';
import OrderCard from './OrderCard';
import { Divider, TextField, Button, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchallorders } from '../../services/orders/orders';
import { fetchAllOrdersAction } from '../../../redux/orders/ordersAction';

export default function Orders() {

  const user = useSelector((state) => state.user.currentUser);
  const orderArray = useSelector((state) => state.orders);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails)
  console.log(orderArray);
  const [order_id, setOrderId] = React.useState("");
  const [order_date, setOrderDate] = React.useState("");
  const [start_loc, setStartLoc] = React.useState("");
  const [end_loc, setEndLoc] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [inputEl , setUpdate] = React.useState(null);

  const filterData = () =>{
    if (order_id.length >= 0 )
    {
      orderArray.filter((x) => {return x.id === order_id });
    }
    if (order_date.length >= 0 )
    {
      orderArray.filter((x) => {return x.pickup_date === order_date });
    }    
    if (start_loc.length >= 0 )
    {
      orderArray.filter((x) => {return x.start_loc === start_loc });
    }    
    if (end_loc.length >= 0 )
    {
      orderArray.filter((x) => {return x.end_loc === end_loc });
    }
    if (status.length >= 0 )
    {
      orderArray.filter((x) => {return x?.status === status });
    }
    console.log("r" , orderArray);

  };

  
  const handleChange = (e) => {
    setOrderId(e.target.value);
  };
  const handleChange0 = (e) => {
    setOrderDate(e.target.value);
  };
  const handleChange1 = (e) => {
    setStartLoc(e.target.value);
  };
  const handleChange2 = (e) => {
    setEndLoc(e.target.value);
  };
  const handleChange3 = (e) => {
    setStatus(e.target.value);
  };
  const dispatch = useDispatch();

  const helperFunction = () =>{
    
    const data = {
      params: {
        id: accountDetails?.id
      }
    };
    const url = `orders/${user.account_type}/getallorders`;

    fetchallorders(data, url).then(
      async (res) => {
        // console.log(res);
        dispatch(
          fetchAllOrdersAction(res['data'], user?.account_type)
        )
      }).catch();
  };

  React.useEffect(
    () => {
      helperFunction();
    }, [inputEl]
  );

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item  xs={2} sm={2} md={2} >
          <TextField
            placeholder="order id"
            value={order_id}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item  xs={2} sm={2} md={2} >
          <TextField
            placeholder="Order date"
            style={{ marginLeft: "10px" }}
            value={order_date}
            onChange={handleChange0}
          ></TextField>
        </Grid>
        <Grid item  xs={2} sm={2} md={2} >
        <TextField
          placeholder="Start Location"
          style={{ marginLeft: "10px" }}
          value={start_loc}
          onChange={handleChange1}
        ></TextField>
      </Grid>
      <Grid item xs={2} sm={2} md={2} >
        <TextField
          placeholder="End Location"
          style={{ marginLeft: "10px" }}
          value={end_loc}
          onChange={handleChange2}
        >
        </TextField>
      </Grid>
      <Grid item  xs={2} sm={2} md={2} >
        <FormControl  style={{width:"100px"}}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleChange3}
          >

            <MenuItem value={"pending"}>Pending</MenuItem>
            <MenuItem value={"transporter_assigned"}>Transporter Assigned</MenuItem>
            <MenuItem value={"driver_assigned"}>Driver Assigned</MenuItem>
            <MenuItem value={"completed"}>completed</MenuItem>

          </Select>
        </FormControl>
      </Grid>

      </Grid>
      <Button variant="outlined" style={{ width: "250px", marginLeft: "450px", marginTop: "20px", marginBottom: "40px" }} onClick = {filterData}> Go </Button>

      <Divider sx={{ marginBottom: '5%' }} />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {orderArray.map((value) => (
          <Grid item xs={2} sm={4} md={4} key={value.id}>

            <OrderCard order={value}  setUpdate = {setUpdate} />

          </Grid>
        ))

        }
        {
          orderArray.length === 0 ? "No Orders present" : ""
        }
      </Grid>

    </Container>
  );
}
