import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Axios from '../../Api/Axios'
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
const Banner=()=>{
    const[staticcarddata, setStaticcarddata]=useState({});
    const [img, setImg] = useState();
    useEffect(() => {
        getstaticData()
      }, [])
      useEffect(() => {

        fetchImage()
      }, [staticcarddata])
      const getstaticData = () => {
        Axios.getData(`SelectAll_staticPages/`)
          .then(res => {
            console.log(res)
            let r = res
            var newdata = r.find(i => i['name_staticPages'] === 'ENew-Banner2')
            let newarray = newdata.content_staticPages
            const arrayObj = JSON.parse(newarray);
            setStaticcarddata(arrayObj);
            console.log(arrayObj);
         
          })
          .catch(error => {})
      }
      const fetchImage = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}GetFile/${staticcarddata.profilePath}`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };
    return(
        <>
          <header class="header-bottom-4">
            {/* <img src="./Assets/images/banner/banner5.jpg"/> */}
            <img src={img} alt="icons" />
            <div class="header-bottom-4__bg">
                <div class="icon">
                    {/* <img src="./Assets/images/banner/banner-shape.png"/> */}
                </div>
            </div>
            <div class="container">                             
                <h1 class="section-title">{staticcarddata.heading}</h1>
                {/* <ol class="breadcrumb">
                <Link className="breadcrumb-item" to="/home"> HOME</Link>
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">All Departments</li>
                </ol> */}
            </div>
        </header>
        </>
    );
}
export default Banner;