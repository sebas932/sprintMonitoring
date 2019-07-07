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

  @Input() data:any = {};
  @Input() keyName: string = "";
  @Input() keyValue: string = "";
  @Input() title: string = "";

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
    let chartDataObject = this.u.getChartData(data, this.keyName, this.keyValue);
    let labelsArray = Object.keys(chartDataObject);
    let dataArray = Object.values(chartDataObject);
    let backgroundColor = labelsArray.map((v)=> this.u.getColor(v) );
    this.barChartLabels = labelsArray;
    this.barChartData = [
      { data: dataArray, backgroundColor: backgroundColor, hoverBackgroundColor: backgroundColor  }
    ];
  }


}
