import { useState } from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
  const [hambugerActive, setHambugerActiveState] = useState(false);
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive);
  };

  let humbugerClsName = "hamburger ";
  let navMenuClsName = "nav-menu-links w-nav-menu";
  let navOverlay = "w-nav-overlay";
  if (hambugerActive) {
    humbugerClsName += "active";
    navMenuClsName += " active";
    navOverlay += " active";
  }

  return (
    <>
      <header className="navbar-container bg-primary-3">
        <div className="navbar-bg"></div>
        <div
          className="navbar w-nav"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="23"
          data-collapse="medium"
          role="banner"
        >
          <div className="container nav-bar-container centered-links-nav">
            <Link to="/" className="brand w-nav-brand" aria-label="home">
              <img
                src="https://assets.website-files.com/603deb9a43f8ac0ae37579d5/607faebb3127fd6f6153e6cc_img_insuranceassist_logo.svg"
                width="160"
                alt="The Insurance Assist Homepage"
              />
            </Link>
            <div></div>
            <div className="nav-button-container">
              <div
                className={humbugerClsName}
                onClick={hamburgerHandler}
                onKeyDown={hamburgerHandler}
                role="button"
                tabIndex="0"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to="/" className="button button-outline nav-bar-button">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="page-contents">{props.children}</div>
    </>
  );
};

export default Layout;
