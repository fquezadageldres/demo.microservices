"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_provider_1 = __importDefault(require("../providers/user.provider"));
class UserController {
    async getUsers(req, res) {
        try {
            const userProvider = new user_provider_1.default;
            const users = await userProvider.getUsers();
            res.status(200).send(users);
        }
        catch (error) {
            let err = error;
            res.status(400).send({ mesagge: err.message });
        }
    }
}
;
const usersController = new UserController;
exports.default = usersController;
//# sourceMappingURL=user.controller.js.map