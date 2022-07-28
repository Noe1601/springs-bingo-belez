import { Router } from "express";
import { getImages, uploadFile } from "../../controllers/upload-file.controller";
import fileUpload from 'express-fileupload';

const router = Router();

router.use( fileUpload() );

router.post('/', uploadFile);

router.get('/', getImages)

export default router;