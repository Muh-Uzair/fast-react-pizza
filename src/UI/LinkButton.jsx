import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  back: PropTypes.bool,
};

export default function LinkButton({ children, to, back }) {
  const className = "text-blue-500 hover:text-blue-900 font-semibold";
  const navigate = useNavigate();
  if (back) {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
