import { Component, inject, signal } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { RepoCard } from '../../components/repo-card/repo-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-overview',
  imports: [RepoCard, CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
    
  private github = inject(Github);
  
  repositories = signal<any>(null)

  ngOnInit(){
    this.github.getUseRepositories('shreeramk').subscribe((response)=>{
      this.repositories.set(response)
    })
  }
}
