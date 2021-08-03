import { ImgInsuranceWork } from "../../utils/imgLoader";
import SectionContainer from "../../Layout/SectionContainer";

const InsuranceWork = () => {
  return (
    <SectionContainer clsName="bg-primary-1">
      <div className="w-layout-grid grid-halves">
        <div
          className="content-width-large align-center animate-in-second"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="large-heading text-white">How does insurance work?</h2>
          <div className="large-text space-bottom">
            Insurance policies are issued to help protect you and your family
            from the unexpected and potentially limit your financial burden if a
            covered event occurs. Insurance can provide you with a certain lump
            sum or payment amount in case of accident or illness, and can be
            used as a financial tool that can provide access to money if needed.
            There are a multitude of types of insurance that are available to
            you, including life, disability, dental, supplemental, vision and
            many more.
          </div>
          <div className="large-text space-bottom">
            We will focus on Life Insurance. There are two primary types of life
            insurance policies: Term Life and Whole Life.
          </div>
        </div>
        <div
          className="content-width-large align-center animate-in-third"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img src={ImgInsuranceWork} alt="How does insurance work?" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default InsuranceWork;
