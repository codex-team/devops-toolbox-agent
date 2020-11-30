"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
/**
 * Class for settings
 */
class Config {
}
exports.default = Config;
/**
 * Api url
 */
Config.apiUrl = process.env.API_URL;
/**
 * Cron schedule
 */
Config.schedule = process.env.SCHEDULE;
/**
 * Server token
 */
Config.token = process.env.TOKEN;
