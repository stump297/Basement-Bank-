import React from "react";
import { Link } from "react-router-dom";

function MyBasements() {
  return (
    <div className="my-basements">
      <h1>My Basements</h1>
      <div>
        <div>
          Basement 1{" "}
          <Link to="/basement1">
            <button>View</button>
          </Link>
        </div>
        <div>
          Basement 2{" "}
          <Link to="/basement2">
            <button>View</button>
          </Link>
        </div>
        <div>
          Add New{" "}
          <Link to="/create">
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyBasements;
