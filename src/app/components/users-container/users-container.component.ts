import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
  indexCurrent = 0;
  users = [
    {name: 'Carlo', surname: 'Leonardi', active: false, },
    {name: 'Cristian', surname: 'Messina', active: false, },
    {name: 'Giuliana', surname: 'La Spina', active: false }
  ];
  x = 3;
  constructor() { }

  ngOnInit() {
  }

  somethingToBeEmited(ev: number) {
    console.log('somethingToBeEmited:', ev);
    this.indexCurrent = ev;
  }

}
