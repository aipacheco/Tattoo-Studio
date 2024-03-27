/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./LinkButton.css"

const LinkButton = ({direction, text, type, altColor}) => {

  const buttonClass = altColor ? "btn btn-secondary" : "btn btn-outline-light m-2";

  return (
    <div>
        <Link to={`${direction}`}>
      <button id="link-button" type={type} className={buttonClass}>
        {text}
      </button>
      </Link>
    </div>
  );
};

export default LinkButton;
