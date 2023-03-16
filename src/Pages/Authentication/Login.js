import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// @mui
import {Box, Container,InputLabel,TextField,Stack,Button,Grid,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import { ReducerTypes,AlertTypes } from '../../Assets/Constants';
import Store from '../../Store';
import Axios from '../../Api/Axios';



const Login = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const saveLogin = (e) =>{
        e.preventDefault();
        let data = { "email_users": userName, "password_users": password }
        console.log(data);
        
        Axios.postData('Login', data)
            .then(res => {
                console.log(res.Message);
                Store.dispatch({ type: ReducerTypes.LOGIN, payload:res.Message })
                Store.dispatch({
                    type: ReducerTypes.SHOW_ALERT.toString(),
                    payload: {
                        showAlert: true,
                        message: `Logged in Successfully!`,
                        type: AlertTypes.SUCCESS_ALERT_TYPE
                    }
                });
                navigate('/home');
           }).catch(err =>{
               console.log(err);
           })
    }
    return(
        <Box className="contents">
            <Container maxWidth="lg">
            <Stack direction="row" justifyContent="center">
            <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
            <Box className="login-block">
            <form onSubmit={saveLogin}>
             <TextField fullWidth sx={{margin:'5px'}} type="text"
                className={"text-field"}
                value={userName}
                name={"userName"}
                key={"userName"}
                id={"userName"}
                label={"User Name"}
                variant={"outlined"}
                required={true} 
                onChange={(e)=>setUserName(e.target.value)}
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
                required={true}
                onChange={(e)=>setPassword(e.target.value)}
                inputProps={{
                    autoComplete: 'none',
                }}
            />
            <Box className="rem-for-link" >
                <FormGroup sx={{marginLeft: "5px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
                <Box component="span"><Link to="/">Forget Password</Link></Box>
            </Box>
            <Button fullWidth type="submit" variant="contained">Log in</Button>
            <Box className="have-account-link" >
                <Box component="span">Don't You have account?</Box>
                <Box component="span"><Link to="/signup">SignUp</Link></Box>
            </Box>
            <a href ='https://facebook.com'>Click Here</a >
            </form>
            
            </Box>
           
            </Grid>
            </Grid>
            </Stack>
            </Container>
        </Box>
    )
}

export default Login