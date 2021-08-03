import React, { useCallback, useReducer, useState } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import {
  FormInput,
  FormRadio,
  FormSelect,
} from "../components/shared/FormControl";
import { Link } from "react-router-dom";
import { IconCalendar } from "../utils/imgLoader";

const states = {
  AA: "State",
  AF: "Afghanistan",
  AX: "Åland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
};

const radioValues = [
  {
    value: "Yes",
    name: "Yes",
  },
  {
    value: "No",
    name: "No",
  },
  {
    value: "I'm not sure",
    name: "I'm not sure",
  },
];
const GetPolicy = () => {
  const [selectedOption, setOption] = useState("Yes");
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      address: "",
      apt: "",
      zipcode: "",
      city: "",
      cstate: "",
    }
  );

  const {
    firstname,
    lastname,
    phone,
    email,
    address,
    apt,
    zipcode,
    city,
    cstate,
  } = state;

  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
  }, []);
  const radioChanged = (e) => {
    setOption(e.target.value);
  };
  return (
    <Layout>
      <SectionContainer clsName="bg-blue">
        <div className="content-width-extra-large page-title about-title">
          <h2 className="custom-heading" data-aos="zoom-in">
            The easiest way to review your insurance policies is to talk to an
            agent.
          </h2>
          <div className="large-text" data-aos="zoom-in">
            Let's get you together with an experienced professional.
            <br />
            Just provide us a little bit of information about yourself and
            schedule an online meeting.
          </div>
        </div>
        <form className="form" data-aos="flip-up">
          <FormContainer clsName="review">
            <label className="form-label">What’s your name?</label>
            <FormInput
              type="text"
              name="firstname"
              value={firstname}
              onChange={profileChanged}
              placeholder="First Name"
            />
            <FormInput
              type="text"
              name="lastname"
              value={lastname}
              onChange={profileChanged}
              placeholder="Last Name"
            />
            <label className="form-label">Your contact details</label>
            <FormInput
              type="tel"
              name="phone"
              value={phone}
              onChange={profileChanged}
              placeholder="Phone number"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={profileChanged}
              placeholder="Email address"
            />
            <label className="form-label">Where do you live?</label>
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
              name="state"
              value={cstate}
              values={states}
              onChange={profileChanged}
              placeholder="State"
            />
            <label className="form-label">Do you have life insurance?</label>
            {radioValues.map((item, idx) => (
              <FormRadio
                key={idx}
                value={item.value}
                name={item.name}
                checked={selectedOption === item.value}
                onChange={radioChanged}
              />
            ))}
          </FormContainer>
          <div className="schedule-meeting">
            <Link to="/book" className="btn-meeting">
              <img src={IconCalendar} alt="calendear icon" />
              <p>Schedule a meeting</p>
            </Link>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
