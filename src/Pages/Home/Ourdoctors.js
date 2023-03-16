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

const Ourdoctors = () => {
  const [img, setImg] = useState();
  const [speciallist, setSpeciallist] = useState([])

  useEffect(() => {
    getstaticData()
  }, [])
  const getstaticData = () => {
      let data={
          "userTypeId_users":3
      }
    Axios.postData(`SelectConditionWithChildAndParent_users/`,data)
      .then(res => {
        console.log(res.Message)
        setSpeciallist(res.Message);
        })
      .catch(error => {console.log(error) })
  }

  return (
    <>
      <section class="specialists">
        <div class="specialists__bg">
          <div class="icon">
            <img src="./Assets/images/png-shapes/specialists__left-bottom-shape.png" />
          </div>
        </div>
        <div class="specialist-container">
          <h1 class="section-title" style={{ marginBottom: '50px' }}>
             Our Doctors    
          </h1>
          <div>
           <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000}>
              {speciallist &&
                    speciallist.map((data,j) =>{
                        return(
                             <>
                      
                      <div>
                        <a href="doctors-single_right.html" class="specialists__item">
                          <div class="inner-block" style={{width:'320px'}}>
                            {/* <div class="img">
                              <img src={data.pathurl}/>
                            </div> */}
                            <h1 class="name">{data.name_users}</h1>
                            <h4 class="proffesia">{data.city_userInformation}</h4>
                            <ul class="work-date">
                              <li>
                                <span>{data.date_userSlots}</span>
                                <span>{data.time_userSlots}</span>
                              </li>
                            </ul>
                            <span class="btn-2 btn-2_blue">
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
export default Ourdoctors;


