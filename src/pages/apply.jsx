// import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
// import validator from "validator";
import { Button } from "../components/shared/FormControl";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "../context/store";
import * as Actions from "../context/actions";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { numberWithCommas } from "../utils";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const costs = [
  {
    value: 0,
  },
  {
    value: 30,
  },
  {
    value: 60,
  },
  {
    value: 90,
  },
  {
    value: 120,
  },
];
const amounts = [
  {
    value: 200000,
  },
  {
    value: 250000,
  },
  {
    value: 300000,
  },
  {
    value: 350000,
  },
  {
    value: 400000,
  },
];
const years = [
  {
    value: 0,
  },
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
];

const IOSSlider = withStyles({
  root: {
    color: "#008EB1",
    height: 4,
    padding: "15px 0",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#008EB1",
    boxShadow: iOSBoxShadow,
    marginTop: -8,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 4,
  },
  rail: {
    height: 4,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 10,
    width: 4,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const GetPolicy = () => {
  // let history = useHistory();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(200000);
  const [year, setYear] = useState(0);

  const handleCost = (e, newValue) => {
    setCost(newValue);
  };
  const handleAmount = (e, newValue) => {
    setAmount(newValue);
  };
  const handleYear = (e, newValue) => {
    setYear(newValue);
  };

  // const [state, setState] = useReducer(
  //   (old, action) => ({ ...old, ...action }),
  //   {
  //     firstname: "",
  //     lastname: "",
  //     phone: "",
  //     email: { value: "", error: "" },
  //     zipcode: "",
  //     city: "",
  //     cstate: "",
  //     error: "",
  //   }
  // );

  // const { firstname, lastname, phone, email, zipcode, city, cstate, error } =
  //   state;

  // const handleEmailChange = useCallback((e) => {
  //   setState({
  //     email: {
  //       value: e.target.value,
  //       error: validator.isEmail(e.target.value) ? "" : "invalid email address",
  //     },
  //   });
  // }, []);

  useEffect(() => {
    dispatch(Actions.setConfirm(false));
  }, []);
  // const profileChanged = useCallback((e) => {
  //   e.preventDefault();
  //   setState({ [e.target.name]: e.target.value });
  // }, []);

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
            <a className="click-here" href="/">
              Click here
            </a>
          </div>
        </div>
        <div className="d-flex">
          <form className="form" data-aos="flip-up">
            <FormContainer clsName="review">
              <h5>Estimated monthly rate for policy</h5>
              <label className="form-label">Estimated monthly cost</label>
              <span className="show-cost">${cost}</span>
              <IOSSlider
                aria-label="ios slider"
                value={cost}
                marks={costs}
                aria-labelledby="discrete-slider"
                step={30}
                valueLabelDisplay="off"
                min={0}
                max={120}
                onChange={handleCost}
              />
              <label className="form-label">Coverage amount</label>
              <span className="show-cost">${numberWithCommas(amount)}</span>
              <IOSSlider
                aria-label="ios slider"
                value={amount}
                marks={amounts}
                aria-labelledby="discrete-slider"
                step={50000}
                valueLabelDisplay="off"
                min={200000}
                max={400000}
                onChange={handleAmount}
              />
              <label className="form-label">Term length</label>
              <span className="show-cost">{year} Years</span>
              <IOSSlider
                aria-label="ios slider"
                value={year}
                marks={years}
                aria-labelledby="discrete-slider"
                step={10}
                valueLabelDisplay="off"
                min={0}
                max={40}
                onChange={handleYear}
              />
              <Button className="btn-meeting" onClick={handleSubmit}>
                <p>Apply Now</p>
              </Button>
            </FormContainer>
          </form>
          <div className="right-part">
            <h5>What do people like me do?</h5>
            <p>
              Based3n the info you provided, we've found customers like you get
              coverage for 20 years. Update your price estimate to this coverage
              and term?
            </p>
            <button className="like-me">Yes</button>
            <div className="d-flex" style={{ marginBottom: "24px" }}>
              <h5>Your answers</h5>
              &nbsp;&nbsp;&nbsp;
              <a className="click-here" href="/">
                Edit
              </a>
            </div>
            <div className="d-flex">
              <div className="questions">
                <p className="question">Your gender?</p>
                <p className="question">Your birth date</p>
                <p className="question">Nicotine products using</p>
                <p className="question">Annual income</p>
              </div>
              <div className="answers">
                <p className="answer">Female</p>
                <p className="answer">09/02/1990</p>
                <p className="answer">No</p>
                <p className="answer">100000$</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
