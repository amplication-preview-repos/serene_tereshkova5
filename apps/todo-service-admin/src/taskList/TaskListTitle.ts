import { TaskList as TTaskList } from "../api/taskList/TaskList";

export const TASKLIST_TITLE_FIELD = "name";

export const TaskListTitle = (record: TTaskList): string => {
  return record.name?.toString() || String(record.id);
};
