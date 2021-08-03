import { ImgGuardianLogoColor } from "../../utils/imgLoader";

const PoweredBy = () => {
  return (
    <div
      className="poweredby animate-in-fourth"
      data-aos="fade-up"
      data-aos-duration="200"
      data-aos-delay="800"
    >
      <div className="center-text small-text animate-in-third">Powered by</div>
      <img
        src={ImgGuardianLogoColor}
        loading="lazy"
        width="140"
        alt="Guardian logo"
      />
    </div>
  );
};

export default PoweredBy;
