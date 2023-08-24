/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst UserRouter_1 = __importDefault(__webpack_require__(/*! ./routes/UserRouter */ \"./routes/UserRouter.ts\"));\nconst app = (0, express_1.default)();\nconst port = process.env.PORT || 8000;\napp.use(\"/users\", UserRouter_1.default);\napp.listen(port, () => {\n    console.log(`Server is Fire at http://localhost:${port}`);\n    mongoose_1.default\n        .connect(\"mongodb://127.0.0.1:27017/labmu\")\n        .then(() => console.log(`mongoo DB is has been connected`));\n});\n\n\n//# sourceURL=webpack://express-ts/./index.ts?");

/***/ }),

/***/ "./models/UserModel.ts":
/*!*****************************!*\
  !*** ./models/UserModel.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst schema = new mongoose_1.Schema({\n    name: {\n        type: String,\n        required: true,\n    },\n    nik: {\n        type: String,\n        default: \"\",\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: [true, \"Email is required\"],\n    },\n    password: {\n        type: String,\n        required: true,\n    },\n    verified_email: {\n        type: Boolean,\n        default: false,\n    },\n    account_type: {\n        type: String,\n        enum: [\"ultimate\", \"platinum\", \"silver\", \"bronze\"],\n        default: \"bronze\",\n    },\n    created_at: {\n        type: Date,\n        default: Date.now(),\n    },\n    updated_at: {\n        type: Date,\n        default: Date.now(),\n    },\n});\n// schema.virtual(\"id\").get(function () {\n//   return this._id.toHexString();\n// });\nschema.set(\"toJSON\", {\n    virtuals: true,\n    transform: function (doc, ret) {\n        ret.id = ret._id;\n        delete ret._id;\n        delete ret.__v; // Optionally remove the version field as well\n        delete ret.password; // Optionally remove the version field as well\n        ret.timestamps = {};\n        ret.timestamps.created_at = ret.created_at;\n        ret.timestamps.updated_at = ret.updated_at;\n        delete ret.created_at;\n        delete ret.updated_at;\n    },\n});\nschema.method(\"mapTimestamps\", function () {\n    return {\n        id: this.id,\n        name: this.name,\n        nik: this.nik,\n        email: this.email,\n        verified_email: this.verified_email,\n        account_type: this.account_type,\n        timestamps: {\n            created_at: this.created_at,\n            updated_at: this.updated_at,\n        },\n    };\n});\nconst User = mongoose_1.default.model(\"User\", schema);\nexports[\"default\"] = User;\n\n\n//# sourceURL=webpack://express-ts/./models/UserModel.ts?");

/***/ }),

/***/ "./routes/UserRouter.ts":
/*!******************************!*\
  !*** ./routes/UserRouter.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst UserModel_1 = __importDefault(__webpack_require__(/*! ../models/UserModel */ \"./models/UserModel.ts\"));\nconst UserRouter = (0, express_1.Router)();\nUserRouter.get(\"/\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const users = yield UserModel_1.default.find({});\n    res.status(200).json({\n        users,\n    });\n}));\nUserRouter.post(\"/\", (req, res) => { });\nexports[\"default\"] = UserRouter;\n\n\n//# sourceURL=webpack://express-ts/./routes/UserRouter.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;