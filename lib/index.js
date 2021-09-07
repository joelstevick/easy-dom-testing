"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var merge_config_1 = require("./api/merge-config/merge-config");
var pom_1 = require("./api/pom/pom");
// api
exports.api = { mergeConfig: merge_config_1.mergeConfig, POM: pom_1.POM };
