import {Component, Input, OnInit} from '@angular/core';
import {TaskStatusType} from "../models/TaskStatusType";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-start-task-button',
  templateUrl: './start-task-button.component.html',
  styleUrls: ['./start-task-button.component.css']
})
export class StartTaskButtonComponent {

  @Input() task;

  constructor(private mainService: MainService) { }

  private onClickStart() {
    this.mainService.toggleTask(this.task);
  }

  private isRun(): boolean {
    return this.task.status === TaskStatusType.STARTED;
  }

}
