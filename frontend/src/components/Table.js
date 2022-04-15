import React from "react";

function Table(props) {
  
  const list = props.list;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0
          ? list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>{item.distance}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

export default Table;