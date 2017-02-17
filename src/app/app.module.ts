import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DateCalculatorComponent } from './components/routing_components/dsa/date-calculator/date-calculator.component';
import { BuchCalcComponent } from './buch-calc/buch-calc.component';
import { DSAHomeComponent } from './components/routing_components/dsa/dsa-home/dsa-home.component';

import { AlertModule } from 'ng2-bootstrap';
import { DropdownComponent } from './components/routing_components/dsa/dropdown/dropdown.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { HeaderComponent } from './components/util_components/header/header.component';
import { DsaHeaderComponent } from './components/routing_components/dsa/dsa-header/dsa-header.component';
import { HomeComponent } from './components/routing_components/home/home.component';

const appRoutes: Routes = [
  { path: 'dateCalc', component: DateCalculatorComponent },
  { path: 'buchCalc', component: BuchCalcComponent },
  { path: 'dropdown', component: DropdownComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dsa', component: DSAHomeComponent },
  { path: 'dsa-home', component: DSAHomeComponent },
  { path: '', component: HomeComponent }
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
    DSAHomeComponent
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
