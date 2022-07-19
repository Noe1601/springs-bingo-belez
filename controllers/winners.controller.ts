import { Request, Response } from "express";
import Jugada from "../shared/models/jugada.model";
import Jugador from "../shared/models/jugadores.model";
import PlaysAndWinners from "../shared/models/play-winners.model";
import Winner from "../shared/models/winners.model";
import { create, deleteDefinitive, getById, update } from "../shared/services/crud.service";

export const getWinners = async(req: Request, res: Response) => {

    const winners = await Winner.findAll();

    res.json({
        winners    
    })
}

export const getWinnersById = async(req: Request, res: Response) => {
    const { id } = req.params;

    const listById = await Winner.findOne({
        where: {
            jugador_id: id
        }
    });

    if (!listById) {
        return res.status(204).json({
            ok: false,
            message: `No existe jugador con este id`
        })
    }

    res.status(200).json({
        listById
    })

}

export const createWinner = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000);

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

        const buildWinner = {
            ...body,
            id: token,
            jugada_id: body.jugada_id,
            monto: body.monto
        }


        create(buildWinner,req,res,Winner);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }

}

export const updateWinner = async(req: Request, res: Response) => {
    update(req,res,Winner);
}

export const deleteWinner = async(req: Request, res: Response) => {
    deleteDefinitive(req,res,Winner);
}