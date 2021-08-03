import SectionContainer from "../../Layout/SectionContainer";
import { ImgInsuranceLife, ImgInsuranceTerm } from "../../utils/imgLoader";

const InsuranceLife = () => (
  <>
    <SectionContainer>
      <div className="w-layout-grid grid-halves">
        <div
          className="content-width-large align-center animate-in-third"
          data-aos="fade-right"
        >
          <img src={ImgInsuranceTerm} alt="Term Life Insurance" />
        </div>
        <div className="content-width-medium align-center">
          <h2
            className="large-heading space-bottom-large animate-in-first"
            data-aos="fade-in"
          >
            Term Life Insurance
          </h2>
          <div className="w-layout-grid text-grid-vertical">
            <div>
              <div className="large-text" data-aos="fade-down">
                The most common and simplest product is Term Life. This policy
                will ensure that your beneficiaries are covered in case
                something happens to you, for a relatively low premium. The
                amount of protection depends on you, but is typically calculated
                to enable your dependents to continue their current life-style
                and cover the mortgage and other expenses. Term policies are
                issued for a set period, typically between 10-30 years which
                means that the protection could end while you are still living.
                Their affordable costs and simplicity make them a starting point
                for protecting the financial future of your loved ones.
              </div>
            </div>
            <div>
              <div className="large-text" data-aos="fade-down">
                You might get a term policy through your employer at a group
                rate, but that coverage is often very low and may not actually
                consider your specific needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer clsName="bg-primary-2">
      <div className="w-layout-grid block-section">
        <div className="block-section-half">
          <div className="content-width-large align-center">
            <h2 className="large-heading animate-in-first" data-aos="fade-in">
              Whole Life Insurance
            </h2>
            <div>
              <div className="large-text space-bottom" data-aos="fade-down">
                Whole Life is typically a policy that you would consider for
                your long term financial goals. It has a guarantee death benefit
                to protect your loved ones and an additional cash value
                component that could become a valuable asset with tax benefits
                to protect your retirement, depending on how much you can
                contribute to it. Whole life policies last as long as you live,
                provided you make the premium payments. <br />
              </div>
            </div>
            <div>
              <div className="large-text" data-aos="fade-down">
                Whole Life Insurance is often called Permanent Life but there
                are other types of life policies that fit into this category
                such as Universal Life, Indexed Life and others. We’ll walk you
                through the differences.
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_2e5d1884-2be1-181e-7739-feca1c3706f1-c87579ea"
          className="block-section-half bg-primary-2 animate-in-third"
          data-aos="fade-left"
        >
          <img
            src={ImgInsuranceLife}
            alt="Whole Life Insurance"
            className="block-section-image"
          />
        </div>
      </div>
    </SectionContainer>
  </>
);

export default InsuranceLife;
