import React, { useEffect, useState } from "react";
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
const Yoga = () => {
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
                var newdata = r.find(i => i['name_staticPages'] === 'cont')
                let newarray = newdata.content_staticPages
                const arrayObj = JSON.parse(newarray);
                setStaticcarddata(arrayObj);
                console.log(arrayObj);

                let r1 = res
                var newdata1 = r1.find(i => i['name_staticPages'] === 'service')
                let newarray1 = newdata1.content_staticPages
                const arrayObj1 = JSON.parse(newarray1);
                setStaticcarddata1(arrayObj1);
                console.log(arrayObj1);
                let r2 = res
                var newdata2 = r2.find(i => i['name_staticPages'] === 'YNew-Banner2')
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
        {/* <img src="./Assets/images/banner/yoga-1.png" /> */}
        <img src={img} alt="icons" />
        <div class="header-bottom-4__bg">
          <div class="icon">
            {/* <img src="./Assets/images/banner/banner-shape.png" /> */}
          </div>
        </div>
        <div class="container">
          <h1 class="section-title">{/* YOGA */}</h1>
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
                    <h1 class="title">
                    {staticcarddata1.heading1}
                    </h1>
                    <ul class="lists">
                      <li class="list-item">
                        <span class="text">
                        {staticcarddata1.name}
                        </span>
                        <span class="price"> {staticcarddata1.price}</span>
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
                        <span class="text">
                        {staticcarddata1.para3}
                        </span>
                        <span class="price">{staticcarddata1.price4}</span>
                      </li>
                      <li class="list-item">
                        <span class="text">
                        {staticcarddata1.para4}
                        </span>
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
                  {/* <a href="departments-details_right.html" class="btn btn_blue">
                    BOOK APPOINTMENT{" "}
                  </a> */}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <StaticEmg />
    </div>
  );
};
export default Yoga;


