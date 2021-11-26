import { Prisma, PrismaClient } from '@prisma/client';

export interface IConnection {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
}

class Connection implements IConnection {
  prisma: PrismaClient<Prisma.PrismaClientOptions, 
  never, 
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
  constructor() { 
    this.prisma = new PrismaClient()
  }
}


const connection = new Connection();
export default connection;