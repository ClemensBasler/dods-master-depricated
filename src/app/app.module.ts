import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { BuchCalcComponent } from './buch-calc/buch-calc.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ng2-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { HeaderComponent } from './components/util_components/header/header.component';
import { DsaHeaderComponent } from './components/routing_components/dsa-page/dsa-header/dsa-header.component';
import { Home2Component } from './components/routing_components/home2/home2.component';

const appRoutes: Routes = [
  { path: 'dsa/dateCalc', component: DateCalculatorComponent },
  { path: 'buchCalc', component: BuchCalcComponent },
  { path: 'dropdown', component: DropdownComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dsa', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: '', component: Home2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    DateCalculatorComponent,
    BuchCalcComponent,
    HomeComponent,
    DropdownComponent,
    HeaderComponent,
    DsaHeaderComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
