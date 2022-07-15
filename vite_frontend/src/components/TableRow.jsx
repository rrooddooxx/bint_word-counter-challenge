import React from "react";

export function TableRow({ rowData }) {
  return (
    <>
      {rowData.ranking.map(({ position, word, occurrences }) => {
        return (
          <tr key={word}>
            <td>{position}</td>
            <td>{word}</td>
            <td>{occurrences}</td>
          </tr>
        );
      })}
    </>
  );
}
