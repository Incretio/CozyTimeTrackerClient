import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../models/Tag";
import {SharedDataService} from "../../services/shared-data-service";

@Component({
  selector: 'app-task-tags',
  templateUrl: './task-tags.component.html',
  styleUrls: ['./task-tags.component.css']
})
export class TaskTagsComponent implements OnInit {

  @Input() tag: Tag;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
  }

  isEnabled() {
    if (this.tag.id === "0" || this.sharedDataService.editTask.tagsList.includes(this.tag.id)){
      return "enabled";
    } else {
      return "";
    }
  }
}
