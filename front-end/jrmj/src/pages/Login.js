import React from 'react'
import { Header, Footer } from "../components";
import { Link } from 'react-router-dom';
import Manthinking from "../images/Manthinking.jpg";



function Login() {
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
                      
                      <h2 className="loginTitle">Sign In</h2>

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

                      <Link to="/signup">
                        <div className="signupInstead">Sign up today!</div>
                      </Link>

                    </form>
                  </div>

            </div>
            </div>
            
            <div className="img-wrapper">
              <img className="form-img" src={ Manthinking }  alt="Man pondering with one arm crossed and fist under chin while looking slightly upwards." />

            </div>


          </div>
          <Footer />  
          </div>
        </>
    )
}

export default Login
