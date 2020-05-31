"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDateTime = void 0;
exports.getCurrentDateTime = function (timezone) {
    var date = new Date();
    var timeOffset = timezone + date.getTimezoneOffset() * 60;
    var currentDateTime = new Date(date.getTime() + (timeOffset * 1000));
    return currentDateTime.toString();
};
