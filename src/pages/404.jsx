import { Link } from "react-router-dom";
import { InsuranceLogo } from "../utils/imgLoader";

const NotFound = () => {
  return (
    <div className="utility-page-wrap bg-primary-3">
      <div className="utility-page-content w-form">
        <img
          src={InsuranceLogo}
          loading="lazy"
          width="138"
          alt=""
          className="image-3"
        />
        <h5 className="display-heading-2">Page Not Found</h5>
        <div className="large-text space-bottom">
          The page you are looking for doesn&#x27;t exist or has been moved. If
          you think this is a mistake, <Link to="/contact">get in touch</Link>.
        </div>
        <Link to="/" className="button button-large w-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
