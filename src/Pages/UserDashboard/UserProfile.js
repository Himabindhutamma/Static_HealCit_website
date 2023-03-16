import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// @mui
import {Box, Container,InputLabel,TextField,Stack,Button,Grid,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import { ReducerTypes,AlertTypes } from '../../Assets/Constants';
import { connect } from 'react-redux';
import Store from '../../Store';
import Axios from '../../Api/Axios';



const UserProfile = ({userId,username,email,mobile}) =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [useremail, setEmail]=useState('');
    const [mobileNumber, setMobileNumber]=useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setUserName(username);
        setPassword();
        setEmail(email);
        setMobileNumber(mobile)
 },[])
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
        <Container>
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
            <TextField fullWidth sx={{margin:'5px'}} type="text"
                className={"text-field"}
                value={useremail}
                name={"email"}
                key={"email"}
                id={"email"}
                label={"Email"}
                variant={"outlined"}
                required={true} 
                onChange={(e)=>setEmail(e.target.value)}
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
                required={true} 
                onChange={(e)=>setMobileNumber(e.target.value)}
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
            <Button variant="contained" sx={{float: 'right'}}>Edit</Button>
            </form>
            </Box>
            </Container>
    )
}
const mapStateToProps = state => {
  return {
    userId: state.User.userId_users,
     email: state.User.email_users,
     username: state.User.name_users,
     mobile: state.User.mobileNumber_users,
  }
}

export default connect(mapStateToProps)(UserProfile)