import { Request, Response } from "express";
import Winner from "../shared/models/winners.model";

export const getWinners = async(req: Request, res: Response) => {

    const winners = await Winner.findAll();

    res.json({
        winners    
    })
}

export const getWinnersById = async(req: Request, res: Response) => {

    const { id } = req.params;

    const winner = await Winner.findByPk(id);

    if(winner){
        res.json({
            winner
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists winner with ${ id } number ID`
        })
    }

 
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

        const winner = await Winner.create(buildWinner);

        res.json({
            winner
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateWinner = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const winner = await Winner.findByPk(id);

        if(!winner){
            return res.status(404).json({
                message: `Not exists an winner with this ID`
            });
        }

        await winner.update( body );
        
        res.json(winner);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}