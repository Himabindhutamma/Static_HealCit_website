import React from "react";
import { Box,Table, TableHead,TableRow,Paper,TableContainer,TableCell,TableBody,Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
const Invoices=()=>{
const navigate=useNavigate();
  return(
    <>
   <div className="table-view">
   <Box sx={{display:'flex',justifyContent:'center'}}>
        <img style={{height:'40px'}} src='https://www.healcit.com/assets/img/logo.webp'/>
        <span className="white-text invoice mx-0">
         INVOICE
     </span>
      </Box>
     </div>
   <Grid container id='printArea' spacing={3} sx={{mt:1}}>
    <Grid item xs={12} md={4} lg={4}>
      <Box sx={{pl:3}}>
        <h1 className="invoice-heading"> </h1>
        <div style={{paddingLeft:'30px'}}>
          <h2>Health Care</h2>
          <h2>Provider </h2>
        </div>
      </Box>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
     
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <Box sx={{pr:3}}>
        <h2 className="invoice-address">6636 Hyde Rd,Khairatabad,Anand Nagar</h2>
        <div style={{paddingRight:'30px',textAlign:'end'}}>
          <h3>info@healcit.com</h3>
         <h3>healcit.com</h3>
         <h3>7799180260</h3>
        </div>

      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
    <Stack direction='column' spacing={2}>
      <div className="patientInfo">
<h3 className="InvoiceInfo">Bill to :</h3> <h3 className="patient-bill">Sandeep</h3>
</div>
<div className="patientInfo">
<h3 className="InvoiceInfo">Patient Address :</h3> <h3 className="patient-bill">Nellore</h3>
</div>
<div className="patientInfo">
<h3 className="InvoiceInfo">Phone :</h3> <h3 className="patient-bill">7799180260</h3>
</div>
<div className="patientInfo">
<h3 className="InvoiceInfo">Email :</h3> <h3 className="patient-bill">sandeep.anguluru@gmail.com</h3>
</div>
    </Stack>
    </Grid>
    <Grid item xs={12} md={6} lg={6} sx={{pr:5}}>
    <Stack direction='column' spacing={2}>
      <div className="patientInfo">
<h3 style={{paddingLeft:'25px'}}>Invoice # :</h3> <h3 className="patient-bill">00517799</h3>
</div>
<div className="patientInfo">
<h3 style={{paddingLeft:'25px'}}>ADM Date :</h3> <h3 className="patient-bill">11/1/2022</h3>
</div>
<div className="patientInfo">
<h3 style={{paddingLeft:'25px'}}>Payment Due Date :</h3> <h3 className="patient-bill">11/2/2022</h3>
</div>
<div className="patientInfo">
<h3 style={{paddingLeft:'25px'}}>Physcian :</h3> <h3 className="patient-bill">Dr.Edwerd</h3>
</div>
    </Stack>
    </Grid>
    <Grid item xs={12} md={12} lg={12}>
    <TableContainer style={{padding:'0px 30px'}}>
    <Table>
      <TableHead style={{textAlign:'center',background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
        <TableRow >
            <TableCell style={{color:'white',textAlign:'center'}}> Services Date </TableCell>
            <TableCell style={{color:'white',textAlign:'center'}}>Services Performed</TableCell>
            <TableCell style={{color:'white',textAlign:'center'}}>Medication</TableCell>
            <TableCell style={{color:'white',textAlign:'center'}}>Fee</TableCell>
            <TableCell style={{color:'white',textAlign:'center'}}>Adj</TableCell>
            <TableCell style={{color:'white',textAlign:'center'}}>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
            <TableCell style={{textAlign:'center'}}> 11/20/2022 </TableCell>
            <TableCell style={{textAlign:'center'}}>Full body check up</TableCell>
            <TableCell style={{textAlign:'center'}}>none</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ -</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
        </TableRow>
        <TableRow style={{background:'aliceblue'}}>
            <TableCell style={{textAlign:'center'}}> 11/20/2022 </TableCell>
            <TableCell style={{textAlign:'center'}}>Full body check up</TableCell>
            <TableCell style={{textAlign:'center'}}>none</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ -</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{textAlign:'center'}}> 11/20/2022 </TableCell>
            <TableCell style={{textAlign:'center'}}>Full body check up</TableCell>
            <TableCell style={{textAlign:'center'}}>none</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ -</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
        </TableRow>
        <TableRow style={{background:'aliceblue'}}>
            <TableCell style={{textAlign:'center'}}> 11/20/2022 </TableCell>
            <TableCell style={{textAlign:'center'}}>Full body check up</TableCell>
            <TableCell style={{textAlign:'center'}}>none</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ -</TableCell>
            <TableCell style={{textAlign:'center'}}>₹ 345.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Box sx={{mt:3}}>
    <div className="patientInfo">
    <h3>Comments, Notes and special instructions:</h3>
    <div style={{display:'flex'}}>
    <h3 style={{paddingRight:'110px'}}>SUBTOTAL</h3>
      <h3  style={{borderBottom:'1px solid '}}>₹ 1400.00</h3>
    </div>
    </div>
    </Box>

    <div className="patient-billing">
    <div style={{display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
    <h3 style={{paddingRight:'145px'}}>TAX RATE</h3>
      <h3 style={{paddingRight:'10px'}}>10 %</h3>
    </div>
    <div style={{display:'flex',marginTop:'10px',border:'1px solid',padding:'5px',background:'aliceblue'}}>
    <h3 style={{paddingRight:'96px'}}>GRAND TOTAL</h3>
      <h3 style={{paddingLeft:'7px'}}>₹ 1320</h3>
    </div>
    </div>
   
  
  </TableContainer>
    </Grid>
   </Grid>
   <Stack direction='row' spacing={2} justifyContent='right' sx={{pt:2,pr:3}}>
   <Button onClick={()=>{window.print()}}  variant="contained">Print</Button>
   <Button onClick={()=>{navigate(0)}}  variant="contained">Back</Button>
   </Stack> 
    </>
  )
}
export default Invoices;