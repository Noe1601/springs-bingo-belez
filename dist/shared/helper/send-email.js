"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, code) => __awaiter(void 0, void 0, void 0, function* () {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "noeeduardomedinahenriquez@gmail.com",
            pass: process.env.EMAIL_KEY,
        },
    });
    yield transporter.sendMail({
        from: 'noeeduardomedinahenriquez@gmail.com',
        to: `${email}`,
        subject: `Welcome ✔`,
        html: `
        <h3>
        Bienvenido a Bingo Velez
        <br>
        Gracias por usar nuestra app, espero te sientas comodo. ✔ 
        <br>
        Tu codigo de verificacion es: ${code}
        </h3>
    `
    });
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=send-email.js.map