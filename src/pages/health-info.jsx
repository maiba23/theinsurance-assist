// import axios from "axios";
import React, { useCallback, useState, useReducer } from "react";
import Layout from "../Layout/InfoLayout";
import SectionContainer from "../Layout/SectionContainer";
import FormContainer from "../Layout/FormContainer";
import {
  FormInput,
  FormSelect,
  Button,
  CheckBox,
} from "../components/shared/FormControl";
import heights from "../utils/heights.json";
import weights from "../utils/weights.json";
// import { useDispatch } from "../context/store";
// import * as Actions from "../context/actions";
// import validator from "validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const GetPolicy = () => {
  // const dispatch = useDispatch();
  const [birth, setBirth] = useState(null);

  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      height: "",
      weight: "",
      lost: false,
      weight_los: "",
      ciga_used: false,
      virus: false,
      payment: false,
      outstand: true,
      covid: false,
    }
  );
  const {
    height,
    weight,
    lost,
    weight_los,
    ciga_used,
    virus,
    payment,
    outstand,
    covid,
  } = state;

  const profileChanged = useCallback((e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value.toLowerCase() });
  }, []);

  let yesCls,
    noCls,
    cigaYes,
    cigaNo,
    virusYes,
    virusNo,
    paymentYes,
    paymentNo,
    outstandYes,
    outstandNo,
    covidYes,
    covidNo;

  yesCls =
    noCls =
    cigaYes =
    cigaNo =
    virusYes =
    virusNo =
    paymentYes =
    paymentNo =
    outstandNo =
    outstandYes =
    covidYes =
    covidNo =
      "toggle-btn ";

  if (lost === true) {
    yesCls += "active";
  } else if (lost === false) noCls += "active";
  if (ciga_used === true) {
    cigaYes += "active";
  } else if (ciga_used === false) cigaNo += "active";
  if (virus === true) {
    virusYes += "active";
  } else if (virus === false) virusNo += "active";
  if (payment === true) {
    paymentYes += "active";
  } else if (payment === false) paymentNo += "active";
  if (outstand === true) {
    outstandYes += "active";
  } else if (outstand === false) outstandNo += "active";
  if (covid === true) {
    covidYes += "active";
  } else if (covid === false) covidNo += "active";

  const handleYes = useCallback((e) => {
    e.preventDefault();
    setState({ lost: true });
  }, []);
  const handleNo = useCallback((e) => {
    e.preventDefault();
    setState({ lost: false });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <SectionContainer>
        <form className="form">
          <p className="step-show">Step 2 of 3</p>
          <h2 data-aos="zoom-in">Health info</h2>

          <FormContainer>
            <label className="form-label">Your height?</label>
            <FormSelect
              type="text"
              name="height"
              value={height}
              values={heights}
              onChange={profileChanged}
              placeholder="Height"
            />
            <label className="form-label">Your weight?</label>
            <FormSelect
              type="text"
              name="weight"
              value={weight}
              values={weights}
              onChange={profileChanged}
              placeholder="Weight"
            />
          </FormContainer>

          <FormContainer labelName="In the past 6 months, have you lost more than 10 pounds?">
            <div className="btn-group">
              <button className={yesCls} onClick={handleYes}>
                Yes
              </button>
              <button className={noCls} onClick={handleNo}>
                No
              </button>
            </div>
            <label className="form-label">
              How much weight have you lost in the past 6 months?
            </label>
            <FormInput
              type="text"
              name="weight_los"
              value={weight_los}
              onChange={profileChanged}
              placeholder="Weight lost (Ibs)"
            />
          </FormContainer>

          <FormContainer labelName="In the past 12 months, have you used cigarettes, E-cigarettes, pipes, vapor products, snuff, chewing tobacco, nicotine gum or nicotine patches?">
            <div className="btn-group">
              <button
                className={cigaYes}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ ciga_used: true });
                }}
              >
                Yes
              </button>
              <button
                className={cigaNo}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ ciga_used: false });
                }}
              >
                No
              </button>
            </div>
          </FormContainer>

          <FormContainer labelName="Have you ever tested positive for HIV through Western Blot Assay and ELISA at the direction of an insurance company or been medically diagnosed as having AIDS?">
            <div className="btn-group">
              <button
                className={virusYes}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ virus: true });
                }}
              >
                Yes
              </button>
              <button
                className={virusNo}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ virus: false });
                }}
              >
                No
              </button>
            </div>
          </FormContainer>

          <FormContainer labelName="In the past 12 months, have you received disability payments?">
            <div className="btn-group">
              <button
                className={paymentYes}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ payment: true });
                }}
              >
                Yes
              </button>
              <button
                className={paymentNo}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ payment: false });
                }}
              >
                No
              </button>
            </div>
            <label className="form-label">
              Why did you receive disability payments?
            </label>
            <label className="form-label">(Select all that apply)</label>
            <CheckBox type="checkbox">Maternity or paternity leave</CheckBox>
            <CheckBox type="checkbox">Worker's compensation</CheckBox>
            <CheckBox type="checkbox">Short Term Disability</CheckBox>
            <CheckBox type="checkbox">Long Term Disability</CheckBox>
            <CheckBox type="checkbox">
              Social Security Disability Income (SSDI){" "}
            </CheckBox>
            <CheckBox type="checkbox">
              Veterans Affairs Disability Income
            </CheckBox>
            <CheckBox type="checkbox">Other</CheckBox>
          </FormContainer>

          <FormContainer
            labelName=" In the past 12 months, has a medical professional advised you to
              have (Select all that apply)"
          >
            <CheckBox type="checkbox">Surgery</CheckBox>
            <CheckBox type="checkbox">
              Any test or procedure (other than for HIV)
            </CheckBox>
            <CheckBox type="checkbox">None of the above</CheckBox>
            <label className="form-label">
              Are the test or procedure results still outstanding?
            </label>
            <div className="btn-group">
              <button
                className={outstandYes}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ outstand: true });
                }}
              >
                Yes
              </button>
              <button
                className={outstandNo}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ outstand: false });
                }}
              >
                No
              </button>
            </div>
            <label className="form-label">
              What test or procedure results are still outstanding? (Select all
              that apply)
            </label>
            <CheckBox type="checkbox">Allergy testing</CheckBox>
            <CheckBox type="checkbox">Routine blood work</CheckBox>
            <CheckBox type="checkbox">Routine urine testing</CheckBox>
            <CheckBox type="checkbox">Routine pap smear</CheckBox>
            <CheckBox type="checkbox">Routine colonoscopy</CheckBox>
            <CheckBox type="checkbox">Routine mammogram</CheckBox>
            <CheckBox type="checkbox">Routine EKG</CheckBox>
            <CheckBox type="checkbox">Imaging for bone or joint</CheckBox>
            <CheckBox type="checkbox">Routine bone density</CheckBox>
            <CheckBox type="checkbox">Pregnancy or fertility related</CheckBox>
            <CheckBox type="checkbox">Vision or hearing </CheckBox>
            <CheckBox type="checkbox">Other</CheckBox>
          </FormContainer>

          <FormContainer
            labelName="In the past 10 years, have you been diagnosed or treated by a
              medical professional for: (Select all that apply)"
          >
            <CheckBox type="checkbox">Heart disease</CheckBox>
            <CheckBox type="checkbox">Organ transplant</CheckBox>
            <CheckBox type="checkbox">Peripheral arterial disease</CheckBox>
            <CheckBox type="checkbox">Chronic kidney disease</CheckBox>
            <CheckBox type="checkbox">Liver cirrhosis</CheckBox>
            <CheckBox type="checkbox">
              Chronic obstructive pulmonary disease
            </CheckBox>
            <CheckBox type="checkbox">Aneurysm</CheckBox>
            <CheckBox type="checkbox">Huntington's disease</CheckBox>
            <CheckBox type="checkbox">
              Amyotrophic lateral sclerosis (ALS)
            </CheckBox>
            <CheckBox type="checkbox">Cardiomyopathy</CheckBox>
            <CheckBox type="checkbox">Chronic hepatitis</CheckBox>
            <CheckBox type="checkbox">Multiple sclerosis</CheckBox>
            <CheckBox type="checkbox">Sickle cell anemia (not trait)</CheckBox>
            <CheckBox type="checkbox">Systemic Lupus</CheckBox>
            <CheckBox type="checkbox">
              Depression or other mental health impairment{" "}
            </CheckBox>
            <CheckBox type="checkbox">Cancer o Alcohol abuse</CheckBox>
            <CheckBox type="checkbox">Chest pain </CheckBox>
            <CheckBox type="checkbox">Diabetes</CheckBox>
            <CheckBox type="checkbox">Stroke or mini-stroke/TlA</CheckBox>
            <CheckBox type="checkbox">Seizure disorder</CheckBox>
            <CheckBox type="checkbox">None of the above</CheckBox>
          </FormContainer>

          <FormContainer labelName="Have you had a biological parent die before age 60 from any of the following:(Select all that apply)">
            <CheckBox type="checkbox">Heart disease</CheckBox>
            <CheckBox type="checkbox">Melanoma</CheckBox>
            <CheckBox type="checkbox">Colon cancer</CheckBox>
            <CheckBox type="checkbox">Ovary or breast cancer</CheckBox>
            <CheckBox type="checkbox">None of the above</CheckBox>
          </FormContainer>

          <FormContainer labelName="Are you currently admitted to a: (Select all that apply)">
            <CheckBox type="checkbox">
              Hospital o Long-term care facility
            </CheckBox>
            <CheckBox type="checkbox">Hospice</CheckBox>
            <CheckBox type="checkbox">None of the above</CheckBox>
          </FormContainer>

          <FormContainer labelName="In the past 12 months have you been: (Select all that apply)">
            <CheckBox type="checkbox">Confined to a wheelchair </CheckBox>
            <CheckBox type="checkbox">
              Diagnosed or treated by a medical professional for memory
              impairment o required to use supplemental oxygen
            </CheckBox>
            <CheckBox type="checkbox">
              Assisted or supervised with dressing, eating, bathing or walking
            </CheckBox>
            <CheckBox type="checkbox">None of the above</CheckBox>
          </FormContainer>

          <FormContainer labelName="In the past 30 days, have you been diagnosed or treated by a medical professional for COVID-19?">
            <div className="btn-group">
              <button
                className={covidYes}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ covid: true });
                }}
              >
                Yes
              </button>
              <button
                className={covidNo}
                onClick={(e) => {
                  e.preventDefault();
                  setState({ covid: false });
                }}
              >
                No
              </button>
            </div>
          </FormContainer>

          <div className="schedule-meeting">
            <Button className="btn-meeting" onClick={handleSubmit}>
              <p>Next</p>
            </Button>
          </div>
        </form>
      </SectionContainer>
    </Layout>
  );
};

export default GetPolicy;
