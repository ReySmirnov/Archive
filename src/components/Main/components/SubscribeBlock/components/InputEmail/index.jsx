import Input from "./Input";
import "./index.css"

const InputEmail = ({ placeholder = "Type your email here", name, value, onChange }) => {
  return (
    <div className="input-content">
      <img
        className="img-email"
        src="/IconImg/imgMail.png"
        height="15"
        width="15"
        alt="image letter"
      />
      <Input type="email" placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </div>
  );
};
export default InputEmail;
