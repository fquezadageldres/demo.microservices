import { User, PrismaClient } from '@prisma/client';
export default class UserProvider {
    private prisma;
    constructor(prisma?: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>);
    getUsers(): Promise<User[]>;
    createUser(req: any): Promise<User>;
}
