import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name! : string
  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
