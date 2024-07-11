import * as graphql from "@nestjs/graphql";
import { TaskListResolverBase } from "./base/taskList.resolver.base";
import { TaskList } from "./base/TaskList";
import { TaskListService } from "./taskList.service";

@graphql.Resolver(() => TaskList)
export class TaskListResolver extends TaskListResolverBase {
  constructor(protected readonly service: TaskListService) {
    super(service);
  }
}
