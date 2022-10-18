import "./index.css";
import InputEmail from "./InputEmail";
import Btn from "./Btn";

const SubscribeBlock = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-wrapper">
        <img
          src="/IconImg/imgClock.jpg"
          height="40"
          width="40"
          alt="clock on the hand"
        />
        <div className="subscribe-content">
          Subscribe and be the first <br /> who know about the new dream job
        </div>
        <div className="input-container">
          <InputEmail />
          <Btn type="primary" color="orange">Subscribe</Btn>
        </div>
      </div>
    </div>
  );
};
export default SubscribeBlock;
