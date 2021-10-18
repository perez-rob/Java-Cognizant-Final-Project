import React, {useState} from 'react'
import { Header, Footer } from "../components";
import { Link, useHistory } from 'react-router-dom';
import brownshoes from "../images/brownshoe.jpg";
import { useConsumer } from "../utils/ConsumerContext";
import api from "../api";
import { useQuery } from 'react-query';
import { validatePassword } from '../utils/auth';

const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

const FORM_DATA_LOGIN = {
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

function Login() {

  const {currentUser, setCurrentUser} = useConsumer();

  const history = useHistory();

  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  

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
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = { ...stateFormData };

    const isValid = validationHandler(stateFormData);

    if (isValid) {
      data = { ...data, email: data.email.value || "" };
      data = { ...data, password: data.password.value || "" };

      const isValid = validationHandler(stateFormData);

      if (isValid) {
        // const fetchCustomer = async () => await api.customerByEmail(data.email);
        // const { status, returnData = data, error} = useQuery("checkLogin", fetchCustomer);
        let returnData = await api.customerByEmail(data.email);
        
        if (returnData.length){
          let validated = validatePassword(data.password, returnData[0].password)
          if (validated) {
            console.log("LOG IN SUCCESS")

            // consider not adding password to this (needs to be destructured)
            setCurrentUser(returnData[0])

            history.push("/")
          } else {
            console.log("WRONG PASSWORD")
          }
        } else {
          console.log("CUSTOMER NOT FOUND !!!!!!!!!!!!!!!!!!!")
        }
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
                      
                      <h2 className="loginTitle">Sign In</h2>

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

                      <Link to="/signup">
                        <div className="signupInstead">Sign up today!</div>
                      </Link>

                    </form>
                  </div>

            </div>
            </div>
            
            <div className="img-wrapper">
              <img className="form-img" src={brownshoes }  alt="brown leather shoes for men." />

            </div>


          </div>
          <Footer />  
          </div>
        </>
    )
}

export default Login
