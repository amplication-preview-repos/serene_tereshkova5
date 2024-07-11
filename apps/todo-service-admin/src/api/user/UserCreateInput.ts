import { InputJsonValue } from "../../types";
import { TaskListCreateNestedManyWithoutUsersInput } from "./TaskListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  taskLists?: TaskListCreateNestedManyWithoutUsersInput;
};
