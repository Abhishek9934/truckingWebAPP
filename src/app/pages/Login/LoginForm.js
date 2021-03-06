import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux";
import { Button } from '@mui/material';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid';
import { signInStart } from '../../../redux/user/userActions';
import { logIn } from '../../services/auth/auth';
// ----------------------------------------------------------------------
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    // account_type: Yup.string().required('Account type is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      // alert(JSON.stringify(values))
      // make api call here
      logIn(values).then(
        (res) => {
          console.log(res);
          if (res['success']){
          dispatch(
            signInStart(res)
          )
          navigate("/app" , {replace:true})
          }
          else{
            alert(res['data']);

          }
        }
      )

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
            {/* <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Username"
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
            /> */}
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
            <FormControlLabel
                control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
                label="Remember me"
            />

            <Link component={RouterLink} variant="subtitle2" to="#">
                Forgot password?
            </Link>
            </Stack>

            <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            >
            Login
            </LoadingButton>
            <Link component={RouterLink}  to="/register">
                Don't have account yet. Register Here!
            </Link>
        </Form>
        </FormikProvider>
        

    </Grid>
  );
}
