import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../components'
import { useConsumer } from "../utils/ConsumerContext";
import { useHistory } from 'react-router-dom';
import * as C from "@mui/material";
import api from "../api";
import { validatePassword } from "../utils/auth"



const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

// const FORM_DATA_PROFILE = {
//   firstName: {
//     value: "",
//     label: "First Name",
//     min: 1,
//     max: 36,
//     required: true,
//     validator: {
//       regEx: /^[a-z\sA-Z0-9\W\w]+$/,
//       error: "Username fill correctly",
//     },
//   },
//   lastName: {
//     value: "",
//     label: "Last Name",
//     min: 1,
//     max: 36,
//     required: true,
//     validator: {
//       regEx: /^[a-z\sA-Z0-9\W\w]+$/,
//       error: "Username fill correctly",
//     },
//   },
//   email: {
//     value: "",
//     label: "Email",
//     min: 6,
//     max: 36,
//     required: true,
//     validator: {
//       regEx: emailRegEx,
//       error: "Email fill correctly",
//     },
//   },
//   password: {
//     value: "",
//     label: "Password",
//     min: 8,
//     max: 256,
//     required: true,
//     validator: {
//       regEx: /^[a-z\sA-Z0-9\W\w]+$/,
//       error: "Password fill correctly",
//     },
//   },
//   phone: {
//     value: "",
//     label: "Phone Number",
//     min: 9,
//     max: 15,
//     required: true,
//     validator: {
//       regEx: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
//       error: "Phone number fill correctly",
//     },
//   },
//   shipStreetOne: {
//     value: "",
//     label: "Street 1",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "Street 1 fill correctly",
//     },
//   },
//   shipStreetTwo: {
//     value: "",
//     label: "Street 2",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "Street 2 fill correctly",
//     },
//   },
//   shipCity: {
//     value: "",
//     label: "City",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "City fill correctly",
//     },
//   },
//   shipState: {
//     value: "",
//     label: "State",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
//       error: "State fill correctly",
//     },
//   },
//   shipZip: {
//     value: "",
//     label: "Zip Code",
//     min: 0,
//     max: 10,
//     required: false,
//     validator: {
//       regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
//       error: "Zip fill correctly",
//     },
//   },
//   billStreetOne: {
//     value: "",
//     label: "Street 1",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "Street 1 fill correctly",
//     },
//   },
//   billStreetTwo: {
//     value: "",
//     label: "Street 2",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "Street 2 fill correctly",
//     },
//   },
//   billCity: {
//     value: "",
//     label: "City",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/.{1,}/ig,
//       error: "City fill correctly",
//     },
//   },
//   billState: {
//     value: "",
//     label: "State",
//     min: 0,
//     max: 32,
//     required: false,
//     validator: {
//       regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
//       error: "State fill correctly",
//     },
//   },
//   billZip: {
//     value: "",
//     label: "Zip Code",
//     min: 0,
//     max: 10,
//     required: false,
//     validator: {
//       regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
//       error: "Zip fill correctly",
//     },
//   },
// };

const FORM_DATA_PROFILE = {
  firstName: {
    value: "",
    label: "First Name",
    min: 1,
    max: 36,
    required: true,
    // validator: {
    //   regEx: /^[a-z\sA-Z0-9\W\w]+$/,
    //   error: "Username fill correctly",
    // },
  },
  lastName: {
    value: "",
    label: "Last Name",
    min: 1,
    max: 36,
    required: true,
    // validator: {
    //   regEx: /^[a-z\sA-Z0-9\W\w]+$/,
    //   error: "Username fill correctly",
    // },
  },
  email: {
    value: "",
    label: "Email",
    min: 6,
    max: 36,
    required: true,
    // validator: {
    //   regEx: emailRegEx,
    //   error: "Email fill correctly",
    // },
  },
  password: {
    value: "",
    label: "Password",
    min: 8,
    max: 256,
    required: true,
    // validator: {
    //   regEx: /^[a-z\sA-Z0-9\W\w]+$/,
    //   error: "Password fill correctly",
    // },
  },
  phone: {
    value: "",
    label: "Phone Number",
    min: 9,
    max: 15,
    required: true,
    // validator: {
    //   regEx: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
    //   error: "Phone number fill correctly",
    // },
  },
  shipStreetOne: {
    value: "",
    label: "Street 1",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "Street 1 fill correctly",
    // },
  },
  shipStreetTwo: {
    value: "",
    label: "Street 2",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "Street 2 fill correctly",
    // },
  },
  shipCity: {
    value: "",
    label: "City",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "City fill correctly",
    // },
  },
  shipState: {
    value: "",
    label: "State",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
    //   error: "State fill correctly",
    // },
  },
  shipZip: {
    value: "",
    label: "Zip Code",
    min: 0,
    max: 10,
    required: false,
    // validator: {
    //   regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
    //   error: "Zip fill correctly",
    // },
  },
  billStreetOne: {
    value: "",
    label: "Street 1",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "Street 1 fill correctly",
    // },
  },
  billStreetTwo: {
    value: "",
    label: "Street 2",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "Street 2 fill correctly",
    // },
  },
  billCity: {
    value: "",
    label: "City",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/.{1,}/ig,
    //   error: "City fill correctly",
    // },
  },
  billState: {
    value: "",
    label: "State",
    min: 0,
    max: 32,
    required: false,
    // validator: {
    //   regEx:/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/gm,
    //   error: "State fill correctly",
    // },
  },
  billZip: {
    value: "",
    label: "Zip Code",
    min: 0,
    max: 10,
    required: false,
    // validator: {
    //   regEx:/(^\d{5}$)|(^\d{5}-\d{4}$)/,
    //   error: "Zip fill correctly",
    // },
  },
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserProfile() {

  const {currentUser, setCurrentUser} = useConsumer();
  const history = useHistory();

  const [ canEdit, setCanEdit ] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalInput, setModalInput] = useState("");

  
  const [stateFormData, setStateFormData] = useState(FORM_DATA_PROFILE);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  useEffect(() => {
    if (currentUser.addressShipping == null) {
      currentUser.addressShipping = {
        "street1":  "",
        "street2": "",
        "city":  "",
        "stateAbv":  "",
        "zipCode":  "",
      };
    }

    if (currentUser.addressBilling == null) {
      currentUser.addressBilling = {
        "street1":  "",
        "street2": "",
        "city":  "",
        "stateAbv":  "",
        "zipCode":  "",
      };
    }

    setStateFormData({
      ...stateFormData,
      "firstName": {
        ...stateFormData["firstName"],
        value: currentUser.firstName || "",
      },
      "lastName": {
        ...stateFormData["lastName"],
        value: currentUser.lastName || "",
      },
      "email": {
        ...stateFormData["email"],
        value: currentUser.email || "",
      },
      "password": {
        ...stateFormData["password"],
        value: currentUser.password || "",
      },
      "phone": {
        ...stateFormData["phone"],
        value: currentUser.phoneNumber || "",
      },
      "shipStreetOne": {
        ...stateFormData["shipStreetOne"],
        value: currentUser.addressShipping.street1 || "",
      },
      "shipStreetTwo": {
        ...stateFormData["shipStreetTwo"],
        value: currentUser.addressShipping.street2 || "",
      },
      "shipCity": {
        ...stateFormData["shipCity"],
        value: currentUser.addressShipping.city || "",
      },
      "shipState": {
        ...stateFormData["shipState"],
        value: currentUser.addressShipping.stateAbv || "",
      },
      "shipZip": {
        ...stateFormData["shipZip"],
        value: currentUser.addressShipping.zipCode || "",
      },
      "billStreetOne": {
        ...stateFormData["billStreetOne"],
        value: currentUser.addressBilling.street1 || "",
      },
      "billStreetTwo": {
        ...stateFormData["billStreetTwo"],
        value: currentUser.addressBilling.street2 || "",
      },
      "billCity": {
        ...stateFormData["billCity"],
        value: currentUser.addressBilling.city || "",
      },
      "billState": {
        ...stateFormData["billState"],
        value: currentUser.addressBilling.stateAbv || "",
      },
      "billZip": {
        ...stateFormData["billZip"],
        value: currentUser.addressBilling.zipCode || "",
      },
    });
  }, []);

  const handleEnableEdit = (e) => {
    e.preventDefault();
    
    if (validatePassword(modalInput, currentUser.password)) {
      setOpenModal(false);
      setCanEdit(true);
      setStateFormData({
        ...stateFormData,
        "password": {
          ...stateFormData["password"],
          value: modalInput,
        },
      });
      setModalInput('');
    } else {
      alert("Incorrect password. Please try again.");
      setModalInput('');
    }
    
  };

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
    let reqBody = {};
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      let addressShippingData = {
        "street1": data.shipStreetOne.value || "",
        "street2": data.shipStreetTwo.value || "",
        "city": data.shipCity.value || "",
        "stateAbv": data.shipState.value || "",
        "zipCode": data.shipZip.value || "",
      };

      let addressBillingData = {
        "street1": data.billStreetOne.value || "",
        "street2": data.billStreetTwo.value || "",
        "city": data.billCity.value || "",
        "stateAbv": data.billState.value || "",
        "zipCode": data.billZip.value || "",
      };
      reqBody.firstName = data.firstName.value || "" ;
      reqBody.lastName = data.lastName.value || "" ;
      reqBody.email = data.email.value || "" ;
      reqBody.password = data.password.value || "" ;
      reqBody.phoneNumber = data.phone.value || "" ;
      reqBody.addressShipping = addressShippingData;
      reqBody.addressBilling = addressBillingData;


      const isValid = validationHandler(stateFormData);

      if (isValid) {
        // addCustomer.mutate(data)

        let returnData = await api.updateCustomer(reqBody, currentUser.id);

        setCurrentUser(returnData);
        setCanEdit(false);
        
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
          hint: `Max ${states[input].label} length ${states[input].max}`,
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
              hint: `Max ${field.label} length ${field.max}`,
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
    console.log("MEOW", stateFormError)
    return isValid;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    history.push("/")
  };

  return (
    <>
    <C.Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <C.Box sx={modalStyle}>
          <h6>Enter your password:</h6>
          <form onSubmit={handleEnableEdit}>
          <C.TextField id="modal-password" type="password" color="text" label="Password" variant="outlined" name="modal-password" value={modalInput} onChange={(e) => setModalInput(e.currentTarget.value)}  />
          <C.Button className="submitBtn" variant="contained" color="success" onClick={handleEnableEdit} >Submit</C.Button>
          </form>
        </ C.Box>
      </C.Modal>
    <Header />
    <div className="profile-wrapper">
      <h2 className="profile-form-title">Customer Information</h2>
      <form className="profile-form" onSubmit={handleFormSubmit}>
        <div className="submit-btn-wrapper">
        {canEdit ?
        <C.Button className="submitBtn" variant="contained" color="success" onClick={handleFormSubmit} >Update Information</C.Button>
        : <C.Button className="submitBtn" variant="outlined" color="primary" onClick={() => setOpenModal(true)} >Edit Information</C.Button>
        }
        </div>
        <div className="form-group">
        <C.TextField id="up-first-name" InputProps={{ readOnly: canEdit?false:true }} color="text" label="First Name" variant="outlined" name="firstName" onChange={handleChange} value={stateFormData.firstName.value} />

        <C.TextField id="up-last-name" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Last Name" variant="outlined" name="lastName" onChange={handleChange} value={stateFormData.lastName.value} />
        </div>
        <div className="form-group">
        <C.TextField id="up-email" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Email" variant="outlined" name="email" onChange={handleChange} value={stateFormData.email.value} />

        <C.TextField id="up-password" type="password" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Password" variant="outlined" name="password" onChange={handleChange} value={stateFormData.password.value} />
        </div>
        <div className="form-group">
        <C.TextField id="up-phone" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Phone" variant="outlined" name="phone" onChange={handleChange} value={stateFormData.phone.value} />
        {/* HIDDEN PASSWORD CONFIRM HERE */}
        </div>
        <h5 className="profile-form-address">Shipping Address</h5>
        <div>
          <div className="form-group">
          <C.TextField id="up-ship-street-one" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Street 1" variant="outlined" name="shipStreetOne" onChange={handleChange} value={stateFormData.shipStreetOne.value} />
          <C.TextField id="up-ship-street-two" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Street 2" variant="outlined" name="shipStreetTwo" onChange={handleChange} value={stateFormData.shipStreetTwo.value} />
          </div>
          <div className="form-group">
          <C.TextField id="up-ship-city" InputProps={{ readOnly: canEdit?false:true }} color="text" label="City" variant="outlined" name="shipCity" onChange={handleChange} value={stateFormData.shipCity.value} />
          <C.TextField  className="smaller-input-state" id="up-ship-state" InputProps={{ readOnly: canEdit?false:true }} color="text" label="State" variant="outlined" name="shipState" onChange={handleChange} value={stateFormData.shipState.value} />
          <C.TextField className="smaller-input-zip" id="up-ship-zip" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Zip Code" variant="outlined" name="shipZip" onChange={handleChange} value={stateFormData.shipZip.value} />
          </div>
        </div>

        <h5 className="profile-form-address">Billing Address</h5>
        <div>
          <div className="form-group">
          <C.TextField id="up-bill-street-one" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Street 1" variant="outlined" name="billStreetOne" onChange={handleChange} value={stateFormData.billStreetOne.value} />
          <C.TextField id="up-bill-street-two" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Street 2" variant="outlined" name="billStreetTwo" onChange={handleChange} value={stateFormData.billStreetTwo.value} />
          </div>
          <div className="form-group">
          <C.TextField id="up-bill-city" InputProps={{ readOnly: canEdit?false:true }} color="text" label="City" variant="outlined" name="billCity" onChange={handleChange} value={stateFormData.billCity.value} />
          <C.TextField className="smaller-input-state" id="up-bill-state" InputProps={{ readOnly: canEdit?false:true }} color="text" label="State" variant="outlined" name="billState" onChange={handleChange} value={stateFormData.billState.value} />
          <C.TextField className="smaller-input-zip" id="up-bill-zip" InputProps={{ readOnly: canEdit?false:true }} color="text" label="Zip Code" variant="outlined" name="billZip" onChange={handleChange} value={stateFormData.billZip.value} />
          </div>
        </div>
        <div className="submit-btn-wrapper">
        {canEdit ?
        <C.Button className="submitBtn" variant="contained" color="success" onClick={handleFormSubmit} >Update Information</C.Button>
        : <C.Button className="submitBtn" variant="outlined" color="primary" onClick={() => setOpenModal(true)} >Edit Information</C.Button>
        }
        </div>

      </form>
      <div className="logout-btn-wrapper" >
        <button className="logoutBtn" onClick={handleLogout} >Log Out of Account</button>    
      </div>
    </div>
    <Footer />
    </>
  )
};