import e, { Request, Response } from "express";
import Partidas from "../shared/models/partidas.model";
import { create, getById, update } from "../shared/services/crud.service";
import PartidasJugadas from "../shared/models/partidas-jugadas.model";


export const getPartidasJugadasById = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params;
        
        const jugadaPartidaByPartidaId = await PartidasJugadas.findOne({
            where: {
                partida_id: id
            }
        })

        if(!jugadaPartidaByPartidaId){
            return res.status(404).json({
                message: 'Esta partida no existe'
            });
        }

        return res.json({
            list: jugadaPartidaByPartidaId
        })

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
}

export const createPartidaJugadas = async (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const existsPartida = await Partidas.findOne({
            where: {
                id: body.partida_id
            }
        });

        const existsPartidaInPartidasJugada = await PartidasJugadas.findOne({
            where: {
                partida_id: id
            }
        })

        if ( !existsPartida) {
            return res.status(404).json({
                message: 'Esta partida no existe'
            });
        }

        if(existsPartidaInPartidasJugada){

            await existsPartidaInPartidasJugada.update(body);

            res.json({
                existsPartidaInPartidasJugada
            });

        }else{
            const token = Math.floor(100000 + Math.random() * 900000)

            const buildPartidaJugada = {
                ...body,
                id: token
            }
    
            create(buildPartidaJugada, req, res, PartidasJugadas);
        }



    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }

}