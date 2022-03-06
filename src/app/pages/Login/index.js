import React from 'react'
import Grid from '@mui/material/Grid';
import LoginSide from './LoginSide';
import LoginForm from "./LoginForm"
import "./login.css"

export default function Login()
{
    
    
    return(
        <Grid container>
            <Grid item  xs={6}>
                <LoginSide/>
            </Grid>

            <Grid xs={6}>
               {/* <Typography sx={{justifyContent:'center', alignItems:'center', display:'inline-block'}}>Sign in to Treasy </Typography> */}
                <LoginForm/>
            </Grid>
        </Grid>
    )
}