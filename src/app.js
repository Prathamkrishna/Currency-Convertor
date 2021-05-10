import React from "react";
import { Data } from './conversion'

// we have passed the currency in {currency} it is USD GDB INR AUD

function CurrencyConv(props) {
	if (props.currency !== 'USD') {
		return(
			<>
				{Data.map((data, key)=>{
					return(
						<div key={key}>
							{otherCurrency(data, props)}
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

function otherCurrency(data, props){
	if(props.currency === data.finalcur){
		const rate= (1/data.rate) * props.amount;
		console.log(rate)
		return(
			<>
				{name(rate, props.amount)}
			</>
		)
	}
}

function calculation(x, y){
	console.log(x)
	console.log(y)
	const finalval = x * y;
	return(
		<>
			{finalval}
		</>
	)
}



export default CurrencyConv;

// ____________________________________________________________________

// import React from "react";
// import { Data } from './conversion'

// // we have passed the currency in {currency} it is USD GDB INR AUD

// function CurrencyConv(props) {
// 	if (props.currency !== 'USD') {
// 		return(
// 			<>
// 				{Data.map((data, key)=>{
// 					return(
// 						<div key={key}>
// 							{otherCurrency(data, props)}
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

// function namel(props){
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

// function otherCurrency(data, props){
// 	if(props.currency === data.finalcur){
// 		const rate= (1/data.rate) * props.amount;
// 		const amount = props.amount;
// 		console.log(rate)
// 		return(
// 			<>
// 				{namel(rate, amount)}
// 			</>
// 		)
// 	}
// }

// function calculation(x, y){
// 	console.log(x)
// 	console.log(y)
// 	const finalval = x * y;
// 	return(
// 		<>
// 			{finalval}
// 		</>
// 	)
// }

// export default CurrencyConv;