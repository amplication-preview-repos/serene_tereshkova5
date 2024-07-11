import { TaskListCreateNestedManyWithoutCategoriesInput } from "./TaskListCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  taskLists?: TaskListCreateNestedManyWithoutCategoriesInput;
};
