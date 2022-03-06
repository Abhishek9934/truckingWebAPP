import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux";

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  MenuItem,
  Select
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid';
import { register , profileset} from '../../services/auth/auth';
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    account_type: Yup.string().required('Account type is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      account_type:'',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {

      register(values).then(
      async (res)=>{
        if(res.success)
        {
          alert("registration success");
        //  await profileset({'account_type':values.account_type, 'name': values.username ,  'user_id': res['data'][0]['id']}).then((res) => {
        //   console.log("hehe");
        // })
          navigate('/login', { replace: true });
        }
        else
        {
          alert("some error");
        }
      }
      );
      
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Grid container className="loginForm">
        
        <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
            <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Username"
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
            />
            <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="Email address"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
            />
            {/* <TextField
                fullWidth
                autoComplete="account_type"
                type="text"
                label="Accounttype"
                {...getFieldProps('account_type')}
                error={Boolean(touched.account_type && errors.account_type)}
                helperText={touched.account_type && errors.account_type}
            /> */}
              <Select
                // onChange={handleChange3}
                {...getFieldProps('account_type')}
                error={Boolean(touched.account_type && errors.account_type)}
                helperText={touched.account_type && errors.account_type}
              >
                
                <MenuItem value={"shipper"}>shipper</MenuItem>
                <MenuItem value={"transporter"}>transporter</MenuItem>
                <MenuItem value={"union"}>union</MenuItem>
              </Select>

            <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                        {showPassword?<Visibility/>:<VisibilityOff/>}
                        {/* <Icon icon={showPassword ? eyeFill : eyeOffFill} /> */}
                    </IconButton>
                    </InputAdornment>
                )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
            />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>

            <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            >
            Register
            </LoadingButton>
        </Form>
        </FormikProvider>
    </Grid>
  );
}
