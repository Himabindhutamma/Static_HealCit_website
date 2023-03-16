import React,{ useEffect,useState } from 'react'
import { Box } from '@mui/material'
import Axios from '../../Api/Axios'

const OverView = ({docdata}) => {
  console.log(docdata)
  const [docData, setDocData]=useState({})
  const {personalDetails_userInformation,professionalDetails_userInformation} = docdata
  const personalDetails = JSON.parse(personalDetails_userInformation);
  const professionalDetails = JSON.parse(professionalDetails_userInformation);

  console.log("",personalDetails,professionalDetails)
  // useEffect(()=>{
  //   getDocDetails()
  // },[])
 
  // const getDocDetails = () =>{
  //   let data ={
  //     "userInformationId_userInformation":99
  //   }
  //   Axios.postData('SelectConditionWithChildAndParent_userInformation/',data).then(res=>{
  //      setDocData(JSON.parse(res.Message[0].personalDetails_userInformation))
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }
  return (
    <>
      <Box className='doc-overview'>
        <h4>About Me</h4>
        <p className='about-doc'>
          {personalDetails.aboutMe}
        </p>
        <Box className='doc-education' style={{display: 'flex',justifyContent: 'space-between'}}>
          <div>
          <h4>Education</h4>
          <Box className='doc-edu-list'>
            <ul>
              {personalDetails.education && personalDetails.education.map((item,index)=>(
                    <li>
                    <div class='experience-user'>
                      <div class='before-circle'></div>
                    </div>
                    <div>
                      <p>{item.college}</p>
                      <div>{item.degree}</div>
                      <span>{item.yearOfCompletion}</span>
                    </div>
                    </li>
              ))}
             </ul>
          </Box>
          </div>
         
          <Box className=''>
          <h4>Work & Experience</h4>
          <Box className='doc-edu-list'>
            <ul>
              {professionalDetails.experience && professionalDetails.experience.map((item,index)=>(
                <li>
                <div class='experience-user'>
                  <div class='before-circle'></div>
                </div>
                <div>
                  <p>{item.hospitalName}</p>
                  <span>{item.from} - {item.to}</span>
                  <span>{item.designation}</span>
                </div>
              </li>
              ))}
             </ul>
          </Box>
        </Box>
        </Box>
       
        <Box className='doc-education'>
          <h4>Awards</h4>
          <Box className='doc-edu-list'>
            <ul>
              <li>
                <div class='experience-user'>
                  <div class='before-circle'></div>
                </div>
                <div>
                  <p>July 2019</p>
                  <span>Humanitarian Award</span>
                </div>
              </li>
              <li>
              <div class='experience-user'>
                  <div class='before-circle'></div>
                </div>
                <div>
                  <p>March 2011</p>
                  <span>Certificate for International Volunteer Service</span>
                </div>
              </li>
              <li>
              <div class='experience-user'>
                  <div class='before-circle'></div>
                </div>
                <div>
                  <p>May 2008</p>
                  <span>The Dental Professional of The Year Award   </span>
                </div>
              </li>
            </ul>
          </Box>
        </Box>
        {/* <Box className='services-list'>
            <h4>Services</h4>
            <ul>
                <li>Tooth cleaning</li>
                <li>Root Canal Therapy</li>
                <li>Implants</li>
                <li>Composite Bonding</li>
                <li>Fissure Sealants</li>
            </ul>
        </Box> */}
        <Box className='services-list'>
            <h4>Specializations</h4>
            <ul>
              {personalDetails.specialization && personalDetails.specialization.map((item,index)=>(
                <li>{item.services}</li>
               ))}
                
            </ul>
        </Box>
      </Box>
    </>
  )
}
export default OverView
