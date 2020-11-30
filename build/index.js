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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const taskManager_1 = __importDefault(require("./taskManager"));
const config_1 = __importDefault(require("./config"));
/**
 * Task Manager will send current services to the API by a schedule
 */
const taskManager = new taskManager_1.default(config_1.default.schedule, () => __awaiter(void 0, void 0, void 0, function* () {
    const services = [
        {
            type: 'nginx',
            payload: [
                {
                    serverName: 'api.notes.codex.so',
                    listen: [
                        '443',
                    ],
                    proxyPass: [
                        'http://127.0.0.1:5500/',
                    ],
                },
            ],
        },
        {
            type: 'docker',
            payload: [
                {
                    names: 'codexnotesserver_nginx_1',
                    containerId: 'cfcc3015502b',
                    image: 'codexnotesserver_nginx',
                    created: '2019-10-30 08:30:15',
                    status: 'Up 3 weeks',
                    ports: [
                        {
                            inner: {
                                host: '',
                                port: 80,
                                type: 'tcp',
                            },
                            outer: {
                                host: '127.0.0.1',
                                port: 5500,
                                type: '',
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'ports',
            payload: [
                {
                    proto: 'tcp',
                    localAddress: {
                        host: '0.0.0.0',
                        port: 80,
                    },
                    state: 'LISTEN',
                },
            ],
        },
        {
            type: 'interfaces',
            payload: [
                {
                    name: 'ens3',
                    ipAddress: '92.53.77.245',
                    netmask: '24',
                },
            ],
        },
        {
            type: 'disk',
            payload: {
                All: 29.47,
                Used: 23.97,
                Free: 5.5,
                Percent: 81,
            },
        },
    ];
    const payload = {
        services,
    };
    const requestMessage = {
        messageId: '1',
        type: 'services-update',
        payload,
    };
    const res = yield node_fetch_1.default(config_1.default.apiUrl, {
        method: 'put',
        body: JSON.stringify(requestMessage),
        headers: {
            'Content-Type': 'application/json',
            Authorization: config_1.default.token,
        },
    });
}));
