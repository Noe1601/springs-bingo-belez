import { Request, Response } from 'express';
import { generateJWT } from '../shared/helper/generate-jwt';
import { getMenuFrontEnd } from '../shared/helper/menu-front';
import User from '../shared/models/user.model';

export const login = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const userAuthenticate = await User.findOne({
            attributes: ['id','ROLE','NAME'],
            where: {
                EMAIL: body.email,
                PASSWORD: body.password,
                STATE: true
            }
        });

        if(!userAuthenticate){
            return res.status(404).json({
                ok: false,
                message: 'Credenciales invalidas'
            })
        }

        const id = userAuthenticate.getDataValue('id');
        const user_role = userAuthenticate.getDataValue('ROLE');

        const token = await generateJWT(id);

        res.json({
            userAuthenticate,
            token,
            menu: getMenuFrontEnd(user_role)
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}