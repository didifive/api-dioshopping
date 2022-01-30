import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
    name: string;
    email: string;
    message: string
}

class CreateMessageService {
    async execute({name, email, message}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!name){
            throw new Error("Por favor informe um nome!")
        }

        if(!email){
            throw new Error("Por favor informe um email!")
        }

        if(!message){
            throw new Error("Por favor escreva uma messagem!")
        }

        const newMessage = messageRepository.create({ name, email, message })

        await messageRepository.save(newMessage);

        return newMessage;
    }
}

export  { CreateMessageService }