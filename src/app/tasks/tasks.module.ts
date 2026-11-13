import { NgModule } from "@angular/core";
import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { NewTask } from "../new-task/new-task";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ Task, Tasks, NewTask],
    exports: [Tasks],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TasksModule{}