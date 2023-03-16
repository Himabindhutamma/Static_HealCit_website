import React, { useState, useEffect } from 'react'
const ScrollUp=()=>{
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600){
          setVisible(true)
        } 
        else if (scrolled <= 6400){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
    
    return(
        <>
           <div onClick={scrollToTop} class="to-top" style={{display: visible ? 'inline' : 'none'}} id="scrollUp"><i class="fa fa-angle-up"></i></div>
        </>
    );
}
export default ScrollUp;