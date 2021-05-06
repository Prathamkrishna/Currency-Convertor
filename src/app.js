import React, { useEffect } from "react";

const API_KEY = `d0f777c796f1003bc1a7ef7b77863799`;

function CurrencyConv() {
	useEffect(() => {
		fetch(`http://api.currencylayer.com/live?access_key=${API_KEY}`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				console.log({ res });
			});
	}, []);
	return <div>Currency Converter</div>;
}

export default CurrencyConv;
