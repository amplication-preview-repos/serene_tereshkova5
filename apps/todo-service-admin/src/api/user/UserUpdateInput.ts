import { InputJsonValue } from "../../types";
import { TaskListUpdateManyWithoutUsersInput } from "./TaskListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  taskLists?: TaskListUpdateManyWithoutUsersInput;
};
