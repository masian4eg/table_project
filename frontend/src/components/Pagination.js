import React from "react";

function Pagination(props) {
  const previous = props.previous;
  const submitPrevious = props.submitPrevious;
  const submitNext = props.submitNext;
  const next = props.next;

  return (
    <div className="pagination">
      {previous ? (
        <a onClick={() => submitPrevious()}>&laquo; Previous</a>
      ) : null}

      {next ? (
        <a href="#" onClick={() => submitNext()}>
          Next &raquo;
        </a>
      ) : null}
    </div>
  );
}

export default Pagination;