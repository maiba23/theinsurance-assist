import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import {
  FormInput,
  FormTextarea,
  Input,
  Button,
} from "../components/shared/FormControl";
import { IconCalendar } from "../utils/imgLoader";
import states from "../utils/states.json";
import { useDispatch } from "../context/store";
import * as Actions from "../context/actions";
import ReactPixel from "react-facebook-pixel";
import validator from "validator";
import { useHistory } from "react-router-dom";

const endPoint = process.env.REACT_APP_USERS_SERVER_URL + "user/add";

const GetPolicy = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(Actions.setConfirm(false));

    const fetch = async () => {
      const endPoint = "https://ipinfo.io/json";
      const token = "74fd336dab8d88";

      try {
        const res = await axios.get(endPoint, { params: { token } });
        const country = Object.keys(states)
          .filter((key) => key === res.data?.country)
          .reduce((obj, key) => {
            obj[key] = states[key];
            return obj[key];
          }, {});
        console.log(res.data);
        setState({
          zipcode: res.data?.postal,
          city: res.data?.city,
          cstate: country,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [dispatch]);

  const setUser = (user_id) => {
    dispatch(Actions.setUserId(user_id));
  };
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: "",
      lastname: "",
      phone: "",
      email: { value: "", error: "" },
      zipcode: "",
      cstate: "",
      city: "",
      question: "",
      error: "",
    }
  );
  const {
    firstname,
    lastname,
    phone,
    email,
    zipcode,
    cstate,
    city,
    question,
    error,
  } = state;

  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
  }, []);

  const handleEmailChange = useCallback((e) => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "invalid email address",
      },
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    ReactPixel.fbq("trackCustom", "Schedule");
    const params = {
      source: "Star Website Form",
      subject: "test",
      existing_li_id: "Other",
      referrer: "Yellow",
      gender: "male",
      password:
        "6d1e785fd1409bb21de1f617a3d19e4857b26b64a28177d8b81b018158b3cd80",
      dob: "09-02-1995",
      annual_income: 250000,
      selected_product: "Whole Life",
      coverage: 10000,
      affiliate_id: "7",
      status: "Potential",
      policy_type_purchase: "test",
      date_of_purchase: "05-05-2020",
      street_address_one: "Ben Gurion Rd 1",
      street_address_two: "Ben Gurion Rd 2",
      first_name: firstname,
      last_name: lastname,
      full_name: firstname + " " + lastname,
      email: email.value,
      phone_number: phone,
      city: city,
      state: cstate,
      zipcode: zipcode,
    };
    try {
      await axios.post(endPoint, params).then((res) => {
        // console.log(res.data?.user_id);
        setUser(res.data?.user_id);
      });
      history.push("/book");
    } catch (error) {
      console.log(error.response.data.error);
      setState({ error: error.response.data.error });
    }
  };
  return (
    <Layout>
      <SectionContainer>
        <div className="content-width-extra-large page-title about-title">
          <h2 data-aos="zoom-in">Permanent life insurance</h2>
          <div className="large-text" data-aos="zoom-in">
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
            <Input
              type="email"
              name="email"
              value={email.value}
              onChange={handleEmailChange}
              placeholder="Email address"
              error={email.error}
            />
          </FormContainer>
          <FormContainer labelName="What is your Zip Code?">
            <FormInput
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={profileChanged}
              placeholder="Zip code"
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
            <Button className="btn-meeting" onClick={handleSubmit}>
              <img src={IconCalendar} alt="calendar icon" />
              <p>Schedule a meeting</p>
            </Button>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
