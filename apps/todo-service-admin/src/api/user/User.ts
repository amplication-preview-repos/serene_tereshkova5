import { JsonValue } from "type-fest";
import { TaskList } from "../taskList/TaskList";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  taskLists?: Array<TaskList>;
};
