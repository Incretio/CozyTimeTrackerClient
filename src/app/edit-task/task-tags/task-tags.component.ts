import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../models/Tag";
import {SharedDataService} from "../../services/shared-data-service";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-task-tags',
  templateUrl: './task-tags.component.html',
  styleUrls: ['./task-tags.component.css']
})
export class TaskTagsComponent implements OnInit {

  @Input() tag: Tag;

  constructor(private mainService: MainService, private sharedDataService: SharedDataService) {}

  ngOnInit() {
  }

  isEnabled() {
    if (this.mainService.isTaskShowsForTag(this.sharedDataService.editTask, this.tag)){
      return "enabled";
    } else {
      return "";
    }
  }

  onTagClick() {
    console.log(this.tag);
    this.mainService.toggleTag(this.tag);
  }

}
