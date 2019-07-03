import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
        [data]="this.chartData"
        [labels]="this.chartLabels"
        [chartType]="this.chartType"
        [options]="this.chartOptions">
      </canvas>
    </div>
  `,
  styles: []
})
export class DoughnutChartComponent implements OnInit {

  public chartLabels: Label[] = [ ];
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

    let chartDataObject = [];
    let keyNameArray: string[] = this.keyName.split('.');


    for (let ticket of this.data) {
      let keyValue:any = {};
      let counter:number;

      keyValue = ticket[keyNameArray[0]] || "Not Defined";
      if(keyNameArray.length > 0){
        for (let i = 1; i < keyNameArray.length; i++) {
          keyValue = keyValue[keyNameArray[i]]  || "Not Defined";
        }
      }

      counter = chartDataObject[keyValue] || 0;
      // Count
      chartDataObject[keyValue] = counter + 1;
    }

    this.chartLabels = Object.keys(chartDataObject);
    this.chartData = [ Object.values(chartDataObject) ];
  }

}
