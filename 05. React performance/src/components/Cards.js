import React, { useEffect } from "react";
import useAsync from "../useAsync";
import { Card, fetchData, ErrorFallBack } from "./Card";

const Cards = () => {
  const { state, run } = useAsync();
  const { data, error, status } = state;

  useEffect(() => {
    run(fetchData());
  }, [run]);

  function display() {
    if (status === "pending") {
      return <h2>Loading...</h2>;
    } else if (status === "resolved") {
      return data.map(({ thumbnailUrl, title, id }) => (
        <Card key={id} img={thumbnailUrl} title={title} />
      ));
    } else if (status === "rejected") {
      return <ErrorFallBack error={error} />;
    }
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {display()}
    </div>
  );
};

export default Cards;
