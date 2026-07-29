import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-radar-graph',
  imports: [NgxEchartsDirective],
  templateUrl: './radar-graph.html',
  styleUrl: './radar-graph.css',
})
export class RadarGraph {
  
  options: any = {
    backgroundColor: 'transparent',
    tooltip: { show: false },
    radar: {
      // shape: 'polygon',
      center: ['50%', '50%'],
      radius: '55%',
      startAngle: 90,
      splitNumber: 1,
      axisName: { color: '#57606a', fontSize: 12 },
      indicator: [
        { name: 'Code review',   max: 100 },
        { name: 'Issues',        max: 100 },
        { name: 'Pull requests', max: 100 },
        { name: 'Commits',       max: 100 },
      ],
      splitLine: { show: false},
      splitArea: { show: false },
      axisLine:  { lineStyle: { color: '#216e39', width: 1.5 } },
    },
    series: [{
      type: 'radar',
      data: [{
        value:     [0, 100, 25, 0],
        areaStyle: { color: 'rgba(72, 199, 116, 0.25)' },
        lineStyle: { color: '#216e39', width: 1.5 },
        itemStyle: { color: '#ffffff', borderColor: '#216e39', borderWidth: 1.5 },
        symbol:     'circle',
        symbolSize: 8,
      }],
    }],
  };
}
