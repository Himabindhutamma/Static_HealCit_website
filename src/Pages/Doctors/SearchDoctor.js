import React, { useEffect,useState } from 'react';
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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Axios from '../../Api/Axios';

// const doctorsSearch = [{
//     docImg:patient, docName:'Dr. Ruby Perrin', speciality:'MDS - Periodontology and Oral Implantology, BDS',departments:'Dentist',
//     location:'Florida, USA',services1:'Dental Filling',services2:'Whitneing',likes:'98%', feedback:'17 feedback',cost:'$300 - $300'
// },
// {
//     docImg:patient, docName:'Dr. Ruby Perrin', speciality:'MDS - Periodontology and Oral Implantology, BDS',departments:'Dentist',
//     location:'Florida, USA',services1:'Dental Filling',services2:'Whitneing',likes:'98%', feedback:'17 feedback',cost:'$300 - $300'
// },
// {
//     docImg:patient, docName:'Dr. Ruby Perrin', speciality:'MDS - Periodontology and Oral Implantology, BDS',departments:'Dentist',
//     location:'Florida, USA',services1:'Dental Filling',services2:'Whitneing',likes:'98%', feedback:'17 feedback',cost:'$300 - $300'
// }]
const SearchDoctor = ()=>{
  const navigate = useNavigate();
  const [docData, setDocData] = useState([])

  useEffect(()=>{
    getDocData()
  },[]) 
  const viewProfile = (id) =>{
    let docObj=docData.find(({userId_users}) => userId_users === parseInt(id))
    console.log(docObj)
    navigate('/doctorprofile',{state:docObj})
  }
  const getDocData = () =>{
    let data={
      "userTypeId_users":3
    }
    Axios.postData('SelectConditionWithChildAndParent_users',data).then(res =>{
      console.log(res.Message);
      const id=res.Message.map(o => o.userId_users)
      const filtereddata = res.Message.filter(({userId_users},index) => !id.includes(userId_users,index+1))
      console.log(filtereddata)
      setDocData(filtereddata)
    }).catch(err =>{

    })
  }

    return(
        <>
         <Grid container spacing={2} className='container' sx={{mt:2}}>
          <Grid item xs={12} md={12} lg={12}>
        {
            docData && docData.length > 0 && docData.map((i,j)=>
        <Card sx={{ minWidth: 275 }} className='doc-card'>
      <CardContent>
       <Stack direction='row' justifyContent='space-between' alignItems='' spacing={2}>
       <Box className='doctors-search-left'>
         <div>
           <img className='doctors-img' src={patient} alt='doctors-img'/>
         </div>
         <div>
          <h4>{i.name_users}</h4>
          <p className='doc-speciality'>{i.speciality}</p>
          <h5>{i.departments}</h5>
          <div className='about-hospital'>
           <PinDropIcon/>
          <p>{i.state_userInformation}, {i.country_userInformation}</p>
          </div>
          <div className='hospital-services'>
             <span>{i.services1}</span>
             <span> {i.services2}</span>
          </div>
         </div>
       </Box>
       <Box>
       <div className='hospital-info'>
         <ul>
         <li>
         <span><ThumbUpOffAltOutlinedIcon/></span> 98%</li>
         <li><span><ChatBubbleOutlineOutlinedIcon/></span>17 feedback</li>
         <li><span><CurrencyRupeeIcon/></span>{i.fee_userSlots}</li>
         </ul>
       </div>
       <CardActions className='doctors-action'>
        <MBFormButton type="button" className='doctors-action-btn' variant='outlined' onClick={()=>viewProfile(i.userId_users)}>View Profile</MBFormButton>
        <MBFormButton type="button" variant='contained' className='doctors-action-btn'onClick={()=>navigate('/dashboard/patientdetails')}>Book Appointment</MBFormButton>
      </CardActions>
       </Box>
        
       </Stack>
      </CardContent>
      
        
    </Card>
            )
        }
        </Grid>
        </Grid>
        </>
    )
}
export default SearchDoctor