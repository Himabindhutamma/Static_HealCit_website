import React,{ useRef, useState,useEffect } from 'react'
import { Container, Paper, Typography,Box,Button } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import { Link } from 'react-router-dom';
import Axios from '../../Api/Axios';

const Invoice = ({invoiceData}) => {
  const [bookingData, setBookingData] = useState([])
   console.log(invoiceData,"booking Data", bookingData)
  const componentRef = useRef()
    const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  useEffect(()=>{
    getBookingData()
  },[])
   const getBookingData = () =>{
      let data ={
        "eventBookingId_eventParticipants":invoiceData.eventBookingId_eventBookings
      }
      Axios.postData('SelectConditionWithParent_eventParticipants',data).then(res =>{
          setBookingData(res.Message);
      }).catch(err =>{
  
      })
    
  }
  return (
    <>
      <Container maxWidth='lg' ref={componentRef}>
        <Paper elevation={0}>
         <Box className="login-block">
          <Typography variant={'h6'}>Order</Typography>
          <div id="order-table">
          <table style={{width:"100%"}}>
            <tr>
              <th colspan='3'>Order details</th>
            </tr>
            <tr>
              <td className='in-td'>
                Sri Shivaratnapuri Temple of Health Sri Shivaratnapuri Temple of
                Health (A unit of Sri Rajarajeshwari Charitable Hospital Trust)
                15/506, H.B.C.S. Ideal Homes Layout, Rajarajeshwarinagar,
                Bengaluru – 560098
              </td>
              <td>
                Date Added 04/09/2022 Order ID: 216 Payment Method Pay by
                Razorpay (https://www.razorpay.com)
              </td>
            </tr>
            <tr>
              <td className='in-td'>
                <div>Telephone 8884547294</div>
                <div>E-Mail commune@pyramidtempleofhealth.org</div>
                <div>Web Site:<Link to="https://pyramidtempleofhealth.org">https://pyramidtempleofhealth.org</Link></div>  
                    (https://pyramidtempleofhealth.org)
              </td>
            </tr>
          </table>
          </div>
          
          <div className="pay-in-address">
              <Box component="div" className="pay-address">Payment Address</Box>
              <div className='address'>
                <div>{invoiceData.name_users}</div>
                <div>{invoiceData.email_users}</div>
                <div>{invoiceData.mobileNumber_users}</div>
               {/* <div>Vrddhi, No 1038, 1st Floor, 23rd Main, 2nd Block, Jananbharathi Layout</div> 
                <div>Bengaluru 560056</div>
                <div>Karnataka</div> */}
                <div>India</div>
              </div>
          </div>
          <div className="pay-in-address">
            <table id="price-table" style={{width:"100%"}}>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
            
            {bookingData && bookingData.map((i,j)=>{
              return(
                  <tr>
              <td>
              <div>{i.userTypec_userType}</div>
        
          </td>
              <td>{bookingData.filter(k => k.userTypec_userType === i.userTypec_userType).length}</td>
              <td>{i.fees_eventParticipants}</td>
              <td>{parseInt(bookingData.filter(k => k.userTypec_userType === i.userTypec_userType).length) * parseInt(i.fees_eventParticipants)}</td>
            </tr>
              )
            })}
            <tr>

              <td colspan="3" class="table-td">Subtotal</td>
              <td class="table-td">{invoiceData.totalPaidFee_eventBookings}</td>
            </tr>
            <tr>

              <td colspan="3" class="table-td">Total</td>
              <td class="table-td">{invoiceData.totalPaidFee_eventBookings}</td>
            </tr>
            {/* <tr>
              <td>
              <div>Wonder Health Experience</div>
          <div>- Person Type: Senior Citizens : above 60 Years</div>
          <div>- Date: 2022-09-04 </div>
          <div>- Booking Time: 05:30 PM</div>
              </td>
              <td>2</td>
              <td>150</td>
              <td>150</td>
            </tr> */}
        </table>
          </div>
           <Button
              onClick={handlePrint}
              type='submit'
              variant='contained'
              fullWidth={false}
            >
              Download
            </Button>
            </Box>  
        </Paper>
      </Container>
    </>
  )
}
export default Invoice
