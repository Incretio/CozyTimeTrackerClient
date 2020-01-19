import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
