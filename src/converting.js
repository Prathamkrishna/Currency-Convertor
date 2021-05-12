import React from 'react';

export default function otherCurrency(props){
    console.log(props.amount, "before if statement")
	if(props.otherCurrency === props.data.finalcur){
        var amountt = (1/props.amount)*props.data.rate;
        amountt = amountt ? amountt : 1;
        console.log(amountt);
        return(
            <>
                {console.log(props.amount, "inside if statement, from otherCurrency function")}
                {amountt}
            </>
        )
    }
}

//
// if(props.currency === data.finalcur){
//     const amount= (1/data.rate) * props.amount;
//     //is it because data.rate is mutliple??? in conversion.js 
//     console.log(data.rate, "datarate")
//     console.log(amount, "amount")
//     return(
//         <>
//             <name rate={data.rate} amount={amount} />
//         </>
//     )
// }