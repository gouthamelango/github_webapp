import { Component } from '@angular/core';

import { RepoCard } from '../../components/repo-card/repo-card';

@Component({
  selector: 'app-overview',
  imports: [RepoCard],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {}
