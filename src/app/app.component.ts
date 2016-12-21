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

  zgDay = [ "Windstag (1)", "Erdstag (2)", "Markttag (3)", "Praiostag (4)", "Rohalstag (5)", "Feuertag (6)", "Wassertag (7)"];
  zgMonth = [{name: "Praios (1)", value: "1"},
              {name: "Rondra (2)", value: "2"},
              {name: "Efferd (3)", value: "3"},
              {name: "Travia (4)", value: "4"},
              {name: "Boron (5)", value: "5"},
              {name: "Hesinde (6)", value: "6"},
              {name: "Firun (7)", value: "7"},
              {name: "Tsa (8)", value: "8"},
              {name: "Phex (9)", value: "9"},
              {name: "Peraine (10)", value: "10"},
              {name: "Ingerimm (11)", value: "11"},
              {name: "Rahja (12)", value: "12"},
              {name: "namenloser Tag (13)", value: "13"}];

  selectedMonth = this.zgMonth[0];

  day = 1;
  month = 0;
  year = 1000;
  outputDay = "lul";


  onKey4(event:any){
    this.day = parseInt(event.target.value);
    this.calcOutputLul();
  }

  onKey5(event:any){
    this.year = parseInt(event.target.value);
    this.calcOutputLul();
  }

  onKey6(lul){
    this.month = parseInt(lul);
    this.calcOutputLul();
  }

  calcOutputLul(){
    this.outputDay = this.zgDay[(this.day + this.month*30 + 365*this.year)%7];
  }

  //1.1.1000 => Markttag
  //2.1.1000 => Praiostag
  //1.2.1000 => Rohalstag
  //1.1.1001 => Praiostag
  //1 + (1-1)*30 + 365*1000 = 365.001%7=0 => 3
  //1 + (2-1)*30 + 365*1000 = 365.031 => 5
}
