import { Request, Response } from "express";
import { sendEmail } from "../shared/helper/send-email";
import Code from "../shared/models/code.model";


export const createCodeVerification = async(req: Request, res: Response) => {

    const { EMAIL } = req.params;

    try {

        const token = Math.floor(100000 + Math.random() * 900000)

        const tokenObject = {
            id: token,
            CODE: token
        }

        const code = await Code.create(tokenObject);

        if(EMAIL){
            await sendEmail(EMAIL,token.toString());
        }

        res.json({
            code
        });   
    } catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
        console.log(error);
    }   
}