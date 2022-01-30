import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entity/Message";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository }