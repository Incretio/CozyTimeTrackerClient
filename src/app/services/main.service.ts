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
    this.activeTaskChanged.subscribe(task => this.toggleTask(task));
    this.refreshTagsList();
  }

  public searchPattern: string = "";
  public tagsList: Tag[] = [];
  public activeTag: Tag;
  public tasksList: Task[] = [];
  public activeTask: Task;

  private activeTagChanged: Subject<Tag> = new Subject();
  private activeTaskChanged: Subject<Task> = new Subject();
  private searchPatternChanged: Subject<string> = new Subject();

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
    this.remoteService.getTasksByTag(tag)
      .subscribe(tasks => {
          this.tasksList = tasks;
        }
      )
  }

  public isShow(task: Task) {
    if (!this.searchPattern){
      return true;
    }
    let fullName = (task.number + task.name).toLowerCase();
    return fullName.indexOf(this.searchPattern) >= 0;
  }

  public setActiveTag(tag: Tag): void {
    this.activeTag = tag;
    this.activeTagChanged.next(this.activeTag);
  }

  public setActiveTask(task: Task) {
    this.activeTask = task;
    this.activeTaskChanged.next(this.activeTask);
  }

  public setSearchPattern(searchPattern: string): void {
    this.searchPattern = !searchPattern ? "" : searchPattern.toLowerCase();
    this.searchPatternChanged.next(this.searchPattern);
  }

  public toggleTask(task: Task) {
    this.remoteService.toggleTask(task, this.activeTag)
      .subscribe(tasks => {
        this.tasksList = tasks;
      })
  }
}
