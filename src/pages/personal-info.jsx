// import axios from "axios";
import React, { useCallback, useState, useReducer } from "react";
import Layout from "../Layout/InfoLayout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import {
  FormInput,
  FormSelect,
  Input,
  Button,
  CheckBox,
} from "../components/shared/FormControl";
import states from "../utils/states.json";
// import { useDispatch } from "../context/store";
// import * as Actions from "../context/actions";
import validator from "validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const GetPolicy = () => {
  // const dispatch = useDispatch();
  const [birth, setBirth] = useState(null);

  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: "",
      middlename: "",
      lastname: "",
      phone: "",
      email: { value: "", error: "" },
      zipcode: "",
      cstate: "",
      city: "",
      question: "",
      error: "",
      address: "",
      apt: "",
      agree: false,
      gender: "male",
    }
  );
  const {
    firstname,
    middlename,
    lastname,
    phone,
    email,
    zipcode,
    cstate,
    city,
    agree,
    address,
    apt,
    gender,
    error,
  } = state;

  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value.toLowerCase() });
  }, []);

  const handleEmailChange = useCallback((e) => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "invalid email address",
      },
    });
  }, []);

  const handleAgreeTerms = useCallback((e) => {
    setState({ agree: !agree });
  }, []);

  let maleCls = "toggle-btn ";
  let femaleCls = "toggle-btn ";
  if (gender === "male") {
    maleCls += "active";
  } else if (gender === "female") femaleCls += "active";

  const handleMale = useCallback((e) => {
    e.preventDefault();
    setState({ gender: e.target.innerHTML.toLowerCase() });
  }, []);
  const handleFemale = useCallback((e) => {
    e.preventDefault();
    setState({ gender: e.target.innerHTML.toLowerCase() });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <SectionContainer>
        <form className="form">
          <p className="step-show">Step 1 of 3</p>
          <h2 data-aos="zoom-in">Personal info</h2>
          <FormContainer labelName="What’s your name?">
            {error && <div className="error-msg">{error}</div>}
            <FormInput
              type="text"
              name="firstname"
              value={firstname}
              onChange={profileChanged}
              placeholder="First Name"
            />
            <FormInput
              type="text"
              name="middlename"
              value={middlename}
              onChange={profileChanged}
              placeholder="Middle Name"
            />
            <FormInput
              type="text"
              name="lastname"
              value={lastname}
              onChange={profileChanged}
              placeholder="Last Name"
            />
            <span className="gray">
              Please use your full legal as it appears on your driver's license
            </span>
          </FormContainer>
          <FormContainer labelName="Where do you live?">
            <FormInput
              type="text"
              name="address"
              value={address}
              onChange={profileChanged}
              placeholder="Street address"
            />
            <div className="dflex">
              <FormInput
                type="text"
                name="apt"
                value={apt}
                onChange={profileChanged}
                placeholder="Apt/Suite"
              />
              <FormInput
                type="text"
                name="zipcode"
                value={zipcode}
                onChange={profileChanged}
                placeholder="Zip code"
              />
            </div>
            <FormInput
              type="text"
              name="city"
              value={city}
              onChange={profileChanged}
              placeholder="City"
            />
            <FormSelect
              type="text"
              name="cstate"
              value={cstate}
              values={states}
              onChange={profileChanged}
              placeholder="State"
            />
          </FormContainer>
          <FormContainer labelName="Your contact details">
            <FormInput
              type="tel"
              name="phone"
              value={phone}
              onChange={profileChanged}
              placeholder="Phone number"
            />
            <Input
              type="email"
              name="email"
              value={email.value}
              onChange={handleEmailChange}
              placeholder="Email address"
              error={email.error}
            />
          </FormContainer>
          <FormContainer labelName="What is your gender?">
            <div className="btn-group">
              <button className={maleCls} onClick={handleMale}>
                Male
              </button>
              <button className={femaleCls} onClick={handleFemale}>
                Female
              </button>
            </div>
            <label className="form-label">What is your birth date?</label>
            <DatePicker
              dateFormat="MM/dd/yyyy"
              selected={birth}
              onChange={(date) => setBirth(date)}
              placeholderText="mm/dd/yyyy"
            />
          </FormContainer>
          <div className="schedule-meeting">
            <div>
              <CheckBox
                id="agree"
                name="agree"
                type="checkbox"
                value={agree}
                onChange={handleAgreeTerms}
              >
                I agree to the{" "}
                <Link to="/terms" className="click-here">
                  Terms of use
                </Link>
              </CheckBox>
              <Button className="btn-meeting" onClick={handleSubmit}>
                <p>Next</p>
              </Button>
            </div>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
