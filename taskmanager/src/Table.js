import React from "react";

const Table = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.text1}
          <button onClick={() => props.onSelect1(props.id)}>Edit</button>
          <button onClick={() => props.onSelect2(props.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Table;
