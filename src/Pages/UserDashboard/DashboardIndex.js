import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Signinform from '../Registration/Signinform';
import PaymentHistory from './PaymentHistory';
import UserProfile from './UserProfile';
import AddParticipants from '../Registration/AddParticipants';

const DashboardIndex = () =>{
    return(
        <>
        <div style={{display:'flex'}}>
          <Dashboard/>
          <Routes>
          <Route path='signinform' element={<Signinform />} />
                <Route path='paymenthistory' element={<PaymentHistory />} />
                <Route path='userprofile' element={<UserProfile/>}/>
                <Route path='addparticipant' element={<AddParticipants />} />
          </Routes>
        </div>
        
        </>
    )
}
export default DashboardIndex