import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Tag} from "../models/Tag";
import {Task} from "../models/Task";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private httpClient: HttpClient) { }

  public getAllTags(): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>('api/v.1/tag/list');
  }

  public getTasksByTag(tag: Tag): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`/api/v.1/task/bytag/${tag.id}`);
  }
}
