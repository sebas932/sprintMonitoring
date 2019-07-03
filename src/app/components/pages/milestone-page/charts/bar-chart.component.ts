import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { AppUtils } from './../../../../config/appUtils';


@Component({
  selector: 'app-bar-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
        [datasets]="barChartData"
        [labels]="barChartLabels"
        [options]="barChartOptions"
        [plugins]="barChartPlugins"
        [legend]="barChartLegend"
        [chartType]="barChartType">
      </canvas>
    </div>
  `,
  styles: []
})
export class BarChartComponent implements OnInit {

  u = new AppUtils();

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
        xAxes: [{
            stacked: true

        }]
    }
  };
  public barChartLabels: Label[] = [ "No Data"];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
     { data: [ 0 ] }
   ];

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
    let labelsArray = Object.keys(chartDataObject);
    let dataArray = Object.values(chartDataObject);
    let backgroundColor = labelsArray.map((v)=> this.u.getColor(v) );
    this.barChartLabels = labelsArray;
    this.barChartData = [
      { data: dataArray, backgroundColor: backgroundColor, hoverBackgroundColor: backgroundColor  }
    ];
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
