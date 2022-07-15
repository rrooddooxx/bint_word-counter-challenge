import Form from "react-bootstrap/Form";

export const FilterSelect = ({
  optLabel = "Opciones: ",
  options = [],
  onChangeFn,
}) => {
  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        {optLabel}
      </label>
      <Form.Select
        aria-label="select-dropdown"
        id="inputGroupSelect01"
        onChange={e => onChangeFn(parseInt(e.target.value))}
      >
        <option value={0}>Seleccione...</option>
        {options.map(({ name, val }) => {
          return (
            <option value={val} key={name + val}>
              {name}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
};
