import SectionContainer from "../../Layout/SectionContainer";

const HeroContent = ({
  clsName,
  title,
  content,
  animation,
  delay1,
  delay2,
}) => (
  <SectionContainer clsName={clsName}>
    <div className="content-width-extra-large page-title about-title">
      <h1
        className="display-heading-2"
        data-aos={animation}
        data-aos-delay={delay1}
      >
        {title}
      </h1>
      <div className="large-text" data-aos={animation} data-aos-delay={delay2}>
        {content}
      </div>
    </div>
  </SectionContainer>
);

export default HeroContent;
