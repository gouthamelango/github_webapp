import { Component, inject, Input, signal } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { Graph } from '../../../../core/services/graph';
import { RepoCard } from '../../components/repo-card/repo-card';
import { CommonModule } from '@angular/common';
import { ContibutionGraph } from '../../components/contibution-graph/contibution-graph';
import { RadarGraph } from '../../components/radar-graph/radar-graph';

interface ActivityRepo {
  name: string;
  merged?: number;
  open?: number;
}

interface ActivityItem {
  icon: string;
  title: string;
  expanded: boolean;
  repos?: ActivityRepo[];
}

interface ActivityGroup {
  month: string;
  year: string;
  items: ActivityItem[];
}

@Component({
  selector: 'app-overview',
  imports: [RepoCard, CommonModule, ContibutionGraph, RadarGraph],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {

  private github = inject(Github);
  private graph = inject(Graph);

  @Input() githubUsername: String = '';
  repositories = signal<any>(null);
  contributionData = signal<{ date: string; count: number; level: number }[]>([]);
  contributionCount = signal<number>(0);
  years: string[] = [
    '2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'
  ];
  selectedYear: string = this.years[0];

  activityGroups: ActivityGroup[] = [
    {
      month: 'July',
      year: '2026',
      items: [
        {
          icon: 'bi-box-arrow-up',
          title: 'Created 56 commits in 11 repositories',
          expanded: false,
          repos: []
        },
        {
          icon: 'bi-git',
          title: 'Opened 29 pull requests in 5 repositories',
          expanded: true,
          repos: [
            { name: 'UptimeAI/uptime_webapp', merged: 16, open: 1 },
            { name: 'UptimeAI/uptime_ml', merged: 6 },
            { name: 'UptimeAI/uptime_scripts', merged: 4 },
            { name: 'UptimeAI/uptime_engine', merged: 1 },
            { name: 'UptimeAI/uptime_ml_encrypted', merged: 1 },
          ]
        }
      ]
    },
    {
      month: 'June',
      year: '2026',
      items: [
        {
          icon: 'bi-lock',
          title: '228 contributions in private repositories',
          expanded: false,
        }
      ]
    }
  ];

  ngOnInit() {
    this.github.getUseRepositories(this.githubUsername).subscribe((response: any) => {
      const transformedResponse = response.splice(0, 6);
      this.repositories.set(transformedResponse);
    });
    this.getContributionChart();
  }

  getContributionChart() {
    this.graph.getContributionGraph(this.githubUsername, this.selectedYear ? this.selectedYear : 'all').subscribe((response: any) => {
      this.contributionData.set(response.contributions);
      this.contributionCount.set(response.total[this.selectedYear] ?? 0)
    });
  }

  changeYear(year: string) {
    this.selectedYear = year;
    this.getContributionChart();
  }
}
