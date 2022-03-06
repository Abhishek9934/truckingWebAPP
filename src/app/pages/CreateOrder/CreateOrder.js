import * as Yup from 'yup';
import { useState ,useEffect} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch , useSelector} from "react-redux";
import BasicDateRangePicker from "../../components/DateRangePicker";

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
import { fetchDetails } from '../../services/resources/resources';
import { createOrder } from '../../services/orders/orders';
// import { signInStart } from '../../../redux/user/userActions';
// ----------------------------------------------------------------------

export default function CreateOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  const [date_value, setValue] = useState([null, null]);
  const [unions , setUnions] = useState([]);
  const [transporters , setTransporters] = useState([]);
  const [type , setType] =  useState("");
  const [start_loc  , setStartLoc] = useState("");
  const [end_loc  , setEndLoc] = useState("");
  const [weight , setWeight] = useState({});
  const [cost , setCost] = useState("");
  const [material , setMaterial] = useState("");
  const [union_id , setUnionId] = useState(null);
  
  const list = [
    {"weight": 100 , "cost": 1000},
    {"weight":  300, "cost": 1000},
    {"weight": 500 , "cost": 3000},
    {"weight": 1000, "cost": 5000},
    {"weight": 1500 , "cost": 7000}
  ];

  useEffect(
    ()=>{
      const data = {
        params:{
        }
      };
      const url  = `union/getall`;
      fetchDetails(data , url ).then(
        (res)=>{
          console.log(res['data']);
          setUnions(res['data']);
        });
      
      // const url1 = `transporter/getall`;
      // fetchDetails(data , url1 ).then(
      //   (res)=>{
      //     console.log(res['data']);
      //     setTransporters(res['data']);
      //   });

    },[]
  );




    

    const handleCreateOrder = () => {
      const data = {
        type:type,
        status:"pending",
        pickup_date: date_value[0],
        drop_date: date_value[1],
        transaction_id:null,
        weight: weight?.weight.toString() ,
        material:material,
        cost:weight?.cost.toString(),
        shipper_id: accountDetails?.id,
        driver_id:null,
        truck_id: null,
        start_loc:start_loc,
        end_loc:end_loc,
        review: "",
        transporter_id:null,
        union_id:union_id
      };

      createOrder(data).then(
        (res) => {
          // console.log(res['data']);
          if(res?.success)
          {
            alert("Order Placed successfully")
            navigate("/app/dashboard" , {replace:true});
          }
          else{
            alert(res?.data)
          }

        }
      );

      
    }


  const handleChange1 = (e)=>{
    setStartLoc(e.target.value);
  }
  const handleChange2 = (e)=>{
    setEndLoc(e.target.value);

  }
  const handleChange3 = (e)=>{
    setType(e.target.value);

  }
  const handleChange4 = (e)=>{
    setMaterial(e.target.value);

  }
  const handleChange5 = (e)=>{
    setWeight(list[e.target.value]);
  }
  const handleChange6 = (e)=>{
    setCost(e.target.value);
  }
  const handleChange7 = (e)=>{
    setUnionId(e.target.value);
  }


  return (
    <div>
        
            <Stack spacing={3}>
            <TextField
                fullWidth
                autoComplete="Start Location"
                type="text"
                label="Start Location"
                key = "start_loc"
                value = {start_loc}
                onChange={handleChange1}
            />
            <TextField
                fullWidth
                autoComplete="End Location"
                type="text"
                label="End Location"
                key = "end_loc"
                value = {end_loc}
                onChange={handleChange2}

            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type of Truck</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                key = "type"
                label="Type of Truck"
                onChange={handleChange3}
              >
                
                <MenuItem value={"Small"}>Small (capacity upto 300)</MenuItem>
                <MenuItem value={"Medium"}> Medium (capacity upto 500)</MenuItem>
                <MenuItem value={"Large"}>Large (capacity upto 1000)</MenuItem>
              </Select>
            </FormControl>

            <TextField
                fullWidth
                autoComplete="Type of Material"
                type="text"
                key = "material"
                label="Type of Material"
                value={material}
                onChange={handleChange4}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Weight</InputLabel>
              <Select
                itemType='text'
                label="Weight"
                value = {weight?.weight}
                onChange={handleChange5}
                // onChange={}
              >
                {
                  list.map((item ,idx) => (
                   <MenuItem  value={idx}>{item?.weight} kg </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <TextField
                fullWidth
                type="text"
                label="Cost"
                value = {weight?.cost}
                // onChange={handleChange6}
                InputLabelProps={{ shrink: true }}
                disabled

            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Union</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                key = "union_id"
                label="Type of Truck"
                value = {union_id}
                onChange={handleChange7}
                // onChange={}
              >
                {
                  unions.map((union) => (
                   <MenuItem value={union?.id}>{union?.name} </MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            
            <BasicDateRangePicker value = {date_value} setValue = {setValue}/>

            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>


            {/* <Link component={RouterLink} variant="subtitle2" to="#">
                Save Progress
            </Link> */}
            </Stack>

            <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitting}
            onClick ={handleCreateOrder}
            >
            Create
            </Button>

    </div>
  );
}
