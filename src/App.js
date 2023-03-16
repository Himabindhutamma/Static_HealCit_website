import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Home from './Pages/Home/Index'
import './App.css'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Services from './Pages/Departments/Services'
import Service from './Pages/Services/Index'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Pages/Departments/Appointment'
import Contactus from './Pages/Departments/Contactus'
import Popup from './Pages/Departments/Popup'
import Aboutus from './Pages/Departments/Aboutus'
import Signinform from './Pages/Registration/Signinform'
import Registrationform from './Pages/Registration/Registrationform'
import AddParticipants from './Pages/Registration/AddParticipants'
import CustomAlert from './FunctionalComponents/Alerts/CustomAlert';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import { ReducerTypes } from './Assets/Constants';
import StaticPage from './Pages/StaticPage';
import Dashboard from './Pages/UserDashboard/Dashboard';
import UserProfile from './Pages/UserDashboard/UserProfile';
import PaymentHistory from './Pages/UserDashboard/PaymentHistory';
import { useLocation,Navigate } from 'react-router-dom';
import Scrollup from './components/ScrollUp';

import Store from './Store';
import DashboardIndex from './Pages/UserDashboard/DashboardIndex'



const App = ({userId,isLogin}) => {
  console.log(userId,isLogin)
  let location = useLocation()
  useEffect(()=>{
    Setdefaultvalues();
  },[])
  const Setdefaultvalues = () => {
    let login = localStorage.getItem("login");
    if (login) {
        Store.dispatch({type: ReducerTypes.LOGIN, payload: JSON.parse(login)})
    }
    else{
        Store.dispatch({type:ReducerTypes.LOGOUT});
    }
}
  return (
    <>
     <CustomAlert/>
      <>
          <Header />
          {isLogin ? (
            <Routes>
              <Route path='/dashboard' element={<DashboardIndex/>}>
                <Route path='/dashboard/signinform' element={<Signinform />} />
                <Route path='/dashboard/paymenthistory' element={<PaymentHistory />} />
                <Route path='/dashboard/userprofile' element={<UserProfile/>}/>
                <Route path='/dashboard/addparticipant' element={<AddParticipants />} />
            </Route>
            <Route path='/home' element={<Home />} />
           <Route path='/services' element={<Services/>} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/registrationform'element={<Registrationform />}/>
           
        
            
            </Routes>
            ) : (
        <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/contactus' element={<Contactus />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/registrationform' element={<Registrationform />}/>
                    <Route path='/' element={<Navigate to="/home"/>}/>
                   <Route path='*' element={<Navigate to="/login"/>}/>
                    <Route path='/header' element={<Header/>}/>
                   
                  </Routes>
          )}
          
          <Footer />
          <Scrollup />
        </>
       {/* )} */}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.User.isLogin,
    userId:state.User.userId_users
  }
};
export default connect (mapStateToProps) (App)
