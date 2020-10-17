import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  chartOptions = {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

    this.chartOptions = {

      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 60

      },
      exporting: {
        enable: false
      },
      subtitle: {
          text: null
      },
      series: this.data,
      title: {
        text: null
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      xAxis: {
        labels:{
          enable:false
        },
        startOnTick: false,
        endOnTick: false
      }
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
