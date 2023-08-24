"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    nik: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: true,
    },
    verified_email: {
        type: Boolean,
        default: false,
    },
    account_type: {
        type: String,
        enum: ["ultimate", "platinum", "silver", "bronze"],
        default: "bronze",
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    },
});
// schema.virtual("id").get(function () {
//   return this._id.toHexString();
// });
schema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v; // Optionally remove the version field as well
        delete ret.password; // Optionally remove the version field as well
        ret.timestamps = {};
        ret.timestamps.created_at = ret.created_at;
        ret.timestamps.updated_at = ret.updated_at;
        delete ret.created_at;
        delete ret.updated_at;
    },
});
schema.method("mapTimestamps", function () {
    return {
        id: this.id,
        name: this.name,
        nik: this.nik,
        email: this.email,
        verified_email: this.verified_email,
        account_type: this.account_type,
        timestamps: {
            created_at: this.created_at,
            updated_at: this.updated_at,
        },
    };
});
const User = mongoose_1.default.model("User", schema);
exports.default = User;
