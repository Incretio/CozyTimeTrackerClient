import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {SharedDataService} from "../../services/shared-data-service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;

  constructor(private mainService: MainService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

  onSearchChanged() {
    this.sharedDataService.setSearchPattern(this.searchText);
  }

  onEnter() {
    this.mainService.addNewTask(this.searchText);
    this.searchText = null;
    this.sharedDataService.setSearchPattern(null);
  }
}
