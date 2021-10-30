import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Progress = styled.progress`
  width: 400px;
  height: 50px;
`;
const ProgressBar = ({ value, max }) => {
  return <Progress value={value} max={max}></Progress>;
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  width: PropTypes.number,
};
ProgressBar.defaultProps = {
  max: 100,
  width: "400px",
};
export default ProgressBar;
