import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskInfoComponent } from './header/task-info/task-info.component';
import { WorkDayTimeComponent } from './header/work-day-time/work-day-time.component';
import { TagsComponent } from './header/tags/tags.component';
import { SearchComponent } from './header/search/search.component';
import { TagComponent } from './header/tags/tag/tag.component';
import {HttpClientModule} from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule} from "@angular/forms";
import { TaskTagsComponent } from './edit-task/task-tags/task-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    EditTaskComponent,
    TaskInfoComponent,
    WorkDayTimeComponent,
    TagsComponent,
    SearchComponent,
    TagComponent,
    TaskTagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
