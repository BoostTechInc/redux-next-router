"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouterMiddleware = exports.ConnectedRouter = exports.routerReducer = exports.initialRouterState = exports.routerMethods = exports.prefetch = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.routerActions = exports.CALL_ROUTER_METHOD = exports.LOCATION_CHANGE = void 0;
var plain_1 = __importDefault(require("./structure/plain"));
var ConnectedRouter_1 = __importDefault(require("./ConnectedRouter"));
var reducer_1 = __importDefault(require("./reducer"));
var createInitialRouterState_1 = __importDefault(require("./utils/createInitialRouterState"));
var middleware_1 = __importDefault(require("./middleware"));
var actions_1 = require("./actions");
Object.defineProperty(exports, "LOCATION_CHANGE", { enumerable: true, get: function () { return actions_1.LOCATION_CHANGE; } });
Object.defineProperty(exports, "CALL_ROUTER_METHOD", { enumerable: true, get: function () { return actions_1.CALL_ROUTER_METHOD; } });
Object.defineProperty(exports, "routerActions", { enumerable: true, get: function () { return actions_1.routerActions; } });
Object.defineProperty(exports, "push", { enumerable: true, get: function () { return actions_1.push; } });
Object.defineProperty(exports, "replace", { enumerable: true, get: function () { return actions_1.replace; } });
Object.defineProperty(exports, "go", { enumerable: true, get: function () { return actions_1.go; } });
Object.defineProperty(exports, "goBack", { enumerable: true, get: function () { return actions_1.goBack; } });
Object.defineProperty(exports, "goForward", { enumerable: true, get: function () { return actions_1.goForward; } });
Object.defineProperty(exports, "prefetch", { enumerable: true, get: function () { return actions_1.prefetch; } });
var routerMethods_1 = require("./routerMethods");
Object.defineProperty(exports, "routerMethods", { enumerable: true, get: function () { return __importDefault(routerMethods_1).default; } });
exports.initialRouterState = (0, createInitialRouterState_1.default)(plain_1.default);
exports.routerReducer = (0, reducer_1.default)(plain_1.default);
exports.ConnectedRouter = (0, ConnectedRouter_1.default)(plain_1.default);
exports.createRouterMiddleware = (0, middleware_1.default)(plain_1.default);
