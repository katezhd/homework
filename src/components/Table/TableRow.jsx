const NUMBERS = {
  m: 1000000,
  b: 1000000000,
  t: 1000000000000
};

const TableRow = (props) => {
  const { data } = props;
  
  for(let item in data) {
    if(item.length) {
      if(isNumeric(+data[item]) && item !== 'rank') {  
        if(+data[item] >= NUMBERS.m && +data[item] < NUMBERS.b) {
          data[item] = (+data[item] / NUMBERS.m).toFixed(2) + 'm';
        } else if(+data[item] >= NUMBERS.b && +data[item] < NUMBERS.t) {
          data[item] = (+data[item] / NUMBERS.b).toFixed(2) + 'b';
        } else if(data[item] >= NUMBERS.t) {
          data[item] = (+data[item] / NUMBERS.t).toFixed(2) + 't';
        } else {
          data[item] = (+data[item]).toFixed(2);
        }
      }
    }
  }

  return (
    <tr>
      <td>{data.rank}</td>
      <td className="left"><img src={`https://assets.coincap.io/assets/icons/${(data.symbol).toLowerCase()}@2x.png`} alt={data.name}/></td>
      <td className="left">{data.name}</td>
      <td>${data.priceUsd}</td>
      <td>${data.marketCapUsd}</td>
      <td>${data.vwap24Hr}</td>
      <td>{data.supply}</td>
      <td>${data.volumeUsd24Hr}</td>
      <td className={data.changePercent24Hr >= 0 ? 'growth' : ''}>{data.changePercent24Hr}%</td>
    </tr>
  );
}

function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value))
}

export default TableRow;
