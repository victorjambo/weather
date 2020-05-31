"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
var http_1 = require("./utils/http");
var Weather = /** @class */ (function () {
    function Weather(locations) {
        var _this = this;
        this.handleError = function (error, location) {
            console.log('\x1b[31m%s\x1b[0m', error.message);
            if (location) {
                console.log('\x1b[31m%s\x1b[0m', "\"" + location + "\" city not found\n");
            }
        };
        this.formatWeatherDataFromResponse = function (response) {
            return response.map(function (res) {
                if (res.errMessage) {
                    return {
                        location: res.location,
                        errMessage: res.errMessage,
                    };
                }
                var name = res.name, all = res.clouds.all, timezone = res.timezone, weather = res.weather, speed = res.wind.speed, humidity = res.main.humidity;
                return {
                    humidity: humidity,
                    timezone: timezone,
                    clouds: all,
                    location: name,
                    windSpeed: speed,
                    weather: weather[0].description,
                };
            });
        };
        this.requestWeatherInfo = function (location) { return __awaiter(_this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, http_1.default.get("?q=" + location)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 2:
                        e_1 = _a.sent();
                        this.handleError(e_1, location);
                        return [2 /*return*/, {
                                location: location,
                                errMessage: 'city not found',
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getWeatherInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            var requestMultipleLocations, response, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        requestMultipleLocations = this.locations.map(function (loc) { return _this.requestWeatherInfo(loc); });
                        return [4 /*yield*/, http_1.default.all(requestMultipleLocations)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.formatWeatherDataFromResponse(response)];
                    case 2:
                        e_2 = _a.sent();
                        this.handleError(e_2);
                        throw e_2.message;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.locations = locations;
    }
    return Weather;
}());
exports.default = Weather;
