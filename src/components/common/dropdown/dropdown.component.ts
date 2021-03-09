import { Component, Input, OnInit } from '@angular/core';
import { DropdownConfig } from 'models/dropdown.model';

@Component({
  selector: 'milkyway-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() public dropdownConfig: DropdownConfig;

  constructor() { 
    this.dropdownConfig = {
      options: [],
      title: 'none'
    };
  }

  ngOnInit(): void {
  }

}
