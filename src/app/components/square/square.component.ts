import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit, OnDestroy {
  arr = ['pippo', 'caio', 'sempronio', 'caligola', 'milizio', 'orazio'];
  newItem = '';
  x = 'pippo';
  side = 0;

  constructor() { }


  getArea = () => this.side * this.side;
  getPerimeter = () => this.side * 4;

  incrementSide = () => this.side = this.side + 2;

  addItem = () => {
    this.arr.push(this.newItem);
    this.newItem = '';
  }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('arr'));
  }

  ngOnDestroy(): void {
    localStorage.setItem('arr', JSON.stringify(this.arr));
  }

}
