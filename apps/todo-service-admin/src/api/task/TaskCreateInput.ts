import { TaskListWhereUniqueInput } from "../taskList/TaskListWhereUniqueInput";

export type TaskCreateInput = {
  title?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  taskList?: TaskListWhereUniqueInput | null;
};
