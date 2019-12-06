import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ChartHelper } from '../../shared/helper/helper.charts';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../shared/service/app.service';
var barChart: any;
var annualDataChart: any;
import { AddAnnualData, AddMonthlyData } from '../../store/actions/data.actions';
import { Store, select } from '@ngrx/store';
import { Annualdata, MonthlyData } from '../../store/models/data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chartData: any = [];
  years: any = [];
  constructor(private http: HttpClient, private appService: AppService, private store: Store<{ annualData: Annualdata[], monthlyData: MonthlyData }>) { }
  /**
   * Initializing life cycle of component
   */
  ngOnInit() {
    /* declairing getAnnualData()*/
    this.getAnnualData();
    /* declairing getMonthlyData()*/
    this.getMonthlydata();
  }


  /** defining getAnnualData to plot the charts 
   * @author: shivam
  */
  private getAnnualData() {
    try {
      /**
       * Getting data from store
       */
      this.store.select('annualData').subscribe(storeData => {
        if (storeData.length == 0) {
          /**
           * calling yearly data
           */
          this.appService.getYearlyData().subscribe((data: any) => {
            let annualdata = [];
            const from = data[0].fromYear;
            for (let i = 0; i < data.length; i++) {
              annualdata.push(data[i].annualData[0]);
              this.years.push((from + i) + '');
            }
            this.store.dispatch(new AddAnnualData(annualdata))
            ChartHelper.PlotBarChart(annualdata, this.years);
          });
        }
        else {
          ChartHelper.PlotBarChart(storeData, this.years);
        }
      });
    }
    catch (Excep) {
      console.log(Excep);
    }
  }

  /* defining getMonthlydata function to plot the chart */
  private getMonthlydata() {
    try {
      /**
       * Getting data from store
       */
      this.store.pipe(select('monthlyData')).subscribe(storeData => {
        if (storeData.length == 0) {
          /* calling monthly data */
          this.appService.getMonthsData().subscribe((data: any) => {
            this.chartData = data[0].monthVals;
            this.store.dispatch(new AddMonthlyData(this.chartData));
            ChartHelper.PlotAreaChart(this.chartData);
          })
        }
        else {
          ChartHelper.PlotAreaChart(storeData);
        }
      })


    }
    catch (Excep) {
      console.log(Excep);
    }
  }
}
