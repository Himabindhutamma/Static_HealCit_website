import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Axios from '../../Api/Axios'
import easyicon from './easypose.svg';
import greetingicon from './greetingpose.svg';
import yogaicon from './cresentlunge.svg';
import pyramid from './pyramid.png';
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}
const bannerresponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const Banner1 = () => {
  const [bannerData, setBannerData] = useState([])
  const [cardData, setCardData] = useState([]);
  const [img, setImg] = useState();
  const [img1, setImg1] = useState([]);
  const[staticcarddata, setStaticcarddata]=useState([]);
  const [imgs, setImgs] = useState([])

  const newArr = staticcarddata.map((obj,index) => {
    console.log(obj,index)
    if(index === 0){
      return {...obj, pathurl:imgs[0], linkurl:"/clinic" };
    }else if(index === 1){
      return {...obj, pathurl:imgs[1], linkurl:"/doctor" };
    }else if(index === 2){
      return {...obj, pathurl:imgs[2],linkurl:"/department"  };
    }else if(index == 3){
      return {...obj, pathurl:imgs[3] };
    }
    return obj;
  });
  
  console.log(newArr);
    useEffect(() => {
      fetchcardImage()
    }, [staticcarddata])
    useEffect(() => {
      fetchImage()
    }, [bannerData])
    
  console.log(bannerData);
 
  useEffect(() => {
    getstaticData()
  }, [])
 

  const getstaticData = () => {
    Axios.getData(`SelectAll_staticPages/`)
      .then(res => {
        console.log(res)
        let r = res
        var newdata = r.find(i => i['name_staticPages'] === 'New-Banner2')
        let newarray = newdata.data_staticPages
        const arrayObj = JSON.parse(newarray);
        console.log(arrayObj);
        setBannerData(arrayObj);

        var newdata1 = r.find(i => i['name_staticPages'] === 'banner-card6')
        let newarray1 = newdata1.data_staticPages
        const arrayObj1 = JSON.parse(newarray1);
        console.log(arrayObj1);
        setStaticcarddata(arrayObj1);
      })
      .catch(error => {})
  }
  const fetchImage = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}GetFile/${bannerData.profilePath}`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  const fetchcardImage = () => {
    const promises = [];
    staticcarddata.forEach((profilePath) => {
      console.log("profilePath",profilePath.profilePath)
        promises.push(fetch(`${process.env.REACT_APP_API_URL}GetFile/${profilePath.profilePath}`));
    })

    Promise.all(promises).then((responses) => {
      console.log(responses)
      const imageObjectURL = responses.map((response) =>response.url);
      console.log(imageObjectURL)
      setImgs(imageObjectURL)
      
    })

}

  

  return (
    <>
      <header class='header-bottom'>
        <div class='header-bottom__banner '>
          <div>
            <Carousel
              responsive={bannerresponsive}
              // autoPlaySpeed={3000}
              // infinite={true}
            >
               <div>
                        <div class='slide-item'>
                          {/* <img src={pyramid} /> */}
                          <img src={img} alt="icons" />
                          <div class='slide-item__bg'>
                            <div class='icon'>
                              {/* <img src='./Assets/images/banner/banner-shape.png' /> */}
                            </div>
                          </div>
                          <div class='container'>
                            <div class='slide-item__block-1'>
                              <h5 class='slide-item__title'>{bannerData.heading}</h5>
                              
                              {/* <a
                                href='departments-details_right.html'
                                class='btn btn_blue'
                              >
                                BOOK A CONSULTATION
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
              {/* {bannerData &&
                bannerData.length > 0 &&
                bannerData.map((data, j) => {
                  return (
                    <>
                      <div>
                        <div class='slide-item'>
                          <img src={pyramid} />
                          <div class='slide-item__bg'>
                            <div class='icon'>
                              <img src='./Assets/images/banner/banner-shape.png' />
                            </div>
                          </div>
                          <div class='container'>
                            <div class='slide-item__block-1'>
                              <h1 class='slide-item__title'>Hello</h1>
                              
                              <a
                                href='departments-details_right.html'
                                class='btn btn_blue'
                              >
                                BOOK A CONSULTATION
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })} */}
            </Carousel>
          </div>
        </div>
        <div class='services'>
          <div class='container-1'>
            <div>
              <Carousel
                responsive={responsive}
                autoPlaySpeed={2000}
                infinite={true}
                arrows={false}
              > 
                  {newArr && 
                    newArr.map((data,j) =>{
                        return(
                            <>
                        <div>
                        <Link to={data.linkurl} >
                            <div class='services__outer-item1'>
                                <div class='services__item1' style={{borderRadius:"50%"}}>
                                <div class='services__item-icon1'>
                                <img className='medical_border' src={data.pathurl} style={{height:"300px", width:"300px"}}/>
                                    
                                </div>
                                <h1 class='services__item-title1'style={{color:"#1F3D9D",textAlign:"center",fontSize:"28px",position:'relative',top:'10px',textTransform:'uppercase'}} >{data.heading}</h1>
                                <p class='services__item-text1'>
                                    {/* {data.para} */}
                                    {/* All analyzes are carried out
                                    <br />
                                    using modern equipment */}
                                </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                            </>
                        )
                    })
                  }
               </Carousel>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Banner1