import React, {useState, useEffect} from 'react';
 
function CurrencyConv(){
    useEffect(()=> {
        fetch(
            `http://api.currencylayer.com/live?access_key=d0f777c796f1003bc1a7ef7b77863799`,
            {
                method: "GET",

            }
        )
    })
}

export default CurrencyConv;