import { Request, Response } from 'express';
import Settings from '../shared/models/settings.model';
import { create } from '../shared/services/crud.service';

export const configurateSettings = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const buildSettings = {
            ...body,
            id: token
        }


        create(buildSettings, req, res, Settings);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}


export const getConfigurations = async (req: Request, res: Response) => {

    try {
        const settings = await Settings.findAll();

        res.json({
            settings
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}


export const getConfigurationById = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const settings = await Settings.findByPk(id);

        if(!settings){
            res.status(404).json({
                message: 'No existe nada con esta clave.'
            })
        }

        res.json({
            settings
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }

}

export const updateSettings = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const setting = await Settings.findByPk(id);

        if(!setting){
            res.status(404).json({
                message: 'No existe nada con esta clave.'
            })
        }

        const updatedResult = await setting?.update(body);

        res.json({
            updatedResult
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}