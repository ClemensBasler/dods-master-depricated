import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { BuchCalcComponent } from './buch-calc/buch-calc.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

const appRoutes: Routes = [
  { path: 'dateCalc', component: DateCalculatorComponent },
  { path: 'buchCalc', component: BuchCalcComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DateCalculatorComponent,
    BuchCalcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
