import {Component, Input} from '@angular/core';
import {Task} from '../models/Task';
import {MainService} from "../services/main.service";
import {TaskStatusType} from "../models/TaskStatusType";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() task: Task;

  constructor(private mainService: MainService) { }

  private onClickStart() {
    this.mainService.setActiveTask(this.task);
  }

  private isRun(): boolean {
    return this.task.status === TaskStatusType.STARTED;
  }

  private isShow(): boolean {
    // return this.task.show !== false;
    return this.mainService.isShow(this.task);
  }
}
