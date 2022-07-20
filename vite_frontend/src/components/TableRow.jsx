import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ rowData }) => {
  return (
    <>
      {rowData.ranking.map(({ position, word, occurrences }) => {
        return (
          <tr key={word}>
            <td data-testid="td-position">{position}</td>
            <td data-testid="td-word">{word}</td>
            <td data-testid="td-occurrences">{occurrences}</td>
          </tr>
        );
      })}
    </>
  );
};

TableRow.propTypes = {
  rowData: PropTypes.object.isRequired,
  position: PropTypes.number,
  word: PropTypes.string,
  occurrences: PropTypes.number,
};

export { TableRow };
