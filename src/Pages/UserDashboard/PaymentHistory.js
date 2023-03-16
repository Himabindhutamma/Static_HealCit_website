import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from '../../Api/Axios';
import MBTable from '../../FunctionalComponents/MBTable/MBTable';
import Invoice from './Invoice';
import { Container,Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TABLE_HEAD = [
    {id: 'eventBookingId_eventBookings', label: 'Booking Id', alignRight: false},
    {id: 'eventType_eventType', label: 'Event Type', alignRight: false},
    {id: 'name_users', label: 'Name', alignRight: false},
    {id:'totalPaidFee_eventBookings', label:'Fee', alignRight:false},
    {id:'availableTickets_eventSessions', label:'Available Tickets', alignRight:false},
    {id:'totalTickets_eventSessions', label:'Total Tickets', alignRight:false},

];
const actions = [{icon: "", actionName: "View"}];
const PaymentHistory = ({userId}) =>{
    const [bookingData, setBookingData] = useState([])
    const [pageState, setpageState] = useState('');
    const [invoiceData, setInvoiceData] = useState('');

    useEffect(()=>{
        getBookingData()
    },[])
    const onAction = (e) =>{
        console.log(e)
        if(e.action === 'View'){
        setpageState("View")
        setInvoiceData(e.item);
        }
        
       }
  const getBookingData = () =>{
      let data ={
        "userId_eventBookings":userId
      }
      Axios.postData('SelectConditionWithParent_eventBookings',data).then(res =>{
          setBookingData(res.Message);
      }).catch(err =>{
  
      })
    
  }
    return(
        <Container>
         { pageState !== 'View' ?
            <Box className="login-block">
                <div className="table-view">
                  <Link to="/" className="white-text mx-3">PaymentHistory</Link>
                </div>
                <MBTable data={bookingData} head={TABLE_HEAD}  actionList={actions} onAction={onAction}/> 
            </Box>
            :
            <>
             <ArrowBackIcon className='arr-icon' onClick={() => { console.log("view"); setpageState('')}}/>
             <Invoice invoiceData={invoiceData} /> 
            </>
            
         }
                        
        </Container>
    )
}

const mapStateToProps = (state) =>{
    return{
      userId:state.User.userId_users      
    }
}
export default connect (mapStateToProps) (PaymentHistory)