import Layout from "../Layout";
import ReviewPolicy from "../components/shared/ReviewPolicy";
import MeetTeam from "../components/shared/MeetTeam";
import HeroContent from "../components/shared/HeroContent";
import { People1, People2, People3 } from "../utils/imgLoader";
import Support from "../components/about/Support";

const meetTeamTitle = "Meet the Team";
const meetTeamContent =
  "We are here to help and support, bringing years of experience and service from leading life insurance company, Guardian Life.";
const members = [
  {
    name: "Eric",
    avatar: People1,
    intro:
      "Eric has been part of the financial services industry since 2002 as a financial advisor and an Investment Advisor Representative. He has worked at MetLife, Northwestern Mutual, Prudential, and Scottrade. He holds the Series 7, 6, 65, 63 and life, health, and accident licenses.",
  },
  {
    name: "Kristina",
    avatar: People2,
    intro:
      "Kristina has worked in the financial services industry since 1997, previously working for Prudential as an Internal Wholesaler, Director of Sales Training, financial advisor, and as a sales manager. Kristina holds a Bachelor of Science in Finance and an MBA in Accounting Taxation and Finance with a specialization in Financial Planning from Fordham Gabelli School of Business. She holds the Series 7, 65, 63, 26 and life and health licenses.",
  },
  {
    name: "Sean",
    avatar: People3,
    intro:
      "Sean has worked in the financial services industry since 2013 as a Financial Advisor and Operations Consultant. He has worked for Wells Fargo Advisors, LPL Financial, and Park Avenue Securities. He holds the Series 7 and 66, as well as Life Accident and Health licenses.",
  },
];

const About = () => {
  return (
    <Layout>
      <HeroContent
        clsName="no-bottom-space"
        title="We are all about helping you find the best financial strategy available."
        content="Using advanced technology and a highly experienced team of licensed
        financial professionals, and backed by Guardian Life, one of the top
        life insurers in America, we are focused on your needs and wants."
        animation="fade-in"
        delay1="400"
        delay2="400"
      />
      <Support />
      <MeetTeam
        title={meetTeamTitle}
        content={meetTeamContent}
        members={members}
      />

      <ReviewPolicy />
    </Layout>
  );
};

export default About;
