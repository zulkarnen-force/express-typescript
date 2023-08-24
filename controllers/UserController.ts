import IUserRepository from "../respository/IUserRepository";

class UserController {
  user: IUserRepository;

  constructor(user: IUserRepository) {
    this.user = user;
  }

  async save(data: any) {
    await this.user.store(data);
  }

  async findOne(id: string) {
    await this.user.findOne({ id: id });
  }

  async list() {
    return await this.user.getAll();
  }
}

export default UserController;
