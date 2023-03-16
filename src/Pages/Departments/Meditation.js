import React, { useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import StaticEmg from '../Home/StaticEmg'
import Axios from '../../Api/Axios';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Departments = () => {
  const[staticcarddata, setStaticcarddata]=useState({});
  const[staticcarddata1, setStaticcarddata1]=useState({});
  const[staticcarddata2, setStaticcarddata2]=useState({});
  const [img, setImg] = useState();
        useEffect(() => {
            getstaticData()
          }, [])
          useEffect(() => {
    
            fetchImage()
          }, [staticcarddata2])
          const getstaticData = () => {
            Axios.getData(`SelectAll_staticPages/`)
              .then(res => {
                console.log(res)
                let r = res
                var newdata = r.find(i => i['name_staticPages'] === 'mcont')
                let newarray = newdata.content_staticPages
                const arrayObj = JSON.parse(newarray);
                setStaticcarddata(arrayObj);
                console.log(arrayObj);

                let r1 = res
                var newdata1 = r1.find(i => i['name_staticPages'] === 'mservice')
                let newarray1 = newdata1.content_staticPages
                const arrayObj1 = JSON.parse(newarray1);
                setStaticcarddata1(arrayObj1);
                console.log(arrayObj1);
                let r2 = res
                var newdata2 = r2.find(i => i['name_staticPages'] === 'mNew-Banner2')
                let newarray2 = newdata2.content_staticPages
                const arrayObj2 = JSON.parse(newarray2);
                setStaticcarddata2(arrayObj2);
                console.log(arrayObj2);
             
              })
              .catch(error => {})
          }
          const fetchImage = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}GetFile/${staticcarddata2.profilePath}`);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
          };
  return (
    <div class="page">
      <header class="header-bottom-4">
        {/* <img src="./Assets/images/banner/buddha.jpeg" /> */}
        <img src={img} alt="icons" />
        <div class="header-bottom-4__bg">
          <div class="icon">
            {/* <img src="./Assets/images/banner/banner-shape.png" /> */}
          </div>
        </div>
        <div class="container">
          <h1 class="section-title">
          MEDITATION 
          </h1>
          {/* <ol class="breadcrumb">
            <Link className="breadcrumb-item" to="/home">
              HOME
            </Link>
            <li class="breadcrumb-item">
            </li>
            <li class="breadcrumb-item active">All Departments</li>
          </ol> */}
        </div>
      </header>
      <section class="departments-3 main-blog">
        <div class="main-blog__bg">
          <div class="icon">
            <img src="./Assets/images/png-shapes/form-shape.png" />
          </div>
          <div class="icon">
            <img src="./Assets/images/png-shapes/specialists__left-bottom-shape.png" />
          </div>
        </div>
        <div class="container container_no-sidebar">
          <div class="article">
            <div class="departments-3__single">
              <h1 class="title">{staticcarddata.mainheading1}</h1>
              <div class="img">
                <img src="./Assets/images/jpg/departments-3-3.jpg" />
              </div>
              <p class="text">
              {staticcarddata.mainpara}
              </p>
              <ul class="lists">
                <h1 class="list-title">{staticcarddata.subheading}</h1>
                <li class="list-item">
                  <i class="fa fa-check"></i>{staticcarddata.parap}
                </li>
                <li class="list-item">
                  <i class="fa fa-check"></i>{staticcarddata.parap1}
                </li>
                <li class="list-item">
                  <i class="fa fa-check"></i>{staticcarddata.parap2}
                </li>
                <li class="list-item">
                  <i class="fa fa-check"></i>{staticcarddata.parap3}
                </li>
              </ul>
              <p class="text">
              {staticcarddata.subpara}
              </p>
              <div class="prices">
                <h1 class="title">{staticcarddata1.mainheading}</h1>
                <div class="prices-block">
                  <div class="item">
                    <h1 class="title">{staticcarddata1.heading1}</h1>
                    <ul class="lists">
                      <li class="list-item">
                        <span class="text"> {staticcarddata1.name}</span>
                        <span class="price">{staticcarddata1.price}</span>
                      </li>
                      <li class="list-item">
                        <span class="text">{staticcarddata1.para}</span>
                        <span class="price">{staticcarddata1.price1}</span>
                      </li>
                      <li class="list-item">
                        <span class="text">{staticcarddata1.para1}</span>
                        <span class="price">{staticcarddata1.price2}</span>
                      </li>
                      <li class="list-item">
                        <span class="text">{staticcarddata1.para2}</span>
                        <span class="price">{staticcarddata1.price3}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="item">
                    <h1 class="title"> {staticcarddata1.heading2}</h1>
                    <ul class="lists">
                      <li class="list-item">
                        <span class="text">{staticcarddata1.para3}</span>
                        <span class="price">{staticcarddata1.price4}</span>
                      </li>
                      <li class="list-item">
                        <span class="text">{staticcarddata1.para4}</span>
                        <span class="price">{staticcarddata1.price5}</span>
                      </li>
                      {/* <li class="list-item">
                        <span class="text">Laser Gum Contouring</span>
                        <span class="price">$350</span>
                      </li>
                      <li class="list-item">
                        <span class="text">Teeth Whitening</span>
                        <span class="price">$85</span>
                      </li> */}
                    </ul>
                  </div>
                  <Link class="btn btn_blue" to="/signinform" style={{marginLeft:"33.3%"}}>BOOK AN APPOINTMENT</Link>
                                
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* <section class="emergency-call" id="emergency">
        <div class="container">
          <div class="emergency-call__items">
            <div class="emergency-call__item">
              <div class="icon">
                <svg width="42" height="42" viewBox="0 0 42 42">
                  <path
                    id="icon4.svg"
                    class="cls-2"
                    d="M2140.64,3491.34a1.351,1.351,0,0,1-1.36-1.34v-5.68a9.658,9.658,0,0,0-2.06-5.41c-2.85-3.63-7.52-9.53-8.02-10.05-1.28-1.27-1.79-1.64-4.82-1.64h-18.81a2.587,2.587,0,0,0-2.85,2.6c0,1.66-.01,20.18-0.01,20.18a1.36,1.36,0,0,1-2.72,0s0.01-18.52.01-20.18a5.251,5.251,0,0,1,5.57-5.28h18.81c3.67,0,4.9.6,6.74,2.42,0.67,0.67,6.96,8.67,8.22,10.27a12.275,12.275,0,0,1,2.66,7.09V3490A1.351,1.351,0,0,1,2140.64,3491.34Zm-19.79-27.55a1.342,1.342,0,0,1-1.35-1.34,2.28,2.28,0,0,0-4.56,0,1.355,1.355,0,0,1-2.71,0,4.99,4.99,0,0,1,9.98,0A1.351,1.351,0,0,1,2120.85,3463.79Zm-7.64,7.27a1.359,1.359,0,0,1,1.36,1.35v2.79h2.82a1.345,1.345,0,1,1,0,2.69h-2.82v2.79a1.355,1.355,0,0,1-2.71,0v-2.79h-2.82a1.345,1.345,0,1,1,0-2.69h2.82v-2.79A1.351,1.351,0,0,1,2113.21,3471.06Zm11.09,12.31a1.342,1.342,0,0,1-1.35-1.34v-12.51a1.355,1.355,0,0,1,2.71,0v11.17h10.58a1.34,1.34,0,1,1,0,2.68H2124.3Zm-22.95,8.92h2.26a5.924,5.924,0,0,1,11.51,0h11.17a5.924,5.924,0,0,1,11.51,0h2.84a1.345,1.345,0,1,1,0,2.69h-2.84a5.924,5.924,0,0,1-11.51,0h-11.17a5.924,5.924,0,0,1-11.51,0h-2.26A1.345,1.345,0,1,1,2101.35,3492.29Zm30.7,4.52a3.175,3.175,0,1,0-3.21-3.18A3.2,3.2,0,0,0,2132.05,3496.81Zm-22.69,0a3.175,3.175,0,1,0-3.2-3.18A3.2,3.2,0,0,0,2109.36,3496.81Z"
                    transform="translate(-2100 -3457.5)"
                  />
                </svg>
              </div>
              <div class="content">
                <h1>24 Hour Emergency</h1>
                <p>
                  Open round the clock for conve-nience, quick and easy access
                </p>
              </div>
            </div>

            <div class="emergency-call__item">
              <div class="icon">
                <svg width="33" height="42" viewBox="0 0 33 42">
                  <path
                    id="icon5.svg"
                    class="cls-2"
                    d="M2537.62,3499.46c-0.39.76-1.46,2.04-4.15,2.04h-23.92c-2.69,0-3.76-1.28-4.15-2.04s-0.83-2.36.72-4.54l4.16-5.85a2.076,2.076,0,0,1,.24-0.34l5.48-7.7v-16.17a1.349,1.349,0,0,1,1.35-1.34h8.32a1.349,1.349,0,0,1,1.35,1.34v16.17l5.48,7.7a1.609,1.609,0,0,1,.24.34l4.16,5.85C2538.45,3497.1,2538.02,3498.7,2537.62,3499.46Zm-13.06-17.23a1.312,1.312,0,0,1-.25-0.77v-15.25h-5.6v15.25a1.312,1.312,0,0,1-.25.77l-4.34,6.11h14.78Zm10.13,14.24-3.88-5.45h-18.6l-3.88,5.45a1.94,1.94,0,0,0-.53,1.76,1.973,1.973,0,0,0,1.75.58h23.92a1.973,1.973,0,0,0,1.75-.58A1.91,1.91,0,0,0,2534.69,3496.47Zm-11.75-9.05a1.82,1.82,0,1,1,1.84-1.82A1.822,1.822,0,0,1,2522.94,3487.42Zm-1.52-5.35a1.455,1.455,0,1,1,1.47-1.45A1.46,1.46,0,0,1,2521.42,3482.07Zm4.29-19.87h-8.4a1.345,1.345,0,1,1,0-2.69h8.4A1.345,1.345,0,1,1,2525.71,3462.2Z"
                    transform="translate(-2505 -3459.5)"
                  />
                </svg>
              </div>
              <div class="content">
                <h1>Complate Lab Services</h1>
                <p>
                  Cost-efficient, comprehensive and clinical laboratory services
                </p>
              </div>
            </div>

            <div class="emergency-call__item">
              <div class="icon">
                <svg width="38" height="42" viewBox="0 0 38 42">
                  <path
                    id="icon6.svg"
                    class="cls-2"
                    d="M2937.66,3501.5h-35.31a1.345,1.345,0,0,1,0-2.69h33.96c-0.04-5.67-.39-9.4-1.03-11.08-0.86-2.24-4.54-4.26-6.79-5.26-1.97,3.47-5.08,5.5-8.51,5.5h0c-3.38,0-6.46-2.03-8.43-5.49-2.24.99-5.93,3.02-6.78,5.25a19.374,19.374,0,0,0-.75,7.06c0.01,0.49.02,0.96,0.02,1.41a1.34,1.34,0,1,1-2.68,0c0-.43-0.01-0.89-0.02-1.36a21.394,21.394,0,0,1,.93-8.07c1.63-4.27,8.66-6.97,9.45-7.27a1.345,1.345,0,0,1,1.68.7c1.48,3.23,3.88,5.09,6.58,5.09h0c2.72,0,5.21-1.9,6.67-5.09a1.337,1.337,0,0,1,1.67-.7c0.8,0.3,7.83,3,9.46,7.27,1.09,2.86,1.22,9.01,1.22,13.39A1.34,1.34,0,0,1,2937.66,3501.5Zm-7.37-31.3h-0.06a9.755,9.755,0,0,1-.11,1.57,14.718,14.718,0,0,1-1.28,3.86,1.44,1.44,0,0,1-.2.39c-2.12,4.02-5.79,6.53-8.66,8.17a1.311,1.311,0,0,1-.66.18,1.33,1.33,0,0,1-1.16-.67,1.35,1.35,0,0,1,.49-1.84,21.175,21.175,0,0,0,6.45-5.29h-10.06a9.782,9.782,0,0,0,2.69,1.76,1.346,1.346,0,0,1,.68,1.77,1.312,1.312,0,0,1-1.76.69,11.578,11.578,0,0,1-7.12-10.61,1.332,1.332,0,0,1-1.11-1.56l1.42-8a1.331,1.331,0,0,1,1.31-1.11h17.71a1.34,1.34,0,0,1,1.32,1.11l1.38,7.81a1.213,1.213,0,0,1,.07.43A1.34,1.34,0,0,1,2930.29,3470.2Zm-17.24,3.69h13.64a11.666,11.666,0,0,0,.79-2.6,6.468,6.468,0,0,0,.07-1.09h-15.34A8.747,8.747,0,0,0,2913.05,3473.89Zm14.69-11.69h-15.46l-0.95,5.31h17.35Z"
                    transform="translate(-2901 -3459.5)"
                  />
                </svg>
              </div>
              <div class="content">
                <h1>Medical Professionals</h1>
                <p>
                  Qualified and certified physicians for qulity medical care
                </p>
              </div>
            </div>
          </div>

          <h2>EMERGENCY CALL:</h2>

          <div class="call">
            <div class="icon">
              <svg width="24.375" height="24.343" viewBox="0 0 24.375 24.343">
                <path
                  id="phone.svg"
                  class="cls-2"
                  d="M831.817,365.478a10.864,10.864,0,0,0-10.852-10.851v-1.55a12.416,12.416,0,0,1,12.4,12.4h-1.551Zm-6.2,0a4.656,4.656,0,0,0-4.651-4.651v-1.55a6.208,6.208,0,0,1,6.2,6.2h-1.55Zm-4.651-9.3a9.312,9.312,0,0,1,9.3,9.3h-1.551a7.759,7.759,0,0,0-7.751-7.751v-1.55Zm3.779,13.4,1.938-1.937a0.578,0.578,0,0,1,.064-0.058,1.924,1.924,0,0,1,2.511-.006,0.72,0.72,0,0,1,.071.064l3.488,3.487a1.871,1.871,0,0,1,0,2.646l-2.325,2.326a5.527,5.527,0,0,1-3.942,1.314c-3.14,0-7.446-1.609-11.712-5.8l0.41-.418-0.417.41a19.929,19.929,0,0,1-5.5-9.163c-0.666-2.764-.288-5.19,1.01-6.489l2.325-2.325a1.917,1.917,0,0,1,2.647,0l3.488,3.488a0.8,0.8,0,0,1,.067.077,1.879,1.879,0,0,1-.009,2.5c-0.018.022-.038,0.043-0.058,0.064l-1.938,1.937a1.419,1.419,0,0,0,0,2l2.938,2.937h0l2.94,2.94A1.42,1.42,0,0,0,824.744,369.578Zm6.522,3.554,0.454-.454a0.322,0.322,0,0,0,0-.454l-3.434-3.433c-0.017-.015-0.034-0.029-0.049-0.045a0.277,0.277,0,0,0-.464,0c-0.015.014-.03,0.029-0.046,0.042l-0.4.4ZM817.25,359.116l0.4-.4a0.447,0.447,0,0,1,.042-0.045,0.328,0.328,0,0,0,0-.464,0.652,0.652,0,0,1-.05-0.055l-3.429-3.429a0.323,0.323,0,0,0-.455,0l-0.454.454Zm1.456,8.621h0l-2.94-2.94a2.97,2.97,0,0,1,0-4.2l0.388-.388-3.943-3.941-0.775.774c-0.9.9-1.129,2.827-.6,5.029A20.532,20.532,0,0,0,824.366,375.6c2.2,0.531,4.129.3,5.029-.6l0.775-.775-3.942-3.942-0.388.388a2.971,2.971,0,0,1-4.2,0Z"
                  transform="translate(-809 -353.063)"
                />
              </svg>
            </div>
            <a href="tel:86608 83215">86608 83215</a>
          </div>
        </div>
      </section> */}
      <StaticEmg />
    </div>
  );
};
export default Departments;
