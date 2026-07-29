import { Component, signal, Input, inject } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { CommonModule } from '@angular/common';
import { catchError, EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sidebar',
  imports: [CommonModule],
  templateUrl: './profile-sidebar.html',
  styleUrl: './profile-sidebar.css',
})
export class ProfileSidebar {

  constructor(private github: Github) { }

  user = signal<any>(null);

  private router = inject(Router)
  @Input() githubUsername: String = ''

  ngOnInit() {
    this.github.getUserData(this.githubUsername).pipe(catchError(error => {
      if (error.status === 404) {
        this.router.navigate(['404'])
      }
      return EMPTY;
    })
    ).subscribe((response) => {
      console.log(response)
      this.user.set(response)
    })
  }

}
