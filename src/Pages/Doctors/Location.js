import React from 'react';
import {Box,Grid} from '@mui/material';

const Location = () =>{
    return(
        <Box className='doc-overview'>
        <Grid container>
          <Grid item xs={12} md={8} lg={8}>
            <h4>Smile Cute Dental Care Center</h4>
            <p class="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
           <h5 class="clinic-direction"> <i class="fas fa-map-marker-alt"></i> 2286  Sundown Lane, Austin, Texas 78749, USA
            </h5>
            <a href="javascript:void(0);">Get Directions</a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
           <h4> Mon - Sat</h4>
            <div>10:00 AM - 2:00 PM</div>
            <div>4:00 PM - 9:00 PM</div>
            <h4> Sunday</h4>
            <div>10:00 AM - 2:00 PM</div>
            <div>4:00 PM - 9:00 PM</div>
          </Grid>
          
        </Grid>
      </Box>
    )
}
export default Location