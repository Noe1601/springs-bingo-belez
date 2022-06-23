import { Request, Response } from "express";
import Jugador from "../shared/models/jugadores.model";
import Winner from "../shared/models/winners.model";
import { create, deleteDefinitive, getById, update } from "../shared/services/crud.service";

export const getWinners = async(req: Request, res: Response) => {

    const winners = await Winner.findAll();

    res.json({
        winners    
    })
}

export const getWinnersById = async(req: Request, res: Response) => {
    debugger
    getById(req,res,Winner);
}

export const createWinner = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildWinner = {
            ...body,
            id: token,
            jugada_id: body.jugada_id
        }

        create(buildWinner,req,res,Winner);
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const updateWinner = async(req: Request, res: Response) => {
    update(req,res,Winner);
}

export const deleteWinner = async(req: Request, res: Response) => {
    deleteDefinitive(req,res,Winner);
}