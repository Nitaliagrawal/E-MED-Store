import React from 'react'
import login from '../images/login.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="row">
                            <div className="col-md-6 col-sm-5">
                                <div className="signin-image">
                                    <figure>
                                        <img src={login} alt="loginpic" className="signin-image img-fluid pr-5 mr-5 mt-5" />
                                    </figure>
                                    <NavLink to="/signup" className="signin-image-link text-center mt-3">Create an Account</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <div className="signin-form">
                                    <h2 className="form-title">Sign In</h2>
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
                                            <label htmlFor="password">
                                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                            </label>
                                            <input type="text" name="password" id="password" placeholder="Your Password" />
                                        </div>


                                        <div className="form-group form-button">
                                            <button type="button" class="btn btn-primary form-submit" name="login" id="login">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
