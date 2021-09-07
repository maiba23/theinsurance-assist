// import axios from "axios";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
// import validator from "validator";
import { FormInput, Input, Button } from "../components/shared/FormControl";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "../context/store";
import * as Actions from "../context/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GetPolicy = () => {
  // let history = useHistory();
  const dispatch = useDispatch();

  const [birth, setBirth] = useState(null);
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
      gender: "male",
      ciga: true,
    }
  );

  const {
    firstname,
    lastname,
    phone,
    email,
    zipcode,
    city,
    cstate,
    error,
    gender,
    ciga,
  } = state;

  useEffect(() => {
    dispatch(Actions.setConfirm(false));
  }, []);
  // const profileChanged = useCallback((e) => {
  //   e.preventDefault();
  //   setState({ [e.target.name]: e.target.value });
  // }, []);

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

  let yesCls = "toggle-btn ";
  let noCls = "toggle-btn ";
  if (ciga === true) {
    yesCls += "active";
  } else if (ciga === false) noCls += "active";
  const handleYes = useCallback((e) => {
    e.preventDefault();
    setState({ ciga: true });
  }, []);
  const handleNo = useCallback((e) => {
    e.preventDefault();
    setState({ ciga: false });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <SectionContainer clsName="bg-blue">
        <div className="content-width-extra-large page-title about-title">
          <h2 className="custom-heading" data-aos="zoom-in">
            Get your personalized term life insurance quote
          </h2>
          <div className="large-text" data-aos="zoom-in">
            If you need permanent life insurance (Whole life insurance ,
            Universal or other),
            <br /> please{" "}
            <a className="click-here" href="#">
              Click here
            </a>
          </div>
        </div>

        <form className="form" data-aos="flip-up">
          <FormContainer clsName="review">
            <label className="form-label">What is your gender?</label>
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
            <label className="form-label">
              Do you currently use nicotine products?
            </label>
            <label className="form-label">(Tobacco, cigaettes, etc.)</label>
            <div className="btn-group">
              <button className={yesCls} onClick={handleYes}>
                Yes
              </button>
              <button className={noCls} onClick={handleNo}>
                No
              </button>
            </div>
            <label className="form-label">
              What is your annual income? (We need that information to give you
              more accurate quote calculation)
            </label>
            <FormInput type="text" name="income" value="" />
            <Button className="btn-meeting" onClick={handleSubmit}>
              <p>Get a quote</p>
            </Button>
          </FormContainer>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
