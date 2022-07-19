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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitive = exports.deleteObject = exports.update = exports.create = exports.getById = exports.get = void 0;
const get = (condition, req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield entity.findAll(condition);
    if (!list) {
        return res.status(204).json({
            ok: false,
            message: `La lista esta vacia`
        });
    }
    res.status(200).json({
        list
    });
});
exports.get = get;
const getById = (req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listById = yield entity.findByPk(id);
    if (!listById) {
        return res.status(204).json({
            ok: false,
            message: `No existe con este id`
        });
    }
    res.status(200).json({
        listById
    });
});
exports.getById = getById;
const create = (body, req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objectCreated = yield entity.create(body);
        res.status(201).json({
            objectCreated
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An unexpected error ocurred.',
            error
        });
    }
});
exports.create = create;
const update = (req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const objectToUpdate = yield entity.findByPk(id);
        if (!objectToUpdate) {
            return res.status(404).json({
                message: `Este id no esta disponible`
            });
        }
        yield objectToUpdate.update(body);
        res.status(202).json({
            objectToUpdate
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An unexpected error ocurred.'
        });
    }
});
exports.update = update;
const deleteObject = (param, req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const objetToDelete = yield entity.findByPk(id);
    if (!objetToDelete) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }
    const params = param;
    yield objetToDelete.update(params);
    res.status(202).json({
        message: `Object deleted`
    });
});
exports.deleteObject = deleteObject;
const deleteDefinitive = (req, res, entity) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const objectToDeleteDefinitive = yield entity.findByPk(id);
    if (!objectToDeleteDefinitive) {
        return res.status(404).json({
            message: `Not exists an user with this ID`
        });
    }
    yield objectToDeleteDefinitive.destroy();
    res.status(202).json({
        message: `Object deleted`
    });
});
exports.deleteDefinitive = deleteDefinitive;
//# sourceMappingURL=crud.service.js.map