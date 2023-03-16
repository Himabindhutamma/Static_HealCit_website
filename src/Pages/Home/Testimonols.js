import React, { useEffect, useState } from "react";
import Axios from '../../Api/Axios';
const Testimonols=()=>{
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
                var newdata = r.find(i => i['name_staticPages'] === 'Test1')
                let newarray = newdata.data_staticPages
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
        <div>
                    <section class="testimonials">
            <div class="testimonials__img">
                {/* <img src="./Assets/images/png/testimonials.png"/> */}
                <img src={img} alt="icons" />
            </div>
            <div class="container testimonials__content wow fadeInRight" data-wow-duration="1s">
                {/* <h1 class="section-title">our real <span>TESTIMONIALS</span></h1> */}
                <h1 class="section-title">{staticcarddata.mainheading}</h1>
                <div class="testimonials__content-carousel">
                    <div class="testimonials__content-carousel-item">
                        <q>{staticcarddata.para}</q>
                        <h2>{staticcarddata.subheading}</h2>
                        <h4>{staticcarddata.smalltext}</h4>
                    </div>

                    {/* <div class="testimonials__content-carousel-item">
                        <q>I am very impressed with you all as well as being bighly proficient is aabsoulutely
                            adoreble. I feel so relaxed in her capable hands and hope to be her patient for a very
                            long time! You are a fantastic team and I feel very privileged to come to you all</q>
                        <h2>Jonny Roberston</h2>
                        <h4>Creative Manager of “KadirovGroup”</h4>
                    </div>

                    <div class="testimonials__content-carousel-item">
                        <q>I am very impressed with you all as well as being bighly proficient is aabsoulutely
                            adoreble. I feel so relaxed in her capable hands and hope to be her patient for a very
                            long time! You are a fantastic team and I feel very privileged to come to you all</q>
                        <h2>Jonny Roberston</h2>
                        <h4>Creative Manager of “KadirovGroup”</h4>
                    </div>

                    <div class="testimonials__content-carousel-item">
                        <q>I am very impressed with you all as well as being bighly proficient is aabsoulutely
                            adoreble. I feel so relaxed in her capable hands and hope to be her patient for a very
                            long time! You are a fantastic team and I feel very privileged to come to you all</q>
                        <h2>Jonny Roberston</h2>
                        <h4>Creative Manager of “KadirovGroup”</h4>
                    </div> */}

                </div>
            </div>
        </section>
        </div>
    );
}
export default Testimonols;