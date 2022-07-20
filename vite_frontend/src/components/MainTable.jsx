import Table from "react-bootstrap/Table";
import { TableRow, LoadingSpinner } from "./index.js";

export const MainTable = ({ rowData, isLoading }) => {
  return (
    <Table striped style={{ marginBottom: "6rem" }}>
      <thead>
        <tr>
          <th># Posición</th>
          <th>Palabra</th>
          <th>Ocurrencias</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <>
            <tr>
              <td colSpan={3} className={"loading-spinner"}>
                <LoadingSpinner />
              </td>
            </tr>
          </>
        ) : (
          <TableRow rowData={rowData} />
        )}
      </tbody>
    </Table>
  );
};
