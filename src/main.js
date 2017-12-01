"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helmet = require("helmet");
var winston = require("winston");
var app = express();
app.use(helmet());
app.get('/', function (req, res) {
    res.send('xceligent-auth');
});
app.listen(3000, function () {
    winston.log("info", "http://localhost:3000");
});
//# sourceMappingURL=main.js.map