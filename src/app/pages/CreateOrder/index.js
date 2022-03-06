import React from 'react'
import Grid from '@mui/material/Grid';
import "./login.css"
import GoogleMap from './MapSide';
import CreateOrder from './CreateOrder';

export default function Login()
{
    
    
    return(
        <Grid container>
            {/* <Grid item  xs={6}> */}
                <CreateOrder />
            {/* </Grid> */}
        </Grid>
    )
}