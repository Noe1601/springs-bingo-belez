import { Request, Response } from "express";
import User from "../shared/models/user.model";
import Code from "../shared/models/code.model";

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll({
        where: {
            STATE: true
        }
    });

    res.json({
        users
    })
}

export const getUserById = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json({
            user
        })
    }else{
        res.status(404).json({
            ok: false,
            message: `Not exists user with ${ id } number ID`
        })
    }

 
}

export const createUser = async(req: Request, res: Response) => {
    
    const { body } = req;

    try {

        const emailExists = await User.findOne({
            where: {
                EMAIL: body.EMAIL
            }
        })

        if(emailExists){
            return res.status(400).json({
                message: `Already exists an user with email ${ body.EMAIL }, try with another one`
            });
        }


        if(body.CODE == null){
            return res.status(400).json({
                message: 'The token verification is required'
            })
        }

        const verifyToken = await Code.findOne({
            where: {
                CODE: body.CODE
            }
        })

        if(!verifyToken){
            return res.status(404).json({
                ok: false,
                message: 'This token is invalid, try again.'
            })
        }

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildUser = {
            ...body,
            id: token
        }

        const user = await User.create(buildUser);

        res.json({
            user,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }

}

export const  updateUser = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                message: `Not exists an user with this ID`
            });
        }

        await user.update( body );
        
        res.json(user);

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}

export const deleteUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(!user){
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }

    await user.update({ STATE: false });

    res.json({
        message: `User deleted`
    });

}


export const recuperatePassword = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const user = await User.findOne({ 
            where: {
                EMAIL: body.email
            }
        });

        if(!user){
            return res.status(404).json({
                message: `This email is invalid`
            });
        }

        if(body.code_confirmation == null){
            return res.status(400).json({
                message: 'The token verification is required'
            })
        }

        const verifyToken = await Code.findOne({
            where: {
                CODE: body.code_confirmation
            }
        })

        if(!verifyToken){
            return res.status(404).json({
                ok: false,
                message: 'This token is invalid, try again.'
            })
        }

        await user.update( body );
        
        res.json({
            ok: true,
            message: 'Password updated'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}