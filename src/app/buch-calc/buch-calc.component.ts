import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buch-calc',
  templateUrl: './buch-calc.component.html',
  styleUrls: ['./buch-calc.component.css']
})
export class BuchCalcComponent implements OnInit {

  seitenzahl = 0;
  tawLesenSchreiben = 0;
  output = 0;
  taw = 0;
  multi = 1;
  punkteUnterhalb = 0;

  books = [{'value': 2, 'name': 'Folio'}, {'value': 4, 'name': 'Quarto'}, {'value': 6, 'name': 'Octavo'}];
  selectedBook = this.books[0];

  onChange(city) {
    this.multi = parseInt(city);
    this.calcOutput();
  }

  onKey(event:any){
    this.seitenzahl = parseInt(event.target.value);
    this.calcOutput();
  }

  onKey2(event:any){
    this.taw = parseInt(event.target.value);
    this.calcOutput();
  }

  onKey3(event:any){
    this.punkteUnterhalb = parseInt(event.target.value);
    this.calcOutput();
  }

  calcOutput(){
    this.output = (this.seitenzahl / this.taw / this.multi) * Math.pow(2, this.punkteUnterhalb);
  }
  constructor() { }

  ngOnInit() {
  }

}
