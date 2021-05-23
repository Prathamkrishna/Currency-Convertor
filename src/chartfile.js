import React from 'react';
import {BarChart,  Bar, XAxis, YAxis, Tooltip} from 'recharts';
import './chartfile.css'

export default function ChartFunction(){
    const usdinrdata = [
        {
            currency: "2021",
            currencyRate: "73"
        },
        {
            currency: "2020",
            currencyRate: "75"
        },
        {
            currency: "2019",
            currencyRate: "70"
        },
        {
            currency: "2018",
            currencyRate: "68"
        },
        {
            currency: "2017",
            currencyRate: "65"
        },
    ]
    const eurinrdata = [
        {
            currency: "2021",
            currencyRate: "89"
        },
        {
            currency: "2020",
            currencyRate: "81"
        },
        {
            currency: "2019",
            currencyRate: "80"
        },
        {
            currency: "2018",
            currencyRate: "82"
        },
        {
            currency: "2017",
            currencyRate: "75"
        },
    ]
    return(
        <div className="mainclass"> 
            <div>
                <BarChart width={300} height={400} data={usdinrdata}>
                    <Bar dataKey="currencyRate" fill="#8884d8" />
                    <XAxis dataKey="currency" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
                <br />
                USD-INR rates in the previous years
            </div>
            <div>
                <BarChart width={300} height={400} data={eurinrdata}>
                    <Bar dataKey="currencyRate" fill="#8884d8" />
                    <XAxis dataKey="currency" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
                <br />
                EUR-INR rates in the previous years
            </div>
        </div>
    )
}

