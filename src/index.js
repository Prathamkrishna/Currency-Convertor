import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CurrencyCalc from "./app.js";

const CURRENCIES_MAP = [
  {
    abbr: "USD",
    name: "US Dollar",
  },
  {
    abbr: "GBP",
    name: "British Pounds",
  },
  {
    abbr: "INR",
    name: "Indian Rupee",
  },
  {
    abbr: "AUD",
    name: "Australian Dollar",
  },
];

function Main() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState({ eventCount: 0, Amount: "0" });
  // const endpoint = 'convert';
  function amountChange(event) {
    setAmount({ Amount: event.target.value });
  }

  function selectCurrency(currencyAbbr) {
    setCurrency(currencyAbbr);
  }
  //     if (x === "USD") {
  //       setCurrency("USD");
  //       // const from = 'USD';
  //       // const to = 'INR';
  //       // const amountt = `{amount.Amount}`
  //     }
  //     if (x === "Pounds") {
  //       setCurrency("Pounds");
  //     }
  //     if (x === "INR") {
  //       setCurrency("Indian Rupees");
  //     }
  //     if (x === "AUS") {
  //       setCurrency("Australian Dollars");
  //     }
  //   }
  // $.ajax({
  // url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
  //     dataType: 'jsonp',
  //     success: function(json){
  //         alert(json.result);
  //     }
  // });
  return (
    <div>
      Enter currency: <input type="number" onChange={amountChange} />
      <br />
      <div className="optionss">
        <select>
          {CURRENCIES_MAP.map((currencyObj) => (
            <option
              value={currencyObj.name}
              onClick={() => selectCurrency(currencyObj.abbr)}
              key={currencyObj.abbr}
            >
              {`${currencyObj.name} — ${currencyObj.abbr}`}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        The amount entered is {amount.Amount} {currency}.
      </div>
      <br />
      <div>
        <CurrencyCalc currency={currency} amount={amount.Amount}/>
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
