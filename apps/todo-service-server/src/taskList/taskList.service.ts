import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskListServiceBase } from "./base/taskList.service.base";

@Injectable()
export class TaskListService extends TaskListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
