import { Module } from "@nestjs/common";
import { TaskListModuleBase } from "./base/taskList.module.base";
import { TaskListService } from "./taskList.service";
import { TaskListController } from "./taskList.controller";
import { TaskListResolver } from "./taskList.resolver";

@Module({
  imports: [TaskListModuleBase],
  controllers: [TaskListController],
  providers: [TaskListService, TaskListResolver],
  exports: [TaskListService],
})
export class TaskListModule {}
