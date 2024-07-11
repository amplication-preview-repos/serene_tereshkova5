/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TaskList } from "./TaskList";
import { TaskListCountArgs } from "./TaskListCountArgs";
import { TaskListFindManyArgs } from "./TaskListFindManyArgs";
import { TaskListFindUniqueArgs } from "./TaskListFindUniqueArgs";
import { CreateTaskListArgs } from "./CreateTaskListArgs";
import { UpdateTaskListArgs } from "./UpdateTaskListArgs";
import { DeleteTaskListArgs } from "./DeleteTaskListArgs";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { TaskListService } from "../taskList.service";
@graphql.Resolver(() => TaskList)
export class TaskListResolverBase {
  constructor(protected readonly service: TaskListService) {}

  async _taskListsMeta(
    @graphql.Args() args: TaskListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TaskList])
  async taskLists(
    @graphql.Args() args: TaskListFindManyArgs
  ): Promise<TaskList[]> {
    return this.service.taskLists(args);
  }

  @graphql.Query(() => TaskList, { nullable: true })
  async taskList(
    @graphql.Args() args: TaskListFindUniqueArgs
  ): Promise<TaskList | null> {
    const result = await this.service.taskList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TaskList)
  async createTaskList(
    @graphql.Args() args: CreateTaskListArgs
  ): Promise<TaskList> {
    return await this.service.createTaskList({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => TaskList)
  async updateTaskList(
    @graphql.Args() args: UpdateTaskListArgs
  ): Promise<TaskList | null> {
    try {
      return await this.service.updateTaskList({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TaskList)
  async deleteTaskList(
    @graphql.Args() args: DeleteTaskListArgs
  ): Promise<TaskList | null> {
    try {
      return await this.service.deleteTaskList(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Task], { name: "tasks" })
  async findTasks(
    @graphql.Parent() parent: TaskList,
    @graphql.Args() args: TaskFindManyArgs
  ): Promise<Task[]> {
    const results = await this.service.findTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: TaskList): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: TaskList
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
