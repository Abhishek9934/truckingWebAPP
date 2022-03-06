import * as Yup from 'yup';
import { useState ,useEffect} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch , useSelector} from "react-redux";

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

export default function AddDriver() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  const [name, setName] = useState("");
  const [address , setAddress] = useState("");
  const [designation , setDesignation] = useState("");


    const addTruck = () => {

      const data = {
        name:name,
        designation:designation,
        address:address,
        transporter_id: accountDetails?.id
      };

      create( data , '/transporter/createmember' ).then(
        (res) => {
          // console.log(res['data']);
          if(res?.success)
          {
            alert("Driver added successfully")
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
    setDesignation(e.target.value);

  }
  const handleChange3 = (e)=>{
    setAddress(e.target.value);

  }

  return (
    <div>

        <Grid container>
        <Grid item xs={3}>

        </Grid>

         <Grid item xs={3}>
            <Stack spacing={3}>
            <TextField
                fullWidth
                autoComplete="Driver Name"
                type="text"
                label="Driver Name"
                value = {name}
                onChange={handleChange1}
            />


            <TextField
                fullWidth
                autoComplete="Truck No"
                type="text"
                label="Designation"
                value={designation}
                onChange={handleChange2}
            />
            <TextField
                fullWidth
                label="Address"
                value = {address}
                onChange={handleChange3}

            />
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

        </Grid>

         <Grid item xs={3}>
        
        </Grid>


        </Grid>
        
            
    </div>
  );
}
