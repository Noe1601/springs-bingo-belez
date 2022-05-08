import express, { Application } from 'express';
import userRouter from '../shared/routes/users.routes';
import codeRouter from '../shared/routes/code.routes';
import authRouter from '../shared/routes/auth.routes';
import cors from 'cors';
import db from '../db/connection';


export default class Server {

    private app: Application;
    private port: string;

    private paths = {
        users: '/api/users',
        auth: '/api/auth',
        code: '/api/code',
        stablishment: '/api/stablishment',
        workers: '/api/workers'
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

