import React, { useState } from "react";
import { updatedData, useUser } from "./context/UserContext";

const UserInputs = () => {
  const [formData, setFormData] = useState({
    user: "Pabel",
  });

  const [{ status, error }, dispatch] = useUser();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updatedData(dispatch, formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            value={formData.user}
            disabled
            type="text"
            name="username"
            id="Username"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="TagLine">TagLine</label>
          <input
            type="text"
            name="tagline"
            id="TagLine"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            name="description"
            id="Description"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" disabled={Object.keys(formData).length <= 1}>
          {status === "pending"
            ? "..."
            : status === "rejected"
            ? "✖ Try again"
            : status === "resolved"
            ? "✔"
            : "submit"}
        </button>
        {status === "rejected" ? (
          <pre style={{ color: "red" }}>{error.message}</pre>
        ) : null}
      </form>
    </div>
  );
};

export default UserInputs;
