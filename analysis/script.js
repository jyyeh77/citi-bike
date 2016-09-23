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

let byDay = R.groupBy(R.prop("dayOfWeek"));

let byMeridian = R.groupBy(R.prop("meridian"));

let byHour = R.groupBy(R.prop("hour"));


// start local server to use d3
// python -m SimpleHTTPServer 8888 &

d3.csv('http://localhost:8888/out.csv', function(data) {
    var dataset = data;
    // R.forEach(collectStations, dataset);

    // object where key/values are stationID:(arrayOfStationObjects)
    let stationGroupObj = byStation(dataset);

    attachTimes(stationGroupObj);

    let dayObj = {};

    // for each station ID key, make value object of key/value pairs such that
    // "Wednesday": [array of station objects]
    for (let station in stationGroupObj) {
        dayObj[station] = byDay(stationGroupObj[station]);
    }

    // sorts each day into AM/PM
    let amPmObj = {};

    for (let id in dayObj) {
        amPmObj[id] = {};
        for (let day in dayObj[id]) {
            amPmObj[id][day] = byMeridian(dayObj[id][day]);
        }
    }

    // sort by hour

    let hourObj = {};

    for (let id in amPmObj) {
        hourObj[id] = {};
        for (let day in amPmObj[id]) {
            hourObj[id][day] = {};
            for (let meridian in amPmObj[id][day]) {
                hourObj[id][day][meridian] = byHour(amPmObj[id][day][meridian]);
            }
        }
    }


    // calculates avg of bikes / avg of docks per station per hour
    let averages = {};

    for (let id in hourObj) {
        averages[id] = {};
        for (let day in hourObj[id]) {
            averages[id][day] = {};
            for (let meridian in hourObj[id][day]) {
                averages[id][day][meridian] = {};
                for (let hour in hourObj[id][day][meridian]) {
                    averages[id][day][meridian][hour] = {};
                    let bikes = [];
                    let docks = [];
                    for (let point in hourObj[id][day][meridian][hour]) {
                      bikes.push(hourObj[id][day][meridian][hour][point]["NUM BIKES AVAILABLE"]);
                      docks.push(hourObj[id][day][meridian][hour][point]["NUM DOCKS AVAILABLE"]);
                    }
                    averages[id][day][meridian][hour]["bikes"] = R.mean(bikes);
                    averages[id][day][meridian][hour]["docks"] = R.mean(docks);
                }
            }
        }
    }

    // console.log(averages[72]['Friday']['am']['9']);



})














// using csvtojson npm module
// var Converter = require('csvtojson').Converter;
// var converter = new Converter({});

// converter.on("end_parsed", function (jsonArray) {
//   console.log(jsonArray[0]);
//   console.log(jsonArray.length);
// })

// require("fs").createReadStream("./out.csv").pipe(converter);
