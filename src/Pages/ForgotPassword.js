import React from 'react';
import { Box,Paper,Grid,Typography } from '@mui/material';
import ForgotPasswordForm from '../components/authentication/ForgotPassword/ForgotPasswordForm';
const ForgotPassword=()=>{
    return(
        <Box className='login-page1'>
        <Box className='loginp'>
          <Box className='temp-of-login'>
            <Grid container spacing={1} className='temp-of-grid'>
                <Grid xs={11} sm={9} md={5} lg={4} xl={3}>
                   <Paper className='temp-of-paper'>
                        <Box className='temp-of-box'>
                            <Typography variant={'h4'} style={{position:'relative',top:'10px'}}>
                                ForgotPassword
                            </Typography>
                            <Grid container spacing={3} className='temp-container'>

                            </Grid>
                        </Box>
                        <Box className='temp-of-form'>
                          <ForgotPasswordForm/>
                        </Box>
                    </Paper> 
                </Grid>
            </Grid>     
         </Box>  
        </Box>
      </Box>
    )
}
export default ForgotPassword;