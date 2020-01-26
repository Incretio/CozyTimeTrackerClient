import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Tag} from "../models/Tag";
import {Task} from "../models/Task";
import {HttpClient} from "@angular/common/http";
import {stringify} from "querystring";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private httpClient: HttpClient) { }

  public getAllTags(): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(
      'api/v.1/tag/list'
    );
  }

  public getTasksByTag(tag: Tag): Observable<Task[]> {
    return this.httpClient.get<Task[]>(
      `/api/v.1/task/bytag/${tag.id}`
    );
  }

  public getTasksById(task: Task): Observable<Task> {
    return this.httpClient.get<Task>(
      `/api/v.1/task/${task.id}`
    );
  }

  public toggleTask(task: Task, currentTag: Tag): Observable<Task[]> {
    return this.httpClient.post<Task[]>(
      `/api/v.1/task/toggle/${task.id}/tag/${currentTag.id}`,
      {}
      );
  }

  public addNewTask(taskName: string, tagId: string): Observable<Task[]>  {
    return this.httpClient.post<Task[]>(
      '/api/v.1/task/new',
      JSON.stringify({taskName, tagId}),
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
  }

  public updateTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(
      `/api/v.1/task/update/${task.id}`,
      task
    )
  }
}
