// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ className = "" }) => {
  return (
    <div className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <div className="w-full h-full bg-red-800 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  className: PropTypes.string,
};

export default BlurBlob;
