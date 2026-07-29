import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Repository {
  name: String;
  description?: String;
  private : Boolean;
}

@Component({
  selector: 'app-repo-card',
  imports: [CommonModule],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css',
})
export class RepoCard {
   @Input() repository! : Repository;
  
}
