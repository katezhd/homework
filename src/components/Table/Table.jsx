import { useEffect, useState } from 'react';
import styled from "styled-components";
import TableRow from './TableRow';

const DefaultTable = (props) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://api.coincap.io/v2/assets', {
        method: 'GET',
        redirect: 'follow',
        Authorization: 'Bearer da974e7e-e04b-499a-8897-bfd3cb6c8171' 
      })
      .then(response => response.json())
      .then((data) => {
        if(typeof data != 'undefined') {
          setCurrency(data.data.slice(0, 20));
          let dateTime = new Date(data.timestamp);
          dateTime = dateTime.toLocaleTimeString('en-gb',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }
          )
            props.onChange(dateTime);
        } else {
          getData();
        }
      })
      .catch((error) => {
        getData();
      });
  }

  return (
    <table className={props.className}>
      <thead>
        <tr>
          <th>Rank</th>
          <th className="left"></th>
          <th className="left">Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP (24Hr)</th>
          <th>Supply</th>
          <th>Volume (24Hr)</th>
          <th>Change (24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {currency.map(item => (
            <TableRow
              key={item.id}
              data={item}
            />
        ))}
      </tbody>
    </table>

  );
}

const Table = styled(DefaultTable)`
  width: 100%;
  min-height: 100vh;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.4px);
  -webkit-backdrop-filter: blur(12.4px);
  border: 1px solid rgba(255, 255, 255, 0.48);
  color: #fff;
  padding: 20px;
  margin-bottom: 50px;
  tr {
    th {
      text-align: right;
      padding: 10px ​0;
      &.left {
        text-align: left;
        padding-left: 10px;
      }
    }
  }
  td {
    padding: 20px 0;
    font-weight: 300;
    text-align: right;
    &.left {
      text-align: left;
      padding-left: 10px;
    }
    &:nth-last-of-type(1) {
      color: #e58383;
      font-weight: 700;
      &.growth {
        color: #4dbf4d;
      }
    }
  }
  img {
    width: 35px;
  }
`


export default Table;
