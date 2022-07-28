import { Request, Response } from "express";
import Jugada from "../shared/models/jugada.model";
import Jugador from "../shared/models/jugadores.model";
import PlaysAndWinners from "../shared/models/play-winners.model";
import { create } from "../shared/services/crud.service";

export const getPlaysDetailsByPlayer = async(req: Request, res: Response) => {

    try {

        const { id } = req.params;
        
        const details = await PlaysAndWinners.findAll({
            where: {
                jugador_id: id
            }
        });

        res.json({
            details
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error inesperado.'
        })
    }

}


export const createPlayWinner = async(req: Request, res: Response) => {
    const { body } = req;

    if(!body.jugador_id || !body.jugada_id){
        return res.status(400).json({
            ok: false,
            message: 'Todos los campos son obligatorios'
        })
    }

    const userIsValid = Jugador.findByPk(body.jugador_id);
    const playIsValid = Jugada.findByPk(body.jugada_id);

    if(!userIsValid){
        return res.status(404).json({
            ok: false,
            message: 'Este jugador no existe en la base de datos.'
        })
    }

    if(!playIsValid){
        return res.status(404).json({
            ok: false,
            message: 'Esta jugada no existe en la base de datos.'
        })
    }

    const tokenPlayWinners = Math.floor(100000 + Math.random() * 900000);


    const buildPlayWinner = {
        id: tokenPlayWinners,
        jugada_id: body.jugada_id,
        jugador_id: body.jugador_id,
        partida_id: body.partida_id
    }

    create(buildPlayWinner,req,res,PlaysAndWinners);

    
}