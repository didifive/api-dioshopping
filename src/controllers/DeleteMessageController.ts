import { Request, Response } from "express";
import { DeleteMessageService } from "../services/DeleteMessageService";

class DeleteMessageController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const deleteMessageService = new DeleteMessageService();

        const deletedMessage = await deleteMessageService.execute(id);

        return response.status(200).json(deletedMessage);
        
    }
}

export { DeleteMessageController }