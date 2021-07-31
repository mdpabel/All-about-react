import React from "react";

const fetchData = function () {
  return fetch("https://jsonplaceholder.typicode.com/photos", {
    method: "GET",
  }).then((res) => {
    const data = res.json();
    if (res.ok) {
      if (data) {
        return data;
      } else {
        Promise.reject(`No data found!`);
      }
    } else {
      return Promise.reject("Something went wrong");
    }
  });
};

const Card = ({ img, title }) => {
  return (
    <div
      style={{
        boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
        width: "300px",
        height: "300px",
        margin: "1rem",
      }}
    >
      <img
        style={{ maxHeight: "250px", padding: "0.5rem", paddingBottom: "0" }}
        width="100%"
        height="250px"
        src={img}
        alt={title}
      />

      <p
        style={{
          padding: "auto 1rem",
        }}
      >
        {title}
      </p>
    </div>
  );
};

const ErrorFallBack = function ({ error }) {
  console.warn(error);
  return <p>Something went Wrong : {error.message}</p>;
};

export { Card, fetchData, ErrorFallBack };
