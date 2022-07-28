import { Request, Response } from "express";

export const get = async (condition: any, req: Request, res: Response, entity: any) => {

    const list = await entity.findAll(condition);

    if (!list) {
        return res.status(204).json({
            ok: false,
            message: `La lista esta vacia`
        })
    }

    res.status(200).json({
        list
    })

}


export const getById = async (req: Request, res: Response, entity: any) => {

    const { id } = req.params;

    const listById = await entity.findByPk(id);

    if (!listById) {
        return res.status(204).json({
            ok: false,
            message: `No existe con este id`
        })
    }

    res.status(200).json({
        listById
    })

}


export const create = async (body: any, req: Request, res: Response, entity: any) => {
    try {

        const objectCreated = await entity.create(body);

        res.status(201).json({
            objectCreated
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.',
            error
        })
    }
}


export const update = async (req: Request, res: Response, entity: any) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const objectToUpdate = await entity.findByPk(id);

        if (!objectToUpdate) {
            return res.status(404).json({
                message: `Este id no esta disponible`
            });
        }

        await objectToUpdate.update(body);

        res.status(202).json({
            objectToUpdate
        });

    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        })
    }
}


export const deleteObject = async (param: any, req: Request, res: Response, entity: any) => {
    const { id } = req.params;

    const objetToDelete = await entity.findByPk(id);

    if (!objetToDelete) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }

    const params = param;

    await objetToDelete.update(params);

    res.status(202).json({
        message: `Object deleted`
    });
}

export const deleteDefinitive = async(req: Request, res: Response, entity: any) => {
    const { id } = req.params;

    const objectToDeleteDefinitive = await entity.findByPk(id);

    if (!objectToDeleteDefinitive) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }

    await objectToDeleteDefinitive.destroy();

    res.status(202).json({
        message: `Object deleted`
    });
}