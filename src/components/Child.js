import React from "react";
import { useParams } from "react-router-dom";
import children from "./dummydata";

function Child(props) {
  const { childID } = useParams();

  const childInfo = children.find(child => Number(childID) === child.id);

  return (
    <div>
      <h2>{childInfo.fstname}</h2>
    </div>
  );
}

export default Child;
