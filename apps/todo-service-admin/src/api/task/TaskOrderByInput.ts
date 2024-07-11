import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  taskListId?: SortOrder;
};
