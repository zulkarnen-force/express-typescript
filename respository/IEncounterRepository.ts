interface IUserRepository {
  findOne(id: any): Promise<any>;
  getAll(): Promise<any>;
  store(data: any): Promise<any>;
}

export default IUserRepository;
