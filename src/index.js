import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrencyCalc from './app.js'

function Main() {
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState({eventCount: 0, Amount: ''})
    // const endpoint = 'convert';
    function amountChange(event){
        setAmount({Amount: event.target.value});
    }
    function selectCurrency(x){
        if(x === "USD"){
            setCurrency('USD');
            // const from = 'USD';
            // const to = 'INR';
            // const amountt = `{amount.Amount}`
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
    // $.ajax({
        url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
    //     dataType: 'jsonp',
    //     success: function(json){
    //         alert(json.result);
    //     }
    // });
    return(
        <div>
            Enter currency: <input type="number" onChange={amountChange}/>
            <br />
            <div className='optionss'>
                <select>
                    <option value="Dollars" onClick={()=>selectCurrency("USD")}>USD</option>
                    <option value="Pounds" onClick={()=>selectCurrency("GBP")}>GBP</option>
                    <option value="inr" onClick={()=>selectCurrency("INR")}>INR</option>
                    <option value="aus" onClick={()=>selectCurrency("AUD")}>AUD</option>
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