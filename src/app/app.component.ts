import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {MainService} from "./services/main.service";
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private mainService: MainService) {
  }

  private getTasksList(): Task[] {
    return this.mainService.tasksList;
  }


}
