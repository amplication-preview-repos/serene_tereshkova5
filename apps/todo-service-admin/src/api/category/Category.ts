import { TaskList } from "../taskList/TaskList";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  taskLists?: Array<TaskList>;
};
