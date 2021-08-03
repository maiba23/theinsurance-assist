import { Link } from "react-router-dom";
import SectionContainer from "../../Layout/SectionContainer";
import { ImgFamily, SSLSecured } from "../../utils/imgLoader";
import ReactPixel from "react-facebook-pixel";
const HomeHero = () => {
  return (
    <SectionContainer>
      <div className="grid-halves">
        <div className="content-width-large align-center">
          <div
            className="animate-in-first"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <h1 className="display-heading-2">
              We help to make sure your financial future is protected.
            </h1>
          </div>
          <div
            className="animate-in-second"
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="500"
          >
            <div className="large-text">
              Let our professionals provide you with a complimentary life
              insurance policy review{" "}
            </div>
          </div>
          <div
            className="animate-in-third"
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="600"
          >
            <div className="buttons-row space-top">
              <Link
                to="/get-policy"
                className="button button-large bg-primary-4 w-inline-block"
                onClick={() =>
                  ReactPixel.fbq("trackCustom", "SubmitApplication")
                }
              >
                <div>
                  <strong>Get a new policy</strong>
                </div>
              </Link>
              <Link
                to="/get-policy"
                className="button button-large bg-primary-4 review_btn space-left w-inline-block"
                onClick={() =>
                  ReactPixel.fbq("trackCustom", "SubmitApplication")
                }
              >
                <div>
                  <strong>Get a policy review</strong>
                </div>
              </Link>
            </div>
            <div className="ssl_secured w-clearfix">
              <img
                src={SSLSecured}
                loading="lazy"
                width="20"
                alt="Secured SSL"
                className="ssl_img"
              />
              <div className="txt_ssl">
                Fully SSL secured. Don&#x27;t worry, we won&#x27;t share your
                details with anyone
              </div>
            </div>
          </div>
        </div>
        <div
          className="animate-in-third"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="700"
        >
          <img src={ImgFamily} alt="Protected family illustration" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
