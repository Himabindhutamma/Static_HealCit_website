import React,{useState,useEffect} from 'react';
import { Box, Button } from '@mui/material';
import MBTable from '../../FunctionalComponents/MBTable/MBTable';
import MBFormButton from '../../FunctionalComponents/MBFormButton/MBFormButton';
import Axios from '../../Api/Axios';
import {connect} from "react-redux";
import {useNavigate} from 'react-router-dom';
import Dialogs from '../../FunctionalComponents/Dailogs/Dailogs';
import {Divider} from '@mui/material';

const TABLE_HEAD = [
    {id: 'appointmentId_appointments', label: 'Appointment Id', alignRight: false},
    {id: 'createdTime_appointments', label: 'Appointment Date', alignRight: false},
    {id:'appointmentName_appointments', label:'Appointment Name', alignRight:false},
    {id:'descreption_appointments', label:'Description', alignRight:false},
    // {id:'followup', label:'Follow Up', alignRight:false},
    // {id:'status', label:'Status', alignRight:false}
];
const appointmentData = [
    {doctor:'Richard Wilson', bookingdate:'14 Nov 2019, 10.00 AM',appointmentdate:'11 Nov 2019', amount:'richard@example.com', followup:'14 Nov 2019',status:'Confirm'},
    {doctor:'Charlene Reed', bookingdate:'12 Nov 2019, 5.00 PM',appointmentdate:'12 Nov 2019', amount:'charlenereed@example.com', followup:'16 Nov 2019',status:'Cancelled'},
    {doctor:'Travis Trimble', bookingdate:'12 Nov 2019, 5.00 PM',appointmentdate:'21 Nov 2019', amount:'charlenereed@example.com', followup:'16 Nov 2019',status:'Pending'},
    {doctor:'Carl Kelly', bookingdate:'12 Nov 2019, 5.00 PM',appointmentdate:'01 Nov 2019', amount:'charlenereed@example.com', followup:'16 Nov 2019',status:'Cancelled'},
    {doctor:'Michelle Fairfax', bookingdate:'12 Nov 2019, 5.00 PM',appointmentdate:'11 Nov 2019', amount:'charlenereed@example.com', followup:'16 Nov 2019',status:'Confirm'},
]
const actions = [{icon: "", actionName: "View"}];
const Appointment = ({userId}) =>{
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    const [open,setOpen]=useState(false);
    const [aptData,setAptData]=useState({})
    console.log(aptData)
    const closeHandle=()=>{
        setOpen(false)
    }
    const onAction= (e)=>{
        console.log(e);
        if(e.action === 'View'){
          setOpen(true);
          setAptData(e.item);
        }

    }
    useEffect(()=>{
        getAppList()
    },[userId])
    const getAppList =()=>{
        let data={
            "userId_appointments": userId
        }
      Axios.postData('SelectConditionWithChildAndParent_appointments',data).then((res =>{
          console.log(res.Message)
        setData(res.Message)
      })).catch(err=>{

      })
    }
    return(
        <>
        <Box className="login-block">
                <div className="table-view">
                  <span  className="white-text mx-0">APPOINTMENTS</span>
                  <MBFormButton className="apt-btn" onClick={()=>navigate('/dashboard/patientdetails')} variant={"outline"} type="button">Appt Booking</MBFormButton>
                </div>
                <MBTable data={data} head={TABLE_HEAD} actionList={actions} onAction={onAction}/>   
                <Dialogs open={open} handleClose={closeHandle} content={
                    <div>
                    <h3>{aptData.appointmentNumber_appointments} :</h3>
                    <h4>21 Oct 2022</h4><h4>10:00 am</h4>
                    <h3>Status :</h3>
                    <h4>Completed</h4>
                    <h3>Confirm Date :</h3>
                    <h4>29 Jun 2022</h4>
                    <h3>Paid Amount :</h3>
                    <h4>$450</h4></div>
                    } title={<div><h2>Appointments </h2><Divider orientation="horizontal" /></div>}/>
 
      </Box>
      
        </>
    )
}
const mapStateToProps = (state)=>{
    return{
        userId:state.User.userId_users
    }
}
export default connect(mapStateToProps)(Appointment);