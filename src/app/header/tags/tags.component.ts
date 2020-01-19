import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {Tag} from "../../models/Tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  constructor(private mainService: MainService) { }

  changeTag(tag: Tag) {
    this.mainService.setActiveTag(tag);
  }

  getActiveTag(): Tag {
    return this.mainService.activeTag;
  }

  getTagsList(): Tag[] {
    return this.mainService.tagsList;
  }
}
