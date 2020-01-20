import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {MainService} from "./services/main.service";
import { Task } from './models/Task';
import {SharedDataService} from "./services/shared-data-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private mainService: MainService, private sharedDataService: SharedDataService) {
  }

  private getTasksList(): Task[] {
    return this.sharedDataService.tasksList;
  }


}
