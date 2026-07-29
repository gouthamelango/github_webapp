import { Component, Input, OnChanges, NgZone } from '@angular/core';
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
  @Input() selectedYear: String = ''

  options: EChartsOption | null = null;
  private chartInstance: any = null;

  constructor(private ngZone: NgZone) { }

  onChartInit(chart: any) {
    this.chartInstance = chart;
    if (this.options) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => this.chartInstance.resize(), 0);
      });
    }
  }

ngOnChanges(): void {
  const year = this.selectedYear || new Date().getFullYear();

  const rangeStart = `${year}-01-01`;
  const rangeEnd = `${year}-12-31`;

  // Create lookup map
  const contributionMap = new Map(
    this.contributions.map(c => [c.date, c])
  );

  // Generate all dates in the year
  const data: [string, number][] = [];

  let current = new Date(rangeStart);
  const end = new Date(rangeEnd);

  while (current <= end) {
    const date = current.toISOString().split('T')[0];

    const contribution = contributionMap.get(date);

    data.push([
      date,
      contribution ? contribution.level : 0
    ]);

    current.setDate(current.getDate() + 1);
  }

  this.options = {
    backgroundColor: 'transparent',

    tooltip: {
      formatter: (p: any) => {
        const entry = contributionMap.get(p.value[0]);

        const count = entry?.count ?? 0;
        const label =
          count === 0
            ? 'No contributions'
            : `${count} contribution${count !== 1 ? 's' : ''}`;

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
        fontSize: 11
      },
      inRange: {
        color: [
          '#ebedf0',
          '#9be9a8',
          '#40c463',
          '#30a14e',
          '#216e39'
        ]
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
        borderRadius: 2
      },
      yearLabel: { show: false },
      monthLabel: {
        nameMap: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        color: '#57606a',
        fontSize: 11
      },
      dayLabel: {
        firstDay: 0,
        nameMap: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
        color: '#57606a',
        fontSize: 11
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

  if (this.chartInstance) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.chartInstance.resize(), 0);
    });
  }
}}
