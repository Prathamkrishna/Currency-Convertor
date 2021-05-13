import React from "react";
import { Data } from './conversion.js';
import OtherCurrency from './converting.js'

// ____________________________________________________________________

export default function CurrencyConv(props) {
	if (props.currency !== 'USD') {
		return(
			<>
				{Data.map((data, key)=>{
					return(
						<>
							<OtherCurrency data={data} currency={props.currency} />
						</>
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