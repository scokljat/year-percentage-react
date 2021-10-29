import React from "react";
import PropTypes from "prop-types";
import "./progressBar.css";

const ProgressBar = ({ value, max }) => {
  return <progress className="progress-bar" value={value} max={max} />;
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};
ProgressBar.defaultProps = {
  max: 100,
};
export default ProgressBar;
