import React,{ useState,useEffect, useLayoutEffect } from 'react';
import Axios from '../../Api/Axios';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import {Stack} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import MBFormButton from '../../FunctionalComponents/MBFormButton/MBFormButton';
import MBEmailField from '../../FunctionalComponents/MBEmailField/MBEmailField';
import SearchIcon from '@mui/icons-material/Search';
import clinicImg from './clinic.jpg';
import bottomshape from '../Hospital/bottomshape.png';

const serviceCard = [
  {
    heading: "Vijaya Clinic",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
   {
    heading: "Cardiology",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
  {
    heading: "Gastrio",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
  
];

const Clinic = ()=>{
    const[staticcarddata, setStaticcarddata]=useState([]);
  const[staticcarddata1, setStaticcarddata1]=useState([]);
  const navigate=useNavigate()

  useEffect(() => {
      getstaticData()
     }, [])

    const viewClinic = (id) =>{
      let hospObj = staticcarddata.find(({organizationId_organization}) => organizationId_organization === parseInt(id));
      console.log(hospObj)
      navigate('/clinicdetails',{state:hospObj})
    }
    const getstaticData = () => {
      let data={
        "organizationTypeId_organization": 2  
      } 
      Axios.postData(`SelectConditionWithChildAndParent_organization/`,data)
        .then(res => {
          console.log(res)
          setStaticcarddata(res.Message)
        })
        .catch(error => {})
    }
   
  return (
    <div>
      <header class="header-bottom-4">
        <img src={clinicImg} />
        <div class="header-bottom-4__bg">
          <div class="icon">
          </div>
        </div>
        <div class="container">
          <h1 class="section-title">
             <span>Clinic</span>
          </h1>
         
        </div>
      </header>
      
      <section className="about-4" id="about">
        
        <div className="latest-news__bg">
          <div className="icon">
            <img src={bottomshape} />
          </div>
        </div>
<Grid container spacing={3} className='container'>
        <div className='container search-container'>
         <div className='search-box'>
            <div className="form-group search-info">
									<input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"/>
									<span className="form-text">Ex : Dental or Sugar Check up etc</span>
							</div>
         <button type="submit" className="btn btn-primary search-btn mt-0"><i className="fas fa-search"></i></button>
         
         </div>
        </div>
        {staticcarddata &&

              staticcarddata.map((i, j) => {
                return (
                  <>
                  <Grid item xs={12} md={4} lg={4} sx={{mt:10}}>
                    <Card sx={{ maxWidth: 345,minHeight:402 }} onClick={()=>viewClinic(i.organizationId_organization)} style={{cursor:'pointer'}}> 
                    <CardMedia
                      component="img"
                      height="150"
                      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt="green iguana"
                    />
                    <CardContent>
                      <h3 className="clinic-content">{i.organizationName_organization}</h3>
                      <div>
                      <h4>Address : <span className='clinic-address'> {i.address_organization}  </span></h4>
                      <h4>City : <span className='clinic-address'> {i.city_organization}  </span></h4>
                      <h4>State : <span className='clinic-address'> {i.state_organization}  </span></h4>
                      <h4>Country : <span className='clinic-address'> {i.country_organization}  </span></h4>
                        
                      </div>
                    </CardContent>
                     </Card>
                  </Grid>
                  </>
                );
              })}
         
      </Grid>
      
       
      </section>
    </div>
  )
}
export default Clinic