const Case = require('./database');
const reader = require('./reader');
const countries = require('./countries');

for (let index = 1; index < 12; index++){
    let day;
    if(index < 10){
        day = '0' + index;
    } else{
        day = index;
    }
    const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/08-${day}-2020.csv`;

    reader(url, countries, Case);
}