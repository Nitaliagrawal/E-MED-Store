import React from 'react';
import { NavLink } from 'react-router-dom';
import signupimg from "../images/signupimg.jpg";
import signup from "../images/signup.svg";

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="row">
                            <div className="col-md-6 col-sm-7">
                                <div className="signup-form">
                                    <h2 className="form-title">Sign Up</h2>
                                    <form className="register-form" id="register-form">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                <i className="zmdi zmdi-account material-icons-name"></i>
                                            </label>
                                            <input type="text" name="name" id="name" placeholder="Your Name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <i className="zmdi zmdi-email material-icons-name"></i>
                                            </label>
                                            <input type="text" name="email" id="email" placeholder="Your Email" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">
                                                <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                            </label>
                                            <input type="number" name="phone" id="phone" placeholder="Your Phone number" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">
                                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                            </label>
                                            <input type="text" name="password" id="password" placeholder="Your Password" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="cpassword">
                                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                            </label>
                                            <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="address">
                                                <i className="zmdi zmdi-pin material-icons-name"></i>
                                            </label>
                                            <textarea  id="address" rows="2" cols="44"  placeholder="Your address"></textarea>
                                        </div>

                                        <div className="form-group form-button">
                                            <button type="button" class="btn btn-primary form-submit" name="signup" id="signup">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <div className="signup-image">
                                    <figure>
                                        <img src={signup} alt="registrationpic" className="img-fluid pr-5 mr-5 mt-5" />
                                    </figure>
                                    <NavLink to="/login" className="signup-image-link text-center mt-3">I am already Register</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signup
