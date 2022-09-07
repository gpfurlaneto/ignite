import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import AccessDeniedError from "../errors/AccessDenieError";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user || !user.admin) {
      throw new AccessDeniedError();
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
