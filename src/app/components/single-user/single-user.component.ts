import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  @Input() index: number;
  @Input() user: {name: string, surname: string, active: boolean};
  @Output() callFather = new EventEmitter();
  constructor() { }
  haveClicked() {
    this.user.active = !this.user.active;
    console.log(`ho premuto ${this.index}`);
    this.callFather.emit(this.index);
  }
  ngOnInit() {

  }

}
