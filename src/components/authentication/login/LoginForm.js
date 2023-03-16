import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../../../Api/Axios';
import MBTextField from '../../../FunctionalComponents/MBTextField/MBTextField';
// material
import {
    Stack,
    Checkbox,Box,Typography,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AlertTypes, ReducerTypes } from '../../../Assets/Constants';
import MBForm from '../../../FunctionalComponents/MBForm/MBForm';
import MBPassword from '../../../FunctionalComponents/MBPassword/MBPassword';
import MBEmailField from '../../../FunctionalComponents/MBEmailField/MBEmailField';
import MBFormButton from '../../../FunctionalComponents/MBFormButton/MBFormButton';
import axios from 'axios';
import routes from '../../../routes';
import { replace } from 'lodash';
import Store from '../../../Store';

// ----------------------------------------------------------------------

 const LoginForm=({ })=> {
              const [email,setEmail]=useState("");
              const [password,setPassword]=useState("");
              const navigate = useNavigate();
              const [valid,setValid]=useState(false);
              
              const onSignIn = (e) => {
                e.preventDefault();
                setValid(true);
                let data ={
                    "email_users":email,"password_users":password
                }
                Axios.postData('Login/', data)
                .then((res) =>{
                  console.log(res);
                  Store.dispatch({type:'LOGIN',payload:res.Message})
                  Store.dispatch({
                    type: ReducerTypes.SHOW_ALERT.toString(),
                    payload: {
                        showAlert: true,
                        message: `Login Successfully!`,
                        type: AlertTypes.SUCCESS_ALERT_TYPE
                    }
                });
                navigate('/dashboard/profile');
                }).catch(err =>{
                  console.log(err);
                })
                
              }
    return (
        <>
            <MBForm
                autoComplete="off"
                noValidate
                onSubmit={onSignIn}
            >
                <Stack spacing={3}>
                    <MBEmailField
                    type="text"
                        autoComplete="off"
                        name="email"
                        fullWidth
                        id="email"
                        label="Email id"
                        validate={valid} value={email} 
                        required
                        onChange={e=>{setEmail(e.target.value)}}
                       
                    />


                    <MBPassword error autoComplete="off"
                    type="password"
                        name="password"
                        id="password"
                        label="Password"
                        validate={valid} value={password} 
                        required
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Link variant="subtitle2" to="/forgotpassword">
                        Forgot password?
                    </Link>
                </Stack>

                <MBFormButton fullWidth={true} variant="contained"
                    onClick={()=>{
                        console.log('clicked');
                        setValid(true)
                      }}
                    type="submit" size="large"
                >
                    Login
                </MBFormButton>
                <Box style={{marginTop:'10px'}}>
                    <Typography component="span">
                            Don't have an account? <Link to='/register'>Sign Up</Link>
                    </Typography>
                </Box>
            </MBForm>
        </>
    );
}
export default LoginForm;