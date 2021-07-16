import React from "react";

const Parent = ({ children }) => {
  return (
    <div>
      {React.Children.count(children)}
      {React.Children.map(children, (child, index) => child)}
    </div>
  );
};

export default Parent;

/* 

 */
