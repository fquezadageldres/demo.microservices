import UserProvider from '../providers/user.provider';
import connection from '../providers/connection';
import { UserDto } from '../dto/user.dto'

export default class UserFacade {
  protected userProvider?: UserProvider;

  constructor(
    dataUserProvider: UserProvider = null,
  ) {
    this.userProvider = dataUserProvider || new UserProvider(connection);
  }

  public async getUsers() {
    return this.userProvider.getUsers();
  }

  public async createUser(req:UserDto) {
    return this.userProvider.createUser(req);
  }
}