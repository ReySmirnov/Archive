import "./index.css";

const Btn = ({ children, type, color }) => {
  let typeClassName = "btn-primary";
  let colorClassName = "btn-grey";
  if (type === "secondary") {
    typeClassName = "btn-secondary";
  }
  if (color === "orange") {
    colorClassName = "btn-orange";
  }
  return <button className={`btn ${typeClassName} ${colorClassName}`}> {children} </button>;
};

export default Btn;
