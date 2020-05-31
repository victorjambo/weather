"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLocations = exports.convertStringToUTF = exports.trimString = exports.getLocationsFromArgv = void 0;
var utf8 = require("utf8");
exports.getLocationsFromArgv = function (argv) {
    var locationsFromArgv = argv.slice(2);
    var locationsInStrBlock = locationsFromArgv.join(' ');
    var listOflocations = locationsInStrBlock.split(',');
    var trimmedLocations = exports.trimString(listOflocations);
    var locations = exports.convertStringToUTF(trimmedLocations);
    return locations;
};
exports.trimString = function (locations) {
    return locations.map(function (location) { return location.trim(); });
};
exports.convertStringToUTF = function (locations) {
    return locations.map(function (location) { return utf8.encode(location); });
};
exports.validateLocations = function (locations) {
    if (!locations.length || (locations.length === 1 && !locations[0])) {
        throw 'NO LOCATION ENTERED';
    }
    return locations;
};
