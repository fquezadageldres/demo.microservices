"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UserProvider {
    constructor(prisma = new client_1.PrismaClient()) {
        this.prisma = prisma;
    }
    async getUsers() {
        return this.prisma.user.findMany();
    }
    async createUser(req) {
        return this.prisma.user.create({
            data: req
        });
    }
}
exports.default = UserProvider;
//# sourceMappingURL=user.provider.js.map