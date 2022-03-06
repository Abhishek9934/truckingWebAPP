import React from 'react';
import { Stack, Box, Grid, Typography, Divider, Tabs, Tab } from '@mui/material';
import Stepper from './Stepper';
import OrderCard from './OrderCard';
import { useParams } from "react-router-dom";
import { useEffect ,useState } from 'react';
import { getOrderDetails } from '../../services/orders/orders';
import { getShipperDetailsAction } from '../../../redux/dashboard/dashboardAction';
import { fetchDetails } from '../../services/resources/resources';

export default function OrderDetails() {
    const [tabValue, setTabValue] = React.useState(0);
    const { id } = useParams();
    const [order , setOrder] = useState({});
    const [shipper , setShipper] = useState({});
    const [transporter , setTransporter] = useState({});

    console.log(order);

    useEffect(
        ()=>{
            const data = {
                params : {
                    'id':id
                }
            }
            getOrderDetails(data).then(
                (res) => {
                    setOrder(res?.data[0]);
                }
            );
        }, []);

    // useEffect(
    //     ()=>{
    //         const data = {
    //             params : {
    //                 'id':id
    //             }
    //         }
    //         const url = `/shipper/getdetails`;

    //         fetchDetails(data , url).then(
    //             (res) => {
    //                 setShipper(res?.data);
    //             }
    //         );
    //     }, [order]);

    const steps= {
        "pending":1,
        "transporter_assigned":2,
        "assigned":3,
        "completed":4
    }
    
    return (
        <Box >
            <Typography variant='h3'>Order ID: {order?.id }</Typography>
            <Divider sx={{ marginTop: '1%' }} />
            Cost: Rs. {order?.cost}
            <Grid container sx={{ marginTop: '5%' }}>
                <Grid item xs={4}>
                    <Stepper  step = {steps[order?.status]}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography> Start Address: {order?.start_loc} </Typography>
                    <Typography> Destination Address: {order?.end_loc}</Typography>
                    <Typography>
                        Weight: {order?.weight}kg
                    </Typography>
                    <Typography>
                        Type of Truck: {order?.type}
                    </Typography>
                    <Typography> Pickup Date: {order?.pickup_date} </Typography>
                    <Typography> Expected Drop Date: {order?.drop_date}</Typography>
                    <Typography> Transaction Id: {order?.transaction_id }</Typography>
                    <Typography> Material: {order?.material }</Typography>
                    <Typography>
                        Shipper: Mr. Parwinder
                    </Typography>
                    <Typography>
                        Driver: Mr. Parwinder
                    </Typography>
                    <Typography> Truck Details: Truck 1 </Typography>

                    <Typography>
                        Reviews..If any: {order?.review}
                    </Typography>



                </Grid>
            </Grid>
        </Box >
    )

}


