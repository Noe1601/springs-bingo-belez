import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser, recuperatePassword, getUsersDesactivated } from "../../controllers/user.controller";

const router = Router();

router.get('/', getUsers);

router.get('/desactivated', getUsersDesactivated);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/', recuperatePassword);

export default router;