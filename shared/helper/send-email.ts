import nodemailer from 'nodemailer';

export const sendEmail = async(email: string, code: string) => {

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "noeeduardomedinahenriquez@gmail.com", 
      pass: process.env.EMAIL_KEY,
    },
  });

  await transporter.sendMail({
    from: 'noeeduardomedinahenriquez@gmail.com',
    to: `${ email }`,
    subject: `Welcome ✔`,
    html: `
        <h3>
        Bienvenido a Bingo Velez
        <br>
        Gracias por usar nuestra app, espero te sientas comodo. ✔ 
        <br>
        Tu codigo de verificacion es: ${ code }
        </h3>
    `
  });


}