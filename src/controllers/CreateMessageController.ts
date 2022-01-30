import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController{
    async handle(request: Request, response: Response){
        const { name, email, message } = request.body;

        const createMessageService = new CreateMessageService();

        const responseMessage = await createMessageService.execute({ name, email, message});

        const statusCode = (responseMessage) ? 201 : 403;

        return response.status(statusCode).json(responseMessage);
        
    }
}

export { CreateMessageController }