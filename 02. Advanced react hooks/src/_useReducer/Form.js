// import { useState } from "react";

function Form({ isLoading, isSuccess }) {
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  // const { username, password } = credentials;

  // function handleChange(event) {
  //   setCredentials({
  //     ...credentials,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  return (
    <>
      <div>
        <input
          type="email"
          // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          name="username"
          // value={username}
          // onChange={handleChange}
          required
          placeholder="Username"
          minLength="5"
          maxLength="30"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          // value={password}
          // onChange={handleChange}
          required
          placeholder="Password"
          minLength="5"
          maxLength="30"
        />
      </div>
      <button type="submit">
        {isLoading ? "Submitting" : isSuccess ? "Submitted" : "Submit"}
      </button>
    </>
  );
}

export default Form;
