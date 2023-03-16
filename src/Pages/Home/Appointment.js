import React from "react";
const Appointment=()=>{
    return(
        <>
                <section class="appointments" id="departments">
            <div class="appointments__bg">
                <div class="icon">
                    <img src="./Assets/images/png-shapes/appointments-shape.png"/>
                </div>
            </div>
            <div class="container">
                <div class="online-appointments">
                    <h1 class="section-title">Mission <span> and Vision</span></h1>
                    <p class="appointments-text">You can now book a limited amount of doctors appointments online</p>
                </div>
                
                <div class="company-numbers">
                    
                    <div class="company-numbers__item">
                        <h2 class="number">150k</h2>
                        <div class="content">
                            <h3 class="title">Cured patients</h3>
                            <p class="text">For over 15 years, we have delighted our customers and provide them with the
                                necessary services</p>
                        </div>
                    </div>

                    <div class="company-numbers__item">
                        <h2 class="number">100%</h2>
                        <div class="content">
                            <h3 class="title">Happy Clients</h3>
                            <p class="text">Absolutely all our clients are ready to assure you of the high quality of
                                our services</p>
                        </div>
                    </div>

                </div>
                
                <a href="departments-details_right.html" class="btn btn_blue">REQUEST AN APPOINTMENT</a>
                
            </div>
        </section>
        </>
    );
}
export default Appointment;