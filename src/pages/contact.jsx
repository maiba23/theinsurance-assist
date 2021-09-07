import Layout from "../Layout";
import ContactForm from "../components/contact/ContactForm";
import { ImgContact } from "../utils/imgLoader";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-blue">
        <div className="content-width-extra-large page-title about-title contact-layout">
          <h2 className="custom-heading" data-aos="zoom-in">
            Let us contact you.
          </h2>
          <div className="large-text" data-aos="zoom-in">
            Enter your details below and we'll get back to you shortly:
          </div>
        </div>
        <ContactForm />
        <div className="hero_img space-top space-bottom" data-aos="zoom-out">
          <img
            src={ImgContact}
            alt="Contact us illustration"
            className="animate-in-fourth"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
