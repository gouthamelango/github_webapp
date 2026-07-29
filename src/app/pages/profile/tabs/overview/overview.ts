import { Component, inject, Input, signal } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { Graph } from '../../../../core/services/graph';
import { RepoCard } from '../../components/repo-card/repo-card';
import { CommonModule } from '@angular/common';
import { ContibutionGraph } from '../../components/contibution-graph/contibution-graph';
import { RadarGraph } from '../../components/radar-graph/radar-graph';
@Component({
  selector: 'app-overview',
  imports: [RepoCard, CommonModule, ContibutionGraph, RadarGraph],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
    
  private github = inject(Github);
  private graph = inject(Graph)
  
  @Input() githubUsername:String = ''
  repositories = signal<any>(null);
  contributionData: { date: string; count: number; level: number }[] = [];

  ngOnInit() {
    this.github.getUseRepositories(this.githubUsername).subscribe((response: any)=>{
      const transformedResponse = response.splice(0,6)
      this.repositories.set(transformedResponse)
    })

    this.graph.getContributionGraph(this.githubUsername).subscribe((response: any) => {
      this.contributionData = response.contributions;
    });
    

  }
}
