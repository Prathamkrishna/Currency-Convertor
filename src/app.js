import React from "react";
import axios from 'axios';

const API_KEY = `d0f777c796f1003bc1a7ef7b77863799`;
const endpoint = 'convert';
const INR = 'INR';

// axios({
// 	method: 'get',
// 	url: 'http://api.currencylayer.com',
// 	responseType: 'stream'	
// })
// 	.then(function(response){
// 		response.data.pipe(fs.create)
// 	})
// axios('/'+endpoint+'?access_key='+API_KEY+'&from='+props+'&to='+INR+'&amount='+amount)

function CurrencyConv(props) {
//   useEffect(() => {
//     fetch('http://api.currencylayer.com/' + endpoint + '?access_key=' + API_KEY + '&from=' + props + '&to=' + INR + '&amount=' + amount, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log({ res });
//       });
//     console.log(props);
// 	console.log(amount);
//   }, [props, amount]);
//   console.log(res\\);
	console.log(props.currency)
	console.log(props.amount)
	axios.get({
		url: 'http://api.currencylayer.com/' + endpoint + '?access_key=' + API_KEY + '&from=' + props.currency + '&to=' + INR + '&amount=' + props.amount
	})
	.then(function(response){
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	  })
	return <div>Currency Converter</div>;
}

export default CurrencyConv;
