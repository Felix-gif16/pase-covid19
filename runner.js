const moment = require('moment');
const reader = require('./reader');
const Case = require('./database');
const countries = require('./countries')


const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
//moment().format('YYYY-MM-DD HH:m:s');
const date = moment(yesterday).format('MM-DD-YYYY');
const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`;

const getUpdate = async function(){
    reader(url, countries, Case);
};

getUpdate().catch(console.log);

const hours = 24;
const interval = hours * 3600000;

setInterval(function (){
    //catch all the errors.
    getUpdate().catch(console.log);
}, interval);
