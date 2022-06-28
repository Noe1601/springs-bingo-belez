import express, { Application } from 'express';
import userRouter from '../shared/routes/users.routes';
import codeRouter from '../shared/routes/code.routes';
import authRouter from '../shared/routes/auth.routes';
import jugadasRouter from '../shared/routes/jugadas.routes';
import winnerRouter from '../shared/routes/winners.routes';
import jugadoresRouter from '../shared/routes/jugadores.routes';
import playWinnersRouter from '../shared/routes/play-winner.routes';
import settingsRouter from '../shared/routes/settings.routes';
import cors from 'cors';
import db from '../db/connection';


export default class Server {

    private app: Application;
    private port: string;

    private paths = {
        users: '/api/users',
        auth: '/api/auth',
        code: '/api/code',
        jugadas: '/api/jugadas',
        winners: '/api/winners',
        jugadores: '/api/jugadores',
        settings: '/api/settings',
        playWinners: '/api/playwinners'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
        } catch (error) {
            throw new Error('Error');
        }
    }

    routes(){
        this.app.use( this.paths.users, userRouter);
        this.app.use( this.paths.auth, authRouter );
        this.app.use( this.paths.code, codeRouter );
        this.app.use( this.paths.jugadas, jugadasRouter );
        this.app.use( this.paths.winners, winnerRouter );
        this.app.use( this.paths.jugadores, jugadoresRouter );
        this.app.use( this.paths.playWinners, playWinnersRouter );
        this.app.use( this.paths.settings, settingsRouter );
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        })
    }
    
}

