"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    // Throw error if .env file is not created
    throw result.error;
}
var http = axios_1.default;
var API_URL = process.env.API_URL;
var API_APP_ID = process.env.API_APP_ID;
http.defaults.baseURL = API_URL;
http.interceptors.request.use(function (config) {
    config.params = __assign(__assign({}, config.params), { appid: API_APP_ID });
    return config;
});
exports.default = http;
