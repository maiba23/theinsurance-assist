import { Link } from "react-router-dom";
import { Lines10, Lines12 } from "../../utils/imgLoader";

const TeamMember = ({ name, avatar, intro, idx }) => {
  return (
    <div>
      <img
        src={avatar}
        width="200"
        alt={name}
        className="experts_pics space-bottom"
        data-aos="fade-in-right"
        data-aos-easing="linear"
        data-aos-delay={100 * idx}
      />
      <div>
        <h4
          data-aos="fade-in-right"
          data-aos-easing="linear"
          data-aos-delay={100 * idx}
        >
          <strong>{name}</strong>
        </h4>
        <div
          className="team-member-details"
          data-aos="fade-in-right"
          data-aos-easing="linear"
          data-aos-delay={100 * idx}
        >
          <div className="team-member-position">{intro} </div>
        </div>
      </div>
    </div>
  );
};

const MeetTeam = ({ title, content, members, type }) => {
  const memberList = members.map((item, idx) => (
    <TeamMember key={idx} {...item} idx={idx + 1} />
  ));
  return (
    <section className="section hero-section bg-primary-1">
      <div className="container">
        <div
          className={
            type === "home"
              ? "content-width-extra-large align-center center-text team-thumbs"
              : "content-width-extra-large align-center center-text"
          }
        >
          <div className="animate-in-first">
            <h2
              className="display-heading-1 text-white content-width-extra-large"
              data-aos="fade-in"
            >
              {title}
            </h2>
          </div>
          <div className="large-text" data-aos="fade-in">
            {content}
          </div>
          <div className={type ? "team-grid-thumbs" : "team-grid"}>
            {memberList}
          </div>
          {type === "home" && (
            <div className="animate-in-fourth">
              <div className="buttons-row align-center space-top">
                <div className="button-row-last">
                  <Link
                    to="/"
                    className="button button-outline-white button-large w-inline-block"
                  >
                    <div>Meet the Team</div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {type === "home" && (
        <>
          <img
            src={Lines10}
            alt=""
            className="centered-hero-image-left animate-in-third"
          />
          <img
            src={Lines12}
            alt=""
            className="centered-hero-image-right animate-in-third"
          />
        </>
      )}
    </section>
  );
};

export default MeetTeam;
