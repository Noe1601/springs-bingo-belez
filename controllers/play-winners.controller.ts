import { Request, Response } from "express";
import PlaysAndWinners from "../shared/models/play-winners.model";

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