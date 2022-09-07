import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      });
      return response.json(users);
    } catch (error) {
      if (error?.isAccessDenied) {
        return response.status(400).json({ error: error.message });
      }
      throw error;
    }
  }
}

export { ListAllUsersController };
