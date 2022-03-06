import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, Grid } from '@mui/material';
import {AiFillMessage, AiFillStar, MdAssignmentTurnedIn} from 'react-icons/all'


export default function UnionCard(props)
{
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, padding:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/logo.png"
          alt="Parwinder Singh"
        />
        <CardContent sx={{alignItems:'center'}}>
          <Box sx={{alignItems:'center'}}>
            <Grid container>
              <Grid item xs={8}>
                <Typography  variant="h5" component="div">
                 {props.union.name}
                </Typography>
              </Grid>

              <Grid item xs={4}>
              <Typography  variant="h5" component="div">
                  5  <AiFillStar/>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              Established: {props.union.date_established}
              <br></br>
              2000+ Deliveries
              
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      


     
    </Card>
  );
}