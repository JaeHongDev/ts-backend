import randomString from "random-string";
import { getRepository } from "typeorm";
import { Todo, User } from "../../Entity";

export namespace TodoSeed {
  export async function seedingTodo(createCount: number): Promise<void> {
    const userRepository = getRepository(User);
    const todoRepository = getRepository(Todo);

    const user = await userRepository
      .createQueryBuilder("user")
      .where("user.id =:id", { id: 1 })
      .getOne();

    if (!user) throw Error("user did not exists");
    const todo = new Todo();
    todo.user = user;
    todo.text = randomString();
    todo.checked = true;
    todoRepository.save(todo);

    // await userRepository
    //   .createQueryBuilder()
    //   .delete()
    //   .from(User)
    //   .where("user.id =:id", { id: 1 })
    //   .execute();
    //todoRepository.save()
  }
}
