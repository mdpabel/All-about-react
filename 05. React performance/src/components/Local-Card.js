import React from "react";
import data from "../data";
import { Card } from "./Card";

const SyncCard = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map(({ thumbnailUrl, title, id }) => (
        <Card key={id} img={thumbnailUrl} title={title} />
      ))}
    </div>
  );
};

export default SyncCard;
