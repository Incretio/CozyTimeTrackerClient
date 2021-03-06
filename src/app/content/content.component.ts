import {Component, Input} from '@angular/core';
import {Task} from '../models/Task';
import {MainService} from "../services/main.service";
import {TaskStatusType} from "../models/TaskStatusType";
import {SharedDataService} from "../services/shared-data-service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() task: Task;

  constructor(private mainService: MainService, private sharedDataService: SharedDataService) { }

  private isShow(): boolean {
    return this.mainService.isTaskShow(this.task);
  }

  onClickTask() {
    this.sharedDataService.editTask = this.task;
  }
}
