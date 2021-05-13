import React from 'react';

export default function OtherCurrency(props){
    //converting to USD
    // const amountt = (1/props.rate)*props.amount;
    // const amountt = 1/props.rate;
    function checkcurrency(x, y){
	    if(x.eur.finalcur === y){
            return(
                <div>
                    {x.eur.finalcur}
                </div>
            )
	    }
	    if(x.gdb.finalcur === y){
            return(
                <>
                    {x.gdb.finalcur}
                </>
            )
	    }
	    if(x.cad.finalcur === y){
            return(
                <>
                    {x.cad.finalcur}
                </>
            )
	    }
	    if(x.inr.finalcur === y){
	    	return(
                <>
                    {x.inr.finalcur}
                </>
            )
        }
	}
    return(
        <div>
            hi
            {checkcurrency(props.data, props.currency)}
        </div>
    )
}

