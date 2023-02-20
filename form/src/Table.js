import React from "react";

const Table=(props)=>{
    return (
        <>
          <tr>
            <td>{props.id }</td>
            <td>
              {props.text1}{" "+props.text2}
            </td>
            <td>{props.text3}</td>
            <td>{props.text4}</td>
            <td>
              <button onClick={()=>props.onSelect1(props.id)}>Edit</button>
            </td>
            <td>
              <button onClick={()=>props.onSelect2(props.id) }>Delete</button>
            </td>
          </tr>
        </>
      );
}

export default Table