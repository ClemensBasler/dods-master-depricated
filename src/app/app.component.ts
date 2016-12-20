import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  zgDay = ["Markttag","Praiostag","Rohalstag","Feuertag","Wassertag","Windstag","Erdstag"];
  zgMonth = ["Praios (1)", "Rondra (2)", "Efferd (3)", "Travia (4)", "Boron (5)", "Hesinde (6)",
             "Firun (7)", "Tsa (8)", "Phex (9)", "Peraine (10)", "Ingerimm (11)", "Rahja (12)", "namenloser Tag (13)"];
  selectedMonth = this.zgMonth[0];

  // 1 => *2
  // 2 => *4
  // 3 => *8
  // 4 => *16
}
