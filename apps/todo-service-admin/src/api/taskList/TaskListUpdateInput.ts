import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TaskUpdateManyWithoutTaskListsInput } from "./TaskUpdateManyWithoutTaskListsInput";

export type TaskListUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutTaskListsInput;
};
