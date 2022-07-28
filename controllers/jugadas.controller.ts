import { Request, Response } from "express";
import Jugada from "../shared/models/jugada.model";
import { create, deleteObject, get, getById, update } from "../shared/services/crud.service";

export const getJugadas = async(req: Request, res: Response) => {
    get({ where: { state: true }},req,res,Jugada);
}

export const getJugadasDesactivated = async(req: Request, res: Response) => {
    get({ where: { state: false }},req,res,Jugada);
}

export const getJugadasById = async(req: Request, res: Response) => {
    getById(req,res,Jugada);

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

        create(buildJugada,req,res,Jugada);
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateJugada = async(req: Request, res: Response) => {
    update(req,res,Jugada);
}

export const deleteJugada = async(req: Request, res: Response) => {
    deleteObject({state: false},req,res,Jugada);
}