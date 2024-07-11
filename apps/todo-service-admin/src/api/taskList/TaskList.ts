import { User } from "../user/User";
import { Category } from "../category/Category";
import { Task } from "../task/Task";

export type TaskList = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  user?: User | null;
  category?: Category | null;
  tasks?: Array<Task>;
};
