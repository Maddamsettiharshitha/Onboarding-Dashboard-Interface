import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div style={{ width: `${(step / 3) * 100}%` }} className="filler"></div>
    </div>
  );
};

export default ProgressBar;