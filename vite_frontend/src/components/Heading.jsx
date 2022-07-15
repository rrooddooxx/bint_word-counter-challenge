import React from "react";

export const Heading = ({ textTitle, id }) => {
  return (
    <div className={"my-3"}>
      <h1>Ranking de palabras más recurrentes</h1>
      <h4>
        {textTitle === "" ? (
          <p>Cargando...</p>
        ) : (
          <>
            📚 Texto:{" "}
            <a
              href={`http://localhost:8080/generator/word-counter/text?id=${id}`}
            >
              {textTitle}
            </a>
          </>
        )}
      </h4>
    </div>
  );
};
