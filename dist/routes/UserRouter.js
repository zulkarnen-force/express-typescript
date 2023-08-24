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
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserRouter = (0, express_1.Router)();
const userController = new UserController_1.default(new User_1.default());
UserRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userController.list();
    return res.json(users);
}));
UserRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    return yield userController.findOne(userId);
}));
UserRouter.post("/", (req, res) => { });
exports.default = UserRouter;
