import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// @mui
import {Box, Container,InputLabel,TextField,Stack,Button,Grid,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import Axios from '../../Api/Axios';
import Store from '../../Store';
import {ReducerTypes,AlertTypes} from '../../Assets/Constants'


const SignUp = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();
    const signUp = (e) =>{
        e.preventDefault();
            let data = {
            "name_users":userName,
            "email_users":email,
            "mobileNumber_users":mobileNumber,
            "roleId_users":3,
            "password_users":password,
            }

    Axios.postData('Registration', data).then(res => {
      Store.dispatch({
        type: ReducerTypes.SHOW_ALERT.toString(),
        payload: {
          showAlert: true,
          message: `Registred Successfully!`,
          type: AlertTypes.SUCCESS_ALERT_TYPE
        }
      })
      navigate('/login');
    })
    }
    return(
        <Box className="contents">
            <Container maxWidth="lg">
            <Stack direction="row" justifyContent="center">
            <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
            <Box className="login-block">
            <form onSubmit={signUp}>
             <TextField fullWidth sx={{margin:'5px'}} type="text"
                className={"text-field"}
                value={userName}
                name={"userName"}
                key={"userName"}
                id={"userName"}
                label={"User Name"}
                variant={"outlined"}
                required 
                onChange={(e)=>setUserName(e.target.value)}
                inputProps={{
                    autoComplete: 'none',
                }}
            />
             <TextField fullWidth sx={{margin:'5px'}} type="text"
                className={"text-field"}
                value={email}
                name={"email"}
                key={"email"}
                id={"email"}
                label={"Email"}
                variant={"outlined"}
                required 
                onChange={(e)=>setEmail(e.target.value)}
                inputProps={{
                    autoComplete: 'none',
                }}
            />
             <TextField fullWidth sx={{margin:'5px'}} type="password"
                className={"text-field"}
                value={password}
                name={"password"}
                key={"password"}
                id={"password"}
                label={"Password"}
                variant={"outlined"}
                required
                onChange={(e)=>setPassword(e.target.value)}
                inputProps={{
                    autoComplete: 'none',
                }}
            />
            <TextField fullWidth sx={{margin:'5px'}} type="number"
                className={"text-field"}
                value={mobileNumber}
                name={"mobileNumber"}
                key={"mobileNumber"}
                id={"mobileNumber"}
                label={"Mobile Number"}
                variant={"outlined"}
                required
                onChange={(e)=>setMobileNumber(e.target.value)}
                inputProps={{
                    autoComplete: 'none',
                }}
            />
            
            <Button fullWidth type="submit" variant="contained">Sign Up</Button>
            <Box className="have-account-link" >
                <Box component="span">Do You have account?</Box>
                <Box component="span"><Link to="/login">SignIn</Link></Box>
            </Box>
            </form>
            
            </Box>
           
            </Grid>
            </Grid>
            </Stack>
            </Container>
        </Box>
    )
}
export default SignUp