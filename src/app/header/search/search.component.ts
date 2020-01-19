import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSearchChanged() {
    this.mainService.setSearchPattern(this.searchText);
  }
}
