import { Component, signal } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private router: Router, private route: ActivatedRoute) {}

  githubUsername = signal<string>('');
  selectedTab = signal<String>('overview')

  changeTab(tab: String) {
    this.selectedTab.set(tab);
    this.router.navigate([], {
      queryParams: { tab },
      queryParamsHandling: 'merge'
    });
  }

  ngOnInit() {
    this.readUsername();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.readUsername());
  }

  goHome() {
    this.router.navigate(['/']);
  }

  private readUsername() {
    const child = this.route.firstChild;
    if (child) {
      child.params.subscribe(params => {
        this.githubUsername.set(params['username'] ?? '');
      });
    }
  }
}
