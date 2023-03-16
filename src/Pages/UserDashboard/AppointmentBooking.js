import React,{ useState, useEffect} from "react";
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { height } from "@mui/system";
import { Grid } from "@mui/material";
import Axios from '../../Api/Axios';


const AppointmentBooking = ({userId}) => {
  let navigate = useNavigate();
  const [timeData, setTimeData] = useState([])
  const [date, setDate]= useState(null);
  const [eventSession, setEventSession] = useState('')
  const [ticketCount, setTicketCount]= useState('')
  const [ticketFee, setTicketFee] = useState([])
  const [eventtypeId, setEventTypeId] = useState('')
  const [eventTypeData, seetEventTypeData] = useState([])
  const [active, setActive] = useState('');
  const [eventFeeValue,setEventfeeValue] = useState('')
  const [availableTickets, setAvaialableTickets]=useState('')
  console.log(date);
  console.log(eventSession,userId)

  useEffect(()=>{
    getEventType();
    eventFee();
  },[])

  const eventFee = () =>{
    let data ={
      "eventSessionId_eventFee": eventSession
    }
    Axios.postData('SelectConditionWithParent_eventFee',data).then(res=>{
      console.log(res.Message)
      setTicketFee(res.Message)
    }).catch(err =>{

    })
  }
  const getTimeData = () =>{
    if(date){
      let data ={
        "date_eventSessions":date
      }
      Axios.postData('SelectCondition_eventSessions',data).then(res =>{
          setTimeData(res.Message);
      }).catch(err =>{
  
      })
    }
    
  }
  const getEventType = () =>{
    Axios.getData('SelectAll_eventType').then(res=>{
      console.log(res);
      seetEventTypeData(res)
    })
  }
  const bookingEvent = (e) =>{
    e.preventDefault()
    
    let bookingdata ={
    "userId_eventBookings": userId,
    "eventTypeId_eventBookings":eventtypeId,
    "eventSessionId_eventBookings": eventSession,
    "ticketCount_eventBookings":ticketCount,
    "availableTickets":availableTickets
    // "ticketFee_eventBookings": eventFeeValue || 0,
    // "totalPaidFee_eventBookings":eventFeeValue || 0,
    // "status_eventBookings": "BOOKED",
    // "transactionId_eventBookings": 1
    }
    navigate('/addparticipant',{state:{bookingdata}});
    
  }
  return (
    <form onSubmit={bookingEvent}>
     <div class="container container_no-sidebar">
      <div class="flex-container">
       <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
       
        <div class="flex-child magenta">
          <div>
            <h4><b>
              Rules & regulations for the Wonder Health Experience sessions </b>
            </h4>
            <ol type="1">
              <li>
                1. Participants are requested to be present at the main entrance of
                the venue at least 15 minutes before the start of the sessions.
                Late arrivers will not be permitted for the sessions and will
                not be eligible for any coupon-refund or to choose another
                session.
              </li>
              <li>
               2. Sri Shivaratnapuri Temple of Health is a very sacred and serene
                place. Always maintain silence. Silence improves cure and gives
                immense benefits.
              </li>
              <li>
               3. Eatables or any other articles or personal belongings are not
                allowed into the premises.
              </li>
              <li>4.
                <b>
                  THE MANAGEMENT IS NOT RESPONSIBLE FOR LOSS OF ANY PERSONAL
                  BELONGINGS.
                </b>
              </li>
              <li>
               5. Relevant booking confirmation receipt issued by the organisers
                and photo ID of Aadhaar card to be carried for verification
                which is COMPULSORY at the entry.
              </li>
              <li>
               6. Smoking and consumption of alcohol or other beverages are
                strictly prohibited in premises.
              </li>
              <li>
              7. General conduct relevant to public places to be adhered to
                strictly.
              </li>
              <li>8. COVID-19 health and safety protocols to be followed.</li>
              <li>
               9. Participants are advised to wear the following attire/dress.
              </li>
              <ul>
                <li>* Female attire: Sarees or salwar kameez with dupatta.</li>
                <li>
                   * Male attire: Kurtas, pyjama / dhoti/ comfortable trousers and
                  shirts.
                </li>
                <li>
                  * Shorts, sleeveless dresses and tights are not permitted.
                </li>
              </ul>
            </ol>
          </div>
        </div>
        </Grid>
        <Grid item xs={12} md={6}>
        <div class="flex-child green">
          <div>
            <h3> <b>Wonder Health Experience </b></h3><hr/>
            <h2><b>Fee Options</b></h2>
            <p><b>Please note: Bookings for Each category need to be made separately</b><br/>
            <b>**Age proof mandatory on entry</b></p>
           
      <select value={eventtypeId} onChange={(e) => setEventTypeId(e.target.value)} style={{width:"100%", height:"47px", borderRadius:"7px"}}>
        <option value="">Select Event</option>
        {eventTypeData && eventTypeData.map((i,j)=>{
          return <option value={i.eventTypeId_eventType}>{i.eventType_eventType}</option>
        })}
      </select>
      <div>
        <label> <b> Date</b></label> <br/>
        <input type="date" value={date} style={{width:"100%", height:"47px", borderRadius:"7px"}} onChange={(e) =>{
          setDate(e.target.value)
          getTimeData();
          }}/>
      </div>
      <div class="timingslots">
      {timeData && timeData.map((td,t)=>{
       return <div>{ active && active == td.eventSessionId_eventSessions ? `Available Tickets:${td.availableTickets_eventSessions}` : ''}</div>
      })}
      
     <Stack direction="row" spacing={2}>
      {timeData && timeData.map((td,t)=>{
        return (
          <div>
          <Button type="button" variant="outlined" 
           key={td.eventSessionId_eventSessions} 
          id={td.eventSessionId_eventSessions} 
          className={active == td.eventSessionId_eventSessions ? 'active' : ''} 
          name={td.eventSessionId_eventSessions} value={td.eventSessionId_eventSessions || ''} 
          onClick={(e) => {
            setEventSession(e.target.value)
            setAvaialableTickets(td.availableTickets_eventSessions)
            setActive(e.target.id);
          }
          }>{td.time_eventSessions}</Button>
          </div>
        )
      })}
     </Stack>
      {/* {timeData && timeData.map((td,t)=>{
       return(
         <>
         <div>{ active && active == td.eventSessionId_eventSessions ? 
            <>
            {ticketFee && ticketFee.map((tf,j)=>{
              return (
                <div>
                <input type="radio"  checked={eventFeeValue == tf.fee_eventFee} id={tf.fee_eventFee} name={tf.fee_eventFee} value={tf.fee_eventFee} onChange={(e) => setEventfeeValue(e.target.value)}/>
                <label for={tf.fee_eventFee}>{tf.userTypec_userType} - (₹{tf.fee_eventFee})</label>
     
                </div>
              )
            })}
            </>
        : ''}</div>
         </>
       )
      })} */}
    </div>
    
    <div>
    <label> <b> No.of persons</b></label> <br/>
    <select value={ticketCount} onChange={(e) => setTicketCount(e.target.value)} style={{width:"100%", height:"47px", borderRadius:"7px"}}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
    </select>
    </div>
    <Button type="submit" variant="contained"style={{width:"100%", height:"47px", borderRadius:"7px",marginTop:"20px"}}>Next</Button>
          </div>
        </div>
        </Grid>
        </Grid>
      </div>
    </div>
    </form>
   
  );
};
const mapStateToProps = (state) =>{
  return {
    userId:state.User.userId_users
  }
}
export default connect (mapStateToProps) (AppointmentBooking);
