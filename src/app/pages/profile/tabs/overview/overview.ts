import { Component, inject, signal } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { Graph } from '../../../../core/services/graph';
import { RepoCard } from '../../components/repo-card/repo-card';
import { CommonModule } from '@angular/common';
import { ContibutionGraph } from '../../components/contibution-graph/contibution-graph';
@Component({
  selector: 'app-overview',
  imports: [RepoCard, CommonModule, ContibutionGraph],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
    
  private github = inject(Github);
  private graph = inject(Graph)
  
  repositories = signal<any>(null);
  contributionData: { date: string; count: number; level: number }[] = [];

  ngOnInit() {
    this.github.getUseRepositories('shreeramk').subscribe((response)=>{
      this.repositories.set(response)
    })

    this.graph.getContributionGraph('shreeramk').subscribe((response: any) => {
      this.contributionData = response.contributions;
    });
    

  }
}
