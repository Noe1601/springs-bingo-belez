import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser, recuperatePassword } from "../../controllers/user.controller";

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.put('/', recuperatePassword);

export default router;