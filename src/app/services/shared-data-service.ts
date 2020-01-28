import {Injectable} from "@angular/core";
import {Tag} from "../models/Tag";
import {Task} from "../models/Task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public searchPattern: string = "";
  public tagsList: Tag[] = [];
  public activeTag: Tag;
  public tasksList: Task[] = [];
  public activeTask: Task;
  public editTask: Task;

  public activeTagChanged: Subject<Tag> = new Subject();
  public searchPatternChanged: Subject<string> = new Subject();

  public setActiveTag(tag: Tag): void {
    this.activeTag = tag;
    this.activeTagChanged.next(this.activeTag);
  }

  public setActiveTask(task: Task) {
    this.activeTask = task;
  }

  public setSearchPattern(searchPattern: string): void {
    this.searchPattern = !searchPattern ? "" : searchPattern.toLowerCase();
    this.searchPatternChanged.next(this.searchPattern);
  }
}
