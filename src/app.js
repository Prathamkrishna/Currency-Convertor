import React from "react";
import { Data } from './conversion.js';
import OtherCurrency from './converting.js'

// we have passed the currency in {currency} it is USD GDB INR AUD

// function CurrencyConv(props) {
// 	if (props.currency !== 'USD') {
// 		return(
// 			<>
// 				{Data.map((data, key)=>{
// 					return(
// 						<div key={key}>
// 							{othercurrency(data, props)}
// 						</div>
// 					)
// 				})}
// 			</>
// 		)
// 	}
// 	else{
//     	return(
// 			<>
// 			{name(props)}
// 			</>
// 		)
// 	}
// }

// function name(props){
// 	console.log(props.amount, "namefunction amount")
// 	const amountal = parseInt(props.amount);
// 	console.log(typeof(props.amount))
// 	console.log(amountal, "namefunction amount below")
// 	return ( 
// 		<>
// 		The converted amount to other currencies are:
// 		{Data.map((data, key)=>{
// 			return(
// 				<div key={key}>
// 					{data.finalcur}({data.name}) = {calculation(data.rate, props.amount)}
// 				</div>
// 			)
// 		})}
// 		</>
// 	)
// }

// function othercurrency(data, props){
// 	if(props.currency === data.finalcur){
// 		const amount= (1/data.rate) * props.amount;
// 		//is it because data.rate is mutliple??? in conversion.js 
// 		console.log(data.rate, "datarate")
// 		console.log(amount, "amount")
// 		return(
// 			<>
// 				{name(data.rate, amount)}
// 			</>
// 		)
// 	}
// }

// function calculation(x,  y){
// 	console.log(x)
// 	console.log(y, "props.amount")
// 	const finalval = x * y;
// 	return(
// 		<>
// 			{finalval}
// 		</>
// 	)
// }

// export default CurrencyConv;

// ____________________________________________________________________

export default function CurrencyConv(props) {
	if (props.currency !== 'USD') {
		return(
			<>
				{Data.map((data, key)=>{
					return(
						<div key={key}>
							<OtherCurrency data={data} props={props} />
							{console.log(props.children, "props.children")}
							{console.log(props.amount, "props.amount in app.js, CurrencyConv function")}
						</div>
					)
				})}
			</>
		)
	}
	else{
    	return(
			<>
			{name(props)}
			</>
		)
	}
}

function name(props){
	return ( 
		<>
		The converted amount to other currencies are:
		{Data.map((data, key)=>{
			return(
				<div key={key}>
					{data.finalcur}({data.name}) = {calculation(data.rate, props.amount)}
				</div>
			)
		})}
		</>
	)
}

function calculation(x,  y){
	const finalval = x * y;
	return(
		<>
			{finalval}
		</>
	)
}

// export default currencyConv()