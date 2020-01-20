import { Component, OnInit } from '@angular/core';
import {Task} from "../models/Task";
import {MainService} from "../services/main.service";
import {SharedDataService} from "../services/shared-data-service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor(private mainService: MainService, private sharedDataService: SharedDataService) {  }



}
