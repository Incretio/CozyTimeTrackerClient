import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {SharedDataService} from "../../services/shared-data-service";

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent {

  constructor(private sharedDataService: SharedDataService) { }

  getTask() {
    return this.sharedDataService.activeTask;
  }

}
