import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../../models/Tag";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() tag: Tag;
  @Input() active: boolean;
  @Input() lastTag: boolean;

  constructor() { }

  ngOnInit() {
  }

}
