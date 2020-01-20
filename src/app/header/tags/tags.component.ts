import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {Tag} from "../../models/Tag";
import {SharedDataService} from "../../services/shared-data-service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  constructor(private mainService: MainService, private sharedDataService: SharedDataService) { }

  changeTag(tag: Tag) {
    this.sharedDataService.setActiveTag(tag);
  }

  getActiveTag(): Tag {
    return this.sharedDataService.activeTag;
  }

  getTagsList(): Tag[] {
    return this.sharedDataService.tagsList;
  }
}
