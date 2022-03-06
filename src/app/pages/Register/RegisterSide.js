import React from 'react'
import {Typography} from "@mui/material"
import "./register.css"

export default function LoginSide()
{
    return(

        <div className="loginSideBar">
            <Typography variant ="h3"  className="textCenter paddingTop">Welcome to Treasy!!</Typography>
            <Typography variant = "h5" className="textCenter" >Transportation Made Easy</Typography> 
             <img class="loginImage"  src="/images/reg.jpg" alt="login"/> 
        </div>
    )
}

