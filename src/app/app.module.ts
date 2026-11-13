import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [App, Header, User],
    bootstrap: [App],
    imports: [NgFor, NgIf, BrowserModule, DatePipe, SharedModule, TasksModule]
})
export class AppModule {

}