import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Repository {
  name: String;
  description?: String;
  private: Boolean;
  language: String;
}

const LANGUAGE_COLORS: Record<string, string> = {
  'TypeScript':   '#3178c6',
  'JavaScript':   '#f1e05a',
  'Python':       '#3572A5',
  'Java':         '#b07219',
  'Kotlin':       '#A97BFF',
  'Swift':        '#F05138',
  'Go':           '#00ADD8',
  'Rust':         '#dea584',
  'C':            '#555555',
  'C++':          '#f34b7d',
  'C#':           '#178600',
  'Ruby':         '#701516',
  'PHP':          '#4F5D95',
  'Dart':         '#00B4AB',
  'HTML':         '#e34c26',
  'CSS':          '#563d7c',
  'Shell':        '#89e051',
  'Vue':          '#41b883',
  'Svelte':       '#ff3e00',
  'Scala':        '#c22d40',
  'R':            '#198CE7',
  'MATLAB':       '#e16737',
  'Jupyter Notebook': '#DA5B0B',
};


@Component({
  selector: 'app-repo-card',
  imports: [CommonModule],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css',
})
export class RepoCard {
  @Input() repository!: Repository;

  getLanguageColor(): string {
    const lang = this.repository?.language as string;
    if (!lang) return 'transparent';
    return LANGUAGE_COLORS[lang] ?? 'transparent';
  }
}
