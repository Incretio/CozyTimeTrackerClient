import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tag} from "../models/Tag";
import {Observable, Subject} from "rxjs";
import { Task } from '../models/Task';
import {RemoteService} from "./remote.service";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private remoteService: RemoteService) {
    this.activeTagChanged.subscribe(activeTag => this.refreshTasksListByTag(activeTag));
    this.refreshTagsList();
  }

  public tagsList: Tag[] = [];
  public activeTag: Tag;
  public tasksList: Task[] = [];

  private activeTagChanged: Subject<Tag> = new Subject();

  public refreshTagsList() {
    this.remoteService.getAllTags()
      .subscribe(tags => {
          this.tagsList = tags;
          if (tags) {
            this.setActiveTag(tags[0]);
          }
        }
      )
  }

  public refreshTasksListByTag(tag: Tag) {
    console.log(tag);
    this.remoteService.getTasksByTag(tag)
      .subscribe(tasks => {
          this.tasksList = tasks;
        }
      )
  }

  public setActiveTag(tag: Tag): void {
    this.activeTag = tag;
    this.activeTagChanged.next(tag);
  }

}
