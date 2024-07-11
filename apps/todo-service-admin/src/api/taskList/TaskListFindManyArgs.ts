import { TaskListWhereInput } from "./TaskListWhereInput";
import { TaskListOrderByInput } from "./TaskListOrderByInput";

export type TaskListFindManyArgs = {
  where?: TaskListWhereInput;
  orderBy?: Array<TaskListOrderByInput>;
  skip?: number;
  take?: number;
};
