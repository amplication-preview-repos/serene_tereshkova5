import { TaskListWhereUniqueInput } from "./TaskListWhereUniqueInput";
import { TaskListUpdateInput } from "./TaskListUpdateInput";

export type UpdateTaskListArgs = {
  where: TaskListWhereUniqueInput;
  data: TaskListUpdateInput;
};
