import Advantage from "../components/home/Advantage";
import Faq from "../components/home/Faq";
import HomeHero from "../components/home/Hero";
import HowWorks from "../components/home/HowWorks";
import PoweredBy from "../components/home/PoweredBy";
import VideoPreview from "../components/home/VideoPreview";
import MeetTeam from "../components/shared/MeetTeam";
import ReviewPolicy from "../components/shared/ReviewPolicy";
import Layout from "../Layout";
import { People1, People2, People3 } from "../utils/imgLoader";

const meetTeamTitle = "No Bots.\n Real, friendly people.";
const members = [
  {
    name: "Eric",
    avatar: People1,
  },
  {
    name: "Kristina",
    avatar: People2,
  },
  {
    name: "Sean",
    avatar: People3,
  },
];

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <PoweredBy />
      <HowWorks />
      <VideoPreview />
      <MeetTeam title={meetTeamTitle} members={members} type="home" />
      <Faq />
      <Advantage />
      <ReviewPolicy />
    </Layout>
  );
};

export default Home;
