import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import { connect } from 'react-redux';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './Pages/LoginPage';
import Registeration from './Pages/Registeration';
import Appointment from './Pages/Patient/Appointment';
import Prescription from './Pages/Patient/Prescription';
import PatientProfileSettings from './Pages/Patient/PatientProfileSettings';
import PatientInvoices from './Pages/Patient/PatientInvoices';
import PatientBilling from './Pages/Patient/PatientBilling';
import MedicalRecords from './Pages/Patient/MedicalRecords';
import ChangePassword from './Pages/Patient/ChangePassword';
import ForgotPassword from './Pages/ForgotPassword';
import Invoices from './Pages/Patient/Invoices';
import Profile from './Pages/Patient/Profile';
import Home from './Pages/Home/Index';
import Aboutus from './Pages/Departments/Aboutus';
import Contactus from './Pages/Departments/Contactus'
import Services from './Pages/Departments/Services';
import Booking from './Pages/Patient/AppointmentBooking';
import BlogDetails from './Pages/Home/BlogDetails';
import DoctorsDetails from './Pages/Doctors/DoctorsDetails';
import Clinic from './Pages/Clinic/Clinic';
import ClinicDetails from './Pages/Clinic/ClinicDetails';
import PatientDetails from './Pages/Patient/PatientDetails';
import SearchDoctor from './Pages/Doctors/SearchDoctor';
import PatientPrescription from './Pages/Patient/PatientPrescription';
import Hospital from './Pages/Hospital/Hospital';
import HospitalDetails from './Pages/Hospital/HospitalDetails';




// import Section from './pages/Sectionadd/Section';




const publicRoutes = [
  {
    path: '/',
    element: <LogoOnlyLayout />,
    children: [
      { path: 'login', element: <Login /> },
       { path:'register', element:<Registeration/>},
      
      {path:'forgotpassword', element:<ForgotPassword/>},
      {path:'forgotpassword', element:<ForgotPassword/>},
      { path: '/', element: <Navigate to='/login'/> },
      { path: '*', element: <Navigate to='/login'/> },
    ]
  },
  {path:'home', element:<Home/>},
  {path:'contactus',element:<Contactus />},
  {path:'aboutus',element:<Aboutus />},
  {path:'services',element:<Services/>},
{path:'blogdetails',element:<BlogDetails/>},
{path:'doctorprofile',element:<DoctorsDetails/>},
{path:'clinic',element:<Clinic/>},
{path:'clinicdetails', element:<ClinicDetails/>},
{path:'hospital',element:<Hospital/>},
{path:'hospitaldetails',element:<HospitalDetails/>},
{path:'searchdoctor',element:<SearchDoctor/>},

  { path: '*', element: <Navigate to="/home" replace /> },
 ];


const privateRoutes = [
  {
      path: "/",
      element: <Home />
    },
  {path:'home', element:<Home/>},
  {path:'contactus',element:<Contactus />},
  {path:'aboutus',element:<Aboutus />},
  {path:'services',element:<Services/>},
  {path:'blogdetails',element:<BlogDetails/>},
  {path:'doctorprofile',element:<DoctorsDetails/>},
  {path:'clinic',element:<Clinic/>},
  {path:'clinicdetails', element:<ClinicDetails/>},
  {path:'searchdoctor',element:<SearchDoctor/>},
  {path:'hospital',element:<Hospital/>},
{path:'hospitaldetails',element:<HospitalDetails/>},

  {path:'patientprescription',element:<PatientPrescription/>},

   {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Profile/> },
        {path:'profile',element:<Profile/>},
        { path:'appointments', element:<Appointment/>},
      {path:'prescription', element:<Prescription/>},
      {path:'patientprofilesettings', element:<PatientProfileSettings/>},
      {path:'patientinvoices', element:<PatientInvoices/>},
      {path:'patientbilling', element:<PatientBilling/>},
      {path:'medicalrecords', element:<MedicalRecords/>},
      {path:'changepassword',element:<ChangePassword/>},
      { path:'appointmentbooking', element:<Booking/>},
       {path:'patientdetails', element:<PatientDetails/>},
       {path:'patientprescription',element:<PatientPrescription/>}
    
      

     ]
    },
{
    path: '/settings',
    element: <DashboardLayout />, 
    children: [
      { path: '*', element: <Navigate to="/settings" /> },
      { path: '404', element: <Navigate to="/settings" /> }
    ]
  },
// { path: '*', element: <Navigate to="/dashboard/profile" /> },
];

const Router = ({ isLogin,typeId }) => {
  console.log(isLogin,typeId);
  return useRoutes(isLogin ? privateRoutes : publicRoutes )
};

const mapStateToProps = (state) => ({
  isLogin: state.User.isLogin,
  role: state.User.roleId_users,
  typeId:state.User.userTypeId_users
});

export default connect(mapStateToProps)(Router);