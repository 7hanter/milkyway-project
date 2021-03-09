import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'milkyway-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchText: any;

  constructor() { 
    this.searchText = null;
  }

  ngOnInit(): void {
  }

}
