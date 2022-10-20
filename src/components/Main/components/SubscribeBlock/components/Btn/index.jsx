import "./index.css";

const Btn = ({ children, type, color, disabled, onClick }) => {
  let typeClassName = "btn-primary";
  let colorClassName = "btn-grey";
  if (type === "secondary") {
    typeClassName = "btn-secondary";
  }
  if (color === "orange") {
    colorClassName = "btn-orange";
  }
  return <button disabled={disabled} className={`btn ${typeClassName} ${colorClassName}`} onClick={onClick}> {children} </button>;
};

export default Btn;
