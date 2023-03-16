import React,{useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {Box,Grid,Card,CardMedia,CardContent,Typography} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Axios from '../../Api/Axios'

const Blogs=()=>{
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
            var newdata = r.find(i => i['name_staticPages'] === 'latestnew4')
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
    return(
        <>
    
     
          
            <h1 className="blogs-title">
            {staticcarddata && staticcarddata.mainheading}
            </h1>
        <Grid container spacing={2} sx={{p:2}}>
            
            {newArr && newArr.map((data,j)=>{
                console.log(data)
                return(
                    <>
                     <Grid item xs={12} md={3} lg={3}>
            <Card>
            <CardMedia
            sx={{height:370,m:2}}
            image={data.pathurl}
            title='image'
            />
            <CardContent>
            <a>
                <Link to='/blogdetails'><h4>{data.doctorName}</h4></Link> </a>
            <span style={{display:'flex'}}><AccessTimeIcon/><p style={{paddingLeft:'10px'}}>{data.date} </p></span>
            <a href='#'> <h4>{data.heading}</h4></a>
            <p>{data.para}</p>
            </CardContent>
            </Card>
            </Grid>
                    </>
                )
            })}
        </Grid>
     
        </>
    )
}
export default Blogs;