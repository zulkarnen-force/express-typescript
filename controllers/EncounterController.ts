import IEncounterRepository from "../respository/IEncounterRepository";

class EncounterController {
  model: IEncounterRepository;
  constructor(model: IEncounterRepository) {
    this.model = model;
  }

  async list() {
    return await this.model.getAll();
  }

  async store(data: any) {
    return await this.model.store(data);
  }

  async getOne(id: string) {
    return await this.model.findOne(id);
  }
}

export default EncounterController;
