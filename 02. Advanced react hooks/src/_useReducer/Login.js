import React, { useReducer } from "react";
import Form from "./Form";
import auth from "./backend";

import "./_useReducer.css";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: "",
  errorMessage: "",
};

function authReducer(state, action) {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: action.payload,
        errorMessage: "",
      };

    case "FAILED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        isError: true,
      };

    case "LOGOUT":
      return {
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: "",
        errorMessage: "",
      };

    default:
      break;
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { isLoading, isSuccess, isError, data, errorMessage } = state;

  console.log(isLoading, isSuccess, isError, data, errorMessage);

  function handleSubmit(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;

    dispatch({
      type: "PENDING",
    });

    auth(username, password)
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FAILED",
          payload: err,
        });
      });
  }

  return (
    <div className="login-component">
      <span role="alert" className="error">
        {isError ? errorMessage.message : null}
      </span>
      <h3 className="title">Please Login</h3>
      <form onSubmit={handleSubmit}>
        {isSuccess ? (
          <>
            <h2>{data}</h2>
            <button
              onClick={() =>
                dispatch({
                  type: "LOGOUT",
                })
              }
            >
              Logout
            </button>
          </>
        ) : (
          <Form
            isError={isError}
            isLoading={isLoading}
            errorMessage={errorMessage}
            isSuccess={isSuccess}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
