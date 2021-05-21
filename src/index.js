import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CurrencyConv from "./app.js";
import ChartFunction from "./chartfile.js";

const CURRENCIES_MAP = [
  {
    abbr: "USD",
    name: "US Dollar",
  },
  {
    abbr: "GDB",
    name: "British Pounds",
  },
  {
    abbr: "INR",
    name: "Indian Rupee",
  },
  {
    abbr: "EUR",
    name: "Euro",
  },
  {
    abbr: "CAD",
    name: "Canadian Dollar",
  },
];

function Main() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState({ eventCount: 0, Amount: "0" });
  function amountChange(event) {
    setAmount({ Amount: event.target.value });
  }

  function selectCurrency(currencyAbbr) {
    setCurrency(currencyAbbr);
  }
  return(
    <div>
      Enter currency: <input type="number" onChange={amountChange} />
      <br />
      <div className="optionss">
        <select>
          {CURRENCIES_MAP.map((currencyObj) => (
            <option
              value={currencyObj.name}
              onClick={() => selectCurrency(currencyObj.abbr)}
              key={currencyObj.abbr}>
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
        <CurrencyConv currency={currency} amount={amount.Amount}/>
      </div>
      <br />
      <div>
          <ChartFunction />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
