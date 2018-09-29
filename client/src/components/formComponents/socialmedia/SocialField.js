import React from "react";
import PropTypes from "prop-types";

const SocialField = ({ name, placeholder, value, onChange }) => {
  return (
    <div>
      <img alt={name} src="./facebook.svg" />
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SocialField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SocialField;
