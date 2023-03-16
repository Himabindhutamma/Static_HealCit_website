import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from '../../Api/Axios';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import {Stack} from "@mui/material";
import clinicImg from './clinic.jpg';

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

const ClinicDetails = ()=>{
  const clinicDetails = useLocation().state;
  const {service_organization,workingHours_organization} = clinicDetails
  const services = JSON.parse(service_organization);
  const whours =JSON.parse(workingHours_organization);
  console.log(services,whours);

  console.log(clinicDetails);

  return (
    <div>
      <header class="header-bottom-4">
        {/* <img src="./Assets/images/banner/banner4.jpg" /> */}
        <img src={clinicImg} />
        <div class="header-bottom-4__bg">
          <div class="icon">
            {/* <img src="./Assets/images/banner/banner-shape.png" /> */}
          </div>
        </div>
        <div class="container">
          <h1 class="section-title">
             <span>Clinic</span>
          </h1>
          {/* <ol class="breadcrumb">
                <Link className="breadcrumb-item" to="/home">HOME</Link>
                 <li class="breadcrumb-item active">About Us</li>
                </ol> */}
        </div>
      </header>
      <section class="about-4" id="about">
        <div class="latest-news__bg">
          <div class="icon">
            <img src="./Assets/images/png-shapes/latest-news__right-bottom-shape.png" />
          </div>
        </div>
        <Grid container spacing={2} className='container' sx={{mt:2}}>
          <Grid item xs={12} className='clinicgrid'>
          <h1>{clinicDetails.organizationName_organization}</h1>
          <div>{clinicDetails.address_organization},{clinicDetails.city_organization},{clinicDetails.state_organization},{clinicDetails.country_organization}</div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{mt:2}} className='clinicgrid'>
            <h1>About Clinic</h1>
            <p>
            {clinicDetails.about_organization}
            </p>
            <div>
            <h3>Working Hours</h3>
            <ul>
             <li>
               <span>Monday : </span>
               <span>{whours.Monday}</span>
             </li>
             <li>
               <span>Tuesday : </span>
               <span>{whours.tus}</span>
             </li>
             <li>
               <span>Wednesday : </span>
               <span>{whours.wed}</span>
             </li>
             <li>
               <span>Thursday : </span>
               <span>{whours.thu}</span>
             </li>
             <li>
               <span>Friday : </span>
               <span>{whours.fri}</span>
             </li>
             <li>
               <span>Saturday : </span>
               <span>{whours.sun}</span>
             </li>
            </ul>
            </div>
            
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{mt:2}} className='clinicgrid'>
            <h1>Address</h1>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6994463883207!2d77.50970461513259!3d12.927028690885125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ef9a8b779ed%3A0xeb0d29de805134f1!2sPyramid%20-%20SRI%20SHIVARATNAPURI%20TEMPLE%20OF%20HEALTH!5e0!3m2!1sen!2sin!4v1663919007929!5m2!1sen!2sin"
                    width="100%" height="590px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false"
                    tabindex="0">
                </iframe>
          </Grid>
          <Grid item xs={12} sx={{mt:2}} className='clinicgrid'>
          <h1>Services</h1>
          <div className="spanstyle">
          <ul>
            {services.Service && services.Service.map((item,index)=>(
             <li><span>{item.services}</span></li>

            ))}
          </ul>
           </div>
          </Grid>
          
          </Grid>
       
      </section>
    </div>
  )
}
export default ClinicDetails