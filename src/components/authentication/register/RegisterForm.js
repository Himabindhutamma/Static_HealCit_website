import { useState } from 'react'

import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// material
import { Stack,Box,Typography,TextField, IconButton, InputAdornment } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import MBForm from '../../../FunctionalComponents/MBForm/MBForm'
import MBPassword from '../../../FunctionalComponents/MBPassword/MBPassword'
import MBEmailField from '../../../FunctionalComponents/MBEmailField/MBEmailField'
import MBFormButton from '../../../FunctionalComponents/MBFormButton/MBFormButton'
import MBTextField from '../../../FunctionalComponents/MBTextField/MBTextField'
import Store from '../../../Store';
import Axios from '../../../Api/Axios';
import { ReducerTypes, AlertTypes} from '../../../Assets/Constants';
import { Password, SignpostOutlined } from '@mui/icons-material'


// ----------------------------------------------------------------------

const RegisterForm = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [mobilenumber,setMobilenumber]=useState("");
  const [password,setPassword]=useState("");
  const [errors, setErrors]=useState("");
  const Navigate = useNavigate();
  const [valid,setValid]=useState(false);
  const onSignUp = (e) => {
    e.preventDefault();
    setValid(true);
    let data ={
      "name_users":username,"userTypeId_users":1,"email_users":email,"mobileNumber_users":mobilenumber,"roleId_users":1,"password_users":password
    }
    Axios.postData('Registration/', data)
    .then((res) =>{
      console.log(res);
      Store.dispatch({
        type: ReducerTypes.SHOW_ALERT.toString(),
        payload: {
            showAlert: true,
            message: `Registred Successfully!`,
            type: AlertTypes.SUCCESS_ALERT_TYPE
        }
    });
    Navigate('/login');
    }).catch(err =>{
      console.log(err);
      
    })
  }
  return (
    
    <MBForm
      autoComplete='off'
      noValidate
      onSubmit={onSignUp}
    >
      <Stack spacing={3}>
        <MBTextField
          fautoComplete='off'
          name='username'
          error
          fullWidth
          id='username'
          label='User Name'
          validate={valid} value={username} 
          required
          onChange={e=>{setUsername(e.target.value)}}
        />
        <MBEmailField
          autoComplete='off'
          name='email'
          error
          fullWidth
          id='email'
          label='Email id'
          validate={valid} value={email} 
          required
          onChange={e=>{setEmail(e.target.value)}}
        />
        <MBTextField
          fautoComplete='off'
          name='mobilenumber'
          error
          fullWidth
          id='mobilenumber'
          label='Mobile Number'
          validate={valid} value={mobilenumber} 
          required
          onChange={e=>{setMobilenumber(e.target.value)}}
        />

        <MBTextField
          name='password'
          error
          fullWidth
          id='password'
          label='Password'
          validate={valid} value={password} 
          required
          onChange={e=>{setPassword(e.target.value)}}
        />
        <MBFormButton
          fullWidth={true}
          size={'large'}
          variant='contained'
          onClick={()=>{
            console.log('clicked');
            setValid(true)
          }}
          type='submit'
        >
          Register
        </MBFormButton>
        <Box>
          <Typography component="span">
               Already have an account? <Link to='/loginpage'>Sign In</Link>
          </Typography>
                </Box>
      </Stack>
    </MBForm>
  )
}
export default RegisterForm