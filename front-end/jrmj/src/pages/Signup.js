import React, { useState } from 'react'
import { Header, Footer } from "../components";
import { Link, useHistory } from 'react-router-dom';
import Stil from "../images/stiletto.jpg";
import api from "../api";
import { useMutation } from 'react-query';
import { useConsumer } from "../utils/ConsumerContext";


const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

const FORM_DATA_REGISTER = {
  firstName: {
    value: "",
    label: "FirstName",
    min: 1,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Username fill correctly",
    },
  },
  lastName: {
    value: "",
    label: "LastName",
    min: 1,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Username fill correctly",
    },
  },
  email: {
    value: "",
    label: "Email",
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: "Email fill correctly",
    },
  },
  password: {
    value: "",
    label: "Password",
    min: 8,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Password fill correctly",
    },
  },
};

function Signup() {

  const {currentUser, setCurrentUser} = useConsumer();

  const history = useHistory();

  const [stateFormData, setStateFormData] = useState(FORM_DATA_REGISTER);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  const addCustomer = useMutation((payload) => api.newCustomer(payload));

  const handleChange = (e) => {

    setStateFormValid(false);
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    /* validation handler */
    // validationHandler(stateFormData, e);
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = { ...stateFormData };

    const isValid = validationHandler(stateFormData);

    if (isValid) {
      data = { ...data, firstName: data.firstName.value || "" };
      data = { ...data, lastName: data.lastName.value || "" };
      data = { ...data, email: data.email.value || "" };
      data = { ...data, password: data.password.value || "" };

      const isValid = validationHandler(stateFormData);

      if (isValid) {
        // addCustomer.mutate(data)

        let returnData = await api.newCustomer(data);

        setCurrentUser(returnData)
        history.push("/");
      }
  }
}

  function validationHandler(states, e) {
    const input = (e && e.target.name) || "";
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length + 1
      ) {
        errors[input] = {
          hint: `Min ${states[input].label} length ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Min ${states[input].label} length ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === "object"
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach((item) => {
        item.forEach((field) => {
          errors[item[0]] = "";
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min > field.value.length) {
            errors[item[0]] = {
              hint: `Min ${field.label} length ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Min ${field.label} length ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === "object") {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    if (!input && !isValid) {
      setStateFormMessage({
        status: "error",
        error: "Form Invalid: See field hints",
      });
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
  }

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
                  onSubmit={handleFormSubmit}
                      action="#"
                      className="loginForm"
                >
                      
                      <h2 className="loginTitle">Sign Up</h2>
                      {/* {stateFormMessage.status === "error" && (
              <h4 style={{"color":"red"}}>{stateFormMessage.error}</h4>
            )} */}

                      <div className="usernameDiv">
                        {stateFormError.firstName && (<h6 style={{"color":"red"}}> {stateFormError.firstName.hint}</h6>)}
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="firstName"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="First Name"
                            value={stateFormData.firstName.value}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="usernameDiv">
                      {stateFormError.lastName && (<h6 style={{"color":"red"}}> {stateFormError.lastName.hint}</h6>)}
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="lastName"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="Last Name"
                            value={stateFormData.lastName.value}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="usernameDiv">
                      {stateFormError.email && (<h6 style={{"color":"red"}}> {stateFormError.email.hint}</h6>)}
                        <label className="usernameLoginLabel">
                          
                          <input
                            name="email"
                            type="text"
                            className=" usernameLoginInput"
                            placeholder="Email"
                            value={stateFormData.email.value}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      <div className="passwordDiv">
                      {stateFormError.password && (<h6 style={{"color":"red"}}> {stateFormError.password.hint}</h6>)}
                        <label className="passwordLoginLabel">
                          
                          <input
                            name="password"
                            type="password"
                            className="passwordLoginInput"
                            placeholder="Password"
                            value={stateFormData.password.value}
                            onChange={handleChange}
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
              <img className="form-img" src={ Stil }  alt="women's stiletto shoe" />

            </div>


          </div>
          <Footer />  
          </div>
        </>
    )
}

export default Signup
