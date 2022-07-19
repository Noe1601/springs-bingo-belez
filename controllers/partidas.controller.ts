import { Request, Response } from "express";
import Partidas from "../shared/models/partidas.model";
import { create, deleteObject, get, getById, update } from "../shared/services/crud.service";

export const getPartidas = async(req: Request, res: Response) => {
    get({ where: { state: true }},req,res,Partidas);
}

export const getPartidasDesactivated = async(req: Request, res: Response) => {
    get({ where: { state: false }},req,res,Partidas);
}

export const getPartidaById = async(req: Request, res: Response) => {
    getById(req,res,Partidas);

}

export const createPartida = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildPartida = {
            ...body,
            id: token
        }

        create(buildPartida,req,res,Partidas);
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updatePartida = async(req: Request, res: Response) => {
    update(req,res,Partidas);
}

export const deletePartida = async(req: Request, res: Response) => {
    deleteObject({state: false},req,res,Partidas);
}