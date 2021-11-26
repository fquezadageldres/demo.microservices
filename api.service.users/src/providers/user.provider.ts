import { User, PrismaClient } from '@prisma/client';
import { UserDto } from '../dto/user.dto'
 

export default class UserProvider {
    constructor(private prisma = new PrismaClient()) {}

    public async getUsers() {
        return this.prisma.user.findMany()
    }

    public async createUser(data:UserDto | any): Promise<User> {
        return this.prisma.user.create({
            data
        })
    }
}