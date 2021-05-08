import React from "react";
import { Data } from './conversion'

function CurrencyConv(props) {
    return ( 
		<>
		The converted amount to other currencies are:
		{Data.map((data, key)=>{
			return(
				<div key={key}>
					{data.finalcur}({data.name}) = {calculation(`${data.rate}`, `${props.amount}`)}
				</div>
			)
			
		})}
		</>
    )
}
function calculation(x, y){
	const finalval = x * y;
	return(
		<>
			{finalval}
		</>
	)
}



export default CurrencyConv;