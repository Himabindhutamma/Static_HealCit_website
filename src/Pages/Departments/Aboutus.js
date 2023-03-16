import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StaticEmg from '../Home/StaticEmg'
import Axios from '../../Api/Axios';
import bottomshape from '../Hospital/bottomshape.png'
const Aboutus = () => {
  const[staticcarddata, setStaticcarddata]=useState({});
  const[staticcarddata1, setStaticcarddata1]=useState({});
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  useEffect(() => {
      getstaticData()
    }, [])
    useEffect(() => {
    
      fetchImage()
      fetchImage1()
    }, [staticcarddata1,staticcarddata])
    const getstaticData = () => {
      Axios.getData(`SelectAll_staticPages/`)
        .then(res => {
          console.log(res)
          let r = res
          var newdata = r.find(i => i['name_staticPages'] === 'AWhoWeAreData3')
          let newarray = newdata.data_staticPages
          const arrayObj = JSON.parse(newarray);
          setStaticcarddata(arrayObj);
          console.log(arrayObj);
          let r1 = res
          var newdata1 = r1.find(i => i['name_staticPages'] === 'Aboutus-banner1')
          let newarray1 = newdata1.data_staticPages
          const arrayObj1 = JSON.parse(newarray1);
          setStaticcarddata1(arrayObj1);
          console.log(arrayObj1);
        })
        .catch(error => {})
    }
    const fetchImage = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}GetFile/${staticcarddata1.profilePath}`);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
    const fetchImage1 = async () => {
      const res1 = await fetch(`${process.env.REACT_APP_API_URL}GetFile/${staticcarddata.profilePath}`);
      const imageBlob1 = await res1.blob();
      const imageObjectURL1 = URL.createObjectURL(imageBlob1);
      setImg1(imageObjectURL1);
    };
  return (
    <div>
      <header class="header-bottom-4">
        {/* <img src="./Assets/images/banner/banner4.jpg" /> */}
        <img src={img} alt="icons" />
        <div class="header-bottom-4__bg">
          <div class="icon">
            {/* <img src="./Assets/images/banner/banner-shape.png" /> */}
          </div>
        </div>
        <div class="container">
          <h1 class="section-title">
            About <span>us</span>
          </h1>
          {/* <ol class="breadcrumb">
                <Link className="breadcrumb-item" to="/home">HOME</Link>
                 <li class="breadcrumb-item active">About Us</li>
                </ol> */}
        </div>
      </header>
      <section class="about-4" id="about">
        <div class="latest-news__bg">
          <div class="icon">
            <img src={bottomshape}/>
          </div>
        </div>
        <div class="container">
          <div class="content">
            <div class="video">
              <a
                class="btn-video-outer"
                data-fancybox
                href="https://www.youtube.com/channel/UCWlVXjRZOpyJwJ2Tnp_yNSQ"target="_blank"
              >
                <span class="btn-video">
                  <i class="fa fa-play btn-play"></i>watch video
                </span>
              </a>
              <div class="img">
                {/* <img src="./Assets/images/png/About-1.png" /> */}
                <img src={img1} alt="icons" />

              </div>
            </div>
            <div class="content-right">
              <h4>{staticcarddata.whoweare}</h4>
              <h1 class="section-title">
              {staticcarddata.mainheading}{" "}
              </h1>
              <p>
              {staticcarddata.para}
              </p>
              <b>
              {staticcarddata.subheading}
              </b>
              <p>
              {staticcarddata.para1}
                <br />
                <br />
                {staticcarddata.para2}
                <br />
                <br />
                {staticcarddata.para3}
                <br />
                <br />
                <b>
                {staticcarddata.para4}
                </b>
                <br />
                <br />
                <b>
                {staticcarddata.para5}
                </b>
                <br />
                <br />
                {staticcarddata.para6}
              </p>
            </div>
          </div>
        </div>
      </section>
    <StaticEmg />
    </div>
  );
};
export default Aboutus;
