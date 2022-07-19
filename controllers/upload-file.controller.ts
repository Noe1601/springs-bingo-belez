import { Request, Response } from 'express';
import fs from 'fs';

export const uploadFile = async (req: Request, res: Response) => {

    try {

        if(!req.files || Object.keys(req.files).length === 0){
            console.log(req.files)
            return res.status(400).json({
                ok: false,
                message: 'No hay imagen'
            })
        }

        const file: any = req.files.image;
        const shortName = file.name.split('.');
        const fileExtension = shortName[ shortName.length - 1 ];

        const validExtensions = ['jpg','png','gift','jpeg'];

        if( !validExtensions.includes( fileExtension )){
            return res.status(400).json({
                ok: false,
                message: 'No es un archivo permitido'
            })
        }

        const fileName = `${ shortName[0] }.${ fileExtension }`
        const path = `./uploads/${ fileName }`;

        file.mv(path, (err: any) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    message: 'Error en procesar la imagen'
                });
            }

            res.json({
                ok: true,
                message: 'Imagen subida correctamente'
            });
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        })
    }
}


export const getImages = async (req: Request, res: Response) => {

    const files = fs.readdirSync('./uploads');
    let filesObject: any = [];

    files.forEach(f => {
        filesObject.push({ f })
    })

    res.json({
        filesObject
    })


};