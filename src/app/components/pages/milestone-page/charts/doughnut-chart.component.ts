import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import { AppUtils } from './../../../../config/appUtils';

@Component({
  selector: 'app-doughnut-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
        [data]="this.chartData"
        [labels]="this.chartLabels"
        [chartType]="this.chartType"
        [options]="this.chartOptions"
        [colors]="this.colors"
        >
      </canvas>
    </div>
  `,
  styles: []
})
export class DoughnutChartComponent implements OnInit {
  u = new AppUtils();

  public chartLabels: Label[] = [ ];
  public colors = { };
  public chartData: MultiDataSet = [ [ ] ];
  public chartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
       display: true,
       position: "left",
       labels: {
         boxWidth: 8,
       }
    }
  };

  @Input() data:any = {};
  @Input() keyName: string = "";

  constructor() { }

  ngOnInit() {
    this.setChartData(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentData: SimpleChange = changes.data;
    if (typeof currentData.previousValue !== 'undefined'){
      this.setChartData(currentData.currentValue);
    }
  }

  setChartData(data){
    let chartDataObject = this.getChartData(this.keyName, data);
    this.chartLabels = Object.keys(chartDataObject);
    this.chartData = [ Object.values(chartDataObject) ];
    this.colors = [ { backgroundColor: (Object.keys(chartDataObject)).map((v)=> this.u.getColor(v)) } ];
  }

  getChartData (keyName, dataArray){
    let chartDataObject = [];
    let keyNameArray: string[] = keyName.split('.');
    for (let item of dataArray) {
      let keyValue:any = {};
      let counter:number;
      keyValue = item[keyNameArray[0]] || "Not Defined";
      if(keyNameArray.length > 0){
        for (let i = 1; i < keyNameArray.length; i++) {
          keyValue = keyValue[keyNameArray[i]]  || "Not Defined";
        }
      }
      counter = chartDataObject[keyValue] || 0;
      // Count
      chartDataObject[keyValue] = counter + 1;
    }
    return chartDataObject;
  }

}
