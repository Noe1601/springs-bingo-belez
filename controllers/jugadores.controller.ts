import { Request, Response } from "express";
import Jugador from "../shared/models/jugadores.model";

export const getJugadores = async(req: Request, res: Response) => {

    const jugadores = await Jugador.findAll({
        where: {
            state: true
        }
    });

    res.json({
        jugadores
    })
}

export const getJugadorById = async(req: Request, res: Response) => {

    const { id } = req.params;

    const jugador = await Jugador.findByPk(id);

    if(jugador){
        res.json({
            jugador
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists jugador with ${ id } number ID`
        })
    }

 
}

export const createJugador = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildJugador = {
            ...body,
            id: token
        }

        const jugador = await Jugador.create(buildJugador);

        res.json({
            jugador
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateJugador = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const jugador = await Jugador.findByPk(id);

        if(!jugador){
            return res.status(404).json({
                message: `Not exists an jugador with this ID`
            });
        }

        await jugador.update( body );
        
        res.json(jugador);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteJugador = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await Jugador.findByPk(id);

    if(!user){
        return res.status(404).json({
            message: `Not exists an jugador with this ID`
        });
    }

    await user.update({ state: false });

    res.json({
        message: `User deleted`
    });

}