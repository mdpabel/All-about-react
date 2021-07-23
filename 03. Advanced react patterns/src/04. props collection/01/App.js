import React, { useState } from "react";

import Switch from "../../Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const handleClick = () => setOn(!on);

  return {
    on,
    toggleProps: {
      onClicked: handleClick,
      "aria-pressed": on,
    },
  };
}

const App = () => {
  const { on, toggleProps } = useToggle();

  return (
    <div>
      <Switch on={on} {...toggleProps} />
      <button
        aria-label="custom button"
        onClick={toggleProps.onClicked}
        {...toggleProps}
        type="submit"
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
};

export default App;
