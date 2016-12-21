import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-calculator',
  templateUrl: './date-calculator.component.html',
  styleUrls: ['./date-calculator.component.css']
})
export class DateCalculatorComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
