import React from 'react'
import contactUs  from "../../assets/image/contatus.jpg"

const ContactUs = () => {
  return (
    <div id='contactUs'>
<div>
<div class="row featurette">
      <div class="col-md-7 py-5 text-center" id='aboutUs'>
      <h1 class="fw-light" >Contact Us</h1>
        <h2 class="text-muted">Address : </h2>
        <p class="lead">
            Sri Venkateswara Hospital & Institute of Higher Education and Research (Deemed to be University),
            <br/> No.1 Snowflake
            <br/> Porur, Chennai - 600 116
            <br/> Tamil Nadu, India.
        </p>
      </div>
      <div class="col-md-5  d-lg-block contact">
        <img  src={contactUs}/>
         </div>
    </div>
</div>

    </div>
  )
}

export default ContactUs