import { useState } from "react";

function useForm(initialState) {
  const [state, setState] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value, state);
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
  };

  return {
    state,
    change: { onChange: handleChange },
    submit: { onSubmit: handleSubmit },
  };
}

export { useForm as default };
