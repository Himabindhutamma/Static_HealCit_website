import React from 'react';
import {Grid,Box,Table,TableHead,TableBody,TableCell,TableRow,Paper} from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MBTable from '../../FunctionalComponents/MBTable/MBTable';

const TABLE_HEAD = [
    {id: 'date', label: 'Date', alignRight: false},
    {id: 'name', label: 'Patient Prescription', alignRight: false},
    {id:'email', label:'Email', alignRight:false},
    {id:'doctorname', label:'Doctor Name', alignRight:false},
];
const prescriptionData = [
    {doctorname:'Richard Wilson',date:'11 Nov 2019',name:'Prescription 1',email:'charlenereed@example.com'},
    {doctorname:'Charlene Reed',date:'12 Nov 2019', name:'Prescription 2',email:'charlenereed@example.com'},
    {doctorname:'Travis Trimble',date:'21 Nov 2019',name:'Prescription 3',email:'charlenereed@example.com' },
    {doctorname:'Carl Kelly',date:'01 Nov 2019', name:'Prescription 4',email:'charlenereed@example.com'},
    {doctorname:'Michelle Fairfax',date:'11 Nov 2019',name:'Prescription 5',email:'charlenereed@example.com'},
]
const PatientPrescription=()=>{
    return(
        <Paper elevation={16}>
        <div>
            <img style={{height:'50px',marginLeft:'50%'}} src='https://www.healcit.com/assets/img/logo.webp'/>
            </div>
        <Grid container className='container' spacing={2} sx={{padding: '20px 60px 40px 60px'}}>

        <h3>Patient Details</h3>
            <Grid item xs={12} md={12} lg={12}>
           
            <Box style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid gray'}}>
                <div>
               
                <h4>Sandeep Anguluru</h4>
                <h4>Patient Id: Sunny7799</h4>
                <h4>7799180260</h4>
                <h4>sandeep.anguluru@gmail.com</h4>
                </div>
                <div>
                     <h4>Male</h4>
                <h4>Blood Group : O+</h4>
                <h4>Nellore</h4></div>
            </Box>
            <Box style={{display:'flex',justifyContent:'space-between'}}>
                <h3>Prescription</h3>
                <h4>09 may 2023</h4>
            </Box>
            <Box style={{display:'flex',justifyContent:'space-around'}}>
                <h4>Prescribed by:<b>Sandeep</b></h4>
                <h4> Registeration Number:<b>SN/7799</b></h4>
            </Box>
            <Table>
      <TableHead style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
        <TableRow >
            <TableCell style={{color:'white'}}> Drug Name </TableCell>
            <TableCell style={{color:'white'}} align="right">Strength</TableCell>
            <TableCell style={{color:'white'}} align="right">Instructions</TableCell>
            <TableCell style={{color:'white'}} align="right"><WbTwilightIcon/></TableCell>
            <TableCell style={{color:'white'}} align="right"><LightModeIcon/></TableCell>
            <TableCell style={{color:'white'}} align="right"><BedtimeIcon/></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
            <TableCell> Tablet Dolo 650</TableCell>
            <TableCell align="right">100mg</TableCell>
            <TableCell align="right">7 days</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">1</TableCell>
        </TableRow>
        <TableRow style={{background:'aliceblue'}}>
            <TableCell> Tablet Saridon</TableCell>
            <TableCell align="right">100mg</TableCell>
            <TableCell align="right">5 days</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">1</TableCell>
        </TableRow>
        <TableRow>
            <TableCell> Syrup Gelsil</TableCell>
            <TableCell align="right">100 ml</TableCell>
            <TableCell align="right">10 days</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">1</TableCell>
        </TableRow>
        <TableRow style={{background:'aliceblue'}}>
            <TableCell> Tablet Zintac</TableCell>
            <TableCell align="right">50 mg</TableCell>
            <TableCell align="right">10 days</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
                
        
            </Grid>
            
        </Grid>
        </Paper>
    )
}
export default PatientPrescription;