import SectionContainer from "../../Layout/SectionContainer";
import {
  ImgAboutDecide,
  ImgAboutExpert,
  ImgAboutInvest,
} from "../../utils/imgLoader";

const supports = [
  {
    image: ImgAboutDecide,
    title: "Tailor-made just for you",
    content:
      "Based on your specific financial and personal situation, we will offer a complimentary review tailored specifically for you.",
  },
  {
    image: ImgAboutInvest,
    title: "Make smart decisions",
    content:
      "Our team is dedicated to helping people to understand their current policy terms and benefits and make smart decisions about their future.",
  },
  {
    image: ImgAboutExpert,
    title: "Learn from professionals",
    content:
      "You can listen and learn from some of the best and decide what works for you at the end of this process, no strings attached.",
  },
];

const SupportItem = ({ image, title, content }) => (
  <div className="feature-third">
    <img src={image} alt={title} className="illustration-small space-bottom" />
    <h4>{title}</h4>
    <div>{content}</div>
  </div>
);

const Support = () => {
  const supportList = supports.map((item, idx) => (
    <SupportItem key={idx} {...item} />
  ));
  return (
    <SectionContainer>
      <div
        className="cards-grid-thirds"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        {supportList}
      </div>
    </SectionContainer>
  );
};

export default Support;
