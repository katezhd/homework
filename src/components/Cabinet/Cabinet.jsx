import styled from "styled-components";

const DefaultCabinet = (props) => {
  return (
    <div className={props.className}>
        <img src={props.img} alt={props.img + ' logo'}></img>
        <span><b>{props.text}</b></span><span>{props.data}</span>
    </div>
  );
}

const Cabinet = styled(DefaultCabinet)`
    margin-top: 30px;
    width: ${props => props.width};
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.4px);
    -webkit-backdrop-filter: blur(12.4px);
    border: 1px solid rgba(255, 255, 255, 0.48);
    color: #fff;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    font-size: 18px;
    img {
      width: 30px;
    }
`
export default Cabinet;
