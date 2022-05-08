"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("../shared/routes/users.routes"));
const code_routes_1 = __importDefault(require("../shared/routes/code.routes"));
// import authRouter from '../../infraestructure/routes/auth.routes';
// import codeRouter from '../../infraestructure/routes/code.routes';
// import stablishmentRouter from '../../infraestructure/routes/stablishment.routes';
// import workerRouter from '../../infraestructure/routes/worker.routes';
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users',
            auth: '/api/auth',
            code: '/api/code',
            stablishment: '/api/stablishment',
            workers: '/api/workers'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
            }
            catch (error) {
                throw new Error('Error');
            }
        });
    }
    routes() {
        this.app.use(this.paths.users, users_routes_1.default);
        // this.app.use( this.paths.auth, authRouter );
        this.app.use(this.paths.code, code_routes_1.default);
        // this.app.use( this.paths.stablishment, stablishmentRouter );
        // this.app.use( this.paths.workers, workerRouter );
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map