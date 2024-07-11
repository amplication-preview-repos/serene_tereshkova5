import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type TaskListWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  tasks?: TaskListRelationFilter;
};
