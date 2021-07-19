import { getRepository } from "typeorm";
import randomString from "random-string";
import { Todo, User } from "../../Entity";

export namespace TodoSeed {
  export async function seedingTodo(createCount: number): Promise<void> {
    const userRepository = getRepository(User);
    const todoRepository = getRepository(Todo);

    const user = await userRepository
      .createQueryBuilder("user")
      .where("user.id =:id", { id: 1 })
      .getOne();

    const todo = new Todo();
    todo.user = user; 
    todoRepository.save(todo);
    //todoRepository.save()
  }
}
