import React from "react";
const popup=()=>{
    return(
        <div class="popup-form">
        <div class="inner-block">
            <span class="popup-form-close" id="popup-form-close">&times;</span>
            <div class="img">
                <img src="./Assets/images/jpg/popup-form.jpg"/>
            </div>
            <form>
                <h1 class="section-title">make an appointment</h1>
                <div class="input-box">
                    <label for="popup-name">Name *</label>
                    <input type="text" id="popup-name" required/>
                </div>

                <div class="input-box">
                    <label for="popup-email">Email *</label>
                    <input type="text" id="popup-email" required/>
                </div>

                <div class="input-box">
                    <label for="popup-phone">Phone *</label>
                    <input type="tel" id="popup-phone" required/>
                </div>

                <div class="select-box">
                    <i class="fa fa-angle-down"></i>
                    <select>
                        <option selected>Senior Citizens</option>
                        <option selected>Adults</option>
                        <option selected>Youth</option>
                        <option selected>Children</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-2_pink">send</button>
            </form>
        </div>
    </div>
    );
}
export default popup;