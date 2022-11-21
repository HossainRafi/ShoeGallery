import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          <Item />
        </div>
      </div>
    </>
  );
};

export default Sales;
