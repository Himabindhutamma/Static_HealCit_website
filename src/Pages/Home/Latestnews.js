import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from '../../Api/Axios'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Latestnews = () => {
  const [staticcarddata, setStaticcarddata] = useState({});
  const [speciallist, setSpeciallist] = useState([])
  const [imgs, setImgs] = useState([])
   
  const newArr = speciallist.map((obj,index) => {
    console.log(obj,index)
    if(index === 0){
      return {...obj, pathurl:imgs[0] };
    }else if(index === 1){
      return {...obj, pathurl:imgs[1] };
    }else if(index === 2){
      return {...obj, pathurl:imgs[2] };
    }else if(index == 3){
      return {...obj, pathurl:imgs[3] };
    }
    return obj;
  });
  
  console.log(newArr);
    useEffect(() => {
      fetchImage()
    }, [speciallist])

    useEffect(() => {
      getstaticData()
    }, [])
    const getstaticData = () => {
      Axios.getData(`SelectAll_staticPages/`)
        .then(res => {
          console.log(res)
          let r = res
          var newdata = r.find(i => i['name_staticPages'] === 'latestnew3')
          let newarray = newdata.content_staticPages
          const arrayObj = JSON.parse(newarray);
          console.log("array object...",arrayObj);
            setStaticcarddata(arrayObj)
            setSpeciallist(arrayObj.cardsList);
          
          
        })
        .catch(error => {console.log(error) })
    }
    const fetchImage = () => {
      const promises = [];
      speciallist.forEach((profilePath) => {
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
      <section class="latest-news">
        <div class="latest-news__bg">
          <div class="icon">
            {/* <img src="./Assets/images/png-shapes/latest-news__right-bottom-shape.png" /> */}
          </div>
        </div>
        <div class="latest-news-container">
          <h1 class="section-title" style={{marginBottom:'50px'}}>
          {staticcarddata && staticcarddata.mainheading}
          </h1>
          <div>
          <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000}>
          
              {newArr &&
                    newArr.map((data,j) =>{
                      console.log(data);
                        return(
                            <>

            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  {/* <img src="./Assets/images/jpg/latest-news1.jpg" /> */}
                  <img src={data.pathurl}/>
                  <h1 class="date">{data.para1}</h1>
                </div>
                <h4 class="title">{data.heading}</h4>
                <p class="text">
                {data.para}
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            </>)
                    })
                  }
            {/* <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news2.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news3.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news1.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news2.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news3.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news1.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news2.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div>
            <div>
            <a href="blog-details_right.html" class="latest-news__item">
              <div class="inner-block">
                <div class="img">
                  <img src="./Assets/images/jpg/latest-news3.jpg" />
                  <h1 class="date">Now 28. 2019</h1>
                </div>
                <h4 class="title">Improvements in Technology</h4>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span class="read-more-2">read more</span>
              </div>
            </a>
            </div> */}
          </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};
export default Latestnews;
