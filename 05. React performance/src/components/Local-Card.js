import React from "react";
import data from "../data";
import { filter } from "../use-filter";
import { Card } from "./Card";

const SyncCard = ({ search }) => {
  const filteredData = React.useMemo(() => filter(data, search), [search]);
  const items = filteredData.slice(0, 100);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {items.map(({ thumbnailUrl, title, id }) => (
        <Card key={id} img={thumbnailUrl} title={title} />
      ))}
      {items.length <= 0 ? (
        <h3>No data found with the keyword : {search}</h3>
      ) : null}
    </div>
  );
};

export default SyncCard;
