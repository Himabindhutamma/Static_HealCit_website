// import React,{ useEffect, useState, useRef} from 'react';
// import  staticimage  from '../staticimg.jpeg';
// import videoone from './websiteintro.mp4';
// import '../App.css';
// import { Link } from 'react-router-dom';

// const StaticPage = () => {
//     const [showElement, setShowElement] = useState(true);
//     const videoEl = useRef(null);
//      const attemptPlay = () => {
//         videoEl &&
//         videoEl.current &&
//         videoEl.current.play().catch(error => {
//             console.error("Error attempting to play", error);
//         });
//     };
//     useEffect(() => {
//         attemptPlay();
//        }, []);
//      useEffect(()=>{
//          setTimeout(() => {
//              setShowElement(false)
//          }, 180000);
//      },[])
//     const myStyle={
//         backgroundImage: `url(${staticimage})`,
//         height:'100vh',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };
//     const toggleMute = () =>{
//         var video = document.getElementById('video');
//         video.muted = !video.muted;
//       }
//     return (
//         <>
//         {showElement ?
//         <>
//         <div className='videoContainer'> 
//             <video className="video_mp4" id="video"
//             // playsInline
//             muted
//             autoPlay
//             onClick={toggleMute}
//             // controls
//             alt="All the devices"
//             src={videoone}
//             ref={videoEl}
//             />
//          </div>
//         {/* <a className="mutebutton" onClick={toggleMute}>Toggle Mute</a> */}
//         </>
//           :
        
//         <div id="staticimg" style={myStyle}>
//           <div className="container1">
//                 <div className="row" >
//                 <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
//                     <h3>Sri Rajarajeshwari Temple</h3>
//                 </div>
//                 </div>
//                 <div className="row mt-4" >
//                     <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">


//                         <div className="row" style={{marginTop: "100px"}}>
//                             <div className="col-md-4 col-lg-4 col-sm-4 text-center">

//                             </div>

//                             <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">

//                             </div>

//                             <div className="col-md-4 col-lg-4 col-sm-4 text-right">
//                                 <ul className="list-unstyled liststyle" style={{zIndex:"9999",padding: "63px 0px 0px 47px"}}>
//                                     <li><Link to={{ pathname: "http://rajarajeshwari.in/Account/Login?ReturnUrl=%2fsevabooking%2findex" }} target="_blank">e-Sevas</Link></li>
//                                     <li><Link to={{ pathname: "http://rajarajeshwari.in/Account/Login?ReturnUrl=%2fsevabooking%2findex" }} target="_blank">e-Hundi</Link></li>
//                                     <li><Link to={{ pathname: "http://rajarajeshwari.in/Account/Login?ReturnUrl=%2fsevabooking%2findex" }} target="_blank">e-Donations</Link></li>
//                                     <li><Link to="/home" target="_blank">View Home Screen</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//          </div>
        
//         }
       
        
        
//         </>
       


//     )
// }
// export default StaticPage