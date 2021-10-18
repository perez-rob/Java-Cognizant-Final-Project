import React, { useState } from 'react'
import { Footer, Header } from '../components'
import { useConsumer } from "../utils/ConsumerContext";
import { useHistory } from 'react-router-dom';
import * as C from "@mui/material";
import api from "../api";



const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

const FORM_DATA_PROFILE = {
  firstName: {
    value: "",
    label: "First Name",
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
    label: "Last Name",
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
  phone: {
    value: "",
    label: "Phone Number",
    min: 9,
    max: 15,
    required: true,
    validator: {
      regEx: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
      error: "Phone number fill correctly",
    },
  },
  shipStreetOne: {
    value: "",
    label: "Street 1",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "Street 1 fill correctly",
    },
  },
  shipStreetTwo: {
    value: "",
    label: "Street 2",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "Street 2 fill correctly",
    },
  },
  shipCity: {
    value: "",
    label: "City",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "City fill correctly",
    },
  },
  shipState: {
    value: "",
    label: "State",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
      error: "State fill correctly",
    },
  },
  shipZip: {
    value: "",
    label: "Zip Code",
    min: 0,
    max: 10,
    required: false,
    validator: {
      regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
      error: "Zip fill correctly",
    },
  },
  billStreetOne: {
    value: "",
    label: "Street 1",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "Street 1 fill correctly",
    },
  },
  billStreetTwo: {
    value: "",
    label: "Street 2",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "Street 2 fill correctly",
    },
  },
  billCity: {
    value: "",
    label: "City",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/.{1,}/ig,
      error: "City fill correctly",
    },
  },
  billState: {
    value: "",
    label: "State",
    min: 0,
    max: 32,
    required: false,
    validator: {
      regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
      error: "State fill correctly",
    },
  },
  billZip: {
    value: "",
    label: "Zip Code",
    min: 0,
    max: 10,
    required: false,
    validator: {
      regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
      error: "Zip fill correctly",
    },
  },
};


export default function UserProfile() {

  const {currentUser, setCurrentUser} = useConsumer();
  const history = useHistory();

  
  const [stateFormData, setStateFormData] = useState(FORM_DATA_PROFILE);
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

    /* validation handler */
    // validationHandler(stateFormData, e);
  };

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
  };

  console.log("TEST", currentUser) ///////////////////////////////////////////////////////////////////////////

  const handleLogout = () => {
    setCurrentUser(null);
    history.push("/")
  };

  return (
    <>
    <Header />
    <div>
      <h2>THIS IS THE USER PROFILE PAGE</h2>
      <form>
      
        <div>
        <C.TextField id="up-first-name" color="text" label="First Name" variant="outlined" />

        <C.TextField id="up-last-name" color="text" label="Last Name" variant="outlined" />
        </div>
        <div>
        <C.TextField id="up-email" color="text" label="Email" variant="outlined" />

        <C.TextField id="up-password" color="text" label="Password" variant="outlined" />
        </div>
        <div>
        <C.TextField id="up-phone" color="text" label="Phone" variant="outlined" />
        {/* HIDDEN PASSWORD CONFIRM HERE */}
        </div>
        <h5>shipping addy</h5>
        <div>
          <div>
          <C.TextField id="up-ship-street-one" color="text" label="Street 1" variant="outlined" />
          <C.TextField id="up-ship-street-two" color="text" label="Street 2" variant="outlined" />
          </div>
          <div>
          <C.TextField id="up-ship-city" color="text" label="City" variant="outlined" />
          <C.TextField id="up-ship-state" color="text" label="State" variant="outlined" />
          <C.TextField id="up-ship-zip" color="text" label="Zip Code" variant="outlined" />
          </div>
        </div>

        <h5>billing addy</h5>
        <div>
          <div>
          <C.TextField id="up-bill-street-one" color="text" label="Street 1" variant="outlined" />
          <C.TextField id="up-bill-street-two" color="text" label="Street 2" variant="outlined" />
          </div>
          <div>
          <C.TextField id="up-bill-city" color="text" label="City" variant="outlined" />
          <C.TextField id="up-bill-state" color="text" label="State" variant="outlined" />
          <C.TextField id="up-bill-zip" color="text" label="Zip Code" variant="outlined" />
          </div>
        </div>




      </form>
      <button className="logoutBtn" onClick={handleLogout} >Sign Out</button>    
    </div>
    <Footer />
    </>
  )
};