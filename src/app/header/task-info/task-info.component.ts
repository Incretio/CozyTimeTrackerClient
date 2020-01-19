import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  getTask() {
    return this.mainService.activeTask;
  }

}
