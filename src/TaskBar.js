import React from "react";
import "./TaskBar.css";
import { Link } from "react-router-dom";
function TaskBar() {
  return (
    <div className="taskbar">
      <span className="Composers">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/composers"
        >
          Composers
        </Link>
      </span>
      <span className="Artists">Artists</span>
      <span className="Concerts">Concerts</span>
      <span className="Competitions">Competitions</span>
      <span className="Levels">Levels</span>
      <span className="My Repertoire">My Repertoire</span>
      <span className="Contribute">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/contribute"
        >
          Contribute
        </Link>
      </span>
    </div>
  );
}

export default TaskBar;
