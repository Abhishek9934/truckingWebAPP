import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, Grid } from '@mui/material';
import {AiFillMessage, AiFillStar, MdAssignmentTurnedIn} from 'react-icons/all'
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
                  {props.data.name}
                </Typography>
              </Grid>

              <Grid item xs={4}>
              <Typography  variant="h5" component="div">
                  {props.data.rating}  <AiFillStar/>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              Joined: {props.data.joining_date}
              <br></br>
              24 Deliveries
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <CardActions>
        
      <Box sx={{margin:'auto'}}  style={{ display: "flex", gap: "1rem" }}> 
              <Button variant="contained" startIcon={<AiFillMessage/>} size="small" color="primary">
                Message
              </Button>

              <Button startIcon={<MdAssignmentTurnedIn/>} variant="contained" size="small" color="primary">
                Assign Order
              </Button>
          </Box>
        
      </CardActions>


     
    </Card>
  );
}