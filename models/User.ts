import IUserRepository from "../respository/IUserRepository";
import UserModel from "./UserModel";

class User implements IUserRepository {
  async findOne(id: string) {
    return await UserModel.findOne({ id: id });
  }
  async getAll() {
    return await UserModel.find({});
  }
  async store(data: any) {
    const user = new UserModel(data);
    return await user.save(data);
  }
}

export default User;
