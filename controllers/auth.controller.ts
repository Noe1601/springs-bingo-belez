import { Request, Response } from 'express';
import User from '../shared/models/user.model';

export const login = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const userAuthenticate = await User.findOne({
            where: {
                EMAIL: body.email,
                PASSWORD: body.password
            }
        });

        if(!userAuthenticate){
            return res.status(404).json({
                ok: false,
                message: 'Error in authentication, try again'
            })
        }

        res.json({
            userAuthenticate
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}