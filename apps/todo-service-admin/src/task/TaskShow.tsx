import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TASKLIST_TITLE_FIELD } from "../taskList/TaskListTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
