import { Grid,Card, Paper, CardContent,Box, Button, CardMedia,Divider } from '@mui/material';
import { Stack } from '@mui/system';
import React,{useState,useEffect} from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate } from 'react-router';
import Axios from '../../Api/Axios';
 import {connect} from "react-redux"
const Profile=(userId)=>{
  console.log(userId.userId)
  const [profileData,setProfileData]=useState([])
 const[editData,setEditData]=useState({})
 useEffect(()=>{
  getProfileData();
 },[userId])
  const navigate=useNavigate()
  const getProfileData=()=>{
      let data={
          "userId_userInformation":userId.userId
      }
      Axios.postData('SelectConditionWithParent_userInformation',data).then((res)=>{
          console.log(res);
          setProfileData(res.Message)
          setEditData(res.Message[0])
      })
  }

  return(
   <>
    <Button sx={{mr:3}} variant='contained' style={{float:'right'}} onClick={()=>{navigate('/dashboard/patientprofilesettings',{state:editData})}}>Edit Profile</Button>
    <Grid container>
      <Grid item xs={12} md={7} lg={7}>
        <Card sx={{m:2}}>
          <Grid container>
            <Grid item xs={12} md={6} lg={6} style={{borderRight:"1px solid #77889933"}}>
            <CardMedia className="profile-img"
        component="img"
        alt="green iguana"
        image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        />
        <CardContent>
        {profileData.map((i,j)=>{
          return(
            <>
             <Box style={{textAlign:'center'}}>
         <h1>{i.fullName_userInformation}</h1>
         <h4>{i.email_users}</h4>
         <h4>Appointments</h4>
         </Box>
         <Box  className="profile-img-content">
         <Box>
          <Stack direction='column'><h1>5</h1></Stack>
          <Stack direction='column'><h4>Past</h4></Stack>
         </Box>
         <Divider orientation='vertical' flexItem/>
         <Box>
          <Stack direction='column'><h1>2</h1></Stack>
          <Stack direction='column'><h4>Upcoming</h4></Stack>
         </Box>
         </Box>
            </>
          )
        })}
         
        </CardContent>
            </Grid>
            
            <Grid item xs={12} md={6} lg={6} style={{padding:'20px'}}>
              
              {profileData.map((i,j)=>{
                return(
                  <>
 <Box style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
 <Box className='profile-details'>
<Stack direction='column'><h4>Gender</h4></Stack>
<Stack direction='column'><h4>{i.gender_userInformation}</h4></Stack>
</Box>
<Box className='profile-details'>
<Stack direction='column'><h4>Age</h4></Stack>
<Stack direction='column'><h4>{i.age_userInformation}</h4></Stack>
</Box>
</Box>
<Box style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
              <Box className='profile-details'>
<Stack direction='column'><h4>Phone number</h4></Stack>
<Stack direction='column'><h4>{i.mobileNumber_users}</h4></Stack>
</Box>
<Box className='profile-details'>
<Stack direction='column'><h4>Address</h4></Stack>
<Stack direction='column'><h4>Nellore</h4></Stack>
</Box>
</Box>
<Box style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
              <Box className='profile-details'>
<Stack direction='column'><h4>City</h4></Stack>
<Stack direction='column'><h4>{i.city_userInformation}</h4></Stack>
</Box>
<Box className='profile-details'>
<Stack direction='column'><h4>Zip code</h4></Stack>
<Stack direction='column'><h4>524405</h4></Stack>
</Box>
</Box>
<Box style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
              <Box className='profile-details' style={{border:'none'}}>
<Stack direction='column'><h4>Reg.Date</h4></Stack>
<Stack direction='column'><h4>09-05-1998</h4></Stack>
</Box>
<Box className='profile-details'style={{border:'none'}}>
<Stack direction='column'><h4>Status</h4></Stack>
<Stack direction='column'><h4>Active</h4></Stack>
</Box>
</Box>
  </>
 )
})}

 </Grid>
 </Grid>
 </Card>
</Grid>
      <Grid item xs={12} md={5} lg={5}>
        <Card sx={{m:2,height:'418px',minHeight:'418px'}}>
          <CardContent>

            <Box style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <h4>Notes</h4>
              <p>See all</p>
            </Box>
            <Box style={{backgroundColor:'aliceblue',borderRadius:'10px',padding:'35px'}}>
              <ul>
              <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
                <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
                <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
                <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
                <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
                <li style={{listStyle:'disc'}}>The patient needs to get full amount of tests</li>
              </ul>
              <Button variant='contained' style={{display:'block',marginLeft:'auto',marginTop:'35px'}}>Save note</Button>
            </Box>
            <Box style={{marginTop:'10px',marginBottom:'10px'}}>
            <h4>Note 1</h4>
            <Box style={{display:'flex',justifyContent:'space-between'}}>
            <p>Dr.Sandeep</p>
            <p>20 Nov 22</p>
            </Box>
           
          </Box>
          </CardContent>
         
        </Card>
      </Grid>
    </Grid>
    <Grid item xs={12} md={12} lg={12}>
    <Card sx={{pb:3}} style={{backgroundColor:'aliceblue'}}>
      <CardContent>
        <Box style={{display:'flex',justifyContent:'space-between'}}>
       <Stack direction='row' spacing={2}  >
        <Button variant='contained'>Upcoming Appointments</Button>
        <Button variant='contained'>Post Appointments</Button>
        {/* <a  href="">Upcoming appointments</a>
        <a href="">Post appointments</a>
        <a href="">Medical records</a> */}
       </Stack>
       <Button onClick={()=>navigate('/dashboard/appointments')} variant='contained'> Add Appointment</Button>
        </Box>
      </CardContent>
     
      <Card sx={{ml:2,mr:2}}>
      <Stack direction='row' style={{justifyContent:'space-evenly'}}>
        <Box style={{padding:'20px'}}>
          <h4>01 Jun 2022</h4>
          <p>09:00:Am</p>
        </Box>
      
        <Box style={{padding:'20px'}}>
          <h4>Type</h4>
          <p>09:00:Am</p>
        </Box>
        <Box style={{padding:'20px'}}>
          <h4>Doctor</h4>
          <p>09:00:Am</p>
        </Box>
        <Box style={{padding:'20px'}}>
          <h4>Nurse</h4>
          <p>09:00:Am</p>
        </Box>
        <Box style={{display:'flex',alignItems:'center'}}>
          <Box >
          <h4 style={{display:'flex'}}> <DescriptionIcon/>Notes</h4>
          </Box>
         
        </Box>
      </Stack>
      </Card>
      
    </Card>
    </Grid>
   </>
  )
}
const mapStateToProps=(state)=>{
       console.log(state)
       return{
           userId:state.User.userId_users
       }
   }
export default connect(mapStateToProps)(Profile)

// import React, { useState ,useEffect} from "react";
// import { useNavigate } from "react-router";
// import { Paper , Grid,Divider} from "@mui/material";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/system";
// import Axios from '../../Services/API';
// import {connect} from "react-redux"

// const Profile = ({userId}) => {
//     console.log(userId)
//    const [profileData,setProfileData]=useState([])
//    const[editData,setEditData]=useState({})
//    useEffect(()=>{
//     getProfileData();
//    },[userId])
//     const navigate=useNavigate()
//     const getProfileData=()=>{
//         let data={
//             "userId_userInformation":userId
//         }
//         Axios.postData('SelectConditionWithParent_userInformation',data).then((res)=>{
//             console.log(res);
//             setProfileData(res.Message)
//             setEditData(res.Message[0])
//         })
//     }
//   return (
    
//     <>
//       <Paper elevation={8}>
//         <h1 style={{ textAlign: "center" }}> PROFILE</h1>
//         <Card sx={{ maxWidth: "100%" }}>
//           <CardMedia className="profile-img"
//             component="img"
//             alt="img"

           
//             image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//           />
// <CardContent>
//           {profileData.map((i, j) => {
//             return (
//               <>
//                  <Grid container spacing={2}>
                  
//                     <Grid item xs={12} md={5} lg={5}>
//                   <h1 style={{textAlign:"center"}}>{i.fullName_userInformation}</h1>
//                   <Stack direction="row" spacing={3} style={{justifyContent:"center"}} >  <h4>{i.email_users}</h4> </Stack>
//                   <Stack direction="row" spacing ={3} style={{justifyContent:"center"}} > <h4>Appointments</h4></Stack>
//                   <Stack direction="row" spacing={10} style={{justifyContent:"center",marginTop:"30px"}}  >
                 
//                    <Stack direction="column" spacing={2}><h4 style={{textAlign:"center"}}>5</h4><h4> Past</h4> </Stack>
//                    <hr/> 
//                    <Stack direction="column" spacing={2}><h4 style={{textAlign:"center"}}>5</h4><h4> Upcoming</h4> </Stack> 
//                   </Stack>

//                   </Grid>
//                  <Grid item xs={12} md={7} lg={7}> 
//                  <Stack direction="row" spacing={20}>
//                  <Stack direction="column" spacing={2}> <h4>Gender </h4> <h4>{i.gender_userInformation}</h4> </Stack>
//                  <Stack direction="column" spacing={2}> <h4>DOB </h4> <h4>09-05-1998</h4> </Stack>
//                  </Stack>
//                  <Stack direction="row" spacing={20} sx={{mt:5}}>
//                  <Stack direction="column" spacing={2} > <h4>Mobile </h4> <h4>{i.mobileNumber_users}</h4> </Stack>
//                  <Stack direction="column" spacing={2}> <h4>Address </h4> <h4>Nellore</h4> </Stack>
//                  </Stack>
//                  <Stack direction="row" spacing={20} sx={{mt:5}}>
//                  <Stack direction="column" spacing={2} > <h3>City </h3> <h3>{i.city_userInformation}</h3> </Stack>
//                  <Stack direction="column" spacing={2}> <h3>ZIP Code </h3> <h3>524405</h3> </Stack>
//                  </Stack>
//                   </Grid>
//                  {/* <Grid item xs={12} md={4} lg={4}><Stack direction="row" spacing={3}> <h3>Mobile: </h3> <h3>{i.mobileNumber_users}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={8} lg={8}>  <Stack direction="row" spacing={3}> <h3>Email: </h3> <h3>{i.email_users}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={4} lg={4}> <Stack direction="row" spacing={3}> <h3>Gender: </h3> <h3>{i.gender_userInformation}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={8} lg={8}> <Stack direction="row" spacing={3}> <h3>Age: </h3> <h3>{i.age_userInformation}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={4} lg={4}>  <Stack direction="row" spacing={3}> <h3>City: </h3> <h3>{i.city_userInformation}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={8} lg={8}> <Stack direction="row" spacing={3}> <h3>State: </h3> <h3>{i.state_userInformation}</h3> </Stack></Grid>
//                  <Grid item xs={12} md={4} lg={4}> <Stack direction="row" spacing={3}> <h3>Country: </h3> <h3>{i.country_userInformation}</h3> </Stack></Grid>
//                  */}
//                  </Grid>
//               </>
//             );
//           })}
//            </CardContent>

//           <Button onClick={()=>{navigate('/dashboard/patientprofilesettings',{state:editData})}}
//             variant="contained"
//             size="medium"
//             style={{ float: "right", margin: "10px" }}
//           >
//             Edit Profile
//           </Button>
//         </Card>
//       </Paper>
//     </>
//   );
// };
// const mapStateToProps=(state)=>{
//     console.log(state)
//     return{
//         userId:state.User.userId_users
//     }
// }
// export default connect(mapStateToProps)(Profile)