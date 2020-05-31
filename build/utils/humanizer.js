"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeResponse = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var time_1 = require("./time");
exports.humanizeResponse = function (response) {
    return response.forEach(function (item) {
        if (item.errMessage) {
            console.log('\x1b[31m%s\x1b[0m', item.location + "\n " + item.errMessage + "\n");
        }
        else {
            var humidity = item.humidity, timezone = item.timezone, clouds = item.clouds, location = item.location, windSpeed = item.windSpeed, weather = item.weather;
            var time = time_1.getCurrentDateTime(timezone);
            console.log('\x1b[32m%s\x1b[0m', location + "\n Weather:\t" + weather + "\n Clouds:\t" + clouds + "%\n Humidity:\t" + humidity + "%\n Wind Speed:\t" + windSpeed + "m/s\n Time:\t" + time + "\n");
        }
    });
};
