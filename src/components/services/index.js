import React from 'react'
import eye from "../../assets/image/eye1200.jpg"
import heart from "../../assets/image/heart.jpg"
import gastro from "../../assets/image/gastro.webp"
import dermo from "../../assets/image/dermo.png"

const service = () => {
    return (
        <div id='ourServices'>
                    <div class="py-5 text-center container">
                    <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">OUR SERVICES</h1>
                    </div>
                    </div>
            {/*  */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner ratio ratio-16x9">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={eye} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4  class="text-secondary">EYE</h4>
                            <p>Our Hospital Treat 1000+ Laser Opertations</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={heart} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4  class="text-secondary" >HEART</h4>
                            <p>Our Hospital Treat 800+ HEART Opertations and angio</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={gastro} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4  class="text-secondary">GASTRO</h4>
                            <p>Our Hospital Treat 1600+ GASTRO Patients and make 400 Operations</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={dermo} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="text-secondary">Dermo</h4>
                            <p>Our Hospital as Advance Skin Care Treatement and and laser Operations</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            {/*  */}
        </div>
    )
}

export default service; 