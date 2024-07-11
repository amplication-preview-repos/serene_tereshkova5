import { TaskList } from "../taskList/TaskList";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  dueDate: Date | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  taskList?: TaskList | null;
};
