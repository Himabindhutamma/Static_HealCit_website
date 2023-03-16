import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box,Stack,Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MBFormButton from '../../FunctionalComponents/MBFormButton/MBFormButton';
import patient from '../../FunctionalComponents/Table/patient.jpg';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import MBTab from '../../FunctionalComponents/MBTab/MBTab';
import OverView from './Overview';
import Location from './Location';
import BusinessHours from './BusinessHours';
import { useLocation } from 'react-router-dom';



const doctorsSearch = [{
    docImg:patient, docName:'Dr. Ruby Perrin', speciality:'MDS - Periodontology and Oral Implantology, BDS',departments:'Dentist',
    location:'Florida, USA',services1:'Dental Filling',services2:'Whitneing',likes:'98%', feedback:'17 feedback',cost:'$300 - $300'
}]

const DoctorsDetails = () =>{
  const navigate=useNavigate();
  const docdata=useLocation().state;
  console.log(docdata)
  const tabs=[{
    id:1,
    label:'OverView',
    component:<OverView docdata={docdata}/>
},
{
    id:2,
    label:'Locations',
    component:<Location/>
},
// {
//     id:3,
//     label:'Reviews',
//     component:<>Reviews</>
// },
{
    id:3,
    label:'Business Hours',
    component:<BusinessHours/>
}]
    return(
        <div className='doc-container'>
         {/* {
            doctorsSearch && doctorsSearch.length > 0 && doctorsSearch.map((i,j)=> */}
     <Card className='doc-card doc-details-card'>
      <CardContent>
       <Stack direction='row' justifyContent='space-between' alignItems='' spacing={2}>
       <Box className='doctors-search-left'>
         <div>
           <img className='doctors-img' src={patient} alt='doctors-img'/>
         </div>
         <div>
          <h4>{docdata.fullName_userInformation}</h4>
          <p className='doc-speciality'>{docdata.speciality}</p>
          <h5>{docdata.departments}</h5>
          <div className='about-hospital'>
           <PinDropIcon/>
          <p>{docdata.state_userInformation}, {docdata.country_userInformation}</p>
          </div>
          {/* <div className='hospital-services'>
             <span>{i.services1}</span>
             <span> {i.services2}</span>
          </div> */}
         </div>
       </Box>
       <Box>
       <div className='hospital-info'>
         <ul>
         <li>
         <span><ThumbUpOffAltOutlinedIcon/></span>98%</li>
         <li><span><ChatBubbleOutlineOutlinedIcon/></span>18 feedback</li>
         <li><span><CurrencyRupeeIcon/></span>{docdata.fee_userSlots}</li>
         </ul>
       </div>
       <CardActions className='doctors-action'>
        <MBFormButton onClick={()=>{navigate('/dashboard/patientdetails')}} type="button" variant='contained' className='doctors-action-btn'>Book Appointment</MBFormButton>
      </CardActions>
       </Box>
       </Stack>
       <MBTab className='doctors-tab' tabs={tabs}/>
      </CardContent>
      </Card>
            {/* )
        } */}
        </div>
    )
}
export default DoctorsDetails