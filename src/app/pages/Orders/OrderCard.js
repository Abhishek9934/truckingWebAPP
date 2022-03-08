import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, Grid } from '@mui/material';
import {AiFillMessage, AiFillStar, MdAssignmentTurnedIn} from 'react-icons/all';
import { FormControl , MenuItem , InputLabel , Select  } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { Link } from '@mui/material';
import moment from 'moment';
import { useSelector , useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';
import { fetchDetails } from '../../services/resources/resources';
import { assignOrder } from '../../services/orders/orders';

function AssignTransporter(props) {
  const [open, setOpen] = React.useState(false);
  const [transporter_id , setTransporterId]  = useState(null);
  const [transporters , setTransporters] = useState([]);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    const data = {
      params:{

      }
    };
    
    const url1 = `transporter/getall`;
    fetchDetails(data , url1 ).then(
      (res)=>{
        console.log(res['data']);
        setTransporters(res['data']);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(
  //   ()=>{
      

  //   },[]
  // );

  const handleAssignTransporter = () => {
    // apis call here for assign transporter
    const data = {
     transporter_id:transporter_id,
     union_id: props.order?.union_id,
     driver_id:null,
     truck_id:null,
     status:"transporter_assigned",
     id: props.order?.id
    };

    assignOrder(data).then(
      (res) => {
        // console.log(res['data']);
        if(res?.success)
        {
          alert("Transporter Assigned")
          // navigate("/app/orders" , {replace:true});
          props.setUpdate("");
        }
        else{
          alert(res?.data)
        }

      }
    );
    
    handleClose();
    };

  const handleTranporterChange = (e) => {
    setTransporterId(e.target.value);
  };


  return (
    <div>
      {
        props.order?.status !== "pending" ?
        <Button  startIcon={<MdAssignmentTurnedIn/>}   disabled> Assign Order</Button>
        :  
      <Button  startIcon={<MdAssignmentTurnedIn/>}  onClick={handleClickOpen}>
        Assign Order
      </Button>
      }
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Assign Order Portal</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Choose Transporter for the order
          </DialogContentText>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Transporter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transporter_id}
            label="Transporter"
            onChange={handleTranporterChange}
          >
                {
                  transporters.map((transporter) => (
                   <MenuItem value={transporter?.id}>{transporter?.name} </MenuItem>
                  ))
                }
            <MenuItem value={null}>None</MenuItem>

          </Select>
        </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAssignTransporter}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function AssignDriver(props) {

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const [trucks , setTrucks] = useState([]);
  const [drivers , setDrivers] = useState([]);
  const [driver_id , setDriverId ] = useState(null);
  const [truck_id , setTruckId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
    const data = {
      params:{
        id: props.order?.transporter_id
      }
    };
    const url1 = `/transporter/getallmembers`;
    fetchDetails(data , url1 ).then(
      (res)=>{
        console.log(res['data']);
        setDrivers(res['data']);
      });
    
    const data1 = {
      params:{
        transporter_id:props.order?.transporter_id
      }
    }
    const url2 = `/transporter/fetchtrucks`;
    fetchDetails(data1 , url2 ).then(
      (res)=>{
        console.log(res['data']);
        setTrucks(res['data']);
      });
    

  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(
  //   ()=>{
    
  //   },[]
  // );

  const handleAssignOrder = () => {
    // apis call here for assign order
    const data = {
      transporter_id: props.order?.transporter_id,
      union_id: props.order?.union_id,
      driver_id:driver_id,
      truck_id:truck_id,
      status:"assigned",
      id:props.order?.id
     };
 
     assignOrder(data).then(
       (res) => {
         // console.log(res['data']);
         if(res?.success)
         {
           alert("Driver Assigned")
          //  navigate("/app/orders" , {replace:true});
          props.setUpdate("s");

         }
         else{
           alert(res?.data)
         }
 
       }
     );
     handleClose();
  };

  const handleDriverChange = (e) => {
    setDriverId(e.target.value);
  };
  const handleTruckChange = (e) => {
    setTruckId(e.target.value);
  };

  return (
    <div>
      {
        props.order?.status === "assigned" ?
        <Button  startIcon={<MdAssignmentTurnedIn/>}   disabled> Assign Order</Button>
        :  
      <Button startIcon={<MdAssignmentTurnedIn/>}  onClick={handleClickOpen}>
        Assign Order
      </Button>
}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Assign Order Portal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose Driver , Truck for the order
          </DialogContentText>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Driver</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={driver_id}
            label="Driver"
            onChange={handleDriverChange}
          >                
          {
            drivers.map((driver) => (
             <MenuItem value={driver?.id}>{driver?.name} </MenuItem>
            ))
          }

          </Select>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Truck</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={truck_id}
          label="Truck"
          onChange={handleTruckChange}
        >
            {
              trucks?.map((truck) => (
                <MenuItem value={truck?.id}>{truck?.name} </MenuItem>
              ))
            }
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAssignOrder}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default function MultiActionAreaCard(props) {
  const user = useSelector( (state)=> state.user.currentUser);
  // const accountDetails = useSelector( (state) => state.dashboard.accountDetails)

  return (
    <Card variant="outlined">
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/logo.png"
          alt="Parwinder Singh"
        /> */}
        <CardContent sx={{alignItems:'center'}}>
          <Box sx={{alignItems:'center'}}>
            <Grid container>
              <Grid item xs={12}>
                <Typography  variant="body3" component="div">
                  Order Id: {props.order?.id}
                </Typography>
              </Grid>


            </Grid>
            <Typography  variant="body3" component="div" color="text.secondary">
                  Rs. {props.order?.cost}
            </Typography>
            <Typography variant="body3" component="div"  color="text.secondary">
                Date: {moment.utc(`${props.order.pickup_date}`).format('MM/DD/YYYY')}  
                </Typography>
            <Typography variant="body3" component="div"  color="text.secondary">
              Start Location: {props.order?.start_loc} , End Location: {props.order?.end_loc}
            </Typography>
            <Typography variant="bold" color="primary">
              Status: {props.order?.status}
            </Typography> 
          </Box>
        </CardContent>
      </CardActionArea>

      <CardActions>
      <Box sx={{margin:'auto'}}  style={{ display: "flex", gap: "1rem" }}> 
        {
          user?.account_type === "union" ?
          <AssignTransporter order={props.order} setUpdate = {props.setUpdate} /> :
          user?.account_type === "transporter" ?
          <AssignDriver  order={props.order} setUpdate = {props.setUpdate} />: null
        }

        <Button  component={RouterLink}  to={`/app/order-details/${props.order?.id}`} >
          Track/Order details       
        </Button>
        </Box>   
      </CardActions>


     
    </Card>
  );
}