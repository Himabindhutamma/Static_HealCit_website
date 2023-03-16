import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import MBEmailField from '../../../FunctionalComponents/MBEmailField/MBEmailField';
import MBForm from '../../../FunctionalComponents/MBForm/MBForm';
import MBFormButton from '../../../FunctionalComponents/MBFormButton/MBFormButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const ForgotPasswordForm=()=>{
    const [email,setEmail]=useState("")
    const [valid,setVaild]=useState(false)
    return(
        <>
        <MBForm>
            <Stack spacing={3}>
            <MBEmailField
            fullWidth
            name="email"
            id="email"
            label="Enter Your Email"
            validate={valid}
            value={email}
            autoComplete="off"
            required
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            </Stack>
            <MBFormButton style={{marginTop:'20px'}} fullWidth={true} variant="contained"
                    onClick={()=>{
                        console.log('clicked');
                      }}
                    type="submit" size="large"
                >
                    Continue
                </MBFormButton>
                <Link to='/login' style={{display:'flex',alignItems:'center',marginTop:'15px'}}><KeyboardBackspaceIcon/>Back</Link>
        </MBForm>
       
        
        </>
    );
}
export default ForgotPasswordForm;