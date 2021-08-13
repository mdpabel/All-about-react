import React, { useRef } from "react";
import { useVirtual } from "react-virtual";
import data from "../data";
import { filter } from "../use-filter";
import { Card } from "./Card";

const SyncCard = ({ search }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: 5000,
    parentRef: parentRef,
    estimateSize: React.useCallback(() => 35, []),
    overscan: 10,
  });

  console.log(rowVirtualizer);

  const filteredData = React.useMemo(() => filter(data, search), [search]);
  // const items = filteredData.slice(0, 100);

  return (
    <div
      ref={parentRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ height: `${rowVirtualizer.totalSize}px` }}>
        {rowVirtualizer.virtualItems.map(({ index, size, start, end }) => {
          const item = filteredData[index];

          return (
            <Card key={index} img={item?.thumbnailUrl} title={item?.title} />
          );
        })}
      </div>
      {rowVirtualizer.virtualItems.length <= 0 ? (
        <h3>No data found with the keyword : {search}</h3>
      ) : null}
    </div>
  );
};

export default SyncCard;
