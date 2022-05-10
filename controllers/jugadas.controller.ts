import { Request, Response } from "express";
import Jugada from "../shared/models/jugada.model";

export const getJugadas = async(req: Request, res: Response) => {

    const jugadas = await Jugada.findAll({
        where: {
            state: true
        }
    });

    res.json({
        jugadas    
    })
}

export const getJugadasById = async(req: Request, res: Response) => {

    const { id } = req.params;

    const jugada = await Jugada.findByPk(id);

    if(jugada){
        res.json({
            jugada
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists jugada with ${ id } number ID`
        })
    }

 
}

export const createJugada = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const jugadaExists = await Jugada.findOne({
            where: {
                name: body.name
            }
        });

        if(jugadaExists){
            return res.status(400).json({
                message: `Already exists an jugada with name ${ body.name }, try with another one`
            });
        }

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildJugada = {
            ...body,
            id: token
        }

        const jugada = await Jugada.create(buildJugada);

        res.json({
            jugada
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateJugada = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const jugada = await Jugada.findByPk(id);

        if(!jugada){
            return res.status(404).json({
                message: `Not exists an jugada with this ID`
            });
        }

        await jugada.update( body );
        
        res.json(jugada);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteJugada = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await Jugada.findByPk(id);

    if(!user){
        return res.status(404).json({
            message: `Not exists an jugada with this ID`
        });
    }

    await user.update({ state: false });

    res.json({
        message: `Jugada deleted`
    });

}