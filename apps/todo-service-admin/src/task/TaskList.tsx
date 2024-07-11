import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TASKLIST_TITLE_FIELD } from "../taskList/TaskListTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="priority" source="priority" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="taskList"
          source="tasklist.id"
          reference="TaskList"
        >
          <TextField source={TASKLIST_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
