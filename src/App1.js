// routes
import {useEffect, useLayoutEffect, useState} from 'react';
import {useLocation} from 'react-router';
import Router from './routes';
import './App.css'
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './FunctionalComponents/ProgressBar';
// import {Service} from './Services/Service';
import CustomAlert from './FunctionalComponents/Alerts/CustomAlert';
import {ReducerTypes} from './Assets/Constants';
import Header from './Pages/Header/Header';
import Store from './Store';
import {LocalGasStationRounded} from '@mui/icons-material';
import Footer from './Pages/Footer/Footer';
import Scrollup from './components/ScrollUp';

// ----------------------------------------------------------------------

export default function App() {
    const {pathname} = useLocation();
    const [currentPage, setCurrentPage] = useState(null);
    const [drawerOpened, isDrawerOpened] = useState(false);
   useLayoutEffect(()=>{
    window.scrollTo(0,0)
   },[pathname])
    useEffect(() => {
        console.log(currentPage,pathname)
        if (!currentPage) {
            Setdefaultvalues();
            setCurrentPage(pathname)
        } else {
            if(currentPage.indexOf("/settings") === -1 && pathname.indexOf("/dashboard") === -1){
                setCurrentPage(pathname)
            }
            if (currentPage.indexOf("/settings") > -1 && pathname.indexOf("/settings") === -1) {
                setCurrentPage(pathname)
            }
            if (currentPage.indexOf("/dashboard") > -1 && pathname.indexOf("/dashboard") === -1) {
                setCurrentPage(pathname)
            }
        }

    }, [pathname]);


    useEffect(() => {
        if (currentPage && currentPage.indexOf("/settings") > -1) {
            Store.dispatch({type: ReducerTypes.SETTINGS_STATUS, payload: true})
        } else {
            Store.dispatch({type: ReducerTypes.SETTINGS_STATUS, payload: false})
        }

    }, [currentPage])



    const Setdefaultvalues = () => {
        let login = localStorage.getItem("login");
        console.log(login);
        if (login) {
            Store.dispatch({type: ReducerTypes.LOGIN, payload: JSON.parse(login)})
        }
        else{
            Store.dispatch({type:ReducerTypes.LOGOUT});
        }
    }
    const exclusionArray = ['/website/dashboard/appointments','/website/dashboard/patientdetails','/website/dashboard/appointmentbooking','/website/dashboard/prescription','/website/dashboard/medicalrecords','/website/dashboard/patientinvoices',
    '/website/dashboard/changepassword','/website/dashboard/profile','/website/dashboard/patientprofilesettings','/website/dashboard/patientprescription']
    return (
        <>
         
         <ThemeConfig>
            <CustomAlert/>
            <ProgressBar/>
            <GlobalStyles/>
            {exclusionArray.indexOf(window.location.pathname) < 0 && <Header />}
           <Router/>
          {exclusionArray.indexOf(window.location.pathname) < 0 && <Footer />}
          <Scrollup />
        </ThemeConfig>
        </>
        
    );
}
