import axios from "axios";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import validator from "validator";
import {
  FormInput,
  FormRadio,
  Input,
  Button,
} from "../components/shared/FormControl";
import { useHistory } from "react-router-dom";
import { IconCalendar } from "../utils/imgLoader";
import states from "../utils/states.json";
import { useDispatch } from "../context/store";
import * as Actions from "../context/actions";
import ReactPixel from "react-facebook-pixel";

const endPoint = process.env.REACT_APP_USERS_SERVER_URL + "user/add";
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
  let history = useHistory();
  const dispatch = useDispatch();
  const setUser = (user_id) => {
    dispatch(Actions.setUserId(user_id));
  };
  const [selectedOption, setOption] = useState("Yes");
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: "",
      lastname: "",
      phone: "",
      email: { value: "", error: "" },
      zipcode: "",
      city: "",
      cstate: "",
      error: "",
    }
  );

  const { firstname, lastname, phone, email, zipcode, city, cstate, error } =
    state;

  const handleEmailChange = useCallback((e) => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "invalid email address",
      },
    });
  }, []);

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
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [dispatch]);
  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
  }, []);

  const radioChanged = (e) => {
    setOption(e.target.value);
  };

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
      first_name: firstname,
      last_name: lastname,
      full_name: firstname + " " + lastname,
      email: email.value,
      phone_number: phone,
      street_address_one: "Ben Gurion Rd 2",
      street_address_two: "",
      city: city,
      state: cstate,
      zipcode: zipcode,
    };
    try {
      await axios.post(endPoint, params).then((res) => {
        console.log(res.data?.user_id);
        setUser(res.data?.user_id);
      });
      history.push("/book");
    } catch (error) {
      console.log(error.response.data.error);
      setState({ error: error.response.data.error });
    }
  };
  const enable = !email.error;

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
            {error && <div className="error-msg">{error}</div>}
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
            <Input
              type="email"
              name="email"
              value={email.value}
              onChange={handleEmailChange}
              placeholder="Email address"
              error={email.error}
            />
            <label className="form-label">What is your Zip Code?</label>
            <FormInput
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={profileChanged}
              placeholder="Zip code"
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
            <Button
              className="btn-meeting"
              onClick={handleSubmit}
              disabled={!enable}
            >
              <img src={IconCalendar} alt="calendear icon" />
              <p>Schedule a meeting</p>
            </Button>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
