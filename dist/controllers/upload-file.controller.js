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
exports.getImages = exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log(req.files);
            return res.status(400).json({
                ok: false,
                message: 'No hay imagen'
            });
        }
        const file = req.files.image;
        const shortName = file.name.split('.');
        const fileExtension = shortName[shortName.length - 1];
        const validExtensions = ['jpg', 'png', 'gift', 'jpeg'];
        if (!validExtensions.includes(fileExtension)) {
            return res.status(400).json({
                ok: false,
                message: 'No es un archivo permitido'
            });
        }
        const fileName = `${shortName[0]}.${fileExtension}`;
        const path = `./uploads/${fileName}`;
        file.mv(path, (err) => {
            if (err) {
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
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
});
exports.uploadFile = uploadFile;
const getImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = fs_1.default.readdirSync('./uploads');
    let filesObject = [];
    files.forEach(f => {
        filesObject.push({ f });
    });
    res.json({
        filesObject
    });
});
exports.getImages = getImages;
//# sourceMappingURL=upload-file.controller.js.map