import React from "react";
import { Link } from "react-router-dom";
import StaticEmg from "../Home/StaticEmg";

const Contactus=()=>{
    return(
        <div>
        <header class="header-bottom-4">
        <img src="../../../Assets/images/banner/banner8.jpg"/>
        <div class="header-bottom-4__bg">
            <div class="icon">
                <img src="../../../Assets/images/banner/banner-shape.png"/>
            </div>
        </div>
        <div class="container">
            <h1 class="section-title">Contact <span>us</span></h1>
            
        </div>
    </header>
    <section class="contact main-blog">
            <div class="main-blog__bg">
                <div class="icon">
                    <img src="../../Assets/images/png-shapes/form-shape.png"/>
                </div>
                <div class="icon">
                    <img src="../../Assets/images/png-shapes/specialists__left-bottom-shape.png"/>
                </div>
            </div>

            <div class="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6994463883207!2d77.50970461513259!3d12.927028690885125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ef9a8b779ed%3A0xeb0d29de805134f1!2sPyramid%20-%20SRI%20SHIVARATNAPURI%20TEMPLE%20OF%20HEALTH!5e0!3m2!1sen!2sin!4v1663919007929!5m2!1sen!2sin"
                    width="100%" height="590px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false"
                    tabindex="0">
                </iframe>
                <div class="container">
                    <div class="contact-map__card">
                        <div class="img">
                            <img src="../../Assets/images/jpg/contact.jpg"/>
                        </div>
                        <div class="content">
                            <div class="number">
                                <a href="tel:+86608 83215">86608 83215</a>
                                <a href="tel:+70108 53980">70108 53980</a>
                            </div>
                            <p class="adress">Bangalore, Karnataka, India</p>
                            <a href="mailto:" class="email">info@healcit.com</a>
                            <Link class="btn btn-2_pink" to="/signinform">GET APPOINTMENT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container container_right-sidebar">
                <div class="article">
                    <h1 class="title">Get in Touch</h1>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-12 col-12" style={{marginBottom:'20px'}}>
                                <textarea class="form-control" placeholder="Type your texts"></textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" placeholder="Your Name"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-2_pink">Send</button>
                        <label>* Personal data will be encrypted</label>
                    </form>
                </div>
                <div class="sidebar">
                    <div class="blog-sidebar">
                        <div class="instagram">
                            <h1 class="blog-sidebar-title">instagram</h1>
                            <div class="items">
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram1.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram2.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram3.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram4.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram5.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram6.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram7.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram8.jpg"/>
                                </a>
                                <a href="#" class="item">
                                    <img src="../../Assets/images/jpg/instagram9.jpg"/>
                                </a>
                            </div>
                        </div>
                        <div class="follow">
                            <h1 class="blog-sidebar-title">Follow Us</h1>
                            <div class="socials">
                                <a href="https://www.facebook.com/people/Healcitindia/100083371200925/?paipv=0&eav=AfbYyDi9mM7jQmUcPm1mreGPEpY0DKweOIwk034Ri5P0c8SOnRAl-wNNXhpUcpAUS5w" target="_blank">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/healcit_india" target="_blank">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/healcitindia/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/healcitindia-pvt-ltd/" target="_blank">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
 
      <StaticEmg />
    </div>
    
        
    );
}
export default Contactus;