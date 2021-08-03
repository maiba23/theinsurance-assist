import Layout from "../Layout";
import ContactForm from "../components/contact/ContactForm";
import HeroContent from "../components/shared/HeroContent";
import { ImgContact } from "../utils/imgLoader";

const Contact = () => {
  return (
    <Layout>
      <HeroContent
        clsName="bg-gray-1"
        title="Let us contact you."
        content="Enter your details below and we&#x27;ll get back to you shortly:"
        animation="fade-up"
        delay1="400"
        delay2="500"
      />
      <ContactForm />
      <div className="hero_img space-top space-bottom" data-aos="zoom-out">
        <img
          src={ImgContact}
          alt="Contact us illustration"
          className="animate-in-fourth"
        />
      </div>
    </Layout>
  );
};

export default Contact;
