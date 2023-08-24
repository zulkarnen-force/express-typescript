import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  nik: string;
  email: string;
  password: string;
  verified_email: Boolean;
  account_type: string;
  created_at: Date;
  updated_at: Date;
}

const schema: Schema = new Schema<IUser>({
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

const User = mongoose.model<IUser>("User", schema);
export default User;
