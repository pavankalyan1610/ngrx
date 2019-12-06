import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AnnualDataReducer } from './store/reducers/annual-data.reducer';
import { MonthlyDataReducer } from './store/reducers/monthly-data.reducer';
import { ChartsComponent } from './components/charts/charts.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ annualData: AnnualDataReducer, monthlyData: MonthlyDataReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
