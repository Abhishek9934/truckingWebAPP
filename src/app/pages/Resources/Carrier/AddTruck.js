import * as Yup from 'yup';
import { useState ,useEffect} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch , useSelector} from "react-redux";
import {Box} from '@mui/material'; 
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid';
import { create } from '../../../services/resources/resources';
// import { signInStart } from '../../../redux/user/userActions';
// ----------------------------------------------------------------------

export default function AddTruck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  const [name, setName] = useState("");
  const [truck_no , setTruckNo] = useState("");
  const [type , setType] = useState("");
  const [driver_id , setDriverId] =  useState(null);
  const [capacity  , setCapacity] = useState("");
  const [status  , setStatus] = useState("");

  useEffect(
    ()=>{
    //   const data = {
    //     params:{
    //     }
    //   };
    //   const url  = `union/getall`;
    //   fetchDetails(data , url ).then(
    //     (res)=>{
    //       console.log(res['data']);
    //       setUnions(res['data']);
    //     });
      
    //   const url1 = `transporter/getall`;
    //   fetchDetails(data , url ).then(
    //     (res)=>{
    //       console.log(res['data']);
    //       setTransporters(res['data']);
    //     });

    },[]
  );




    

    const addTruck = () => {

      const data = {
        name:name,
        type:type,
        truck_no:truck_no,
        driver_id:driver_id,
        capacity:capacity,
        status:status,
        transporter_id: accountDetails?.id
      };

      create( data , '/transporter/addtruck' ).then(
        (res) => {
          // console.log(res['data']);
          if(res?.success)
          {
            alert("Truck Added")
            navigate("/app/resources" , {replace:true});
          }
          else{
            alert(res?.data)
          }

        }
      );

      
    }


  const handleChange1 = (e)=>{
    setName(e.target.value);
  }
  const handleChange2 = (e)=>{
    setType(e.target.value);

  }
  const handleChange3 = (e)=>{
    setTruckNo(e.target.value);

  }
  const handleChange4 = (e)=>{
    setDriverId(e.target.value);

  }
  const handleChange5 = (e)=>{
    setCapacity(e.target.value);

  }
  const handleChange6 = (e)=>{
    setStatus(e.target.value);
  }

  return (
    <Box sx={{marginLeft: '20%', marginRight: '20%'}}>
        
            <Stack spacing={3} >
            <TextField
                fullWidth
                autoComplete="Truck Name"
                type="text"
                label="Truck Name"
                value = {name}
                onChange={handleChange1}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type of Truck</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                key = "type"
                label="Type of Truck"
                onChange={handleChange2}
              >
                
                <MenuItem value={"Small"}>Small</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Large"}>Large</MenuItem>
              </Select>
            </FormControl>

            <TextField
                fullWidth
                autoComplete="Truck No"
                type="text"
                label="Truck No"
                value={truck_no}
                onChange={handleChange3}
            />
            {/* <TextField
                fullWidth
                label="Driver Id"
                value = {driver_id}
                onChange={handleChange4}

            /> */}
            {/* <TextField
                fullWidth
                type="text"
                label="Capacity"
                value = {capacity}
                onChange={handleChange5}
            /> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Capacity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={capacity}
                key = "type"
                label="Capacity"
                onChange={handleChange5}
              >
                
                <MenuItem value={"300kg"}>300kg</MenuItem>
                <MenuItem value={"500kg"}>500kg</MenuItem>
                <MenuItem value={"1000kg"}>1000kg</MenuItem>
              </Select>
            </FormControl>

              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status of Truck</InputLabel>
              <Select
                value={status}
                label="Status"
                onChange={handleChange6}
              >
                
                <MenuItem value={"idle"}>Idle</MenuItem>
                <MenuItem value={"assigned"}>Job Assigned</MenuItem>
                {/* <MenuItem value={"Large"}>Large</MenuItem> */}
              </Select>
            </FormControl>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

            </Stack>

            <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitting}
            onClick ={addTruck}
            >
            Add 
            </Button>

    </Box>
  );
}
