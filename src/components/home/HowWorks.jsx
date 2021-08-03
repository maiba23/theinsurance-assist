import SectionContainer from "../../Layout/SectionContainer";
import {
  ImgProcessStep1,
  ImgProcessStep2,
  ImgProcessStep3,
} from "../../utils/imgLoader";
const HowWorks = () => {
  return (
    <SectionContainer clsName="no-bottom-space grey_bg">
      <div className="content-width-extra-large page-title">
        <h2
          className="large-heading"
          data-aos="fade-in"
          data-aos-duration="200"
        >
          How it works
        </h2>
        <div className="large-text" data-aos="fade-in" data-aos-dration="200">
          We can help you get a personalized quote in just 3 easy steps.
        </div>
      </div>
      <div className="w-layout-grid block-section ">
        <div
          id="w-node-_2daff60d-d1af-e7eb-d566-bffd86a8bb3c-7d7579da"
          className="block-section-half bg-primary-3"
        >
          <img
            src={ImgProcessStep1}
            alt="Answer a few questions"
            data-aos="fade-left"
            data-aos-duration="300"
          />
        </div>
        <div className="block-section-half">
          <div className="content-width-large align-center">
            <div className="text-pill-wrapper">
              <div className="text-pill" data-aos="fade-in-down">
                <h5 className="heading">Step 1</h5>
              </div>
            </div>
            <h4 className="medium-heading" data-aos="fade-in-down">
              Answer a few questions
              <br />
            </h4>
            <div className="large-text" data-aos="fade-in-down">
              Tell us a bit about what changed in your life since you were
              issued your life insurance policy.
            </div>
          </div>
        </div>
      </div>
      <div className="w-layout-grid block-section">
        <div className="block-section-half">
          <div className="content-width-large align-center">
            <div className="text-pill-wrapper">
              <div className="text-pill" data-aos="fade-in-down">
                <h5 className="heading">Step 2</h5>
              </div>
            </div>
            <h4 className="medium-heading" data-aos="fade-in-down">
              Processing your answers
              <br />
            </h4>
            <div className="large-text" data-aos="fade-in-down">
              Our professional team will process your answers, and provide
              valuable information to assist you with your decisions.
            </div>
          </div>
        </div>
        <div
          id="w-node-_2daff60d-d1af-e7eb-d566-bffd86a8bb53-7d7579da"
          className="block-section-half bg-primary-3"
        >
          <img
            src={ImgProcessStep2}
            alt="Processing your answers"
            data-aos="fade-right"
          />
        </div>
      </div>
      <div className="w-layout-grid block-section">
        <div
          id="w-node-f55fac18-0ba4-0c9e-9cdf-6a96ce87b896-7d7579da"
          className="block-section-half bg-primary-3"
        >
          <img
            src={ImgProcessStep3}
            alt="Your policy is personalized"
            data-aos="fade-left"
          />
        </div>
        <div className="block-section-half">
          <div className="content-width-large align-center">
            <div className="text-pill-wrapper">
              <div className="text-pill" data-aos="fade-in-down">
                <h5 className="heading">Step 3</h5>
              </div>
            </div>
            <h4 className="medium-heading" data-aos="fade-in-down">
              Your policy is personalized
              <br />
            </h4>
            <div className="large-text" data-aos="fade-in-down">
              We meet with you to review and make sure that your policy matches
              your financial needs. Now you can relax!
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HowWorks;
