import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskListService } from "./taskList.service";
import { TaskListControllerBase } from "./base/taskList.controller.base";

@swagger.ApiTags("taskLists")
@common.Controller("taskLists")
export class TaskListController extends TaskListControllerBase {
  constructor(protected readonly service: TaskListService) {
    super(service);
  }
}
