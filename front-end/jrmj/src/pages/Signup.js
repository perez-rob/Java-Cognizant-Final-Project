import React from 'react'
import { Header, Footer } from "../components";
import { Link } from 'react-router-dom';
import Lady2 from "../images/Lady2.jpg";


function Signup() {
    return (
        <>
          <Header />
          <div className="content">
         {/* Leave this here for now to fix content from going behind navbar */}
         <div className="hack-component"></div>
         <div className="form-page-wrapper">
            <div className="testWrapper">
            <div className="loginCard">
              <div className="flex">
                <form
                  // onSubmit={handleFormSubmit}
                      action="#"
                      className="loginForm"
                >
                      
                      <h2 className="loginTitle">Sign Up</h2>

                      <div className="usernameDiv">
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="firstname"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="First Name"
                            // value={formState.firstname}
                            // onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="usernameDiv">
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="lastname"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="Last Name"
                            // value={formState.lastname}
                            // onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="usernameDiv">
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="username"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="Email"
                            // value={formState.username}
                            // onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="passwordDiv">
                        <label className="passwordLoginLabel">
                          
                          <input
                            name="password"
                            type="password"
                            className="passwordLoginInput"
                            placeholder="Password"
                            // value={formState.password}
                            // onChange={handleChange}
                          />
                        </label>
                      </div>
                      
                      <div className="submitBtn">
                        <button
                          type="submit"
                          className="px-4 py-2 submitLoginBtn"
                        >
                          Submit
                        </button>
                      </div>

                      <Link to="/login">
                        <div className="signupInstead">I already have an account</div>
                      </Link>

                    </form>
                  </div>

            </div>
            </div>
            
            <div className="img-wrapper">
              <img className="form-img" src={ Lady2 }  alt="Man pondering with one arm crossed and fist under chin while looking slightly upwards." />

            </div>


          </div>
          <Footer />  
          </div>
        </>
    )
}

export default Signup
