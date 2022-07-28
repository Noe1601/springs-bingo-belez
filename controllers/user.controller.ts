import { Request, Response } from "express";
import User from "../shared/models/user.model";
import Code from "../shared/models/code.model";
import { create, deleteObject, get, getById, update } from "../shared/services/crud.service";

export const getUsers = async (req: Request, res: Response) => {
    get({ where: { STATE: true } }, req, res, User);
}

export const getUsersDesactivated = async (req: Request, res: Response) => {
    get({ where: { STATE: false } }, req, res, User);
}

export const getUserById = async (req: Request, res: Response) => {
    getById(req, res, User);
}


export const createUser = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const emailExists = await User.findOne({
            where: {
                EMAIL: body.EMAIL
            }
        })

        if (emailExists) {
            return res.status(400).json({
                message: `Ya existe un usuario con el correo ${body.EMAIL}, intenta registrarte con algun otro.`
            });
        }


        if (body.CODE == null) {
            return res.status(400).json({
                message: 'El token de verificacion es requerido'
            })
        }

        const verifyToken = await Code.findOne({
            where: {
                CODE: body.CODE
            }
        })

        if (!verifyToken) {
            return res.status(404).json({
                ok: false,
                message: 'Este token no es valido'
            })
        }

        const token = Math.floor(100000 + Math.random() * 900000)

        const userObject = {
            ...body,
            id: token
        }

        create(userObject, req, res, User);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const updateUser = async (req: Request, res: Response) => {
    update(req, res, User);
}

export const deleteUser = async (req: Request, res: Response) => {
    deleteObject({ STATE: false }, req, res, User);
}

export const activateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const userToActivate = await User.findOne({
        where: {
            id,
            STATE: false
        }
    })

    if (!userToActivate) {
        return res.status(204).json({
            ok: false,
            message: `User with ${id} not is desactivated`
        })
    }


    const userUpdated = await userToActivate.update({ STATE: true });

    res.status(200).json({
        userUpdated
    })
}


export const recuperatePassword = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        const user = await User.findOne({
            where: {
                EMAIL: body.email
            }
        });

        if (!user) {
            return res.status(404).json({
                message: `Este correo es invalido`
            });
        }

        if (!body.code_confirmation) {
            return res.status(400).json({
                message: 'El token de verificacion es requerido.'
            })
        }

        const verifyToken = await Code.findOne({
            where: {
                CODE: body.code_confirmation
            }
        })

        if (!verifyToken) {
            return res.status(404).json({
                ok: false,
                message: 'El token de verificacion es invalido.'
            })
        }

        await user.update({
            PASSWORD: body.password
        });

        res.status(202).json({
            ok: true,
            message: 'Se actualizo correctamente.'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}