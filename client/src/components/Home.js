import React from 'react';
import { NavLink } from 'react-router-dom';
import contactusimg from "../images/contact_us.png";
import img1 from "../images/delivery-package.gif"

const Home = () => {
    return (
        <>
            <section id="header" className="container">
                <div className="home-page ">
                    <div className="home-div text-center">
                        <figure>
                            <img src={img1} className="delivery img-fluid " />
                        </figure>
                        <div className="title">
                            <h1 className="text-center"> WELCOME TO E-MED STORE</h1>
                            <h2 >Get Medicines at affordable price</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section2" className="container mt-5">
                    <div class="card-deck">
                        <div class="row">
                            <div class="card col-md-4">
                                <img class="card-img-top w-25 m-4" src="./images/Shape_1.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title ml-3"><b>Skin Care</b></h5>
                                    <p class="card-text ml-3 mb-3">It is long established fact that a reader will be
                                        distracted by the redable content of a page when looking at this layout. </p>

                                </div>
                            </div>
                            <div class="card col-md-4">
                                <img class="card-img-top w-25 m-4" src="./images/Shape_1.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title ml-3"><b>Multi Vitamins</b></h5>
                                    <p class="card-text ml-3 mb-3">It is long established fact that a reader will be
                                        distracted by the redable content of a page when looking at this layout.
                                    </p>

                                </div>
                            </div>
                            <div class="card col-md-4">
                                <img class="card-img-top w-25 m-4" src="./images/Shape_1.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title ml-3"><b>Medicines</b></h5>
                                    <p class="card-text ml-3 mb-3">It is long established fact that a reader will be
                                        distracted by the redable content of a page when looking at this layout.</p>

                                </div>
                            </div>
                        </div>

                    </div>

            </section>


            {/*
     <section id="contactus" className="d-flex align-items-center">
     <div className="container">
         <div className="row">
             <div className="col-md-10 mx-auto">
                 <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column justify-content-center">
                         <h2 className="contactus_title">
                             We would love to hear from you
                         </h2>
                         <h2 className="my-3">
                             Get in touch for more information
                         </h2>
                         <div className="mt-3">
                             <NavLink to="/contact" className="btn-get-started">
                                 Contact_us
                             </NavLink>
                         </div>
                     </div>
                     <div className="col-md-6 order-1 order-lg-2 header-img">
                         <img src={contactusimg} className="img-fluid animated" alt="home images" />
                     </div>
                 </div>

             </div>
         </div>
     </div>
 </section>*/
            }


        </>
    );
}

export default Home
