import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  seitenzahl = 0;
  tawLesenSchreiben = 0;
  output = 0;
  taw = 0;
  multi = 1;

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

  calcOutput(){
    this.output = this.seitenzahl / this.taw / this.multi;
  }
}


// (Seitenzahl) / (TaW Lesen/Schreiben) / (2( Folio) oder 4( Quarto) oder 6( Octavo)) in Stunden
