import {Injectable} from '@angular/core';
import {Tag} from "../models/Tag";
import {Subject} from "rxjs";
import { Task } from '../models/Task';
import {RemoteService} from "./remote.service";
import {SharedDataService} from "./shared-data-service";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private remoteService: RemoteService, private sharedDataService: SharedDataService) {
    this.sharedDataService.activeTagChanged.subscribe(activeTag => this.refreshTasksListByTag(activeTag));
    this.sharedDataService.activeTaskChanged.subscribe(task => this.toggleTask(task));
    this.refreshTagsList();
  }

  public refreshTagsList() {
    this.remoteService.getAllTags()
      .subscribe(tags => {
          this.sharedDataService.tagsList = tags;
          if (tags) {
            this.sharedDataService.setActiveTag(tags[0]);
          }
        }
      )
  }

  public refreshTasksListByTag(tag: Tag) {
    this.remoteService.getTasksByTag(tag)
      .subscribe(tasks => {
          this.sharedDataService.tasksList = tasks;
        }
      )
  }

  public isShow(task: Task) {
    if (!this.sharedDataService.searchPattern){
      return true;
    }
    let fullName = (task.number + task.name).toLowerCase();
    return fullName.indexOf(this.sharedDataService.searchPattern) >= 0;
  }

  public toggleTask(task: Task) {
    this.remoteService.toggleTask(task, this.sharedDataService.activeTag)
      .subscribe(tasks => {
        this.sharedDataService.tasksList = tasks;
      })
  }

  public addNewTask(taskName: string) {
    this.remoteService.addNewTask(taskName, this.sharedDataService.activeTag.id)
      .subscribe(tasks => {
        this.sharedDataService.tasksList = tasks;
      });
  }

}
