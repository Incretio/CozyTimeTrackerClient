import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../../services/shared-data-service";

@Component({
  selector: 'app-time-intervals',
  templateUrl: './time-intervals.component.html',
  styleUrls: ['./time-intervals.component.css']
})
export class TimeIntervalsComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

}
