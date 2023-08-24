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
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(user) {
        this.user = user;
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.store(data);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.findOne({ id: id });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.user.getAll();
        });
    }
}
exports.default = UserController;
