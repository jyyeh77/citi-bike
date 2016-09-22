// script for analyzing citi-bike data using ramda/lodash/d3

const d3 = require("d3");
const R = require("ramda");
const _ = require("lodash");
const moment = require("moment");

let allStations = {};

// get all station IDs
let collectStations = station => {
    if (!allStations[station['STATION ID']]) allStations[station['STATION ID']] = [];
}

// callback that Ramda uses to group by station ID
let byStation = R.groupBy(station => {
    let stationId = station['STATION ID'];
    return stationId
})

// attach day of week, hour, and meridian to each data-point
let attachTimes = (groupedStations) => {
    for (let id in groupedStations) {
        groupedStations[id].forEach(timePoint => {
            timePoint["dayOfWeek"] = moment.unix(timePoint["LAST REPORTED"]).format('dddd');
            timePoint["hour"] = moment.unix(timePoint["LAST REPORTED"]).format('h');
            timePoint["meridian"] = moment.unix(timePoint["LAST REPORTED"]).format('a');
        })
    }
}

// start local server to use d3
// python -m SimpleHTTPServer 8888 &

d3.csv('http://localhost:8888/out.csv', function(data) {
    var dataset = data;
    // R.forEach(collectStations, dataset);

    // object where key/values are stationID:(arrayOfStationObjects)
    let stationGroupObj = byStation(dataset);

    attachTimes(stationGroupObj);

    console.log(stationGroupObj[72])

})














// using csvtojson npm module
// var Converter = require('csvtojson').Converter;
// var converter = new Converter({});

// converter.on("end_parsed", function (jsonArray) {
//   console.log(jsonArray[0]);
//   console.log(jsonArray.length);
// })

// require("fs").createReadStream("./out.csv").pipe(converter);
