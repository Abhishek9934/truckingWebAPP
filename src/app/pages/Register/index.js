import React from 'react'
import Grid from '@mui/material/Grid';
import RegisterSide from './RegisterSide';
import RegisterForm from "./RegisterForm"


export default function Login()
{
    
    
    return(
        <Grid container>
            <Grid item  xs={6}>
                <RegisterSide/>
            </Grid>

            <Grid xs={6}>
               {/* <Typography sx={{justifyContent:'center', alignItems:'center', display:'inline-block'}}>Sign in to Treasy </Typography> */}
                <RegisterForm/>
            </Grid>
        </Grid>
    )
}