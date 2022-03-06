import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, Grid } from '@mui/material';
import {AiFillMessage, MdAssignmentTurnedIn} from 'react-icons/all'
export default function MultiActionAreaCard(props) {


  return (
    <Card variant="outlined" sx={{ maxWidth: 345, padding:2 }}>
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
              <Grid item xs={8}>
                <Typography  variant="h5" component="div">
                  {props.data?.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              Capacity: {props.data?.capacity}
              <br></br>
              type: {props.data?.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Truck No: {props.data?.truck_no}
              <br></br>
              Status: {props.data?.status}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Last Repaired:Oct.24,2012
              <br></br>
              Due Date to Repair: Oct. 25, 2021
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <CardActions>
        
      <Box sx={{margin:'auto'}}  style={{ display: "flex", gap: "1rem" }}> 

              <Button variant="contained" startIcon={<AiFillMessage/>} size="small" color="primary">
                Message Driver
              </Button>

              <Button startIcon={<MdAssignmentTurnedIn/>} variant="contained" size="small" color="primary">
                Assign Order
              </Button>
        </Box>
        
      </CardActions>


     
    </Card>
  );
}