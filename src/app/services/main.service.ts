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

  public isTaskShow(task: Task) {
    if (!this.isTaskShowsForTag(task, this.sharedDataService.activeTag)) {
      return false;
    }
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

  public updateEditTask(task: Task) {
    this.remoteService.updateTask(task)
      .subscribe(task => {
        for (let i = 0; i < this.sharedDataService.tasksList.length; i++) {
          if (this.sharedDataService.tasksList[i].id === task.id) {
            this.sharedDataService.tasksList[i] = task;
          }
        }
      })
  }

  public toggleTag(tag: Tag) {
    this.toggleArrayElement(this.sharedDataService.editTask.tagsList, tag.id);
    this.updateEditTask(this.sharedDataService.editTask);
  }

  private toggleArrayElement(array, value) {
    var index = array.indexOf(value);
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
  }

  public isTaskShowsForTag(task: Task, tag: Tag): boolean {
    return tag.id == "0" || task.tagsList.includes(tag.id);
  }

}
