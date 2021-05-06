import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrencyCalc from './app.js'

function Main() {
    const [currency, setCurrency] = useState('Dollars');
    const [amount, setAmount] = useState({eventCount: 0, Amount: ''})
    function amountChange(event){
        setAmount({Amount: event.target.value});
    }
    function selectCurrency(x){
        if(x === "Dollars"){
            setCurrency('Dollars');
        }
        if(x === "Pounds"){
            setCurrency('Pounds');
        }
        if(x === "INR"){
            setCurrency('Indian Rupees')
        }
        if(x === "AUS"){
            setCurrency('Australian Dollars')
        }
    }
    return(
        <div>
            Enter currency: <input type="number" onChange={amountChange}/>
            <br />
            <div className='optionss'>
                <select>
                    <option value="Dollars" onClick={()=>selectCurrency("Dollars")}>Dollars</option>
                    <option value="Pounds" onClick={()=>selectCurrency("Pounds")}>Pounds</option>
                    <option value="inr" onClick={()=>selectCurrency("INR")}>Indian Rupees</option>
                    <option value="aus" onClick={()=>selectCurrency("AUS")}>Australian Dollars</option>
                </select>
            </div>
            <br />
            <div>
                The amount entered is {amount.Amount} {currency}.
            </div>
            <br />
            <div>
                <CurrencyCalc />
            </div>
        </div>
    )
}

ReactDOM.render( < Main /> , document.getElementById('root'))