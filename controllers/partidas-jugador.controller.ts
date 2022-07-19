import { Request, Response } from "express";
import Jugador from "../shared/models/jugadores.model";
import PartidasJugador from "../shared/models/partidas-jugador.model";
import Partidas from "../shared/models/partidas.model";
import { create, deleteObject, get, getById, update } from "../shared/services/crud.service";

export const getPartidasJugador = async(req: Request, res: Response) => {
    get({ where: { state: true }},req,res,PartidasJugador);
}

export const getPartidasJugadorDesactivated = async(req: Request, res: Response) => {
    get({ where: { state: false }},req,res,PartidasJugador);
}

export const getPartidasJugadorById = async(req: Request, res: Response) => {
    getById(req,res,PartidasJugador);
}

export const createPartidaJugador = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const existsJugador = await Jugador.findOne({
            where: {
                id: body.jugador_id
            }
        });

        const existsPartida = await Partidas.findOne({
            where: {
                id: body.partida_id
            }
        });

        const existRecord = await PartidasJugador.findOne({
            where: {
                jugador_id: body.jugador_id,
                partida_id: body.partida_id
            }
        })

        if(!existsJugador || !existsPartida){
            return res.status(404).json({
                message: 'La peticion es invalida'
            });
        }

        if(existRecord){
            return res.json({
                message: 'Ya este jugador este registrado en esta partida.'
            })
        }

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildPartida = {
            ...body,
            id: token
        }

        create(buildPartida,req,res,PartidasJugador);
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const updatePartidaJugador = async(req: Request, res: Response) => {
    update(req,res,PartidasJugador);
}

export const deletePartidaJugador = async(req: Request, res: Response) => {
    deleteObject({state: false},req,res,PartidasJugador);
}