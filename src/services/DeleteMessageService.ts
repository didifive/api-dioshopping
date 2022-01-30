import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

class DeleteMessageService {
    async execute(id: string){
        const messageRepository = getCustomRepository(MessagesRepository);

        const messagetoDelete = await messageRepository.findOne({where: {id: id}});
        
        if (!messagetoDelete) {
            throw new Error("Não foi encontrada mensagem para deletar!")
        }
        
        messageRepository.delete(id);

        return messagetoDelete;
    }
}

export  { DeleteMessageService }