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
							<OtherCurrency data={data} currency={props.currency} amount={props.amount} />
						</>
					)
				})}
			</>
		)
	}
	else{
    	return(
			<>
				The converted amount to other currencies is:
				{Data.map((data, key)=>{
					return(
						<>
							{finalcalc(data, props.amount)}
						</>
					)
				})}
			</>
		)
	}
}

function finalcalc(x, y){
	const rateineur = x.eur.rate * y
	const rateingdb = x.gdb.rate * y
	const rateincad = x.cad.rate * y
	const rateinpln = x.pln.rate * y
	const rateininr = x.inr.rate * y
	return(
		<div>
			{x.eur.finalcur}: {rateineur}<br />
			{x.gdb.finalcur}: {rateingdb}<br />
			{x.cad.finalcur}: {rateincad}<br />
			{x.pln.finalcur}: {rateinpln}<br />
			{x.inr.finalcur}: {rateininr}
		</div>
	)
}