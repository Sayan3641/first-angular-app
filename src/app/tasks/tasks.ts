import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from '../new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {


  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string
  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    console.log('output emitted')
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask=false;
  }
}
