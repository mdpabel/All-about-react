import React from "react";
import useForm from "./useForm";

const App = () => {
  const { values, onChange, onSubmit } = useForm({
    username: "",
    password: "",
  });

  return (
    <div style={{ width: "450px", margin: "0 auto" }}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="username"
          value={values.username}
          placeholder="Username"
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
