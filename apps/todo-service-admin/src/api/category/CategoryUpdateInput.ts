import { TaskListUpdateManyWithoutCategoriesInput } from "./TaskListUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  taskLists?: TaskListUpdateManyWithoutCategoriesInput;
};
