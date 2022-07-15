import React from "react";
import Button from "react-bootstrap/esm/Button.js";

export const Btn = ({ isLoading, onClickFn, setReloadAction }) => {
  return (
    <>
      {isLoading ? (
        <Button variant={"warning"}>Cargando...</Button>
      ) : (
        <Button onClick={() => setReloadAction(e => !e)}>Refrescar</Button>
      )}
    </>
  );
};
