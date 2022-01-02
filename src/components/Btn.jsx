import styled from "styled-components";

const DefaultBtn = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <img src={'/images/metamask.svg'} alt="Metamask logo"></img>
    </button>
  );
}

const Btn = styled(DefaultBtn)`
      padding: 15px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      border: none;
      margin-top: 50px;
      display: block;
      margin: 0 auto;
      img {
        width: 100px;
        height: 100px;
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    `;
  
export default Btn;
