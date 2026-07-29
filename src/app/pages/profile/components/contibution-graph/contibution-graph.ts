import { Component, Input, OnChanges } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

@Component({
  selector: 'app-contibution-graph',
  imports: [NgxEchartsDirective],
  templateUrl: './contibution-graph.html',
  styleUrl: './contibution-graph.css',
})
export class ContibutionGraph implements OnChanges {

  @Input() contributions: Contribution[] = [];

  options: EChartsOption | null = null;

  ngOnChanges(): void {
    if (!this.contributions.length) return;

    const data: [string, number][] = this.contributions.map(c => [c.date, c.level]);

    const dates = this.contributions.map(c => c.date).sort();
    const rangeStart = dates[0];
    const rangeEnd = dates[dates.length - 1];

    this.options = {
      backgroundColor: 'transparent',

      tooltip: {
        formatter: (p: any) => {
          // level → approximate count label
          const entry = this.contributions.find(c => c.date === p.value[0]);
          const count = entry?.count ?? 0;
          const label = count === 0 ? 'No contributions' : `${count} contribution${count !== 1 ? 's' : ''}`;
          return `${label} on ${p.value[0]}`;
        }
      },

      visualMap: {
        min: 0,
        max: 4,
        calculable: false,
        orient: 'horizontal',
        right: 20,
        bottom: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemSymbol: 'roundRect',
        text: ['More', 'Less'],
        textStyle: {
          color: '#57606a',
          fontSize: 11,
        },
        inRange: {
          color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
        }
      },

      calendar: {
        top: 24,
        left: 40,
        right: 20,
        bottom: 36,
        cellSize: [14, 14],
        range: [rangeStart, rangeEnd],
        splitLine: { show: false },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#ffffff',
          borderRadius: 2,
        },
        yearLabel: { show: false },
        monthLabel: {
          nameMap: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          color: '#57606a',
          fontSize: 11,
        },
        dayLabel: {
          firstDay: 0,
          nameMap: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
          color: '#57606a',
          fontSize: 11,
        }
      },

      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data
        }
      ]
    };
  }
}
