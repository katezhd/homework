import styled from "styled-components";
import Btn from '../Btn';

const DefaultWelcome = (props) => {
  return (
    <div className={props.className}>
      <div className="login">
        <h1>Welcome to Wallet</h1>
        <span>To sign in press the button</span>
        <Btn onClick={props.onClick}>Login</Btn>
      </div>
    </div>
  );
}

const Welcome = styled(DefaultWelcome)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .login {
    width: 30%;
    height: 40vh;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.14);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.4px);
    -webkit-backdrop-filter: blur(12.4px);
    border: 1px solid rgba(255, 255, 255, 0.48);
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: space-around;
  }
`
export default Welcome;
