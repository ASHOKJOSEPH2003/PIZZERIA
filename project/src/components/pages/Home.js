import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import pizzaimg1 from "../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import pizzaimg2 from "../images/nik-owens-40OJLYVWeeM-unsplash.jpg";
import carouselimg1 from "../images/offer-1.png";
import carouselimg2 from "../images/offer-2.png";
import carouselimg3 from "../images/offer-3.png";
import expimg1 from "../images/menu-svgrepo-com.svg";
import expimg2 from "../images/offer-food-service-serve-svgrepo-com.svg";
import "./Home.css";
import {ReactComponent as Logo} from "../images/pizzeria-logo.svg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div id="mainbanner" >
        <div className='container-fluid' >
            <div className='row'>
                <div className='col-md-8 p-4 p-md-5  text-body-emphasis back ' style={{height: "400px"}}>
                    <div className='col-lg-6 px-0' >
                        <h1 className='display-4 futura'>Welcome to AJ's Pizzeria</h1>
                        <p className="lead my-3 futura" style={{color: "#Dc6601"}}>Delicious Pizza delivered to you in 30 minutes.</p>
                        <Link to="/pizzas" className="btn btn-primary futura" style={{ color: "white", height: "70px", fontSize: "larger" }}>Order Online NOW</Link>
                    </div>
                </div>
                <div className="col-md-4 p-0">
           <img src={pizzaimg1} alt="" className="img-fluid" style={{height: "400px",width: "auto"}}/>
          </div>

            </div>
        </div>
    </div>
    <div id="offers">
        <div className='container-fluid'>
            <div className='row' style={{backgroundColor:" #f9ddb1"}}>
                <div className='col-12 col-md-4 p-3'>
                <h1 className="futura">COUPONS AND</h1>
                <h1 className="futura">OFFERS</h1>
        <img src={pizzaimg2} className="d-block w-100 img-fluid" style={{maxHeight: "325px",objectFit: "contain"}} alt="..."/>

                </div>
                <div className='col-12 col-md-8 pt-5 pr-md-5'>
                <Carousel>
      <Carousel.Item interval={1000}>
        <img src={carouselimg1} className="d-block w-100 img-fluid" style={{maxHeight: "325px",objectFit: "contain"}} alt="..."/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={carouselimg2} className="d-block w-100 img-fluid" style={{maxHeight: "325px",objectFit: "contain"}} alt="..."/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselimg3} className="d-block w-100 img-fluid" style={{maxHeight: "325px",objectFit: "contain"}} alt="..."/>
      </Carousel.Item>
    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <div id="explore">
    <div className="container-fluid background m-0">
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2  futura" style={{borderBottom: "5px solid black"}}>Explore</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div className="feature col">
                    <div className="d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                    <img src={expimg1} height="70" width="80"/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis futura">OUR MENU</h3>
                    <p>Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
                    <Link to="/pizzas" className="btn btn-primary futura" style={{ color: "white" }}>DISCOVER PIZZAS</Link>
                  </div>
                  <div className="feature col">
                    <div className=" d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-cake2" viewBox="0 0 16 16">
                            <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426"/>
                          </svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis futura">Birthday Party</h3>
                    <p>Get Ready For a Pizza Party. Celebrate your birthday with AJ's Pizza.</p>
                    <Link to="/birthday" className="btn btn-primary futura" style={{ color: "white" }}>BOOK NOW</Link>
                  </div>
                  <div className="feature col">
                    <div className=" d-inline-flex align-items-center justify-content-center   fs-2 mb-3">
                       <img src={expimg2} alt="" height="70" width="80"/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Catering</h3>
                    <p>Enquire Now For our Catering Services. Catering is available for 10-30 persons.</p>
                    <Link to="/catering" className="btn btn-primary futura" style={{ color: "white" }}>BOOK NOW</Link>
                  </div>
                </div>
              </div>
        </div>

    </div>
    <div id="footer" style={{backgroundColor: "#Dc6601", height: "80px"}}> 
    <div class="container m-0" >
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-1  border-top">
              <p class="col-md-4 mb-0 text-body-secondary futura">© 2024 Company, Inc</p>
          
              <a href="/" class="col-md-4 d-flex align-items-center justify-content-center  mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <Logo className='pizzalogo'/> 
              </a>
          
              <ul class="nav col-md-4 justify-content-end futura">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
              </ul>
            </footer>
          </div>

    </div>
    </div>
  )
}

export default Home