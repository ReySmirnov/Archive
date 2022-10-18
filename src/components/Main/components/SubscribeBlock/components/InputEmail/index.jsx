import Input from "./Input";
import "./index.css"

const InputEmail = ({ placeholder = "Type your email here", name }) => {
  return (
    <div className="input-content">
      <img
        className="img-email"
        src="/IconImg/imgMail.png"
        height="15"
        width="15"
        alt="image letter"
      />
      <Input type="email" placeholder={placeholder} name={name} />
    </div>
  );
};
export default InputEmail;
