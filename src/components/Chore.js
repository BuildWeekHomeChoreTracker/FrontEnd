import React from "react";
import { useParams } from "react-router-dom";
import chore from "./dumydatachore";

function Child(props) {
  const { choreID } = useParams();

  const choreInfo = chore.find(item => Number(choreID) === item.id);

  return (
    <div>
      <h2>{choreInfo.name}</h2>
    </div>
  );
}

export default Child;
