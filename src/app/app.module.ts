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
import { DescriptionComponent } from './header/task-info/description/description.component';
import { TimeComponent } from './header/task-info/time/time.component';
import { TagComponent } from './header/tags/tag/tag.component';
import {HttpClientModule} from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    DescriptionComponent,
    TimeComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
