import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
