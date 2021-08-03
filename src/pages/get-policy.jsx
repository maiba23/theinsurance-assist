import React, { useCallback, useState, useReducer, useEffect } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import {
  FormInput,
  FormSelect,
  FormTextarea,
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

const GetPolicy = () => {
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
      question: "",
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
    question,
  } = state;

  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
  }, []);
  return (
    <Layout>
      <SectionContainer>
        <div className="content-width-extra-large page-title about-title">
          <h2 data-aos="fade-in" data-aos-delay="400">
            Permanent life insurance
          </h2>
          <div className="large-text" data-aos="fade-in" data-aos-delay="400">
            Permanent life insurance covers you for the rest of your life and
            pays out regardless of when you die, as long as you've paid your
            premiums. To find the best policy to fit your needs, we advise you
            to get in touch with an experienced professional.
            <br /> Please provide us a little bit of information about yourself
            and schedule an online meeting.
          </div>
        </div>
        <form className="form">
          <FormContainer labelName="What’s your name?">
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
            <span className="gray">
              Please use your full legal as it appears on your driver's license
            </span>
          </FormContainer>
          <FormContainer labelName="Your contact details">
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
                name="zipCode"
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
          </FormContainer>
          <FormContainer labelName="Your contact details">
            <FormTextarea
              type="text"
              name="question"
              value={question}
              onChange={profileChanged}
              placeholder="Write your message here..."
            />
          </FormContainer>
          <div className="schedule-meeting">
            <Link to="/book" className="btn-meeting">
              <img src={IconCalendar} />
              <p>Schedule a meeting</p>
            </Link>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
