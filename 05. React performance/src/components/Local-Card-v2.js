/* eslint-disable no-func-assign */
import React, { useEffect } from "react";
import data from "../data";
import { filter } from "../04. web workers/filter-worker";
// import {} from "../use-filter"
import { Card } from "./Card";
import useAsync from "../useAsync";

function SyncCard({ search }) {
  const { run, state } = useAsync({ status: "pending" });

  useEffect(() => {
    run(filter(data, search));
  }, [run, search]);

  // const filteredData = React.useMemo(() => filter(data, search), [search]);
  // const items = state?.data?.slice(0, 250);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {state.status === "resolved" &&
        state.data
          ?.slice(0, 200000000)
          .map(({ thumbnailUrl, title, id }) => (
            <Card key={id} img={thumbnailUrl} title={title} />
          ))}

      {state.status === "pending" ? "Loading...." : null}
      {state.data?.length <= 0 ? (
        <h3>No data found with the keyword : {search}</h3>
      ) : null}
    </div>
  );
}

SyncCard = React.memo(SyncCard);

export default SyncCard;
