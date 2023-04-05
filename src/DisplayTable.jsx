import React from 'react';
import classes from './displaytable.module.css';

function DisplayTable(props) {
  const number = props.number;
  const rows = [];

  for (let i = 1; i <= 10; i++) {
    const result = i * number;
    rows.push(
      <tr key={i}>
        <td>
          {number} x {i} =
        </td>
        <td>{result}</td>
      </tr>
    );
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default DisplayTable;
