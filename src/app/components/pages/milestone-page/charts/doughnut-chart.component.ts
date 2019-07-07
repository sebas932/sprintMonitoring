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

  @Input() data:any = {};
  @Input() keyName: string = "";
  @Input() keyValue: string = "";
  @Input() title: string = "";

  public chartLabels: Label[] = [ ];
  public colors = { };
  public chartData: MultiDataSet = [ [ ] ];
  public chartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {};

  constructor() { }

  ngOnInit() {
    this.setChartData(this.data);

    this.chartOptions = {
      maintainAspectRatio: false,
      legend: {
         display: true,
         position: "left",
         labels: {
           boxWidth: 8,
         }
      },
      title: {
        display: (this.title.length > 0),
        text: this.title
      },
      tooltips: {
        callbacks: {
          afterLabel: this.generateLabel
        }
      }
    };
  }

  generateLabel(tooltipItem:any, data:any){
    //get the concerned dataset
    var dataset = data.datasets[tooltipItem.datasetIndex];
    //calculate the total of this data set
    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });
    //get the current items value
    var currentValue = dataset.data[tooltipItem.index];
    //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
    var percentage = Math.floor(((currentValue/total) * 100)+0.5);

    return percentage + "%";
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentData: SimpleChange = changes.data;
    if (typeof currentData.previousValue !== 'undefined'){
      this.setChartData(currentData.currentValue);
    }
  }

  setChartData(data){
    let chartDataObject = this.u.getChartData(data, this.keyName, this.keyValue);
    this.chartLabels = Object.keys(chartDataObject);
    this.chartData = [ Object.values(chartDataObject) ];
    this.colors = [ { backgroundColor: (Object.keys(chartDataObject)).map((v)=> this.u.getColor(v)) } ];
  }


}
