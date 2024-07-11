import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskListWhereUniqueInput } from "../taskList/TaskListWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  priority?: "Option1";
  status?: "Option1";
  taskList?: TaskListWhereUniqueInput;
};
