import React, { useEffect, useState } from 'react'
import Emergency from "../Home/Emergency";
import Banner from "../Services/Banner";
import { Link } from "react-router-dom";
import Axios from '../../Api/Axios'
const Service = () => {
    const [staticcarddata, setStaticcarddata] = useState({});
  const [speciallist, setSpeciallist] = useState([])
  const [imgs, setImgs] = useState([])
  const [imgs1, setImgs1] = useState([])

  const newArr = speciallist.map((obj,index) => {
    console.log(obj,index)
    if(index === 0){
      return {...obj, pathurl:imgs[0], pathurl1:imgs1[0], linkto:"/yoga" };
    }else if(index === 1){
      return {...obj, pathurl:imgs[1], pathurl1:imgs1[1], linkto:"/meditation"};
    }else if(index === 2){
      return {...obj, pathurl:imgs[2], pathurl1:imgs1[2], linkto:"/department"};
    }
    return obj;
  });
  
  console.log(newArr);
    useEffect(() => {
      fetchImage()
      fetchImage1()
    }, [speciallist])

    useEffect(() => {
      getstaticData()
    }, [])
    const getstaticData = () => {
      Axios.getData(`SelectAll_staticPages/`)
        .then(res => {
          console.log(res)
          let r = res
          var newdata = r.find(i => i['name_staticPages'] === 'eventcardone')
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
      speciallist.forEach((backgroundPath) => {
        console.log("backgroundPath",backgroundPath.backgroundPath)
          promises.push(fetch(`${process.env.REACT_APP_API_URL}GetFile/${backgroundPath.backgroundPath}`));
      })
  
      Promise.all(promises).then((responses) => {
        console.log(responses)
        const imageObjectURL = responses.map((response) =>response.url);
        console.log(imageObjectURL)
        setImgs(imageObjectURL)
        
      })
  
  }
  const fetchImage1 = () => {
    const promises1 = [];
    speciallist.forEach((frontPath) => {
      console.log("frontPath",frontPath.frontPath)
        promises1.push(fetch(`${process.env.REACT_APP_API_URL}GetFile/${frontPath.frontPath}`));
    })

    Promise.all(promises1).then((responses) => {
      console.log(responses)
      const imageObjectURL1 = responses.map((response) =>response.url);
      console.log(imageObjectURL1)
      setImgs1(imageObjectURL1)
      
    })

}
  return (
    <>
    <div class="page">
      <Banner/>

        <section class="departments-3 main-blog">
            <div class="main-blog__bg">
                <div class="icon">
                    <img src="./Assets/images/png-shapes/form-shape.png"/>
                </div>
                <div class="icon">
                    <img src="./Assets/images/png-shapes/specialists__left-bottom-shape.png"/>
                </div>
            </div>
            <div class="container">
                <div class="departments-3__items">
                {newArr &&
                    newArr.map((data,j) =>{
                      console.log(data);
                        return(
                            <>
                    <div class="item-icon">
                        <div class="img">
                            {/* <img src="./Assets/images/jpg/Yoga-Class.png"/> */}
                            <img src={data.pathurl}/>
                            <div class="icon">
                                {/* <img src="./Assets/images/jpg/cresent lunge pose_120px.png"/> */}
                                <img src={data.pathurl1}/>
                            </div>
                        </div>
                        <h1 class="title">{data.heading}</h1>
                        <p class="text">{data.para}</p>
                        <Link to={data.linkto} className="read-more-2" >Read More</Link>
                    </div>
                    </>)
                    })
                  }
                    
                </div>
            </div>
        </section>
        {/* <Emergency /> */}
    </div>

    </>
  );
};
export default Service;

