import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import { useNavigate } from 'react-router-dom';
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

const Ourspecialist = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState();
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
        var newdata = r.find(i => i['name_staticPages'] === 'doctorsdata4')
        let newarray = newdata.data_staticPages
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
      <section class="specialists">
        <div class="specialists__bg">
          <div class="icon">
            <img src="../../../Assets/images/png-shapes/specialists__left-bottom-shape.png" />
          </div>
        </div>
        <div class="specialist-container">
          <h1 class="section-title" style={{ marginBottom: '50px' }}>
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
                        <a class="specialists__item">
                          <div class="inner-block" style={{width:'320px'}}>
                            <div class="img">
                              <img src={data.pathurl}/>
                            </div>
                            <h1 class="name">{data.heading}</h1>
                            <h4 class="proffesia">{data.name}</h4>
                            <ul class="work-date">
                              <li>
                                <span>{data.para}</span>
                                <span>{data.time}</span>
                              </li>
                              <li>
                                <span>{data.para1}</span>
                                <span>{data.time1}</span>
                              </li>
                              <li>
                                <span>{data.para2}</span>
                                <span>{data.time2}</span>
                              </li>
                            </ul>
                            <span class="btn-2 btn-2_blue" onClick={()=>navigate('/dashboard/appointments')}>
                              Booking a visit<i class="fa fa-angle-right"></i>
                            </span>
                          </div>
                        </a>
                      </div>
                      </>)
                    })
                  }
                   
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ourspecialist;