import {Component} from '@angular/core';
import {SharedDataService} from "../../services/shared-data-service";
import {TaskStatusType} from "../../models/TaskStatusType";

@Component({
  selector: 'app-work-day-time',
  templateUrl: './work-day-time.component.html',
  styleUrls: ['./work-day-time.component.css']
})
export class WorkDayTimeComponent {

  constructor(private sharedDataService: SharedDataService) { }

  private isActive(): boolean {
    return this.sharedDataService.activeTask && this.sharedDataService.activeTask.status === TaskStatusType.STARTED;
  }

}
