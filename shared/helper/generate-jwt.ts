import jwt from 'jsonwebtoken';

export const generateJWT = ( id: any ) => {

    return new Promise(( resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, 'Nmeui3ed8i3weidoknjdw@', {
            expiresIn: '12h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        })
    }); 
}