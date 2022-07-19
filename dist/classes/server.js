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
const auth_routes_1 = __importDefault(require("../shared/routes/auth.routes"));
const jugadas_routes_1 = __importDefault(require("../shared/routes/jugadas.routes"));
const winners_routes_1 = __importDefault(require("../shared/routes/winners.routes"));
const jugadores_routes_1 = __importDefault(require("../shared/routes/jugadores.routes"));
const play_winner_routes_1 = __importDefault(require("../shared/routes/play-winner.routes"));
const settings_routes_1 = __importDefault(require("../shared/routes/settings.routes"));
const upload_routes_1 = __importDefault(require("../shared/routes/upload.routes"));
const partidas_routes_1 = __importDefault(require("../shared/routes/partidas.routes"));
const partidas_jugador_routes_1 = __importDefault(require("../shared/routes/partidas-jugador.routes"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users',
            auth: '/api/auth',
            code: '/api/code',
            jugadas: '/api/jugadas',
            winners: '/api/winners',
            jugadores: '/api/jugadores',
            settings: '/api/settings',
            playWinners: '/api/playwinners',
            uploadFiles: '/api/upload-field',
            partidas: '/api/partidas',
            partidaJugador: '/api/partida-jugador'
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
        this.app.use(this.paths.auth, auth_routes_1.default);
        this.app.use(this.paths.code, code_routes_1.default);
        this.app.use(this.paths.jugadas, jugadas_routes_1.default);
        this.app.use(this.paths.winners, winners_routes_1.default);
        this.app.use(this.paths.jugadores, jugadores_routes_1.default);
        this.app.use(this.paths.playWinners, play_winner_routes_1.default);
        this.app.use(this.paths.settings, settings_routes_1.default);
        this.app.use(this.paths.uploadFiles, upload_routes_1.default);
        this.app.use(this.paths.partidas, partidas_routes_1.default);
        this.app.use(this.paths.partidaJugador, partidas_jugador_routes_1.default);
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