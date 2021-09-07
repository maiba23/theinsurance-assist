import axios from "axios";
import React, { useCallback, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormContainer from "../../Layout/FormContainer";
import { Button, FormInput, Input } from "../shared/FormControl";
import ReactPixel from "react-facebook-pixel";
import validator from "validator";

const endPoint = process.env.REACT_APP_USERS_SERVER_URL + "user/add";

const ContactForm = () => {
  let history = useHistory();
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: { value: "", error: "" },
      lastname: { value: "", error: "" },
      phone: { value: "", error: "" },
      email: { value: "", error: "" },
      zipcode: "",
      error: "",
    }
  );
  const { firstname, lastname, phone, email, zipcode, error } = state;
  const enable =
    !email.error && !firstname.error && !lastname.error && !phone.error;

  const handleFnameChange = React.useCallback((e) => {
    setState({
      firstname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "length must be at least 3",
      },
    });
  }, []);

  const handleLnameChange = React.useCallback((e) => {
    setState({
      lastname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "length must be at least 3",
      },
    });
  }, []);

  const handleEmailChange = useCallback((e) => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "invalid email address",
      },
    });
  }, []);

  const handlePhoneChange = React.useCallback((e) => {
    setState({
      phone: {
        value: e.target.value,
        error:
          e.target.value.length === 0 || validator.isMobilePhone(e.target.value)
            ? ""
            : "invalid phone",
      },
    });
  }, []);

  const zipcodeChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      first_name: firstname.value,
      last_name: lastname.value,
      email: email.value,
      phone_number: phone.value,
      zipcode: zipcode,
    };
    try {
      await axios.post(endPoint, params).then((res) => console.log(res.data));
      history.push("/");
    } catch (error) {
      console.log(error.response.data.error);
      setState({ error: error.response.data.error });
    }
  };

  useEffect(() => {
    ReactPixel.fbq("trackCustom", "Contact Us");
  }, []);
  return (
    <section>
      <form className="form" data-aos="flip-up">
        <FormContainer clsName="review">
          <label className="form-label">
            Enter your details and we’ll get back to you:
          </label>
          {error && <div className="error-msg">{error}</div>}
          <Input
            type="text"
            name="firstname"
            value={firstname.value}
            onChange={handleFnameChange}
            placeholder="First Name"
            error={firstname.error}
          />
          <Input
            type="text"
            name="lastname"
            value={lastname.value}
            onChange={handleLnameChange}
            placeholder="Last Name"
            error={lastname.error}
          />
          <Input
            type="tel"
            name="phone"
            value={phone.value}
            onChange={handlePhoneChange}
            placeholder="Phone number"
            error={phone.error}
          />
          <Input
            type="email"
            name="email"
            value={email.value}
            onChange={handleEmailChange}
            placeholder="Email address"
            error={email.error}
          />
          <FormInput
            type="text"
            name="zipcode"
            value={zipcode}
            onChange={zipcodeChanged}
            placeholder="Zip code"
          />
        </FormContainer>
        <div className="schedule-meeting">
          <Button
            className="btn-meeting"
            onClick={handleSubmit}
            disabled={!enable}
          >
            Send it!
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
