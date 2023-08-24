import IEncounterRepository from "../respository/IEncounterRepository";
import mongoose, { Schema, Document } from "mongoose";

export interface Encounter extends Document {
  resourceType: {
    type: Schema.Types.Mixed;
    required: true;
  };
  identifier: [Schema.Types.Mixed];
  status: {
    type: Schema.Types.Mixed;
  };
  class: {
    type: Schema.Types.Mixed;
  };
  subject: {
    type: Schema.Types.Mixed;
  };
  participant: [String];
  period: { type: Schema.Types.Mixed };
  location: { type: [Schema.Types.Mixed] };
  statusHistory: { type: [Schema.Types.Mixed] };
  serviceProvider: {
    type: Schema.Types.Mixed;
  };
}

const schema: Schema = new Schema<Encounter>({
  resourceType: {
    type: Schema.Types.Mixed,
    required: true,
  },
  identifier: [Schema.Types.Mixed],
  status: {
    type: Schema.Types.Mixed,
  },
  class: {
    type: Schema.Types.Mixed,
  },
  subject: {
    type: Schema.Types.Mixed,
  },
  participant: [[Schema.Types.Mixed]],
  period: { type: Schema.Types.Mixed },
  location: { type: [Schema.Types.Mixed] },
  statusHistory: { type: [Schema.Types.Mixed] },
  serviceProvider: {
    type: Schema.Types.Mixed,
  },
});

schema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
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

const Encounter = mongoose.model<Encounter>("Encounter", schema);

class MongoEncounter implements IEncounterRepository {
  async findOne(id: string) {
    return await Encounter.findById(id);
  }
  async getAll() {
    return await Encounter.find({});
  }
  async store(data: any) {
    const encounter = new Encounter(data);
    return await encounter.save(data);
  }
}

export default MongoEncounter;
