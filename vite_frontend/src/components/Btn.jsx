import React from "react";
import Button from "react-bootstrap/esm/Button.js";

const Btn = ({ isLoading, setReloadAction }) => {
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

export { Btn };
