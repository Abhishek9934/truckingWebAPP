import React from 'react';
import {Tabs, Tab, Box,Button} from '@mui/material';
import {MdEmojiPeople, FaTruckMoving} from 'react-icons/all';
import Driver from './Driver'
import Carrier from './Carrier';
import { TextField, Divider } from '@mui/material';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openDialog, setOpenDialog]=React.useState();

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', margin:'auto', position:'relative' }}>
        {/* <Button variant="contained" onClick=()=>setOpen}>Add Driver </Button> */}
        <Tabs selectionFollowsFocus value={value} onChange={handleChange} aria-label="basic tabs example" centered >
          <Tab  icon={<MdEmojiPeople/>} label="Drivers" sx={{width:'100%'}}/>
          <Tab icon ={<FaTruckMoving/>} label="Carriers"sx={{width:'100%' }}  />
        </Tabs>
      </Box>
      
       <Box sx = {{ flexGrow: 1, marginTop:'3%'}}>
        <TextField 
          placeholder="name"
        ></TextField>
        <TextField 
          placeholder="onboarding date"
          style={{marginLeft: "10px"}}
        ></TextField>        
        <TextField 
          placeholder="stars"
          style={{marginLeft: "10px"}}
        ></TextField>        
        <TextField 
          placeholder="deliveries"
          style={{marginLeft: "10px"}}
        ></TextField>
        <TextField 
          placeholder="Status"
          style={{marginLeft: "10px"}}
        ></TextField>
    
     </Box>
     <Button variant="outlined"  style={{width:"250px" , marginLeft: "450px" , marginTop:"20px" ,marginBottom:"40px"}}> Go </Button>
    
      <Divider sx={{marginBottom:'3%'}}/>  
      
      
      <Box sx={{marginTop:'3%'}}>
      {value?<Carrier/>:<Driver/>}
      </Box>
    </Box>
  );
}
