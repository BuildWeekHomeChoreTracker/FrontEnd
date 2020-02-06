import React from "react";
import children from "./dummydata";
import { Link } from "react-router-dom";

function ChildrenList() {
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      {children.map(child => (
        <Link to={`/childrenlist/${child.id}`}>
          <div key={child.id}>
            <p>
              {child.fstname} {child.lstname}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChildrenList;
