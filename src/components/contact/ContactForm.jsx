import SectionContainer from "../../Layout/SectionContainer";

const ContactForm = () => {
  return (
    <SectionContainer clsName="bg-gray-1 no-top-space">
      <div className="content-width-extra-large align-center">
        <div
          className="form-block content-width-extra-large align-center w-form"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            className="form-grid-vertical"
          >
            <div className="w-layout-grid form-row-grid-halves">
              <input
                type="text"
                className="form-input form-input-large w-input"
                maxLength="256"
                name="First-Name"
                data-name="First Name"
                placeholder="First Name"
                id="First-Name-3"
                required=""
              />
              <input
                type="text"
                className="form-input form-input-large w-input"
                maxLength="256"
                name="Last-Name"
                data-name="Last Name"
                placeholder="Last Name"
                id="Last-Name-3"
                required=""
              />
            </div>
            <div className="w-layout-grid form-row-grid-halves">
              <input
                type="email"
                className="form-input form-input-large w-input"
                maxLength="256"
                name="Email"
                data-name="Email"
                placeholder="Email"
                id="Email"
                required=""
              />
              <input
                type="tel"
                className="form-input form-input-large w-input"
                maxLength="256"
                name="Phone"
                data-name="Phone"
                placeholder="Phone"
                id="Phone"
                required=""
              />
            </div>
            <div className="form-row form-row-last">
              <div className="affiliate w-embed">
                <input
                  type="hidden"
                  className="affiliate"
                  id="aff_id"
                  name="aff"
                  data-name="aff"
                  value=""
                />
              </div>
              <div className="uuid w-embed">
                <input
                  type="hidden"
                  className="user"
                  id="user_id"
                  name="uuid"
                  data-name="user_id"
                  value=""
                />
              </div>
              <input
                type="submit"
                value="Send it!"
                data-wait="Please wait..."
                className="button long-submit-button w-button"
              />
            </div>
          </form>
          <div className="small-text text-white">
            * We never share user details with third parties, period.
            <br />
            **By clicking the &quot;Send it!&quot; button below, you agree to be
            contacted directly by one of our professionals.
          </div>
          <div className="form-success w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="form-error w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactForm;
