import React, {useState} from 'react';
import ExchangeRate from './ExchangeRate';
import axios from 'axios';

const CurrencyConverter = () => {

  const currencies = ['BTC', 'ETH', 'USD','BNB', 'XRP', 'LTC','ADA'];
const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
const [chosenSecondaryCurrency,setChosenSecondaryCurrency] = useState('BTC');
const [amount,setAmount] = useState(1);
const [result, setResult] = useState(0);
const [exchangeRate,setExchangeRate] = useState(0);
const [primaryCurrencyExchanged,setPrimaryCurrencyExchanged] = useState('BTC');

const [secondaryCurrencyExchanged,setSecondaryCurrencyExchanged] = useState('BTC')

const convert = () => {
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };
  
  axios.request(options).then( (response)=> {

    setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
    setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
    setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
  }).catch( (error) => {
    console.error(error);
  });
}

  return (
    <div className='currency-converter'>
      <h2> CurrencyConverter</h2>
<div className='input-box'>
<table>
      <body>
      <tr>
        <td>Primary Currency</td>
        <td>
          <input
          type='number'
          name='currency-amount-1'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          />
        </td>
        <td>
          <select value={chosenPrimaryCurrency} name='currency-option-1'
          className='currency-options'
         onChange={(event) => setChosenPrimaryCurrency(event.target.value)}
          >
            {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
          </select>
        </td>
      </tr>


      <tr>
        <td>Secondary Currency</td>
        <td>
          <input
          type='number'
          name='currency-amount-2'
          value={result}
          disabled
          />
        </td>
        <td>
          <select value={chosenSecondaryCurrency} name='currency-option-2'
          className='currency-options'
          onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
          >
 {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

          </select>
        </td>
      </tr>

      </body>

     </table>
     <button className='button-3' onClick={convert}>Convert</button>
</div>
    <ExchangeRate exchangeRate={exchangeRate} chosenPrimaryCurrency={primaryCurrencyExchanged}
    chosenSecondaryCurrency={secondaryCurrencyExchanged}
    />
    
    </div>
  )
}

export default CurrencyConverter