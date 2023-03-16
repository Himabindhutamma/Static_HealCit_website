import React from "react";
import Banner from "./Banner";
import Whoweare from "./Whoweare";
import Whychooseus from "./Whychooseus";
import Appointment from "./Appointment";
import Ourservices from "./Ourservices";
import Certifieddoctor from "./Certifieddoctor";
import Questionanswers from "./Question&answers";
import Testimonols from "./Testimonols";
import Emergency from "./Emergency";
import Ourspecialist from "./Ourspecialist";
import Latestnews from "./Latestnews";
import Banner1 from "./Banner1";
import StaticEmg from './StaticEmg';
import Ourdoctors from './Ourdoctors';
import Blogs from './Blogs'
const Home=()=>{
    return(
<>
<div className="page">
    <Banner1/>
    <Whoweare/>
    <Whychooseus/>
    <Testimonols/>
    <Ourspecialist/>
    {/* <Ourdoctors/> */}
    {/* <Emergency/> */}
   
    <Latestnews/>
    <Blogs/>
    <StaticEmg/>
</div>

</>
    );
}
export default Home;