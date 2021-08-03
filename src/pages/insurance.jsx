import InsuranceLife from "../components/insurance/InsuranceLife";
import InsuranceWork from "../components/insurance/InsuranceWork";
import HeroContent from "../components/shared/HeroContent";
import ReviewPolicy from "../components/shared/ReviewPolicy";
import Layout from "../Layout";

const Insurance = () => {
  return (
    <Layout>
      <HeroContent
        clsName="bg-primary-3"
        title="Insurance 101"
        content="Find out about the basics of life insurance."
        animation="fade-up"
        delay1="400"
        delay2="450"
      />
      <InsuranceWork />
      <InsuranceLife />
      <ReviewPolicy />
    </Layout>
  );
};

export default Insurance;
