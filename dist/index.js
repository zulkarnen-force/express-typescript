"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const EncounterRouter_1 = __importDefault(require("./routes/EncounterRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
app.use("/users", UserRouter_1.default);
app.use("/encounters", EncounterRouter_1.default);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
    mongoose_1.default
        .connect("mongodb://127.0.0.1:27017/labmu")
        .then(() => console.log(`mongoo DB is has been connected`));
});
