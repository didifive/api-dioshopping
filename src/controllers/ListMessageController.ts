import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessagesService";

class ListMessageController {
    async handle(request: Request, response: Response){
        const listMessageService = new ListMessageService();

        const allMessages = await listMessageService.execute();

        return response.status(200).json(allMessages)
    }
}

export { ListMessageController }