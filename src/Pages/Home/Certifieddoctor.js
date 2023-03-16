import React from "react";
const Certifieddoctor = () => {
  return (
    <>
      <section class="form">
        <div class="form__bg">
          <div class="circle-blue"></div>
          <div class="circle-pink"></div>
          <img src="./Assets/images/png/doctor.png" />
          <div class="icon">
            <img src="./Assets/images/png-shapes/form-shape.png" />
          </div>
        </div>
        <div class="container">
          <div class="form__block">
            <h1 class="section-title">
              Looking for
              <br />
              <span>a Certified Doctor?</span>
            </h1>
            <p class="subtitle">
              We believe in providing the best possible care to all our existing
              patients and welcome new patients to sample
            </p>
            <form action="test.html" method="POST">
              <input
                class="form__block-input"
                type="text"
                placeholder="Your Name*"
              />
              <select class="form__block-input">
                <option selected>Choose department</option>
                <option>Choose department2</option>
                <option>Choose department3</option>
                <option>Choose department4</option>
              </select>
              <input
                class="form__block-input"
                type="text"
                placeholder="+1 123 465 78 99"
              />
              <input
                class="form__block-input"
                type="text"
                placeholder="Email*"
              />
              <textarea placeholder="Message"></textarea>
              <button type="submit" class="btn btn_blue">
                SEND REQUEST
              </button>
              <label>* Personal data will be encrypted</label>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Certifieddoctor;
