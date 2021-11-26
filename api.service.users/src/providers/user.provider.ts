import { User } from '@prisma/client';
import { UserDto } from '../dto/user.dto'
import { IConnection } from './connection';
 

export default class UserProvider {
    constructor(private connection: IConnection) {}

    public async getUsers() {
        return this.connection.prisma.user.findMany()
    }

    public async createUser(data:UserDto | any): Promise<User> {
        return this.connection.prisma.user.create({
            data
        })
    }
}