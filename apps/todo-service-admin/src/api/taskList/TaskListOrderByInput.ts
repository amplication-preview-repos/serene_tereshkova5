import { SortOrder } from "../../util/SortOrder";

export type TaskListOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  categoryId?: SortOrder;
};
