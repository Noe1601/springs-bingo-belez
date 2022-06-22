import { Request, Response } from "express";
import Jugada from "../shared/models/jugada.model";
import Jugador from "../shared/models/jugadores.model";
import { create, deleteObject, get, getById, update } from "../shared/services/crud.service";

export const getJugadores = async (req: Request, res: Response) => {
    get({ where: { state: true } }, req, res, Jugador);
}

export const getJugadorById = async (req: Request, res: Response) => {
    getById(req, res, Jugador);
}

export const createJugador = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildJugador = {
            ...body,
            id: token
        }

        create(buildJugador, req, res, Jugador);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const updateJugador = async (req: Request, res: Response) => {
    update(req, res, Jugador);
}

export const deleteJugador = async (req: Request, res: Response) => {
    deleteObject({ state: false }, req, res, Jugador);
}