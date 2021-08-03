import SectionContainer from "../../Layout/SectionContainer";
import {
  IconPeople,
  IconTrophy,
  IconUSA,
  ImgGuardianLogoColor,
} from "../../utils/imgLoader";

const features = [
  {
    icon: IconPeople,
    content: "Securing insurance needs for 29 million people",
  },
  {
    icon: IconUSA,
    content: "Professional Service Nationwide",
  },
  {
    icon: IconTrophy,
    content: `Among America's Top Life Insurance Companies`,
  },
];

const Feature = ({ icon, content, idx }) => (
  <div className="feature-third">
    <div
      className="icon-badge bg-primary-2 space-bottom"
      data-aos="fade-in-right"
      data-aos-easing="linear"
      data-aos-delay={250 * idx}
      data-aos-duration="300"
    >
      <img src={icon} alt={content} />
    </div>
    <h4
      className="heading-4"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-delay={250 * idx}
      data-aos-duration="200"
    >
      {content}
    </h4>
  </div>
);

const Advantage = () => {
  const featureList = features.map((item, idx) => (
    <Feature key={idx} {...item} idx={idx + 1} />
  ));
  return (
    <SectionContainer clsName="next-section-overlapping grey_bg">
      <div className="content-width-extra-large page-title space-bottom">
        <img
          src={ImgGuardianLogoColor}
          loading="lazy"
          width="176"
          alt="Guardian logo"
          className="guardian_logo_l"
        />
        <h2
          data-w-id="3a8cd92e-0252-13ab-5656-a8e95c9de1be"
          className="large-heading"
          data-aos="fade-in"
          data-aos-duration="200"
        >
          Our experience, your advantage.
        </h2>
        <div
          data-w-id="3a8cd92e-0252-13ab-5656-a8e95c9de1c0"
          className="large-text"
          data-aos="fade-in"
          data-aos-duration="200"
        >
          As a Guardian company, we have what it takes to insure your future.
        </div>
      </div>
      <div className="cards-grid-thirds">{featureList}</div>
    </SectionContainer>
  );
};

export default Advantage;
