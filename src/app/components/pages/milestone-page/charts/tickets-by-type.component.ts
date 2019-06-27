import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-tickets-by-type',
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
export class TicketsByTypeComponent implements OnInit {
  // Chart
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
    for (let ticket of this.data) {
      console.log(ticket);
      let key = ticket[this.keyName] || "Not Defined";
      let value = chartDataObject[key] || 0;
      // Count
      chartDataObject[key] = value + 1;
    }

    this.chartLabels = Object.keys(chartDataObject);
    this.chartData = [ Object.values(chartDataObject) ];
  }

}
