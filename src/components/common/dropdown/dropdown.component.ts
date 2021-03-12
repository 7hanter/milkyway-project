import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output 
} from '@angular/core';
import { DropdownConfig } from 'models/dropdown.model';

@Component({
  selector: 'milkyway-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() public dropdownConfig: DropdownConfig;
  @Output() public selection = new EventEmitter<string>();

  constructor() {
    this.dropdownConfig = {
      options: [],
      title: 'none',
    };
  }

  ngOnInit(): void {}

  public onSelection(option: string): void {
    this.selection.emit(option);
  }
}
