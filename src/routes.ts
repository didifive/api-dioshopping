import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { DeleteMessageController } from "./controllers/DeleteMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.handle)
router.post('/message', createMessageController.handle)
router.delete('/message/delete/:id', deleteMessageController.handle)

export { router }
