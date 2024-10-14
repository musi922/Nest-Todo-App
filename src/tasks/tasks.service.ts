import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(title: string): Task {
    const newTask: Task = {
      id: uuid(),
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, title: string, completed: boolean): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.title = title;
      task.completed = completed;
    }
    return task;
  }
  deleteTask(id:string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
