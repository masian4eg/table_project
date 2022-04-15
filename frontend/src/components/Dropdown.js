import React from "react";

function Dropdown(props) {
  const filterColumn = props.filterColumn;
  const action = props.action;
  const setFilterColumn = props.setFilterColumn;
  const setAction = props.setAction;
  return (
    <div className="dropdown">
      <p>
        Filter by {filterColumn}{" "}
        {action !== "" && filterColumn === "Name" ? null : action}
      </p>

      <div className="dropdown-content">
        <a href="#" onClick={() => setFilterColumn("Name")}>
          Name
        </a>
        <div className="dropdown2">
          <a href="#" onClick={() => setFilterColumn("Amount")}>
          Amount
          </a>
          <div className="dropdown-content2">
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Amount");
                setAction("=");
              }}
            >
              =
            </a>
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Amount");
                setAction("<");
              }}
            >
              &#60;
            </a>
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Amount");
                setAction(">");
              }}
            >
              &#62;
            </a>
          </div>
        </div>
        <div className="dropdown2">
          <a href="#" onClick={() => setFilterColumn("Distance")}>
            Distance
          </a>
          <div className="dropdown-content2">
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Distance");
                setAction("=");
              }}
            >
              =
            </a>
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Distance");
                setAction("<");
              }}
            >
              &#60;
            </a>
            <a
              href="#"
              onClick={() => {
                setFilterColumn("Distance");
                setAction(">");
              }}
            >
              &#62;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;