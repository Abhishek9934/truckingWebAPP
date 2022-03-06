import TransporterCard from './TransporterCard';
import {Grid , TextField ,Box , Button ,Divider } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'; 
import React, { useState } from 'react'; 

import { fetchAll } from '../../services/resources/resources';

export default function Driver()
{
    const user = useSelector( (state)=> state.user.currentUser);
    const accountDetails = useSelector( (state) => state.dashboard.accountDetails);
    const [transporters , setTransporters ] = useState([]);

    const dispatch = useDispatch();

    React.useEffect(
      ()=>{
        const data = { params: { id: accountDetails.id }};
        const url = `${user.account_type}/getalltransporters`;
        fetchAll(data , url).then((res) =>{
          // console.log(res['data']);
            setTransporters(res['data']);
        });
      },[]
    );
    return(
        <>
        <Box sx = {{ flexGrow: 1 }}>
        <TextField 
        placeholder="Transporter Name"
        ></TextField>
        <TextField 
        placeholder="Date"
        style={{marginLeft: "10px"}}
        ></TextField>        

        <TextField 
        placeholder="Status"
        style={{marginLeft: "10px"}}
        ></TextField>
    
     </Box>
     <Button variant="outlined"  style={{width:"250px" , marginLeft: "450px" , marginTop:"20px" ,marginBottom:"40px"}}> Go </Button>
    
      <Divider sx={{marginBottom:'5%'}}/>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {transporters.map((value) => (
          <Grid item xs={2} sm={4} md={4} key={value.id}>
            
            <TransporterCard data={value} />
            
          </Grid>
        ))}

      </Grid>
      {
          transporters.length === 0 ? "No Transporters present" : ""
        }
    </>
    );

    
}