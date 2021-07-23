import React from "react";

const Switch = ({ on = false, onClick }) => {
  return (
    <div>
      <label className="switch">
        <input onChange={onClick} checked={on} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
