import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TaskCreateNestedManyWithoutTaskListsInput } from "./TaskCreateNestedManyWithoutTaskListsInput";

export type TaskListCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutTaskListsInput;
};
