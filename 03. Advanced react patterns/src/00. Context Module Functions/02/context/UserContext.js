import { createContext, useContext, useDebugValue, useReducer } from "react";

import { updateUser } from "../../user-client";

function userReducer(state, action) {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        status: action.type,
        data: { ...state.data, ...action.data },
      };

    case "resolved":
      return {
        ...state,
        status: action.type,
        data: { ...state.data, ...action.data },
        error: null,
      };

    case "rejected":
      return {
        ...state,
        status: action.type,
        error: action.error,
        data: null,
      };

    default:
      break;
  }
}

const UserContext = createContext();
UserContext.displayName = "UserContext";

function UserProvider({ ...props }) {
  const [state, dispatch] = useReducer(userReducer, {
    status: "idl",
    error: null,
    data: {
      user: "Pabel",
    },
  });

  const value = [state, dispatch];

  return <UserContext.Provider value={value} {...props} />;
}

function useUser() {
  useDebugValue("User Consumer");
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`useUser must be used within UserProvider`);
  }
  return context;
}

function updatedData(dispatch, formData) {
  dispatch({
    type: "pending",
    data: formData,
  });

  updateUser(formData.user, formData).then(
    (data) =>
      dispatch({
        type: "resolved",
        date: data,
      }),
    (error) => dispatch({ type: "rejected", error: error })
  );
}

export { UserProvider, useUser, updatedData };
