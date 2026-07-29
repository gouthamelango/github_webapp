import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  username = '';

  constructor(private router: Router) {}

  navigate() {
    const name = this.username.trim();
    if (name) {
      this.router.navigate([name]);
    }
  }
}
