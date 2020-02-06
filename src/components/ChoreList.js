import React from "react";
import chores from "./dumydatachore";
import { Link } from "react-router-dom";

function ChoreList() {
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      {chores.map(chore => (
        <Link to={`/chorelist/${chore.id}`}>
          <div key={chore.id}>
            <p>{chore.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChoreList;
