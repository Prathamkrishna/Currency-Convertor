import React from 'react';

export default function OtherCurrency(props){
    function checkcurrency(x, y, z){
	    if(x.eur.finalcur === y){
            const rateingdb = (x.gdb.rate/x.eur.rate)*props.amount
            const rateincad = (x.cad.rate/x.eur.rate)*props.amount
            const rateinpln = (x.pln.rate/x.eur.rate)*props.amount
            const rateininr = (x.inr.rate/x.eur.rate)*props.amount
            return(
                <div>
                    <br />
                    {x.gdb.finalcur}: {rateingdb}
                    <br />
                    {x.cad.finalcur}: {rateincad}
                    <br />
                    {x.pln.finalcur}: {rateinpln}
                    <br />
                    {x.inr.finalcur}: {rateininr}
                </div>
            )
	    }
	    if(x.gdb.finalcur === y){
            const rateineur = (x.eur.rate/x.gdb.rate)*props.amount
            const rateincad = (x.cad.rate/x.gdb.rate)*props.amount
            const rateinpln = (x.pln.rate/x.gdb.rate)*props.amount
            const rateininr = (x.inr.rate/x.gdb.rate)*props.amount
            return(
                <div>
                    <br />
                    {x.eur.finalcur}: {rateineur}
                    <br />
                    {x.cad.finalcur}: {rateincad}
                    <br />
                    {x.pln.finalcur}: {rateinpln}
                    <br />
                    {x.inr.finalcur}: {rateininr}
                </div>
            )
	    }
	    if(x.cad.finalcur === y){
            const rateineur = (x.eur.rate/x.cad.rate)*props.amount
            const rateingdb = (x.gdb.rate/x.cad.rate)*props.amount
            const rateinpln = (x.pln.rate/x.cad.rate)*props.amount
            const rateininr = (x.inr.rate/x.cad.rate)*props.amount
            return(
                <div>
                    <br />
                    {x.eur.finalcur}: {rateineur}
                    <br />
                    {x.gdb.finalcur}: {rateingdb}
                    <br />
                    {x.pln.finalcur}: {rateinpln}
                    <br />
                    {x.inr.finalcur}: {rateininr}
                </div>
            )
	    }
	    if(x.inr.finalcur === y){
            const rateineur = (x.eur.rate/x.inr.rate)*props.amount
            const rateingdb = (x.gdb.rate/x.inr.rate)*props.amount
            const rateincad = (x.cad.rate/x.inr.rate)*props.amount
            const rateinpln = (x.pln.rate/x.inr.rate)*props.amount
	    	return(
                <div>
                    <br />
                    {x.eur.finalcur}: {rateineur}
                    <br />
                    {x.gdb.finalcur}: {rateingdb}
                    <br />
                    {x.cad.finalcur}: {rateincad}
                    <br />
                    {x.pln.finalcur}: {rateinpln}
                </div>
            )
        }
	}
    return(
        <div>
            The converted amount to other currencies is:
            {checkcurrency(props.data, props.currency, props.amount)}
        </div>
    )
}

